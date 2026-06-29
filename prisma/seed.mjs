import 'dotenv/config'
import crypto from 'node:crypto'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../lib/generated/prisma/index.js'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})
const prisma = new PrismaClient({ adapter })

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, 'sha512')
    .toString('hex')
  return `pbkdf2$100000$${salt}$${hash}`
}

async function main() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? 'admin@fibersense.local'
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? 'Admin@12345'

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      fullName: process.env.SEED_ADMIN_NAME ?? 'FiberSense Administrator',
      role: 'ADMINISTRATOR',
      status: 'ACTIVE',
    },
    create: {
      fullName: process.env.SEED_ADMIN_NAME ?? 'FiberSense Administrator',
      email: adminEmail,
      password: hashPassword(adminPassword),
      role: 'ADMINISTRATOR',
      status: 'ACTIVE',
    },
  })

  const engineer = await prisma.user.upsert({
    where: { email: 'engineer@fibersense.local' },
    update: {},
    create: {
      fullName: 'Network Engineer',
      email: 'engineer@fibersense.local',
      password: hashPassword('Engineer@12345'),
      role: 'NETWORK_ENGINEER',
      status: 'ACTIVE',
    },
  })

  const operations = await prisma.user.upsert({
    where: { email: 'operations@fibersense.local' },
    update: {},
    create: {
      fullName: 'Operations Lead',
      email: 'operations@fibersense.local',
      password: hashPassword('Operations@12345'),
      role: 'OPERATIONS_STAFF',
      status: 'ACTIVE',
    },
  })

  const dataset = await prisma.dataset.create({
    data: {
      fileName: 'seed_network_metrics.csv',
      fileSize: 1280000,
      recordCount: 24,
      uploadedById: engineer.id,
    },
  })

  const samples = [
    ['Kigali Core C-01', -18.2, 0.8, 0.4, 0.32, 0.12, 4.8],
    ['Huye Ring S-04', -22.1, 2.7, 1.8, 0.48, 0.31, 18.2],
    ['Rubavu Spur W-08', -20.6, 1.9, 1.2, 0.42, 0.28, 31.5],
    ['Kigali-Musanze NE-12', -29.4, 5.6, 3.4, 0.76, 0.52, 42.1],
  ]

  for (const [networkSegment, signalStrength, signalLoss, errorRate, attenuation, reflectionLevel, distance] of samples) {
    await prisma.networkData.create({
      data: {
        networkSegment,
        signalStrength,
        signalLoss,
        errorRate,
        attenuation,
        reflectionLevel,
        distance,
        datasetId: dataset.id,
      },
    })
  }

  const criticalFault = await prisma.fault.create({
    data: {
      faultType: 'FIBER_CUT',
      severity: 'CRITICAL',
      status: 'ASSIGNED',
      confidenceScore: 97,
      networkSegment: 'Kigali-Musanze NE-12',
      notes: 'Seeded critical service-impacting event.',
      assignedToId: operations.id,
    },
  })

  await prisma.fault.create({
    data: {
      faultType: 'SIGNAL_ATTENUATION',
      severity: 'HIGH',
      status: 'NEW',
      confidenceScore: 89,
      networkSegment: 'Huye Ring S-04',
      notes: 'High attenuation above baseline.',
    },
  })

  await prisma.alert.create({
    data: {
      title: 'Fiber cut detected',
      description: 'Total signal loss detected on Kigali-Musanze NE-12.',
      level: 'EMERGENCY',
      status: 'OPEN',
      faultId: criticalFault.id,
    },
  })

  await prisma.prediction.createMany({
    data: [
      {
        networkSegment: 'Huye Ring S-04',
        riskLevel: 'CRITICAL',
        probability: 91,
        recommendation: 'Schedule immediate inspection and compare OTDR traces.',
      },
      {
        networkSegment: 'Kigali Core C-01',
        riskLevel: 'HIGH',
        probability: 82,
        recommendation: 'Inspect connector and splice points within 48 hours.',
      },
    ],
  })

  await prisma.signalGenerator.createMany({
    data: [
      {
        deviceName: 'OTDR Unit Alpha',
        serialNumber: 'OTDR-SEED-001',
        deviceType: 'OTDR_DEVICE',
        status: 'ONLINE',
        location: 'Kigali Core',
      },
      {
        deviceName: 'Power Meter Beta',
        serialNumber: 'OPM-SEED-001',
        deviceType: 'OPTICAL_POWER_METER',
        status: 'ONLINE',
        location: 'Huye Ring',
      },
    ],
    skipDuplicates: true,
  })

  if ((await prisma.networkSite.count()) === 0) {
    await prisma.networkSite.createMany({
      data: [
        {
          name: 'Kigali Core C-01',
          location: 'Kigali central exchange',
          connectedTo: 'Huye Ring S-04',
          distance: 200,
          distanceUnit: 'm',
          networkSegment: 'Kigali-Huye backbone',
          notes: 'Core aggregation site.',
        },
        {
          name: 'Huye Ring S-04',
          location: 'Huye south ring cabinet',
          connectedTo: 'Rubavu Spur W-08',
          distance: 1.8,
          distanceUnit: 'km',
          networkSegment: 'Southern ring',
          notes: 'Regional distribution cabinet.',
        },
        {
          name: 'Kigali-Musanze NE-12',
          location: 'North-east route marker 12',
          connectedTo: 'Kigali Core C-01',
          distance: 450,
          distanceUnit: 'm',
          networkSegment: 'Kigali-Musanze NE-12',
          notes: 'Fault-prone long-haul segment.',
        },
      ],
    })
  }

  await prisma.maintenanceTask.create({
    data: {
      title: 'Verify splice repair on NE-12',
      description: 'Dispatch field team and confirm continuity after repair.',
      priority: 'CRITICAL',
      status: 'ASSIGNED',
      faultId: criticalFault.id,
      assignedToId: operations.id,
      createdById: admin.id,
      dueAt: new Date(Date.now() + 6 * 60 * 60 * 1000),
    },
  })

  await prisma.supportTicket.create({
    data: {
      subject: 'Customer outage report on NE-12',
      description: 'Multiple customers reported loss of connectivity.',
      channel: 'PORTAL',
      priority: 'EMERGENCY',
      status: 'OPEN',
      faultId: criticalFault.id,
      createdById: admin.id,
    },
  })

  await prisma.auditLog.create({
    data: {
      userId: admin.id,
      action: 'DATABASE_SEEDED',
      details: 'Created initial admin account and FiberSense demo records.',
      ipAddress: 'local-seed',
    },
  })

  console.log(`Seed complete. Admin email: ${adminEmail}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
