/** @type {import('./types.js').ParquetType[]} */
const ParquetType = [
  'BOOLEAN',
  'INT32',
  'INT64',
  'INT96', // deprecated
  'FLOAT',
  'DOUBLE',
  'BYTE_ARRAY',
  'FIXED_LEN_BYTE_ARRAY',
]

const Encoding = [
  'PLAIN',
  undefined,
  'PLAIN_DICTIONARY',
  'RLE',
  'BIT_PACKED', // deprecated
  'DELTA_BINARY_PACKED',
  'DELTA_LENGTH_BYTE_ARRAY',
  'DELTA_BYTE_ARRAY',
  'RLE_DICTIONARY',
  'BYTE_STREAM_SPLIT',
]

const FieldRepetitionType = [
  'REQUIRED',
  'OPTIONAL',
  'REPEATED',
]

/** @type {import('./types.js').ConvertedType[]} */
const ConvertedType = [
  'UTF8',
  'MAP',
  'MAP_KEY_VALUE',
  'LIST',
  'ENUM',
  'DECIMAL',
  'DATE',
  'TIME_MILLIS',
  'TIME_MICROS',
  'TIMESTAMP_MILLIS',
  'TIMESTAMP_MICROS',
  'UINT_8',
  'UINT_16',
  'UINT_32',
  'UINT_64',
  'INT_8',
  'INT_16',
  'INT_32',
  'INT_64',
  'JSON',
  'BSON',
  'INTERVAL',
]

/** @type {import('./types.js').LogicalTypeType[]} */
const logicalTypeType = [
  'NULL',
  'STRING',
  'MAP',
  'LIST',
  'ENUM',
  'DECIMAL',
  'DATE',
  'TIME',
  'TIMESTAMP',
  'INTERVAL',
  'INTEGER',
  'NULL',
  'JSON',
  'BSON',
  'UUID',
]

const CompressionCodec = [
  'UNCOMPRESSED',
  'SNAPPY',
  'GZIP',
  'LZO',
  'BROTLI',
  'LZ4',
  'ZSTD',
  'LZ4_RAW',
]

/** @type {import('./types.js').PageType[]} */
const PageType = [
  'DATA_PAGE',
  'INDEX_PAGE',
  'DICTIONARY_PAGE',
  'DATA_PAGE_V2',
]

/** @type {import('./types.js').BoundaryOrder[]} */
const BoundaryOrder = [
  'UNORDERED',
  'ASCENDING',
  'DESCENDING',
]

module.exports = {
  ParquetType,
  Encoding,
  FieldRepetitionType,
  ConvertedType,
  logicalTypeType,
  CompressionCodec,
  PageType,
  BoundaryOrder,
};
