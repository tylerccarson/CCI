module.exports = function zeroMatrix(matrix) {
  //1 pass and collect coordinates
  var coords = {
    rows: [],
    cols: []
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        coords.rows.push(i);
        coords.cols.push(j);
      }
    }
  }
  //2 go through and do rows in bulk
  for (let i = 0; i < coords.rows.length; i++) {
    let row = coords.rows[i];
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
  }

  //3 do columns
  for (let i = 0; i < coords.cols.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][coords.cols[i]] = 0;   
    }
  }

  return matrix;

}