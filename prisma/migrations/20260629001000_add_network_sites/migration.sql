CREATE TABLE "NetworkSite" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "connectedTo" TEXT NOT NULL,
  "distance" DOUBLE PRECISION NOT NULL,
  "distanceUnit" TEXT NOT NULL DEFAULT 'm',
  "networkSegment" TEXT,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "NetworkSite_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "NetworkSite_networkSegment_idx" ON "NetworkSite"("networkSegment");
CREATE INDEX "NetworkSite_createdAt_idx" ON "NetworkSite"("createdAt");
