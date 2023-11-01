/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model achievement
 *
 */
export type achievement = $Result.DefaultSelection<Prisma.$achievementPayload>;
/**
 * Model bonus_allocation
 *
 */
export type bonus_allocation = $Result.DefaultSelection<Prisma.$bonus_allocationPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model employee_rank
 *
 */
export type employee_rank = $Result.DefaultSelection<Prisma.$employee_rankPayload>;
/**
 * Model incentive
 *
 */
export type incentive = $Result.DefaultSelection<Prisma.$incentivePayload>;
/**
 * Model incentive_scheme
 *
 */
export type incentive_scheme = $Result.DefaultSelection<Prisma.$incentive_schemePayload>;
/**
 * Model performance_metric
 *
 */
export type performance_metric = $Result.DefaultSelection<Prisma.$performance_metricPayload>;
/**
 * Model role
 *
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>;
/**
 * Model sales
 *
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>;
/**
 * Model sales_target
 *
 */
export type sales_target = $Result.DefaultSelection<Prisma.$sales_targetPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Achievements
 * const achievements = await prisma.achievement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **achievement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
   * ```
   */
  get achievement(): Prisma.achievementDelegate<ExtArgs>;

  /**
   * `prisma.bonus_allocation`: Exposes CRUD operations for the **bonus_allocation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bonus_allocations
   * const bonus_allocations = await prisma.bonus_allocation.findMany()
   * ```
   */
  get bonus_allocation(): Prisma.bonus_allocationDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.employee_rank`: Exposes CRUD operations for the **employee_rank** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employee_ranks
   * const employee_ranks = await prisma.employee_rank.findMany()
   * ```
   */
  get employee_rank(): Prisma.employee_rankDelegate<ExtArgs>;

  /**
   * `prisma.incentive`: Exposes CRUD operations for the **incentive** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Incentives
   * const incentives = await prisma.incentive.findMany()
   * ```
   */
  get incentive(): Prisma.incentiveDelegate<ExtArgs>;

  /**
   * `prisma.incentive_scheme`: Exposes CRUD operations for the **incentive_scheme** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Incentive_schemes
   * const incentive_schemes = await prisma.incentive_scheme.findMany()
   * ```
   */
  get incentive_scheme(): Prisma.incentive_schemeDelegate<ExtArgs>;

  /**
   * `prisma.performance_metric`: Exposes CRUD operations for the **performance_metric** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performance_metrics
   * const performance_metrics = await prisma.performance_metric.findMany()
   * ```
   */
  get performance_metric(): Prisma.performance_metricDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sales
   * const sales = await prisma.sales.findMany()
   * ```
   */
  get sales(): Prisma.salesDelegate<ExtArgs>;

  /**
   * `prisma.sales_target`: Exposes CRUD operations for the **sales_target** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sales_targets
   * const sales_targets = await prisma.sales_target.findMany()
   * ```
   */
  get sales_target(): Prisma.sales_targetDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    achievement: 'achievement';
    bonus_allocation: 'bonus_allocation';
    company: 'company';
    employee: 'employee';
    employee_rank: 'employee_rank';
    incentive: 'incentive';
    incentive_scheme: 'incentive_scheme';
    performance_metric: 'performance_metric';
    role: 'role';
    sales: 'sales';
    sales_target: 'sales_target';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'achievement'
        | 'bonus_allocation'
        | 'company'
        | 'employee'
        | 'employee_rank'
        | 'incentive'
        | 'incentive_scheme'
        | 'performance_metric'
        | 'role'
        | 'sales'
        | 'sales_target'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      achievement: {
        payload: Prisma.$achievementPayload<ExtArgs>;
        fields: Prisma.achievementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.achievementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.achievementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          findFirst: {
            args: Prisma.achievementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.achievementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          findMany: {
            args: Prisma.achievementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>[];
          };
          create: {
            args: Prisma.achievementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          createMany: {
            args: Prisma.achievementCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.achievementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          update: {
            args: Prisma.achievementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          deleteMany: {
            args: Prisma.achievementDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.achievementUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.achievementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAchievement>;
          };
          groupBy: {
            args: Prisma.achievementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AchievementGroupByOutputType>[];
          };
          count: {
            args: Prisma.achievementCountArgs<ExtArgs>;
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number;
          };
        };
      };
      bonus_allocation: {
        payload: Prisma.$bonus_allocationPayload<ExtArgs>;
        fields: Prisma.bonus_allocationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bonus_allocationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bonus_allocationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          findFirst: {
            args: Prisma.bonus_allocationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bonus_allocationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          findMany: {
            args: Prisma.bonus_allocationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>[];
          };
          create: {
            args: Prisma.bonus_allocationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          createMany: {
            args: Prisma.bonus_allocationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bonus_allocationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          update: {
            args: Prisma.bonus_allocationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          deleteMany: {
            args: Prisma.bonus_allocationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bonus_allocationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bonus_allocationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bonus_allocationPayload>;
          };
          aggregate: {
            args: Prisma.Bonus_allocationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBonus_allocation>;
          };
          groupBy: {
            args: Prisma.bonus_allocationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Bonus_allocationGroupByOutputType>[];
          };
          count: {
            args: Prisma.bonus_allocationCountArgs<ExtArgs>;
            result: $Utils.Optional<Bonus_allocationCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      employee_rank: {
        payload: Prisma.$employee_rankPayload<ExtArgs>;
        fields: Prisma.employee_rankFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employee_rankFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employee_rankFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          findFirst: {
            args: Prisma.employee_rankFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employee_rankFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          findMany: {
            args: Prisma.employee_rankFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>[];
          };
          create: {
            args: Prisma.employee_rankCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          createMany: {
            args: Prisma.employee_rankCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employee_rankDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          update: {
            args: Prisma.employee_rankUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          deleteMany: {
            args: Prisma.employee_rankDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employee_rankUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employee_rankUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employee_rankPayload>;
          };
          aggregate: {
            args: Prisma.Employee_rankAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee_rank>;
          };
          groupBy: {
            args: Prisma.employee_rankGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Employee_rankGroupByOutputType>[];
          };
          count: {
            args: Prisma.employee_rankCountArgs<ExtArgs>;
            result: $Utils.Optional<Employee_rankCountAggregateOutputType> | number;
          };
        };
      };
      incentive: {
        payload: Prisma.$incentivePayload<ExtArgs>;
        fields: Prisma.incentiveFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.incentiveFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.incentiveFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          findFirst: {
            args: Prisma.incentiveFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.incentiveFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          findMany: {
            args: Prisma.incentiveFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>[];
          };
          create: {
            args: Prisma.incentiveCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          createMany: {
            args: Prisma.incentiveCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.incentiveDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          update: {
            args: Prisma.incentiveUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          deleteMany: {
            args: Prisma.incentiveDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.incentiveUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.incentiveUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentivePayload>;
          };
          aggregate: {
            args: Prisma.IncentiveAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIncentive>;
          };
          groupBy: {
            args: Prisma.incentiveGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IncentiveGroupByOutputType>[];
          };
          count: {
            args: Prisma.incentiveCountArgs<ExtArgs>;
            result: $Utils.Optional<IncentiveCountAggregateOutputType> | number;
          };
        };
      };
      incentive_scheme: {
        payload: Prisma.$incentive_schemePayload<ExtArgs>;
        fields: Prisma.incentive_schemeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.incentive_schemeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.incentive_schemeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          findFirst: {
            args: Prisma.incentive_schemeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.incentive_schemeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          findMany: {
            args: Prisma.incentive_schemeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>[];
          };
          create: {
            args: Prisma.incentive_schemeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          createMany: {
            args: Prisma.incentive_schemeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.incentive_schemeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          update: {
            args: Prisma.incentive_schemeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          deleteMany: {
            args: Prisma.incentive_schemeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.incentive_schemeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.incentive_schemeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$incentive_schemePayload>;
          };
          aggregate: {
            args: Prisma.Incentive_schemeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIncentive_scheme>;
          };
          groupBy: {
            args: Prisma.incentive_schemeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Incentive_schemeGroupByOutputType>[];
          };
          count: {
            args: Prisma.incentive_schemeCountArgs<ExtArgs>;
            result: $Utils.Optional<Incentive_schemeCountAggregateOutputType> | number;
          };
        };
      };
      performance_metric: {
        payload: Prisma.$performance_metricPayload<ExtArgs>;
        fields: Prisma.performance_metricFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.performance_metricFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.performance_metricFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          findFirst: {
            args: Prisma.performance_metricFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.performance_metricFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          findMany: {
            args: Prisma.performance_metricFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>[];
          };
          create: {
            args: Prisma.performance_metricCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          createMany: {
            args: Prisma.performance_metricCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.performance_metricDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          update: {
            args: Prisma.performance_metricUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          deleteMany: {
            args: Prisma.performance_metricDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.performance_metricUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.performance_metricUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_metricPayload>;
          };
          aggregate: {
            args: Prisma.Performance_metricAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance_metric>;
          };
          groupBy: {
            args: Prisma.performance_metricGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Performance_metricGroupByOutputType>[];
          };
          count: {
            args: Prisma.performance_metricCountArgs<ExtArgs>;
            result: $Utils.Optional<Performance_metricCountAggregateOutputType> | number;
          };
        };
      };
      role: {
        payload: Prisma.$rolePayload<ExtArgs>;
        fields: Prisma.roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[];
          };
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.roleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
          };
        };
      };
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>;
        fields: Prisma.salesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[];
          };
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$salesPayload>;
          };
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSales>;
          };
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SalesGroupByOutputType>[];
          };
          count: {
            args: Prisma.salesCountArgs<ExtArgs>;
            result: $Utils.Optional<SalesCountAggregateOutputType> | number;
          };
        };
      };
      sales_target: {
        payload: Prisma.$sales_targetPayload<ExtArgs>;
        fields: Prisma.sales_targetFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.sales_targetFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.sales_targetFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          findFirst: {
            args: Prisma.sales_targetFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.sales_targetFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          findMany: {
            args: Prisma.sales_targetFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>[];
          };
          create: {
            args: Prisma.sales_targetCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          createMany: {
            args: Prisma.sales_targetCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.sales_targetDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          update: {
            args: Prisma.sales_targetUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          deleteMany: {
            args: Prisma.sales_targetDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.sales_targetUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.sales_targetUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sales_targetPayload>;
          };
          aggregate: {
            args: Prisma.Sales_targetAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSales_target>;
          };
          groupBy: {
            args: Prisma.sales_targetGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Sales_targetGroupByOutputType>[];
          };
          count: {
            args: Prisma.sales_targetCountArgs<ExtArgs>;
            result: $Utils.Optional<Sales_targetCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    employee: number;
    incentive: number;
    sales: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | CompanyCountOutputTypeCountEmployeeArgs;
    incentive?: boolean | CompanyCountOutputTypeCountIncentiveArgs;
    sales?: boolean | CompanyCountOutputTypeCountSalesArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountIncentiveArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: incentiveWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: salesWhereInput;
    };

  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    incentive: number;
    sales: number;
  };

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incentive?: boolean | EmployeeCountOutputTypeCountIncentiveArgs;
    sales?: boolean | EmployeeCountOutputTypeCountSalesArgs;
  };

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountIncentiveArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: incentiveWhereInput;
  };

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSalesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: salesWhereInput;
  };

  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    incentive: number;
  };

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incentive?: boolean | SalesCountOutputTypeCountIncentiveArgs;
  };

  // Custom InputTypes

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountIncentiveArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: incentiveWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employee: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  export type AchievementMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AchievementMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AchievementCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AchievementMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AchievementMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AchievementCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievement to aggregate.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned achievements
     **/
    _count?: true | AchievementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AchievementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AchievementMaxAggregateInputType;
  };

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
    [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>;
  };

  export type achievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementWhereInput;
    orderBy?: achievementOrderByWithAggregationInput | achievementOrderByWithAggregationInput[];
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum;
    having?: achievementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AchievementCountAggregateInputType | true;
    _min?: AchievementMinAggregateInputType;
    _max?: AchievementMaxAggregateInputType;
  };

  export type AchievementGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  type GetAchievementGroupByPayload<T extends achievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AchievementGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
          : GetScalarType<T[P], AchievementGroupByOutputType[P]>;
      }
    >
  >;

  export type achievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['achievement']
    >;

  export type achievementSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $achievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'achievement';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['achievement']
    >;
    composites: {};
  };

  type achievementGetPayload<S extends boolean | null | undefined | achievementDefaultArgs> = $Result.GetResult<
    Prisma.$achievementPayload,
    S
  >;

  type achievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    achievementFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AchievementCountAggregateInputType | true;
  };

  export interface achievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['achievement']; meta: { name: 'achievement' } };
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {achievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends achievementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, achievementFindUniqueArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Achievement that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {achievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends achievementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends achievementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindFirstArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends achievementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     *
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends achievementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Achievement.
     * @param {achievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     *
     **/
    create<T extends achievementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, achievementCreateArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Achievements.
     *     @param {achievementCreateManyArgs} args - Arguments to create many Achievements.
     *     @example
     *     // Create many Achievements
     *     const achievement = await prisma.achievement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends achievementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Achievement.
     * @param {achievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     *
     **/
    delete<T extends achievementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, achievementDeleteArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Achievement.
     * @param {achievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends achievementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpdateArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Achievements.
     * @param {achievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends achievementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends achievementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Achievement.
     * @param {achievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     **/
    upsert<T extends achievementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpsertArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
     **/
    count<T extends achievementCountArgs>(
      args?: Subset<T, achievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(
      args: Subset<T, AchievementAggregateArgs>,
    ): Prisma.PrismaPromise<GetAchievementAggregateType<T>>;

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementGroupByArgs} args - Group by arguments.
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
      T extends achievementGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: achievementGroupByArgs['orderBy'] }
        : { orderBy?: achievementGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, achievementGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the achievement model
     */
    readonly fields: achievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__achievementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the achievement model
   */
  interface achievementFieldRefs {
    readonly id: FieldRef<'achievement', 'String'>;
    readonly created_at: FieldRef<'achievement', 'DateTime'>;
    readonly updated_at: FieldRef<'achievement', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * achievement findUnique
   */
  export type achievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement findUniqueOrThrow
   */
  export type achievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement findFirst
   */
  export type achievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement findFirstOrThrow
   */
  export type achievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement findMany
   */
  export type achievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement create
   */
  export type achievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * The data needed to create a achievement.
     */
    data?: XOR<achievementCreateInput, achievementUncheckedCreateInput>;
  };

  /**
   * achievement createMany
   */
  export type achievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many achievements.
     */
    data: achievementCreateManyInput | achievementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * achievement update
   */
  export type achievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * The data needed to update a achievement.
     */
    data: XOR<achievementUpdateInput, achievementUncheckedUpdateInput>;
    /**
     * Choose, which achievement to update.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement updateMany
   */
  export type achievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementUpdateManyMutationInput, achievementUncheckedUpdateManyInput>;
    /**
     * Filter which achievements to update
     */
    where?: achievementWhereInput;
  };

  /**
   * achievement upsert
   */
  export type achievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * The filter to search for the achievement to update in case it exists.
     */
    where: achievementWhereUniqueInput;
    /**
     * In case the achievement found by the `where` argument doesn't exist, create a new achievement with this data.
     */
    create: XOR<achievementCreateInput, achievementUncheckedCreateInput>;
    /**
     * In case the achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<achievementUpdateInput, achievementUncheckedUpdateInput>;
  };

  /**
   * achievement delete
   */
  export type achievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Filter which achievement to delete.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement deleteMany
   */
  export type achievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to delete
     */
    where?: achievementWhereInput;
  };

  /**
   * achievement without action
   */
  export type achievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
  };

  /**
   * Model bonus_allocation
   */

  export type AggregateBonus_allocation = {
    _count: Bonus_allocationCountAggregateOutputType | null;
    _min: Bonus_allocationMinAggregateOutputType | null;
    _max: Bonus_allocationMaxAggregateOutputType | null;
  };

  export type Bonus_allocationMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Bonus_allocationMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Bonus_allocationCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Bonus_allocationMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Bonus_allocationMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Bonus_allocationCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Bonus_allocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bonus_allocation to aggregate.
     */
    where?: bonus_allocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bonus_allocations to fetch.
     */
    orderBy?: bonus_allocationOrderByWithRelationInput | bonus_allocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bonus_allocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bonus_allocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bonus_allocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bonus_allocations
     **/
    _count?: true | Bonus_allocationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Bonus_allocationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Bonus_allocationMaxAggregateInputType;
  };

  export type GetBonus_allocationAggregateType<T extends Bonus_allocationAggregateArgs> = {
    [P in keyof T & keyof AggregateBonus_allocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonus_allocation[P]>
      : GetScalarType<T[P], AggregateBonus_allocation[P]>;
  };

  export type bonus_allocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bonus_allocationWhereInput;
    orderBy?: bonus_allocationOrderByWithAggregationInput | bonus_allocationOrderByWithAggregationInput[];
    by: Bonus_allocationScalarFieldEnum[] | Bonus_allocationScalarFieldEnum;
    having?: bonus_allocationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Bonus_allocationCountAggregateInputType | true;
    _min?: Bonus_allocationMinAggregateInputType;
    _max?: Bonus_allocationMaxAggregateInputType;
  };

  export type Bonus_allocationGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Bonus_allocationCountAggregateOutputType | null;
    _min: Bonus_allocationMinAggregateOutputType | null;
    _max: Bonus_allocationMaxAggregateOutputType | null;
  };

  type GetBonus_allocationGroupByPayload<T extends bonus_allocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bonus_allocationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Bonus_allocationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Bonus_allocationGroupByOutputType[P]>
          : GetScalarType<T[P], Bonus_allocationGroupByOutputType[P]>;
      }
    >
  >;

  export type bonus_allocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['bonus_allocation']
    >;

  export type bonus_allocationSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $bonus_allocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'bonus_allocation';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['bonus_allocation']
    >;
    composites: {};
  };

  type bonus_allocationGetPayload<S extends boolean | null | undefined | bonus_allocationDefaultArgs> =
    $Result.GetResult<Prisma.$bonus_allocationPayload, S>;

  type bonus_allocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bonus_allocationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Bonus_allocationCountAggregateInputType | true;
  };

  export interface bonus_allocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bonus_allocation']; meta: { name: 'bonus_allocation' } };
    /**
     * Find zero or one Bonus_allocation that matches the filter.
     * @param {bonus_allocationFindUniqueArgs} args - Arguments to find a Bonus_allocation
     * @example
     * // Get one Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bonus_allocationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationFindUniqueArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Bonus_allocation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bonus_allocationFindUniqueOrThrowArgs} args - Arguments to find a Bonus_allocation
     * @example
     * // Get one Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bonus_allocationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Bonus_allocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationFindFirstArgs} args - Arguments to find a Bonus_allocation
     * @example
     * // Get one Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bonus_allocationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationFindFirstArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Bonus_allocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationFindFirstOrThrowArgs} args - Arguments to find a Bonus_allocation
     * @example
     * // Get one Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bonus_allocationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Bonus_allocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bonus_allocations
     * const bonus_allocations = await prisma.bonus_allocation.findMany()
     *
     * // Get first 10 Bonus_allocations
     * const bonus_allocations = await prisma.bonus_allocation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bonus_allocationWithIdOnly = await prisma.bonus_allocation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bonus_allocationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Bonus_allocation.
     * @param {bonus_allocationCreateArgs} args - Arguments to create a Bonus_allocation.
     * @example
     * // Create one Bonus_allocation
     * const Bonus_allocation = await prisma.bonus_allocation.create({
     *   data: {
     *     // ... data to create a Bonus_allocation
     *   }
     * })
     *
     **/
    create<T extends bonus_allocationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationCreateArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Bonus_allocations.
     *     @param {bonus_allocationCreateManyArgs} args - Arguments to create many Bonus_allocations.
     *     @example
     *     // Create many Bonus_allocations
     *     const bonus_allocation = await prisma.bonus_allocation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bonus_allocationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Bonus_allocation.
     * @param {bonus_allocationDeleteArgs} args - Arguments to delete one Bonus_allocation.
     * @example
     * // Delete one Bonus_allocation
     * const Bonus_allocation = await prisma.bonus_allocation.delete({
     *   where: {
     *     // ... filter to delete one Bonus_allocation
     *   }
     * })
     *
     **/
    delete<T extends bonus_allocationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationDeleteArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Bonus_allocation.
     * @param {bonus_allocationUpdateArgs} args - Arguments to update one Bonus_allocation.
     * @example
     * // Update one Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bonus_allocationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationUpdateArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Bonus_allocations.
     * @param {bonus_allocationDeleteManyArgs} args - Arguments to filter Bonus_allocations to delete.
     * @example
     * // Delete a few Bonus_allocations
     * const { count } = await prisma.bonus_allocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bonus_allocationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bonus_allocationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bonus_allocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bonus_allocations
     * const bonus_allocation = await prisma.bonus_allocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bonus_allocationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Bonus_allocation.
     * @param {bonus_allocationUpsertArgs} args - Arguments to update or create a Bonus_allocation.
     * @example
     * // Update or create a Bonus_allocation
     * const bonus_allocation = await prisma.bonus_allocation.upsert({
     *   create: {
     *     // ... data to create a Bonus_allocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bonus_allocation we want to update
     *   }
     * })
     **/
    upsert<T extends bonus_allocationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bonus_allocationUpsertArgs<ExtArgs>>,
    ): Prisma__bonus_allocationClient<
      $Result.GetResult<Prisma.$bonus_allocationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Bonus_allocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationCountArgs} args - Arguments to filter Bonus_allocations to count.
     * @example
     * // Count the number of Bonus_allocations
     * const count = await prisma.bonus_allocation.count({
     *   where: {
     *     // ... the filter for the Bonus_allocations we want to count
     *   }
     * })
     **/
    count<T extends bonus_allocationCountArgs>(
      args?: Subset<T, bonus_allocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bonus_allocationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Bonus_allocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bonus_allocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bonus_allocationAggregateArgs>(
      args: Subset<T, Bonus_allocationAggregateArgs>,
    ): Prisma.PrismaPromise<GetBonus_allocationAggregateType<T>>;

    /**
     * Group by Bonus_allocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bonus_allocationGroupByArgs} args - Group by arguments.
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
      T extends bonus_allocationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bonus_allocationGroupByArgs['orderBy'] }
        : { orderBy?: bonus_allocationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bonus_allocationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBonus_allocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the bonus_allocation model
     */
    readonly fields: bonus_allocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bonus_allocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bonus_allocationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the bonus_allocation model
   */
  interface bonus_allocationFieldRefs {
    readonly id: FieldRef<'bonus_allocation', 'String'>;
    readonly created_at: FieldRef<'bonus_allocation', 'DateTime'>;
    readonly updated_at: FieldRef<'bonus_allocation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * bonus_allocation findUnique
   */
  export type bonus_allocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * Filter, which bonus_allocation to fetch.
     */
    where: bonus_allocationWhereUniqueInput;
  };

  /**
   * bonus_allocation findUniqueOrThrow
   */
  export type bonus_allocationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * Filter, which bonus_allocation to fetch.
     */
    where: bonus_allocationWhereUniqueInput;
  };

  /**
   * bonus_allocation findFirst
   */
  export type bonus_allocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * Filter, which bonus_allocation to fetch.
     */
    where?: bonus_allocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bonus_allocations to fetch.
     */
    orderBy?: bonus_allocationOrderByWithRelationInput | bonus_allocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bonus_allocations.
     */
    cursor?: bonus_allocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bonus_allocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bonus_allocations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bonus_allocations.
     */
    distinct?: Bonus_allocationScalarFieldEnum | Bonus_allocationScalarFieldEnum[];
  };

  /**
   * bonus_allocation findFirstOrThrow
   */
  export type bonus_allocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the bonus_allocation
       */
      select?: bonus_allocationSelect<ExtArgs> | null;
      /**
       * Filter, which bonus_allocation to fetch.
       */
      where?: bonus_allocationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of bonus_allocations to fetch.
       */
      orderBy?: bonus_allocationOrderByWithRelationInput | bonus_allocationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for bonus_allocations.
       */
      cursor?: bonus_allocationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` bonus_allocations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` bonus_allocations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of bonus_allocations.
       */
      distinct?: Bonus_allocationScalarFieldEnum | Bonus_allocationScalarFieldEnum[];
    };

  /**
   * bonus_allocation findMany
   */
  export type bonus_allocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * Filter, which bonus_allocations to fetch.
     */
    where?: bonus_allocationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bonus_allocations to fetch.
     */
    orderBy?: bonus_allocationOrderByWithRelationInput | bonus_allocationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bonus_allocations.
     */
    cursor?: bonus_allocationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bonus_allocations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bonus_allocations.
     */
    skip?: number;
    distinct?: Bonus_allocationScalarFieldEnum | Bonus_allocationScalarFieldEnum[];
  };

  /**
   * bonus_allocation create
   */
  export type bonus_allocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * The data needed to create a bonus_allocation.
     */
    data?: XOR<bonus_allocationCreateInput, bonus_allocationUncheckedCreateInput>;
  };

  /**
   * bonus_allocation createMany
   */
  export type bonus_allocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bonus_allocations.
     */
    data: bonus_allocationCreateManyInput | bonus_allocationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * bonus_allocation update
   */
  export type bonus_allocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * The data needed to update a bonus_allocation.
     */
    data: XOR<bonus_allocationUpdateInput, bonus_allocationUncheckedUpdateInput>;
    /**
     * Choose, which bonus_allocation to update.
     */
    where: bonus_allocationWhereUniqueInput;
  };

  /**
   * bonus_allocation updateMany
   */
  export type bonus_allocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bonus_allocations.
     */
    data: XOR<bonus_allocationUpdateManyMutationInput, bonus_allocationUncheckedUpdateManyInput>;
    /**
     * Filter which bonus_allocations to update
     */
    where?: bonus_allocationWhereInput;
  };

  /**
   * bonus_allocation upsert
   */
  export type bonus_allocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * The filter to search for the bonus_allocation to update in case it exists.
     */
    where: bonus_allocationWhereUniqueInput;
    /**
     * In case the bonus_allocation found by the `where` argument doesn't exist, create a new bonus_allocation with this data.
     */
    create: XOR<bonus_allocationCreateInput, bonus_allocationUncheckedCreateInput>;
    /**
     * In case the bonus_allocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bonus_allocationUpdateInput, bonus_allocationUncheckedUpdateInput>;
  };

  /**
   * bonus_allocation delete
   */
  export type bonus_allocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
    /**
     * Filter which bonus_allocation to delete.
     */
    where: bonus_allocationWhereUniqueInput;
  };

  /**
   * bonus_allocation deleteMany
   */
  export type bonus_allocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bonus_allocations to delete
     */
    where?: bonus_allocationWhereInput;
  };

  /**
   * bonus_allocation without action
   */
  export type bonus_allocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bonus_allocation
     */
    select?: bonus_allocationSelect<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    established_date: number;
    industry: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    established_date?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    established_date: Date | null;
    industry: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      established_date?: boolean;
      industry?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      employee?: boolean | company$employeeArgs<ExtArgs>;
      incentive?: boolean | company$incentiveArgs<ExtArgs>;
      sales?: boolean | company$salesArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    established_date?: boolean;
    industry?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | company$employeeArgs<ExtArgs>;
    incentive?: boolean | company$incentiveArgs<ExtArgs>;
    sales?: boolean | company$salesArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
      incentive: Prisma.$incentivePayload<ExtArgs>[];
      sales: Prisma.$salesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        established_date: Date | null;
        industry: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends company$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, company$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    incentive<T extends company$incentiveArgs<ExtArgs> = {}>(
      args?: Subset<T, company$incentiveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findMany'> | Null>;

    sales<T extends company$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, company$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly location: FieldRef<'company', 'String'>;
    readonly established_date: FieldRef<'company', 'DateTime'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.employee
   */
  export type company$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * company.incentive
   */
  export type company$incentiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    where?: incentiveWhereInput;
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    cursor?: incentiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * company.sales
   */
  export type company$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
    commission_pct: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
    commission_pct: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    job_title: string | null;
    hire_date: Date | null;
    salary: number | null;
    commission_pct: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    job_title: string | null;
    hire_date: Date | null;
    salary: number | null;
    commission_pct: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    job_title: number;
    hire_date: number;
    salary: number;
    commission_pct: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
    commission_pct?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
    commission_pct?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    job_title?: true;
    hire_date?: true;
    salary?: true;
    commission_pct?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    job_title?: true;
    hire_date?: true;
    salary?: true;
    commission_pct?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    job_title?: true;
    hire_date?: true;
    salary?: true;
    commission_pct?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    job_title: string;
    hire_date: Date;
    salary: number;
    commission_pct: number | null;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        job_title?: boolean;
        hire_date?: boolean;
        salary?: boolean;
        commission_pct?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        incentive?: boolean | employee$incentiveArgs<ExtArgs>;
        sales?: boolean | employee$salesArgs<ExtArgs>;
        _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    job_title?: boolean;
    hire_date?: boolean;
    salary?: boolean;
    commission_pct?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    incentive?: boolean | employee$incentiveArgs<ExtArgs>;
    sales?: boolean | employee$salesArgs<ExtArgs>;
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      incentive: Prisma.$incentivePayload<ExtArgs>[];
      sales: Prisma.$salesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        job_title: string;
        hire_date: Date;
        salary: number;
        commission_pct: number | null;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    incentive<T extends employee$incentiveArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$incentiveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findMany'> | Null>;

    sales<T extends employee$salesArgs<ExtArgs> = {}>(
      args?: Subset<T, employee$salesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly job_title: FieldRef<'employee', 'String'>;
    readonly hire_date: FieldRef<'employee', 'DateTime'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly commission_pct: FieldRef<'employee', 'Int'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly company_id: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee.incentive
   */
  export type employee$incentiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    where?: incentiveWhereInput;
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    cursor?: incentiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * employee.sales
   */
  export type employee$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    where?: salesWhereInput;
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    cursor?: salesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model employee_rank
   */

  export type AggregateEmployee_rank = {
    _count: Employee_rankCountAggregateOutputType | null;
    _min: Employee_rankMinAggregateOutputType | null;
    _max: Employee_rankMaxAggregateOutputType | null;
  };

  export type Employee_rankMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Employee_rankMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Employee_rankCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Employee_rankMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Employee_rankMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Employee_rankCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Employee_rankAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_rank to aggregate.
     */
    where?: employee_rankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employee_ranks to fetch.
     */
    orderBy?: employee_rankOrderByWithRelationInput | employee_rankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employee_rankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employee_ranks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employee_ranks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employee_ranks
     **/
    _count?: true | Employee_rankCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Employee_rankMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Employee_rankMaxAggregateInputType;
  };

  export type GetEmployee_rankAggregateType<T extends Employee_rankAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee_rank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee_rank[P]>
      : GetScalarType<T[P], AggregateEmployee_rank[P]>;
  };

  export type employee_rankGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employee_rankWhereInput;
    orderBy?: employee_rankOrderByWithAggregationInput | employee_rankOrderByWithAggregationInput[];
    by: Employee_rankScalarFieldEnum[] | Employee_rankScalarFieldEnum;
    having?: employee_rankScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Employee_rankCountAggregateInputType | true;
    _min?: Employee_rankMinAggregateInputType;
    _max?: Employee_rankMaxAggregateInputType;
  };

  export type Employee_rankGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Employee_rankCountAggregateOutputType | null;
    _min: Employee_rankMinAggregateOutputType | null;
    _max: Employee_rankMaxAggregateOutputType | null;
  };

  type GetEmployee_rankGroupByPayload<T extends employee_rankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employee_rankGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Employee_rankGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Employee_rankGroupByOutputType[P]>
          : GetScalarType<T[P], Employee_rankGroupByOutputType[P]>;
      }
    >
  >;

  export type employee_rankSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['employee_rank']
    >;

  export type employee_rankSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $employee_rankPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee_rank';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee_rank']
    >;
    composites: {};
  };

  type employee_rankGetPayload<S extends boolean | null | undefined | employee_rankDefaultArgs> = $Result.GetResult<
    Prisma.$employee_rankPayload,
    S
  >;

  type employee_rankCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employee_rankFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Employee_rankCountAggregateInputType | true;
  };

  export interface employee_rankDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee_rank']; meta: { name: 'employee_rank' } };
    /**
     * Find zero or one Employee_rank that matches the filter.
     * @param {employee_rankFindUniqueArgs} args - Arguments to find a Employee_rank
     * @example
     * // Get one Employee_rank
     * const employee_rank = await prisma.employee_rank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employee_rankFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankFindUniqueArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee_rank that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employee_rankFindUniqueOrThrowArgs} args - Arguments to find a Employee_rank
     * @example
     * // Get one Employee_rank
     * const employee_rank = await prisma.employee_rank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employee_rankFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee_rank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankFindFirstArgs} args - Arguments to find a Employee_rank
     * @example
     * // Get one Employee_rank
     * const employee_rank = await prisma.employee_rank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employee_rankFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankFindFirstArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee_rank that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankFindFirstOrThrowArgs} args - Arguments to find a Employee_rank
     * @example
     * // Get one Employee_rank
     * const employee_rank = await prisma.employee_rank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employee_rankFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employee_ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employee_ranks
     * const employee_ranks = await prisma.employee_rank.findMany()
     *
     * // Get first 10 Employee_ranks
     * const employee_ranks = await prisma.employee_rank.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employee_rankWithIdOnly = await prisma.employee_rank.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employee_rankFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee_rank.
     * @param {employee_rankCreateArgs} args - Arguments to create a Employee_rank.
     * @example
     * // Create one Employee_rank
     * const Employee_rank = await prisma.employee_rank.create({
     *   data: {
     *     // ... data to create a Employee_rank
     *   }
     * })
     *
     **/
    create<T extends employee_rankCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankCreateArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Employee_ranks.
     *     @param {employee_rankCreateManyArgs} args - Arguments to create many Employee_ranks.
     *     @example
     *     // Create many Employee_ranks
     *     const employee_rank = await prisma.employee_rank.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employee_rankCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee_rank.
     * @param {employee_rankDeleteArgs} args - Arguments to delete one Employee_rank.
     * @example
     * // Delete one Employee_rank
     * const Employee_rank = await prisma.employee_rank.delete({
     *   where: {
     *     // ... filter to delete one Employee_rank
     *   }
     * })
     *
     **/
    delete<T extends employee_rankDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankDeleteArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Employee_rank.
     * @param {employee_rankUpdateArgs} args - Arguments to update one Employee_rank.
     * @example
     * // Update one Employee_rank
     * const employee_rank = await prisma.employee_rank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employee_rankUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankUpdateArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Employee_ranks.
     * @param {employee_rankDeleteManyArgs} args - Arguments to filter Employee_ranks to delete.
     * @example
     * // Delete a few Employee_ranks
     * const { count } = await prisma.employee_rank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employee_rankDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employee_rankDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employee_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employee_ranks
     * const employee_rank = await prisma.employee_rank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employee_rankUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee_rank.
     * @param {employee_rankUpsertArgs} args - Arguments to update or create a Employee_rank.
     * @example
     * // Update or create a Employee_rank
     * const employee_rank = await prisma.employee_rank.upsert({
     *   create: {
     *     // ... data to create a Employee_rank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee_rank we want to update
     *   }
     * })
     **/
    upsert<T extends employee_rankUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employee_rankUpsertArgs<ExtArgs>>,
    ): Prisma__employee_rankClient<
      $Result.GetResult<Prisma.$employee_rankPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Employee_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankCountArgs} args - Arguments to filter Employee_ranks to count.
     * @example
     * // Count the number of Employee_ranks
     * const count = await prisma.employee_rank.count({
     *   where: {
     *     // ... the filter for the Employee_ranks we want to count
     *   }
     * })
     **/
    count<T extends employee_rankCountArgs>(
      args?: Subset<T, employee_rankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employee_rankCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee_rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_rankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Employee_rankAggregateArgs>(
      args: Subset<T, Employee_rankAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployee_rankAggregateType<T>>;

    /**
     * Group by Employee_rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_rankGroupByArgs} args - Group by arguments.
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
      T extends employee_rankGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employee_rankGroupByArgs['orderBy'] }
        : { orderBy?: employee_rankGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employee_rankGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployee_rankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee_rank model
     */
    readonly fields: employee_rankFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee_rank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employee_rankClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee_rank model
   */
  interface employee_rankFieldRefs {
    readonly id: FieldRef<'employee_rank', 'String'>;
    readonly created_at: FieldRef<'employee_rank', 'DateTime'>;
    readonly updated_at: FieldRef<'employee_rank', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee_rank findUnique
   */
  export type employee_rankFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter, which employee_rank to fetch.
     */
    where: employee_rankWhereUniqueInput;
  };

  /**
   * employee_rank findUniqueOrThrow
   */
  export type employee_rankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter, which employee_rank to fetch.
     */
    where: employee_rankWhereUniqueInput;
  };

  /**
   * employee_rank findFirst
   */
  export type employee_rankFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter, which employee_rank to fetch.
     */
    where?: employee_rankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employee_ranks to fetch.
     */
    orderBy?: employee_rankOrderByWithRelationInput | employee_rankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employee_ranks.
     */
    cursor?: employee_rankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employee_ranks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employee_ranks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employee_ranks.
     */
    distinct?: Employee_rankScalarFieldEnum | Employee_rankScalarFieldEnum[];
  };

  /**
   * employee_rank findFirstOrThrow
   */
  export type employee_rankFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter, which employee_rank to fetch.
     */
    where?: employee_rankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employee_ranks to fetch.
     */
    orderBy?: employee_rankOrderByWithRelationInput | employee_rankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employee_ranks.
     */
    cursor?: employee_rankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employee_ranks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employee_ranks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employee_ranks.
     */
    distinct?: Employee_rankScalarFieldEnum | Employee_rankScalarFieldEnum[];
  };

  /**
   * employee_rank findMany
   */
  export type employee_rankFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter, which employee_ranks to fetch.
     */
    where?: employee_rankWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employee_ranks to fetch.
     */
    orderBy?: employee_rankOrderByWithRelationInput | employee_rankOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employee_ranks.
     */
    cursor?: employee_rankWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employee_ranks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employee_ranks.
     */
    skip?: number;
    distinct?: Employee_rankScalarFieldEnum | Employee_rankScalarFieldEnum[];
  };

  /**
   * employee_rank create
   */
  export type employee_rankCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * The data needed to create a employee_rank.
     */
    data?: XOR<employee_rankCreateInput, employee_rankUncheckedCreateInput>;
  };

  /**
   * employee_rank createMany
   */
  export type employee_rankCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employee_ranks.
     */
    data: employee_rankCreateManyInput | employee_rankCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee_rank update
   */
  export type employee_rankUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * The data needed to update a employee_rank.
     */
    data: XOR<employee_rankUpdateInput, employee_rankUncheckedUpdateInput>;
    /**
     * Choose, which employee_rank to update.
     */
    where: employee_rankWhereUniqueInput;
  };

  /**
   * employee_rank updateMany
   */
  export type employee_rankUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employee_ranks.
     */
    data: XOR<employee_rankUpdateManyMutationInput, employee_rankUncheckedUpdateManyInput>;
    /**
     * Filter which employee_ranks to update
     */
    where?: employee_rankWhereInput;
  };

  /**
   * employee_rank upsert
   */
  export type employee_rankUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * The filter to search for the employee_rank to update in case it exists.
     */
    where: employee_rankWhereUniqueInput;
    /**
     * In case the employee_rank found by the `where` argument doesn't exist, create a new employee_rank with this data.
     */
    create: XOR<employee_rankCreateInput, employee_rankUncheckedCreateInput>;
    /**
     * In case the employee_rank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employee_rankUpdateInput, employee_rankUncheckedUpdateInput>;
  };

  /**
   * employee_rank delete
   */
  export type employee_rankDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
    /**
     * Filter which employee_rank to delete.
     */
    where: employee_rankWhereUniqueInput;
  };

  /**
   * employee_rank deleteMany
   */
  export type employee_rankDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_ranks to delete
     */
    where?: employee_rankWhereInput;
  };

  /**
   * employee_rank without action
   */
  export type employee_rankDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_rank
     */
    select?: employee_rankSelect<ExtArgs> | null;
  };

  /**
   * Model incentive
   */

  export type AggregateIncentive = {
    _count: IncentiveCountAggregateOutputType | null;
    _avg: IncentiveAvgAggregateOutputType | null;
    _sum: IncentiveSumAggregateOutputType | null;
    _min: IncentiveMinAggregateOutputType | null;
    _max: IncentiveMaxAggregateOutputType | null;
  };

  export type IncentiveAvgAggregateOutputType = {
    incentive_amount: number | null;
  };

  export type IncentiveSumAggregateOutputType = {
    incentive_amount: number | null;
  };

  export type IncentiveMinAggregateOutputType = {
    id: string | null;
    incentive_date: Date | null;
    incentive_amount: number | null;
    incentive_type: string | null;
    employee_id: string | null;
    sales_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IncentiveMaxAggregateOutputType = {
    id: string | null;
    incentive_date: Date | null;
    incentive_amount: number | null;
    incentive_type: string | null;
    employee_id: string | null;
    sales_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type IncentiveCountAggregateOutputType = {
    id: number;
    incentive_date: number;
    incentive_amount: number;
    incentive_type: number;
    employee_id: number;
    sales_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type IncentiveAvgAggregateInputType = {
    incentive_amount?: true;
  };

  export type IncentiveSumAggregateInputType = {
    incentive_amount?: true;
  };

  export type IncentiveMinAggregateInputType = {
    id?: true;
    incentive_date?: true;
    incentive_amount?: true;
    incentive_type?: true;
    employee_id?: true;
    sales_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IncentiveMaxAggregateInputType = {
    id?: true;
    incentive_date?: true;
    incentive_amount?: true;
    incentive_type?: true;
    employee_id?: true;
    sales_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type IncentiveCountAggregateInputType = {
    id?: true;
    incentive_date?: true;
    incentive_amount?: true;
    incentive_type?: true;
    employee_id?: true;
    sales_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type IncentiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incentive to aggregate.
     */
    where?: incentiveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentives to fetch.
     */
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: incentiveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned incentives
     **/
    _count?: true | IncentiveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IncentiveAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IncentiveSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IncentiveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IncentiveMaxAggregateInputType;
  };

  export type GetIncentiveAggregateType<T extends IncentiveAggregateArgs> = {
    [P in keyof T & keyof AggregateIncentive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncentive[P]>
      : GetScalarType<T[P], AggregateIncentive[P]>;
  };

  export type incentiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incentiveWhereInput;
    orderBy?: incentiveOrderByWithAggregationInput | incentiveOrderByWithAggregationInput[];
    by: IncentiveScalarFieldEnum[] | IncentiveScalarFieldEnum;
    having?: incentiveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncentiveCountAggregateInputType | true;
    _avg?: IncentiveAvgAggregateInputType;
    _sum?: IncentiveSumAggregateInputType;
    _min?: IncentiveMinAggregateInputType;
    _max?: IncentiveMaxAggregateInputType;
  };

  export type IncentiveGroupByOutputType = {
    id: string;
    incentive_date: Date;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    sales_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: IncentiveCountAggregateOutputType | null;
    _avg: IncentiveAvgAggregateOutputType | null;
    _sum: IncentiveSumAggregateOutputType | null;
    _min: IncentiveMinAggregateOutputType | null;
    _max: IncentiveMaxAggregateOutputType | null;
  };

  type GetIncentiveGroupByPayload<T extends incentiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncentiveGroupByOutputType, T['by']> & {
        [P in keyof T & keyof IncentiveGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], IncentiveGroupByOutputType[P]>
          : GetScalarType<T[P], IncentiveGroupByOutputType[P]>;
      }
    >
  >;

  export type incentiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        incentive_date?: boolean;
        incentive_amount?: boolean;
        incentive_type?: boolean;
        employee_id?: boolean;
        sales_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        employee?: boolean | employeeDefaultArgs<ExtArgs>;
        sales?: boolean | salesDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['incentive']
    >;

  export type incentiveSelectScalar = {
    id?: boolean;
    incentive_date?: boolean;
    incentive_amount?: boolean;
    incentive_type?: boolean;
    employee_id?: boolean;
    sales_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type incentiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
    sales?: boolean | salesDefaultArgs<ExtArgs>;
  };

  export type $incentivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'incentive';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      employee: Prisma.$employeePayload<ExtArgs>;
      sales: Prisma.$salesPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        incentive_date: Date;
        incentive_amount: number;
        incentive_type: string;
        employee_id: string;
        sales_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['incentive']
    >;
    composites: {};
  };

  type incentiveGetPayload<S extends boolean | null | undefined | incentiveDefaultArgs> = $Result.GetResult<
    Prisma.$incentivePayload,
    S
  >;

  type incentiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    incentiveFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: IncentiveCountAggregateInputType | true;
  };

  export interface incentiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incentive']; meta: { name: 'incentive' } };
    /**
     * Find zero or one Incentive that matches the filter.
     * @param {incentiveFindUniqueArgs} args - Arguments to find a Incentive
     * @example
     * // Get one Incentive
     * const incentive = await prisma.incentive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends incentiveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveFindUniqueArgs<ExtArgs>>,
    ): Prisma__incentiveClient<
      $Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Incentive that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {incentiveFindUniqueOrThrowArgs} args - Arguments to find a Incentive
     * @example
     * // Get one Incentive
     * const incentive = await prisma.incentive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends incentiveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__incentiveClient<
      $Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Incentive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveFindFirstArgs} args - Arguments to find a Incentive
     * @example
     * // Get one Incentive
     * const incentive = await prisma.incentive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends incentiveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveFindFirstArgs<ExtArgs>>,
    ): Prisma__incentiveClient<
      $Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Incentive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveFindFirstOrThrowArgs} args - Arguments to find a Incentive
     * @example
     * // Get one Incentive
     * const incentive = await prisma.incentive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends incentiveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__incentiveClient<
      $Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Incentives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incentives
     * const incentives = await prisma.incentive.findMany()
     *
     * // Get first 10 Incentives
     * const incentives = await prisma.incentive.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const incentiveWithIdOnly = await prisma.incentive.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends incentiveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Incentive.
     * @param {incentiveCreateArgs} args - Arguments to create a Incentive.
     * @example
     * // Create one Incentive
     * const Incentive = await prisma.incentive.create({
     *   data: {
     *     // ... data to create a Incentive
     *   }
     * })
     *
     **/
    create<T extends incentiveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveCreateArgs<ExtArgs>>,
    ): Prisma__incentiveClient<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Incentives.
     *     @param {incentiveCreateManyArgs} args - Arguments to create many Incentives.
     *     @example
     *     // Create many Incentives
     *     const incentive = await prisma.incentive.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends incentiveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Incentive.
     * @param {incentiveDeleteArgs} args - Arguments to delete one Incentive.
     * @example
     * // Delete one Incentive
     * const Incentive = await prisma.incentive.delete({
     *   where: {
     *     // ... filter to delete one Incentive
     *   }
     * })
     *
     **/
    delete<T extends incentiveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveDeleteArgs<ExtArgs>>,
    ): Prisma__incentiveClient<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Incentive.
     * @param {incentiveUpdateArgs} args - Arguments to update one Incentive.
     * @example
     * // Update one Incentive
     * const incentive = await prisma.incentive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends incentiveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveUpdateArgs<ExtArgs>>,
    ): Prisma__incentiveClient<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Incentives.
     * @param {incentiveDeleteManyArgs} args - Arguments to filter Incentives to delete.
     * @example
     * // Delete a few Incentives
     * const { count } = await prisma.incentive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends incentiveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentiveDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Incentives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incentives
     * const incentive = await prisma.incentive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends incentiveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Incentive.
     * @param {incentiveUpsertArgs} args - Arguments to update or create a Incentive.
     * @example
     * // Update or create a Incentive
     * const incentive = await prisma.incentive.upsert({
     *   create: {
     *     // ... data to create a Incentive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incentive we want to update
     *   }
     * })
     **/
    upsert<T extends incentiveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, incentiveUpsertArgs<ExtArgs>>,
    ): Prisma__incentiveClient<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Incentives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveCountArgs} args - Arguments to filter Incentives to count.
     * @example
     * // Count the number of Incentives
     * const count = await prisma.incentive.count({
     *   where: {
     *     // ... the filter for the Incentives we want to count
     *   }
     * })
     **/
    count<T extends incentiveCountArgs>(
      args?: Subset<T, incentiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncentiveCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Incentive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncentiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncentiveAggregateArgs>(
      args: Subset<T, IncentiveAggregateArgs>,
    ): Prisma.PrismaPromise<GetIncentiveAggregateType<T>>;

    /**
     * Group by Incentive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentiveGroupByArgs} args - Group by arguments.
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
      T extends incentiveGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incentiveGroupByArgs['orderBy'] }
        : { orderBy?: incentiveGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, incentiveGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIncentiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the incentive model
     */
    readonly fields: incentiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incentive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incentiveClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    sales<T extends salesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, salesDefaultArgs<ExtArgs>>,
    ): Prisma__salesClient<
      $Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the incentive model
   */
  interface incentiveFieldRefs {
    readonly id: FieldRef<'incentive', 'String'>;
    readonly incentive_date: FieldRef<'incentive', 'DateTime'>;
    readonly incentive_amount: FieldRef<'incentive', 'Int'>;
    readonly incentive_type: FieldRef<'incentive', 'String'>;
    readonly employee_id: FieldRef<'incentive', 'String'>;
    readonly sales_id: FieldRef<'incentive', 'String'>;
    readonly company_id: FieldRef<'incentive', 'String'>;
    readonly created_at: FieldRef<'incentive', 'DateTime'>;
    readonly updated_at: FieldRef<'incentive', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * incentive findUnique
   */
  export type incentiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter, which incentive to fetch.
     */
    where: incentiveWhereUniqueInput;
  };

  /**
   * incentive findUniqueOrThrow
   */
  export type incentiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter, which incentive to fetch.
     */
    where: incentiveWhereUniqueInput;
  };

  /**
   * incentive findFirst
   */
  export type incentiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter, which incentive to fetch.
     */
    where?: incentiveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentives to fetch.
     */
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for incentives.
     */
    cursor?: incentiveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of incentives.
     */
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * incentive findFirstOrThrow
   */
  export type incentiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter, which incentive to fetch.
     */
    where?: incentiveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentives to fetch.
     */
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for incentives.
     */
    cursor?: incentiveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentives.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of incentives.
     */
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * incentive findMany
   */
  export type incentiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter, which incentives to fetch.
     */
    where?: incentiveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentives to fetch.
     */
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing incentives.
     */
    cursor?: incentiveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentives from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentives.
     */
    skip?: number;
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * incentive create
   */
  export type incentiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * The data needed to create a incentive.
     */
    data: XOR<incentiveCreateInput, incentiveUncheckedCreateInput>;
  };

  /**
   * incentive createMany
   */
  export type incentiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incentives.
     */
    data: incentiveCreateManyInput | incentiveCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * incentive update
   */
  export type incentiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * The data needed to update a incentive.
     */
    data: XOR<incentiveUpdateInput, incentiveUncheckedUpdateInput>;
    /**
     * Choose, which incentive to update.
     */
    where: incentiveWhereUniqueInput;
  };

  /**
   * incentive updateMany
   */
  export type incentiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incentives.
     */
    data: XOR<incentiveUpdateManyMutationInput, incentiveUncheckedUpdateManyInput>;
    /**
     * Filter which incentives to update
     */
    where?: incentiveWhereInput;
  };

  /**
   * incentive upsert
   */
  export type incentiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * The filter to search for the incentive to update in case it exists.
     */
    where: incentiveWhereUniqueInput;
    /**
     * In case the incentive found by the `where` argument doesn't exist, create a new incentive with this data.
     */
    create: XOR<incentiveCreateInput, incentiveUncheckedCreateInput>;
    /**
     * In case the incentive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incentiveUpdateInput, incentiveUncheckedUpdateInput>;
  };

  /**
   * incentive delete
   */
  export type incentiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    /**
     * Filter which incentive to delete.
     */
    where: incentiveWhereUniqueInput;
  };

  /**
   * incentive deleteMany
   */
  export type incentiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incentives to delete
     */
    where?: incentiveWhereInput;
  };

  /**
   * incentive without action
   */
  export type incentiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
  };

  /**
   * Model incentive_scheme
   */

  export type AggregateIncentive_scheme = {
    _count: Incentive_schemeCountAggregateOutputType | null;
    _min: Incentive_schemeMinAggregateOutputType | null;
    _max: Incentive_schemeMaxAggregateOutputType | null;
  };

  export type Incentive_schemeMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Incentive_schemeMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Incentive_schemeCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Incentive_schemeMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Incentive_schemeMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Incentive_schemeCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Incentive_schemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incentive_scheme to aggregate.
     */
    where?: incentive_schemeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentive_schemes to fetch.
     */
    orderBy?: incentive_schemeOrderByWithRelationInput | incentive_schemeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: incentive_schemeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentive_schemes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentive_schemes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned incentive_schemes
     **/
    _count?: true | Incentive_schemeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Incentive_schemeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Incentive_schemeMaxAggregateInputType;
  };

  export type GetIncentive_schemeAggregateType<T extends Incentive_schemeAggregateArgs> = {
    [P in keyof T & keyof AggregateIncentive_scheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncentive_scheme[P]>
      : GetScalarType<T[P], AggregateIncentive_scheme[P]>;
  };

  export type incentive_schemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: incentive_schemeWhereInput;
    orderBy?: incentive_schemeOrderByWithAggregationInput | incentive_schemeOrderByWithAggregationInput[];
    by: Incentive_schemeScalarFieldEnum[] | Incentive_schemeScalarFieldEnum;
    having?: incentive_schemeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Incentive_schemeCountAggregateInputType | true;
    _min?: Incentive_schemeMinAggregateInputType;
    _max?: Incentive_schemeMaxAggregateInputType;
  };

  export type Incentive_schemeGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Incentive_schemeCountAggregateOutputType | null;
    _min: Incentive_schemeMinAggregateOutputType | null;
    _max: Incentive_schemeMaxAggregateOutputType | null;
  };

  type GetIncentive_schemeGroupByPayload<T extends incentive_schemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Incentive_schemeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Incentive_schemeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Incentive_schemeGroupByOutputType[P]>
          : GetScalarType<T[P], Incentive_schemeGroupByOutputType[P]>;
      }
    >
  >;

  export type incentive_schemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['incentive_scheme']
    >;

  export type incentive_schemeSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $incentive_schemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'incentive_scheme';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['incentive_scheme']
    >;
    composites: {};
  };

  type incentive_schemeGetPayload<S extends boolean | null | undefined | incentive_schemeDefaultArgs> =
    $Result.GetResult<Prisma.$incentive_schemePayload, S>;

  type incentive_schemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    incentive_schemeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Incentive_schemeCountAggregateInputType | true;
  };

  export interface incentive_schemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['incentive_scheme']; meta: { name: 'incentive_scheme' } };
    /**
     * Find zero or one Incentive_scheme that matches the filter.
     * @param {incentive_schemeFindUniqueArgs} args - Arguments to find a Incentive_scheme
     * @example
     * // Get one Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends incentive_schemeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeFindUniqueArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Incentive_scheme that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {incentive_schemeFindUniqueOrThrowArgs} args - Arguments to find a Incentive_scheme
     * @example
     * // Get one Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends incentive_schemeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Incentive_scheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeFindFirstArgs} args - Arguments to find a Incentive_scheme
     * @example
     * // Get one Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends incentive_schemeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeFindFirstArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Incentive_scheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeFindFirstOrThrowArgs} args - Arguments to find a Incentive_scheme
     * @example
     * // Get one Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends incentive_schemeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Incentive_schemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incentive_schemes
     * const incentive_schemes = await prisma.incentive_scheme.findMany()
     *
     * // Get first 10 Incentive_schemes
     * const incentive_schemes = await prisma.incentive_scheme.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const incentive_schemeWithIdOnly = await prisma.incentive_scheme.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends incentive_schemeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Incentive_scheme.
     * @param {incentive_schemeCreateArgs} args - Arguments to create a Incentive_scheme.
     * @example
     * // Create one Incentive_scheme
     * const Incentive_scheme = await prisma.incentive_scheme.create({
     *   data: {
     *     // ... data to create a Incentive_scheme
     *   }
     * })
     *
     **/
    create<T extends incentive_schemeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeCreateArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Incentive_schemes.
     *     @param {incentive_schemeCreateManyArgs} args - Arguments to create many Incentive_schemes.
     *     @example
     *     // Create many Incentive_schemes
     *     const incentive_scheme = await prisma.incentive_scheme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends incentive_schemeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Incentive_scheme.
     * @param {incentive_schemeDeleteArgs} args - Arguments to delete one Incentive_scheme.
     * @example
     * // Delete one Incentive_scheme
     * const Incentive_scheme = await prisma.incentive_scheme.delete({
     *   where: {
     *     // ... filter to delete one Incentive_scheme
     *   }
     * })
     *
     **/
    delete<T extends incentive_schemeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeDeleteArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Incentive_scheme.
     * @param {incentive_schemeUpdateArgs} args - Arguments to update one Incentive_scheme.
     * @example
     * // Update one Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends incentive_schemeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeUpdateArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Incentive_schemes.
     * @param {incentive_schemeDeleteManyArgs} args - Arguments to filter Incentive_schemes to delete.
     * @example
     * // Delete a few Incentive_schemes
     * const { count } = await prisma.incentive_scheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends incentive_schemeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, incentive_schemeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Incentive_schemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incentive_schemes
     * const incentive_scheme = await prisma.incentive_scheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends incentive_schemeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Incentive_scheme.
     * @param {incentive_schemeUpsertArgs} args - Arguments to update or create a Incentive_scheme.
     * @example
     * // Update or create a Incentive_scheme
     * const incentive_scheme = await prisma.incentive_scheme.upsert({
     *   create: {
     *     // ... data to create a Incentive_scheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incentive_scheme we want to update
     *   }
     * })
     **/
    upsert<T extends incentive_schemeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, incentive_schemeUpsertArgs<ExtArgs>>,
    ): Prisma__incentive_schemeClient<
      $Result.GetResult<Prisma.$incentive_schemePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Incentive_schemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeCountArgs} args - Arguments to filter Incentive_schemes to count.
     * @example
     * // Count the number of Incentive_schemes
     * const count = await prisma.incentive_scheme.count({
     *   where: {
     *     // ... the filter for the Incentive_schemes we want to count
     *   }
     * })
     **/
    count<T extends incentive_schemeCountArgs>(
      args?: Subset<T, incentive_schemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Incentive_schemeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Incentive_scheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Incentive_schemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Incentive_schemeAggregateArgs>(
      args: Subset<T, Incentive_schemeAggregateArgs>,
    ): Prisma.PrismaPromise<GetIncentive_schemeAggregateType<T>>;

    /**
     * Group by Incentive_scheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {incentive_schemeGroupByArgs} args - Group by arguments.
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
      T extends incentive_schemeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: incentive_schemeGroupByArgs['orderBy'] }
        : { orderBy?: incentive_schemeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, incentive_schemeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIncentive_schemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the incentive_scheme model
     */
    readonly fields: incentive_schemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for incentive_scheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__incentive_schemeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the incentive_scheme model
   */
  interface incentive_schemeFieldRefs {
    readonly id: FieldRef<'incentive_scheme', 'String'>;
    readonly created_at: FieldRef<'incentive_scheme', 'DateTime'>;
    readonly updated_at: FieldRef<'incentive_scheme', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * incentive_scheme findUnique
   */
  export type incentive_schemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * Filter, which incentive_scheme to fetch.
     */
    where: incentive_schemeWhereUniqueInput;
  };

  /**
   * incentive_scheme findUniqueOrThrow
   */
  export type incentive_schemeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * Filter, which incentive_scheme to fetch.
     */
    where: incentive_schemeWhereUniqueInput;
  };

  /**
   * incentive_scheme findFirst
   */
  export type incentive_schemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * Filter, which incentive_scheme to fetch.
     */
    where?: incentive_schemeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentive_schemes to fetch.
     */
    orderBy?: incentive_schemeOrderByWithRelationInput | incentive_schemeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for incentive_schemes.
     */
    cursor?: incentive_schemeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentive_schemes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentive_schemes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of incentive_schemes.
     */
    distinct?: Incentive_schemeScalarFieldEnum | Incentive_schemeScalarFieldEnum[];
  };

  /**
   * incentive_scheme findFirstOrThrow
   */
  export type incentive_schemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the incentive_scheme
       */
      select?: incentive_schemeSelect<ExtArgs> | null;
      /**
       * Filter, which incentive_scheme to fetch.
       */
      where?: incentive_schemeWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of incentive_schemes to fetch.
       */
      orderBy?: incentive_schemeOrderByWithRelationInput | incentive_schemeOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for incentive_schemes.
       */
      cursor?: incentive_schemeWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` incentive_schemes from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` incentive_schemes.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of incentive_schemes.
       */
      distinct?: Incentive_schemeScalarFieldEnum | Incentive_schemeScalarFieldEnum[];
    };

  /**
   * incentive_scheme findMany
   */
  export type incentive_schemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * Filter, which incentive_schemes to fetch.
     */
    where?: incentive_schemeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of incentive_schemes to fetch.
     */
    orderBy?: incentive_schemeOrderByWithRelationInput | incentive_schemeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing incentive_schemes.
     */
    cursor?: incentive_schemeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` incentive_schemes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` incentive_schemes.
     */
    skip?: number;
    distinct?: Incentive_schemeScalarFieldEnum | Incentive_schemeScalarFieldEnum[];
  };

  /**
   * incentive_scheme create
   */
  export type incentive_schemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * The data needed to create a incentive_scheme.
     */
    data?: XOR<incentive_schemeCreateInput, incentive_schemeUncheckedCreateInput>;
  };

  /**
   * incentive_scheme createMany
   */
  export type incentive_schemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many incentive_schemes.
     */
    data: incentive_schemeCreateManyInput | incentive_schemeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * incentive_scheme update
   */
  export type incentive_schemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * The data needed to update a incentive_scheme.
     */
    data: XOR<incentive_schemeUpdateInput, incentive_schemeUncheckedUpdateInput>;
    /**
     * Choose, which incentive_scheme to update.
     */
    where: incentive_schemeWhereUniqueInput;
  };

  /**
   * incentive_scheme updateMany
   */
  export type incentive_schemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update incentive_schemes.
     */
    data: XOR<incentive_schemeUpdateManyMutationInput, incentive_schemeUncheckedUpdateManyInput>;
    /**
     * Filter which incentive_schemes to update
     */
    where?: incentive_schemeWhereInput;
  };

  /**
   * incentive_scheme upsert
   */
  export type incentive_schemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * The filter to search for the incentive_scheme to update in case it exists.
     */
    where: incentive_schemeWhereUniqueInput;
    /**
     * In case the incentive_scheme found by the `where` argument doesn't exist, create a new incentive_scheme with this data.
     */
    create: XOR<incentive_schemeCreateInput, incentive_schemeUncheckedCreateInput>;
    /**
     * In case the incentive_scheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<incentive_schemeUpdateInput, incentive_schemeUncheckedUpdateInput>;
  };

  /**
   * incentive_scheme delete
   */
  export type incentive_schemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
    /**
     * Filter which incentive_scheme to delete.
     */
    where: incentive_schemeWhereUniqueInput;
  };

  /**
   * incentive_scheme deleteMany
   */
  export type incentive_schemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which incentive_schemes to delete
     */
    where?: incentive_schemeWhereInput;
  };

  /**
   * incentive_scheme without action
   */
  export type incentive_schemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive_scheme
     */
    select?: incentive_schemeSelect<ExtArgs> | null;
  };

  /**
   * Model performance_metric
   */

  export type AggregatePerformance_metric = {
    _count: Performance_metricCountAggregateOutputType | null;
    _min: Performance_metricMinAggregateOutputType | null;
    _max: Performance_metricMaxAggregateOutputType | null;
  };

  export type Performance_metricMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_metricMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_metricCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Performance_metricMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_metricMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_metricCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Performance_metricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_metric to aggregate.
     */
    where?: performance_metricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_metrics to fetch.
     */
    orderBy?: performance_metricOrderByWithRelationInput | performance_metricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: performance_metricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_metrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_metrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned performance_metrics
     **/
    _count?: true | Performance_metricCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Performance_metricMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Performance_metricMaxAggregateInputType;
  };

  export type GetPerformance_metricAggregateType<T extends Performance_metricAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformance_metric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance_metric[P]>
      : GetScalarType<T[P], AggregatePerformance_metric[P]>;
  };

  export type performance_metricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: performance_metricWhereInput;
    orderBy?: performance_metricOrderByWithAggregationInput | performance_metricOrderByWithAggregationInput[];
    by: Performance_metricScalarFieldEnum[] | Performance_metricScalarFieldEnum;
    having?: performance_metricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Performance_metricCountAggregateInputType | true;
    _min?: Performance_metricMinAggregateInputType;
    _max?: Performance_metricMaxAggregateInputType;
  };

  export type Performance_metricGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Performance_metricCountAggregateOutputType | null;
    _min: Performance_metricMinAggregateOutputType | null;
    _max: Performance_metricMaxAggregateOutputType | null;
  };

  type GetPerformance_metricGroupByPayload<T extends performance_metricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Performance_metricGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Performance_metricGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Performance_metricGroupByOutputType[P]>
          : GetScalarType<T[P], Performance_metricGroupByOutputType[P]>;
      }
    >
  >;

  export type performance_metricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['performance_metric']
    >;

  export type performance_metricSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $performance_metricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'performance_metric';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['performance_metric']
    >;
    composites: {};
  };

  type performance_metricGetPayload<S extends boolean | null | undefined | performance_metricDefaultArgs> =
    $Result.GetResult<Prisma.$performance_metricPayload, S>;

  type performance_metricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    performance_metricFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Performance_metricCountAggregateInputType | true;
  };

  export interface performance_metricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['performance_metric'];
      meta: { name: 'performance_metric' };
    };
    /**
     * Find zero or one Performance_metric that matches the filter.
     * @param {performance_metricFindUniqueArgs} args - Arguments to find a Performance_metric
     * @example
     * // Get one Performance_metric
     * const performance_metric = await prisma.performance_metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends performance_metricFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricFindUniqueArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Performance_metric that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {performance_metricFindUniqueOrThrowArgs} args - Arguments to find a Performance_metric
     * @example
     * // Get one Performance_metric
     * const performance_metric = await prisma.performance_metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends performance_metricFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Performance_metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricFindFirstArgs} args - Arguments to find a Performance_metric
     * @example
     * // Get one Performance_metric
     * const performance_metric = await prisma.performance_metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends performance_metricFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricFindFirstArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Performance_metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricFindFirstOrThrowArgs} args - Arguments to find a Performance_metric
     * @example
     * // Get one Performance_metric
     * const performance_metric = await prisma.performance_metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends performance_metricFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Performance_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performance_metrics
     * const performance_metrics = await prisma.performance_metric.findMany()
     *
     * // Get first 10 Performance_metrics
     * const performance_metrics = await prisma.performance_metric.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performance_metricWithIdOnly = await prisma.performance_metric.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends performance_metricFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Performance_metric.
     * @param {performance_metricCreateArgs} args - Arguments to create a Performance_metric.
     * @example
     * // Create one Performance_metric
     * const Performance_metric = await prisma.performance_metric.create({
     *   data: {
     *     // ... data to create a Performance_metric
     *   }
     * })
     *
     **/
    create<T extends performance_metricCreateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricCreateArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Performance_metrics.
     *     @param {performance_metricCreateManyArgs} args - Arguments to create many Performance_metrics.
     *     @example
     *     // Create many Performance_metrics
     *     const performance_metric = await prisma.performance_metric.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends performance_metricCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Performance_metric.
     * @param {performance_metricDeleteArgs} args - Arguments to delete one Performance_metric.
     * @example
     * // Delete one Performance_metric
     * const Performance_metric = await prisma.performance_metric.delete({
     *   where: {
     *     // ... filter to delete one Performance_metric
     *   }
     * })
     *
     **/
    delete<T extends performance_metricDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricDeleteArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Performance_metric.
     * @param {performance_metricUpdateArgs} args - Arguments to update one Performance_metric.
     * @example
     * // Update one Performance_metric
     * const performance_metric = await prisma.performance_metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends performance_metricUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricUpdateArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Performance_metrics.
     * @param {performance_metricDeleteManyArgs} args - Arguments to filter Performance_metrics to delete.
     * @example
     * // Delete a few Performance_metrics
     * const { count } = await prisma.performance_metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends performance_metricDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_metricDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performance_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performance_metrics
     * const performance_metric = await prisma.performance_metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends performance_metricUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Performance_metric.
     * @param {performance_metricUpsertArgs} args - Arguments to update or create a Performance_metric.
     * @example
     * // Update or create a Performance_metric
     * const performance_metric = await prisma.performance_metric.upsert({
     *   create: {
     *     // ... data to create a Performance_metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance_metric we want to update
     *   }
     * })
     **/
    upsert<T extends performance_metricUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, performance_metricUpsertArgs<ExtArgs>>,
    ): Prisma__performance_metricClient<
      $Result.GetResult<Prisma.$performance_metricPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Performance_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricCountArgs} args - Arguments to filter Performance_metrics to count.
     * @example
     * // Count the number of Performance_metrics
     * const count = await prisma.performance_metric.count({
     *   where: {
     *     // ... the filter for the Performance_metrics we want to count
     *   }
     * })
     **/
    count<T extends performance_metricCountArgs>(
      args?: Subset<T, performance_metricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Performance_metricCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance_metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Performance_metricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Performance_metricAggregateArgs>(
      args: Subset<T, Performance_metricAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformance_metricAggregateType<T>>;

    /**
     * Group by Performance_metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_metricGroupByArgs} args - Group by arguments.
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
      T extends performance_metricGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: performance_metricGroupByArgs['orderBy'] }
        : { orderBy?: performance_metricGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, performance_metricGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPerformance_metricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the performance_metric model
     */
    readonly fields: performance_metricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for performance_metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__performance_metricClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the performance_metric model
   */
  interface performance_metricFieldRefs {
    readonly id: FieldRef<'performance_metric', 'String'>;
    readonly created_at: FieldRef<'performance_metric', 'DateTime'>;
    readonly updated_at: FieldRef<'performance_metric', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * performance_metric findUnique
   */
  export type performance_metricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter, which performance_metric to fetch.
     */
    where: performance_metricWhereUniqueInput;
  };

  /**
   * performance_metric findUniqueOrThrow
   */
  export type performance_metricFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter, which performance_metric to fetch.
     */
    where: performance_metricWhereUniqueInput;
  };

  /**
   * performance_metric findFirst
   */
  export type performance_metricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter, which performance_metric to fetch.
     */
    where?: performance_metricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_metrics to fetch.
     */
    orderBy?: performance_metricOrderByWithRelationInput | performance_metricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_metrics.
     */
    cursor?: performance_metricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_metrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_metrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_metrics.
     */
    distinct?: Performance_metricScalarFieldEnum | Performance_metricScalarFieldEnum[];
  };

  /**
   * performance_metric findFirstOrThrow
   */
  export type performance_metricFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter, which performance_metric to fetch.
     */
    where?: performance_metricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_metrics to fetch.
     */
    orderBy?: performance_metricOrderByWithRelationInput | performance_metricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_metrics.
     */
    cursor?: performance_metricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_metrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_metrics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_metrics.
     */
    distinct?: Performance_metricScalarFieldEnum | Performance_metricScalarFieldEnum[];
  };

  /**
   * performance_metric findMany
   */
  export type performance_metricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter, which performance_metrics to fetch.
     */
    where?: performance_metricWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_metrics to fetch.
     */
    orderBy?: performance_metricOrderByWithRelationInput | performance_metricOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing performance_metrics.
     */
    cursor?: performance_metricWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_metrics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_metrics.
     */
    skip?: number;
    distinct?: Performance_metricScalarFieldEnum | Performance_metricScalarFieldEnum[];
  };

  /**
   * performance_metric create
   */
  export type performance_metricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * The data needed to create a performance_metric.
     */
    data?: XOR<performance_metricCreateInput, performance_metricUncheckedCreateInput>;
  };

  /**
   * performance_metric createMany
   */
  export type performance_metricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many performance_metrics.
     */
    data: performance_metricCreateManyInput | performance_metricCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * performance_metric update
   */
  export type performance_metricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * The data needed to update a performance_metric.
     */
    data: XOR<performance_metricUpdateInput, performance_metricUncheckedUpdateInput>;
    /**
     * Choose, which performance_metric to update.
     */
    where: performance_metricWhereUniqueInput;
  };

  /**
   * performance_metric updateMany
   */
  export type performance_metricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update performance_metrics.
     */
    data: XOR<performance_metricUpdateManyMutationInput, performance_metricUncheckedUpdateManyInput>;
    /**
     * Filter which performance_metrics to update
     */
    where?: performance_metricWhereInput;
  };

  /**
   * performance_metric upsert
   */
  export type performance_metricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * The filter to search for the performance_metric to update in case it exists.
     */
    where: performance_metricWhereUniqueInput;
    /**
     * In case the performance_metric found by the `where` argument doesn't exist, create a new performance_metric with this data.
     */
    create: XOR<performance_metricCreateInput, performance_metricUncheckedCreateInput>;
    /**
     * In case the performance_metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<performance_metricUpdateInput, performance_metricUncheckedUpdateInput>;
  };

  /**
   * performance_metric delete
   */
  export type performance_metricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
    /**
     * Filter which performance_metric to delete.
     */
    where: performance_metricWhereUniqueInput;
  };

  /**
   * performance_metric deleteMany
   */
  export type performance_metricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_metrics to delete
     */
    where?: performance_metricWhereInput;
  };

  /**
   * performance_metric without action
   */
  export type performance_metricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_metric
     */
    select?: performance_metricSelect<ExtArgs> | null;
  };

  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput;
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['role']
  >;

  export type roleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'role';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['role']
    >;
    composites: {};
  };

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<
    Prisma.$rolePayload,
    S
  >;

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role']; meta: { name: 'role' } };
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Roles.
     *     @param {roleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the role model
     */
    readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<'role', 'String'>;
    readonly created_at: FieldRef<'role', 'DateTime'>;
    readonly updated_at: FieldRef<'role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The data needed to create a role.
     */
    data?: XOR<roleCreateInput, roleUncheckedCreateInput>;
  };

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>;
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput;
  };

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput;
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>;
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
  };

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput;
  };

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
  };

  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  export type SalesAvgAggregateOutputType = {
    sales_amount: number | null;
  };

  export type SalesSumAggregateOutputType = {
    sales_amount: number | null;
  };

  export type SalesMinAggregateOutputType = {
    id: string | null;
    sales_date: Date | null;
    sales_amount: number | null;
    sales_region: string | null;
    employee_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesMaxAggregateOutputType = {
    id: string | null;
    sales_date: Date | null;
    sales_amount: number | null;
    sales_region: string | null;
    employee_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SalesCountAggregateOutputType = {
    id: number;
    sales_date: number;
    sales_amount: number;
    sales_region: number;
    employee_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SalesAvgAggregateInputType = {
    sales_amount?: true;
  };

  export type SalesSumAggregateInputType = {
    sales_amount?: true;
  };

  export type SalesMinAggregateInputType = {
    id?: true;
    sales_date?: true;
    sales_amount?: true;
    sales_region?: true;
    employee_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesMaxAggregateInputType = {
    id?: true;
    sales_date?: true;
    sales_amount?: true;
    sales_region?: true;
    employee_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SalesCountAggregateInputType = {
    id?: true;
    sales_date?: true;
    sales_amount?: true;
    sales_region?: true;
    employee_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sales
     **/
    _count?: true | SalesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SalesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SalesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SalesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SalesMaxAggregateInputType;
  };

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
    [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>;
  };

  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput;
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[];
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum;
    having?: salesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalesCountAggregateInputType | true;
    _avg?: SalesAvgAggregateInputType;
    _sum?: SalesSumAggregateInputType;
    _min?: SalesMinAggregateInputType;
    _max?: SalesMaxAggregateInputType;
  };

  export type SalesGroupByOutputType = {
    id: string;
    sales_date: Date;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: SalesCountAggregateOutputType | null;
    _avg: SalesAvgAggregateOutputType | null;
    _sum: SalesSumAggregateOutputType | null;
    _min: SalesMinAggregateOutputType | null;
    _max: SalesMaxAggregateOutputType | null;
  };

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SalesGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
          : GetScalarType<T[P], SalesGroupByOutputType[P]>;
      }
    >
  >;

  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      sales_date?: boolean;
      sales_amount?: boolean;
      sales_region?: boolean;
      employee_id?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      incentive?: boolean | sales$incentiveArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      employee?: boolean | employeeDefaultArgs<ExtArgs>;
      _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['sales']
  >;

  export type salesSelectScalar = {
    id?: boolean;
    sales_date?: boolean;
    sales_amount?: boolean;
    sales_region?: boolean;
    employee_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incentive?: boolean | sales$incentiveArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    employee?: boolean | employeeDefaultArgs<ExtArgs>;
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sales';
    objects: {
      incentive: Prisma.$incentivePayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      employee: Prisma.$employeePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        sales_date: Date;
        sales_amount: number;
        sales_region: string;
        employee_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sales']
    >;
    composites: {};
  };

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<
    Prisma.$salesPayload,
    S
  >;

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    salesFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SalesCountAggregateInputType | true;
  };

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales']; meta: { name: 'sales' } };
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends salesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Sales that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends salesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     *
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends salesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     *
     **/
    create<T extends salesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, salesCreateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sales.
     *     @param {salesCreateManyArgs} args - Arguments to create many Sales.
     *     @example
     *     // Create many Sales
     *     const sales = await prisma.sales.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends salesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     *
     **/
    delete<T extends salesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, salesDeleteArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends salesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends salesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends salesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     **/
    upsert<T extends salesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, salesUpsertArgs<ExtArgs>>,
    ): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
     **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(
      args: Subset<T, SalesAggregateArgs>,
    ): Prisma.PrismaPromise<GetSalesAggregateType<T>>;

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
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
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sales model
     */
    readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    incentive<T extends sales$incentiveArgs<ExtArgs> = {}>(
      args?: Subset<T, sales$incentiveArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$incentivePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    employee<T extends employeeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, employeeDefaultArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<'sales', 'String'>;
    readonly sales_date: FieldRef<'sales', 'DateTime'>;
    readonly sales_amount: FieldRef<'sales', 'Int'>;
    readonly sales_region: FieldRef<'sales', 'String'>;
    readonly employee_id: FieldRef<'sales', 'String'>;
    readonly company_id: FieldRef<'sales', 'String'>;
    readonly created_at: FieldRef<'sales', 'DateTime'>;
    readonly updated_at: FieldRef<'sales', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales.
     */
    skip?: number;
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[];
  };

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>;
  };

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>;
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput;
  };

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput;
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>;
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>;
  };

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput;
  };

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput;
  };

  /**
   * sales.incentive
   */
  export type sales$incentiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the incentive
     */
    select?: incentiveSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: incentiveInclude<ExtArgs> | null;
    where?: incentiveWhereInput;
    orderBy?: incentiveOrderByWithRelationInput | incentiveOrderByWithRelationInput[];
    cursor?: incentiveWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IncentiveScalarFieldEnum | IncentiveScalarFieldEnum[];
  };

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: salesInclude<ExtArgs> | null;
  };

  /**
   * Model sales_target
   */

  export type AggregateSales_target = {
    _count: Sales_targetCountAggregateOutputType | null;
    _min: Sales_targetMinAggregateOutputType | null;
    _max: Sales_targetMaxAggregateOutputType | null;
  };

  export type Sales_targetMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sales_targetMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Sales_targetCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Sales_targetMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sales_targetMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Sales_targetCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Sales_targetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_target to aggregate.
     */
    where?: sales_targetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_targets to fetch.
     */
    orderBy?: sales_targetOrderByWithRelationInput | sales_targetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: sales_targetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_targets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_targets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned sales_targets
     **/
    _count?: true | Sales_targetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Sales_targetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Sales_targetMaxAggregateInputType;
  };

  export type GetSales_targetAggregateType<T extends Sales_targetAggregateArgs> = {
    [P in keyof T & keyof AggregateSales_target]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_target[P]>
      : GetScalarType<T[P], AggregateSales_target[P]>;
  };

  export type sales_targetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_targetWhereInput;
    orderBy?: sales_targetOrderByWithAggregationInput | sales_targetOrderByWithAggregationInput[];
    by: Sales_targetScalarFieldEnum[] | Sales_targetScalarFieldEnum;
    having?: sales_targetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sales_targetCountAggregateInputType | true;
    _min?: Sales_targetMinAggregateInputType;
    _max?: Sales_targetMaxAggregateInputType;
  };

  export type Sales_targetGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Sales_targetCountAggregateOutputType | null;
    _min: Sales_targetMinAggregateOutputType | null;
    _max: Sales_targetMaxAggregateOutputType | null;
  };

  type GetSales_targetGroupByPayload<T extends sales_targetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_targetGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Sales_targetGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Sales_targetGroupByOutputType[P]>
          : GetScalarType<T[P], Sales_targetGroupByOutputType[P]>;
      }
    >
  >;

  export type sales_targetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['sales_target']
    >;

  export type sales_targetSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $sales_targetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'sales_target';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['sales_target']
    >;
    composites: {};
  };

  type sales_targetGetPayload<S extends boolean | null | undefined | sales_targetDefaultArgs> = $Result.GetResult<
    Prisma.$sales_targetPayload,
    S
  >;

  type sales_targetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    sales_targetFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Sales_targetCountAggregateInputType | true;
  };

  export interface sales_targetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales_target']; meta: { name: 'sales_target' } };
    /**
     * Find zero or one Sales_target that matches the filter.
     * @param {sales_targetFindUniqueArgs} args - Arguments to find a Sales_target
     * @example
     * // Get one Sales_target
     * const sales_target = await prisma.sales_target.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends sales_targetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetFindUniqueArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<
      $Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Sales_target that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {sales_targetFindUniqueOrThrowArgs} args - Arguments to find a Sales_target
     * @example
     * // Get one Sales_target
     * const sales_target = await prisma.sales_target.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends sales_targetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<
      $Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Sales_target that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetFindFirstArgs} args - Arguments to find a Sales_target
     * @example
     * // Get one Sales_target
     * const sales_target = await prisma.sales_target.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends sales_targetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetFindFirstArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<
      $Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Sales_target that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetFindFirstOrThrowArgs} args - Arguments to find a Sales_target
     * @example
     * // Get one Sales_target
     * const sales_target = await prisma.sales_target.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends sales_targetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<
      $Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sales_targets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_targets
     * const sales_targets = await prisma.sales_target.findMany()
     *
     * // Get first 10 Sales_targets
     * const sales_targets = await prisma.sales_target.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sales_targetWithIdOnly = await prisma.sales_target.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends sales_targetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Sales_target.
     * @param {sales_targetCreateArgs} args - Arguments to create a Sales_target.
     * @example
     * // Create one Sales_target
     * const Sales_target = await prisma.sales_target.create({
     *   data: {
     *     // ... data to create a Sales_target
     *   }
     * })
     *
     **/
    create<T extends sales_targetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetCreateArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<$Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Sales_targets.
     *     @param {sales_targetCreateManyArgs} args - Arguments to create many Sales_targets.
     *     @example
     *     // Create many Sales_targets
     *     const sales_target = await prisma.sales_target.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends sales_targetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Sales_target.
     * @param {sales_targetDeleteArgs} args - Arguments to delete one Sales_target.
     * @example
     * // Delete one Sales_target
     * const Sales_target = await prisma.sales_target.delete({
     *   where: {
     *     // ... filter to delete one Sales_target
     *   }
     * })
     *
     **/
    delete<T extends sales_targetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetDeleteArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<$Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Sales_target.
     * @param {sales_targetUpdateArgs} args - Arguments to update one Sales_target.
     * @example
     * // Update one Sales_target
     * const sales_target = await prisma.sales_target.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends sales_targetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetUpdateArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<$Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Sales_targets.
     * @param {sales_targetDeleteManyArgs} args - Arguments to filter Sales_targets to delete.
     * @example
     * // Delete a few Sales_targets
     * const { count } = await prisma.sales_target.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends sales_targetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sales_targetDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sales_targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_targets
     * const sales_target = await prisma.sales_target.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends sales_targetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Sales_target.
     * @param {sales_targetUpsertArgs} args - Arguments to update or create a Sales_target.
     * @example
     * // Update or create a Sales_target
     * const sales_target = await prisma.sales_target.upsert({
     *   create: {
     *     // ... data to create a Sales_target
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_target we want to update
     *   }
     * })
     **/
    upsert<T extends sales_targetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sales_targetUpsertArgs<ExtArgs>>,
    ): Prisma__sales_targetClient<$Result.GetResult<Prisma.$sales_targetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Sales_targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetCountArgs} args - Arguments to filter Sales_targets to count.
     * @example
     * // Count the number of Sales_targets
     * const count = await prisma.sales_target.count({
     *   where: {
     *     // ... the filter for the Sales_targets we want to count
     *   }
     * })
     **/
    count<T extends sales_targetCountArgs>(
      args?: Subset<T, sales_targetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_targetCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Sales_target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_targetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sales_targetAggregateArgs>(
      args: Subset<T, Sales_targetAggregateArgs>,
    ): Prisma.PrismaPromise<GetSales_targetAggregateType<T>>;

    /**
     * Group by Sales_target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_targetGroupByArgs} args - Group by arguments.
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
      T extends sales_targetGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sales_targetGroupByArgs['orderBy'] }
        : { orderBy?: sales_targetGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, sales_targetGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSales_targetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the sales_target model
     */
    readonly fields: sales_targetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales_target.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sales_targetClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the sales_target model
   */
  interface sales_targetFieldRefs {
    readonly id: FieldRef<'sales_target', 'String'>;
    readonly created_at: FieldRef<'sales_target', 'DateTime'>;
    readonly updated_at: FieldRef<'sales_target', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * sales_target findUnique
   */
  export type sales_targetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter, which sales_target to fetch.
     */
    where: sales_targetWhereUniqueInput;
  };

  /**
   * sales_target findUniqueOrThrow
   */
  export type sales_targetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter, which sales_target to fetch.
     */
    where: sales_targetWhereUniqueInput;
  };

  /**
   * sales_target findFirst
   */
  export type sales_targetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter, which sales_target to fetch.
     */
    where?: sales_targetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_targets to fetch.
     */
    orderBy?: sales_targetOrderByWithRelationInput | sales_targetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales_targets.
     */
    cursor?: sales_targetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_targets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_targets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales_targets.
     */
    distinct?: Sales_targetScalarFieldEnum | Sales_targetScalarFieldEnum[];
  };

  /**
   * sales_target findFirstOrThrow
   */
  export type sales_targetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter, which sales_target to fetch.
     */
    where?: sales_targetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_targets to fetch.
     */
    orderBy?: sales_targetOrderByWithRelationInput | sales_targetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for sales_targets.
     */
    cursor?: sales_targetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_targets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_targets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of sales_targets.
     */
    distinct?: Sales_targetScalarFieldEnum | Sales_targetScalarFieldEnum[];
  };

  /**
   * sales_target findMany
   */
  export type sales_targetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter, which sales_targets to fetch.
     */
    where?: sales_targetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of sales_targets to fetch.
     */
    orderBy?: sales_targetOrderByWithRelationInput | sales_targetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing sales_targets.
     */
    cursor?: sales_targetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` sales_targets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` sales_targets.
     */
    skip?: number;
    distinct?: Sales_targetScalarFieldEnum | Sales_targetScalarFieldEnum[];
  };

  /**
   * sales_target create
   */
  export type sales_targetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * The data needed to create a sales_target.
     */
    data?: XOR<sales_targetCreateInput, sales_targetUncheckedCreateInput>;
  };

  /**
   * sales_target createMany
   */
  export type sales_targetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales_targets.
     */
    data: sales_targetCreateManyInput | sales_targetCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * sales_target update
   */
  export type sales_targetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * The data needed to update a sales_target.
     */
    data: XOR<sales_targetUpdateInput, sales_targetUncheckedUpdateInput>;
    /**
     * Choose, which sales_target to update.
     */
    where: sales_targetWhereUniqueInput;
  };

  /**
   * sales_target updateMany
   */
  export type sales_targetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales_targets.
     */
    data: XOR<sales_targetUpdateManyMutationInput, sales_targetUncheckedUpdateManyInput>;
    /**
     * Filter which sales_targets to update
     */
    where?: sales_targetWhereInput;
  };

  /**
   * sales_target upsert
   */
  export type sales_targetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * The filter to search for the sales_target to update in case it exists.
     */
    where: sales_targetWhereUniqueInput;
    /**
     * In case the sales_target found by the `where` argument doesn't exist, create a new sales_target with this data.
     */
    create: XOR<sales_targetCreateInput, sales_targetUncheckedCreateInput>;
    /**
     * In case the sales_target was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sales_targetUpdateInput, sales_targetUncheckedUpdateInput>;
  };

  /**
   * sales_target delete
   */
  export type sales_targetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
    /**
     * Filter which sales_target to delete.
     */
    where: sales_targetWhereUniqueInput;
  };

  /**
   * sales_target deleteMany
   */
  export type sales_targetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_targets to delete
     */
    where?: sales_targetWhereInput;
  };

  /**
   * sales_target without action
   */
  export type sales_targetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_target
     */
    select?: sales_targetSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | user$employeeArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      employee: Prisma.$employeePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AchievementScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];

  export const Bonus_allocationScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Bonus_allocationScalarFieldEnum =
    (typeof Bonus_allocationScalarFieldEnum)[keyof typeof Bonus_allocationScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    established_date: 'established_date';
    industry: 'industry';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    job_title: 'job_title';
    hire_date: 'hire_date';
    salary: 'salary';
    commission_pct: 'commission_pct';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Employee_rankScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Employee_rankScalarFieldEnum =
    (typeof Employee_rankScalarFieldEnum)[keyof typeof Employee_rankScalarFieldEnum];

  export const IncentiveScalarFieldEnum: {
    id: 'id';
    incentive_date: 'incentive_date';
    incentive_amount: 'incentive_amount';
    incentive_type: 'incentive_type';
    employee_id: 'employee_id';
    sales_id: 'sales_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type IncentiveScalarFieldEnum = (typeof IncentiveScalarFieldEnum)[keyof typeof IncentiveScalarFieldEnum];

  export const Incentive_schemeScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Incentive_schemeScalarFieldEnum =
    (typeof Incentive_schemeScalarFieldEnum)[keyof typeof Incentive_schemeScalarFieldEnum];

  export const Performance_metricScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Performance_metricScalarFieldEnum =
    (typeof Performance_metricScalarFieldEnum)[keyof typeof Performance_metricScalarFieldEnum];

  export const RoleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const SalesScalarFieldEnum: {
    id: 'id';
    sales_date: 'sales_date';
    sales_amount: 'sales_amount';
    sales_region: 'sales_region';
    employee_id: 'employee_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum];

  export const Sales_targetScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Sales_targetScalarFieldEnum =
    (typeof Sales_targetScalarFieldEnum)[keyof typeof Sales_targetScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type achievementWhereInput = {
    AND?: achievementWhereInput | achievementWhereInput[];
    OR?: achievementWhereInput[];
    NOT?: achievementWhereInput | achievementWhereInput[];
    id?: UuidFilter<'achievement'> | string;
    created_at?: DateTimeFilter<'achievement'> | Date | string;
    updated_at?: DateTimeFilter<'achievement'> | Date | string;
  };

  export type achievementOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type achievementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: achievementWhereInput | achievementWhereInput[];
      OR?: achievementWhereInput[];
      NOT?: achievementWhereInput | achievementWhereInput[];
      created_at?: DateTimeFilter<'achievement'> | Date | string;
      updated_at?: DateTimeFilter<'achievement'> | Date | string;
    },
    'id'
  >;

  export type achievementOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: achievementCountOrderByAggregateInput;
    _max?: achievementMaxOrderByAggregateInput;
    _min?: achievementMinOrderByAggregateInput;
  };

  export type achievementScalarWhereWithAggregatesInput = {
    AND?: achievementScalarWhereWithAggregatesInput | achievementScalarWhereWithAggregatesInput[];
    OR?: achievementScalarWhereWithAggregatesInput[];
    NOT?: achievementScalarWhereWithAggregatesInput | achievementScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'achievement'> | string;
    created_at?: DateTimeWithAggregatesFilter<'achievement'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'achievement'> | Date | string;
  };

  export type bonus_allocationWhereInput = {
    AND?: bonus_allocationWhereInput | bonus_allocationWhereInput[];
    OR?: bonus_allocationWhereInput[];
    NOT?: bonus_allocationWhereInput | bonus_allocationWhereInput[];
    id?: UuidFilter<'bonus_allocation'> | string;
    created_at?: DateTimeFilter<'bonus_allocation'> | Date | string;
    updated_at?: DateTimeFilter<'bonus_allocation'> | Date | string;
  };

  export type bonus_allocationOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bonus_allocationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bonus_allocationWhereInput | bonus_allocationWhereInput[];
      OR?: bonus_allocationWhereInput[];
      NOT?: bonus_allocationWhereInput | bonus_allocationWhereInput[];
      created_at?: DateTimeFilter<'bonus_allocation'> | Date | string;
      updated_at?: DateTimeFilter<'bonus_allocation'> | Date | string;
    },
    'id'
  >;

  export type bonus_allocationOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bonus_allocationCountOrderByAggregateInput;
    _max?: bonus_allocationMaxOrderByAggregateInput;
    _min?: bonus_allocationMinOrderByAggregateInput;
  };

  export type bonus_allocationScalarWhereWithAggregatesInput = {
    AND?: bonus_allocationScalarWhereWithAggregatesInput | bonus_allocationScalarWhereWithAggregatesInput[];
    OR?: bonus_allocationScalarWhereWithAggregatesInput[];
    NOT?: bonus_allocationScalarWhereWithAggregatesInput | bonus_allocationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'bonus_allocation'> | string;
    created_at?: DateTimeWithAggregatesFilter<'bonus_allocation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'bonus_allocation'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    employee?: EmployeeListRelationFilter;
    incentive?: IncentiveListRelationFilter;
    sales?: SalesListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
    incentive?: incentiveOrderByRelationAggregateInput;
    sales?: salesOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      location?: StringNullableFilter<'company'> | string | null;
      established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      employee?: EmployeeListRelationFilter;
      incentive?: IncentiveListRelationFilter;
      sales?: SalesListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    location?: StringNullableWithAggregatesFilter<'company'> | string | null;
    established_date?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    job_title?: StringFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    salary?: IntFilter<'employee'> | number;
    commission_pct?: IntNullableFilter<'employee'> | number | null;
    user_id?: UuidFilter<'employee'> | string;
    company_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    incentive?: IncentiveListRelationFilter;
    sales?: SalesListRelationFilter;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    job_title?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    commission_pct?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    incentive?: incentiveOrderByRelationAggregateInput;
    sales?: salesOrderByRelationAggregateInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      job_title?: StringFilter<'employee'> | string;
      hire_date?: DateTimeFilter<'employee'> | Date | string;
      salary?: IntFilter<'employee'> | number;
      commission_pct?: IntNullableFilter<'employee'> | number | null;
      user_id?: UuidFilter<'employee'> | string;
      company_id?: UuidFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      incentive?: IncentiveListRelationFilter;
      sales?: SalesListRelationFilter;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    job_title?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    commission_pct?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    job_title?: StringWithAggregatesFilter<'employee'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    commission_pct?: IntNullableWithAggregatesFilter<'employee'> | number | null;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    company_id?: UuidWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type employee_rankWhereInput = {
    AND?: employee_rankWhereInput | employee_rankWhereInput[];
    OR?: employee_rankWhereInput[];
    NOT?: employee_rankWhereInput | employee_rankWhereInput[];
    id?: UuidFilter<'employee_rank'> | string;
    created_at?: DateTimeFilter<'employee_rank'> | Date | string;
    updated_at?: DateTimeFilter<'employee_rank'> | Date | string;
  };

  export type employee_rankOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employee_rankWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employee_rankWhereInput | employee_rankWhereInput[];
      OR?: employee_rankWhereInput[];
      NOT?: employee_rankWhereInput | employee_rankWhereInput[];
      created_at?: DateTimeFilter<'employee_rank'> | Date | string;
      updated_at?: DateTimeFilter<'employee_rank'> | Date | string;
    },
    'id'
  >;

  export type employee_rankOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employee_rankCountOrderByAggregateInput;
    _max?: employee_rankMaxOrderByAggregateInput;
    _min?: employee_rankMinOrderByAggregateInput;
  };

  export type employee_rankScalarWhereWithAggregatesInput = {
    AND?: employee_rankScalarWhereWithAggregatesInput | employee_rankScalarWhereWithAggregatesInput[];
    OR?: employee_rankScalarWhereWithAggregatesInput[];
    NOT?: employee_rankScalarWhereWithAggregatesInput | employee_rankScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee_rank'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee_rank'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee_rank'> | Date | string;
  };

  export type incentiveWhereInput = {
    AND?: incentiveWhereInput | incentiveWhereInput[];
    OR?: incentiveWhereInput[];
    NOT?: incentiveWhereInput | incentiveWhereInput[];
    id?: UuidFilter<'incentive'> | string;
    incentive_date?: DateTimeFilter<'incentive'> | Date | string;
    incentive_amount?: IntFilter<'incentive'> | number;
    incentive_type?: StringFilter<'incentive'> | string;
    employee_id?: UuidFilter<'incentive'> | string;
    sales_id?: UuidFilter<'incentive'> | string;
    company_id?: UuidFilter<'incentive'> | string;
    created_at?: DateTimeFilter<'incentive'> | Date | string;
    updated_at?: DateTimeFilter<'incentive'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    sales?: XOR<SalesRelationFilter, salesWhereInput>;
  };

  export type incentiveOrderByWithRelationInput = {
    id?: SortOrder;
    incentive_date?: SortOrder;
    incentive_amount?: SortOrder;
    incentive_type?: SortOrder;
    employee_id?: SortOrder;
    sales_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    employee?: employeeOrderByWithRelationInput;
    sales?: salesOrderByWithRelationInput;
  };

  export type incentiveWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: incentiveWhereInput | incentiveWhereInput[];
      OR?: incentiveWhereInput[];
      NOT?: incentiveWhereInput | incentiveWhereInput[];
      incentive_date?: DateTimeFilter<'incentive'> | Date | string;
      incentive_amount?: IntFilter<'incentive'> | number;
      incentive_type?: StringFilter<'incentive'> | string;
      employee_id?: UuidFilter<'incentive'> | string;
      sales_id?: UuidFilter<'incentive'> | string;
      company_id?: UuidFilter<'incentive'> | string;
      created_at?: DateTimeFilter<'incentive'> | Date | string;
      updated_at?: DateTimeFilter<'incentive'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
      sales?: XOR<SalesRelationFilter, salesWhereInput>;
    },
    'id'
  >;

  export type incentiveOrderByWithAggregationInput = {
    id?: SortOrder;
    incentive_date?: SortOrder;
    incentive_amount?: SortOrder;
    incentive_type?: SortOrder;
    employee_id?: SortOrder;
    sales_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: incentiveCountOrderByAggregateInput;
    _avg?: incentiveAvgOrderByAggregateInput;
    _max?: incentiveMaxOrderByAggregateInput;
    _min?: incentiveMinOrderByAggregateInput;
    _sum?: incentiveSumOrderByAggregateInput;
  };

  export type incentiveScalarWhereWithAggregatesInput = {
    AND?: incentiveScalarWhereWithAggregatesInput | incentiveScalarWhereWithAggregatesInput[];
    OR?: incentiveScalarWhereWithAggregatesInput[];
    NOT?: incentiveScalarWhereWithAggregatesInput | incentiveScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'incentive'> | string;
    incentive_date?: DateTimeWithAggregatesFilter<'incentive'> | Date | string;
    incentive_amount?: IntWithAggregatesFilter<'incentive'> | number;
    incentive_type?: StringWithAggregatesFilter<'incentive'> | string;
    employee_id?: UuidWithAggregatesFilter<'incentive'> | string;
    sales_id?: UuidWithAggregatesFilter<'incentive'> | string;
    company_id?: UuidWithAggregatesFilter<'incentive'> | string;
    created_at?: DateTimeWithAggregatesFilter<'incentive'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'incentive'> | Date | string;
  };

  export type incentive_schemeWhereInput = {
    AND?: incentive_schemeWhereInput | incentive_schemeWhereInput[];
    OR?: incentive_schemeWhereInput[];
    NOT?: incentive_schemeWhereInput | incentive_schemeWhereInput[];
    id?: UuidFilter<'incentive_scheme'> | string;
    created_at?: DateTimeFilter<'incentive_scheme'> | Date | string;
    updated_at?: DateTimeFilter<'incentive_scheme'> | Date | string;
  };

  export type incentive_schemeOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentive_schemeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: incentive_schemeWhereInput | incentive_schemeWhereInput[];
      OR?: incentive_schemeWhereInput[];
      NOT?: incentive_schemeWhereInput | incentive_schemeWhereInput[];
      created_at?: DateTimeFilter<'incentive_scheme'> | Date | string;
      updated_at?: DateTimeFilter<'incentive_scheme'> | Date | string;
    },
    'id'
  >;

  export type incentive_schemeOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: incentive_schemeCountOrderByAggregateInput;
    _max?: incentive_schemeMaxOrderByAggregateInput;
    _min?: incentive_schemeMinOrderByAggregateInput;
  };

  export type incentive_schemeScalarWhereWithAggregatesInput = {
    AND?: incentive_schemeScalarWhereWithAggregatesInput | incentive_schemeScalarWhereWithAggregatesInput[];
    OR?: incentive_schemeScalarWhereWithAggregatesInput[];
    NOT?: incentive_schemeScalarWhereWithAggregatesInput | incentive_schemeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'incentive_scheme'> | string;
    created_at?: DateTimeWithAggregatesFilter<'incentive_scheme'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'incentive_scheme'> | Date | string;
  };

  export type performance_metricWhereInput = {
    AND?: performance_metricWhereInput | performance_metricWhereInput[];
    OR?: performance_metricWhereInput[];
    NOT?: performance_metricWhereInput | performance_metricWhereInput[];
    id?: UuidFilter<'performance_metric'> | string;
    created_at?: DateTimeFilter<'performance_metric'> | Date | string;
    updated_at?: DateTimeFilter<'performance_metric'> | Date | string;
  };

  export type performance_metricOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_metricWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: performance_metricWhereInput | performance_metricWhereInput[];
      OR?: performance_metricWhereInput[];
      NOT?: performance_metricWhereInput | performance_metricWhereInput[];
      created_at?: DateTimeFilter<'performance_metric'> | Date | string;
      updated_at?: DateTimeFilter<'performance_metric'> | Date | string;
    },
    'id'
  >;

  export type performance_metricOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: performance_metricCountOrderByAggregateInput;
    _max?: performance_metricMaxOrderByAggregateInput;
    _min?: performance_metricMinOrderByAggregateInput;
  };

  export type performance_metricScalarWhereWithAggregatesInput = {
    AND?: performance_metricScalarWhereWithAggregatesInput | performance_metricScalarWhereWithAggregatesInput[];
    OR?: performance_metricScalarWhereWithAggregatesInput[];
    NOT?: performance_metricScalarWhereWithAggregatesInput | performance_metricScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'performance_metric'> | string;
    created_at?: DateTimeWithAggregatesFilter<'performance_metric'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'performance_metric'> | Date | string;
  };

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[];
    OR?: roleWhereInput[];
    NOT?: roleWhereInput | roleWhereInput[];
    id?: UuidFilter<'role'> | string;
    created_at?: DateTimeFilter<'role'> | Date | string;
    updated_at?: DateTimeFilter<'role'> | Date | string;
  };

  export type roleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: roleWhereInput | roleWhereInput[];
      OR?: roleWhereInput[];
      NOT?: roleWhereInput | roleWhereInput[];
      created_at?: DateTimeFilter<'role'> | Date | string;
      updated_at?: DateTimeFilter<'role'> | Date | string;
    },
    'id'
  >;

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: roleCountOrderByAggregateInput;
    _max?: roleMaxOrderByAggregateInput;
    _min?: roleMinOrderByAggregateInput;
  };

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    OR?: roleScalarWhereWithAggregatesInput[];
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
  };

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[];
    OR?: salesWhereInput[];
    NOT?: salesWhereInput | salesWhereInput[];
    id?: UuidFilter<'sales'> | string;
    sales_date?: DateTimeFilter<'sales'> | Date | string;
    sales_amount?: IntFilter<'sales'> | number;
    sales_region?: StringFilter<'sales'> | string;
    employee_id?: UuidFilter<'sales'> | string;
    company_id?: UuidFilter<'sales'> | string;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
    incentive?: IncentiveListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
  };

  export type salesOrderByWithRelationInput = {
    id?: SortOrder;
    sales_date?: SortOrder;
    sales_amount?: SortOrder;
    sales_region?: SortOrder;
    employee_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    incentive?: incentiveOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    employee?: employeeOrderByWithRelationInput;
  };

  export type salesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: salesWhereInput | salesWhereInput[];
      OR?: salesWhereInput[];
      NOT?: salesWhereInput | salesWhereInput[];
      sales_date?: DateTimeFilter<'sales'> | Date | string;
      sales_amount?: IntFilter<'sales'> | number;
      sales_region?: StringFilter<'sales'> | string;
      employee_id?: UuidFilter<'sales'> | string;
      company_id?: UuidFilter<'sales'> | string;
      created_at?: DateTimeFilter<'sales'> | Date | string;
      updated_at?: DateTimeFilter<'sales'> | Date | string;
      incentive?: IncentiveListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      employee?: XOR<EmployeeRelationFilter, employeeWhereInput>;
    },
    'id'
  >;

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder;
    sales_date?: SortOrder;
    sales_amount?: SortOrder;
    sales_region?: SortOrder;
    employee_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: salesCountOrderByAggregateInput;
    _avg?: salesAvgOrderByAggregateInput;
    _max?: salesMaxOrderByAggregateInput;
    _min?: salesMinOrderByAggregateInput;
    _sum?: salesSumOrderByAggregateInput;
  };

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    OR?: salesScalarWhereWithAggregatesInput[];
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sales'> | string;
    sales_date?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
    sales_amount?: IntWithAggregatesFilter<'sales'> | number;
    sales_region?: StringWithAggregatesFilter<'sales'> | string;
    employee_id?: UuidWithAggregatesFilter<'sales'> | string;
    company_id?: UuidWithAggregatesFilter<'sales'> | string;
    created_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sales'> | Date | string;
  };

  export type sales_targetWhereInput = {
    AND?: sales_targetWhereInput | sales_targetWhereInput[];
    OR?: sales_targetWhereInput[];
    NOT?: sales_targetWhereInput | sales_targetWhereInput[];
    id?: UuidFilter<'sales_target'> | string;
    created_at?: DateTimeFilter<'sales_target'> | Date | string;
    updated_at?: DateTimeFilter<'sales_target'> | Date | string;
  };

  export type sales_targetOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_targetWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: sales_targetWhereInput | sales_targetWhereInput[];
      OR?: sales_targetWhereInput[];
      NOT?: sales_targetWhereInput | sales_targetWhereInput[];
      created_at?: DateTimeFilter<'sales_target'> | Date | string;
      updated_at?: DateTimeFilter<'sales_target'> | Date | string;
    },
    'id'
  >;

  export type sales_targetOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: sales_targetCountOrderByAggregateInput;
    _max?: sales_targetMaxOrderByAggregateInput;
    _min?: sales_targetMinOrderByAggregateInput;
  };

  export type sales_targetScalarWhereWithAggregatesInput = {
    AND?: sales_targetScalarWhereWithAggregatesInput | sales_targetScalarWhereWithAggregatesInput[];
    OR?: sales_targetScalarWhereWithAggregatesInput[];
    NOT?: sales_targetScalarWhereWithAggregatesInput | sales_targetScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'sales_target'> | string;
    created_at?: DateTimeWithAggregatesFilter<'sales_target'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'sales_target'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    employee?: EmployeeListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    employee?: employeeOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      employee?: EmployeeListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type achievementCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bonus_allocationCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bonus_allocationUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bonus_allocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bonus_allocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bonus_allocationCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bonus_allocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bonus_allocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    incentive?: incentiveCreateNestedManyWithoutCompanyInput;
    sales?: salesCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    incentive?: incentiveUncheckedCreateNestedManyWithoutCompanyInput;
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    incentive?: incentiveUpdateManyWithoutCompanyNestedInput;
    sales?: salesUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    incentive?: incentiveUncheckedUpdateManyWithoutCompanyNestedInput;
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type employeeCreateInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    incentive?: incentiveCreateNestedManyWithoutEmployeeInput;
    sales?: salesCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutEmployeeInput;
    sales?: salesUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    incentive?: incentiveUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateManyInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employee_rankCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employee_rankUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employee_rankUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employee_rankUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employee_rankCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employee_rankUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employee_rankUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveCreateInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutIncentiveInput;
    employee: employeeCreateNestedOneWithoutIncentiveInput;
    sales: salesCreateNestedOneWithoutIncentiveInput;
  };

  export type incentiveUncheckedCreateInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    sales_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutIncentiveNestedInput;
    employee?: employeeUpdateOneRequiredWithoutIncentiveNestedInput;
    sales?: salesUpdateOneRequiredWithoutIncentiveNestedInput;
  };

  export type incentiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveCreateManyInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    sales_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentive_schemeCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentive_schemeUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentive_schemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentive_schemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentive_schemeCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentive_schemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentive_schemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_metricCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_metricUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_metricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_metricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_metricCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_metricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_metricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesCreateInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveCreateNestedManyWithoutSalesInput;
    company: companyCreateNestedOneWithoutSalesInput;
    employee: employeeCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutSalesInput;
  };

  export type salesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUpdateManyWithoutSalesNestedInput;
    company?: companyUpdateOneRequiredWithoutSalesNestedInput;
    employee?: employeeUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutSalesNestedInput;
  };

  export type salesCreateManyInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_targetCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_targetUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_targetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_targetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_targetCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type sales_targetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type sales_targetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type achievementCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type achievementMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type achievementMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type bonus_allocationCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bonus_allocationMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bonus_allocationMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type IncentiveListRelationFilter = {
    every?: incentiveWhereInput;
    some?: incentiveWhereInput;
    none?: incentiveWhereInput;
  };

  export type SalesListRelationFilter = {
    every?: salesWhereInput;
    some?: salesWhereInput;
    none?: salesWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type incentiveOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    established_date?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    job_title?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    commission_pct?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
    commission_pct?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    job_title?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    commission_pct?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    job_title?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    commission_pct?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
    commission_pct?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type employee_rankCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employee_rankMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employee_rankMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EmployeeRelationFilter = {
    is?: employeeWhereInput;
    isNot?: employeeWhereInput;
  };

  export type SalesRelationFilter = {
    is?: salesWhereInput;
    isNot?: salesWhereInput;
  };

  export type incentiveCountOrderByAggregateInput = {
    id?: SortOrder;
    incentive_date?: SortOrder;
    incentive_amount?: SortOrder;
    incentive_type?: SortOrder;
    employee_id?: SortOrder;
    sales_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentiveAvgOrderByAggregateInput = {
    incentive_amount?: SortOrder;
  };

  export type incentiveMaxOrderByAggregateInput = {
    id?: SortOrder;
    incentive_date?: SortOrder;
    incentive_amount?: SortOrder;
    incentive_type?: SortOrder;
    employee_id?: SortOrder;
    sales_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentiveMinOrderByAggregateInput = {
    id?: SortOrder;
    incentive_date?: SortOrder;
    incentive_amount?: SortOrder;
    incentive_type?: SortOrder;
    employee_id?: SortOrder;
    sales_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentiveSumOrderByAggregateInput = {
    incentive_amount?: SortOrder;
  };

  export type incentive_schemeCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentive_schemeMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type incentive_schemeMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_metricCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_metricMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_metricMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder;
    sales_date?: SortOrder;
    sales_amount?: SortOrder;
    sales_region?: SortOrder;
    employee_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesAvgOrderByAggregateInput = {
    sales_amount?: SortOrder;
  };

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder;
    sales_date?: SortOrder;
    sales_amount?: SortOrder;
    sales_region?: SortOrder;
    employee_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder;
    sales_date?: SortOrder;
    sales_amount?: SortOrder;
    sales_region?: SortOrder;
    employee_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type salesSumOrderByAggregateInput = {
    sales_amount?: SortOrder;
  };

  export type sales_targetCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_targetMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type sales_targetMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type employeeCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type incentiveCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>
      | incentiveCreateWithoutCompanyInput[]
      | incentiveUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutCompanyInput | incentiveCreateOrConnectWithoutCompanyInput[];
    createMany?: incentiveCreateManyCompanyInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type salesCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
      | salesCreateWithoutCompanyInput[]
      | salesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[];
    createMany?: salesCreateManyCompanyInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type incentiveUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>
      | incentiveCreateWithoutCompanyInput[]
      | incentiveUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutCompanyInput | incentiveCreateOrConnectWithoutCompanyInput[];
    createMany?: incentiveCreateManyCompanyInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
      | salesCreateWithoutCompanyInput[]
      | salesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[];
    createMany?: salesCreateManyCompanyInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type employeeUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type incentiveUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>
      | incentiveCreateWithoutCompanyInput[]
      | incentiveUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutCompanyInput | incentiveCreateOrConnectWithoutCompanyInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutCompanyInput | incentiveUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: incentiveCreateManyCompanyInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutCompanyInput | incentiveUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutCompanyInput | incentiveUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type salesUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
      | salesCreateWithoutCompanyInput[]
      | salesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutCompanyInput | salesUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: salesCreateManyCompanyInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutCompanyInput | salesUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: salesUpdateManyWithWhereWithoutCompanyInput | salesUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type incentiveUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>
      | incentiveCreateWithoutCompanyInput[]
      | incentiveUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutCompanyInput | incentiveCreateOrConnectWithoutCompanyInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutCompanyInput | incentiveUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: incentiveCreateManyCompanyInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutCompanyInput | incentiveUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutCompanyInput | incentiveUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>
      | salesCreateWithoutCompanyInput[]
      | salesUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: salesCreateOrConnectWithoutCompanyInput | salesCreateOrConnectWithoutCompanyInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutCompanyInput | salesUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: salesCreateManyCompanyInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutCompanyInput | salesUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: salesUpdateManyWithWhereWithoutCompanyInput | salesUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type incentiveCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>
      | incentiveCreateWithoutEmployeeInput[]
      | incentiveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutEmployeeInput | incentiveCreateOrConnectWithoutEmployeeInput[];
    createMany?: incentiveCreateManyEmployeeInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type salesCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>
      | salesCreateWithoutEmployeeInput[]
      | salesUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: salesCreateOrConnectWithoutEmployeeInput | salesCreateOrConnectWithoutEmployeeInput[];
    createMany?: salesCreateManyEmployeeInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type incentiveUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>
      | incentiveCreateWithoutEmployeeInput[]
      | incentiveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutEmployeeInput | incentiveCreateOrConnectWithoutEmployeeInput[];
    createMany?: incentiveCreateManyEmployeeInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type salesUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?:
      | XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>
      | salesCreateWithoutEmployeeInput[]
      | salesUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: salesCreateOrConnectWithoutEmployeeInput | salesCreateOrConnectWithoutEmployeeInput[];
    createMany?: salesCreateManyEmployeeInputEnvelope;
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput;
    upsert?: companyUpsertWithoutEmployeeInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutEmployeeInput, companyUpdateWithoutEmployeeInput>,
      companyUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type incentiveUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>
      | incentiveCreateWithoutEmployeeInput[]
      | incentiveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutEmployeeInput | incentiveCreateOrConnectWithoutEmployeeInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutEmployeeInput | incentiveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: incentiveCreateManyEmployeeInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutEmployeeInput | incentiveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutEmployeeInput | incentiveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type salesUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>
      | salesCreateWithoutEmployeeInput[]
      | salesUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: salesCreateOrConnectWithoutEmployeeInput | salesCreateOrConnectWithoutEmployeeInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutEmployeeInput | salesUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: salesCreateManyEmployeeInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutEmployeeInput | salesUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: salesUpdateManyWithWhereWithoutEmployeeInput | salesUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type incentiveUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>
      | incentiveCreateWithoutEmployeeInput[]
      | incentiveUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutEmployeeInput | incentiveCreateOrConnectWithoutEmployeeInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutEmployeeInput | incentiveUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: incentiveCreateManyEmployeeInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutEmployeeInput | incentiveUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutEmployeeInput | incentiveUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type salesUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?:
      | XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>
      | salesCreateWithoutEmployeeInput[]
      | salesUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: salesCreateOrConnectWithoutEmployeeInput | salesCreateOrConnectWithoutEmployeeInput[];
    upsert?: salesUpsertWithWhereUniqueWithoutEmployeeInput | salesUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: salesCreateManyEmployeeInputEnvelope;
    set?: salesWhereUniqueInput | salesWhereUniqueInput[];
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[];
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[];
    update?: salesUpdateWithWhereUniqueWithoutEmployeeInput | salesUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: salesUpdateManyWithWhereWithoutEmployeeInput | salesUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutIncentiveInput = {
    create?: XOR<companyCreateWithoutIncentiveInput, companyUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: companyCreateOrConnectWithoutIncentiveInput;
    connect?: companyWhereUniqueInput;
  };

  export type employeeCreateNestedOneWithoutIncentiveInput = {
    create?: XOR<employeeCreateWithoutIncentiveInput, employeeUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutIncentiveInput;
    connect?: employeeWhereUniqueInput;
  };

  export type salesCreateNestedOneWithoutIncentiveInput = {
    create?: XOR<salesCreateWithoutIncentiveInput, salesUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: salesCreateOrConnectWithoutIncentiveInput;
    connect?: salesWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutIncentiveNestedInput = {
    create?: XOR<companyCreateWithoutIncentiveInput, companyUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: companyCreateOrConnectWithoutIncentiveInput;
    upsert?: companyUpsertWithoutIncentiveInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutIncentiveInput, companyUpdateWithoutIncentiveInput>,
      companyUncheckedUpdateWithoutIncentiveInput
    >;
  };

  export type employeeUpdateOneRequiredWithoutIncentiveNestedInput = {
    create?: XOR<employeeCreateWithoutIncentiveInput, employeeUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutIncentiveInput;
    upsert?: employeeUpsertWithoutIncentiveInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutIncentiveInput, employeeUpdateWithoutIncentiveInput>,
      employeeUncheckedUpdateWithoutIncentiveInput
    >;
  };

  export type salesUpdateOneRequiredWithoutIncentiveNestedInput = {
    create?: XOR<salesCreateWithoutIncentiveInput, salesUncheckedCreateWithoutIncentiveInput>;
    connectOrCreate?: salesCreateOrConnectWithoutIncentiveInput;
    upsert?: salesUpsertWithoutIncentiveInput;
    connect?: salesWhereUniqueInput;
    update?: XOR<
      XOR<salesUpdateToOneWithWhereWithoutIncentiveInput, salesUpdateWithoutIncentiveInput>,
      salesUncheckedUpdateWithoutIncentiveInput
    >;
  };

  export type incentiveCreateNestedManyWithoutSalesInput = {
    create?:
      | XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>
      | incentiveCreateWithoutSalesInput[]
      | incentiveUncheckedCreateWithoutSalesInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutSalesInput | incentiveCreateOrConnectWithoutSalesInput[];
    createMany?: incentiveCreateManySalesInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutSalesInput = {
    create?: XOR<companyCreateWithoutSalesInput, companyUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: companyCreateOrConnectWithoutSalesInput;
    connect?: companyWhereUniqueInput;
  };

  export type employeeCreateNestedOneWithoutSalesInput = {
    create?: XOR<employeeCreateWithoutSalesInput, employeeUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSalesInput;
    connect?: employeeWhereUniqueInput;
  };

  export type incentiveUncheckedCreateNestedManyWithoutSalesInput = {
    create?:
      | XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>
      | incentiveCreateWithoutSalesInput[]
      | incentiveUncheckedCreateWithoutSalesInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutSalesInput | incentiveCreateOrConnectWithoutSalesInput[];
    createMany?: incentiveCreateManySalesInputEnvelope;
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
  };

  export type incentiveUpdateManyWithoutSalesNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>
      | incentiveCreateWithoutSalesInput[]
      | incentiveUncheckedCreateWithoutSalesInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutSalesInput | incentiveCreateOrConnectWithoutSalesInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutSalesInput | incentiveUpsertWithWhereUniqueWithoutSalesInput[];
    createMany?: incentiveCreateManySalesInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutSalesInput | incentiveUpdateWithWhereUniqueWithoutSalesInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutSalesInput | incentiveUpdateManyWithWhereWithoutSalesInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<companyCreateWithoutSalesInput, companyUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: companyCreateOrConnectWithoutSalesInput;
    upsert?: companyUpsertWithoutSalesInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutSalesInput, companyUpdateWithoutSalesInput>,
      companyUncheckedUpdateWithoutSalesInput
    >;
  };

  export type employeeUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<employeeCreateWithoutSalesInput, employeeUncheckedCreateWithoutSalesInput>;
    connectOrCreate?: employeeCreateOrConnectWithoutSalesInput;
    upsert?: employeeUpsertWithoutSalesInput;
    connect?: employeeWhereUniqueInput;
    update?: XOR<
      XOR<employeeUpdateToOneWithWhereWithoutSalesInput, employeeUpdateWithoutSalesInput>,
      employeeUncheckedUpdateWithoutSalesInput
    >;
  };

  export type incentiveUncheckedUpdateManyWithoutSalesNestedInput = {
    create?:
      | XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>
      | incentiveCreateWithoutSalesInput[]
      | incentiveUncheckedCreateWithoutSalesInput[];
    connectOrCreate?: incentiveCreateOrConnectWithoutSalesInput | incentiveCreateOrConnectWithoutSalesInput[];
    upsert?: incentiveUpsertWithWhereUniqueWithoutSalesInput | incentiveUpsertWithWhereUniqueWithoutSalesInput[];
    createMany?: incentiveCreateManySalesInputEnvelope;
    set?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    disconnect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    delete?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    connect?: incentiveWhereUniqueInput | incentiveWhereUniqueInput[];
    update?: incentiveUpdateWithWhereUniqueWithoutSalesInput | incentiveUpdateWithWhereUniqueWithoutSalesInput[];
    updateMany?: incentiveUpdateManyWithWhereWithoutSalesInput | incentiveUpdateManyWithWhereWithoutSalesInput[];
    deleteMany?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type employeeCreateWithoutCompanyInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
    incentive?: incentiveCreateNestedManyWithoutEmployeeInput;
    sales?: salesCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutEmployeeInput;
    sales?: salesUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>;
  };

  export type employeeCreateManyCompanyInputEnvelope = {
    data: employeeCreateManyCompanyInput | employeeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type incentiveCreateWithoutCompanyInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee: employeeCreateNestedOneWithoutIncentiveInput;
    sales: salesCreateNestedOneWithoutIncentiveInput;
  };

  export type incentiveUncheckedCreateWithoutCompanyInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    sales_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveCreateOrConnectWithoutCompanyInput = {
    where: incentiveWhereUniqueInput;
    create: XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>;
  };

  export type incentiveCreateManyCompanyInputEnvelope = {
    data: incentiveCreateManyCompanyInput | incentiveCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type salesCreateWithoutCompanyInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveCreateNestedManyWithoutSalesInput;
    employee: employeeCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutCompanyInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutSalesInput;
  };

  export type salesCreateOrConnectWithoutCompanyInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>;
  };

  export type salesCreateManyCompanyInputEnvelope = {
    data: salesCreateManyCompanyInput | salesCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>;
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>;
  };

  export type employeeUpdateManyWithWhereWithoutCompanyInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    job_title?: StringFilter<'employee'> | string;
    hire_date?: DateTimeFilter<'employee'> | Date | string;
    salary?: IntFilter<'employee'> | number;
    commission_pct?: IntNullableFilter<'employee'> | number | null;
    user_id?: UuidFilter<'employee'> | string;
    company_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type incentiveUpsertWithWhereUniqueWithoutCompanyInput = {
    where: incentiveWhereUniqueInput;
    update: XOR<incentiveUpdateWithoutCompanyInput, incentiveUncheckedUpdateWithoutCompanyInput>;
    create: XOR<incentiveCreateWithoutCompanyInput, incentiveUncheckedCreateWithoutCompanyInput>;
  };

  export type incentiveUpdateWithWhereUniqueWithoutCompanyInput = {
    where: incentiveWhereUniqueInput;
    data: XOR<incentiveUpdateWithoutCompanyInput, incentiveUncheckedUpdateWithoutCompanyInput>;
  };

  export type incentiveUpdateManyWithWhereWithoutCompanyInput = {
    where: incentiveScalarWhereInput;
    data: XOR<incentiveUpdateManyMutationInput, incentiveUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type incentiveScalarWhereInput = {
    AND?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
    OR?: incentiveScalarWhereInput[];
    NOT?: incentiveScalarWhereInput | incentiveScalarWhereInput[];
    id?: UuidFilter<'incentive'> | string;
    incentive_date?: DateTimeFilter<'incentive'> | Date | string;
    incentive_amount?: IntFilter<'incentive'> | number;
    incentive_type?: StringFilter<'incentive'> | string;
    employee_id?: UuidFilter<'incentive'> | string;
    sales_id?: UuidFilter<'incentive'> | string;
    company_id?: UuidFilter<'incentive'> | string;
    created_at?: DateTimeFilter<'incentive'> | Date | string;
    updated_at?: DateTimeFilter<'incentive'> | Date | string;
  };

  export type salesUpsertWithWhereUniqueWithoutCompanyInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutCompanyInput, salesUncheckedUpdateWithoutCompanyInput>;
    create: XOR<salesCreateWithoutCompanyInput, salesUncheckedCreateWithoutCompanyInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutCompanyInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutCompanyInput, salesUncheckedUpdateWithoutCompanyInput>;
  };

  export type salesUpdateManyWithWhereWithoutCompanyInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[];
    OR?: salesScalarWhereInput[];
    NOT?: salesScalarWhereInput | salesScalarWhereInput[];
    id?: UuidFilter<'sales'> | string;
    sales_date?: DateTimeFilter<'sales'> | Date | string;
    sales_amount?: IntFilter<'sales'> | number;
    sales_region?: StringFilter<'sales'> | string;
    employee_id?: UuidFilter<'sales'> | string;
    company_id?: UuidFilter<'sales'> | string;
    created_at?: DateTimeFilter<'sales'> | Date | string;
    updated_at?: DateTimeFilter<'sales'> | Date | string;
  };

  export type companyCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    incentive?: incentiveCreateNestedManyWithoutCompanyInput;
    sales?: salesCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutCompanyInput;
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutEmployeeInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type incentiveCreateWithoutEmployeeInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutIncentiveInput;
    sales: salesCreateNestedOneWithoutIncentiveInput;
  };

  export type incentiveUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    sales_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveCreateOrConnectWithoutEmployeeInput = {
    where: incentiveWhereUniqueInput;
    create: XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>;
  };

  export type incentiveCreateManyEmployeeInputEnvelope = {
    data: incentiveCreateManyEmployeeInput | incentiveCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type salesCreateWithoutEmployeeInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveCreateNestedManyWithoutSalesInput;
    company: companyCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutSalesInput;
  };

  export type salesCreateOrConnectWithoutEmployeeInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>;
  };

  export type salesCreateManyEmployeeInputEnvelope = {
    data: salesCreateManyEmployeeInput | salesCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutEmployeeInput = {
    update: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>;
  };

  export type companyUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    incentive?: incentiveUpdateManyWithoutCompanyNestedInput;
    sales?: salesUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    incentive?: incentiveUncheckedUpdateManyWithoutCompanyNestedInput;
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: incentiveWhereUniqueInput;
    update: XOR<incentiveUpdateWithoutEmployeeInput, incentiveUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<incentiveCreateWithoutEmployeeInput, incentiveUncheckedCreateWithoutEmployeeInput>;
  };

  export type incentiveUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: incentiveWhereUniqueInput;
    data: XOR<incentiveUpdateWithoutEmployeeInput, incentiveUncheckedUpdateWithoutEmployeeInput>;
  };

  export type incentiveUpdateManyWithWhereWithoutEmployeeInput = {
    where: incentiveScalarWhereInput;
    data: XOR<incentiveUpdateManyMutationInput, incentiveUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type salesUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: salesWhereUniqueInput;
    update: XOR<salesUpdateWithoutEmployeeInput, salesUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<salesCreateWithoutEmployeeInput, salesUncheckedCreateWithoutEmployeeInput>;
  };

  export type salesUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: salesWhereUniqueInput;
    data: XOR<salesUpdateWithoutEmployeeInput, salesUncheckedUpdateWithoutEmployeeInput>;
  };

  export type salesUpdateManyWithWhereWithoutEmployeeInput = {
    where: salesScalarWhereInput;
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutEmployeeInput>;
  };

  export type companyCreateWithoutIncentiveInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    sales?: salesCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutIncentiveInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    sales?: salesUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutIncentiveInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutIncentiveInput, companyUncheckedCreateWithoutIncentiveInput>;
  };

  export type employeeCreateWithoutIncentiveInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    sales?: salesCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutIncentiveInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    sales?: salesUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutIncentiveInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutIncentiveInput, employeeUncheckedCreateWithoutIncentiveInput>;
  };

  export type salesCreateWithoutIncentiveInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutSalesInput;
    employee: employeeCreateNestedOneWithoutSalesInput;
  };

  export type salesUncheckedCreateWithoutIncentiveInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateOrConnectWithoutIncentiveInput = {
    where: salesWhereUniqueInput;
    create: XOR<salesCreateWithoutIncentiveInput, salesUncheckedCreateWithoutIncentiveInput>;
  };

  export type companyUpsertWithoutIncentiveInput = {
    update: XOR<companyUpdateWithoutIncentiveInput, companyUncheckedUpdateWithoutIncentiveInput>;
    create: XOR<companyCreateWithoutIncentiveInput, companyUncheckedCreateWithoutIncentiveInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutIncentiveInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutIncentiveInput, companyUncheckedUpdateWithoutIncentiveInput>;
  };

  export type companyUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    sales?: salesUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    sales?: salesUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type employeeUpsertWithoutIncentiveInput = {
    update: XOR<employeeUpdateWithoutIncentiveInput, employeeUncheckedUpdateWithoutIncentiveInput>;
    create: XOR<employeeCreateWithoutIncentiveInput, employeeUncheckedCreateWithoutIncentiveInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutIncentiveInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutIncentiveInput, employeeUncheckedUpdateWithoutIncentiveInput>;
  };

  export type employeeUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    sales?: salesUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales?: salesUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type salesUpsertWithoutIncentiveInput = {
    update: XOR<salesUpdateWithoutIncentiveInput, salesUncheckedUpdateWithoutIncentiveInput>;
    create: XOR<salesCreateWithoutIncentiveInput, salesUncheckedCreateWithoutIncentiveInput>;
    where?: salesWhereInput;
  };

  export type salesUpdateToOneWithWhereWithoutIncentiveInput = {
    where?: salesWhereInput;
    data: XOR<salesUpdateWithoutIncentiveInput, salesUncheckedUpdateWithoutIncentiveInput>;
  };

  export type salesUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutSalesNestedInput;
    employee?: employeeUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutIncentiveInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveCreateWithoutSalesInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutIncentiveInput;
    employee: employeeCreateNestedOneWithoutIncentiveInput;
  };

  export type incentiveUncheckedCreateWithoutSalesInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveCreateOrConnectWithoutSalesInput = {
    where: incentiveWhereUniqueInput;
    create: XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>;
  };

  export type incentiveCreateManySalesInputEnvelope = {
    data: incentiveCreateManySalesInput | incentiveCreateManySalesInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutSalesInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    incentive?: incentiveCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutSalesInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    established_date?: Date | string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    incentive?: incentiveUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutSalesInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutSalesInput, companyUncheckedCreateWithoutSalesInput>;
  };

  export type employeeCreateWithoutSalesInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
    incentive?: incentiveCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutSalesInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutSalesInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutSalesInput, employeeUncheckedCreateWithoutSalesInput>;
  };

  export type incentiveUpsertWithWhereUniqueWithoutSalesInput = {
    where: incentiveWhereUniqueInput;
    update: XOR<incentiveUpdateWithoutSalesInput, incentiveUncheckedUpdateWithoutSalesInput>;
    create: XOR<incentiveCreateWithoutSalesInput, incentiveUncheckedCreateWithoutSalesInput>;
  };

  export type incentiveUpdateWithWhereUniqueWithoutSalesInput = {
    where: incentiveWhereUniqueInput;
    data: XOR<incentiveUpdateWithoutSalesInput, incentiveUncheckedUpdateWithoutSalesInput>;
  };

  export type incentiveUpdateManyWithWhereWithoutSalesInput = {
    where: incentiveScalarWhereInput;
    data: XOR<incentiveUpdateManyMutationInput, incentiveUncheckedUpdateManyWithoutSalesInput>;
  };

  export type companyUpsertWithoutSalesInput = {
    update: XOR<companyUpdateWithoutSalesInput, companyUncheckedUpdateWithoutSalesInput>;
    create: XOR<companyCreateWithoutSalesInput, companyUncheckedCreateWithoutSalesInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutSalesInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutSalesInput, companyUncheckedUpdateWithoutSalesInput>;
  };

  export type companyUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    incentive?: incentiveUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    incentive?: incentiveUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type employeeUpsertWithoutSalesInput = {
    update: XOR<employeeUpdateWithoutSalesInput, employeeUncheckedUpdateWithoutSalesInput>;
    create: XOR<employeeCreateWithoutSalesInput, employeeUncheckedCreateWithoutSalesInput>;
    where?: employeeWhereInput;
  };

  export type employeeUpdateToOneWithWhereWithoutSalesInput = {
    where?: employeeWhereInput;
    data: XOR<employeeUpdateWithoutSalesInput, employeeUncheckedUpdateWithoutSalesInput>;
  };

  export type employeeUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    incentive?: incentiveUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
    incentive?: incentiveCreateNestedManyWithoutEmployeeInput;
    sales?: salesCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    incentive?: incentiveUncheckedCreateNestedManyWithoutEmployeeInput;
    sales?: salesUncheckedCreateNestedManyWithoutEmployeeInput;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeCreateManyCompanyInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveCreateManyCompanyInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    sales_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateManyCompanyInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    employee_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
    incentive?: incentiveUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateOneRequiredWithoutIncentiveNestedInput;
    sales?: salesUpdateOneRequiredWithoutIncentiveNestedInput;
  };

  export type incentiveUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUpdateManyWithoutSalesNestedInput;
    employee?: employeeUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveCreateManyEmployeeInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    sales_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type salesCreateManyEmployeeInput = {
    id?: string;
    sales_date: Date | string;
    sales_amount: number;
    sales_region: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutIncentiveNestedInput;
    sales?: salesUpdateOneRequiredWithoutIncentiveNestedInput;
  };

  export type incentiveUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    sales_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type salesUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUpdateManyWithoutSalesNestedInput;
    company?: companyUpdateOneRequiredWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutSalesNestedInput;
  };

  export type salesUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    sales_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    sales_amount?: IntFieldUpdateOperationsInput | number;
    sales_region?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveCreateManySalesInput = {
    id?: string;
    incentive_date: Date | string;
    incentive_amount: number;
    incentive_type: string;
    employee_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type incentiveUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutIncentiveNestedInput;
    employee?: employeeUpdateOneRequiredWithoutIncentiveNestedInput;
  };

  export type incentiveUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type incentiveUncheckedUpdateManyWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    incentive_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive_amount?: IntFieldUpdateOperationsInput | number;
    incentive_type?: StringFieldUpdateOperationsInput | string;
    employee_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    job_title: string;
    hire_date: Date | string;
    salary: number;
    commission_pct?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
    incentive?: incentiveUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    incentive?: incentiveUncheckedUpdateManyWithoutEmployeeNestedInput;
    sales?: salesUncheckedUpdateManyWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    commission_pct?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
   */
  export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SalesCountOutputTypeDefaultArgs instead
   */
  export type SalesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SalesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use achievementDefaultArgs instead
   */
  export type achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    achievementDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bonus_allocationDefaultArgs instead
   */
  export type bonus_allocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bonus_allocationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employee_rankDefaultArgs instead
   */
  export type employee_rankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employee_rankDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use incentiveDefaultArgs instead
   */
  export type incentiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    incentiveDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use incentive_schemeDefaultArgs instead
   */
  export type incentive_schemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    incentive_schemeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use performance_metricDefaultArgs instead
   */
  export type performance_metricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    performance_metricDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use roleDefaultArgs instead
   */
  export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use salesDefaultArgs instead
   */
  export type salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = salesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use sales_targetDefaultArgs instead
   */
  export type sales_targetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    sales_targetDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
