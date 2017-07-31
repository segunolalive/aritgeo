function aritGeo (arr) {
  if (!Array.isArray(arr))
    throw new TypeError('arguement should be an array');
  if (arr.length === 0)
    return 0;
  if (arr.length < 3)
    return -1;
  if (isArithmetric(arr)){
    return 'arithmetric';
  }
  if (isGeometric(arr))
    return 'geometric';
  return -1;
}

function isArithmetric (arr) {
  let start = arr[0];
  let difference = arr[1] - arr[0];
  let result = true;
  let i = 2;
  while (i < arr.length && result === true) {
    if (arr[i] - arr[i-1] !== difference)
      result = false;
    i++;
  }
  return result;
}


function isGeometric (arr) {
  let start = arr[0]
  let commonRatio = Math.floor(arr[1]/arr[0]);
  let result = true;
  let i = 2;
  while (i < arr.length && result === true) {
    if (Math.floor(arr[i]/arr[i-1]) !== commonRatio)
      result = false;
    i++;
  }
  return result;
}


module.exports = {
  aritGeo,
  isArithmetric,
  isGeometric,
}
