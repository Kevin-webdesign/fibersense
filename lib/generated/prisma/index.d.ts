
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordResetOtp
 * 
 */
export type PasswordResetOtp = $Result.DefaultSelection<Prisma.$PasswordResetOtpPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>
/**
 * Model NetworkData
 * 
 */
export type NetworkData = $Result.DefaultSelection<Prisma.$NetworkDataPayload>
/**
 * Model NetworkSite
 * 
 */
export type NetworkSite = $Result.DefaultSelection<Prisma.$NetworkSitePayload>
/**
 * Model Fault
 * 
 */
export type Fault = $Result.DefaultSelection<Prisma.$FaultPayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model SignalGenerator
 * 
 */
export type SignalGenerator = $Result.DefaultSelection<Prisma.$SignalGeneratorPayload>
/**
 * Model MaintenanceTask
 * 
 */
export type MaintenanceTask = $Result.DefaultSelection<Prisma.$MaintenanceTaskPayload>
/**
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMINISTRATOR: 'ADMINISTRATOR',
  NETWORK_ENGINEER: 'NETWORK_ENGINEER',
  OPERATIONS_STAFF: 'OPERATIONS_STAFF',
  TECHNICAL_SUPPORT: 'TECHNICAL_SUPPORT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AccountStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const FaultType: {
  FIBER_CUT: 'FIBER_CUT',
  SIGNAL_LOSS: 'SIGNAL_LOSS',
  SIGNAL_ATTENUATION: 'SIGNAL_ATTENUATION',
  CONNECTOR_DAMAGE: 'CONNECTOR_DAMAGE',
  REFLECTION_FAULT: 'REFLECTION_FAULT',
  BENDING_LOSS: 'BENDING_LOSS',
  EQUIPMENT_FAILURE: 'EQUIPMENT_FAILURE'
};

export type FaultType = (typeof FaultType)[keyof typeof FaultType]


export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const FaultStatus: {
  NEW: 'NEW',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type FaultStatus = (typeof FaultStatus)[keyof typeof FaultStatus]


export const RiskLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const AlertLevel: {
  INFORMATION: 'INFORMATION',
  WARNING: 'WARNING',
  CRITICAL: 'CRITICAL',
  EMERGENCY: 'EMERGENCY'
};

export type AlertLevel = (typeof AlertLevel)[keyof typeof AlertLevel]


export const AlertStatus: {
  OPEN: 'OPEN',
  ACKNOWLEDGED: 'ACKNOWLEDGED',
  RESOLVED: 'RESOLVED'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]


export const DeviceType: {
  OPTICAL_SIGNAL_GENERATOR: 'OPTICAL_SIGNAL_GENERATOR',
  OTDR_DEVICE: 'OTDR_DEVICE',
  OPTICAL_POWER_METER: 'OPTICAL_POWER_METER',
  FIBER_TEST_EQUIPMENT: 'FIBER_TEST_EQUIPMENT'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const DeviceStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE',
  MAINTENANCE: 'MAINTENANCE'
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const TaskStatus: {
  NEW: 'NEW',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TicketChannel: {
  PHONE: 'PHONE',
  EMAIL: 'EMAIL',
  PORTAL: 'PORTAL',
  CHAT: 'CHAT'
};

export type TicketChannel = (typeof TicketChannel)[keyof typeof TicketChannel]


export const TicketStatus: {
  OPEN: 'OPEN',
  ACKNOWLEDGED: 'ACKNOWLEDGED',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type FaultType = $Enums.FaultType

export const FaultType: typeof $Enums.FaultType

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type FaultStatus = $Enums.FaultStatus

export const FaultStatus: typeof $Enums.FaultStatus

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type AlertLevel = $Enums.AlertLevel

export const AlertLevel: typeof $Enums.AlertLevel

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type DeviceStatus = $Enums.DeviceStatus

export const DeviceStatus: typeof $Enums.DeviceStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TicketChannel = $Enums.TicketChannel

export const TicketChannel: typeof $Enums.TicketChannel

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetOtp`: Exposes CRUD operations for the **PasswordResetOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetOtps
    * const passwordResetOtps = await prisma.passwordResetOtp.findMany()
    * ```
    */
  get passwordResetOtp(): Prisma.PasswordResetOtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networkData`: Exposes CRUD operations for the **NetworkData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkData
    * const networkData = await prisma.networkData.findMany()
    * ```
    */
  get networkData(): Prisma.NetworkDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networkSite`: Exposes CRUD operations for the **NetworkSite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkSites
    * const networkSites = await prisma.networkSite.findMany()
    * ```
    */
  get networkSite(): Prisma.NetworkSiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fault`: Exposes CRUD operations for the **Fault** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faults
    * const faults = await prisma.fault.findMany()
    * ```
    */
  get fault(): Prisma.FaultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalGenerator`: Exposes CRUD operations for the **SignalGenerator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignalGenerators
    * const signalGenerators = await prisma.signalGenerator.findMany()
    * ```
    */
  get signalGenerator(): Prisma.SignalGeneratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceTask`: Exposes CRUD operations for the **MaintenanceTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceTasks
    * const maintenanceTasks = await prisma.maintenanceTask.findMany()
    * ```
    */
  get maintenanceTask(): Prisma.MaintenanceTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PasswordResetOtp: 'PasswordResetOtp',
    Dataset: 'Dataset',
    NetworkData: 'NetworkData',
    NetworkSite: 'NetworkSite',
    Fault: 'Fault',
    Prediction: 'Prediction',
    Alert: 'Alert',
    SignalGenerator: 'SignalGenerator',
    MaintenanceTask: 'MaintenanceTask',
    SupportTicket: 'SupportTicket',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "passwordResetOtp" | "dataset" | "networkData" | "networkSite" | "fault" | "prediction" | "alert" | "signalGenerator" | "maintenanceTask" | "supportTicket" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetOtp: {
        payload: Prisma.$PasswordResetOtpPayload<ExtArgs>
        fields: Prisma.PasswordResetOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          findMany: {
            args: Prisma.PasswordResetOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>[]
          }
          create: {
            args: Prisma.PasswordResetOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          createMany: {
            args: Prisma.PasswordResetOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetOtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          update: {
            args: Prisma.PasswordResetOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetOtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetOtpPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetOtp>
          }
          groupBy: {
            args: Prisma.PasswordResetOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetOtpCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetOtpCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
          }
        }
      }
      NetworkData: {
        payload: Prisma.$NetworkDataPayload<ExtArgs>
        fields: Prisma.NetworkDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          findFirst: {
            args: Prisma.NetworkDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          findMany: {
            args: Prisma.NetworkDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>[]
          }
          create: {
            args: Prisma.NetworkDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          createMany: {
            args: Prisma.NetworkDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>[]
          }
          delete: {
            args: Prisma.NetworkDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          update: {
            args: Prisma.NetworkDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          deleteMany: {
            args: Prisma.NetworkDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NetworkDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>[]
          }
          upsert: {
            args: Prisma.NetworkDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkDataPayload>
          }
          aggregate: {
            args: Prisma.NetworkDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkData>
          }
          groupBy: {
            args: Prisma.NetworkDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkDataCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkDataCountAggregateOutputType> | number
          }
        }
      }
      NetworkSite: {
        payload: Prisma.$NetworkSitePayload<ExtArgs>
        fields: Prisma.NetworkSiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkSiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkSiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          findFirst: {
            args: Prisma.NetworkSiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkSiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          findMany: {
            args: Prisma.NetworkSiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>[]
          }
          create: {
            args: Prisma.NetworkSiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          createMany: {
            args: Prisma.NetworkSiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkSiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>[]
          }
          delete: {
            args: Prisma.NetworkSiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          update: {
            args: Prisma.NetworkSiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          deleteMany: {
            args: Prisma.NetworkSiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkSiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NetworkSiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>[]
          }
          upsert: {
            args: Prisma.NetworkSiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkSitePayload>
          }
          aggregate: {
            args: Prisma.NetworkSiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkSite>
          }
          groupBy: {
            args: Prisma.NetworkSiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkSiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkSiteCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkSiteCountAggregateOutputType> | number
          }
        }
      }
      Fault: {
        payload: Prisma.$FaultPayload<ExtArgs>
        fields: Prisma.FaultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          findFirst: {
            args: Prisma.FaultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          findMany: {
            args: Prisma.FaultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>[]
          }
          create: {
            args: Prisma.FaultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          createMany: {
            args: Prisma.FaultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>[]
          }
          delete: {
            args: Prisma.FaultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          update: {
            args: Prisma.FaultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          deleteMany: {
            args: Prisma.FaultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>[]
          }
          upsert: {
            args: Prisma.FaultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaultPayload>
          }
          aggregate: {
            args: Prisma.FaultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFault>
          }
          groupBy: {
            args: Prisma.FaultGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaultGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaultCountArgs<ExtArgs>
            result: $Utils.Optional<FaultCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      SignalGenerator: {
        payload: Prisma.$SignalGeneratorPayload<ExtArgs>
        fields: Prisma.SignalGeneratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalGeneratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalGeneratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          findFirst: {
            args: Prisma.SignalGeneratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalGeneratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          findMany: {
            args: Prisma.SignalGeneratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>[]
          }
          create: {
            args: Prisma.SignalGeneratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          createMany: {
            args: Prisma.SignalGeneratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalGeneratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>[]
          }
          delete: {
            args: Prisma.SignalGeneratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          update: {
            args: Prisma.SignalGeneratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          deleteMany: {
            args: Prisma.SignalGeneratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalGeneratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalGeneratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>[]
          }
          upsert: {
            args: Prisma.SignalGeneratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalGeneratorPayload>
          }
          aggregate: {
            args: Prisma.SignalGeneratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalGenerator>
          }
          groupBy: {
            args: Prisma.SignalGeneratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalGeneratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalGeneratorCountArgs<ExtArgs>
            result: $Utils.Optional<SignalGeneratorCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceTask: {
        payload: Prisma.$MaintenanceTaskPayload<ExtArgs>
        fields: Prisma.MaintenanceTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          findMany: {
            args: Prisma.MaintenanceTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>[]
          }
          create: {
            args: Prisma.MaintenanceTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          createMany: {
            args: Prisma.MaintenanceTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          update: {
            args: Prisma.MaintenanceTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTaskPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceTask>
          }
          groupBy: {
            args: Prisma.MaintenanceTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceTaskCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTaskCountAggregateOutputType> | number
          }
        }
      }
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    passwordResetOtp?: PasswordResetOtpOmit
    dataset?: DatasetOmit
    networkData?: NetworkDataOmit
    networkSite?: NetworkSiteOmit
    fault?: FaultOmit
    prediction?: PredictionOmit
    alert?: AlertOmit
    signalGenerator?: SignalGeneratorOmit
    maintenanceTask?: MaintenanceTaskOmit
    supportTicket?: SupportTicketOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    datasets: number
    auditLogs: number
    assignedFaults: number
    acknowledged: number
    assignedTasks: number
    createdTasks: number
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | UserCountOutputTypeCountDatasetsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    assignedFaults?: boolean | UserCountOutputTypeCountAssignedFaultsArgs
    acknowledged?: boolean | UserCountOutputTypeCountAcknowledgedArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDatasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedFaultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAcknowledgedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }


  /**
   * Count Type DatasetCountOutputType
   */

  export type DatasetCountOutputType = {
    networkData: number
  }

  export type DatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    networkData?: boolean | DatasetCountOutputTypeCountNetworkDataArgs
  }

  // Custom InputTypes
  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetCountOutputType
     */
    select?: DatasetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountNetworkDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkDataWhereInput
  }


  /**
   * Count Type NetworkDataCountOutputType
   */

  export type NetworkDataCountOutputType = {
    faults: number
  }

  export type NetworkDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faults?: boolean | NetworkDataCountOutputTypeCountFaultsArgs
  }

  // Custom InputTypes
  /**
   * NetworkDataCountOutputType without action
   */
  export type NetworkDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkDataCountOutputType
     */
    select?: NetworkDataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NetworkDataCountOutputType without action
   */
  export type NetworkDataCountOutputTypeCountFaultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaultWhereInput
  }


  /**
   * Count Type FaultCountOutputType
   */

  export type FaultCountOutputType = {
    alerts: number
    predictions: number
    tasks: number
    tickets: number
  }

  export type FaultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | FaultCountOutputTypeCountAlertsArgs
    predictions?: boolean | FaultCountOutputTypeCountPredictionsArgs
    tasks?: boolean | FaultCountOutputTypeCountTasksArgs
    tickets?: boolean | FaultCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * FaultCountOutputType without action
   */
  export type FaultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaultCountOutputType
     */
    select?: FaultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaultCountOutputType without action
   */
  export type FaultCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * FaultCountOutputType without action
   */
  export type FaultCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }

  /**
   * FaultCountOutputType without action
   */
  export type FaultCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTaskWhereInput
  }

  /**
   * FaultCountOutputType without action
   */
  export type FaultCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.AccountStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    assignedFaults?: boolean | User$assignedFaultsArgs<ExtArgs>
    acknowledged?: boolean | User$acknowledgedArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    assignedFaults?: boolean | User$assignedFaultsArgs<ExtArgs>
    acknowledged?: boolean | User$acknowledgedArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      datasets: Prisma.$DatasetPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      assignedFaults: Prisma.$FaultPayload<ExtArgs>[]
      acknowledged: Prisma.$AlertPayload<ExtArgs>[]
      assignedTasks: Prisma.$MaintenanceTaskPayload<ExtArgs>[]
      createdTasks: Prisma.$MaintenanceTaskPayload<ExtArgs>[]
      tickets: Prisma.$SupportTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.AccountStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datasets<T extends User$datasetsArgs<ExtArgs> = {}>(args?: Subset<T, User$datasetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedFaults<T extends User$assignedFaultsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedFaultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acknowledged<T extends User$acknowledgedArgs<ExtArgs> = {}>(args?: Subset<T, User$acknowledgedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'AccountStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.datasets
   */
  export type User$datasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    cursor?: DatasetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.assignedFaults
   */
  export type User$assignedFaultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    cursor?: FaultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaultScalarFieldEnum | FaultScalarFieldEnum[]
  }

  /**
   * User.acknowledged
   */
  export type User$acknowledgedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    where?: MaintenanceTaskWhereInput
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    cursor?: MaintenanceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    where?: MaintenanceTaskWhereInput
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    cursor?: MaintenanceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetOtp
   */

  export type AggregatePasswordResetOtp = {
    _count: PasswordResetOtpCountAggregateOutputType | null
    _avg: PasswordResetOtpAvgAggregateOutputType | null
    _sum: PasswordResetOtpSumAggregateOutputType | null
    _min: PasswordResetOtpMinAggregateOutputType | null
    _max: PasswordResetOtpMaxAggregateOutputType | null
  }

  export type PasswordResetOtpAvgAggregateOutputType = {
    attempts: number | null
  }

  export type PasswordResetOtpSumAggregateOutputType = {
    attempts: number | null
  }

  export type PasswordResetOtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    attempts: number | null
    expiresAt: Date | null
    verifiedAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetOtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    attempts: number | null
    expiresAt: Date | null
    verifiedAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetOtpCountAggregateOutputType = {
    id: number
    email: number
    otpHash: number
    attempts: number
    expiresAt: number
    verifiedAt: number
    consumedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetOtpAvgAggregateInputType = {
    attempts?: true
  }

  export type PasswordResetOtpSumAggregateInputType = {
    attempts?: true
  }

  export type PasswordResetOtpMinAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    attempts?: true
    expiresAt?: true
    verifiedAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type PasswordResetOtpMaxAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    attempts?: true
    expiresAt?: true
    verifiedAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type PasswordResetOtpCountAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    attempts?: true
    expiresAt?: true
    verifiedAt?: true
    consumedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetOtp to aggregate.
     */
    where?: PasswordResetOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetOtps to fetch.
     */
    orderBy?: PasswordResetOtpOrderByWithRelationInput | PasswordResetOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetOtps
    **/
    _count?: true | PasswordResetOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetOtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetOtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetOtpMaxAggregateInputType
  }

  export type GetPasswordResetOtpAggregateType<T extends PasswordResetOtpAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetOtp[P]>
      : GetScalarType<T[P], AggregatePasswordResetOtp[P]>
  }




  export type PasswordResetOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetOtpWhereInput
    orderBy?: PasswordResetOtpOrderByWithAggregationInput | PasswordResetOtpOrderByWithAggregationInput[]
    by: PasswordResetOtpScalarFieldEnum[] | PasswordResetOtpScalarFieldEnum
    having?: PasswordResetOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetOtpCountAggregateInputType | true
    _avg?: PasswordResetOtpAvgAggregateInputType
    _sum?: PasswordResetOtpSumAggregateInputType
    _min?: PasswordResetOtpMinAggregateInputType
    _max?: PasswordResetOtpMaxAggregateInputType
  }

  export type PasswordResetOtpGroupByOutputType = {
    id: string
    email: string
    otpHash: string
    attempts: number
    expiresAt: Date
    verifiedAt: Date | null
    consumedAt: Date | null
    createdAt: Date
    _count: PasswordResetOtpCountAggregateOutputType | null
    _avg: PasswordResetOtpAvgAggregateOutputType | null
    _sum: PasswordResetOtpSumAggregateOutputType | null
    _min: PasswordResetOtpMinAggregateOutputType | null
    _max: PasswordResetOtpMaxAggregateOutputType | null
  }

  type GetPasswordResetOtpGroupByPayload<T extends PasswordResetOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetOtpGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetOtpGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetOtp"]>

  export type PasswordResetOtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetOtp"]>

  export type PasswordResetOtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetOtp"]>

  export type PasswordResetOtpSelectScalar = {
    id?: boolean
    email?: boolean
    otpHash?: boolean
    attempts?: boolean
    expiresAt?: boolean
    verifiedAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otpHash" | "attempts" | "expiresAt" | "verifiedAt" | "consumedAt" | "createdAt", ExtArgs["result"]["passwordResetOtp"]>

  export type $PasswordResetOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetOtp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otpHash: string
      attempts: number
      expiresAt: Date
      verifiedAt: Date | null
      consumedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResetOtp"]>
    composites: {}
  }

  type PasswordResetOtpGetPayload<S extends boolean | null | undefined | PasswordResetOtpDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetOtpPayload, S>

  type PasswordResetOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetOtpCountAggregateInputType | true
    }

  export interface PasswordResetOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetOtp'], meta: { name: 'PasswordResetOtp' } }
    /**
     * Find zero or one PasswordResetOtp that matches the filter.
     * @param {PasswordResetOtpFindUniqueArgs} args - Arguments to find a PasswordResetOtp
     * @example
     * // Get one PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetOtpFindUniqueArgs>(args: SelectSubset<T, PasswordResetOtpFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetOtpFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetOtp
     * @example
     * // Get one PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpFindFirstArgs} args - Arguments to find a PasswordResetOtp
     * @example
     * // Get one PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetOtpFindFirstArgs>(args?: SelectSubset<T, PasswordResetOtpFindFirstArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpFindFirstOrThrowArgs} args - Arguments to find a PasswordResetOtp
     * @example
     * // Get one PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetOtps
     * const passwordResetOtps = await prisma.passwordResetOtp.findMany()
     * 
     * // Get first 10 PasswordResetOtps
     * const passwordResetOtps = await prisma.passwordResetOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetOtpWithIdOnly = await prisma.passwordResetOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetOtpFindManyArgs>(args?: SelectSubset<T, PasswordResetOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetOtp.
     * @param {PasswordResetOtpCreateArgs} args - Arguments to create a PasswordResetOtp.
     * @example
     * // Create one PasswordResetOtp
     * const PasswordResetOtp = await prisma.passwordResetOtp.create({
     *   data: {
     *     // ... data to create a PasswordResetOtp
     *   }
     * })
     * 
     */
    create<T extends PasswordResetOtpCreateArgs>(args: SelectSubset<T, PasswordResetOtpCreateArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetOtps.
     * @param {PasswordResetOtpCreateManyArgs} args - Arguments to create many PasswordResetOtps.
     * @example
     * // Create many PasswordResetOtps
     * const passwordResetOtp = await prisma.passwordResetOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetOtpCreateManyArgs>(args?: SelectSubset<T, PasswordResetOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetOtps and returns the data saved in the database.
     * @param {PasswordResetOtpCreateManyAndReturnArgs} args - Arguments to create many PasswordResetOtps.
     * @example
     * // Create many PasswordResetOtps
     * const passwordResetOtp = await prisma.passwordResetOtp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetOtps and only return the `id`
     * const passwordResetOtpWithIdOnly = await prisma.passwordResetOtp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetOtpCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetOtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetOtp.
     * @param {PasswordResetOtpDeleteArgs} args - Arguments to delete one PasswordResetOtp.
     * @example
     * // Delete one PasswordResetOtp
     * const PasswordResetOtp = await prisma.passwordResetOtp.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetOtp
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetOtpDeleteArgs>(args: SelectSubset<T, PasswordResetOtpDeleteArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetOtp.
     * @param {PasswordResetOtpUpdateArgs} args - Arguments to update one PasswordResetOtp.
     * @example
     * // Update one PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetOtpUpdateArgs>(args: SelectSubset<T, PasswordResetOtpUpdateArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetOtps.
     * @param {PasswordResetOtpDeleteManyArgs} args - Arguments to filter PasswordResetOtps to delete.
     * @example
     * // Delete a few PasswordResetOtps
     * const { count } = await prisma.passwordResetOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetOtpDeleteManyArgs>(args?: SelectSubset<T, PasswordResetOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetOtps
     * const passwordResetOtp = await prisma.passwordResetOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetOtpUpdateManyArgs>(args: SelectSubset<T, PasswordResetOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetOtps and returns the data updated in the database.
     * @param {PasswordResetOtpUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetOtps.
     * @example
     * // Update many PasswordResetOtps
     * const passwordResetOtp = await prisma.passwordResetOtp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetOtps and only return the `id`
     * const passwordResetOtpWithIdOnly = await prisma.passwordResetOtp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetOtpUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetOtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetOtp.
     * @param {PasswordResetOtpUpsertArgs} args - Arguments to update or create a PasswordResetOtp.
     * @example
     * // Update or create a PasswordResetOtp
     * const passwordResetOtp = await prisma.passwordResetOtp.upsert({
     *   create: {
     *     // ... data to create a PasswordResetOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetOtp we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetOtpUpsertArgs>(args: SelectSubset<T, PasswordResetOtpUpsertArgs<ExtArgs>>): Prisma__PasswordResetOtpClient<$Result.GetResult<Prisma.$PasswordResetOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpCountArgs} args - Arguments to filter PasswordResetOtps to count.
     * @example
     * // Count the number of PasswordResetOtps
     * const count = await prisma.passwordResetOtp.count({
     *   where: {
     *     // ... the filter for the PasswordResetOtps we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetOtpCountArgs>(
      args?: Subset<T, PasswordResetOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetOtpAggregateArgs>(args: Subset<T, PasswordResetOtpAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetOtpAggregateType<T>>

    /**
     * Group by PasswordResetOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetOtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetOtpGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetOtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetOtp model
   */
  readonly fields: PasswordResetOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetOtp model
   */
  interface PasswordResetOtpFieldRefs {
    readonly id: FieldRef<"PasswordResetOtp", 'String'>
    readonly email: FieldRef<"PasswordResetOtp", 'String'>
    readonly otpHash: FieldRef<"PasswordResetOtp", 'String'>
    readonly attempts: FieldRef<"PasswordResetOtp", 'Int'>
    readonly expiresAt: FieldRef<"PasswordResetOtp", 'DateTime'>
    readonly verifiedAt: FieldRef<"PasswordResetOtp", 'DateTime'>
    readonly consumedAt: FieldRef<"PasswordResetOtp", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetOtp findUnique
   */
  export type PasswordResetOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetOtp to fetch.
     */
    where: PasswordResetOtpWhereUniqueInput
  }

  /**
   * PasswordResetOtp findUniqueOrThrow
   */
  export type PasswordResetOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetOtp to fetch.
     */
    where: PasswordResetOtpWhereUniqueInput
  }

  /**
   * PasswordResetOtp findFirst
   */
  export type PasswordResetOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetOtp to fetch.
     */
    where?: PasswordResetOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetOtps to fetch.
     */
    orderBy?: PasswordResetOtpOrderByWithRelationInput | PasswordResetOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetOtps.
     */
    cursor?: PasswordResetOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetOtps.
     */
    distinct?: PasswordResetOtpScalarFieldEnum | PasswordResetOtpScalarFieldEnum[]
  }

  /**
   * PasswordResetOtp findFirstOrThrow
   */
  export type PasswordResetOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetOtp to fetch.
     */
    where?: PasswordResetOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetOtps to fetch.
     */
    orderBy?: PasswordResetOtpOrderByWithRelationInput | PasswordResetOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetOtps.
     */
    cursor?: PasswordResetOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetOtps.
     */
    distinct?: PasswordResetOtpScalarFieldEnum | PasswordResetOtpScalarFieldEnum[]
  }

  /**
   * PasswordResetOtp findMany
   */
  export type PasswordResetOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetOtps to fetch.
     */
    where?: PasswordResetOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetOtps to fetch.
     */
    orderBy?: PasswordResetOtpOrderByWithRelationInput | PasswordResetOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetOtps.
     */
    cursor?: PasswordResetOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetOtps.
     */
    distinct?: PasswordResetOtpScalarFieldEnum | PasswordResetOtpScalarFieldEnum[]
  }

  /**
   * PasswordResetOtp create
   */
  export type PasswordResetOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetOtp.
     */
    data: XOR<PasswordResetOtpCreateInput, PasswordResetOtpUncheckedCreateInput>
  }

  /**
   * PasswordResetOtp createMany
   */
  export type PasswordResetOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetOtps.
     */
    data: PasswordResetOtpCreateManyInput | PasswordResetOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetOtp createManyAndReturn
   */
  export type PasswordResetOtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetOtps.
     */
    data: PasswordResetOtpCreateManyInput | PasswordResetOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetOtp update
   */
  export type PasswordResetOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetOtp.
     */
    data: XOR<PasswordResetOtpUpdateInput, PasswordResetOtpUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetOtp to update.
     */
    where: PasswordResetOtpWhereUniqueInput
  }

  /**
   * PasswordResetOtp updateMany
   */
  export type PasswordResetOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetOtps.
     */
    data: XOR<PasswordResetOtpUpdateManyMutationInput, PasswordResetOtpUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetOtps to update
     */
    where?: PasswordResetOtpWhereInput
    /**
     * Limit how many PasswordResetOtps to update.
     */
    limit?: number
  }

  /**
   * PasswordResetOtp updateManyAndReturn
   */
  export type PasswordResetOtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetOtps.
     */
    data: XOR<PasswordResetOtpUpdateManyMutationInput, PasswordResetOtpUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetOtps to update
     */
    where?: PasswordResetOtpWhereInput
    /**
     * Limit how many PasswordResetOtps to update.
     */
    limit?: number
  }

  /**
   * PasswordResetOtp upsert
   */
  export type PasswordResetOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetOtp to update in case it exists.
     */
    where: PasswordResetOtpWhereUniqueInput
    /**
     * In case the PasswordResetOtp found by the `where` argument doesn't exist, create a new PasswordResetOtp with this data.
     */
    create: XOR<PasswordResetOtpCreateInput, PasswordResetOtpUncheckedCreateInput>
    /**
     * In case the PasswordResetOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetOtpUpdateInput, PasswordResetOtpUncheckedUpdateInput>
  }

  /**
   * PasswordResetOtp delete
   */
  export type PasswordResetOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetOtp to delete.
     */
    where: PasswordResetOtpWhereUniqueInput
  }

  /**
   * PasswordResetOtp deleteMany
   */
  export type PasswordResetOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetOtps to delete
     */
    where?: PasswordResetOtpWhereInput
    /**
     * Limit how many PasswordResetOtps to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetOtp without action
   */
  export type PasswordResetOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetOtp
     */
    select?: PasswordResetOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetOtp
     */
    omit?: PasswordResetOtpOmit<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetAvgAggregateOutputType = {
    fileSize: number | null
    recordCount: number | null
  }

  export type DatasetSumAggregateOutputType = {
    fileSize: number | null
    recordCount: number | null
  }

  export type DatasetMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    recordCount: number | null
    uploadedById: string | null
    uploadDate: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSize: number | null
    recordCount: number | null
    uploadedById: string | null
    uploadDate: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    fileName: number
    fileSize: number
    recordCount: number
    uploadedById: number
    uploadDate: number
    _all: number
  }


  export type DatasetAvgAggregateInputType = {
    fileSize?: true
    recordCount?: true
  }

  export type DatasetSumAggregateInputType = {
    fileSize?: true
    recordCount?: true
  }

  export type DatasetMinAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadedById?: true
    uploadDate?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadedById?: true
    uploadDate?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    fileName?: true
    fileSize?: true
    recordCount?: true
    uploadedById?: true
    uploadDate?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _avg?: DatasetAvgAggregateInputType
    _sum?: DatasetSumAggregateInputType
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: string
    fileName: string
    fileSize: number
    recordCount: number
    uploadedById: string
    uploadDate: Date
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadedById?: boolean
    uploadDate?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    networkData?: boolean | Dataset$networkDataArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadedById?: boolean
    uploadDate?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadedById?: boolean
    uploadDate?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileSize?: boolean
    recordCount?: boolean
    uploadedById?: boolean
    uploadDate?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileSize" | "recordCount" | "uploadedById" | "uploadDate", ExtArgs["result"]["dataset"]>
  export type DatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    networkData?: boolean | Dataset$networkDataArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      networkData: Prisma.$NetworkDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileSize: number
      recordCount: number
      uploadedById: string
      uploadDate: Date
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    networkData<T extends Dataset$networkDataArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$networkDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'String'>
    readonly fileName: FieldRef<"Dataset", 'String'>
    readonly fileSize: FieldRef<"Dataset", 'Int'>
    readonly recordCount: FieldRef<"Dataset", 'Int'>
    readonly uploadedById: FieldRef<"Dataset", 'String'>
    readonly uploadDate: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset.networkData
   */
  export type Dataset$networkDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    where?: NetworkDataWhereInput
    orderBy?: NetworkDataOrderByWithRelationInput | NetworkDataOrderByWithRelationInput[]
    cursor?: NetworkDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworkDataScalarFieldEnum | NetworkDataScalarFieldEnum[]
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
  }


  /**
   * Model NetworkData
   */

  export type AggregateNetworkData = {
    _count: NetworkDataCountAggregateOutputType | null
    _avg: NetworkDataAvgAggregateOutputType | null
    _sum: NetworkDataSumAggregateOutputType | null
    _min: NetworkDataMinAggregateOutputType | null
    _max: NetworkDataMaxAggregateOutputType | null
  }

  export type NetworkDataAvgAggregateOutputType = {
    signalStrength: number | null
    signalLoss: number | null
    errorRate: number | null
    attenuation: number | null
    reflectionLevel: number | null
    distance: number | null
  }

  export type NetworkDataSumAggregateOutputType = {
    signalStrength: number | null
    signalLoss: number | null
    errorRate: number | null
    attenuation: number | null
    reflectionLevel: number | null
    distance: number | null
  }

  export type NetworkDataMinAggregateOutputType = {
    id: string | null
    signalStrength: number | null
    signalLoss: number | null
    errorRate: number | null
    attenuation: number | null
    reflectionLevel: number | null
    distance: number | null
    networkSegment: string | null
    timestamp: Date | null
    datasetId: string | null
  }

  export type NetworkDataMaxAggregateOutputType = {
    id: string | null
    signalStrength: number | null
    signalLoss: number | null
    errorRate: number | null
    attenuation: number | null
    reflectionLevel: number | null
    distance: number | null
    networkSegment: string | null
    timestamp: Date | null
    datasetId: string | null
  }

  export type NetworkDataCountAggregateOutputType = {
    id: number
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: number
    timestamp: number
    datasetId: number
    _all: number
  }


  export type NetworkDataAvgAggregateInputType = {
    signalStrength?: true
    signalLoss?: true
    errorRate?: true
    attenuation?: true
    reflectionLevel?: true
    distance?: true
  }

  export type NetworkDataSumAggregateInputType = {
    signalStrength?: true
    signalLoss?: true
    errorRate?: true
    attenuation?: true
    reflectionLevel?: true
    distance?: true
  }

  export type NetworkDataMinAggregateInputType = {
    id?: true
    signalStrength?: true
    signalLoss?: true
    errorRate?: true
    attenuation?: true
    reflectionLevel?: true
    distance?: true
    networkSegment?: true
    timestamp?: true
    datasetId?: true
  }

  export type NetworkDataMaxAggregateInputType = {
    id?: true
    signalStrength?: true
    signalLoss?: true
    errorRate?: true
    attenuation?: true
    reflectionLevel?: true
    distance?: true
    networkSegment?: true
    timestamp?: true
    datasetId?: true
  }

  export type NetworkDataCountAggregateInputType = {
    id?: true
    signalStrength?: true
    signalLoss?: true
    errorRate?: true
    attenuation?: true
    reflectionLevel?: true
    distance?: true
    networkSegment?: true
    timestamp?: true
    datasetId?: true
    _all?: true
  }

  export type NetworkDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkData to aggregate.
     */
    where?: NetworkDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkData to fetch.
     */
    orderBy?: NetworkDataOrderByWithRelationInput | NetworkDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkData
    **/
    _count?: true | NetworkDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkDataMaxAggregateInputType
  }

  export type GetNetworkDataAggregateType<T extends NetworkDataAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkData[P]>
      : GetScalarType<T[P], AggregateNetworkData[P]>
  }




  export type NetworkDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkDataWhereInput
    orderBy?: NetworkDataOrderByWithAggregationInput | NetworkDataOrderByWithAggregationInput[]
    by: NetworkDataScalarFieldEnum[] | NetworkDataScalarFieldEnum
    having?: NetworkDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkDataCountAggregateInputType | true
    _avg?: NetworkDataAvgAggregateInputType
    _sum?: NetworkDataSumAggregateInputType
    _min?: NetworkDataMinAggregateInputType
    _max?: NetworkDataMaxAggregateInputType
  }

  export type NetworkDataGroupByOutputType = {
    id: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp: Date
    datasetId: string | null
    _count: NetworkDataCountAggregateOutputType | null
    _avg: NetworkDataAvgAggregateOutputType | null
    _sum: NetworkDataSumAggregateOutputType | null
    _min: NetworkDataMinAggregateOutputType | null
    _max: NetworkDataMaxAggregateOutputType | null
  }

  type GetNetworkDataGroupByPayload<T extends NetworkDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkDataGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkDataGroupByOutputType[P]>
        }
      >
    >


  export type NetworkDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalStrength?: boolean
    signalLoss?: boolean
    errorRate?: boolean
    attenuation?: boolean
    reflectionLevel?: boolean
    distance?: boolean
    networkSegment?: boolean
    timestamp?: boolean
    datasetId?: boolean
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
    faults?: boolean | NetworkData$faultsArgs<ExtArgs>
    _count?: boolean | NetworkDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkData"]>

  export type NetworkDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalStrength?: boolean
    signalLoss?: boolean
    errorRate?: boolean
    attenuation?: boolean
    reflectionLevel?: boolean
    distance?: boolean
    networkSegment?: boolean
    timestamp?: boolean
    datasetId?: boolean
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
  }, ExtArgs["result"]["networkData"]>

  export type NetworkDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signalStrength?: boolean
    signalLoss?: boolean
    errorRate?: boolean
    attenuation?: boolean
    reflectionLevel?: boolean
    distance?: boolean
    networkSegment?: boolean
    timestamp?: boolean
    datasetId?: boolean
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
  }, ExtArgs["result"]["networkData"]>

  export type NetworkDataSelectScalar = {
    id?: boolean
    signalStrength?: boolean
    signalLoss?: boolean
    errorRate?: boolean
    attenuation?: boolean
    reflectionLevel?: boolean
    distance?: boolean
    networkSegment?: boolean
    timestamp?: boolean
    datasetId?: boolean
  }

  export type NetworkDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "signalStrength" | "signalLoss" | "errorRate" | "attenuation" | "reflectionLevel" | "distance" | "networkSegment" | "timestamp" | "datasetId", ExtArgs["result"]["networkData"]>
  export type NetworkDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
    faults?: boolean | NetworkData$faultsArgs<ExtArgs>
    _count?: boolean | NetworkDataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NetworkDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
  }
  export type NetworkDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | NetworkData$datasetArgs<ExtArgs>
  }

  export type $NetworkDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkData"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs> | null
      faults: Prisma.$FaultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      signalStrength: number
      signalLoss: number
      errorRate: number
      attenuation: number
      reflectionLevel: number
      distance: number
      networkSegment: string
      timestamp: Date
      datasetId: string | null
    }, ExtArgs["result"]["networkData"]>
    composites: {}
  }

  type NetworkDataGetPayload<S extends boolean | null | undefined | NetworkDataDefaultArgs> = $Result.GetResult<Prisma.$NetworkDataPayload, S>

  type NetworkDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NetworkDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkDataCountAggregateInputType | true
    }

  export interface NetworkDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkData'], meta: { name: 'NetworkData' } }
    /**
     * Find zero or one NetworkData that matches the filter.
     * @param {NetworkDataFindUniqueArgs} args - Arguments to find a NetworkData
     * @example
     * // Get one NetworkData
     * const networkData = await prisma.networkData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkDataFindUniqueArgs>(args: SelectSubset<T, NetworkDataFindUniqueArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkDataFindUniqueOrThrowArgs} args - Arguments to find a NetworkData
     * @example
     * // Get one NetworkData
     * const networkData = await prisma.networkData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkDataFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataFindFirstArgs} args - Arguments to find a NetworkData
     * @example
     * // Get one NetworkData
     * const networkData = await prisma.networkData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkDataFindFirstArgs>(args?: SelectSubset<T, NetworkDataFindFirstArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataFindFirstOrThrowArgs} args - Arguments to find a NetworkData
     * @example
     * // Get one NetworkData
     * const networkData = await prisma.networkData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkDataFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkData
     * const networkData = await prisma.networkData.findMany()
     * 
     * // Get first 10 NetworkData
     * const networkData = await prisma.networkData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkDataWithIdOnly = await prisma.networkData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkDataFindManyArgs>(args?: SelectSubset<T, NetworkDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkData.
     * @param {NetworkDataCreateArgs} args - Arguments to create a NetworkData.
     * @example
     * // Create one NetworkData
     * const NetworkData = await prisma.networkData.create({
     *   data: {
     *     // ... data to create a NetworkData
     *   }
     * })
     * 
     */
    create<T extends NetworkDataCreateArgs>(args: SelectSubset<T, NetworkDataCreateArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkData.
     * @param {NetworkDataCreateManyArgs} args - Arguments to create many NetworkData.
     * @example
     * // Create many NetworkData
     * const networkData = await prisma.networkData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkDataCreateManyArgs>(args?: SelectSubset<T, NetworkDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkData and returns the data saved in the database.
     * @param {NetworkDataCreateManyAndReturnArgs} args - Arguments to create many NetworkData.
     * @example
     * // Create many NetworkData
     * const networkData = await prisma.networkData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkData and only return the `id`
     * const networkDataWithIdOnly = await prisma.networkData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkDataCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NetworkData.
     * @param {NetworkDataDeleteArgs} args - Arguments to delete one NetworkData.
     * @example
     * // Delete one NetworkData
     * const NetworkData = await prisma.networkData.delete({
     *   where: {
     *     // ... filter to delete one NetworkData
     *   }
     * })
     * 
     */
    delete<T extends NetworkDataDeleteArgs>(args: SelectSubset<T, NetworkDataDeleteArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkData.
     * @param {NetworkDataUpdateArgs} args - Arguments to update one NetworkData.
     * @example
     * // Update one NetworkData
     * const networkData = await prisma.networkData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkDataUpdateArgs>(args: SelectSubset<T, NetworkDataUpdateArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkData.
     * @param {NetworkDataDeleteManyArgs} args - Arguments to filter NetworkData to delete.
     * @example
     * // Delete a few NetworkData
     * const { count } = await prisma.networkData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkDataDeleteManyArgs>(args?: SelectSubset<T, NetworkDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkData
     * const networkData = await prisma.networkData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkDataUpdateManyArgs>(args: SelectSubset<T, NetworkDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkData and returns the data updated in the database.
     * @param {NetworkDataUpdateManyAndReturnArgs} args - Arguments to update many NetworkData.
     * @example
     * // Update many NetworkData
     * const networkData = await prisma.networkData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NetworkData and only return the `id`
     * const networkDataWithIdOnly = await prisma.networkData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NetworkDataUpdateManyAndReturnArgs>(args: SelectSubset<T, NetworkDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NetworkData.
     * @param {NetworkDataUpsertArgs} args - Arguments to update or create a NetworkData.
     * @example
     * // Update or create a NetworkData
     * const networkData = await prisma.networkData.upsert({
     *   create: {
     *     // ... data to create a NetworkData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkData we want to update
     *   }
     * })
     */
    upsert<T extends NetworkDataUpsertArgs>(args: SelectSubset<T, NetworkDataUpsertArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataCountArgs} args - Arguments to filter NetworkData to count.
     * @example
     * // Count the number of NetworkData
     * const count = await prisma.networkData.count({
     *   where: {
     *     // ... the filter for the NetworkData we want to count
     *   }
     * })
    **/
    count<T extends NetworkDataCountArgs>(
      args?: Subset<T, NetworkDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NetworkDataAggregateArgs>(args: Subset<T, NetworkDataAggregateArgs>): Prisma.PrismaPromise<GetNetworkDataAggregateType<T>>

    /**
     * Group by NetworkData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NetworkDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkDataGroupByArgs['orderBy'] }
        : { orderBy?: NetworkDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NetworkDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkData model
   */
  readonly fields: NetworkDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends NetworkData$datasetArgs<ExtArgs> = {}>(args?: Subset<T, NetworkData$datasetArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    faults<T extends NetworkData$faultsArgs<ExtArgs> = {}>(args?: Subset<T, NetworkData$faultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NetworkData model
   */
  interface NetworkDataFieldRefs {
    readonly id: FieldRef<"NetworkData", 'String'>
    readonly signalStrength: FieldRef<"NetworkData", 'Float'>
    readonly signalLoss: FieldRef<"NetworkData", 'Float'>
    readonly errorRate: FieldRef<"NetworkData", 'Float'>
    readonly attenuation: FieldRef<"NetworkData", 'Float'>
    readonly reflectionLevel: FieldRef<"NetworkData", 'Float'>
    readonly distance: FieldRef<"NetworkData", 'Float'>
    readonly networkSegment: FieldRef<"NetworkData", 'String'>
    readonly timestamp: FieldRef<"NetworkData", 'DateTime'>
    readonly datasetId: FieldRef<"NetworkData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NetworkData findUnique
   */
  export type NetworkDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter, which NetworkData to fetch.
     */
    where: NetworkDataWhereUniqueInput
  }

  /**
   * NetworkData findUniqueOrThrow
   */
  export type NetworkDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter, which NetworkData to fetch.
     */
    where: NetworkDataWhereUniqueInput
  }

  /**
   * NetworkData findFirst
   */
  export type NetworkDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter, which NetworkData to fetch.
     */
    where?: NetworkDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkData to fetch.
     */
    orderBy?: NetworkDataOrderByWithRelationInput | NetworkDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkData.
     */
    cursor?: NetworkDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkData.
     */
    distinct?: NetworkDataScalarFieldEnum | NetworkDataScalarFieldEnum[]
  }

  /**
   * NetworkData findFirstOrThrow
   */
  export type NetworkDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter, which NetworkData to fetch.
     */
    where?: NetworkDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkData to fetch.
     */
    orderBy?: NetworkDataOrderByWithRelationInput | NetworkDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkData.
     */
    cursor?: NetworkDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkData.
     */
    distinct?: NetworkDataScalarFieldEnum | NetworkDataScalarFieldEnum[]
  }

  /**
   * NetworkData findMany
   */
  export type NetworkDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter, which NetworkData to fetch.
     */
    where?: NetworkDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkData to fetch.
     */
    orderBy?: NetworkDataOrderByWithRelationInput | NetworkDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkData.
     */
    cursor?: NetworkDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkData.
     */
    distinct?: NetworkDataScalarFieldEnum | NetworkDataScalarFieldEnum[]
  }

  /**
   * NetworkData create
   */
  export type NetworkDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * The data needed to create a NetworkData.
     */
    data: XOR<NetworkDataCreateInput, NetworkDataUncheckedCreateInput>
  }

  /**
   * NetworkData createMany
   */
  export type NetworkDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkData.
     */
    data: NetworkDataCreateManyInput | NetworkDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkData createManyAndReturn
   */
  export type NetworkDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * The data used to create many NetworkData.
     */
    data: NetworkDataCreateManyInput | NetworkDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkData update
   */
  export type NetworkDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * The data needed to update a NetworkData.
     */
    data: XOR<NetworkDataUpdateInput, NetworkDataUncheckedUpdateInput>
    /**
     * Choose, which NetworkData to update.
     */
    where: NetworkDataWhereUniqueInput
  }

  /**
   * NetworkData updateMany
   */
  export type NetworkDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkData.
     */
    data: XOR<NetworkDataUpdateManyMutationInput, NetworkDataUncheckedUpdateManyInput>
    /**
     * Filter which NetworkData to update
     */
    where?: NetworkDataWhereInput
    /**
     * Limit how many NetworkData to update.
     */
    limit?: number
  }

  /**
   * NetworkData updateManyAndReturn
   */
  export type NetworkDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * The data used to update NetworkData.
     */
    data: XOR<NetworkDataUpdateManyMutationInput, NetworkDataUncheckedUpdateManyInput>
    /**
     * Filter which NetworkData to update
     */
    where?: NetworkDataWhereInput
    /**
     * Limit how many NetworkData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkData upsert
   */
  export type NetworkDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * The filter to search for the NetworkData to update in case it exists.
     */
    where: NetworkDataWhereUniqueInput
    /**
     * In case the NetworkData found by the `where` argument doesn't exist, create a new NetworkData with this data.
     */
    create: XOR<NetworkDataCreateInput, NetworkDataUncheckedCreateInput>
    /**
     * In case the NetworkData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkDataUpdateInput, NetworkDataUncheckedUpdateInput>
  }

  /**
   * NetworkData delete
   */
  export type NetworkDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    /**
     * Filter which NetworkData to delete.
     */
    where: NetworkDataWhereUniqueInput
  }

  /**
   * NetworkData deleteMany
   */
  export type NetworkDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkData to delete
     */
    where?: NetworkDataWhereInput
    /**
     * Limit how many NetworkData to delete.
     */
    limit?: number
  }

  /**
   * NetworkData.dataset
   */
  export type NetworkData$datasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    where?: DatasetWhereInput
  }

  /**
   * NetworkData.faults
   */
  export type NetworkData$faultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    cursor?: FaultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaultScalarFieldEnum | FaultScalarFieldEnum[]
  }

  /**
   * NetworkData without action
   */
  export type NetworkDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
  }


  /**
   * Model NetworkSite
   */

  export type AggregateNetworkSite = {
    _count: NetworkSiteCountAggregateOutputType | null
    _avg: NetworkSiteAvgAggregateOutputType | null
    _sum: NetworkSiteSumAggregateOutputType | null
    _min: NetworkSiteMinAggregateOutputType | null
    _max: NetworkSiteMaxAggregateOutputType | null
  }

  export type NetworkSiteAvgAggregateOutputType = {
    distance: number | null
  }

  export type NetworkSiteSumAggregateOutputType = {
    distance: number | null
  }

  export type NetworkSiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    connectedTo: string | null
    distance: number | null
    distanceUnit: string | null
    networkSegment: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NetworkSiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    connectedTo: string | null
    distance: number | null
    distanceUnit: string | null
    networkSegment: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NetworkSiteCountAggregateOutputType = {
    id: number
    name: number
    location: number
    connectedTo: number
    distance: number
    distanceUnit: number
    networkSegment: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NetworkSiteAvgAggregateInputType = {
    distance?: true
  }

  export type NetworkSiteSumAggregateInputType = {
    distance?: true
  }

  export type NetworkSiteMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    connectedTo?: true
    distance?: true
    distanceUnit?: true
    networkSegment?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NetworkSiteMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    connectedTo?: true
    distance?: true
    distanceUnit?: true
    networkSegment?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NetworkSiteCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    connectedTo?: true
    distance?: true
    distanceUnit?: true
    networkSegment?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NetworkSiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkSite to aggregate.
     */
    where?: NetworkSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkSites to fetch.
     */
    orderBy?: NetworkSiteOrderByWithRelationInput | NetworkSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkSites
    **/
    _count?: true | NetworkSiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkSiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkSiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkSiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkSiteMaxAggregateInputType
  }

  export type GetNetworkSiteAggregateType<T extends NetworkSiteAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkSite[P]>
      : GetScalarType<T[P], AggregateNetworkSite[P]>
  }




  export type NetworkSiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkSiteWhereInput
    orderBy?: NetworkSiteOrderByWithAggregationInput | NetworkSiteOrderByWithAggregationInput[]
    by: NetworkSiteScalarFieldEnum[] | NetworkSiteScalarFieldEnum
    having?: NetworkSiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkSiteCountAggregateInputType | true
    _avg?: NetworkSiteAvgAggregateInputType
    _sum?: NetworkSiteSumAggregateInputType
    _min?: NetworkSiteMinAggregateInputType
    _max?: NetworkSiteMaxAggregateInputType
  }

  export type NetworkSiteGroupByOutputType = {
    id: string
    name: string
    location: string
    connectedTo: string
    distance: number
    distanceUnit: string
    networkSegment: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: NetworkSiteCountAggregateOutputType | null
    _avg: NetworkSiteAvgAggregateOutputType | null
    _sum: NetworkSiteSumAggregateOutputType | null
    _min: NetworkSiteMinAggregateOutputType | null
    _max: NetworkSiteMaxAggregateOutputType | null
  }

  type GetNetworkSiteGroupByPayload<T extends NetworkSiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkSiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkSiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkSiteGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkSiteGroupByOutputType[P]>
        }
      >
    >


  export type NetworkSiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    connectedTo?: boolean
    distance?: boolean
    distanceUnit?: boolean
    networkSegment?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["networkSite"]>

  export type NetworkSiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    connectedTo?: boolean
    distance?: boolean
    distanceUnit?: boolean
    networkSegment?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["networkSite"]>

  export type NetworkSiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    connectedTo?: boolean
    distance?: boolean
    distanceUnit?: boolean
    networkSegment?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["networkSite"]>

  export type NetworkSiteSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    connectedTo?: boolean
    distance?: boolean
    distanceUnit?: boolean
    networkSegment?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NetworkSiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "connectedTo" | "distance" | "distanceUnit" | "networkSegment" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["networkSite"]>

  export type $NetworkSitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkSite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      connectedTo: string
      distance: number
      distanceUnit: string
      networkSegment: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["networkSite"]>
    composites: {}
  }

  type NetworkSiteGetPayload<S extends boolean | null | undefined | NetworkSiteDefaultArgs> = $Result.GetResult<Prisma.$NetworkSitePayload, S>

  type NetworkSiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NetworkSiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkSiteCountAggregateInputType | true
    }

  export interface NetworkSiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkSite'], meta: { name: 'NetworkSite' } }
    /**
     * Find zero or one NetworkSite that matches the filter.
     * @param {NetworkSiteFindUniqueArgs} args - Arguments to find a NetworkSite
     * @example
     * // Get one NetworkSite
     * const networkSite = await prisma.networkSite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkSiteFindUniqueArgs>(args: SelectSubset<T, NetworkSiteFindUniqueArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkSite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkSiteFindUniqueOrThrowArgs} args - Arguments to find a NetworkSite
     * @example
     * // Get one NetworkSite
     * const networkSite = await prisma.networkSite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkSiteFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkSiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkSite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteFindFirstArgs} args - Arguments to find a NetworkSite
     * @example
     * // Get one NetworkSite
     * const networkSite = await prisma.networkSite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkSiteFindFirstArgs>(args?: SelectSubset<T, NetworkSiteFindFirstArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkSite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteFindFirstOrThrowArgs} args - Arguments to find a NetworkSite
     * @example
     * // Get one NetworkSite
     * const networkSite = await prisma.networkSite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkSiteFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkSiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkSites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkSites
     * const networkSites = await prisma.networkSite.findMany()
     * 
     * // Get first 10 NetworkSites
     * const networkSites = await prisma.networkSite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkSiteWithIdOnly = await prisma.networkSite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkSiteFindManyArgs>(args?: SelectSubset<T, NetworkSiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkSite.
     * @param {NetworkSiteCreateArgs} args - Arguments to create a NetworkSite.
     * @example
     * // Create one NetworkSite
     * const NetworkSite = await prisma.networkSite.create({
     *   data: {
     *     // ... data to create a NetworkSite
     *   }
     * })
     * 
     */
    create<T extends NetworkSiteCreateArgs>(args: SelectSubset<T, NetworkSiteCreateArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkSites.
     * @param {NetworkSiteCreateManyArgs} args - Arguments to create many NetworkSites.
     * @example
     * // Create many NetworkSites
     * const networkSite = await prisma.networkSite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkSiteCreateManyArgs>(args?: SelectSubset<T, NetworkSiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkSites and returns the data saved in the database.
     * @param {NetworkSiteCreateManyAndReturnArgs} args - Arguments to create many NetworkSites.
     * @example
     * // Create many NetworkSites
     * const networkSite = await prisma.networkSite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkSites and only return the `id`
     * const networkSiteWithIdOnly = await prisma.networkSite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkSiteCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkSiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NetworkSite.
     * @param {NetworkSiteDeleteArgs} args - Arguments to delete one NetworkSite.
     * @example
     * // Delete one NetworkSite
     * const NetworkSite = await prisma.networkSite.delete({
     *   where: {
     *     // ... filter to delete one NetworkSite
     *   }
     * })
     * 
     */
    delete<T extends NetworkSiteDeleteArgs>(args: SelectSubset<T, NetworkSiteDeleteArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkSite.
     * @param {NetworkSiteUpdateArgs} args - Arguments to update one NetworkSite.
     * @example
     * // Update one NetworkSite
     * const networkSite = await prisma.networkSite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkSiteUpdateArgs>(args: SelectSubset<T, NetworkSiteUpdateArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkSites.
     * @param {NetworkSiteDeleteManyArgs} args - Arguments to filter NetworkSites to delete.
     * @example
     * // Delete a few NetworkSites
     * const { count } = await prisma.networkSite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkSiteDeleteManyArgs>(args?: SelectSubset<T, NetworkSiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkSites
     * const networkSite = await prisma.networkSite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkSiteUpdateManyArgs>(args: SelectSubset<T, NetworkSiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkSites and returns the data updated in the database.
     * @param {NetworkSiteUpdateManyAndReturnArgs} args - Arguments to update many NetworkSites.
     * @example
     * // Update many NetworkSites
     * const networkSite = await prisma.networkSite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NetworkSites and only return the `id`
     * const networkSiteWithIdOnly = await prisma.networkSite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NetworkSiteUpdateManyAndReturnArgs>(args: SelectSubset<T, NetworkSiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NetworkSite.
     * @param {NetworkSiteUpsertArgs} args - Arguments to update or create a NetworkSite.
     * @example
     * // Update or create a NetworkSite
     * const networkSite = await prisma.networkSite.upsert({
     *   create: {
     *     // ... data to create a NetworkSite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkSite we want to update
     *   }
     * })
     */
    upsert<T extends NetworkSiteUpsertArgs>(args: SelectSubset<T, NetworkSiteUpsertArgs<ExtArgs>>): Prisma__NetworkSiteClient<$Result.GetResult<Prisma.$NetworkSitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkSites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteCountArgs} args - Arguments to filter NetworkSites to count.
     * @example
     * // Count the number of NetworkSites
     * const count = await prisma.networkSite.count({
     *   where: {
     *     // ... the filter for the NetworkSites we want to count
     *   }
     * })
    **/
    count<T extends NetworkSiteCountArgs>(
      args?: Subset<T, NetworkSiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkSiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NetworkSiteAggregateArgs>(args: Subset<T, NetworkSiteAggregateArgs>): Prisma.PrismaPromise<GetNetworkSiteAggregateType<T>>

    /**
     * Group by NetworkSite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkSiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NetworkSiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkSiteGroupByArgs['orderBy'] }
        : { orderBy?: NetworkSiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NetworkSiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkSite model
   */
  readonly fields: NetworkSiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkSite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkSiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NetworkSite model
   */
  interface NetworkSiteFieldRefs {
    readonly id: FieldRef<"NetworkSite", 'String'>
    readonly name: FieldRef<"NetworkSite", 'String'>
    readonly location: FieldRef<"NetworkSite", 'String'>
    readonly connectedTo: FieldRef<"NetworkSite", 'String'>
    readonly distance: FieldRef<"NetworkSite", 'Float'>
    readonly distanceUnit: FieldRef<"NetworkSite", 'String'>
    readonly networkSegment: FieldRef<"NetworkSite", 'String'>
    readonly notes: FieldRef<"NetworkSite", 'String'>
    readonly createdAt: FieldRef<"NetworkSite", 'DateTime'>
    readonly updatedAt: FieldRef<"NetworkSite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkSite findUnique
   */
  export type NetworkSiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter, which NetworkSite to fetch.
     */
    where: NetworkSiteWhereUniqueInput
  }

  /**
   * NetworkSite findUniqueOrThrow
   */
  export type NetworkSiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter, which NetworkSite to fetch.
     */
    where: NetworkSiteWhereUniqueInput
  }

  /**
   * NetworkSite findFirst
   */
  export type NetworkSiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter, which NetworkSite to fetch.
     */
    where?: NetworkSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkSites to fetch.
     */
    orderBy?: NetworkSiteOrderByWithRelationInput | NetworkSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkSites.
     */
    cursor?: NetworkSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkSites.
     */
    distinct?: NetworkSiteScalarFieldEnum | NetworkSiteScalarFieldEnum[]
  }

  /**
   * NetworkSite findFirstOrThrow
   */
  export type NetworkSiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter, which NetworkSite to fetch.
     */
    where?: NetworkSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkSites to fetch.
     */
    orderBy?: NetworkSiteOrderByWithRelationInput | NetworkSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkSites.
     */
    cursor?: NetworkSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkSites.
     */
    distinct?: NetworkSiteScalarFieldEnum | NetworkSiteScalarFieldEnum[]
  }

  /**
   * NetworkSite findMany
   */
  export type NetworkSiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter, which NetworkSites to fetch.
     */
    where?: NetworkSiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkSites to fetch.
     */
    orderBy?: NetworkSiteOrderByWithRelationInput | NetworkSiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkSites.
     */
    cursor?: NetworkSiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkSites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkSites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkSites.
     */
    distinct?: NetworkSiteScalarFieldEnum | NetworkSiteScalarFieldEnum[]
  }

  /**
   * NetworkSite create
   */
  export type NetworkSiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * The data needed to create a NetworkSite.
     */
    data: XOR<NetworkSiteCreateInput, NetworkSiteUncheckedCreateInput>
  }

  /**
   * NetworkSite createMany
   */
  export type NetworkSiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkSites.
     */
    data: NetworkSiteCreateManyInput | NetworkSiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkSite createManyAndReturn
   */
  export type NetworkSiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * The data used to create many NetworkSites.
     */
    data: NetworkSiteCreateManyInput | NetworkSiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkSite update
   */
  export type NetworkSiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * The data needed to update a NetworkSite.
     */
    data: XOR<NetworkSiteUpdateInput, NetworkSiteUncheckedUpdateInput>
    /**
     * Choose, which NetworkSite to update.
     */
    where: NetworkSiteWhereUniqueInput
  }

  /**
   * NetworkSite updateMany
   */
  export type NetworkSiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkSites.
     */
    data: XOR<NetworkSiteUpdateManyMutationInput, NetworkSiteUncheckedUpdateManyInput>
    /**
     * Filter which NetworkSites to update
     */
    where?: NetworkSiteWhereInput
    /**
     * Limit how many NetworkSites to update.
     */
    limit?: number
  }

  /**
   * NetworkSite updateManyAndReturn
   */
  export type NetworkSiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * The data used to update NetworkSites.
     */
    data: XOR<NetworkSiteUpdateManyMutationInput, NetworkSiteUncheckedUpdateManyInput>
    /**
     * Filter which NetworkSites to update
     */
    where?: NetworkSiteWhereInput
    /**
     * Limit how many NetworkSites to update.
     */
    limit?: number
  }

  /**
   * NetworkSite upsert
   */
  export type NetworkSiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * The filter to search for the NetworkSite to update in case it exists.
     */
    where: NetworkSiteWhereUniqueInput
    /**
     * In case the NetworkSite found by the `where` argument doesn't exist, create a new NetworkSite with this data.
     */
    create: XOR<NetworkSiteCreateInput, NetworkSiteUncheckedCreateInput>
    /**
     * In case the NetworkSite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkSiteUpdateInput, NetworkSiteUncheckedUpdateInput>
  }

  /**
   * NetworkSite delete
   */
  export type NetworkSiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
    /**
     * Filter which NetworkSite to delete.
     */
    where: NetworkSiteWhereUniqueInput
  }

  /**
   * NetworkSite deleteMany
   */
  export type NetworkSiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkSites to delete
     */
    where?: NetworkSiteWhereInput
    /**
     * Limit how many NetworkSites to delete.
     */
    limit?: number
  }

  /**
   * NetworkSite without action
   */
  export type NetworkSiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkSite
     */
    select?: NetworkSiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkSite
     */
    omit?: NetworkSiteOmit<ExtArgs> | null
  }


  /**
   * Model Fault
   */

  export type AggregateFault = {
    _count: FaultCountAggregateOutputType | null
    _avg: FaultAvgAggregateOutputType | null
    _sum: FaultSumAggregateOutputType | null
    _min: FaultMinAggregateOutputType | null
    _max: FaultMaxAggregateOutputType | null
  }

  export type FaultAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type FaultSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type FaultMinAggregateOutputType = {
    id: string | null
    faultType: $Enums.FaultType | null
    severity: $Enums.Severity | null
    status: $Enums.FaultStatus | null
    confidenceScore: number | null
    networkSegment: string | null
    location: string | null
    notes: string | null
    detectedAt: Date | null
    resolvedAt: Date | null
    assignedToId: string | null
    networkDataId: string | null
  }

  export type FaultMaxAggregateOutputType = {
    id: string | null
    faultType: $Enums.FaultType | null
    severity: $Enums.Severity | null
    status: $Enums.FaultStatus | null
    confidenceScore: number | null
    networkSegment: string | null
    location: string | null
    notes: string | null
    detectedAt: Date | null
    resolvedAt: Date | null
    assignedToId: string | null
    networkDataId: string | null
  }

  export type FaultCountAggregateOutputType = {
    id: number
    faultType: number
    severity: number
    status: number
    confidenceScore: number
    networkSegment: number
    location: number
    notes: number
    detectedAt: number
    resolvedAt: number
    assignedToId: number
    networkDataId: number
    _all: number
  }


  export type FaultAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type FaultSumAggregateInputType = {
    confidenceScore?: true
  }

  export type FaultMinAggregateInputType = {
    id?: true
    faultType?: true
    severity?: true
    status?: true
    confidenceScore?: true
    networkSegment?: true
    location?: true
    notes?: true
    detectedAt?: true
    resolvedAt?: true
    assignedToId?: true
    networkDataId?: true
  }

  export type FaultMaxAggregateInputType = {
    id?: true
    faultType?: true
    severity?: true
    status?: true
    confidenceScore?: true
    networkSegment?: true
    location?: true
    notes?: true
    detectedAt?: true
    resolvedAt?: true
    assignedToId?: true
    networkDataId?: true
  }

  export type FaultCountAggregateInputType = {
    id?: true
    faultType?: true
    severity?: true
    status?: true
    confidenceScore?: true
    networkSegment?: true
    location?: true
    notes?: true
    detectedAt?: true
    resolvedAt?: true
    assignedToId?: true
    networkDataId?: true
    _all?: true
  }

  export type FaultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fault to aggregate.
     */
    where?: FaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faults to fetch.
     */
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faults
    **/
    _count?: true | FaultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaultMaxAggregateInputType
  }

  export type GetFaultAggregateType<T extends FaultAggregateArgs> = {
        [P in keyof T & keyof AggregateFault]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFault[P]>
      : GetScalarType<T[P], AggregateFault[P]>
  }




  export type FaultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaultWhereInput
    orderBy?: FaultOrderByWithAggregationInput | FaultOrderByWithAggregationInput[]
    by: FaultScalarFieldEnum[] | FaultScalarFieldEnum
    having?: FaultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaultCountAggregateInputType | true
    _avg?: FaultAvgAggregateInputType
    _sum?: FaultSumAggregateInputType
    _min?: FaultMinAggregateInputType
    _max?: FaultMaxAggregateInputType
  }

  export type FaultGroupByOutputType = {
    id: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location: string | null
    notes: string | null
    detectedAt: Date
    resolvedAt: Date | null
    assignedToId: string | null
    networkDataId: string | null
    _count: FaultCountAggregateOutputType | null
    _avg: FaultAvgAggregateOutputType | null
    _sum: FaultSumAggregateOutputType | null
    _min: FaultMinAggregateOutputType | null
    _max: FaultMaxAggregateOutputType | null
  }

  type GetFaultGroupByPayload<T extends FaultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaultGroupByOutputType[P]>
            : GetScalarType<T[P], FaultGroupByOutputType[P]>
        }
      >
    >


  export type FaultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    faultType?: boolean
    severity?: boolean
    status?: boolean
    confidenceScore?: boolean
    networkSegment?: boolean
    location?: boolean
    notes?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    assignedToId?: boolean
    networkDataId?: boolean
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
    alerts?: boolean | Fault$alertsArgs<ExtArgs>
    predictions?: boolean | Fault$predictionsArgs<ExtArgs>
    tasks?: boolean | Fault$tasksArgs<ExtArgs>
    tickets?: boolean | Fault$ticketsArgs<ExtArgs>
    _count?: boolean | FaultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fault"]>

  export type FaultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    faultType?: boolean
    severity?: boolean
    status?: boolean
    confidenceScore?: boolean
    networkSegment?: boolean
    location?: boolean
    notes?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    assignedToId?: boolean
    networkDataId?: boolean
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
  }, ExtArgs["result"]["fault"]>

  export type FaultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    faultType?: boolean
    severity?: boolean
    status?: boolean
    confidenceScore?: boolean
    networkSegment?: boolean
    location?: boolean
    notes?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    assignedToId?: boolean
    networkDataId?: boolean
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
  }, ExtArgs["result"]["fault"]>

  export type FaultSelectScalar = {
    id?: boolean
    faultType?: boolean
    severity?: boolean
    status?: boolean
    confidenceScore?: boolean
    networkSegment?: boolean
    location?: boolean
    notes?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    assignedToId?: boolean
    networkDataId?: boolean
  }

  export type FaultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "faultType" | "severity" | "status" | "confidenceScore" | "networkSegment" | "location" | "notes" | "detectedAt" | "resolvedAt" | "assignedToId" | "networkDataId", ExtArgs["result"]["fault"]>
  export type FaultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
    alerts?: boolean | Fault$alertsArgs<ExtArgs>
    predictions?: boolean | Fault$predictionsArgs<ExtArgs>
    tasks?: boolean | Fault$tasksArgs<ExtArgs>
    tickets?: boolean | Fault$ticketsArgs<ExtArgs>
    _count?: boolean | FaultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
  }
  export type FaultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Fault$assignedToArgs<ExtArgs>
    networkData?: boolean | Fault$networkDataArgs<ExtArgs>
  }

  export type $FaultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fault"
    objects: {
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      networkData: Prisma.$NetworkDataPayload<ExtArgs> | null
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
      tasks: Prisma.$MaintenanceTaskPayload<ExtArgs>[]
      tickets: Prisma.$SupportTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      faultType: $Enums.FaultType
      severity: $Enums.Severity
      status: $Enums.FaultStatus
      confidenceScore: number
      networkSegment: string
      location: string | null
      notes: string | null
      detectedAt: Date
      resolvedAt: Date | null
      assignedToId: string | null
      networkDataId: string | null
    }, ExtArgs["result"]["fault"]>
    composites: {}
  }

  type FaultGetPayload<S extends boolean | null | undefined | FaultDefaultArgs> = $Result.GetResult<Prisma.$FaultPayload, S>

  type FaultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaultCountAggregateInputType | true
    }

  export interface FaultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fault'], meta: { name: 'Fault' } }
    /**
     * Find zero or one Fault that matches the filter.
     * @param {FaultFindUniqueArgs} args - Arguments to find a Fault
     * @example
     * // Get one Fault
     * const fault = await prisma.fault.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaultFindUniqueArgs>(args: SelectSubset<T, FaultFindUniqueArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fault that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaultFindUniqueOrThrowArgs} args - Arguments to find a Fault
     * @example
     * // Get one Fault
     * const fault = await prisma.fault.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaultFindUniqueOrThrowArgs>(args: SelectSubset<T, FaultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fault that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultFindFirstArgs} args - Arguments to find a Fault
     * @example
     * // Get one Fault
     * const fault = await prisma.fault.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaultFindFirstArgs>(args?: SelectSubset<T, FaultFindFirstArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fault that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultFindFirstOrThrowArgs} args - Arguments to find a Fault
     * @example
     * // Get one Fault
     * const fault = await prisma.fault.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaultFindFirstOrThrowArgs>(args?: SelectSubset<T, FaultFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faults
     * const faults = await prisma.fault.findMany()
     * 
     * // Get first 10 Faults
     * const faults = await prisma.fault.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faultWithIdOnly = await prisma.fault.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaultFindManyArgs>(args?: SelectSubset<T, FaultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fault.
     * @param {FaultCreateArgs} args - Arguments to create a Fault.
     * @example
     * // Create one Fault
     * const Fault = await prisma.fault.create({
     *   data: {
     *     // ... data to create a Fault
     *   }
     * })
     * 
     */
    create<T extends FaultCreateArgs>(args: SelectSubset<T, FaultCreateArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faults.
     * @param {FaultCreateManyArgs} args - Arguments to create many Faults.
     * @example
     * // Create many Faults
     * const fault = await prisma.fault.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaultCreateManyArgs>(args?: SelectSubset<T, FaultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faults and returns the data saved in the database.
     * @param {FaultCreateManyAndReturnArgs} args - Arguments to create many Faults.
     * @example
     * // Create many Faults
     * const fault = await prisma.fault.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faults and only return the `id`
     * const faultWithIdOnly = await prisma.fault.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaultCreateManyAndReturnArgs>(args?: SelectSubset<T, FaultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fault.
     * @param {FaultDeleteArgs} args - Arguments to delete one Fault.
     * @example
     * // Delete one Fault
     * const Fault = await prisma.fault.delete({
     *   where: {
     *     // ... filter to delete one Fault
     *   }
     * })
     * 
     */
    delete<T extends FaultDeleteArgs>(args: SelectSubset<T, FaultDeleteArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fault.
     * @param {FaultUpdateArgs} args - Arguments to update one Fault.
     * @example
     * // Update one Fault
     * const fault = await prisma.fault.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaultUpdateArgs>(args: SelectSubset<T, FaultUpdateArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faults.
     * @param {FaultDeleteManyArgs} args - Arguments to filter Faults to delete.
     * @example
     * // Delete a few Faults
     * const { count } = await prisma.fault.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaultDeleteManyArgs>(args?: SelectSubset<T, FaultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faults
     * const fault = await prisma.fault.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaultUpdateManyArgs>(args: SelectSubset<T, FaultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faults and returns the data updated in the database.
     * @param {FaultUpdateManyAndReturnArgs} args - Arguments to update many Faults.
     * @example
     * // Update many Faults
     * const fault = await prisma.fault.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faults and only return the `id`
     * const faultWithIdOnly = await prisma.fault.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FaultUpdateManyAndReturnArgs>(args: SelectSubset<T, FaultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fault.
     * @param {FaultUpsertArgs} args - Arguments to update or create a Fault.
     * @example
     * // Update or create a Fault
     * const fault = await prisma.fault.upsert({
     *   create: {
     *     // ... data to create a Fault
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fault we want to update
     *   }
     * })
     */
    upsert<T extends FaultUpsertArgs>(args: SelectSubset<T, FaultUpsertArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultCountArgs} args - Arguments to filter Faults to count.
     * @example
     * // Count the number of Faults
     * const count = await prisma.fault.count({
     *   where: {
     *     // ... the filter for the Faults we want to count
     *   }
     * })
    **/
    count<T extends FaultCountArgs>(
      args?: Subset<T, FaultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaultAggregateArgs>(args: Subset<T, FaultAggregateArgs>): Prisma.PrismaPromise<GetFaultAggregateType<T>>

    /**
     * Group by Fault.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaultGroupByArgs['orderBy'] }
        : { orderBy?: FaultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fault model
   */
  readonly fields: FaultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fault.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends Fault$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Fault$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    networkData<T extends Fault$networkDataArgs<ExtArgs> = {}>(args?: Subset<T, Fault$networkDataArgs<ExtArgs>>): Prisma__NetworkDataClient<$Result.GetResult<Prisma.$NetworkDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alerts<T extends Fault$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Fault$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    predictions<T extends Fault$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, Fault$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Fault$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Fault$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Fault$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Fault$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fault model
   */
  interface FaultFieldRefs {
    readonly id: FieldRef<"Fault", 'String'>
    readonly faultType: FieldRef<"Fault", 'FaultType'>
    readonly severity: FieldRef<"Fault", 'Severity'>
    readonly status: FieldRef<"Fault", 'FaultStatus'>
    readonly confidenceScore: FieldRef<"Fault", 'Float'>
    readonly networkSegment: FieldRef<"Fault", 'String'>
    readonly location: FieldRef<"Fault", 'String'>
    readonly notes: FieldRef<"Fault", 'String'>
    readonly detectedAt: FieldRef<"Fault", 'DateTime'>
    readonly resolvedAt: FieldRef<"Fault", 'DateTime'>
    readonly assignedToId: FieldRef<"Fault", 'String'>
    readonly networkDataId: FieldRef<"Fault", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fault findUnique
   */
  export type FaultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter, which Fault to fetch.
     */
    where: FaultWhereUniqueInput
  }

  /**
   * Fault findUniqueOrThrow
   */
  export type FaultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter, which Fault to fetch.
     */
    where: FaultWhereUniqueInput
  }

  /**
   * Fault findFirst
   */
  export type FaultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter, which Fault to fetch.
     */
    where?: FaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faults to fetch.
     */
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faults.
     */
    cursor?: FaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faults.
     */
    distinct?: FaultScalarFieldEnum | FaultScalarFieldEnum[]
  }

  /**
   * Fault findFirstOrThrow
   */
  export type FaultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter, which Fault to fetch.
     */
    where?: FaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faults to fetch.
     */
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faults.
     */
    cursor?: FaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faults.
     */
    distinct?: FaultScalarFieldEnum | FaultScalarFieldEnum[]
  }

  /**
   * Fault findMany
   */
  export type FaultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter, which Faults to fetch.
     */
    where?: FaultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faults to fetch.
     */
    orderBy?: FaultOrderByWithRelationInput | FaultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faults.
     */
    cursor?: FaultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faults.
     */
    distinct?: FaultScalarFieldEnum | FaultScalarFieldEnum[]
  }

  /**
   * Fault create
   */
  export type FaultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * The data needed to create a Fault.
     */
    data: XOR<FaultCreateInput, FaultUncheckedCreateInput>
  }

  /**
   * Fault createMany
   */
  export type FaultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faults.
     */
    data: FaultCreateManyInput | FaultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fault createManyAndReturn
   */
  export type FaultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * The data used to create many Faults.
     */
    data: FaultCreateManyInput | FaultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fault update
   */
  export type FaultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * The data needed to update a Fault.
     */
    data: XOR<FaultUpdateInput, FaultUncheckedUpdateInput>
    /**
     * Choose, which Fault to update.
     */
    where: FaultWhereUniqueInput
  }

  /**
   * Fault updateMany
   */
  export type FaultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faults.
     */
    data: XOR<FaultUpdateManyMutationInput, FaultUncheckedUpdateManyInput>
    /**
     * Filter which Faults to update
     */
    where?: FaultWhereInput
    /**
     * Limit how many Faults to update.
     */
    limit?: number
  }

  /**
   * Fault updateManyAndReturn
   */
  export type FaultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * The data used to update Faults.
     */
    data: XOR<FaultUpdateManyMutationInput, FaultUncheckedUpdateManyInput>
    /**
     * Filter which Faults to update
     */
    where?: FaultWhereInput
    /**
     * Limit how many Faults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fault upsert
   */
  export type FaultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * The filter to search for the Fault to update in case it exists.
     */
    where: FaultWhereUniqueInput
    /**
     * In case the Fault found by the `where` argument doesn't exist, create a new Fault with this data.
     */
    create: XOR<FaultCreateInput, FaultUncheckedCreateInput>
    /**
     * In case the Fault was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaultUpdateInput, FaultUncheckedUpdateInput>
  }

  /**
   * Fault delete
   */
  export type FaultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    /**
     * Filter which Fault to delete.
     */
    where: FaultWhereUniqueInput
  }

  /**
   * Fault deleteMany
   */
  export type FaultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faults to delete
     */
    where?: FaultWhereInput
    /**
     * Limit how many Faults to delete.
     */
    limit?: number
  }

  /**
   * Fault.assignedTo
   */
  export type Fault$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Fault.networkData
   */
  export type Fault$networkDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkData
     */
    select?: NetworkDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkData
     */
    omit?: NetworkDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkDataInclude<ExtArgs> | null
    where?: NetworkDataWhereInput
  }

  /**
   * Fault.alerts
   */
  export type Fault$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Fault.predictions
   */
  export type Fault$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Fault.tasks
   */
  export type Fault$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    where?: MaintenanceTaskWhereInput
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    cursor?: MaintenanceTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * Fault.tickets
   */
  export type Fault$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * Fault without action
   */
  export type FaultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionAvgAggregateOutputType = {
    probability: number | null
  }

  export type PredictionSumAggregateOutputType = {
    probability: number | null
  }

  export type PredictionMinAggregateOutputType = {
    id: string | null
    networkSegment: string | null
    riskLevel: $Enums.RiskLevel | null
    probability: number | null
    recommendation: string | null
    predictedAt: Date | null
    faultId: string | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: string | null
    networkSegment: string | null
    riskLevel: $Enums.RiskLevel | null
    probability: number | null
    recommendation: string | null
    predictedAt: Date | null
    faultId: string | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    networkSegment: number
    riskLevel: number
    probability: number
    recommendation: number
    predictedAt: number
    faultId: number
    _all: number
  }


  export type PredictionAvgAggregateInputType = {
    probability?: true
  }

  export type PredictionSumAggregateInputType = {
    probability?: true
  }

  export type PredictionMinAggregateInputType = {
    id?: true
    networkSegment?: true
    riskLevel?: true
    probability?: true
    recommendation?: true
    predictedAt?: true
    faultId?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    networkSegment?: true
    riskLevel?: true
    probability?: true
    recommendation?: true
    predictedAt?: true
    faultId?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    networkSegment?: true
    riskLevel?: true
    probability?: true
    recommendation?: true
    predictedAt?: true
    faultId?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _avg?: PredictionAvgAggregateInputType
    _sum?: PredictionSumAggregateInputType
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation: string | null
    predictedAt: Date
    faultId: string | null
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkSegment?: boolean
    riskLevel?: boolean
    probability?: boolean
    recommendation?: boolean
    predictedAt?: boolean
    faultId?: boolean
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkSegment?: boolean
    riskLevel?: boolean
    probability?: boolean
    recommendation?: boolean
    predictedAt?: boolean
    faultId?: boolean
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    networkSegment?: boolean
    riskLevel?: boolean
    probability?: boolean
    recommendation?: boolean
    predictedAt?: boolean
    faultId?: boolean
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectScalar = {
    id?: boolean
    networkSegment?: boolean
    riskLevel?: boolean
    probability?: boolean
    recommendation?: boolean
    predictedAt?: boolean
    faultId?: boolean
  }

  export type PredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "networkSegment" | "riskLevel" | "probability" | "recommendation" | "predictedAt" | "faultId", ExtArgs["result"]["prediction"]>
  export type PredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }
  export type PredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }
  export type PredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Prediction$faultArgs<ExtArgs>
  }

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {
      fault: Prisma.$FaultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      networkSegment: string
      riskLevel: $Enums.RiskLevel
      probability: number
      recommendation: string | null
      predictedAt: Date
      faultId: string | null
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Predictions and returns the data saved in the database.
     * @param {PredictionCreateManyAndReturnArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions and returns the data updated in the database.
     * @param {PredictionUpdateManyAndReturnArgs} args - Arguments to update many Predictions.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fault<T extends Prediction$faultArgs<ExtArgs> = {}>(args?: Subset<T, Prediction$faultArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prediction model
   */
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'String'>
    readonly networkSegment: FieldRef<"Prediction", 'String'>
    readonly riskLevel: FieldRef<"Prediction", 'RiskLevel'>
    readonly probability: FieldRef<"Prediction", 'Float'>
    readonly recommendation: FieldRef<"Prediction", 'String'>
    readonly predictedAt: FieldRef<"Prediction", 'DateTime'>
    readonly faultId: FieldRef<"Prediction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prediction createManyAndReturn
   */
  export type PredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Prediction updateManyAndReturn
   */
  export type PredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Prediction.fault
   */
  export type Prediction$faultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.AlertLevel | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    faultId: string | null
    acknowledgedById: string | null
    acknowledgedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.AlertLevel | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    faultId: string | null
    acknowledgedById: string | null
    acknowledgedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    status: number
    createdAt: number
    faultId: number
    acknowledgedById: number
    acknowledgedAt: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    createdAt?: true
    faultId?: true
    acknowledgedById?: true
    acknowledgedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    createdAt?: true
    faultId?: true
    acknowledgedById?: true
    acknowledgedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    status?: true
    createdAt?: true
    faultId?: true
    acknowledgedById?: true
    acknowledgedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status: $Enums.AlertStatus
    createdAt: Date
    faultId: string | null
    acknowledgedById: string | null
    acknowledgedAt: Date | null
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    createdAt?: boolean
    faultId?: boolean
    acknowledgedById?: boolean
    acknowledgedAt?: boolean
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    createdAt?: boolean
    faultId?: boolean
    acknowledgedById?: boolean
    acknowledgedAt?: boolean
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    createdAt?: boolean
    faultId?: boolean
    acknowledgedById?: boolean
    acknowledgedAt?: boolean
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    status?: boolean
    createdAt?: boolean
    faultId?: boolean
    acknowledgedById?: boolean
    acknowledgedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "status" | "createdAt" | "faultId" | "acknowledgedById" | "acknowledgedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | Alert$faultArgs<ExtArgs>
    acknowledgedBy?: boolean | Alert$acknowledgedByArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      fault: Prisma.$FaultPayload<ExtArgs> | null
      acknowledgedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      level: $Enums.AlertLevel
      status: $Enums.AlertStatus
      createdAt: Date
      faultId: string | null
      acknowledgedById: string | null
      acknowledgedAt: Date | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fault<T extends Alert$faultArgs<ExtArgs> = {}>(args?: Subset<T, Alert$faultArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    acknowledgedBy<T extends Alert$acknowledgedByArgs<ExtArgs> = {}>(args?: Subset<T, Alert$acknowledgedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly description: FieldRef<"Alert", 'String'>
    readonly level: FieldRef<"Alert", 'AlertLevel'>
    readonly status: FieldRef<"Alert", 'AlertStatus'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly faultId: FieldRef<"Alert", 'String'>
    readonly acknowledgedById: FieldRef<"Alert", 'String'>
    readonly acknowledgedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.fault
   */
  export type Alert$faultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
  }

  /**
   * Alert.acknowledgedBy
   */
  export type Alert$acknowledgedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model SignalGenerator
   */

  export type AggregateSignalGenerator = {
    _count: SignalGeneratorCountAggregateOutputType | null
    _min: SignalGeneratorMinAggregateOutputType | null
    _max: SignalGeneratorMaxAggregateOutputType | null
  }

  export type SignalGeneratorMinAggregateOutputType = {
    id: string | null
    deviceName: string | null
    serialNumber: string | null
    deviceType: $Enums.DeviceType | null
    status: $Enums.DeviceStatus | null
    location: string | null
    lastReading: Date | null
    createdAt: Date | null
  }

  export type SignalGeneratorMaxAggregateOutputType = {
    id: string | null
    deviceName: string | null
    serialNumber: string | null
    deviceType: $Enums.DeviceType | null
    status: $Enums.DeviceStatus | null
    location: string | null
    lastReading: Date | null
    createdAt: Date | null
  }

  export type SignalGeneratorCountAggregateOutputType = {
    id: number
    deviceName: number
    serialNumber: number
    deviceType: number
    status: number
    location: number
    lastReading: number
    createdAt: number
    _all: number
  }


  export type SignalGeneratorMinAggregateInputType = {
    id?: true
    deviceName?: true
    serialNumber?: true
    deviceType?: true
    status?: true
    location?: true
    lastReading?: true
    createdAt?: true
  }

  export type SignalGeneratorMaxAggregateInputType = {
    id?: true
    deviceName?: true
    serialNumber?: true
    deviceType?: true
    status?: true
    location?: true
    lastReading?: true
    createdAt?: true
  }

  export type SignalGeneratorCountAggregateInputType = {
    id?: true
    deviceName?: true
    serialNumber?: true
    deviceType?: true
    status?: true
    location?: true
    lastReading?: true
    createdAt?: true
    _all?: true
  }

  export type SignalGeneratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalGenerator to aggregate.
     */
    where?: SignalGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalGenerators to fetch.
     */
    orderBy?: SignalGeneratorOrderByWithRelationInput | SignalGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignalGenerators
    **/
    _count?: true | SignalGeneratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalGeneratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalGeneratorMaxAggregateInputType
  }

  export type GetSignalGeneratorAggregateType<T extends SignalGeneratorAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalGenerator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalGenerator[P]>
      : GetScalarType<T[P], AggregateSignalGenerator[P]>
  }




  export type SignalGeneratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalGeneratorWhereInput
    orderBy?: SignalGeneratorOrderByWithAggregationInput | SignalGeneratorOrderByWithAggregationInput[]
    by: SignalGeneratorScalarFieldEnum[] | SignalGeneratorScalarFieldEnum
    having?: SignalGeneratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalGeneratorCountAggregateInputType | true
    _min?: SignalGeneratorMinAggregateInputType
    _max?: SignalGeneratorMaxAggregateInputType
  }

  export type SignalGeneratorGroupByOutputType = {
    id: string
    deviceName: string
    serialNumber: string
    deviceType: $Enums.DeviceType
    status: $Enums.DeviceStatus
    location: string | null
    lastReading: Date | null
    createdAt: Date
    _count: SignalGeneratorCountAggregateOutputType | null
    _min: SignalGeneratorMinAggregateOutputType | null
    _max: SignalGeneratorMaxAggregateOutputType | null
  }

  type GetSignalGeneratorGroupByPayload<T extends SignalGeneratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalGeneratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalGeneratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalGeneratorGroupByOutputType[P]>
            : GetScalarType<T[P], SignalGeneratorGroupByOutputType[P]>
        }
      >
    >


  export type SignalGeneratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    serialNumber?: boolean
    deviceType?: boolean
    status?: boolean
    location?: boolean
    lastReading?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["signalGenerator"]>

  export type SignalGeneratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    serialNumber?: boolean
    deviceType?: boolean
    status?: boolean
    location?: boolean
    lastReading?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["signalGenerator"]>

  export type SignalGeneratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceName?: boolean
    serialNumber?: boolean
    deviceType?: boolean
    status?: boolean
    location?: boolean
    lastReading?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["signalGenerator"]>

  export type SignalGeneratorSelectScalar = {
    id?: boolean
    deviceName?: boolean
    serialNumber?: boolean
    deviceType?: boolean
    status?: boolean
    location?: boolean
    lastReading?: boolean
    createdAt?: boolean
  }

  export type SignalGeneratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceName" | "serialNumber" | "deviceType" | "status" | "location" | "lastReading" | "createdAt", ExtArgs["result"]["signalGenerator"]>

  export type $SignalGeneratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignalGenerator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceName: string
      serialNumber: string
      deviceType: $Enums.DeviceType
      status: $Enums.DeviceStatus
      location: string | null
      lastReading: Date | null
      createdAt: Date
    }, ExtArgs["result"]["signalGenerator"]>
    composites: {}
  }

  type SignalGeneratorGetPayload<S extends boolean | null | undefined | SignalGeneratorDefaultArgs> = $Result.GetResult<Prisma.$SignalGeneratorPayload, S>

  type SignalGeneratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalGeneratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalGeneratorCountAggregateInputType | true
    }

  export interface SignalGeneratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignalGenerator'], meta: { name: 'SignalGenerator' } }
    /**
     * Find zero or one SignalGenerator that matches the filter.
     * @param {SignalGeneratorFindUniqueArgs} args - Arguments to find a SignalGenerator
     * @example
     * // Get one SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalGeneratorFindUniqueArgs>(args: SelectSubset<T, SignalGeneratorFindUniqueArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SignalGenerator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalGeneratorFindUniqueOrThrowArgs} args - Arguments to find a SignalGenerator
     * @example
     * // Get one SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalGeneratorFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalGeneratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalGenerator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorFindFirstArgs} args - Arguments to find a SignalGenerator
     * @example
     * // Get one SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalGeneratorFindFirstArgs>(args?: SelectSubset<T, SignalGeneratorFindFirstArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignalGenerator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorFindFirstOrThrowArgs} args - Arguments to find a SignalGenerator
     * @example
     * // Get one SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalGeneratorFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalGeneratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SignalGenerators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignalGenerators
     * const signalGenerators = await prisma.signalGenerator.findMany()
     * 
     * // Get first 10 SignalGenerators
     * const signalGenerators = await prisma.signalGenerator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalGeneratorWithIdOnly = await prisma.signalGenerator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalGeneratorFindManyArgs>(args?: SelectSubset<T, SignalGeneratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SignalGenerator.
     * @param {SignalGeneratorCreateArgs} args - Arguments to create a SignalGenerator.
     * @example
     * // Create one SignalGenerator
     * const SignalGenerator = await prisma.signalGenerator.create({
     *   data: {
     *     // ... data to create a SignalGenerator
     *   }
     * })
     * 
     */
    create<T extends SignalGeneratorCreateArgs>(args: SelectSubset<T, SignalGeneratorCreateArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SignalGenerators.
     * @param {SignalGeneratorCreateManyArgs} args - Arguments to create many SignalGenerators.
     * @example
     * // Create many SignalGenerators
     * const signalGenerator = await prisma.signalGenerator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalGeneratorCreateManyArgs>(args?: SelectSubset<T, SignalGeneratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SignalGenerators and returns the data saved in the database.
     * @param {SignalGeneratorCreateManyAndReturnArgs} args - Arguments to create many SignalGenerators.
     * @example
     * // Create many SignalGenerators
     * const signalGenerator = await prisma.signalGenerator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SignalGenerators and only return the `id`
     * const signalGeneratorWithIdOnly = await prisma.signalGenerator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalGeneratorCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalGeneratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SignalGenerator.
     * @param {SignalGeneratorDeleteArgs} args - Arguments to delete one SignalGenerator.
     * @example
     * // Delete one SignalGenerator
     * const SignalGenerator = await prisma.signalGenerator.delete({
     *   where: {
     *     // ... filter to delete one SignalGenerator
     *   }
     * })
     * 
     */
    delete<T extends SignalGeneratorDeleteArgs>(args: SelectSubset<T, SignalGeneratorDeleteArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SignalGenerator.
     * @param {SignalGeneratorUpdateArgs} args - Arguments to update one SignalGenerator.
     * @example
     * // Update one SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalGeneratorUpdateArgs>(args: SelectSubset<T, SignalGeneratorUpdateArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SignalGenerators.
     * @param {SignalGeneratorDeleteManyArgs} args - Arguments to filter SignalGenerators to delete.
     * @example
     * // Delete a few SignalGenerators
     * const { count } = await prisma.signalGenerator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalGeneratorDeleteManyArgs>(args?: SelectSubset<T, SignalGeneratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalGenerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignalGenerators
     * const signalGenerator = await prisma.signalGenerator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalGeneratorUpdateManyArgs>(args: SelectSubset<T, SignalGeneratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignalGenerators and returns the data updated in the database.
     * @param {SignalGeneratorUpdateManyAndReturnArgs} args - Arguments to update many SignalGenerators.
     * @example
     * // Update many SignalGenerators
     * const signalGenerator = await prisma.signalGenerator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SignalGenerators and only return the `id`
     * const signalGeneratorWithIdOnly = await prisma.signalGenerator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalGeneratorUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalGeneratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SignalGenerator.
     * @param {SignalGeneratorUpsertArgs} args - Arguments to update or create a SignalGenerator.
     * @example
     * // Update or create a SignalGenerator
     * const signalGenerator = await prisma.signalGenerator.upsert({
     *   create: {
     *     // ... data to create a SignalGenerator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignalGenerator we want to update
     *   }
     * })
     */
    upsert<T extends SignalGeneratorUpsertArgs>(args: SelectSubset<T, SignalGeneratorUpsertArgs<ExtArgs>>): Prisma__SignalGeneratorClient<$Result.GetResult<Prisma.$SignalGeneratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SignalGenerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorCountArgs} args - Arguments to filter SignalGenerators to count.
     * @example
     * // Count the number of SignalGenerators
     * const count = await prisma.signalGenerator.count({
     *   where: {
     *     // ... the filter for the SignalGenerators we want to count
     *   }
     * })
    **/
    count<T extends SignalGeneratorCountArgs>(
      args?: Subset<T, SignalGeneratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalGeneratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignalGenerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignalGeneratorAggregateArgs>(args: Subset<T, SignalGeneratorAggregateArgs>): Prisma.PrismaPromise<GetSignalGeneratorAggregateType<T>>

    /**
     * Group by SignalGenerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGeneratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignalGeneratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalGeneratorGroupByArgs['orderBy'] }
        : { orderBy?: SignalGeneratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignalGeneratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalGeneratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignalGenerator model
   */
  readonly fields: SignalGeneratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignalGenerator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalGeneratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SignalGenerator model
   */
  interface SignalGeneratorFieldRefs {
    readonly id: FieldRef<"SignalGenerator", 'String'>
    readonly deviceName: FieldRef<"SignalGenerator", 'String'>
    readonly serialNumber: FieldRef<"SignalGenerator", 'String'>
    readonly deviceType: FieldRef<"SignalGenerator", 'DeviceType'>
    readonly status: FieldRef<"SignalGenerator", 'DeviceStatus'>
    readonly location: FieldRef<"SignalGenerator", 'String'>
    readonly lastReading: FieldRef<"SignalGenerator", 'DateTime'>
    readonly createdAt: FieldRef<"SignalGenerator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SignalGenerator findUnique
   */
  export type SignalGeneratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter, which SignalGenerator to fetch.
     */
    where: SignalGeneratorWhereUniqueInput
  }

  /**
   * SignalGenerator findUniqueOrThrow
   */
  export type SignalGeneratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter, which SignalGenerator to fetch.
     */
    where: SignalGeneratorWhereUniqueInput
  }

  /**
   * SignalGenerator findFirst
   */
  export type SignalGeneratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter, which SignalGenerator to fetch.
     */
    where?: SignalGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalGenerators to fetch.
     */
    orderBy?: SignalGeneratorOrderByWithRelationInput | SignalGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalGenerators.
     */
    cursor?: SignalGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalGenerators.
     */
    distinct?: SignalGeneratorScalarFieldEnum | SignalGeneratorScalarFieldEnum[]
  }

  /**
   * SignalGenerator findFirstOrThrow
   */
  export type SignalGeneratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter, which SignalGenerator to fetch.
     */
    where?: SignalGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalGenerators to fetch.
     */
    orderBy?: SignalGeneratorOrderByWithRelationInput | SignalGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignalGenerators.
     */
    cursor?: SignalGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalGenerators.
     */
    distinct?: SignalGeneratorScalarFieldEnum | SignalGeneratorScalarFieldEnum[]
  }

  /**
   * SignalGenerator findMany
   */
  export type SignalGeneratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter, which SignalGenerators to fetch.
     */
    where?: SignalGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignalGenerators to fetch.
     */
    orderBy?: SignalGeneratorOrderByWithRelationInput | SignalGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignalGenerators.
     */
    cursor?: SignalGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignalGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignalGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignalGenerators.
     */
    distinct?: SignalGeneratorScalarFieldEnum | SignalGeneratorScalarFieldEnum[]
  }

  /**
   * SignalGenerator create
   */
  export type SignalGeneratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * The data needed to create a SignalGenerator.
     */
    data: XOR<SignalGeneratorCreateInput, SignalGeneratorUncheckedCreateInput>
  }

  /**
   * SignalGenerator createMany
   */
  export type SignalGeneratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignalGenerators.
     */
    data: SignalGeneratorCreateManyInput | SignalGeneratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalGenerator createManyAndReturn
   */
  export type SignalGeneratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * The data used to create many SignalGenerators.
     */
    data: SignalGeneratorCreateManyInput | SignalGeneratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignalGenerator update
   */
  export type SignalGeneratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * The data needed to update a SignalGenerator.
     */
    data: XOR<SignalGeneratorUpdateInput, SignalGeneratorUncheckedUpdateInput>
    /**
     * Choose, which SignalGenerator to update.
     */
    where: SignalGeneratorWhereUniqueInput
  }

  /**
   * SignalGenerator updateMany
   */
  export type SignalGeneratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignalGenerators.
     */
    data: XOR<SignalGeneratorUpdateManyMutationInput, SignalGeneratorUncheckedUpdateManyInput>
    /**
     * Filter which SignalGenerators to update
     */
    where?: SignalGeneratorWhereInput
    /**
     * Limit how many SignalGenerators to update.
     */
    limit?: number
  }

  /**
   * SignalGenerator updateManyAndReturn
   */
  export type SignalGeneratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * The data used to update SignalGenerators.
     */
    data: XOR<SignalGeneratorUpdateManyMutationInput, SignalGeneratorUncheckedUpdateManyInput>
    /**
     * Filter which SignalGenerators to update
     */
    where?: SignalGeneratorWhereInput
    /**
     * Limit how many SignalGenerators to update.
     */
    limit?: number
  }

  /**
   * SignalGenerator upsert
   */
  export type SignalGeneratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * The filter to search for the SignalGenerator to update in case it exists.
     */
    where: SignalGeneratorWhereUniqueInput
    /**
     * In case the SignalGenerator found by the `where` argument doesn't exist, create a new SignalGenerator with this data.
     */
    create: XOR<SignalGeneratorCreateInput, SignalGeneratorUncheckedCreateInput>
    /**
     * In case the SignalGenerator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalGeneratorUpdateInput, SignalGeneratorUncheckedUpdateInput>
  }

  /**
   * SignalGenerator delete
   */
  export type SignalGeneratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
    /**
     * Filter which SignalGenerator to delete.
     */
    where: SignalGeneratorWhereUniqueInput
  }

  /**
   * SignalGenerator deleteMany
   */
  export type SignalGeneratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignalGenerators to delete
     */
    where?: SignalGeneratorWhereInput
    /**
     * Limit how many SignalGenerators to delete.
     */
    limit?: number
  }

  /**
   * SignalGenerator without action
   */
  export type SignalGeneratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalGenerator
     */
    select?: SignalGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignalGenerator
     */
    omit?: SignalGeneratorOmit<ExtArgs> | null
  }


  /**
   * Model MaintenanceTask
   */

  export type AggregateMaintenanceTask = {
    _count: MaintenanceTaskCountAggregateOutputType | null
    _min: MaintenanceTaskMinAggregateOutputType | null
    _max: MaintenanceTaskMaxAggregateOutputType | null
  }

  export type MaintenanceTaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    dueAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    faultId: string | null
    assignedToId: string | null
    createdById: string | null
  }

  export type MaintenanceTaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    status: $Enums.TaskStatus | null
    dueAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    faultId: string | null
    assignedToId: string | null
    createdById: string | null
  }

  export type MaintenanceTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    status: number
    dueAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    faultId: number
    assignedToId: number
    createdById: number
    _all: number
  }


  export type MaintenanceTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    faultId?: true
    assignedToId?: true
    createdById?: true
  }

  export type MaintenanceTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    faultId?: true
    assignedToId?: true
    createdById?: true
  }

  export type MaintenanceTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    dueAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    faultId?: true
    assignedToId?: true
    createdById?: true
    _all?: true
  }

  export type MaintenanceTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTask to aggregate.
     */
    where?: MaintenanceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTasks to fetch.
     */
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceTasks
    **/
    _count?: true | MaintenanceTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceTaskMaxAggregateInputType
  }

  export type GetMaintenanceTaskAggregateType<T extends MaintenanceTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceTask[P]>
      : GetScalarType<T[P], AggregateMaintenanceTask[P]>
  }




  export type MaintenanceTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTaskWhereInput
    orderBy?: MaintenanceTaskOrderByWithAggregationInput | MaintenanceTaskOrderByWithAggregationInput[]
    by: MaintenanceTaskScalarFieldEnum[] | MaintenanceTaskScalarFieldEnum
    having?: MaintenanceTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceTaskCountAggregateInputType | true
    _min?: MaintenanceTaskMinAggregateInputType
    _max?: MaintenanceTaskMaxAggregateInputType
  }

  export type MaintenanceTaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    priority: $Enums.TaskPriority
    status: $Enums.TaskStatus
    dueAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    faultId: string | null
    assignedToId: string | null
    createdById: string | null
    _count: MaintenanceTaskCountAggregateOutputType | null
    _min: MaintenanceTaskMinAggregateOutputType | null
    _max: MaintenanceTaskMaxAggregateOutputType | null
  }

  type GetMaintenanceTaskGroupByPayload<T extends MaintenanceTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceTaskGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceTaskGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faultId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTask"]>

  export type MaintenanceTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faultId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTask"]>

  export type MaintenanceTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faultId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTask"]>

  export type MaintenanceTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    dueAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faultId?: boolean
    assignedToId?: boolean
    createdById?: boolean
  }

  export type MaintenanceTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "status" | "dueAt" | "completedAt" | "createdAt" | "updatedAt" | "faultId" | "assignedToId" | "createdById", ExtArgs["result"]["maintenanceTask"]>
  export type MaintenanceTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }
  export type MaintenanceTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }
  export type MaintenanceTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | MaintenanceTask$faultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceTask$assignedToArgs<ExtArgs>
    createdBy?: boolean | MaintenanceTask$createdByArgs<ExtArgs>
  }

  export type $MaintenanceTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceTask"
    objects: {
      fault: Prisma.$FaultPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      priority: $Enums.TaskPriority
      status: $Enums.TaskStatus
      dueAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
      faultId: string | null
      assignedToId: string | null
      createdById: string | null
    }, ExtArgs["result"]["maintenanceTask"]>
    composites: {}
  }

  type MaintenanceTaskGetPayload<S extends boolean | null | undefined | MaintenanceTaskDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceTaskPayload, S>

  type MaintenanceTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceTaskCountAggregateInputType | true
    }

  export interface MaintenanceTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceTask'], meta: { name: 'MaintenanceTask' } }
    /**
     * Find zero or one MaintenanceTask that matches the filter.
     * @param {MaintenanceTaskFindUniqueArgs} args - Arguments to find a MaintenanceTask
     * @example
     * // Get one MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceTaskFindUniqueArgs>(args: SelectSubset<T, MaintenanceTaskFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceTaskFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceTask
     * @example
     * // Get one MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskFindFirstArgs} args - Arguments to find a MaintenanceTask
     * @example
     * // Get one MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceTaskFindFirstArgs>(args?: SelectSubset<T, MaintenanceTaskFindFirstArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskFindFirstOrThrowArgs} args - Arguments to find a MaintenanceTask
     * @example
     * // Get one MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceTasks
     * const maintenanceTasks = await prisma.maintenanceTask.findMany()
     * 
     * // Get first 10 MaintenanceTasks
     * const maintenanceTasks = await prisma.maintenanceTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceTaskWithIdOnly = await prisma.maintenanceTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceTaskFindManyArgs>(args?: SelectSubset<T, MaintenanceTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceTask.
     * @param {MaintenanceTaskCreateArgs} args - Arguments to create a MaintenanceTask.
     * @example
     * // Create one MaintenanceTask
     * const MaintenanceTask = await prisma.maintenanceTask.create({
     *   data: {
     *     // ... data to create a MaintenanceTask
     *   }
     * })
     * 
     */
    create<T extends MaintenanceTaskCreateArgs>(args: SelectSubset<T, MaintenanceTaskCreateArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceTasks.
     * @param {MaintenanceTaskCreateManyArgs} args - Arguments to create many MaintenanceTasks.
     * @example
     * // Create many MaintenanceTasks
     * const maintenanceTask = await prisma.maintenanceTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceTaskCreateManyArgs>(args?: SelectSubset<T, MaintenanceTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceTasks and returns the data saved in the database.
     * @param {MaintenanceTaskCreateManyAndReturnArgs} args - Arguments to create many MaintenanceTasks.
     * @example
     * // Create many MaintenanceTasks
     * const maintenanceTask = await prisma.maintenanceTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceTasks and only return the `id`
     * const maintenanceTaskWithIdOnly = await prisma.maintenanceTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceTask.
     * @param {MaintenanceTaskDeleteArgs} args - Arguments to delete one MaintenanceTask.
     * @example
     * // Delete one MaintenanceTask
     * const MaintenanceTask = await prisma.maintenanceTask.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceTask
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceTaskDeleteArgs>(args: SelectSubset<T, MaintenanceTaskDeleteArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceTask.
     * @param {MaintenanceTaskUpdateArgs} args - Arguments to update one MaintenanceTask.
     * @example
     * // Update one MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceTaskUpdateArgs>(args: SelectSubset<T, MaintenanceTaskUpdateArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceTasks.
     * @param {MaintenanceTaskDeleteManyArgs} args - Arguments to filter MaintenanceTasks to delete.
     * @example
     * // Delete a few MaintenanceTasks
     * const { count } = await prisma.maintenanceTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceTaskDeleteManyArgs>(args?: SelectSubset<T, MaintenanceTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceTasks
     * const maintenanceTask = await prisma.maintenanceTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceTaskUpdateManyArgs>(args: SelectSubset<T, MaintenanceTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTasks and returns the data updated in the database.
     * @param {MaintenanceTaskUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceTasks.
     * @example
     * // Update many MaintenanceTasks
     * const maintenanceTask = await prisma.maintenanceTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceTasks and only return the `id`
     * const maintenanceTaskWithIdOnly = await prisma.maintenanceTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceTask.
     * @param {MaintenanceTaskUpsertArgs} args - Arguments to update or create a MaintenanceTask.
     * @example
     * // Update or create a MaintenanceTask
     * const maintenanceTask = await prisma.maintenanceTask.upsert({
     *   create: {
     *     // ... data to create a MaintenanceTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceTask we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceTaskUpsertArgs>(args: SelectSubset<T, MaintenanceTaskUpsertArgs<ExtArgs>>): Prisma__MaintenanceTaskClient<$Result.GetResult<Prisma.$MaintenanceTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskCountArgs} args - Arguments to filter MaintenanceTasks to count.
     * @example
     * // Count the number of MaintenanceTasks
     * const count = await prisma.maintenanceTask.count({
     *   where: {
     *     // ... the filter for the MaintenanceTasks we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceTaskCountArgs>(
      args?: Subset<T, MaintenanceTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceTaskAggregateArgs>(args: Subset<T, MaintenanceTaskAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceTaskAggregateType<T>>

    /**
     * Group by MaintenanceTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceTaskGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceTask model
   */
  readonly fields: MaintenanceTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fault<T extends MaintenanceTask$faultArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTask$faultArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends MaintenanceTask$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTask$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends MaintenanceTask$createdByArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTask$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceTask model
   */
  interface MaintenanceTaskFieldRefs {
    readonly id: FieldRef<"MaintenanceTask", 'String'>
    readonly title: FieldRef<"MaintenanceTask", 'String'>
    readonly description: FieldRef<"MaintenanceTask", 'String'>
    readonly priority: FieldRef<"MaintenanceTask", 'TaskPriority'>
    readonly status: FieldRef<"MaintenanceTask", 'TaskStatus'>
    readonly dueAt: FieldRef<"MaintenanceTask", 'DateTime'>
    readonly completedAt: FieldRef<"MaintenanceTask", 'DateTime'>
    readonly createdAt: FieldRef<"MaintenanceTask", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceTask", 'DateTime'>
    readonly faultId: FieldRef<"MaintenanceTask", 'String'>
    readonly assignedToId: FieldRef<"MaintenanceTask", 'String'>
    readonly createdById: FieldRef<"MaintenanceTask", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceTask findUnique
   */
  export type MaintenanceTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTask to fetch.
     */
    where: MaintenanceTaskWhereUniqueInput
  }

  /**
   * MaintenanceTask findUniqueOrThrow
   */
  export type MaintenanceTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTask to fetch.
     */
    where: MaintenanceTaskWhereUniqueInput
  }

  /**
   * MaintenanceTask findFirst
   */
  export type MaintenanceTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTask to fetch.
     */
    where?: MaintenanceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTasks to fetch.
     */
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTasks.
     */
    cursor?: MaintenanceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTasks.
     */
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * MaintenanceTask findFirstOrThrow
   */
  export type MaintenanceTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTask to fetch.
     */
    where?: MaintenanceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTasks to fetch.
     */
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTasks.
     */
    cursor?: MaintenanceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTasks.
     */
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * MaintenanceTask findMany
   */
  export type MaintenanceTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTasks to fetch.
     */
    where?: MaintenanceTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTasks to fetch.
     */
    orderBy?: MaintenanceTaskOrderByWithRelationInput | MaintenanceTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceTasks.
     */
    cursor?: MaintenanceTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTasks.
     */
    distinct?: MaintenanceTaskScalarFieldEnum | MaintenanceTaskScalarFieldEnum[]
  }

  /**
   * MaintenanceTask create
   */
  export type MaintenanceTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceTask.
     */
    data: XOR<MaintenanceTaskCreateInput, MaintenanceTaskUncheckedCreateInput>
  }

  /**
   * MaintenanceTask createMany
   */
  export type MaintenanceTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceTasks.
     */
    data: MaintenanceTaskCreateManyInput | MaintenanceTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceTask createManyAndReturn
   */
  export type MaintenanceTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceTasks.
     */
    data: MaintenanceTaskCreateManyInput | MaintenanceTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceTask update
   */
  export type MaintenanceTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceTask.
     */
    data: XOR<MaintenanceTaskUpdateInput, MaintenanceTaskUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceTask to update.
     */
    where: MaintenanceTaskWhereUniqueInput
  }

  /**
   * MaintenanceTask updateMany
   */
  export type MaintenanceTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceTasks.
     */
    data: XOR<MaintenanceTaskUpdateManyMutationInput, MaintenanceTaskUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTasks to update
     */
    where?: MaintenanceTaskWhereInput
    /**
     * Limit how many MaintenanceTasks to update.
     */
    limit?: number
  }

  /**
   * MaintenanceTask updateManyAndReturn
   */
  export type MaintenanceTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceTasks.
     */
    data: XOR<MaintenanceTaskUpdateManyMutationInput, MaintenanceTaskUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTasks to update
     */
    where?: MaintenanceTaskWhereInput
    /**
     * Limit how many MaintenanceTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceTask upsert
   */
  export type MaintenanceTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceTask to update in case it exists.
     */
    where: MaintenanceTaskWhereUniqueInput
    /**
     * In case the MaintenanceTask found by the `where` argument doesn't exist, create a new MaintenanceTask with this data.
     */
    create: XOR<MaintenanceTaskCreateInput, MaintenanceTaskUncheckedCreateInput>
    /**
     * In case the MaintenanceTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceTaskUpdateInput, MaintenanceTaskUncheckedUpdateInput>
  }

  /**
   * MaintenanceTask delete
   */
  export type MaintenanceTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceTask to delete.
     */
    where: MaintenanceTaskWhereUniqueInput
  }

  /**
   * MaintenanceTask deleteMany
   */
  export type MaintenanceTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTasks to delete
     */
    where?: MaintenanceTaskWhereInput
    /**
     * Limit how many MaintenanceTasks to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceTask.fault
   */
  export type MaintenanceTask$faultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
  }

  /**
   * MaintenanceTask.assignedTo
   */
  export type MaintenanceTask$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MaintenanceTask.createdBy
   */
  export type MaintenanceTask$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MaintenanceTask without action
   */
  export type MaintenanceTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTask
     */
    select?: MaintenanceTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTask
     */
    omit?: MaintenanceTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTaskInclude<ExtArgs> | null
  }


  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    subject: string | null
    description: string | null
    channel: $Enums.TicketChannel | null
    priority: $Enums.AlertLevel | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    faultId: string | null
    createdById: string | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    description: string | null
    channel: $Enums.TicketChannel | null
    priority: $Enums.AlertLevel | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    faultId: string | null
    createdById: string | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    subject: number
    description: number
    channel: number
    priority: number
    status: number
    createdAt: number
    resolvedAt: number
    faultId: number
    createdById: number
    _all: number
  }


  export type SupportTicketMinAggregateInputType = {
    id?: true
    subject?: true
    description?: true
    channel?: true
    priority?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    faultId?: true
    createdById?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    subject?: true
    description?: true
    channel?: true
    priority?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    faultId?: true
    createdById?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    subject?: true
    description?: true
    channel?: true
    priority?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    faultId?: true
    createdById?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    subject: string
    description: string | null
    channel: $Enums.TicketChannel
    priority: $Enums.AlertLevel
    status: $Enums.TicketStatus
    createdAt: Date
    resolvedAt: Date | null
    faultId: string | null
    createdById: string | null
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    description?: boolean
    channel?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    faultId?: boolean
    createdById?: boolean
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    description?: boolean
    channel?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    faultId?: boolean
    createdById?: boolean
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    description?: boolean
    channel?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    faultId?: boolean
    createdById?: boolean
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectScalar = {
    id?: boolean
    subject?: boolean
    description?: boolean
    channel?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    faultId?: boolean
    createdById?: boolean
  }

  export type SupportTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "description" | "channel" | "priority" | "status" | "createdAt" | "resolvedAt" | "faultId" | "createdById", ExtArgs["result"]["supportTicket"]>
  export type SupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }
  export type SupportTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }
  export type SupportTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fault?: boolean | SupportTicket$faultArgs<ExtArgs>
    createdBy?: boolean | SupportTicket$createdByArgs<ExtArgs>
  }

  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {
      fault: Prisma.$FaultPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      description: string | null
      channel: $Enums.TicketChannel
      priority: $Enums.AlertLevel
      status: $Enums.TicketStatus
      createdAt: Date
      resolvedAt: Date | null
      faultId: string | null
      createdById: string | null
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportTickets and returns the data saved in the database.
     * @param {SupportTicketCreateManyAndReturnArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets and returns the data updated in the database.
     * @param {SupportTicketUpdateManyAndReturnArgs} args - Arguments to update many SupportTickets.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fault<T extends SupportTicket$faultArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicket$faultArgs<ExtArgs>>): Prisma__FaultClient<$Result.GetResult<Prisma.$FaultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends SupportTicket$createdByArgs<ExtArgs> = {}>(args?: Subset<T, SupportTicket$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportTicket model
   */
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly subject: FieldRef<"SupportTicket", 'String'>
    readonly description: FieldRef<"SupportTicket", 'String'>
    readonly channel: FieldRef<"SupportTicket", 'TicketChannel'>
    readonly priority: FieldRef<"SupportTicket", 'AlertLevel'>
    readonly status: FieldRef<"SupportTicket", 'TicketStatus'>
    readonly createdAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly resolvedAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly faultId: FieldRef<"SupportTicket", 'String'>
    readonly createdById: FieldRef<"SupportTicket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket createManyAndReturn
   */
  export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
    /**
     * Limit how many SupportTickets to update.
     */
    limit?: number
  }

  /**
   * SupportTicket updateManyAndReturn
   */
  export type SupportTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
    /**
     * Limit how many SupportTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
    /**
     * Limit how many SupportTickets to delete.
     */
    limit?: number
  }

  /**
   * SupportTicket.fault
   */
  export type SupportTicket$faultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fault
     */
    select?: FaultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fault
     */
    omit?: FaultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaultInclude<ExtArgs> | null
    where?: FaultWhereInput
  }

  /**
   * SupportTicket.createdBy
   */
  export type SupportTicket$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    ipAddress: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    details: string | null
    ipAddress: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    details: number
    ipAddress: number
    timestamp: number
    userId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    details?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    details?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    ipAddress?: true
    timestamp?: true
    userId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    details: string | null
    ipAddress: string | null
    timestamp: Date
    userId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    timestamp?: boolean
    userId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "ipAddress" | "timestamp" | "userId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      details: string | null
      ipAddress: string | null
      timestamp: Date
      userId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly userId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetOtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otpHash: 'otpHash',
    attempts: 'attempts',
    expiresAt: 'expiresAt',
    verifiedAt: 'verifiedAt',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetOtpScalarFieldEnum = (typeof PasswordResetOtpScalarFieldEnum)[keyof typeof PasswordResetOtpScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileSize: 'fileSize',
    recordCount: 'recordCount',
    uploadedById: 'uploadedById',
    uploadDate: 'uploadDate'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const NetworkDataScalarFieldEnum: {
    id: 'id',
    signalStrength: 'signalStrength',
    signalLoss: 'signalLoss',
    errorRate: 'errorRate',
    attenuation: 'attenuation',
    reflectionLevel: 'reflectionLevel',
    distance: 'distance',
    networkSegment: 'networkSegment',
    timestamp: 'timestamp',
    datasetId: 'datasetId'
  };

  export type NetworkDataScalarFieldEnum = (typeof NetworkDataScalarFieldEnum)[keyof typeof NetworkDataScalarFieldEnum]


  export const NetworkSiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    connectedTo: 'connectedTo',
    distance: 'distance',
    distanceUnit: 'distanceUnit',
    networkSegment: 'networkSegment',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NetworkSiteScalarFieldEnum = (typeof NetworkSiteScalarFieldEnum)[keyof typeof NetworkSiteScalarFieldEnum]


  export const FaultScalarFieldEnum: {
    id: 'id',
    faultType: 'faultType',
    severity: 'severity',
    status: 'status',
    confidenceScore: 'confidenceScore',
    networkSegment: 'networkSegment',
    location: 'location',
    notes: 'notes',
    detectedAt: 'detectedAt',
    resolvedAt: 'resolvedAt',
    assignedToId: 'assignedToId',
    networkDataId: 'networkDataId'
  };

  export type FaultScalarFieldEnum = (typeof FaultScalarFieldEnum)[keyof typeof FaultScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
    id: 'id',
    networkSegment: 'networkSegment',
    riskLevel: 'riskLevel',
    probability: 'probability',
    recommendation: 'recommendation',
    predictedAt: 'predictedAt',
    faultId: 'faultId'
  };

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    status: 'status',
    createdAt: 'createdAt',
    faultId: 'faultId',
    acknowledgedById: 'acknowledgedById',
    acknowledgedAt: 'acknowledgedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const SignalGeneratorScalarFieldEnum: {
    id: 'id',
    deviceName: 'deviceName',
    serialNumber: 'serialNumber',
    deviceType: 'deviceType',
    status: 'status',
    location: 'location',
    lastReading: 'lastReading',
    createdAt: 'createdAt'
  };

  export type SignalGeneratorScalarFieldEnum = (typeof SignalGeneratorScalarFieldEnum)[keyof typeof SignalGeneratorScalarFieldEnum]


  export const MaintenanceTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    dueAt: 'dueAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    faultId: 'faultId',
    assignedToId: 'assignedToId',
    createdById: 'createdById'
  };

  export type MaintenanceTaskScalarFieldEnum = (typeof MaintenanceTaskScalarFieldEnum)[keyof typeof MaintenanceTaskScalarFieldEnum]


  export const SupportTicketScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    description: 'description',
    channel: 'channel',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt',
    faultId: 'faultId',
    createdById: 'createdById'
  };

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    ipAddress: 'ipAddress',
    timestamp: 'timestamp',
    userId: 'userId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FaultType'
   */
  export type EnumFaultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FaultType'>
    


  /**
   * Reference to a field of type 'FaultType[]'
   */
  export type ListEnumFaultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FaultType[]'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'FaultStatus'
   */
  export type EnumFaultStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FaultStatus'>
    


  /**
   * Reference to a field of type 'FaultStatus[]'
   */
  export type ListEnumFaultStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FaultStatus[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'AlertLevel'
   */
  export type EnumAlertLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertLevel'>
    


  /**
   * Reference to a field of type 'AlertLevel[]'
   */
  export type ListEnumAlertLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertLevel[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'DeviceStatus'
   */
  export type EnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus'>
    


  /**
   * Reference to a field of type 'DeviceStatus[]'
   */
  export type ListEnumDeviceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceStatus[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'TicketChannel'
   */
  export type EnumTicketChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketChannel'>
    


  /**
   * Reference to a field of type 'TicketChannel[]'
   */
  export type ListEnumTicketChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketChannel[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    assignedFaults?: FaultListRelationFilter
    acknowledged?: AlertListRelationFilter
    assignedTasks?: MaintenanceTaskListRelationFilter
    createdTasks?: MaintenanceTaskListRelationFilter
    tickets?: SupportTicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    datasets?: DatasetOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    assignedFaults?: FaultOrderByRelationAggregateInput
    acknowledged?: AlertOrderByRelationAggregateInput
    assignedTasks?: MaintenanceTaskOrderByRelationAggregateInput
    createdTasks?: MaintenanceTaskOrderByRelationAggregateInput
    tickets?: SupportTicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    assignedFaults?: FaultListRelationFilter
    acknowledged?: AlertListRelationFilter
    assignedTasks?: MaintenanceTaskListRelationFilter
    createdTasks?: MaintenanceTaskListRelationFilter
    tickets?: SupportTicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumAccountStatusWithAggregatesFilter<"User"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PasswordResetOtpWhereInput = {
    AND?: PasswordResetOtpWhereInput | PasswordResetOtpWhereInput[]
    OR?: PasswordResetOtpWhereInput[]
    NOT?: PasswordResetOtpWhereInput | PasswordResetOtpWhereInput[]
    id?: StringFilter<"PasswordResetOtp"> | string
    email?: StringFilter<"PasswordResetOtp"> | string
    otpHash?: StringFilter<"PasswordResetOtp"> | string
    attempts?: IntFilter<"PasswordResetOtp"> | number
    expiresAt?: DateTimeFilter<"PasswordResetOtp"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"PasswordResetOtp"> | Date | string | null
    consumedAt?: DateTimeNullableFilter<"PasswordResetOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetOtp"> | Date | string
  }

  export type PasswordResetOtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordResetOtpWhereInput | PasswordResetOtpWhereInput[]
    OR?: PasswordResetOtpWhereInput[]
    NOT?: PasswordResetOtpWhereInput | PasswordResetOtpWhereInput[]
    email?: StringFilter<"PasswordResetOtp"> | string
    otpHash?: StringFilter<"PasswordResetOtp"> | string
    attempts?: IntFilter<"PasswordResetOtp"> | number
    expiresAt?: DateTimeFilter<"PasswordResetOtp"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"PasswordResetOtp"> | Date | string | null
    consumedAt?: DateTimeNullableFilter<"PasswordResetOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetOtp"> | Date | string
  }, "id">

  export type PasswordResetOtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetOtpCountOrderByAggregateInput
    _avg?: PasswordResetOtpAvgOrderByAggregateInput
    _max?: PasswordResetOtpMaxOrderByAggregateInput
    _min?: PasswordResetOtpMinOrderByAggregateInput
    _sum?: PasswordResetOtpSumOrderByAggregateInput
  }

  export type PasswordResetOtpScalarWhereWithAggregatesInput = {
    AND?: PasswordResetOtpScalarWhereWithAggregatesInput | PasswordResetOtpScalarWhereWithAggregatesInput[]
    OR?: PasswordResetOtpScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetOtpScalarWhereWithAggregatesInput | PasswordResetOtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetOtp"> | string
    email?: StringWithAggregatesFilter<"PasswordResetOtp"> | string
    otpHash?: StringWithAggregatesFilter<"PasswordResetOtp"> | string
    attempts?: IntWithAggregatesFilter<"PasswordResetOtp"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetOtp"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetOtp"> | Date | string | null
    consumedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetOtp"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetOtp"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: StringFilter<"Dataset"> | string
    fileName?: StringFilter<"Dataset"> | string
    fileSize?: IntFilter<"Dataset"> | number
    recordCount?: IntFilter<"Dataset"> | number
    uploadedById?: StringFilter<"Dataset"> | string
    uploadDate?: DateTimeFilter<"Dataset"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    networkData?: NetworkDataListRelationFilter
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadedById?: SortOrder
    uploadDate?: SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    networkData?: NetworkDataOrderByRelationAggregateInput
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    fileName?: StringFilter<"Dataset"> | string
    fileSize?: IntFilter<"Dataset"> | number
    recordCount?: IntFilter<"Dataset"> | number
    uploadedById?: StringFilter<"Dataset"> | string
    uploadDate?: DateTimeFilter<"Dataset"> | Date | string
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    networkData?: NetworkDataListRelationFilter
  }, "id">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadedById?: SortOrder
    uploadDate?: SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _avg?: DatasetAvgOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
    _sum?: DatasetSumOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dataset"> | string
    fileName?: StringWithAggregatesFilter<"Dataset"> | string
    fileSize?: IntWithAggregatesFilter<"Dataset"> | number
    recordCount?: IntWithAggregatesFilter<"Dataset"> | number
    uploadedById?: StringWithAggregatesFilter<"Dataset"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
  }

  export type NetworkDataWhereInput = {
    AND?: NetworkDataWhereInput | NetworkDataWhereInput[]
    OR?: NetworkDataWhereInput[]
    NOT?: NetworkDataWhereInput | NetworkDataWhereInput[]
    id?: StringFilter<"NetworkData"> | string
    signalStrength?: FloatFilter<"NetworkData"> | number
    signalLoss?: FloatFilter<"NetworkData"> | number
    errorRate?: FloatFilter<"NetworkData"> | number
    attenuation?: FloatFilter<"NetworkData"> | number
    reflectionLevel?: FloatFilter<"NetworkData"> | number
    distance?: FloatFilter<"NetworkData"> | number
    networkSegment?: StringFilter<"NetworkData"> | string
    timestamp?: DateTimeFilter<"NetworkData"> | Date | string
    datasetId?: StringNullableFilter<"NetworkData"> | string | null
    dataset?: XOR<DatasetNullableScalarRelationFilter, DatasetWhereInput> | null
    faults?: FaultListRelationFilter
  }

  export type NetworkDataOrderByWithRelationInput = {
    id?: SortOrder
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
    networkSegment?: SortOrder
    timestamp?: SortOrder
    datasetId?: SortOrderInput | SortOrder
    dataset?: DatasetOrderByWithRelationInput
    faults?: FaultOrderByRelationAggregateInput
  }

  export type NetworkDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NetworkDataWhereInput | NetworkDataWhereInput[]
    OR?: NetworkDataWhereInput[]
    NOT?: NetworkDataWhereInput | NetworkDataWhereInput[]
    signalStrength?: FloatFilter<"NetworkData"> | number
    signalLoss?: FloatFilter<"NetworkData"> | number
    errorRate?: FloatFilter<"NetworkData"> | number
    attenuation?: FloatFilter<"NetworkData"> | number
    reflectionLevel?: FloatFilter<"NetworkData"> | number
    distance?: FloatFilter<"NetworkData"> | number
    networkSegment?: StringFilter<"NetworkData"> | string
    timestamp?: DateTimeFilter<"NetworkData"> | Date | string
    datasetId?: StringNullableFilter<"NetworkData"> | string | null
    dataset?: XOR<DatasetNullableScalarRelationFilter, DatasetWhereInput> | null
    faults?: FaultListRelationFilter
  }, "id">

  export type NetworkDataOrderByWithAggregationInput = {
    id?: SortOrder
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
    networkSegment?: SortOrder
    timestamp?: SortOrder
    datasetId?: SortOrderInput | SortOrder
    _count?: NetworkDataCountOrderByAggregateInput
    _avg?: NetworkDataAvgOrderByAggregateInput
    _max?: NetworkDataMaxOrderByAggregateInput
    _min?: NetworkDataMinOrderByAggregateInput
    _sum?: NetworkDataSumOrderByAggregateInput
  }

  export type NetworkDataScalarWhereWithAggregatesInput = {
    AND?: NetworkDataScalarWhereWithAggregatesInput | NetworkDataScalarWhereWithAggregatesInput[]
    OR?: NetworkDataScalarWhereWithAggregatesInput[]
    NOT?: NetworkDataScalarWhereWithAggregatesInput | NetworkDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NetworkData"> | string
    signalStrength?: FloatWithAggregatesFilter<"NetworkData"> | number
    signalLoss?: FloatWithAggregatesFilter<"NetworkData"> | number
    errorRate?: FloatWithAggregatesFilter<"NetworkData"> | number
    attenuation?: FloatWithAggregatesFilter<"NetworkData"> | number
    reflectionLevel?: FloatWithAggregatesFilter<"NetworkData"> | number
    distance?: FloatWithAggregatesFilter<"NetworkData"> | number
    networkSegment?: StringWithAggregatesFilter<"NetworkData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"NetworkData"> | Date | string
    datasetId?: StringNullableWithAggregatesFilter<"NetworkData"> | string | null
  }

  export type NetworkSiteWhereInput = {
    AND?: NetworkSiteWhereInput | NetworkSiteWhereInput[]
    OR?: NetworkSiteWhereInput[]
    NOT?: NetworkSiteWhereInput | NetworkSiteWhereInput[]
    id?: StringFilter<"NetworkSite"> | string
    name?: StringFilter<"NetworkSite"> | string
    location?: StringFilter<"NetworkSite"> | string
    connectedTo?: StringFilter<"NetworkSite"> | string
    distance?: FloatFilter<"NetworkSite"> | number
    distanceUnit?: StringFilter<"NetworkSite"> | string
    networkSegment?: StringNullableFilter<"NetworkSite"> | string | null
    notes?: StringNullableFilter<"NetworkSite"> | string | null
    createdAt?: DateTimeFilter<"NetworkSite"> | Date | string
    updatedAt?: DateTimeFilter<"NetworkSite"> | Date | string
  }

  export type NetworkSiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    connectedTo?: SortOrder
    distance?: SortOrder
    distanceUnit?: SortOrder
    networkSegment?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkSiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NetworkSiteWhereInput | NetworkSiteWhereInput[]
    OR?: NetworkSiteWhereInput[]
    NOT?: NetworkSiteWhereInput | NetworkSiteWhereInput[]
    name?: StringFilter<"NetworkSite"> | string
    location?: StringFilter<"NetworkSite"> | string
    connectedTo?: StringFilter<"NetworkSite"> | string
    distance?: FloatFilter<"NetworkSite"> | number
    distanceUnit?: StringFilter<"NetworkSite"> | string
    networkSegment?: StringNullableFilter<"NetworkSite"> | string | null
    notes?: StringNullableFilter<"NetworkSite"> | string | null
    createdAt?: DateTimeFilter<"NetworkSite"> | Date | string
    updatedAt?: DateTimeFilter<"NetworkSite"> | Date | string
  }, "id">

  export type NetworkSiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    connectedTo?: SortOrder
    distance?: SortOrder
    distanceUnit?: SortOrder
    networkSegment?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NetworkSiteCountOrderByAggregateInput
    _avg?: NetworkSiteAvgOrderByAggregateInput
    _max?: NetworkSiteMaxOrderByAggregateInput
    _min?: NetworkSiteMinOrderByAggregateInput
    _sum?: NetworkSiteSumOrderByAggregateInput
  }

  export type NetworkSiteScalarWhereWithAggregatesInput = {
    AND?: NetworkSiteScalarWhereWithAggregatesInput | NetworkSiteScalarWhereWithAggregatesInput[]
    OR?: NetworkSiteScalarWhereWithAggregatesInput[]
    NOT?: NetworkSiteScalarWhereWithAggregatesInput | NetworkSiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NetworkSite"> | string
    name?: StringWithAggregatesFilter<"NetworkSite"> | string
    location?: StringWithAggregatesFilter<"NetworkSite"> | string
    connectedTo?: StringWithAggregatesFilter<"NetworkSite"> | string
    distance?: FloatWithAggregatesFilter<"NetworkSite"> | number
    distanceUnit?: StringWithAggregatesFilter<"NetworkSite"> | string
    networkSegment?: StringNullableWithAggregatesFilter<"NetworkSite"> | string | null
    notes?: StringNullableWithAggregatesFilter<"NetworkSite"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NetworkSite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NetworkSite"> | Date | string
  }

  export type FaultWhereInput = {
    AND?: FaultWhereInput | FaultWhereInput[]
    OR?: FaultWhereInput[]
    NOT?: FaultWhereInput | FaultWhereInput[]
    id?: StringFilter<"Fault"> | string
    faultType?: EnumFaultTypeFilter<"Fault"> | $Enums.FaultType
    severity?: EnumSeverityFilter<"Fault"> | $Enums.Severity
    status?: EnumFaultStatusFilter<"Fault"> | $Enums.FaultStatus
    confidenceScore?: FloatFilter<"Fault"> | number
    networkSegment?: StringFilter<"Fault"> | string
    location?: StringNullableFilter<"Fault"> | string | null
    notes?: StringNullableFilter<"Fault"> | string | null
    detectedAt?: DateTimeFilter<"Fault"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Fault"> | Date | string | null
    assignedToId?: StringNullableFilter<"Fault"> | string | null
    networkDataId?: StringNullableFilter<"Fault"> | string | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    networkData?: XOR<NetworkDataNullableScalarRelationFilter, NetworkDataWhereInput> | null
    alerts?: AlertListRelationFilter
    predictions?: PredictionListRelationFilter
    tasks?: MaintenanceTaskListRelationFilter
    tickets?: SupportTicketListRelationFilter
  }

  export type FaultOrderByWithRelationInput = {
    id?: SortOrder
    faultType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    networkSegment?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    networkDataId?: SortOrderInput | SortOrder
    assignedTo?: UserOrderByWithRelationInput
    networkData?: NetworkDataOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
    predictions?: PredictionOrderByRelationAggregateInput
    tasks?: MaintenanceTaskOrderByRelationAggregateInput
    tickets?: SupportTicketOrderByRelationAggregateInput
  }

  export type FaultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FaultWhereInput | FaultWhereInput[]
    OR?: FaultWhereInput[]
    NOT?: FaultWhereInput | FaultWhereInput[]
    faultType?: EnumFaultTypeFilter<"Fault"> | $Enums.FaultType
    severity?: EnumSeverityFilter<"Fault"> | $Enums.Severity
    status?: EnumFaultStatusFilter<"Fault"> | $Enums.FaultStatus
    confidenceScore?: FloatFilter<"Fault"> | number
    networkSegment?: StringFilter<"Fault"> | string
    location?: StringNullableFilter<"Fault"> | string | null
    notes?: StringNullableFilter<"Fault"> | string | null
    detectedAt?: DateTimeFilter<"Fault"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Fault"> | Date | string | null
    assignedToId?: StringNullableFilter<"Fault"> | string | null
    networkDataId?: StringNullableFilter<"Fault"> | string | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    networkData?: XOR<NetworkDataNullableScalarRelationFilter, NetworkDataWhereInput> | null
    alerts?: AlertListRelationFilter
    predictions?: PredictionListRelationFilter
    tasks?: MaintenanceTaskListRelationFilter
    tickets?: SupportTicketListRelationFilter
  }, "id">

  export type FaultOrderByWithAggregationInput = {
    id?: SortOrder
    faultType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    networkSegment?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    networkDataId?: SortOrderInput | SortOrder
    _count?: FaultCountOrderByAggregateInput
    _avg?: FaultAvgOrderByAggregateInput
    _max?: FaultMaxOrderByAggregateInput
    _min?: FaultMinOrderByAggregateInput
    _sum?: FaultSumOrderByAggregateInput
  }

  export type FaultScalarWhereWithAggregatesInput = {
    AND?: FaultScalarWhereWithAggregatesInput | FaultScalarWhereWithAggregatesInput[]
    OR?: FaultScalarWhereWithAggregatesInput[]
    NOT?: FaultScalarWhereWithAggregatesInput | FaultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fault"> | string
    faultType?: EnumFaultTypeWithAggregatesFilter<"Fault"> | $Enums.FaultType
    severity?: EnumSeverityWithAggregatesFilter<"Fault"> | $Enums.Severity
    status?: EnumFaultStatusWithAggregatesFilter<"Fault"> | $Enums.FaultStatus
    confidenceScore?: FloatWithAggregatesFilter<"Fault"> | number
    networkSegment?: StringWithAggregatesFilter<"Fault"> | string
    location?: StringNullableWithAggregatesFilter<"Fault"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Fault"> | string | null
    detectedAt?: DateTimeWithAggregatesFilter<"Fault"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Fault"> | Date | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Fault"> | string | null
    networkDataId?: StringNullableWithAggregatesFilter<"Fault"> | string | null
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: StringFilter<"Prediction"> | string
    networkSegment?: StringFilter<"Prediction"> | string
    riskLevel?: EnumRiskLevelFilter<"Prediction"> | $Enums.RiskLevel
    probability?: FloatFilter<"Prediction"> | number
    recommendation?: StringNullableFilter<"Prediction"> | string | null
    predictedAt?: DateTimeFilter<"Prediction"> | Date | string
    faultId?: StringNullableFilter<"Prediction"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    networkSegment?: SortOrder
    riskLevel?: SortOrder
    probability?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    predictedAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    fault?: FaultOrderByWithRelationInput
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    networkSegment?: StringFilter<"Prediction"> | string
    riskLevel?: EnumRiskLevelFilter<"Prediction"> | $Enums.RiskLevel
    probability?: FloatFilter<"Prediction"> | number
    recommendation?: StringNullableFilter<"Prediction"> | string | null
    predictedAt?: DateTimeFilter<"Prediction"> | Date | string
    faultId?: StringNullableFilter<"Prediction"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
  }, "id">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    networkSegment?: SortOrder
    riskLevel?: SortOrder
    probability?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    predictedAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _avg?: PredictionAvgOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
    _sum?: PredictionSumOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prediction"> | string
    networkSegment?: StringWithAggregatesFilter<"Prediction"> | string
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Prediction"> | $Enums.RiskLevel
    probability?: FloatWithAggregatesFilter<"Prediction"> | number
    recommendation?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    predictedAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    faultId?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    level?: EnumAlertLevelFilter<"Alert"> | $Enums.AlertLevel
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    faultId?: StringNullableFilter<"Alert"> | string | null
    acknowledgedById?: StringNullableFilter<"Alert"> | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    acknowledgedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    acknowledgedById?: SortOrderInput | SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    fault?: FaultOrderByWithRelationInput
    acknowledgedBy?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    level?: EnumAlertLevelFilter<"Alert"> | $Enums.AlertLevel
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    faultId?: StringNullableFilter<"Alert"> | string | null
    acknowledgedById?: StringNullableFilter<"Alert"> | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    acknowledgedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    acknowledgedById?: SortOrderInput | SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    title?: StringWithAggregatesFilter<"Alert"> | string
    description?: StringWithAggregatesFilter<"Alert"> | string
    level?: EnumAlertLevelWithAggregatesFilter<"Alert"> | $Enums.AlertLevel
    status?: EnumAlertStatusWithAggregatesFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    faultId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    acknowledgedById?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
  }

  export type SignalGeneratorWhereInput = {
    AND?: SignalGeneratorWhereInput | SignalGeneratorWhereInput[]
    OR?: SignalGeneratorWhereInput[]
    NOT?: SignalGeneratorWhereInput | SignalGeneratorWhereInput[]
    id?: StringFilter<"SignalGenerator"> | string
    deviceName?: StringFilter<"SignalGenerator"> | string
    serialNumber?: StringFilter<"SignalGenerator"> | string
    deviceType?: EnumDeviceTypeFilter<"SignalGenerator"> | $Enums.DeviceType
    status?: EnumDeviceStatusFilter<"SignalGenerator"> | $Enums.DeviceStatus
    location?: StringNullableFilter<"SignalGenerator"> | string | null
    lastReading?: DateTimeNullableFilter<"SignalGenerator"> | Date | string | null
    createdAt?: DateTimeFilter<"SignalGenerator"> | Date | string
  }

  export type SignalGeneratorOrderByWithRelationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    serialNumber?: SortOrder
    deviceType?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    lastReading?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SignalGeneratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    AND?: SignalGeneratorWhereInput | SignalGeneratorWhereInput[]
    OR?: SignalGeneratorWhereInput[]
    NOT?: SignalGeneratorWhereInput | SignalGeneratorWhereInput[]
    deviceName?: StringFilter<"SignalGenerator"> | string
    deviceType?: EnumDeviceTypeFilter<"SignalGenerator"> | $Enums.DeviceType
    status?: EnumDeviceStatusFilter<"SignalGenerator"> | $Enums.DeviceStatus
    location?: StringNullableFilter<"SignalGenerator"> | string | null
    lastReading?: DateTimeNullableFilter<"SignalGenerator"> | Date | string | null
    createdAt?: DateTimeFilter<"SignalGenerator"> | Date | string
  }, "id" | "serialNumber">

  export type SignalGeneratorOrderByWithAggregationInput = {
    id?: SortOrder
    deviceName?: SortOrder
    serialNumber?: SortOrder
    deviceType?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    lastReading?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SignalGeneratorCountOrderByAggregateInput
    _max?: SignalGeneratorMaxOrderByAggregateInput
    _min?: SignalGeneratorMinOrderByAggregateInput
  }

  export type SignalGeneratorScalarWhereWithAggregatesInput = {
    AND?: SignalGeneratorScalarWhereWithAggregatesInput | SignalGeneratorScalarWhereWithAggregatesInput[]
    OR?: SignalGeneratorScalarWhereWithAggregatesInput[]
    NOT?: SignalGeneratorScalarWhereWithAggregatesInput | SignalGeneratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SignalGenerator"> | string
    deviceName?: StringWithAggregatesFilter<"SignalGenerator"> | string
    serialNumber?: StringWithAggregatesFilter<"SignalGenerator"> | string
    deviceType?: EnumDeviceTypeWithAggregatesFilter<"SignalGenerator"> | $Enums.DeviceType
    status?: EnumDeviceStatusWithAggregatesFilter<"SignalGenerator"> | $Enums.DeviceStatus
    location?: StringNullableWithAggregatesFilter<"SignalGenerator"> | string | null
    lastReading?: DateTimeNullableWithAggregatesFilter<"SignalGenerator"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SignalGenerator"> | Date | string
  }

  export type MaintenanceTaskWhereInput = {
    AND?: MaintenanceTaskWhereInput | MaintenanceTaskWhereInput[]
    OR?: MaintenanceTaskWhereInput[]
    NOT?: MaintenanceTaskWhereInput | MaintenanceTaskWhereInput[]
    id?: StringFilter<"MaintenanceTask"> | string
    title?: StringFilter<"MaintenanceTask"> | string
    description?: StringNullableFilter<"MaintenanceTask"> | string | null
    priority?: EnumTaskPriorityFilter<"MaintenanceTask"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"MaintenanceTask"> | $Enums.TaskStatus
    dueAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    faultId?: StringNullableFilter<"MaintenanceTask"> | string | null
    assignedToId?: StringNullableFilter<"MaintenanceTask"> | string | null
    createdById?: StringNullableFilter<"MaintenanceTask"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MaintenanceTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    fault?: FaultOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type MaintenanceTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceTaskWhereInput | MaintenanceTaskWhereInput[]
    OR?: MaintenanceTaskWhereInput[]
    NOT?: MaintenanceTaskWhereInput | MaintenanceTaskWhereInput[]
    title?: StringFilter<"MaintenanceTask"> | string
    description?: StringNullableFilter<"MaintenanceTask"> | string | null
    priority?: EnumTaskPriorityFilter<"MaintenanceTask"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"MaintenanceTask"> | $Enums.TaskStatus
    dueAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    faultId?: StringNullableFilter<"MaintenanceTask"> | string | null
    assignedToId?: StringNullableFilter<"MaintenanceTask"> | string | null
    createdById?: StringNullableFilter<"MaintenanceTask"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MaintenanceTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faultId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: MaintenanceTaskCountOrderByAggregateInput
    _max?: MaintenanceTaskMaxOrderByAggregateInput
    _min?: MaintenanceTaskMinOrderByAggregateInput
  }

  export type MaintenanceTaskScalarWhereWithAggregatesInput = {
    AND?: MaintenanceTaskScalarWhereWithAggregatesInput | MaintenanceTaskScalarWhereWithAggregatesInput[]
    OR?: MaintenanceTaskScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceTaskScalarWhereWithAggregatesInput | MaintenanceTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceTask"> | string
    title?: StringWithAggregatesFilter<"MaintenanceTask"> | string
    description?: StringNullableWithAggregatesFilter<"MaintenanceTask"> | string | null
    priority?: EnumTaskPriorityWithAggregatesFilter<"MaintenanceTask"> | $Enums.TaskPriority
    status?: EnumTaskStatusWithAggregatesFilter<"MaintenanceTask"> | $Enums.TaskStatus
    dueAt?: DateTimeNullableWithAggregatesFilter<"MaintenanceTask"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"MaintenanceTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceTask"> | Date | string
    faultId?: StringNullableWithAggregatesFilter<"MaintenanceTask"> | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"MaintenanceTask"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"MaintenanceTask"> | string | null
  }

  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    description?: StringNullableFilter<"SupportTicket"> | string | null
    channel?: EnumTicketChannelFilter<"SupportTicket"> | $Enums.TicketChannel
    priority?: EnumAlertLevelFilter<"SupportTicket"> | $Enums.AlertLevel
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    faultId?: StringNullableFilter<"SupportTicket"> | string | null
    createdById?: StringNullableFilter<"SupportTicket"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    description?: SortOrderInput | SortOrder
    channel?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    faultId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    fault?: FaultOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    subject?: StringFilter<"SupportTicket"> | string
    description?: StringNullableFilter<"SupportTicket"> | string | null
    channel?: EnumTicketChannelFilter<"SupportTicket"> | $Enums.TicketChannel
    priority?: EnumAlertLevelFilter<"SupportTicket"> | $Enums.AlertLevel
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    faultId?: StringNullableFilter<"SupportTicket"> | string | null
    createdById?: StringNullableFilter<"SupportTicket"> | string | null
    fault?: XOR<FaultNullableScalarRelationFilter, FaultWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    description?: SortOrderInput | SortOrder
    channel?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    faultId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    subject?: StringWithAggregatesFilter<"SupportTicket"> | string
    description?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    channel?: EnumTicketChannelWithAggregatesFilter<"SupportTicket"> | $Enums.TicketChannel
    priority?: EnumAlertLevelWithAggregatesFilter<"SupportTicket"> | $Enums.AlertLevel
    status?: EnumTicketStatusWithAggregatesFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"SupportTicket"> | Date | string | null
    faultId?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetOtpCreateInput = {
    id?: string
    email: string
    otpHash: string
    attempts?: number
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetOtpUncheckedCreateInput = {
    id?: string
    email: string
    otpHash: string
    attempts?: number
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetOtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetOtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetOtpCreateManyInput = {
    id?: string
    email: string
    otpHash: string
    attempts?: number
    expiresAt: Date | string
    verifiedAt?: Date | string | null
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetOtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetOtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadDate?: Date | string
    uploadedBy: UserCreateNestedOneWithoutDatasetsInput
    networkData?: NetworkDataCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadedById: string
    uploadDate?: Date | string
    networkData?: NetworkDataUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    networkData?: NetworkDataUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    networkData?: NetworkDataUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetCreateManyInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadedById: string
    uploadDate?: Date | string
  }

  export type DatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkDataCreateInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    dataset?: DatasetCreateNestedOneWithoutNetworkDataInput
    faults?: FaultCreateNestedManyWithoutNetworkDataInput
  }

  export type NetworkDataUncheckedCreateInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    datasetId?: string | null
    faults?: FaultUncheckedCreateNestedManyWithoutNetworkDataInput
  }

  export type NetworkDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneWithoutNetworkDataNestedInput
    faults?: FaultUpdateManyWithoutNetworkDataNestedInput
  }

  export type NetworkDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    faults?: FaultUncheckedUpdateManyWithoutNetworkDataNestedInput
  }

  export type NetworkDataCreateManyInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    datasetId?: string | null
  }

  export type NetworkDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NetworkSiteCreateInput = {
    id?: string
    name: string
    location: string
    connectedTo: string
    distance: number
    distanceUnit?: string
    networkSegment?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkSiteUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    connectedTo: string
    distance: number
    distanceUnit?: string
    networkSegment?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkSiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    connectedTo?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    distanceUnit?: StringFieldUpdateOperationsInput | string
    networkSegment?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkSiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    connectedTo?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    distanceUnit?: StringFieldUpdateOperationsInput | string
    networkSegment?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkSiteCreateManyInput = {
    id?: string
    name: string
    location: string
    connectedTo: string
    distance: number
    distanceUnit?: string
    networkSegment?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NetworkSiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    connectedTo?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    distanceUnit?: StringFieldUpdateOperationsInput | string
    networkSegment?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkSiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    connectedTo?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    distanceUnit?: StringFieldUpdateOperationsInput | string
    networkSegment?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaultCreateInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type FaultCreateManyInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
  }

  export type FaultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FaultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PredictionCreateInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
    fault?: FaultCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionUncheckedCreateInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
    faultId?: string | null
  }

  export type PredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fault?: FaultUpdateOneWithoutPredictionsNestedInput
  }

  export type PredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PredictionCreateManyInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
    faultId?: string | null
  }

  export type PredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertCreateInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    acknowledgedAt?: Date | string | null
    fault?: FaultCreateNestedOneWithoutAlertsInput
    acknowledgedBy?: UserCreateNestedOneWithoutAcknowledgedInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    faultId?: string | null
    acknowledgedById?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fault?: FaultUpdateOneWithoutAlertsNestedInput
    acknowledgedBy?: UserUpdateOneWithoutAcknowledgedNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedById?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertCreateManyInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    faultId?: string | null
    acknowledgedById?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedById?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SignalGeneratorCreateInput = {
    id?: string
    deviceName: string
    serialNumber: string
    deviceType: $Enums.DeviceType
    status?: $Enums.DeviceStatus
    location?: string | null
    lastReading?: Date | string | null
    createdAt?: Date | string
  }

  export type SignalGeneratorUncheckedCreateInput = {
    id?: string
    deviceName: string
    serialNumber: string
    deviceType: $Enums.DeviceType
    status?: $Enums.DeviceStatus
    location?: string | null
    lastReading?: Date | string | null
    createdAt?: Date | string
  }

  export type SignalGeneratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalGeneratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalGeneratorCreateManyInput = {
    id?: string
    deviceName: string
    serialNumber: string
    deviceType: $Enums.DeviceType
    status?: $Enums.DeviceStatus
    location?: string | null
    lastReading?: Date | string | null
    createdAt?: Date | string
  }

  export type SignalGeneratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalGeneratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceName?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    status?: EnumDeviceStatusFieldUpdateOperationsInput | $Enums.DeviceStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lastReading?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fault?: FaultCreateNestedOneWithoutTasksInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTasksInput
    createdBy?: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type MaintenanceTaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    assignedToId?: string | null
    createdById?: string | null
  }

  export type MaintenanceTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fault?: FaultUpdateOneWithoutTasksNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTasksNestedInput
    createdBy?: UserUpdateOneWithoutCreatedTasksNestedInput
  }

  export type MaintenanceTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    assignedToId?: string | null
    createdById?: string | null
  }

  export type MaintenanceTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketCreateInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    fault?: FaultCreateNestedOneWithoutTicketsInput
    createdBy?: UserCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    faultId?: string | null
    createdById?: string | null
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fault?: FaultUpdateOneWithoutTicketsNestedInput
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    faultId?: string | null
    createdById?: string | null
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    userId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
    userId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DatasetListRelationFilter = {
    every?: DatasetWhereInput
    some?: DatasetWhereInput
    none?: DatasetWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type FaultListRelationFilter = {
    every?: FaultWhereInput
    some?: FaultWhereInput
    none?: FaultWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type MaintenanceTaskListRelationFilter = {
    every?: MaintenanceTaskWhereInput
    some?: MaintenanceTaskWhereInput
    none?: MaintenanceTaskWhereInput
  }

  export type SupportTicketListRelationFilter = {
    every?: SupportTicketWhereInput
    some?: SupportTicketWhereInput
    none?: SupportTicketWhereInput
  }

  export type DatasetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PasswordResetOtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetOtpAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type PasswordResetOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetOtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    attempts?: SortOrder
    expiresAt?: SortOrder
    verifiedAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetOtpSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NetworkDataListRelationFilter = {
    every?: NetworkDataWhereInput
    some?: NetworkDataWhereInput
    none?: NetworkDataWhereInput
  }

  export type NetworkDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadedById?: SortOrder
    uploadDate?: SortOrder
  }

  export type DatasetAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    recordCount?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadedById?: SortOrder
    uploadDate?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    recordCount?: SortOrder
    uploadedById?: SortOrder
    uploadDate?: SortOrder
  }

  export type DatasetSumOrderByAggregateInput = {
    fileSize?: SortOrder
    recordCount?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DatasetNullableScalarRelationFilter = {
    is?: DatasetWhereInput | null
    isNot?: DatasetWhereInput | null
  }

  export type NetworkDataCountOrderByAggregateInput = {
    id?: SortOrder
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
    networkSegment?: SortOrder
    timestamp?: SortOrder
    datasetId?: SortOrder
  }

  export type NetworkDataAvgOrderByAggregateInput = {
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
  }

  export type NetworkDataMaxOrderByAggregateInput = {
    id?: SortOrder
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
    networkSegment?: SortOrder
    timestamp?: SortOrder
    datasetId?: SortOrder
  }

  export type NetworkDataMinOrderByAggregateInput = {
    id?: SortOrder
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
    networkSegment?: SortOrder
    timestamp?: SortOrder
    datasetId?: SortOrder
  }

  export type NetworkDataSumOrderByAggregateInput = {
    signalStrength?: SortOrder
    signalLoss?: SortOrder
    errorRate?: SortOrder
    attenuation?: SortOrder
    reflectionLevel?: SortOrder
    distance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NetworkSiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    connectedTo?: SortOrder
    distance?: SortOrder
    distanceUnit?: SortOrder
    networkSegment?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkSiteAvgOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type NetworkSiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    connectedTo?: SortOrder
    distance?: SortOrder
    distanceUnit?: SortOrder
    networkSegment?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkSiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    connectedTo?: SortOrder
    distance?: SortOrder
    distanceUnit?: SortOrder
    networkSegment?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NetworkSiteSumOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type EnumFaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultTypeFilter<$PrismaModel> | $Enums.FaultType
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type EnumFaultStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultStatus | EnumFaultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultStatusFilter<$PrismaModel> | $Enums.FaultStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NetworkDataNullableScalarRelationFilter = {
    is?: NetworkDataWhereInput | null
    isNot?: NetworkDataWhereInput | null
  }

  export type PredictionListRelationFilter = {
    every?: PredictionWhereInput
    some?: PredictionWhereInput
    none?: PredictionWhereInput
  }

  export type PredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaultCountOrderByAggregateInput = {
    id?: SortOrder
    faultType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    networkSegment?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    assignedToId?: SortOrder
    networkDataId?: SortOrder
  }

  export type FaultAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type FaultMaxOrderByAggregateInput = {
    id?: SortOrder
    faultType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    networkSegment?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    assignedToId?: SortOrder
    networkDataId?: SortOrder
  }

  export type FaultMinOrderByAggregateInput = {
    id?: SortOrder
    faultType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    confidenceScore?: SortOrder
    networkSegment?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    assignedToId?: SortOrder
    networkDataId?: SortOrder
  }

  export type FaultSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type EnumFaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.FaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultTypeFilter<$PrismaModel>
    _max?: NestedEnumFaultTypeFilter<$PrismaModel>
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type EnumFaultStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultStatus | EnumFaultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultStatusWithAggregatesFilter<$PrismaModel> | $Enums.FaultStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultStatusFilter<$PrismaModel>
    _max?: NestedEnumFaultStatusFilter<$PrismaModel>
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type FaultNullableScalarRelationFilter = {
    is?: FaultWhereInput | null
    isNot?: FaultWhereInput | null
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    networkSegment?: SortOrder
    riskLevel?: SortOrder
    probability?: SortOrder
    recommendation?: SortOrder
    predictedAt?: SortOrder
    faultId?: SortOrder
  }

  export type PredictionAvgOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    networkSegment?: SortOrder
    riskLevel?: SortOrder
    probability?: SortOrder
    recommendation?: SortOrder
    predictedAt?: SortOrder
    faultId?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    networkSegment?: SortOrder
    riskLevel?: SortOrder
    probability?: SortOrder
    recommendation?: SortOrder
    predictedAt?: SortOrder
    faultId?: SortOrder
  }

  export type PredictionSumOrderByAggregateInput = {
    probability?: SortOrder
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type EnumAlertLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertLevel | EnumAlertLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertLevelFilter<$PrismaModel> | $Enums.AlertLevel
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    faultId?: SortOrder
    acknowledgedById?: SortOrder
    acknowledgedAt?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    faultId?: SortOrder
    acknowledgedById?: SortOrder
    acknowledgedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    faultId?: SortOrder
    acknowledgedById?: SortOrder
    acknowledgedAt?: SortOrder
  }

  export type EnumAlertLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertLevel | EnumAlertLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertLevelWithAggregatesFilter<$PrismaModel> | $Enums.AlertLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertLevelFilter<$PrismaModel>
    _max?: NestedEnumAlertLevelFilter<$PrismaModel>
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type EnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type SignalGeneratorCountOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    serialNumber?: SortOrder
    deviceType?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
  }

  export type SignalGeneratorMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    serialNumber?: SortOrder
    deviceType?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
  }

  export type SignalGeneratorMinOrderByAggregateInput = {
    id?: SortOrder
    deviceName?: SortOrder
    serialNumber?: SortOrder
    deviceType?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastReading?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type EnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type MaintenanceTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faultId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
  }

  export type MaintenanceTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faultId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
  }

  export type MaintenanceTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    dueAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faultId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTicketChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketChannel | EnumTicketChannelFieldRefInput<$PrismaModel>
    in?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketChannelFilter<$PrismaModel> | $Enums.TicketChannel
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    faultId?: SortOrder
    createdById?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    faultId?: SortOrder
    createdById?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    channel?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    faultId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumTicketChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketChannel | EnumTicketChannelFieldRefInput<$PrismaModel>
    in?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketChannelWithAggregatesFilter<$PrismaModel> | $Enums.TicketChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketChannelFilter<$PrismaModel>
    _max?: NestedEnumTicketChannelFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type DatasetCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FaultCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput> | FaultCreateWithoutAssignedToInput[] | FaultUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutAssignedToInput | FaultCreateOrConnectWithoutAssignedToInput[]
    createMany?: FaultCreateManyAssignedToInputEnvelope
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutAcknowledgedByInput = {
    create?: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput> | AlertCreateWithoutAcknowledgedByInput[] | AlertUncheckedCreateWithoutAcknowledgedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAcknowledgedByInput | AlertCreateOrConnectWithoutAcknowledgedByInput[]
    createMany?: AlertCreateManyAcknowledgedByInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type MaintenanceTaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput> | MaintenanceTaskCreateWithoutAssignedToInput[] | MaintenanceTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutAssignedToInput | MaintenanceTaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: MaintenanceTaskCreateManyAssignedToInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type MaintenanceTaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput> | MaintenanceTaskCreateWithoutCreatedByInput[] | MaintenanceTaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutCreatedByInput | MaintenanceTaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: MaintenanceTaskCreateManyCreatedByInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput> | SupportTicketCreateWithoutCreatedByInput[] | SupportTicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCreatedByInput | SupportTicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: SupportTicketCreateManyCreatedByInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type DatasetUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type FaultUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput> | FaultCreateWithoutAssignedToInput[] | FaultUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutAssignedToInput | FaultCreateOrConnectWithoutAssignedToInput[]
    createMany?: FaultCreateManyAssignedToInputEnvelope
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput = {
    create?: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput> | AlertCreateWithoutAcknowledgedByInput[] | AlertUncheckedCreateWithoutAcknowledgedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAcknowledgedByInput | AlertCreateOrConnectWithoutAcknowledgedByInput[]
    createMany?: AlertCreateManyAcknowledgedByInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput> | MaintenanceTaskCreateWithoutAssignedToInput[] | MaintenanceTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutAssignedToInput | MaintenanceTaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: MaintenanceTaskCreateManyAssignedToInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput> | MaintenanceTaskCreateWithoutCreatedByInput[] | MaintenanceTaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutCreatedByInput | MaintenanceTaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: MaintenanceTaskCreateManyCreatedByInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput> | SupportTicketCreateWithoutCreatedByInput[] | SupportTicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCreatedByInput | SupportTicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: SupportTicketCreateManyCreatedByInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatasetUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUploadedByInput | DatasetUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUploadedByInput | DatasetUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUploadedByInput | DatasetUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FaultUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput> | FaultCreateWithoutAssignedToInput[] | FaultUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutAssignedToInput | FaultCreateOrConnectWithoutAssignedToInput[]
    upsert?: FaultUpsertWithWhereUniqueWithoutAssignedToInput | FaultUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: FaultCreateManyAssignedToInputEnvelope
    set?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    disconnect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    delete?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    update?: FaultUpdateWithWhereUniqueWithoutAssignedToInput | FaultUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: FaultUpdateManyWithWhereWithoutAssignedToInput | FaultUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: FaultScalarWhereInput | FaultScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutAcknowledgedByNestedInput = {
    create?: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput> | AlertCreateWithoutAcknowledgedByInput[] | AlertUncheckedCreateWithoutAcknowledgedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAcknowledgedByInput | AlertCreateOrConnectWithoutAcknowledgedByInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutAcknowledgedByInput | AlertUpsertWithWhereUniqueWithoutAcknowledgedByInput[]
    createMany?: AlertCreateManyAcknowledgedByInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutAcknowledgedByInput | AlertUpdateWithWhereUniqueWithoutAcknowledgedByInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutAcknowledgedByInput | AlertUpdateManyWithWhereWithoutAcknowledgedByInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type MaintenanceTaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput> | MaintenanceTaskCreateWithoutAssignedToInput[] | MaintenanceTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutAssignedToInput | MaintenanceTaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutAssignedToInput | MaintenanceTaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: MaintenanceTaskCreateManyAssignedToInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutAssignedToInput | MaintenanceTaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutAssignedToInput | MaintenanceTaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type MaintenanceTaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput> | MaintenanceTaskCreateWithoutCreatedByInput[] | MaintenanceTaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutCreatedByInput | MaintenanceTaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutCreatedByInput | MaintenanceTaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MaintenanceTaskCreateManyCreatedByInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutCreatedByInput | MaintenanceTaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutCreatedByInput | MaintenanceTaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput> | SupportTicketCreateWithoutCreatedByInput[] | SupportTicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCreatedByInput | SupportTicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutCreatedByInput | SupportTicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SupportTicketCreateManyCreatedByInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutCreatedByInput | SupportTicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutCreatedByInput | SupportTicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type DatasetUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput> | DatasetCreateWithoutUploadedByInput[] | DatasetUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadedByInput | DatasetCreateOrConnectWithoutUploadedByInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUploadedByInput | DatasetUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DatasetCreateManyUploadedByInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUploadedByInput | DatasetUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUploadedByInput | DatasetUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type FaultUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput> | FaultCreateWithoutAssignedToInput[] | FaultUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutAssignedToInput | FaultCreateOrConnectWithoutAssignedToInput[]
    upsert?: FaultUpsertWithWhereUniqueWithoutAssignedToInput | FaultUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: FaultCreateManyAssignedToInputEnvelope
    set?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    disconnect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    delete?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    update?: FaultUpdateWithWhereUniqueWithoutAssignedToInput | FaultUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: FaultUpdateManyWithWhereWithoutAssignedToInput | FaultUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: FaultScalarWhereInput | FaultScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput = {
    create?: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput> | AlertCreateWithoutAcknowledgedByInput[] | AlertUncheckedCreateWithoutAcknowledgedByInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAcknowledgedByInput | AlertCreateOrConnectWithoutAcknowledgedByInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutAcknowledgedByInput | AlertUpsertWithWhereUniqueWithoutAcknowledgedByInput[]
    createMany?: AlertCreateManyAcknowledgedByInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutAcknowledgedByInput | AlertUpdateWithWhereUniqueWithoutAcknowledgedByInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutAcknowledgedByInput | AlertUpdateManyWithWhereWithoutAcknowledgedByInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput> | MaintenanceTaskCreateWithoutAssignedToInput[] | MaintenanceTaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutAssignedToInput | MaintenanceTaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutAssignedToInput | MaintenanceTaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: MaintenanceTaskCreateManyAssignedToInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutAssignedToInput | MaintenanceTaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutAssignedToInput | MaintenanceTaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput> | MaintenanceTaskCreateWithoutCreatedByInput[] | MaintenanceTaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutCreatedByInput | MaintenanceTaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutCreatedByInput | MaintenanceTaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: MaintenanceTaskCreateManyCreatedByInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutCreatedByInput | MaintenanceTaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutCreatedByInput | MaintenanceTaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput> | SupportTicketCreateWithoutCreatedByInput[] | SupportTicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutCreatedByInput | SupportTicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutCreatedByInput | SupportTicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SupportTicketCreateManyCreatedByInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutCreatedByInput | SupportTicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutCreatedByInput | SupportTicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserCreateNestedOneWithoutDatasetsInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    connect?: UserWhereUniqueInput
  }

  export type NetworkDataCreateNestedManyWithoutDatasetInput = {
    create?: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput> | NetworkDataCreateWithoutDatasetInput[] | NetworkDataUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: NetworkDataCreateOrConnectWithoutDatasetInput | NetworkDataCreateOrConnectWithoutDatasetInput[]
    createMany?: NetworkDataCreateManyDatasetInputEnvelope
    connect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
  }

  export type NetworkDataUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput> | NetworkDataCreateWithoutDatasetInput[] | NetworkDataUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: NetworkDataCreateOrConnectWithoutDatasetInput | NetworkDataCreateOrConnectWithoutDatasetInput[]
    createMany?: NetworkDataCreateManyDatasetInputEnvelope
    connect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDatasetsNestedInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    upsert?: UserUpsertWithoutDatasetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDatasetsInput, UserUpdateWithoutDatasetsInput>, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type NetworkDataUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput> | NetworkDataCreateWithoutDatasetInput[] | NetworkDataUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: NetworkDataCreateOrConnectWithoutDatasetInput | NetworkDataCreateOrConnectWithoutDatasetInput[]
    upsert?: NetworkDataUpsertWithWhereUniqueWithoutDatasetInput | NetworkDataUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: NetworkDataCreateManyDatasetInputEnvelope
    set?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    disconnect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    delete?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    connect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    update?: NetworkDataUpdateWithWhereUniqueWithoutDatasetInput | NetworkDataUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: NetworkDataUpdateManyWithWhereWithoutDatasetInput | NetworkDataUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: NetworkDataScalarWhereInput | NetworkDataScalarWhereInput[]
  }

  export type NetworkDataUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput> | NetworkDataCreateWithoutDatasetInput[] | NetworkDataUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: NetworkDataCreateOrConnectWithoutDatasetInput | NetworkDataCreateOrConnectWithoutDatasetInput[]
    upsert?: NetworkDataUpsertWithWhereUniqueWithoutDatasetInput | NetworkDataUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: NetworkDataCreateManyDatasetInputEnvelope
    set?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    disconnect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    delete?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    connect?: NetworkDataWhereUniqueInput | NetworkDataWhereUniqueInput[]
    update?: NetworkDataUpdateWithWhereUniqueWithoutDatasetInput | NetworkDataUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: NetworkDataUpdateManyWithWhereWithoutDatasetInput | NetworkDataUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: NetworkDataScalarWhereInput | NetworkDataScalarWhereInput[]
  }

  export type DatasetCreateNestedOneWithoutNetworkDataInput = {
    create?: XOR<DatasetCreateWithoutNetworkDataInput, DatasetUncheckedCreateWithoutNetworkDataInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutNetworkDataInput
    connect?: DatasetWhereUniqueInput
  }

  export type FaultCreateNestedManyWithoutNetworkDataInput = {
    create?: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput> | FaultCreateWithoutNetworkDataInput[] | FaultUncheckedCreateWithoutNetworkDataInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutNetworkDataInput | FaultCreateOrConnectWithoutNetworkDataInput[]
    createMany?: FaultCreateManyNetworkDataInputEnvelope
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
  }

  export type FaultUncheckedCreateNestedManyWithoutNetworkDataInput = {
    create?: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput> | FaultCreateWithoutNetworkDataInput[] | FaultUncheckedCreateWithoutNetworkDataInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutNetworkDataInput | FaultCreateOrConnectWithoutNetworkDataInput[]
    createMany?: FaultCreateManyNetworkDataInputEnvelope
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DatasetUpdateOneWithoutNetworkDataNestedInput = {
    create?: XOR<DatasetCreateWithoutNetworkDataInput, DatasetUncheckedCreateWithoutNetworkDataInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutNetworkDataInput
    upsert?: DatasetUpsertWithoutNetworkDataInput
    disconnect?: DatasetWhereInput | boolean
    delete?: DatasetWhereInput | boolean
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutNetworkDataInput, DatasetUpdateWithoutNetworkDataInput>, DatasetUncheckedUpdateWithoutNetworkDataInput>
  }

  export type FaultUpdateManyWithoutNetworkDataNestedInput = {
    create?: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput> | FaultCreateWithoutNetworkDataInput[] | FaultUncheckedCreateWithoutNetworkDataInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutNetworkDataInput | FaultCreateOrConnectWithoutNetworkDataInput[]
    upsert?: FaultUpsertWithWhereUniqueWithoutNetworkDataInput | FaultUpsertWithWhereUniqueWithoutNetworkDataInput[]
    createMany?: FaultCreateManyNetworkDataInputEnvelope
    set?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    disconnect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    delete?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    update?: FaultUpdateWithWhereUniqueWithoutNetworkDataInput | FaultUpdateWithWhereUniqueWithoutNetworkDataInput[]
    updateMany?: FaultUpdateManyWithWhereWithoutNetworkDataInput | FaultUpdateManyWithWhereWithoutNetworkDataInput[]
    deleteMany?: FaultScalarWhereInput | FaultScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FaultUncheckedUpdateManyWithoutNetworkDataNestedInput = {
    create?: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput> | FaultCreateWithoutNetworkDataInput[] | FaultUncheckedCreateWithoutNetworkDataInput[]
    connectOrCreate?: FaultCreateOrConnectWithoutNetworkDataInput | FaultCreateOrConnectWithoutNetworkDataInput[]
    upsert?: FaultUpsertWithWhereUniqueWithoutNetworkDataInput | FaultUpsertWithWhereUniqueWithoutNetworkDataInput[]
    createMany?: FaultCreateManyNetworkDataInputEnvelope
    set?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    disconnect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    delete?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    connect?: FaultWhereUniqueInput | FaultWhereUniqueInput[]
    update?: FaultUpdateWithWhereUniqueWithoutNetworkDataInput | FaultUpdateWithWhereUniqueWithoutNetworkDataInput[]
    updateMany?: FaultUpdateManyWithWhereWithoutNetworkDataInput | FaultUpdateManyWithWhereWithoutNetworkDataInput[]
    deleteMany?: FaultScalarWhereInput | FaultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedFaultsInput = {
    create?: XOR<UserCreateWithoutAssignedFaultsInput, UserUncheckedCreateWithoutAssignedFaultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedFaultsInput
    connect?: UserWhereUniqueInput
  }

  export type NetworkDataCreateNestedOneWithoutFaultsInput = {
    create?: XOR<NetworkDataCreateWithoutFaultsInput, NetworkDataUncheckedCreateWithoutFaultsInput>
    connectOrCreate?: NetworkDataCreateOrConnectWithoutFaultsInput
    connect?: NetworkDataWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutFaultInput = {
    create?: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput> | AlertCreateWithoutFaultInput[] | AlertUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFaultInput | AlertCreateOrConnectWithoutFaultInput[]
    createMany?: AlertCreateManyFaultInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type PredictionCreateNestedManyWithoutFaultInput = {
    create?: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput> | PredictionCreateWithoutFaultInput[] | PredictionUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFaultInput | PredictionCreateOrConnectWithoutFaultInput[]
    createMany?: PredictionCreateManyFaultInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type MaintenanceTaskCreateNestedManyWithoutFaultInput = {
    create?: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput> | MaintenanceTaskCreateWithoutFaultInput[] | MaintenanceTaskUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutFaultInput | MaintenanceTaskCreateOrConnectWithoutFaultInput[]
    createMany?: MaintenanceTaskCreateManyFaultInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutFaultInput = {
    create?: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput> | SupportTicketCreateWithoutFaultInput[] | SupportTicketUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutFaultInput | SupportTicketCreateOrConnectWithoutFaultInput[]
    createMany?: SupportTicketCreateManyFaultInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutFaultInput = {
    create?: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput> | AlertCreateWithoutFaultInput[] | AlertUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFaultInput | AlertCreateOrConnectWithoutFaultInput[]
    createMany?: AlertCreateManyFaultInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutFaultInput = {
    create?: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput> | PredictionCreateWithoutFaultInput[] | PredictionUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFaultInput | PredictionCreateOrConnectWithoutFaultInput[]
    createMany?: PredictionCreateManyFaultInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput = {
    create?: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput> | MaintenanceTaskCreateWithoutFaultInput[] | MaintenanceTaskUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutFaultInput | MaintenanceTaskCreateOrConnectWithoutFaultInput[]
    createMany?: MaintenanceTaskCreateManyFaultInputEnvelope
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutFaultInput = {
    create?: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput> | SupportTicketCreateWithoutFaultInput[] | SupportTicketUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutFaultInput | SupportTicketCreateOrConnectWithoutFaultInput[]
    createMany?: SupportTicketCreateManyFaultInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type EnumFaultTypeFieldUpdateOperationsInput = {
    set?: $Enums.FaultType
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type EnumFaultStatusFieldUpdateOperationsInput = {
    set?: $Enums.FaultStatus
  }

  export type UserUpdateOneWithoutAssignedFaultsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedFaultsInput, UserUncheckedCreateWithoutAssignedFaultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedFaultsInput
    upsert?: UserUpsertWithoutAssignedFaultsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedFaultsInput, UserUpdateWithoutAssignedFaultsInput>, UserUncheckedUpdateWithoutAssignedFaultsInput>
  }

  export type NetworkDataUpdateOneWithoutFaultsNestedInput = {
    create?: XOR<NetworkDataCreateWithoutFaultsInput, NetworkDataUncheckedCreateWithoutFaultsInput>
    connectOrCreate?: NetworkDataCreateOrConnectWithoutFaultsInput
    upsert?: NetworkDataUpsertWithoutFaultsInput
    disconnect?: NetworkDataWhereInput | boolean
    delete?: NetworkDataWhereInput | boolean
    connect?: NetworkDataWhereUniqueInput
    update?: XOR<XOR<NetworkDataUpdateToOneWithWhereWithoutFaultsInput, NetworkDataUpdateWithoutFaultsInput>, NetworkDataUncheckedUpdateWithoutFaultsInput>
  }

  export type AlertUpdateManyWithoutFaultNestedInput = {
    create?: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput> | AlertCreateWithoutFaultInput[] | AlertUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFaultInput | AlertCreateOrConnectWithoutFaultInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutFaultInput | AlertUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: AlertCreateManyFaultInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutFaultInput | AlertUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutFaultInput | AlertUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type PredictionUpdateManyWithoutFaultNestedInput = {
    create?: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput> | PredictionCreateWithoutFaultInput[] | PredictionUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFaultInput | PredictionCreateOrConnectWithoutFaultInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutFaultInput | PredictionUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: PredictionCreateManyFaultInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutFaultInput | PredictionUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutFaultInput | PredictionUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type MaintenanceTaskUpdateManyWithoutFaultNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput> | MaintenanceTaskCreateWithoutFaultInput[] | MaintenanceTaskUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutFaultInput | MaintenanceTaskCreateOrConnectWithoutFaultInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutFaultInput | MaintenanceTaskUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: MaintenanceTaskCreateManyFaultInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutFaultInput | MaintenanceTaskUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutFaultInput | MaintenanceTaskUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutFaultNestedInput = {
    create?: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput> | SupportTicketCreateWithoutFaultInput[] | SupportTicketUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutFaultInput | SupportTicketCreateOrConnectWithoutFaultInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutFaultInput | SupportTicketUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: SupportTicketCreateManyFaultInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutFaultInput | SupportTicketUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutFaultInput | SupportTicketUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutFaultNestedInput = {
    create?: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput> | AlertCreateWithoutFaultInput[] | AlertUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutFaultInput | AlertCreateOrConnectWithoutFaultInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutFaultInput | AlertUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: AlertCreateManyFaultInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutFaultInput | AlertUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutFaultInput | AlertUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutFaultNestedInput = {
    create?: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput> | PredictionCreateWithoutFaultInput[] | PredictionUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutFaultInput | PredictionCreateOrConnectWithoutFaultInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutFaultInput | PredictionUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: PredictionCreateManyFaultInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutFaultInput | PredictionUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutFaultInput | PredictionUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput = {
    create?: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput> | MaintenanceTaskCreateWithoutFaultInput[] | MaintenanceTaskUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: MaintenanceTaskCreateOrConnectWithoutFaultInput | MaintenanceTaskCreateOrConnectWithoutFaultInput[]
    upsert?: MaintenanceTaskUpsertWithWhereUniqueWithoutFaultInput | MaintenanceTaskUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: MaintenanceTaskCreateManyFaultInputEnvelope
    set?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    disconnect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    delete?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    connect?: MaintenanceTaskWhereUniqueInput | MaintenanceTaskWhereUniqueInput[]
    update?: MaintenanceTaskUpdateWithWhereUniqueWithoutFaultInput | MaintenanceTaskUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: MaintenanceTaskUpdateManyWithWhereWithoutFaultInput | MaintenanceTaskUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutFaultNestedInput = {
    create?: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput> | SupportTicketCreateWithoutFaultInput[] | SupportTicketUncheckedCreateWithoutFaultInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutFaultInput | SupportTicketCreateOrConnectWithoutFaultInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutFaultInput | SupportTicketUpsertWithWhereUniqueWithoutFaultInput[]
    createMany?: SupportTicketCreateManyFaultInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutFaultInput | SupportTicketUpdateWithWhereUniqueWithoutFaultInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutFaultInput | SupportTicketUpdateManyWithWhereWithoutFaultInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type FaultCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<FaultCreateWithoutPredictionsInput, FaultUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutPredictionsInput
    connect?: FaultWhereUniqueInput
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type FaultUpdateOneWithoutPredictionsNestedInput = {
    create?: XOR<FaultCreateWithoutPredictionsInput, FaultUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutPredictionsInput
    upsert?: FaultUpsertWithoutPredictionsInput
    disconnect?: FaultWhereInput | boolean
    delete?: FaultWhereInput | boolean
    connect?: FaultWhereUniqueInput
    update?: XOR<XOR<FaultUpdateToOneWithWhereWithoutPredictionsInput, FaultUpdateWithoutPredictionsInput>, FaultUncheckedUpdateWithoutPredictionsInput>
  }

  export type FaultCreateNestedOneWithoutAlertsInput = {
    create?: XOR<FaultCreateWithoutAlertsInput, FaultUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutAlertsInput
    connect?: FaultWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAcknowledgedInput = {
    create?: XOR<UserCreateWithoutAcknowledgedInput, UserUncheckedCreateWithoutAcknowledgedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcknowledgedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertLevelFieldUpdateOperationsInput = {
    set?: $Enums.AlertLevel
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type FaultUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<FaultCreateWithoutAlertsInput, FaultUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutAlertsInput
    upsert?: FaultUpsertWithoutAlertsInput
    disconnect?: FaultWhereInput | boolean
    delete?: FaultWhereInput | boolean
    connect?: FaultWhereUniqueInput
    update?: XOR<XOR<FaultUpdateToOneWithWhereWithoutAlertsInput, FaultUpdateWithoutAlertsInput>, FaultUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateOneWithoutAcknowledgedNestedInput = {
    create?: XOR<UserCreateWithoutAcknowledgedInput, UserUncheckedCreateWithoutAcknowledgedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcknowledgedInput
    upsert?: UserUpsertWithoutAcknowledgedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAcknowledgedInput, UserUpdateWithoutAcknowledgedInput>, UserUncheckedUpdateWithoutAcknowledgedInput>
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type EnumDeviceStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeviceStatus
  }

  export type FaultCreateNestedOneWithoutTasksInput = {
    create?: XOR<FaultCreateWithoutTasksInput, FaultUncheckedCreateWithoutTasksInput>
    connectOrCreate?: FaultCreateOrConnectWithoutTasksInput
    connect?: FaultWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type FaultUpdateOneWithoutTasksNestedInput = {
    create?: XOR<FaultCreateWithoutTasksInput, FaultUncheckedCreateWithoutTasksInput>
    connectOrCreate?: FaultCreateOrConnectWithoutTasksInput
    upsert?: FaultUpsertWithoutTasksInput
    disconnect?: FaultWhereInput | boolean
    delete?: FaultWhereInput | boolean
    connect?: FaultWhereUniqueInput
    update?: XOR<XOR<FaultUpdateToOneWithWhereWithoutTasksInput, FaultUpdateWithoutTasksInput>, FaultUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateOneWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type FaultCreateNestedOneWithoutTicketsInput = {
    create?: XOR<FaultCreateWithoutTicketsInput, FaultUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutTicketsInput
    connect?: FaultWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTicketChannelFieldUpdateOperationsInput = {
    set?: $Enums.TicketChannel
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type FaultUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<FaultCreateWithoutTicketsInput, FaultUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FaultCreateOrConnectWithoutTicketsInput
    upsert?: FaultUpsertWithoutTicketsInput
    disconnect?: FaultWhereInput | boolean
    delete?: FaultWhereInput | boolean
    connect?: FaultWhereUniqueInput
    update?: XOR<XOR<FaultUpdateToOneWithWhereWithoutTicketsInput, FaultUpdateWithoutTicketsInput>, FaultUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumFaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultTypeFilter<$PrismaModel> | $Enums.FaultType
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumFaultStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultStatus | EnumFaultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultStatusFilter<$PrismaModel> | $Enums.FaultStatus
  }

  export type NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultType[] | ListEnumFaultTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.FaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultTypeFilter<$PrismaModel>
    _max?: NestedEnumFaultTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumFaultStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultStatus | EnumFaultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FaultStatus[] | ListEnumFaultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFaultStatusWithAggregatesFilter<$PrismaModel> | $Enums.FaultStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultStatusFilter<$PrismaModel>
    _max?: NestedEnumFaultStatusFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumAlertLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertLevel | EnumAlertLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertLevelFilter<$PrismaModel> | $Enums.AlertLevel
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type NestedEnumAlertLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertLevel | EnumAlertLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertLevel[] | ListEnumAlertLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertLevelWithAggregatesFilter<$PrismaModel> | $Enums.AlertLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertLevelFilter<$PrismaModel>
    _max?: NestedEnumAlertLevelFilter<$PrismaModel>
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusFilter<$PrismaModel> | $Enums.DeviceStatus
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceStatus | EnumDeviceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceStatus[] | ListEnumDeviceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeviceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceStatusFilter<$PrismaModel>
    _max?: NestedEnumDeviceStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketChannel | EnumTicketChannelFieldRefInput<$PrismaModel>
    in?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketChannelFilter<$PrismaModel> | $Enums.TicketChannel
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketChannel | EnumTicketChannelFieldRefInput<$PrismaModel>
    in?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketChannel[] | ListEnumTicketChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketChannelWithAggregatesFilter<$PrismaModel> | $Enums.TicketChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketChannelFilter<$PrismaModel>
    _max?: NestedEnumTicketChannelFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type DatasetCreateWithoutUploadedByInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadDate?: Date | string
    networkData?: NetworkDataCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutUploadedByInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadDate?: Date | string
    networkData?: NetworkDataUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput>
  }

  export type DatasetCreateManyUploadedByInputEnvelope = {
    data: DatasetCreateManyUploadedByInput | DatasetCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FaultCreateWithoutAssignedToInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutAssignedToInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    networkDataId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutAssignedToInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput>
  }

  export type FaultCreateManyAssignedToInputEnvelope = {
    data: FaultCreateManyAssignedToInput | FaultCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutAcknowledgedByInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    acknowledgedAt?: Date | string | null
    fault?: FaultCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutAcknowledgedByInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    faultId?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutAcknowledgedByInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput>
  }

  export type AlertCreateManyAcknowledgedByInputEnvelope = {
    data: AlertCreateManyAcknowledgedByInput | AlertCreateManyAcknowledgedByInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceTaskCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fault?: FaultCreateNestedOneWithoutTasksInput
    createdBy?: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type MaintenanceTaskUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    createdById?: string | null
  }

  export type MaintenanceTaskCreateOrConnectWithoutAssignedToInput = {
    where: MaintenanceTaskWhereUniqueInput
    create: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput>
  }

  export type MaintenanceTaskCreateManyAssignedToInputEnvelope = {
    data: MaintenanceTaskCreateManyAssignedToInput | MaintenanceTaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceTaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fault?: FaultCreateNestedOneWithoutTasksInput
    assignedTo?: UserCreateNestedOneWithoutAssignedTasksInput
  }

  export type MaintenanceTaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    assignedToId?: string | null
  }

  export type MaintenanceTaskCreateOrConnectWithoutCreatedByInput = {
    where: MaintenanceTaskWhereUniqueInput
    create: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput>
  }

  export type MaintenanceTaskCreateManyCreatedByInputEnvelope = {
    data: MaintenanceTaskCreateManyCreatedByInput | MaintenanceTaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutCreatedByInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    fault?: FaultCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateWithoutCreatedByInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    faultId?: string | null
  }

  export type SupportTicketCreateOrConnectWithoutCreatedByInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput>
  }

  export type SupportTicketCreateManyCreatedByInputEnvelope = {
    data: SupportTicketCreateManyCreatedByInput | SupportTicketCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    update: XOR<DatasetUpdateWithoutUploadedByInput, DatasetUncheckedUpdateWithoutUploadedByInput>
    create: XOR<DatasetCreateWithoutUploadedByInput, DatasetUncheckedCreateWithoutUploadedByInput>
  }

  export type DatasetUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: DatasetWhereUniqueInput
    data: XOR<DatasetUpdateWithoutUploadedByInput, DatasetUncheckedUpdateWithoutUploadedByInput>
  }

  export type DatasetUpdateManyWithWhereWithoutUploadedByInput = {
    where: DatasetScalarWhereInput
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type DatasetScalarWhereInput = {
    AND?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    OR?: DatasetScalarWhereInput[]
    NOT?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    id?: StringFilter<"Dataset"> | string
    fileName?: StringFilter<"Dataset"> | string
    fileSize?: IntFilter<"Dataset"> | number
    recordCount?: IntFilter<"Dataset"> | number
    uploadedById?: StringFilter<"Dataset"> | string
    uploadDate?: DateTimeFilter<"Dataset"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type FaultUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: FaultWhereUniqueInput
    update: XOR<FaultUpdateWithoutAssignedToInput, FaultUncheckedUpdateWithoutAssignedToInput>
    create: XOR<FaultCreateWithoutAssignedToInput, FaultUncheckedCreateWithoutAssignedToInput>
  }

  export type FaultUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: FaultWhereUniqueInput
    data: XOR<FaultUpdateWithoutAssignedToInput, FaultUncheckedUpdateWithoutAssignedToInput>
  }

  export type FaultUpdateManyWithWhereWithoutAssignedToInput = {
    where: FaultScalarWhereInput
    data: XOR<FaultUpdateManyMutationInput, FaultUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type FaultScalarWhereInput = {
    AND?: FaultScalarWhereInput | FaultScalarWhereInput[]
    OR?: FaultScalarWhereInput[]
    NOT?: FaultScalarWhereInput | FaultScalarWhereInput[]
    id?: StringFilter<"Fault"> | string
    faultType?: EnumFaultTypeFilter<"Fault"> | $Enums.FaultType
    severity?: EnumSeverityFilter<"Fault"> | $Enums.Severity
    status?: EnumFaultStatusFilter<"Fault"> | $Enums.FaultStatus
    confidenceScore?: FloatFilter<"Fault"> | number
    networkSegment?: StringFilter<"Fault"> | string
    location?: StringNullableFilter<"Fault"> | string | null
    notes?: StringNullableFilter<"Fault"> | string | null
    detectedAt?: DateTimeFilter<"Fault"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Fault"> | Date | string | null
    assignedToId?: StringNullableFilter<"Fault"> | string | null
    networkDataId?: StringNullableFilter<"Fault"> | string | null
  }

  export type AlertUpsertWithWhereUniqueWithoutAcknowledgedByInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutAcknowledgedByInput, AlertUncheckedUpdateWithoutAcknowledgedByInput>
    create: XOR<AlertCreateWithoutAcknowledgedByInput, AlertUncheckedCreateWithoutAcknowledgedByInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutAcknowledgedByInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutAcknowledgedByInput, AlertUncheckedUpdateWithoutAcknowledgedByInput>
  }

  export type AlertUpdateManyWithWhereWithoutAcknowledgedByInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutAcknowledgedByInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    title?: StringFilter<"Alert"> | string
    description?: StringFilter<"Alert"> | string
    level?: EnumAlertLevelFilter<"Alert"> | $Enums.AlertLevel
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    faultId?: StringNullableFilter<"Alert"> | string | null
    acknowledgedById?: StringNullableFilter<"Alert"> | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
  }

  export type MaintenanceTaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: MaintenanceTaskWhereUniqueInput
    update: XOR<MaintenanceTaskUpdateWithoutAssignedToInput, MaintenanceTaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<MaintenanceTaskCreateWithoutAssignedToInput, MaintenanceTaskUncheckedCreateWithoutAssignedToInput>
  }

  export type MaintenanceTaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: MaintenanceTaskWhereUniqueInput
    data: XOR<MaintenanceTaskUpdateWithoutAssignedToInput, MaintenanceTaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type MaintenanceTaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: MaintenanceTaskScalarWhereInput
    data: XOR<MaintenanceTaskUpdateManyMutationInput, MaintenanceTaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type MaintenanceTaskScalarWhereInput = {
    AND?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
    OR?: MaintenanceTaskScalarWhereInput[]
    NOT?: MaintenanceTaskScalarWhereInput | MaintenanceTaskScalarWhereInput[]
    id?: StringFilter<"MaintenanceTask"> | string
    title?: StringFilter<"MaintenanceTask"> | string
    description?: StringNullableFilter<"MaintenanceTask"> | string | null
    priority?: EnumTaskPriorityFilter<"MaintenanceTask"> | $Enums.TaskPriority
    status?: EnumTaskStatusFilter<"MaintenanceTask"> | $Enums.TaskStatus
    dueAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"MaintenanceTask"> | Date | string | null
    createdAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceTask"> | Date | string
    faultId?: StringNullableFilter<"MaintenanceTask"> | string | null
    assignedToId?: StringNullableFilter<"MaintenanceTask"> | string | null
    createdById?: StringNullableFilter<"MaintenanceTask"> | string | null
  }

  export type MaintenanceTaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: MaintenanceTaskWhereUniqueInput
    update: XOR<MaintenanceTaskUpdateWithoutCreatedByInput, MaintenanceTaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<MaintenanceTaskCreateWithoutCreatedByInput, MaintenanceTaskUncheckedCreateWithoutCreatedByInput>
  }

  export type MaintenanceTaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: MaintenanceTaskWhereUniqueInput
    data: XOR<MaintenanceTaskUpdateWithoutCreatedByInput, MaintenanceTaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type MaintenanceTaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: MaintenanceTaskScalarWhereInput
    data: XOR<MaintenanceTaskUpdateManyMutationInput, MaintenanceTaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutCreatedByInput, SupportTicketUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SupportTicketCreateWithoutCreatedByInput, SupportTicketUncheckedCreateWithoutCreatedByInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutCreatedByInput, SupportTicketUncheckedUpdateWithoutCreatedByInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SupportTicketScalarWhereInput = {
    AND?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    OR?: SupportTicketScalarWhereInput[]
    NOT?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    description?: StringNullableFilter<"SupportTicket"> | string | null
    channel?: EnumTicketChannelFilter<"SupportTicket"> | $Enums.TicketChannel
    priority?: EnumAlertLevelFilter<"SupportTicket"> | $Enums.AlertLevel
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    faultId?: StringNullableFilter<"SupportTicket"> | string | null
    createdById?: StringNullableFilter<"SupportTicket"> | string | null
  }

  export type UserCreateWithoutDatasetsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDatasetsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDatasetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
  }

  export type NetworkDataCreateWithoutDatasetInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    faults?: FaultCreateNestedManyWithoutNetworkDataInput
  }

  export type NetworkDataUncheckedCreateWithoutDatasetInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    faults?: FaultUncheckedCreateNestedManyWithoutNetworkDataInput
  }

  export type NetworkDataCreateOrConnectWithoutDatasetInput = {
    where: NetworkDataWhereUniqueInput
    create: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput>
  }

  export type NetworkDataCreateManyDatasetInputEnvelope = {
    data: NetworkDataCreateManyDatasetInput | NetworkDataCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDatasetsInput = {
    update: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDatasetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type UserUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type NetworkDataUpsertWithWhereUniqueWithoutDatasetInput = {
    where: NetworkDataWhereUniqueInput
    update: XOR<NetworkDataUpdateWithoutDatasetInput, NetworkDataUncheckedUpdateWithoutDatasetInput>
    create: XOR<NetworkDataCreateWithoutDatasetInput, NetworkDataUncheckedCreateWithoutDatasetInput>
  }

  export type NetworkDataUpdateWithWhereUniqueWithoutDatasetInput = {
    where: NetworkDataWhereUniqueInput
    data: XOR<NetworkDataUpdateWithoutDatasetInput, NetworkDataUncheckedUpdateWithoutDatasetInput>
  }

  export type NetworkDataUpdateManyWithWhereWithoutDatasetInput = {
    where: NetworkDataScalarWhereInput
    data: XOR<NetworkDataUpdateManyMutationInput, NetworkDataUncheckedUpdateManyWithoutDatasetInput>
  }

  export type NetworkDataScalarWhereInput = {
    AND?: NetworkDataScalarWhereInput | NetworkDataScalarWhereInput[]
    OR?: NetworkDataScalarWhereInput[]
    NOT?: NetworkDataScalarWhereInput | NetworkDataScalarWhereInput[]
    id?: StringFilter<"NetworkData"> | string
    signalStrength?: FloatFilter<"NetworkData"> | number
    signalLoss?: FloatFilter<"NetworkData"> | number
    errorRate?: FloatFilter<"NetworkData"> | number
    attenuation?: FloatFilter<"NetworkData"> | number
    reflectionLevel?: FloatFilter<"NetworkData"> | number
    distance?: FloatFilter<"NetworkData"> | number
    networkSegment?: StringFilter<"NetworkData"> | string
    timestamp?: DateTimeFilter<"NetworkData"> | Date | string
    datasetId?: StringNullableFilter<"NetworkData"> | string | null
  }

  export type DatasetCreateWithoutNetworkDataInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadDate?: Date | string
    uploadedBy: UserCreateNestedOneWithoutDatasetsInput
  }

  export type DatasetUncheckedCreateWithoutNetworkDataInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadedById: string
    uploadDate?: Date | string
  }

  export type DatasetCreateOrConnectWithoutNetworkDataInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutNetworkDataInput, DatasetUncheckedCreateWithoutNetworkDataInput>
  }

  export type FaultCreateWithoutNetworkDataInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutNetworkDataInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutNetworkDataInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput>
  }

  export type FaultCreateManyNetworkDataInputEnvelope = {
    data: FaultCreateManyNetworkDataInput | FaultCreateManyNetworkDataInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithoutNetworkDataInput = {
    update: XOR<DatasetUpdateWithoutNetworkDataInput, DatasetUncheckedUpdateWithoutNetworkDataInput>
    create: XOR<DatasetCreateWithoutNetworkDataInput, DatasetUncheckedCreateWithoutNetworkDataInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutNetworkDataInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutNetworkDataInput, DatasetUncheckedUpdateWithoutNetworkDataInput>
  }

  export type DatasetUpdateWithoutNetworkDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutDatasetsNestedInput
  }

  export type DatasetUncheckedUpdateWithoutNetworkDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadedById?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaultUpsertWithWhereUniqueWithoutNetworkDataInput = {
    where: FaultWhereUniqueInput
    update: XOR<FaultUpdateWithoutNetworkDataInput, FaultUncheckedUpdateWithoutNetworkDataInput>
    create: XOR<FaultCreateWithoutNetworkDataInput, FaultUncheckedCreateWithoutNetworkDataInput>
  }

  export type FaultUpdateWithWhereUniqueWithoutNetworkDataInput = {
    where: FaultWhereUniqueInput
    data: XOR<FaultUpdateWithoutNetworkDataInput, FaultUncheckedUpdateWithoutNetworkDataInput>
  }

  export type FaultUpdateManyWithWhereWithoutNetworkDataInput = {
    where: FaultScalarWhereInput
    data: XOR<FaultUpdateManyMutationInput, FaultUncheckedUpdateManyWithoutNetworkDataInput>
  }

  export type UserCreateWithoutAssignedFaultsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedFaultsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedFaultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedFaultsInput, UserUncheckedCreateWithoutAssignedFaultsInput>
  }

  export type NetworkDataCreateWithoutFaultsInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    dataset?: DatasetCreateNestedOneWithoutNetworkDataInput
  }

  export type NetworkDataUncheckedCreateWithoutFaultsInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
    datasetId?: string | null
  }

  export type NetworkDataCreateOrConnectWithoutFaultsInput = {
    where: NetworkDataWhereUniqueInput
    create: XOR<NetworkDataCreateWithoutFaultsInput, NetworkDataUncheckedCreateWithoutFaultsInput>
  }

  export type AlertCreateWithoutFaultInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    acknowledgedAt?: Date | string | null
    acknowledgedBy?: UserCreateNestedOneWithoutAcknowledgedInput
  }

  export type AlertUncheckedCreateWithoutFaultInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    acknowledgedById?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutFaultInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput>
  }

  export type AlertCreateManyFaultInputEnvelope = {
    data: AlertCreateManyFaultInput | AlertCreateManyFaultInput[]
    skipDuplicates?: boolean
  }

  export type PredictionCreateWithoutFaultInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
  }

  export type PredictionUncheckedCreateWithoutFaultInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
  }

  export type PredictionCreateOrConnectWithoutFaultInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput>
  }

  export type PredictionCreateManyFaultInputEnvelope = {
    data: PredictionCreateManyFaultInput | PredictionCreateManyFaultInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceTaskCreateWithoutFaultInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedTasksInput
    createdBy?: UserCreateNestedOneWithoutCreatedTasksInput
  }

  export type MaintenanceTaskUncheckedCreateWithoutFaultInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedToId?: string | null
    createdById?: string | null
  }

  export type MaintenanceTaskCreateOrConnectWithoutFaultInput = {
    where: MaintenanceTaskWhereUniqueInput
    create: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput>
  }

  export type MaintenanceTaskCreateManyFaultInputEnvelope = {
    data: MaintenanceTaskCreateManyFaultInput | MaintenanceTaskCreateManyFaultInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutFaultInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateWithoutFaultInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    createdById?: string | null
  }

  export type SupportTicketCreateOrConnectWithoutFaultInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput>
  }

  export type SupportTicketCreateManyFaultInputEnvelope = {
    data: SupportTicketCreateManyFaultInput | SupportTicketCreateManyFaultInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssignedFaultsInput = {
    update: XOR<UserUpdateWithoutAssignedFaultsInput, UserUncheckedUpdateWithoutAssignedFaultsInput>
    create: XOR<UserCreateWithoutAssignedFaultsInput, UserUncheckedCreateWithoutAssignedFaultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedFaultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedFaultsInput, UserUncheckedUpdateWithoutAssignedFaultsInput>
  }

  export type UserUpdateWithoutAssignedFaultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedFaultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type NetworkDataUpsertWithoutFaultsInput = {
    update: XOR<NetworkDataUpdateWithoutFaultsInput, NetworkDataUncheckedUpdateWithoutFaultsInput>
    create: XOR<NetworkDataCreateWithoutFaultsInput, NetworkDataUncheckedCreateWithoutFaultsInput>
    where?: NetworkDataWhereInput
  }

  export type NetworkDataUpdateToOneWithWhereWithoutFaultsInput = {
    where?: NetworkDataWhereInput
    data: XOR<NetworkDataUpdateWithoutFaultsInput, NetworkDataUncheckedUpdateWithoutFaultsInput>
  }

  export type NetworkDataUpdateWithoutFaultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneWithoutNetworkDataNestedInput
  }

  export type NetworkDataUncheckedUpdateWithoutFaultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertUpsertWithWhereUniqueWithoutFaultInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutFaultInput, AlertUncheckedUpdateWithoutFaultInput>
    create: XOR<AlertCreateWithoutFaultInput, AlertUncheckedCreateWithoutFaultInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutFaultInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutFaultInput, AlertUncheckedUpdateWithoutFaultInput>
  }

  export type AlertUpdateManyWithWhereWithoutFaultInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutFaultInput>
  }

  export type PredictionUpsertWithWhereUniqueWithoutFaultInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutFaultInput, PredictionUncheckedUpdateWithoutFaultInput>
    create: XOR<PredictionCreateWithoutFaultInput, PredictionUncheckedCreateWithoutFaultInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutFaultInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutFaultInput, PredictionUncheckedUpdateWithoutFaultInput>
  }

  export type PredictionUpdateManyWithWhereWithoutFaultInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutFaultInput>
  }

  export type PredictionScalarWhereInput = {
    AND?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    OR?: PredictionScalarWhereInput[]
    NOT?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    id?: StringFilter<"Prediction"> | string
    networkSegment?: StringFilter<"Prediction"> | string
    riskLevel?: EnumRiskLevelFilter<"Prediction"> | $Enums.RiskLevel
    probability?: FloatFilter<"Prediction"> | number
    recommendation?: StringNullableFilter<"Prediction"> | string | null
    predictedAt?: DateTimeFilter<"Prediction"> | Date | string
    faultId?: StringNullableFilter<"Prediction"> | string | null
  }

  export type MaintenanceTaskUpsertWithWhereUniqueWithoutFaultInput = {
    where: MaintenanceTaskWhereUniqueInput
    update: XOR<MaintenanceTaskUpdateWithoutFaultInput, MaintenanceTaskUncheckedUpdateWithoutFaultInput>
    create: XOR<MaintenanceTaskCreateWithoutFaultInput, MaintenanceTaskUncheckedCreateWithoutFaultInput>
  }

  export type MaintenanceTaskUpdateWithWhereUniqueWithoutFaultInput = {
    where: MaintenanceTaskWhereUniqueInput
    data: XOR<MaintenanceTaskUpdateWithoutFaultInput, MaintenanceTaskUncheckedUpdateWithoutFaultInput>
  }

  export type MaintenanceTaskUpdateManyWithWhereWithoutFaultInput = {
    where: MaintenanceTaskScalarWhereInput
    data: XOR<MaintenanceTaskUpdateManyMutationInput, MaintenanceTaskUncheckedUpdateManyWithoutFaultInput>
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutFaultInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutFaultInput, SupportTicketUncheckedUpdateWithoutFaultInput>
    create: XOR<SupportTicketCreateWithoutFaultInput, SupportTicketUncheckedCreateWithoutFaultInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutFaultInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutFaultInput, SupportTicketUncheckedUpdateWithoutFaultInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutFaultInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutFaultInput>
  }

  export type FaultCreateWithoutPredictionsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutPredictionsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutPredictionsInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutPredictionsInput, FaultUncheckedCreateWithoutPredictionsInput>
  }

  export type FaultUpsertWithoutPredictionsInput = {
    update: XOR<FaultUpdateWithoutPredictionsInput, FaultUncheckedUpdateWithoutPredictionsInput>
    create: XOR<FaultCreateWithoutPredictionsInput, FaultUncheckedCreateWithoutPredictionsInput>
    where?: FaultWhereInput
  }

  export type FaultUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: FaultWhereInput
    data: XOR<FaultUpdateWithoutPredictionsInput, FaultUncheckedUpdateWithoutPredictionsInput>
  }

  export type FaultUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutPredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type FaultCreateWithoutAlertsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutAlertsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutAlertsInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutAlertsInput, FaultUncheckedCreateWithoutAlertsInput>
  }

  export type UserCreateWithoutAcknowledgedInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAcknowledgedInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAcknowledgedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcknowledgedInput, UserUncheckedCreateWithoutAcknowledgedInput>
  }

  export type FaultUpsertWithoutAlertsInput = {
    update: XOR<FaultUpdateWithoutAlertsInput, FaultUncheckedUpdateWithoutAlertsInput>
    create: XOR<FaultCreateWithoutAlertsInput, FaultUncheckedCreateWithoutAlertsInput>
    where?: FaultWhereInput
  }

  export type FaultUpdateToOneWithWhereWithoutAlertsInput = {
    where?: FaultWhereInput
    data: XOR<FaultUpdateWithoutAlertsInput, FaultUncheckedUpdateWithoutAlertsInput>
  }

  export type FaultUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type UserUpsertWithoutAcknowledgedInput = {
    update: XOR<UserUpdateWithoutAcknowledgedInput, UserUncheckedUpdateWithoutAcknowledgedInput>
    create: XOR<UserCreateWithoutAcknowledgedInput, UserUncheckedCreateWithoutAcknowledgedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAcknowledgedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAcknowledgedInput, UserUncheckedUpdateWithoutAcknowledgedInput>
  }

  export type UserUpdateWithoutAcknowledgedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAcknowledgedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FaultCreateWithoutTasksInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutTasksInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutTasksInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutTasksInput, FaultUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type FaultUpsertWithoutTasksInput = {
    update: XOR<FaultUpdateWithoutTasksInput, FaultUncheckedUpdateWithoutTasksInput>
    create: XOR<FaultCreateWithoutTasksInput, FaultUncheckedCreateWithoutTasksInput>
    where?: FaultWhereInput
  }

  export type FaultUpdateToOneWithWhereWithoutTasksInput = {
    where?: FaultWhereInput
    data: XOR<FaultUpdateWithoutTasksInput, FaultUncheckedUpdateWithoutTasksInput>
  }

  export type FaultUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FaultCreateWithoutTicketsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedFaultsInput
    networkData?: NetworkDataCreateNestedOneWithoutFaultsInput
    alerts?: AlertCreateNestedManyWithoutFaultInput
    predictions?: PredictionCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskCreateNestedManyWithoutFaultInput
  }

  export type FaultUncheckedCreateWithoutTicketsInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
    networkDataId?: string | null
    alerts?: AlertUncheckedCreateNestedManyWithoutFaultInput
    predictions?: PredictionUncheckedCreateNestedManyWithoutFaultInput
    tasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutFaultInput
  }

  export type FaultCreateOrConnectWithoutTicketsInput = {
    where: FaultWhereUniqueInput
    create: XOR<FaultCreateWithoutTicketsInput, FaultUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type FaultUpsertWithoutTicketsInput = {
    update: XOR<FaultUpdateWithoutTicketsInput, FaultUncheckedUpdateWithoutTicketsInput>
    create: XOR<FaultCreateWithoutTicketsInput, FaultUncheckedCreateWithoutTicketsInput>
    where?: FaultWhereInput
  }

  export type FaultUpdateToOneWithWhereWithoutTicketsInput = {
    where?: FaultWhereInput
    data: XOR<FaultUpdateWithoutTicketsInput, FaultUncheckedUpdateWithoutTicketsInput>
  }

  export type FaultUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUploadedByInput
    assignedFaults?: FaultCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUploadedByInput
    assignedFaults?: FaultUncheckedCreateNestedManyWithoutAssignedToInput
    acknowledged?: AlertUncheckedCreateNestedManyWithoutAcknowledgedByInput
    assignedTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutAssignedToInput
    createdTasks?: MaintenanceTaskUncheckedCreateNestedManyWithoutCreatedByInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUploadedByNestedInput
    assignedFaults?: FaultUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUploadedByNestedInput
    assignedFaults?: FaultUncheckedUpdateManyWithoutAssignedToNestedInput
    acknowledged?: AlertUncheckedUpdateManyWithoutAcknowledgedByNestedInput
    assignedTasks?: MaintenanceTaskUncheckedUpdateManyWithoutAssignedToNestedInput
    createdTasks?: MaintenanceTaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DatasetCreateManyUploadedByInput = {
    id?: string
    fileName: string
    fileSize?: number
    recordCount?: number
    uploadDate?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    timestamp?: Date | string
  }

  export type FaultCreateManyAssignedToInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    networkDataId?: string | null
  }

  export type AlertCreateManyAcknowledgedByInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    faultId?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type MaintenanceTaskCreateManyAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    createdById?: string | null
  }

  export type MaintenanceTaskCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    faultId?: string | null
    assignedToId?: string | null
  }

  export type SupportTicketCreateManyCreatedByInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    faultId?: string | null
  }

  export type DatasetUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    networkData?: NetworkDataUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    networkData?: NetworkDataUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    recordCount?: IntFieldUpdateOperationsInput | number
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaultUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    networkData?: NetworkDataUpdateOneWithoutFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    networkDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertUpdateWithoutAcknowledgedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fault?: FaultUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutAcknowledgedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutAcknowledgedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceTaskUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fault?: FaultUpdateOneWithoutTasksNestedInput
    createdBy?: UserUpdateOneWithoutCreatedTasksNestedInput
  }

  export type MaintenanceTaskUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fault?: FaultUpdateOneWithoutTasksNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedTasksNestedInput
  }

  export type MaintenanceTaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fault?: FaultUpdateOneWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faultId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NetworkDataCreateManyDatasetInput = {
    id?: string
    signalStrength: number
    signalLoss: number
    errorRate: number
    attenuation: number
    reflectionLevel: number
    distance: number
    networkSegment: string
    timestamp?: Date | string
  }

  export type NetworkDataUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    faults?: FaultUpdateManyWithoutNetworkDataNestedInput
  }

  export type NetworkDataUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    faults?: FaultUncheckedUpdateManyWithoutNetworkDataNestedInput
  }

  export type NetworkDataUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    signalStrength?: FloatFieldUpdateOperationsInput | number
    signalLoss?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    attenuation?: FloatFieldUpdateOperationsInput | number
    reflectionLevel?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaultCreateManyNetworkDataInput = {
    id?: string
    faultType: $Enums.FaultType
    severity: $Enums.Severity
    status?: $Enums.FaultStatus
    confidenceScore: number
    networkSegment: string
    location?: string | null
    notes?: string | null
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    assignedToId?: string | null
  }

  export type FaultUpdateWithoutNetworkDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedTo?: UserUpdateOneWithoutAssignedFaultsNestedInput
    alerts?: AlertUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateWithoutNetworkDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    alerts?: AlertUncheckedUpdateManyWithoutFaultNestedInput
    predictions?: PredictionUncheckedUpdateManyWithoutFaultNestedInput
    tasks?: MaintenanceTaskUncheckedUpdateManyWithoutFaultNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutFaultNestedInput
  }

  export type FaultUncheckedUpdateManyWithoutNetworkDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    faultType?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumFaultStatusFieldUpdateOperationsInput | $Enums.FaultStatus
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    networkSegment?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertCreateManyFaultInput = {
    id?: string
    title: string
    description: string
    level: $Enums.AlertLevel
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    acknowledgedById?: string | null
    acknowledgedAt?: Date | string | null
  }

  export type PredictionCreateManyFaultInput = {
    id?: string
    networkSegment: string
    riskLevel: $Enums.RiskLevel
    probability: number
    recommendation?: string | null
    predictedAt?: Date | string
  }

  export type MaintenanceTaskCreateManyFaultInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.TaskPriority
    status?: $Enums.TaskStatus
    dueAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedToId?: string | null
    createdById?: string | null
  }

  export type SupportTicketCreateManyFaultInput = {
    id?: string
    subject: string
    description?: string | null
    channel?: $Enums.TicketChannel
    priority?: $Enums.AlertLevel
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    createdById?: string | null
  }

  export type AlertUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedBy?: UserUpdateOneWithoutAcknowledgedNestedInput
  }

  export type AlertUncheckedUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedById?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedById?: NullableStringFieldUpdateOperationsInput | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PredictionUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    networkSegment?: StringFieldUpdateOperationsInput | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    probability?: FloatFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    predictedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTaskUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedTasksNestedInput
    createdBy?: UserUpdateOneWithoutCreatedTasksNestedInput
  }

  export type MaintenanceTaskUncheckedUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTaskUncheckedUpdateManyWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportTicketUncheckedUpdateManyWithoutFaultInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    channel?: EnumTicketChannelFieldUpdateOperationsInput | $Enums.TicketChannel
    priority?: EnumAlertLevelFieldUpdateOperationsInput | $Enums.AlertLevel
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}