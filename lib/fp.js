'use strict';

module.exports = exports = {};

// MAP
exports.map = (arr, callback) => {
  if (!arr) throw new Error('array not provided');
  if (!callback) throw new Error('callback not provided');
  return Array.prototype.map.call(arr, callback);
};

//FILTER
exports.filter = (arr, callback) => {
  if (!arr) throw new Error('array not provided');
  if (!callback) throw new Error('callback not provided');
  return Array.prototype.filter.call(arr, callback);
};

//REDUCE
exports.reduce = (arr, callback, init) => {
  if (!arr) throw new Error('array not provided');
  if (!callback) throw new Error('callback not provided');
  return Array.prototype.reduce.call(arr, callback, init);
};

//CONCAT
exports.concat = (arr1, arr2) => {
  if (!arr1) throw new Error ('no array provided');
  return Array.prototype.concat.apply(arr1, arr2);
};

//SPLICE
exports.splice = (arr, start, deleteCount, item) => {
  if (!arr) throw new Error('array not provided');
  if (!start) throw new Error('start not provided');
  return Array.prototype.concat.call(arr, start, deleteCount, item);
};
