const { parquetMetadata, parquetMetadataAsync, parquetSchema } = require('./metadata.js');
const { parquetRead } = require('./read.js');
const { parquetQuery } = require('./query.js');
const { snappyUncompress } = require('./snappy.js');
const { asyncBufferFromFile, asyncBufferFromUrl, byteLengthFromUrl, toJson } = require('./utils.js');
const { cachedAsyncBuffer } = require('./asyncBuffer.js');

/**
 * @param {import('./hyparquet.js').ParquetReadOptions} options
 * @returns {Promise<Array<Record<string, any>>>}
 */
function parquetReadObjects(options) {
  return new Promise((onComplete, reject) => {
    parquetRead({
      rowFormat: 'object',
      ...options,
      onComplete,
    }).catch(reject);
  });
}

module.exports = {
  parquetMetadata,
  parquetMetadataAsync,
  parquetSchema,
  parquetRead,
  parquetQuery,
  snappyUncompress,
  asyncBufferFromFile,
  asyncBufferFromUrl,
  byteLengthFromUrl,
  toJson,
  cachedAsyncBuffer,
  parquetReadObjects,
};
