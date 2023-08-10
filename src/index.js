// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !matrix
        ? []
        : matrix.reduce(
              (a, b, i) => (
                  i % 2 === 1 && b.reverse(), b.forEach((el) => a.push(el)), a
              ),

              []
          );
};
