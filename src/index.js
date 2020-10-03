
exports.min = function min (array) {
  let result = 0;      
  let temp = [];

  if (!array || !array.length) {
    return result;
}
  array.forEach(element => {
    if (result < element){
      return result;
    // } else {
    //   result = element;
    }
  });


  return result;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
