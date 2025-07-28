
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Dicom
 * 
 */
export type Dicom = $Result.DefaultSelection<Prisma.$DicomPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Points
 * const points = await prisma.point.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Points
   * const points = await prisma.point.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dicom`: Exposes CRUD operations for the **Dicom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dicoms
    * const dicoms = await prisma.dicom.findMany()
    * ```
    */
  get dicom(): Prisma.DicomDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Point: 'Point',
    Dicom: 'Dicom'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "point" | "dicom"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Dicom: {
        payload: Prisma.$DicomPayload<ExtArgs>
        fields: Prisma.DicomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DicomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DicomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          findFirst: {
            args: Prisma.DicomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DicomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          findMany: {
            args: Prisma.DicomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>[]
          }
          create: {
            args: Prisma.DicomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          createMany: {
            args: Prisma.DicomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DicomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>[]
          }
          delete: {
            args: Prisma.DicomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          update: {
            args: Prisma.DicomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          deleteMany: {
            args: Prisma.DicomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DicomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DicomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>[]
          }
          upsert: {
            args: Prisma.DicomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DicomPayload>
          }
          aggregate: {
            args: Prisma.DicomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDicom>
          }
          groupBy: {
            args: Prisma.DicomGroupByArgs<ExtArgs>
            result: $Utils.Optional<DicomGroupByOutputType>[]
          }
          count: {
            args: Prisma.DicomCountArgs<ExtArgs>
            result: $Utils.Optional<DicomCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
  }
  export type GlobalOmitConfig = {
    point?: PointOmit
    dicom?: DicomOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DicomCountOutputType
   */

  export type DicomCountOutputType = {
    points: number
  }

  export type DicomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | DicomCountOutputTypeCountPointsArgs
  }

  // Custom InputTypes
  /**
   * DicomCountOutputType without action
   */
  export type DicomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DicomCountOutputType
     */
    select?: DicomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DicomCountOutputType without action
   */
  export type DicomCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    x: number | null
    y: number | null
    z: number | null
  }

  export type PointSumAggregateOutputType = {
    x: number | null
    y: number | null
    z: number | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    z: number | null
    dicomId: string | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    x: number | null
    y: number | null
    z: number | null
    dicomId: string | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    x: number
    y: number
    z: number
    dicomId: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    x?: true
    y?: true
    z?: true
  }

  export type PointSumAggregateInputType = {
    x?: true
    y?: true
    z?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    x?: true
    y?: true
    z?: true
    dicomId?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    x?: true
    y?: true
    z?: true
    dicomId?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    x?: true
    y?: true
    z?: true
    dicomId?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    x: number
    y: number
    z: number
    dicomId: string
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    dicomId?: boolean
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    dicomId?: boolean
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    dicomId?: boolean
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    dicomId?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "x" | "y" | "z" | "dicomId", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dicom?: boolean | DicomDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      dicom: Prisma.$DicomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      x: number
      y: number
      z: number
      dicomId: string
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dicom<T extends DicomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DicomDefaultArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly x: FieldRef<"Point", 'Float'>
    readonly y: FieldRef<"Point", 'Float'>
    readonly z: FieldRef<"Point", 'Float'>
    readonly dicomId: FieldRef<"Point", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Dicom
   */

  export type AggregateDicom = {
    _count: DicomCountAggregateOutputType | null
    _min: DicomMinAggregateOutputType | null
    _max: DicomMaxAggregateOutputType | null
  }

  export type DicomMinAggregateOutputType = {
    id: string | null
    imageId: string | null
    FrameOfReferenceUID: string | null
    annotationUID: string | null
    toolName: string | null
  }

  export type DicomMaxAggregateOutputType = {
    id: string | null
    imageId: string | null
    FrameOfReferenceUID: string | null
    annotationUID: string | null
    toolName: string | null
  }

  export type DicomCountAggregateOutputType = {
    id: number
    imageId: number
    FrameOfReferenceUID: number
    annotationUID: number
    toolName: number
    _all: number
  }


  export type DicomMinAggregateInputType = {
    id?: true
    imageId?: true
    FrameOfReferenceUID?: true
    annotationUID?: true
    toolName?: true
  }

  export type DicomMaxAggregateInputType = {
    id?: true
    imageId?: true
    FrameOfReferenceUID?: true
    annotationUID?: true
    toolName?: true
  }

  export type DicomCountAggregateInputType = {
    id?: true
    imageId?: true
    FrameOfReferenceUID?: true
    annotationUID?: true
    toolName?: true
    _all?: true
  }

  export type DicomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dicom to aggregate.
     */
    where?: DicomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dicoms to fetch.
     */
    orderBy?: DicomOrderByWithRelationInput | DicomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DicomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dicoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dicoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dicoms
    **/
    _count?: true | DicomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DicomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DicomMaxAggregateInputType
  }

  export type GetDicomAggregateType<T extends DicomAggregateArgs> = {
        [P in keyof T & keyof AggregateDicom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDicom[P]>
      : GetScalarType<T[P], AggregateDicom[P]>
  }




  export type DicomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DicomWhereInput
    orderBy?: DicomOrderByWithAggregationInput | DicomOrderByWithAggregationInput[]
    by: DicomScalarFieldEnum[] | DicomScalarFieldEnum
    having?: DicomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DicomCountAggregateInputType | true
    _min?: DicomMinAggregateInputType
    _max?: DicomMaxAggregateInputType
  }

  export type DicomGroupByOutputType = {
    id: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
    _count: DicomCountAggregateOutputType | null
    _min: DicomMinAggregateOutputType | null
    _max: DicomMaxAggregateOutputType | null
  }

  type GetDicomGroupByPayload<T extends DicomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DicomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DicomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DicomGroupByOutputType[P]>
            : GetScalarType<T[P], DicomGroupByOutputType[P]>
        }
      >
    >


  export type DicomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    FrameOfReferenceUID?: boolean
    annotationUID?: boolean
    toolName?: boolean
    points?: boolean | Dicom$pointsArgs<ExtArgs>
    _count?: boolean | DicomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dicom"]>

  export type DicomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    FrameOfReferenceUID?: boolean
    annotationUID?: boolean
    toolName?: boolean
  }, ExtArgs["result"]["dicom"]>

  export type DicomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    FrameOfReferenceUID?: boolean
    annotationUID?: boolean
    toolName?: boolean
  }, ExtArgs["result"]["dicom"]>

  export type DicomSelectScalar = {
    id?: boolean
    imageId?: boolean
    FrameOfReferenceUID?: boolean
    annotationUID?: boolean
    toolName?: boolean
  }

  export type DicomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageId" | "FrameOfReferenceUID" | "annotationUID" | "toolName", ExtArgs["result"]["dicom"]>
  export type DicomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    points?: boolean | Dicom$pointsArgs<ExtArgs>
    _count?: boolean | DicomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DicomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DicomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DicomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dicom"
    objects: {
      points: Prisma.$PointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageId: string
      FrameOfReferenceUID: string
      annotationUID: string
      toolName: string
    }, ExtArgs["result"]["dicom"]>
    composites: {}
  }

  type DicomGetPayload<S extends boolean | null | undefined | DicomDefaultArgs> = $Result.GetResult<Prisma.$DicomPayload, S>

  type DicomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DicomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DicomCountAggregateInputType | true
    }

  export interface DicomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dicom'], meta: { name: 'Dicom' } }
    /**
     * Find zero or one Dicom that matches the filter.
     * @param {DicomFindUniqueArgs} args - Arguments to find a Dicom
     * @example
     * // Get one Dicom
     * const dicom = await prisma.dicom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DicomFindUniqueArgs>(args: SelectSubset<T, DicomFindUniqueArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dicom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DicomFindUniqueOrThrowArgs} args - Arguments to find a Dicom
     * @example
     * // Get one Dicom
     * const dicom = await prisma.dicom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DicomFindUniqueOrThrowArgs>(args: SelectSubset<T, DicomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dicom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomFindFirstArgs} args - Arguments to find a Dicom
     * @example
     * // Get one Dicom
     * const dicom = await prisma.dicom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DicomFindFirstArgs>(args?: SelectSubset<T, DicomFindFirstArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dicom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomFindFirstOrThrowArgs} args - Arguments to find a Dicom
     * @example
     * // Get one Dicom
     * const dicom = await prisma.dicom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DicomFindFirstOrThrowArgs>(args?: SelectSubset<T, DicomFindFirstOrThrowArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dicoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dicoms
     * const dicoms = await prisma.dicom.findMany()
     * 
     * // Get first 10 Dicoms
     * const dicoms = await prisma.dicom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dicomWithIdOnly = await prisma.dicom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DicomFindManyArgs>(args?: SelectSubset<T, DicomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dicom.
     * @param {DicomCreateArgs} args - Arguments to create a Dicom.
     * @example
     * // Create one Dicom
     * const Dicom = await prisma.dicom.create({
     *   data: {
     *     // ... data to create a Dicom
     *   }
     * })
     * 
     */
    create<T extends DicomCreateArgs>(args: SelectSubset<T, DicomCreateArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dicoms.
     * @param {DicomCreateManyArgs} args - Arguments to create many Dicoms.
     * @example
     * // Create many Dicoms
     * const dicom = await prisma.dicom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DicomCreateManyArgs>(args?: SelectSubset<T, DicomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dicoms and returns the data saved in the database.
     * @param {DicomCreateManyAndReturnArgs} args - Arguments to create many Dicoms.
     * @example
     * // Create many Dicoms
     * const dicom = await prisma.dicom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dicoms and only return the `id`
     * const dicomWithIdOnly = await prisma.dicom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DicomCreateManyAndReturnArgs>(args?: SelectSubset<T, DicomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dicom.
     * @param {DicomDeleteArgs} args - Arguments to delete one Dicom.
     * @example
     * // Delete one Dicom
     * const Dicom = await prisma.dicom.delete({
     *   where: {
     *     // ... filter to delete one Dicom
     *   }
     * })
     * 
     */
    delete<T extends DicomDeleteArgs>(args: SelectSubset<T, DicomDeleteArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dicom.
     * @param {DicomUpdateArgs} args - Arguments to update one Dicom.
     * @example
     * // Update one Dicom
     * const dicom = await prisma.dicom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DicomUpdateArgs>(args: SelectSubset<T, DicomUpdateArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dicoms.
     * @param {DicomDeleteManyArgs} args - Arguments to filter Dicoms to delete.
     * @example
     * // Delete a few Dicoms
     * const { count } = await prisma.dicom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DicomDeleteManyArgs>(args?: SelectSubset<T, DicomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dicoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dicoms
     * const dicom = await prisma.dicom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DicomUpdateManyArgs>(args: SelectSubset<T, DicomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dicoms and returns the data updated in the database.
     * @param {DicomUpdateManyAndReturnArgs} args - Arguments to update many Dicoms.
     * @example
     * // Update many Dicoms
     * const dicom = await prisma.dicom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dicoms and only return the `id`
     * const dicomWithIdOnly = await prisma.dicom.updateManyAndReturn({
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
    updateManyAndReturn<T extends DicomUpdateManyAndReturnArgs>(args: SelectSubset<T, DicomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dicom.
     * @param {DicomUpsertArgs} args - Arguments to update or create a Dicom.
     * @example
     * // Update or create a Dicom
     * const dicom = await prisma.dicom.upsert({
     *   create: {
     *     // ... data to create a Dicom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dicom we want to update
     *   }
     * })
     */
    upsert<T extends DicomUpsertArgs>(args: SelectSubset<T, DicomUpsertArgs<ExtArgs>>): Prisma__DicomClient<$Result.GetResult<Prisma.$DicomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dicoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomCountArgs} args - Arguments to filter Dicoms to count.
     * @example
     * // Count the number of Dicoms
     * const count = await prisma.dicom.count({
     *   where: {
     *     // ... the filter for the Dicoms we want to count
     *   }
     * })
    **/
    count<T extends DicomCountArgs>(
      args?: Subset<T, DicomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DicomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dicom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DicomAggregateArgs>(args: Subset<T, DicomAggregateArgs>): Prisma.PrismaPromise<GetDicomAggregateType<T>>

    /**
     * Group by Dicom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DicomGroupByArgs} args - Group by arguments.
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
      T extends DicomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DicomGroupByArgs['orderBy'] }
        : { orderBy?: DicomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DicomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDicomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dicom model
   */
  readonly fields: DicomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dicom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DicomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    points<T extends Dicom$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Dicom$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dicom model
   */
  interface DicomFieldRefs {
    readonly id: FieldRef<"Dicom", 'String'>
    readonly imageId: FieldRef<"Dicom", 'String'>
    readonly FrameOfReferenceUID: FieldRef<"Dicom", 'String'>
    readonly annotationUID: FieldRef<"Dicom", 'String'>
    readonly toolName: FieldRef<"Dicom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dicom findUnique
   */
  export type DicomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter, which Dicom to fetch.
     */
    where: DicomWhereUniqueInput
  }

  /**
   * Dicom findUniqueOrThrow
   */
  export type DicomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter, which Dicom to fetch.
     */
    where: DicomWhereUniqueInput
  }

  /**
   * Dicom findFirst
   */
  export type DicomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter, which Dicom to fetch.
     */
    where?: DicomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dicoms to fetch.
     */
    orderBy?: DicomOrderByWithRelationInput | DicomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dicoms.
     */
    cursor?: DicomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dicoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dicoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dicoms.
     */
    distinct?: DicomScalarFieldEnum | DicomScalarFieldEnum[]
  }

  /**
   * Dicom findFirstOrThrow
   */
  export type DicomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter, which Dicom to fetch.
     */
    where?: DicomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dicoms to fetch.
     */
    orderBy?: DicomOrderByWithRelationInput | DicomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dicoms.
     */
    cursor?: DicomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dicoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dicoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dicoms.
     */
    distinct?: DicomScalarFieldEnum | DicomScalarFieldEnum[]
  }

  /**
   * Dicom findMany
   */
  export type DicomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter, which Dicoms to fetch.
     */
    where?: DicomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dicoms to fetch.
     */
    orderBy?: DicomOrderByWithRelationInput | DicomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dicoms.
     */
    cursor?: DicomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dicoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dicoms.
     */
    skip?: number
    distinct?: DicomScalarFieldEnum | DicomScalarFieldEnum[]
  }

  /**
   * Dicom create
   */
  export type DicomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * The data needed to create a Dicom.
     */
    data: XOR<DicomCreateInput, DicomUncheckedCreateInput>
  }

  /**
   * Dicom createMany
   */
  export type DicomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dicoms.
     */
    data: DicomCreateManyInput | DicomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dicom createManyAndReturn
   */
  export type DicomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * The data used to create many Dicoms.
     */
    data: DicomCreateManyInput | DicomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dicom update
   */
  export type DicomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * The data needed to update a Dicom.
     */
    data: XOR<DicomUpdateInput, DicomUncheckedUpdateInput>
    /**
     * Choose, which Dicom to update.
     */
    where: DicomWhereUniqueInput
  }

  /**
   * Dicom updateMany
   */
  export type DicomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dicoms.
     */
    data: XOR<DicomUpdateManyMutationInput, DicomUncheckedUpdateManyInput>
    /**
     * Filter which Dicoms to update
     */
    where?: DicomWhereInput
    /**
     * Limit how many Dicoms to update.
     */
    limit?: number
  }

  /**
   * Dicom updateManyAndReturn
   */
  export type DicomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * The data used to update Dicoms.
     */
    data: XOR<DicomUpdateManyMutationInput, DicomUncheckedUpdateManyInput>
    /**
     * Filter which Dicoms to update
     */
    where?: DicomWhereInput
    /**
     * Limit how many Dicoms to update.
     */
    limit?: number
  }

  /**
   * Dicom upsert
   */
  export type DicomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * The filter to search for the Dicom to update in case it exists.
     */
    where: DicomWhereUniqueInput
    /**
     * In case the Dicom found by the `where` argument doesn't exist, create a new Dicom with this data.
     */
    create: XOR<DicomCreateInput, DicomUncheckedCreateInput>
    /**
     * In case the Dicom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DicomUpdateInput, DicomUncheckedUpdateInput>
  }

  /**
   * Dicom delete
   */
  export type DicomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
    /**
     * Filter which Dicom to delete.
     */
    where: DicomWhereUniqueInput
  }

  /**
   * Dicom deleteMany
   */
  export type DicomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dicoms to delete
     */
    where?: DicomWhereInput
    /**
     * Limit how many Dicoms to delete.
     */
    limit?: number
  }

  /**
   * Dicom.points
   */
  export type Dicom$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Dicom without action
   */
  export type DicomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dicom
     */
    select?: DicomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dicom
     */
    omit?: DicomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DicomInclude<ExtArgs> | null
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


  export const PointScalarFieldEnum: {
    id: 'id',
    x: 'x',
    y: 'y',
    z: 'z',
    dicomId: 'dicomId'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const DicomScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    FrameOfReferenceUID: 'FrameOfReferenceUID',
    annotationUID: 'annotationUID',
    toolName: 'toolName'
  };

  export type DicomScalarFieldEnum = (typeof DicomScalarFieldEnum)[keyof typeof DicomScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: UuidFilter<"Point"> | string
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    z?: FloatFilter<"Point"> | number
    dicomId?: UuidFilter<"Point"> | string
    dicom?: XOR<DicomScalarRelationFilter, DicomWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    dicomId?: SortOrder
    dicom?: DicomOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    z?: FloatFilter<"Point"> | number
    dicomId?: UuidFilter<"Point"> | string
    dicom?: XOR<DicomScalarRelationFilter, DicomWhereInput>
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    dicomId?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Point"> | string
    x?: FloatWithAggregatesFilter<"Point"> | number
    y?: FloatWithAggregatesFilter<"Point"> | number
    z?: FloatWithAggregatesFilter<"Point"> | number
    dicomId?: UuidWithAggregatesFilter<"Point"> | string
  }

  export type DicomWhereInput = {
    AND?: DicomWhereInput | DicomWhereInput[]
    OR?: DicomWhereInput[]
    NOT?: DicomWhereInput | DicomWhereInput[]
    id?: UuidFilter<"Dicom"> | string
    imageId?: StringFilter<"Dicom"> | string
    FrameOfReferenceUID?: StringFilter<"Dicom"> | string
    annotationUID?: StringFilter<"Dicom"> | string
    toolName?: StringFilter<"Dicom"> | string
    points?: PointListRelationFilter
  }

  export type DicomOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    FrameOfReferenceUID?: SortOrder
    annotationUID?: SortOrder
    toolName?: SortOrder
    points?: PointOrderByRelationAggregateInput
  }

  export type DicomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DicomWhereInput | DicomWhereInput[]
    OR?: DicomWhereInput[]
    NOT?: DicomWhereInput | DicomWhereInput[]
    imageId?: StringFilter<"Dicom"> | string
    FrameOfReferenceUID?: StringFilter<"Dicom"> | string
    annotationUID?: StringFilter<"Dicom"> | string
    toolName?: StringFilter<"Dicom"> | string
    points?: PointListRelationFilter
  }, "id">

  export type DicomOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    FrameOfReferenceUID?: SortOrder
    annotationUID?: SortOrder
    toolName?: SortOrder
    _count?: DicomCountOrderByAggregateInput
    _max?: DicomMaxOrderByAggregateInput
    _min?: DicomMinOrderByAggregateInput
  }

  export type DicomScalarWhereWithAggregatesInput = {
    AND?: DicomScalarWhereWithAggregatesInput | DicomScalarWhereWithAggregatesInput[]
    OR?: DicomScalarWhereWithAggregatesInput[]
    NOT?: DicomScalarWhereWithAggregatesInput | DicomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Dicom"> | string
    imageId?: StringWithAggregatesFilter<"Dicom"> | string
    FrameOfReferenceUID?: StringWithAggregatesFilter<"Dicom"> | string
    annotationUID?: StringWithAggregatesFilter<"Dicom"> | string
    toolName?: StringWithAggregatesFilter<"Dicom"> | string
  }

  export type PointCreateInput = {
    id?: string
    x: number
    y: number
    z: number
    dicom: DicomCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    x: number
    y: number
    z: number
    dicomId: string
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    dicom?: DicomUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    dicomId?: StringFieldUpdateOperationsInput | string
  }

  export type PointCreateManyInput = {
    id?: string
    x: number
    y: number
    z: number
    dicomId: string
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    dicomId?: StringFieldUpdateOperationsInput | string
  }

  export type DicomCreateInput = {
    id?: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
    points?: PointCreateNestedManyWithoutDicomInput
  }

  export type DicomUncheckedCreateInput = {
    id?: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
    points?: PointUncheckedCreateNestedManyWithoutDicomInput
  }

  export type DicomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
    points?: PointUpdateManyWithoutDicomNestedInput
  }

  export type DicomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
    points?: PointUncheckedUpdateManyWithoutDicomNestedInput
  }

  export type DicomCreateManyInput = {
    id?: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
  }

  export type DicomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
  }

  export type DicomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type DicomScalarRelationFilter = {
    is?: DicomWhereInput
    isNot?: DicomWhereInput
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    dicomId?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    dicomId?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    dicomId?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DicomCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    FrameOfReferenceUID?: SortOrder
    annotationUID?: SortOrder
    toolName?: SortOrder
  }

  export type DicomMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    FrameOfReferenceUID?: SortOrder
    annotationUID?: SortOrder
    toolName?: SortOrder
  }

  export type DicomMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    FrameOfReferenceUID?: SortOrder
    annotationUID?: SortOrder
    toolName?: SortOrder
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

  export type DicomCreateNestedOneWithoutPointsInput = {
    create?: XOR<DicomCreateWithoutPointsInput, DicomUncheckedCreateWithoutPointsInput>
    connectOrCreate?: DicomCreateOrConnectWithoutPointsInput
    connect?: DicomWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DicomUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<DicomCreateWithoutPointsInput, DicomUncheckedCreateWithoutPointsInput>
    connectOrCreate?: DicomCreateOrConnectWithoutPointsInput
    upsert?: DicomUpsertWithoutPointsInput
    connect?: DicomWhereUniqueInput
    update?: XOR<XOR<DicomUpdateToOneWithWhereWithoutPointsInput, DicomUpdateWithoutPointsInput>, DicomUncheckedUpdateWithoutPointsInput>
  }

  export type PointCreateNestedManyWithoutDicomInput = {
    create?: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput> | PointCreateWithoutDicomInput[] | PointUncheckedCreateWithoutDicomInput[]
    connectOrCreate?: PointCreateOrConnectWithoutDicomInput | PointCreateOrConnectWithoutDicomInput[]
    createMany?: PointCreateManyDicomInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutDicomInput = {
    create?: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput> | PointCreateWithoutDicomInput[] | PointUncheckedCreateWithoutDicomInput[]
    connectOrCreate?: PointCreateOrConnectWithoutDicomInput | PointCreateOrConnectWithoutDicomInput[]
    createMany?: PointCreateManyDicomInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type PointUpdateManyWithoutDicomNestedInput = {
    create?: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput> | PointCreateWithoutDicomInput[] | PointUncheckedCreateWithoutDicomInput[]
    connectOrCreate?: PointCreateOrConnectWithoutDicomInput | PointCreateOrConnectWithoutDicomInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutDicomInput | PointUpsertWithWhereUniqueWithoutDicomInput[]
    createMany?: PointCreateManyDicomInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutDicomInput | PointUpdateWithWhereUniqueWithoutDicomInput[]
    updateMany?: PointUpdateManyWithWhereWithoutDicomInput | PointUpdateManyWithWhereWithoutDicomInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutDicomNestedInput = {
    create?: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput> | PointCreateWithoutDicomInput[] | PointUncheckedCreateWithoutDicomInput[]
    connectOrCreate?: PointCreateOrConnectWithoutDicomInput | PointCreateOrConnectWithoutDicomInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutDicomInput | PointUpsertWithWhereUniqueWithoutDicomInput[]
    createMany?: PointCreateManyDicomInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutDicomInput | PointUpdateWithWhereUniqueWithoutDicomInput[]
    updateMany?: PointUpdateManyWithWhereWithoutDicomInput | PointUpdateManyWithWhereWithoutDicomInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type DicomCreateWithoutPointsInput = {
    id?: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
  }

  export type DicomUncheckedCreateWithoutPointsInput = {
    id?: string
    imageId: string
    FrameOfReferenceUID: string
    annotationUID: string
    toolName: string
  }

  export type DicomCreateOrConnectWithoutPointsInput = {
    where: DicomWhereUniqueInput
    create: XOR<DicomCreateWithoutPointsInput, DicomUncheckedCreateWithoutPointsInput>
  }

  export type DicomUpsertWithoutPointsInput = {
    update: XOR<DicomUpdateWithoutPointsInput, DicomUncheckedUpdateWithoutPointsInput>
    create: XOR<DicomCreateWithoutPointsInput, DicomUncheckedCreateWithoutPointsInput>
    where?: DicomWhereInput
  }

  export type DicomUpdateToOneWithWhereWithoutPointsInput = {
    where?: DicomWhereInput
    data: XOR<DicomUpdateWithoutPointsInput, DicomUncheckedUpdateWithoutPointsInput>
  }

  export type DicomUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
  }

  export type DicomUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    FrameOfReferenceUID?: StringFieldUpdateOperationsInput | string
    annotationUID?: StringFieldUpdateOperationsInput | string
    toolName?: StringFieldUpdateOperationsInput | string
  }

  export type PointCreateWithoutDicomInput = {
    id?: string
    x: number
    y: number
    z: number
  }

  export type PointUncheckedCreateWithoutDicomInput = {
    id?: string
    x: number
    y: number
    z: number
  }

  export type PointCreateOrConnectWithoutDicomInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput>
  }

  export type PointCreateManyDicomInputEnvelope = {
    data: PointCreateManyDicomInput | PointCreateManyDicomInput[]
    skipDuplicates?: boolean
  }

  export type PointUpsertWithWhereUniqueWithoutDicomInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutDicomInput, PointUncheckedUpdateWithoutDicomInput>
    create: XOR<PointCreateWithoutDicomInput, PointUncheckedCreateWithoutDicomInput>
  }

  export type PointUpdateWithWhereUniqueWithoutDicomInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutDicomInput, PointUncheckedUpdateWithoutDicomInput>
  }

  export type PointUpdateManyWithWhereWithoutDicomInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutDicomInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: UuidFilter<"Point"> | string
    x?: FloatFilter<"Point"> | number
    y?: FloatFilter<"Point"> | number
    z?: FloatFilter<"Point"> | number
    dicomId?: UuidFilter<"Point"> | string
  }

  export type PointCreateManyDicomInput = {
    id?: string
    x: number
    y: number
    z: number
  }

  export type PointUpdateWithoutDicomInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateWithoutDicomInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
  }

  export type PointUncheckedUpdateManyWithoutDicomInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
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