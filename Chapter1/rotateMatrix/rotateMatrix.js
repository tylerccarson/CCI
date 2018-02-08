//rotate an NxN matrix 90 degrees, in place. Each pixel is 4 bytes, so keep space complexity in mind

module.exports = function rotateMatrix(matrix) {

  var n = matrix[0].length - 1;

  for (var i = 0; i <= n / 2; i++) {
    for (var j = i; j <= n - 1 - i; j++) {

      // var right = matrix[j][n - i];
      // var bottom = matrix[n - i][n - j];
      // var left = matrix[n - j][i];
      // var top = matrix[i][j];
      
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;

    }
  }
  console.log(matrix);
  return matrix;
  
}


// 1  2  3 [0, 0] goes to [0, 2] ; [0, 1] goes to [1, 2] ; [0, 2] goes to [2, 2]
// 1  2  3 [1, 0] goes to [0, 1] ; [1, 1] goes to [1, 1] ; [1, 2] goes to [2, 1]   
// 1  2  3 [2, 0] goes to [0, 0] ; [2, 1] goes to [1, 0] ; [2, 2] goes to [2, 0]

//1 new row(x) is the old col(y)
//2 new col(y) is N minus old row(x)
//3 each swap happens in a set of 4

