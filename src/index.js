module.exports = function reverse (n) {
  n = n + '';
  let res = n.split('').reverse().join('');
  return res.slice(0, 3);
}
