module.exports = function reverse (n) {
  let rev = [...n.toString()];
  if (rev[0] === '-') rev.shift();
  return +rev.reverse().join('');
}
