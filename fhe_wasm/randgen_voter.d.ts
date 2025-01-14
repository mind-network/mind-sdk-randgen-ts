/* tslint:disable */
/* eslint-disable */
/**
* @param {string} public_key
*/
export function set_public_key(public_key: string): void;
/**
* @returns {string}
*/
export function get_random_u8(): string;
/**
* @param {number} num
* @returns {string}
*/
export function encrypt_u8(num: number): string;
/**
*/
export function init_panic_hook(): void;
/**
* @param {TfheServerKey} server_key
*/
export function set_server_key(server_key: TfheServerKey): void;
/**
*/
export enum ShortintEncryptionKeyChoice {
  Big = 0,
  Small = 1,
}
/**
*/
export enum ShortintParametersName {
  PARAM_MESSAGE_1_CARRY_0_KS_PBS = 0,
  PARAM_MESSAGE_1_CARRY_1_KS_PBS = 1,
  PARAM_MESSAGE_2_CARRY_0_KS_PBS = 2,
  PARAM_MESSAGE_1_CARRY_2_KS_PBS = 3,
  PARAM_MESSAGE_2_CARRY_1_KS_PBS = 4,
  PARAM_MESSAGE_3_CARRY_0_KS_PBS = 5,
  PARAM_MESSAGE_1_CARRY_3_KS_PBS = 6,
  PARAM_MESSAGE_2_CARRY_2_KS_PBS = 7,
  PARAM_MESSAGE_3_CARRY_1_KS_PBS = 8,
  PARAM_MESSAGE_4_CARRY_0_KS_PBS = 9,
  PARAM_MESSAGE_1_CARRY_4_KS_PBS = 10,
  PARAM_MESSAGE_2_CARRY_3_KS_PBS = 11,
  PARAM_MESSAGE_3_CARRY_2_KS_PBS = 12,
  PARAM_MESSAGE_4_CARRY_1_KS_PBS = 13,
  PARAM_MESSAGE_5_CARRY_0_KS_PBS = 14,
  PARAM_MESSAGE_1_CARRY_5_KS_PBS = 15,
  PARAM_MESSAGE_2_CARRY_4_KS_PBS = 16,
  PARAM_MESSAGE_3_CARRY_3_KS_PBS = 17,
  PARAM_MESSAGE_4_CARRY_2_KS_PBS = 18,
  PARAM_MESSAGE_5_CARRY_1_KS_PBS = 19,
  PARAM_MESSAGE_6_CARRY_0_KS_PBS = 20,
  PARAM_MESSAGE_1_CARRY_6_KS_PBS = 21,
  PARAM_MESSAGE_2_CARRY_5_KS_PBS = 22,
  PARAM_MESSAGE_3_CARRY_4_KS_PBS = 23,
  PARAM_MESSAGE_4_CARRY_3_KS_PBS = 24,
  PARAM_MESSAGE_5_CARRY_2_KS_PBS = 25,
  PARAM_MESSAGE_6_CARRY_1_KS_PBS = 26,
  PARAM_MESSAGE_7_CARRY_0_KS_PBS = 27,
  PARAM_MESSAGE_1_CARRY_7_KS_PBS = 28,
  PARAM_MESSAGE_2_CARRY_6_KS_PBS = 29,
  PARAM_MESSAGE_3_CARRY_5_KS_PBS = 30,
  PARAM_MESSAGE_4_CARRY_4_KS_PBS = 31,
  PARAM_MESSAGE_5_CARRY_3_KS_PBS = 32,
  PARAM_MESSAGE_6_CARRY_2_KS_PBS = 33,
  PARAM_MESSAGE_7_CARRY_1_KS_PBS = 34,
  PARAM_MESSAGE_8_CARRY_0_KS_PBS = 35,
  PARAM_MESSAGE_1_CARRY_1_PBS_KS = 36,
  PARAM_MESSAGE_2_CARRY_2_PBS_KS = 37,
  PARAM_MESSAGE_3_CARRY_3_PBS_KS = 38,
  PARAM_MESSAGE_4_CARRY_4_PBS_KS = 39,
  PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS = 40,
  PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS = 41,
  PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS = 42,
  PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS = 43,
  PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS = 44,
  PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS = 45,
  PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS = 46,
  PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS = 47,
  PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS = 48,
  PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS = 49,
  PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS = 50,
  PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS = 51,
  PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS = 52,
  PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS = 53,
  PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS = 54,
  PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS = 55,
  PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS = 56,
  PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS = 57,
  PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS = 58,
  PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS = 59,
  PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS = 60,
  PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS = 61,
  PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS = 62,
  PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS = 63,
  PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS = 64,
  PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS = 65,
  PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS = 66,
  PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS = 67,
  PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS = 68,
  PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS = 69,
  PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS = 70,
  PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64 = 71,
  PARAM_MESSAGE_1_CARRY_0 = 72,
  PARAM_MESSAGE_1_CARRY_1 = 73,
  PARAM_MESSAGE_2_CARRY_0 = 74,
  PARAM_MESSAGE_1_CARRY_2 = 75,
  PARAM_MESSAGE_2_CARRY_1 = 76,
  PARAM_MESSAGE_3_CARRY_0 = 77,
  PARAM_MESSAGE_1_CARRY_3 = 78,
  PARAM_MESSAGE_2_CARRY_2 = 79,
  PARAM_MESSAGE_3_CARRY_1 = 80,
  PARAM_MESSAGE_4_CARRY_0 = 81,
  PARAM_MESSAGE_1_CARRY_4 = 82,
  PARAM_MESSAGE_2_CARRY_3 = 83,
  PARAM_MESSAGE_3_CARRY_2 = 84,
  PARAM_MESSAGE_4_CARRY_1 = 85,
  PARAM_MESSAGE_5_CARRY_0 = 86,
  PARAM_MESSAGE_1_CARRY_5 = 87,
  PARAM_MESSAGE_2_CARRY_4 = 88,
  PARAM_MESSAGE_3_CARRY_3 = 89,
  PARAM_MESSAGE_4_CARRY_2 = 90,
  PARAM_MESSAGE_5_CARRY_1 = 91,
  PARAM_MESSAGE_6_CARRY_0 = 92,
  PARAM_MESSAGE_1_CARRY_6 = 93,
  PARAM_MESSAGE_2_CARRY_5 = 94,
  PARAM_MESSAGE_3_CARRY_4 = 95,
  PARAM_MESSAGE_4_CARRY_3 = 96,
  PARAM_MESSAGE_5_CARRY_2 = 97,
  PARAM_MESSAGE_6_CARRY_1 = 98,
  PARAM_MESSAGE_7_CARRY_0 = 99,
  PARAM_MESSAGE_1_CARRY_7 = 100,
  PARAM_MESSAGE_2_CARRY_6 = 101,
  PARAM_MESSAGE_3_CARRY_5 = 102,
  PARAM_MESSAGE_4_CARRY_4 = 103,
  PARAM_MESSAGE_5_CARRY_3 = 104,
  PARAM_MESSAGE_6_CARRY_2 = 105,
  PARAM_MESSAGE_7_CARRY_1 = 106,
  PARAM_MESSAGE_8_CARRY_0 = 107,
  PARAM_SMALL_MESSAGE_1_CARRY_1 = 108,
  PARAM_SMALL_MESSAGE_2_CARRY_2 = 109,
  PARAM_SMALL_MESSAGE_3_CARRY_3 = 110,
  PARAM_SMALL_MESSAGE_4_CARRY_4 = 111,
}
/**
*/
export enum FheTypes {
  Bool = 0,
  Uint2 = 1,
  Uint4 = 2,
  Uint6 = 3,
  Uint8 = 4,
  Uint10 = 5,
  Uint12 = 6,
  Uint14 = 7,
  Uint16 = 8,
  Uint32 = 9,
  Uint64 = 10,
  Uint128 = 11,
  Uint160 = 12,
  Uint256 = 13,
  Uint512 = 14,
  Uint1024 = 15,
  Uint2048 = 16,
  Int2 = 17,
  Int4 = 18,
  Int6 = 19,
  Int8 = 20,
  Int10 = 21,
  Int12 = 22,
  Int14 = 23,
  Int16 = 24,
  Int32 = 25,
  Int64 = 26,
  Int128 = 27,
  Int160 = 28,
  Int256 = 29,
}
/**
*/
export enum ShortintCompactPublicKeyEncryptionParametersName {
  SHORTINT_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64 = 0,
}
/**
*/
export enum ShortintPBSOrder {
  KeyswitchBootstrap = 0,
  BootstrapKeyswitch = 1,
}
/**
*/
export class CompactCiphertextList {
  free(): void;
/**
* @param {TfheCompactPublicKey} public_key
* @returns {CompactCiphertextListBuilder}
*/
  static builder(public_key: TfheCompactPublicKey): CompactCiphertextListBuilder;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* @param {number} index
* @returns {FheTypes | undefined}
*/
  get_kind_of(index: number): FheTypes | undefined;
/**
* @returns {CompactCiphertextListExpander}
*/
  expand(): CompactCiphertextListExpander;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompactCiphertextList}
*/
  static deserialize(buffer: Uint8Array): CompactCiphertextList;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompactCiphertextList}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompactCiphertextList;
}
/**
*/
export class CompactCiphertextListBuilder {
  free(): void;
/**
* @param {number} value
*/
  push_u2(value: number): void;
/**
* @param {number} value
*/
  push_u4(value: number): void;
/**
* @param {number} value
*/
  push_u6(value: number): void;
/**
* @param {number} value
*/
  push_u8(value: number): void;
/**
* @param {number} value
*/
  push_u10(value: number): void;
/**
* @param {number} value
*/
  push_u12(value: number): void;
/**
* @param {number} value
*/
  push_u14(value: number): void;
/**
* @param {number} value
*/
  push_u16(value: number): void;
/**
* @param {number} value
*/
  push_u32(value: number): void;
/**
* @param {bigint} value
*/
  push_u64(value: bigint): void;
/**
* @param {number} value
*/
  push_i2(value: number): void;
/**
* @param {number} value
*/
  push_i4(value: number): void;
/**
* @param {number} value
*/
  push_i6(value: number): void;
/**
* @param {number} value
*/
  push_i8(value: number): void;
/**
* @param {number} value
*/
  push_i10(value: number): void;
/**
* @param {number} value
*/
  push_i12(value: number): void;
/**
* @param {number} value
*/
  push_i14(value: number): void;
/**
* @param {number} value
*/
  push_i16(value: number): void;
/**
* @param {number} value
*/
  push_i32(value: number): void;
/**
* @param {bigint} value
*/
  push_i64(value: bigint): void;
/**
* @param {any} value
*/
  push_u128(value: any): void;
/**
* @param {any} value
*/
  push_u160(value: any): void;
/**
* @param {any} value
*/
  push_u256(value: any): void;
/**
* @param {any} value
*/
  push_u512(value: any): void;
/**
* @param {any} value
*/
  push_u1024(value: any): void;
/**
* @param {any} value
*/
  push_u2048(value: any): void;
/**
* @param {any} value
*/
  push_i128(value: any): void;
/**
* @param {any} value
*/
  push_i160(value: any): void;
/**
* @param {any} value
*/
  push_i256(value: any): void;
/**
* @param {boolean} value
*/
  push_boolean(value: boolean): void;
/**
* @returns {CompactCiphertextList}
*/
  build(): CompactCiphertextList;
/**
* @returns {CompactCiphertextList}
*/
  build_packed(): CompactCiphertextList;
}
/**
*/
export class CompactCiphertextListExpander {
  free(): void;
/**
* @param {number} index
* @returns {FheUint2}
*/
  get_uint2(index: number): FheUint2;
/**
* @param {number} index
* @returns {FheUint4}
*/
  get_uint4(index: number): FheUint4;
/**
* @param {number} index
* @returns {FheUint6}
*/
  get_uint6(index: number): FheUint6;
/**
* @param {number} index
* @returns {FheUint8}
*/
  get_uint8(index: number): FheUint8;
/**
* @param {number} index
* @returns {FheUint10}
*/
  get_uint10(index: number): FheUint10;
/**
* @param {number} index
* @returns {FheUint12}
*/
  get_uint12(index: number): FheUint12;
/**
* @param {number} index
* @returns {FheUint14}
*/
  get_uint14(index: number): FheUint14;
/**
* @param {number} index
* @returns {FheUint16}
*/
  get_uint16(index: number): FheUint16;
/**
* @param {number} index
* @returns {FheUint32}
*/
  get_uint32(index: number): FheUint32;
/**
* @param {number} index
* @returns {FheUint64}
*/
  get_uint64(index: number): FheUint64;
/**
* @param {number} index
* @returns {FheUint128}
*/
  get_uint128(index: number): FheUint128;
/**
* @param {number} index
* @returns {FheUint160}
*/
  get_uint160(index: number): FheUint160;
/**
* @param {number} index
* @returns {FheUint256}
*/
  get_uint256(index: number): FheUint256;
/**
* @param {number} index
* @returns {FheUint512}
*/
  get_uint512(index: number): FheUint512;
/**
* @param {number} index
* @returns {FheUint1024}
*/
  get_uint1024(index: number): FheUint1024;
/**
* @param {number} index
* @returns {FheUint2048}
*/
  get_uint2048(index: number): FheUint2048;
/**
* @param {number} index
* @returns {FheInt2}
*/
  get_int2(index: number): FheInt2;
/**
* @param {number} index
* @returns {FheInt4}
*/
  get_int4(index: number): FheInt4;
/**
* @param {number} index
* @returns {FheInt6}
*/
  get_int6(index: number): FheInt6;
/**
* @param {number} index
* @returns {FheInt8}
*/
  get_int8(index: number): FheInt8;
/**
* @param {number} index
* @returns {FheInt10}
*/
  get_int10(index: number): FheInt10;
/**
* @param {number} index
* @returns {FheInt12}
*/
  get_int12(index: number): FheInt12;
/**
* @param {number} index
* @returns {FheInt14}
*/
  get_int14(index: number): FheInt14;
/**
* @param {number} index
* @returns {FheInt16}
*/
  get_int16(index: number): FheInt16;
/**
* @param {number} index
* @returns {FheInt32}
*/
  get_int32(index: number): FheInt32;
/**
* @param {number} index
* @returns {FheInt64}
*/
  get_int64(index: number): FheInt64;
/**
* @param {number} index
* @returns {FheInt128}
*/
  get_int128(index: number): FheInt128;
/**
* @param {number} index
* @returns {FheInt160}
*/
  get_int160(index: number): FheInt160;
/**
* @param {number} index
* @returns {FheInt256}
*/
  get_int256(index: number): FheInt256;
/**
* @param {number} index
* @returns {FheBool}
*/
  get_bool(index: number): FheBool;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {boolean}
*/
  is_empty(): boolean;
/**
* @param {number} index
* @returns {FheTypes | undefined}
*/
  get_kind_of(index: number): FheTypes | undefined;
}
/**
*/
export class CompressedFheBool {
  free(): void;
/**
* @param {boolean} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheBool}
*/
  static encrypt_with_client_key(value: boolean, client_key: TfheClientKey): CompressedFheBool;
/**
* @returns {FheBool}
*/
  decompress(): FheBool;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheBool}
*/
  static deserialize(buffer: Uint8Array): CompressedFheBool;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheBool}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheBool;
}
/**
*/
export class CompressedFheInt10 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt10}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt10;
/**
* @returns {FheInt10}
*/
  decompress(): FheInt10;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt10}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt10;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt10}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt10;
}
/**
*/
export class CompressedFheInt12 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt12}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt12;
/**
* @returns {FheInt12}
*/
  decompress(): FheInt12;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt12}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt12;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt12}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt12;
}
/**
*/
export class CompressedFheInt128 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt128}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheInt128;
/**
* @returns {FheInt128}
*/
  decompress(): FheInt128;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt128}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt128;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt128}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt128;
}
/**
*/
export class CompressedFheInt14 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt14}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt14;
/**
* @returns {FheInt14}
*/
  decompress(): FheInt14;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt14}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt14;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt14}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt14;
}
/**
*/
export class CompressedFheInt16 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt16}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt16;
/**
* @returns {FheInt16}
*/
  decompress(): FheInt16;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt16}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt16;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt16}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt16;
}
/**
*/
export class CompressedFheInt160 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt160}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheInt160;
/**
* @returns {FheInt160}
*/
  decompress(): FheInt160;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt160}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt160;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt160}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt160;
}
/**
*/
export class CompressedFheInt2 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt2}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt2;
/**
* @returns {FheInt2}
*/
  decompress(): FheInt2;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt2}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt2;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt2}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt2;
}
/**
*/
export class CompressedFheInt256 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt256}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheInt256;
/**
* @returns {FheInt256}
*/
  decompress(): FheInt256;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt256}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt256;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt256}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt256;
}
/**
*/
export class CompressedFheInt32 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt32}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt32;
/**
* @returns {FheInt32}
*/
  decompress(): FheInt32;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt32}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt32;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt32}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt32;
}
/**
*/
export class CompressedFheInt4 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt4}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt4;
/**
* @returns {FheInt4}
*/
  decompress(): FheInt4;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt4}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt4;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt4}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt4;
}
/**
*/
export class CompressedFheInt6 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt6}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt6;
/**
* @returns {FheInt6}
*/
  decompress(): FheInt6;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt6}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt6;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt6}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt6;
}
/**
*/
export class CompressedFheInt64 {
  free(): void;
/**
* @param {bigint} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt64}
*/
  static encrypt_with_client_key(value: bigint, client_key: TfheClientKey): CompressedFheInt64;
/**
* @returns {FheInt64}
*/
  decompress(): FheInt64;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt64}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt64;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt64}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt64;
}
/**
*/
export class CompressedFheInt8 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheInt8}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheInt8;
/**
* @returns {FheInt8}
*/
  decompress(): FheInt8;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheInt8}
*/
  static deserialize(buffer: Uint8Array): CompressedFheInt8;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheInt8}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheInt8;
}
/**
*/
export class CompressedFheUint10 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint10}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint10;
/**
* @returns {FheUint10}
*/
  decompress(): FheUint10;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint10}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint10;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint10}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint10;
}
/**
*/
export class CompressedFheUint1024 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint1024}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint1024;
/**
* @returns {FheUint1024}
*/
  decompress(): FheUint1024;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint1024}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint1024;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint1024}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint1024;
}
/**
*/
export class CompressedFheUint12 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint12}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint12;
/**
* @returns {FheUint12}
*/
  decompress(): FheUint12;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint12}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint12;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint12}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint12;
}
/**
*/
export class CompressedFheUint128 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint128}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint128;
/**
* @returns {FheUint128}
*/
  decompress(): FheUint128;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint128}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint128;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint128}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint128;
}
/**
*/
export class CompressedFheUint14 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint14}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint14;
/**
* @returns {FheUint14}
*/
  decompress(): FheUint14;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint14}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint14;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint14}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint14;
}
/**
*/
export class CompressedFheUint16 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint16}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint16;
/**
* @returns {FheUint16}
*/
  decompress(): FheUint16;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint16}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint16;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint16}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint16;
}
/**
*/
export class CompressedFheUint160 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint160}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint160;
/**
* @returns {FheUint160}
*/
  decompress(): FheUint160;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint160}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint160;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint160}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint160;
}
/**
*/
export class CompressedFheUint2 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint2}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint2;
/**
* @returns {FheUint2}
*/
  decompress(): FheUint2;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint2}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint2;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint2}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint2;
}
/**
*/
export class CompressedFheUint2048 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint2048}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint2048;
/**
* @returns {FheUint2048}
*/
  decompress(): FheUint2048;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint2048}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint2048;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint2048}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint2048;
}
/**
*/
export class CompressedFheUint256 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint256}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint256;
/**
* @returns {FheUint256}
*/
  decompress(): FheUint256;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint256}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint256;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint256}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint256;
}
/**
*/
export class CompressedFheUint32 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint32}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint32;
/**
* @returns {FheUint32}
*/
  decompress(): FheUint32;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint32}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint32;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint32}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint32;
}
/**
*/
export class CompressedFheUint4 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint4}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint4;
/**
* @returns {FheUint4}
*/
  decompress(): FheUint4;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint4}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint4;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint4}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint4;
}
/**
*/
export class CompressedFheUint512 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint512}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): CompressedFheUint512;
/**
* @returns {FheUint512}
*/
  decompress(): FheUint512;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint512}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint512;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint512}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint512;
}
/**
*/
export class CompressedFheUint6 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint6}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint6;
/**
* @returns {FheUint6}
*/
  decompress(): FheUint6;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint6}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint6;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint6}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint6;
}
/**
*/
export class CompressedFheUint64 {
  free(): void;
/**
* @param {bigint} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint64}
*/
  static encrypt_with_client_key(value: bigint, client_key: TfheClientKey): CompressedFheUint64;
/**
* @returns {FheUint64}
*/
  decompress(): FheUint64;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint64}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint64;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint64}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint64;
}
/**
*/
export class CompressedFheUint8 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {CompressedFheUint8}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): CompressedFheUint8;
/**
* @returns {FheUint8}
*/
  decompress(): FheUint8;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {CompressedFheUint8}
*/
  static deserialize(buffer: Uint8Array): CompressedFheUint8;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {CompressedFheUint8}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): CompressedFheUint8;
}
/**
*/
export class FheBool {
  free(): void;
/**
* @param {boolean} value
* @param {TfheClientKey} client_key
* @returns {FheBool}
*/
  static encrypt_with_client_key(value: boolean, client_key: TfheClientKey): FheBool;
/**
* @param {boolean} value
* @param {TfhePublicKey} public_key
* @returns {FheBool}
*/
  static encrypt_with_public_key(value: boolean, public_key: TfhePublicKey): FheBool;
/**
* @param {boolean} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheBool}
*/
  static encrypt_with_compressed_public_key(value: boolean, compressed_public_key: TfheCompressedPublicKey): FheBool;
/**
* @param {TfheClientKey} client_key
* @returns {boolean}
*/
  decrypt(client_key: TfheClientKey): boolean;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheBool}
*/
  static deserialize(buffer: Uint8Array): FheBool;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheBool}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheBool;
}
/**
*/
export class FheInt10 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt10}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt10;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt10}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt10;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt10}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt10;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt10}
*/
  static deserialize(buffer: Uint8Array): FheInt10;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt10}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt10;
}
/**
*/
export class FheInt12 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt12}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt12;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt12}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt12;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt12}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt12;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt12}
*/
  static deserialize(buffer: Uint8Array): FheInt12;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt12}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt12;
}
/**
*/
export class FheInt128 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheInt128}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheInt128;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheInt128}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheInt128;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt128}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheInt128;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt128}
*/
  static deserialize(buffer: Uint8Array): FheInt128;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt128}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt128;
}
/**
*/
export class FheInt14 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt14}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt14;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt14}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt14;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt14}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt14;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt14}
*/
  static deserialize(buffer: Uint8Array): FheInt14;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt14}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt14;
}
/**
*/
export class FheInt16 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt16}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt16;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt16}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt16;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt16}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt16;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt16}
*/
  static deserialize(buffer: Uint8Array): FheInt16;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt16}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt16;
}
/**
*/
export class FheInt160 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheInt160}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheInt160;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheInt160}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheInt160;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt160}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheInt160;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt160}
*/
  static deserialize(buffer: Uint8Array): FheInt160;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt160}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt160;
}
/**
*/
export class FheInt2 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt2}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt2;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt2}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt2;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt2}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt2;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt2}
*/
  static deserialize(buffer: Uint8Array): FheInt2;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt2}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt2;
}
/**
*/
export class FheInt256 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheInt256}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheInt256;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheInt256}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheInt256;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt256}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheInt256;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt256}
*/
  static deserialize(buffer: Uint8Array): FheInt256;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt256}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt256;
}
/**
*/
export class FheInt32 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt32}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt32;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt32}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt32;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt32}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt32;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt32}
*/
  static deserialize(buffer: Uint8Array): FheInt32;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt32}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt32;
}
/**
*/
export class FheInt4 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt4}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt4;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt4}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt4;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt4}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt4;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt4}
*/
  static deserialize(buffer: Uint8Array): FheInt4;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt4}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt4;
}
/**
*/
export class FheInt6 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt6}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt6;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt6}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt6;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt6}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt6;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt6}
*/
  static deserialize(buffer: Uint8Array): FheInt6;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt6}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt6;
}
/**
*/
export class FheInt64 {
  free(): void;
/**
* @param {bigint} value
* @param {TfheClientKey} client_key
* @returns {FheInt64}
*/
  static encrypt_with_client_key(value: bigint, client_key: TfheClientKey): FheInt64;
/**
* @param {bigint} value
* @param {TfhePublicKey} public_key
* @returns {FheInt64}
*/
  static encrypt_with_public_key(value: bigint, public_key: TfhePublicKey): FheInt64;
/**
* @param {bigint} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt64}
*/
  static encrypt_with_compressed_public_key(value: bigint, compressed_public_key: TfheCompressedPublicKey): FheInt64;
/**
* @param {TfheClientKey} client_key
* @returns {bigint}
*/
  decrypt(client_key: TfheClientKey): bigint;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt64}
*/
  static deserialize(buffer: Uint8Array): FheInt64;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt64}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt64;
}
/**
*/
export class FheInt8 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheInt8}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheInt8;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheInt8}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheInt8;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheInt8}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheInt8;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheInt8}
*/
  static deserialize(buffer: Uint8Array): FheInt8;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheInt8}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheInt8;
}
/**
*/
export class FheUint10 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint10}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint10;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint10}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint10;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint10}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint10;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint10}
*/
  static deserialize(buffer: Uint8Array): FheUint10;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint10}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint10;
}
/**
*/
export class FheUint1024 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint1024}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint1024;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint1024}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint1024;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint1024}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint1024;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint1024}
*/
  static deserialize(buffer: Uint8Array): FheUint1024;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint1024}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint1024;
}
/**
*/
export class FheUint12 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint12}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint12;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint12}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint12;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint12}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint12;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint12}
*/
  static deserialize(buffer: Uint8Array): FheUint12;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint12}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint12;
}
/**
*/
export class FheUint128 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint128}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint128;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint128}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint128;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint128}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint128;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint128}
*/
  static deserialize(buffer: Uint8Array): FheUint128;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint128}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint128;
}
/**
*/
export class FheUint14 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint14}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint14;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint14}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint14;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint14}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint14;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint14}
*/
  static deserialize(buffer: Uint8Array): FheUint14;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint14}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint14;
}
/**
*/
export class FheUint16 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint16}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint16;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint16}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint16;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint16}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint16;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint16}
*/
  static deserialize(buffer: Uint8Array): FheUint16;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint16}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint16;
}
/**
*/
export class FheUint160 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint160}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint160;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint160}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint160;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint160}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint160;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint160}
*/
  static deserialize(buffer: Uint8Array): FheUint160;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint160}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint160;
}
/**
*/
export class FheUint2 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint2}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint2;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint2}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint2;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint2}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint2;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint2}
*/
  static deserialize(buffer: Uint8Array): FheUint2;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint2}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint2;
}
/**
*/
export class FheUint2048 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint2048}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint2048;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint2048}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint2048;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint2048}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint2048;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint2048}
*/
  static deserialize(buffer: Uint8Array): FheUint2048;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint2048}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint2048;
}
/**
*/
export class FheUint256 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint256}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint256;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint256}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint256;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint256}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint256;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint256}
*/
  static deserialize(buffer: Uint8Array): FheUint256;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint256}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint256;
}
/**
*/
export class FheUint32 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint32}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint32;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint32}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint32;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint32}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint32;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint32}
*/
  static deserialize(buffer: Uint8Array): FheUint32;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint32}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint32;
}
/**
*/
export class FheUint4 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint4}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint4;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint4}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint4;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint4}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint4;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint4}
*/
  static deserialize(buffer: Uint8Array): FheUint4;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint4}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint4;
}
/**
*/
export class FheUint512 {
  free(): void;
/**
* @param {any} value
* @param {TfheClientKey} client_key
* @returns {FheUint512}
*/
  static encrypt_with_client_key(value: any, client_key: TfheClientKey): FheUint512;
/**
* @param {any} value
* @param {TfhePublicKey} public_key
* @returns {FheUint512}
*/
  static encrypt_with_public_key(value: any, public_key: TfhePublicKey): FheUint512;
/**
* @param {any} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint512}
*/
  static encrypt_with_compressed_public_key(value: any, compressed_public_key: TfheCompressedPublicKey): FheUint512;
/**
* @param {TfheClientKey} client_key
* @returns {any}
*/
  decrypt(client_key: TfheClientKey): any;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint512}
*/
  static deserialize(buffer: Uint8Array): FheUint512;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint512}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint512;
}
/**
*/
export class FheUint6 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint6}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint6;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint6}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint6;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint6}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint6;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint6}
*/
  static deserialize(buffer: Uint8Array): FheUint6;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint6}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint6;
}
/**
*/
export class FheUint64 {
  free(): void;
/**
* @param {bigint} value
* @param {TfheClientKey} client_key
* @returns {FheUint64}
*/
  static encrypt_with_client_key(value: bigint, client_key: TfheClientKey): FheUint64;
/**
* @param {bigint} value
* @param {TfhePublicKey} public_key
* @returns {FheUint64}
*/
  static encrypt_with_public_key(value: bigint, public_key: TfhePublicKey): FheUint64;
/**
* @param {bigint} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint64}
*/
  static encrypt_with_compressed_public_key(value: bigint, compressed_public_key: TfheCompressedPublicKey): FheUint64;
/**
* @param {TfheClientKey} client_key
* @returns {bigint}
*/
  decrypt(client_key: TfheClientKey): bigint;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint64}
*/
  static deserialize(buffer: Uint8Array): FheUint64;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint64}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint64;
}
/**
*/
export class FheUint8 {
  free(): void;
/**
* @param {number} value
* @param {TfheClientKey} client_key
* @returns {FheUint8}
*/
  static encrypt_with_client_key(value: number, client_key: TfheClientKey): FheUint8;
/**
* @param {number} value
* @param {TfhePublicKey} public_key
* @returns {FheUint8}
*/
  static encrypt_with_public_key(value: number, public_key: TfhePublicKey): FheUint8;
/**
* @param {number} value
* @param {TfheCompressedPublicKey} compressed_public_key
* @returns {FheUint8}
*/
  static encrypt_with_compressed_public_key(value: number, compressed_public_key: TfheCompressedPublicKey): FheUint8;
/**
* @param {TfheClientKey} client_key
* @returns {number}
*/
  decrypt(client_key: TfheClientKey): number;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {FheUint8}
*/
  static deserialize(buffer: Uint8Array): FheUint8;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {FheUint8}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FheUint8;
}
/**
*/
export class Shortint {
  free(): void;
/**
* @param {number} message_bits
* @param {number} carry_bits
* @returns {ShortintParameters}
*/
  static get_parameters(message_bits: number, carry_bits: number): ShortintParameters;
/**
* @param {number} message_bits
* @param {number} carry_bits
* @returns {ShortintParameters}
*/
  static get_parameters_small(message_bits: number, carry_bits: number): ShortintParameters;
/**
* @param {number} std_dev
* @returns {ShortintNoiseDistribution}
*/
  static new_gaussian_from_std_dev(std_dev: number): ShortintNoiseDistribution;
/**
* @param {number} bound_log2
* @returns {ShortintNoiseDistribution}
*/
  static try_new_t_uniform(bound_log2: number): ShortintNoiseDistribution;
/**
* @param {number} lwe_dimension
* @param {number} glwe_dimension
* @param {number} polynomial_size
* @param {ShortintNoiseDistribution} lwe_noise_distribution
* @param {ShortintNoiseDistribution} glwe_noise_distribution
* @param {number} pbs_base_log
* @param {number} pbs_level
* @param {number} ks_base_log
* @param {number} ks_level
* @param {number} message_modulus
* @param {number} carry_modulus
* @param {number} max_noise_level
* @param {number} log2_p_fail
* @param {number} modulus_power_of_2_exponent
* @param {ShortintEncryptionKeyChoice} encryption_key_choice
* @returns {ShortintParameters}
*/
  static new_parameters(lwe_dimension: number, glwe_dimension: number, polynomial_size: number, lwe_noise_distribution: ShortintNoiseDistribution, glwe_noise_distribution: ShortintNoiseDistribution, pbs_base_log: number, pbs_level: number, ks_base_log: number, ks_level: number, message_modulus: number, carry_modulus: number, max_noise_level: number, log2_p_fail: number, modulus_power_of_2_exponent: number, encryption_key_choice: ShortintEncryptionKeyChoice): ShortintParameters;
/**
* @param {bigint} seed_high_bytes
* @param {bigint} seed_low_bytes
* @param {ShortintParameters} parameters
* @returns {ShortintClientKey}
*/
  static new_client_key_from_seed_and_parameters(seed_high_bytes: bigint, seed_low_bytes: bigint, parameters: ShortintParameters): ShortintClientKey;
/**
* @param {ShortintParameters} parameters
* @returns {ShortintClientKey}
*/
  static new_client_key(parameters: ShortintParameters): ShortintClientKey;
/**
* @param {ShortintClientKey} client_key
* @returns {ShortintPublicKey}
*/
  static new_public_key(client_key: ShortintClientKey): ShortintPublicKey;
/**
* @param {ShortintClientKey} client_key
* @returns {ShortintCompressedPublicKey}
*/
  static new_compressed_public_key(client_key: ShortintClientKey): ShortintCompressedPublicKey;
/**
* @param {ShortintClientKey} client_key
* @returns {ShortintCompressedServerKey}
*/
  static new_compressed_server_key(client_key: ShortintClientKey): ShortintCompressedServerKey;
/**
* @param {ShortintClientKey} client_key
* @param {bigint} message
* @returns {ShortintCiphertext}
*/
  static encrypt(client_key: ShortintClientKey, message: bigint): ShortintCiphertext;
/**
* @param {ShortintClientKey} client_key
* @param {bigint} message
* @returns {ShortintCompressedCiphertext}
*/
  static encrypt_compressed(client_key: ShortintClientKey, message: bigint): ShortintCompressedCiphertext;
/**
* @param {ShortintCompressedCiphertext} compressed_ciphertext
* @returns {ShortintCiphertext}
*/
  static decompress_ciphertext(compressed_ciphertext: ShortintCompressedCiphertext): ShortintCiphertext;
/**
* @param {ShortintPublicKey} public_key
* @param {bigint} message
* @returns {ShortintCiphertext}
*/
  static encrypt_with_public_key(public_key: ShortintPublicKey, message: bigint): ShortintCiphertext;
/**
* @param {ShortintCompressedPublicKey} public_key
* @param {bigint} message
* @returns {ShortintCiphertext}
*/
  static encrypt_with_compressed_public_key(public_key: ShortintCompressedPublicKey, message: bigint): ShortintCiphertext;
/**
* @param {ShortintClientKey} client_key
* @param {ShortintCiphertext} ct
* @returns {bigint}
*/
  static decrypt(client_key: ShortintClientKey, ct: ShortintCiphertext): bigint;
/**
* @param {ShortintCiphertext} ciphertext
* @returns {Uint8Array}
*/
  static serialize_ciphertext(ciphertext: ShortintCiphertext): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintCiphertext}
*/
  static deserialize_ciphertext(buffer: Uint8Array): ShortintCiphertext;
/**
* @param {ShortintCompressedCiphertext} ciphertext
* @returns {Uint8Array}
*/
  static serialize_compressed_ciphertext(ciphertext: ShortintCompressedCiphertext): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintCompressedCiphertext}
*/
  static deserialize_compressed_ciphertext(buffer: Uint8Array): ShortintCompressedCiphertext;
/**
* @param {ShortintClientKey} client_key
* @returns {Uint8Array}
*/
  static serialize_client_key(client_key: ShortintClientKey): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintClientKey}
*/
  static deserialize_client_key(buffer: Uint8Array): ShortintClientKey;
/**
* @param {ShortintPublicKey} public_key
* @returns {Uint8Array}
*/
  static serialize_public_key(public_key: ShortintPublicKey): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintPublicKey}
*/
  static deserialize_public_key(buffer: Uint8Array): ShortintPublicKey;
/**
* @param {ShortintCompressedPublicKey} public_key
* @returns {Uint8Array}
*/
  static serialize_compressed_public_key(public_key: ShortintCompressedPublicKey): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintCompressedPublicKey}
*/
  static deserialize_compressed_public_key(buffer: Uint8Array): ShortintCompressedPublicKey;
/**
* @param {ShortintCompressedServerKey} server_key
* @returns {Uint8Array}
*/
  static serialize_compressed_server_key(server_key: ShortintCompressedServerKey): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {ShortintCompressedServerKey}
*/
  static deserialize_compressed_server_key(buffer: Uint8Array): ShortintCompressedServerKey;
}
/**
*/
export class ShortintCiphertext {
  free(): void;
}
/**
*/
export class ShortintClientKey {
  free(): void;
}
/**
*/
export class ShortintCompactPublicKeyEncryptionParameters {
  free(): void;
/**
* @param {ShortintCompactPublicKeyEncryptionParametersName} name
*/
  constructor(name: ShortintCompactPublicKeyEncryptionParametersName);
/**
* @param {number} encryption_lwe_dimension
* @param {ShortintNoiseDistribution} encryption_noise_distribution
* @param {number} message_modulus
* @param {number} carry_modulus
* @param {number} modulus_power_of_2_exponent
* @param {number} ks_base_log
* @param {number} ks_level
* @param {ShortintEncryptionKeyChoice} encryption_key_choice
* @returns {ShortintCompactPublicKeyEncryptionParameters}
*/
  static new_parameters(encryption_lwe_dimension: number, encryption_noise_distribution: ShortintNoiseDistribution, message_modulus: number, carry_modulus: number, modulus_power_of_2_exponent: number, ks_base_log: number, ks_level: number, encryption_key_choice: ShortintEncryptionKeyChoice): ShortintCompactPublicKeyEncryptionParameters;
}
/**
*/
export class ShortintCompressedCiphertext {
  free(): void;
}
/**
*/
export class ShortintCompressedPublicKey {
  free(): void;
}
/**
*/
export class ShortintCompressedServerKey {
  free(): void;
}
/**
*/
export class ShortintNoiseDistribution {
  free(): void;
}
/**
*/
export class ShortintParameters {
  free(): void;
/**
* @returns {number}
*/
  lwe_dimension(): number;
/**
* @param {number} new_value
*/
  set_lwe_dimension(new_value: number): void;
/**
* @returns {number}
*/
  glwe_dimension(): number;
/**
* @param {number} new_value
*/
  set_glwe_dimension(new_value: number): void;
/**
* @returns {number}
*/
  polynomial_size(): number;
/**
* @param {number} new_value
*/
  set_polynomial_size(new_value: number): void;
/**
* @returns {ShortintNoiseDistribution}
*/
  lwe_noise_distribution(): ShortintNoiseDistribution;
/**
* @param {ShortintNoiseDistribution} new_value
*/
  set_lwe_noise_distribution(new_value: ShortintNoiseDistribution): void;
/**
* @returns {ShortintNoiseDistribution}
*/
  glwe_noise_distribution(): ShortintNoiseDistribution;
/**
* @param {ShortintNoiseDistribution} new_value
*/
  set_glwe_noise_distribution(new_value: ShortintNoiseDistribution): void;
/**
* @returns {number}
*/
  pbs_base_log(): number;
/**
* @param {number} new_value
*/
  set_pbs_base_log(new_value: number): void;
/**
* @returns {number}
*/
  pbs_level(): number;
/**
* @param {number} new_value
*/
  set_pbs_level(new_value: number): void;
/**
* @returns {number}
*/
  ks_base_log(): number;
/**
* @param {number} new_value
*/
  set_ks_base_log(new_value: number): void;
/**
* @returns {number}
*/
  ks_level(): number;
/**
* @param {number} new_value
*/
  set_ks_level(new_value: number): void;
/**
* @returns {number}
*/
  message_modulus(): number;
/**
* @param {number} new_value
*/
  set_message_modulus(new_value: number): void;
/**
* @returns {number}
*/
  carry_modulus(): number;
/**
* @param {number} new_value
*/
  set_carry_modulus(new_value: number): void;
/**
* @returns {ShortintEncryptionKeyChoice}
*/
  encryption_key_choice(): ShortintEncryptionKeyChoice;
/**
* @param {ShortintEncryptionKeyChoice} new_value
*/
  set_encryption_key_choice(new_value: ShortintEncryptionKeyChoice): void;
/**
* @param {ShortintParametersName} name
*/
  constructor(name: ShortintParametersName);
}
/**
*/
export class ShortintPublicKey {
  free(): void;
}
/**
*/
export class TfheClientKey {
  free(): void;
/**
* @param {TfheConfig} config
* @returns {TfheClientKey}
*/
  static generate(config: TfheConfig): TfheClientKey;
/**
* @param {TfheConfig} config
* @param {any} seed
* @returns {TfheClientKey}
*/
  static generate_with_seed(config: TfheConfig, seed: any): TfheClientKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfheClientKey}
*/
  static deserialize(buffer: Uint8Array): TfheClientKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfheClientKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfheClientKey;
}
/**
*/
export class TfheCompactPublicKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfheCompactPublicKey}
*/
  static new(client_key: TfheClientKey): TfheCompactPublicKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfheCompactPublicKey}
*/
  static deserialize(buffer: Uint8Array): TfheCompactPublicKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfheCompactPublicKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfheCompactPublicKey;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @param {ShortintCompactPublicKeyEncryptionParameters} conformance_params
* @returns {TfheCompactPublicKey}
*/
  static safe_deserialize_conformant(buffer: Uint8Array, serialized_size_limit: bigint, conformance_params: ShortintCompactPublicKeyEncryptionParameters): TfheCompactPublicKey;
}
/**
*/
export class TfheCompressedCompactPublicKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfheCompressedCompactPublicKey}
*/
  static new(client_key: TfheClientKey): TfheCompressedCompactPublicKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfheCompressedCompactPublicKey}
*/
  static deserialize(buffer: Uint8Array): TfheCompressedCompactPublicKey;
/**
* @returns {TfheCompactPublicKey}
*/
  decompress(): TfheCompactPublicKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfheCompressedCompactPublicKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfheCompressedCompactPublicKey;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @param {ShortintCompactPublicKeyEncryptionParameters} conformance_params
* @returns {TfheCompressedCompactPublicKey}
*/
  static safe_deserialize_conformant(buffer: Uint8Array, serialized_size_limit: bigint, conformance_params: ShortintCompactPublicKeyEncryptionParameters): TfheCompressedCompactPublicKey;
}
/**
*/
export class TfheCompressedPublicKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfheCompressedPublicKey}
*/
  static new(client_key: TfheClientKey): TfheCompressedPublicKey;
/**
* @returns {TfhePublicKey}
*/
  decompress(): TfhePublicKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfheCompressedPublicKey}
*/
  static deserialize(buffer: Uint8Array): TfheCompressedPublicKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfheCompressedPublicKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfheCompressedPublicKey;
}
/**
*/
export class TfheCompressedServerKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfheCompressedServerKey}
*/
  static new(client_key: TfheClientKey): TfheCompressedServerKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfheCompressedServerKey}
*/
  static deserialize(buffer: Uint8Array): TfheCompressedServerKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfheCompressedServerKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfheCompressedServerKey;
}
/**
*/
export class TfheConfig {
  free(): void;
}
/**
*/
export class TfheConfigBuilder {
  free(): void;
/**
* @returns {TfheConfigBuilder}
*/
  static default(): TfheConfigBuilder;
/**
* @returns {TfheConfigBuilder}
*/
  static default_with_small_encryption(): TfheConfigBuilder;
/**
* @returns {TfheConfigBuilder}
*/
  static default_with_big_encryption(): TfheConfigBuilder;
/**
* @param {ShortintParameters} block_parameters
* @returns {TfheConfigBuilder}
*/
  use_custom_parameters(block_parameters: ShortintParameters): TfheConfigBuilder;
/**
* @param {ShortintCompactPublicKeyEncryptionParameters} compact_public_key_parameters
* @returns {TfheConfigBuilder}
*/
  use_dedicated_compact_public_key_parameters(compact_public_key_parameters: ShortintCompactPublicKeyEncryptionParameters): TfheConfigBuilder;
/**
* @returns {TfheConfig}
*/
  build(): TfheConfig;
}
/**
*/
export class TfhePublicKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfhePublicKey}
*/
  static new(client_key: TfheClientKey): TfhePublicKey;
/**
* @returns {Uint8Array}
*/
  serialize(): Uint8Array;
/**
* @param {Uint8Array} buffer
* @returns {TfhePublicKey}
*/
  static deserialize(buffer: Uint8Array): TfhePublicKey;
/**
* @param {bigint} serialized_size_limit
* @returns {Uint8Array}
*/
  safe_serialize(serialized_size_limit: bigint): Uint8Array;
/**
* @param {Uint8Array} buffer
* @param {bigint} serialized_size_limit
* @returns {TfhePublicKey}
*/
  static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): TfhePublicKey;
}
/**
*/
export class TfheServerKey {
  free(): void;
/**
* @param {TfheClientKey} client_key
* @returns {TfheServerKey}
*/
  static new(client_key: TfheClientKey): TfheServerKey;
}
/**
*/
export class tfhe {
  free(): void;
}
