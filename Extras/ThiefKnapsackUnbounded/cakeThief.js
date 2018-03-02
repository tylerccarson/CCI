function cakeThief(cakes, maxWeight) {

  var maxValuesAtCapacities = [];

  for (var i = 0; i <= maxWeight; i++) {
    
    var currentMaxValue = 0;

    for (var j = 0; j < cakes.length; j++) {
      if (cakes[j].weight <= i) {

        var maxValueUsingCake = cakes[j].value + maxValuesAtCapacities[i - cakes[j].weight];
        currentMaxValue = Math.max(currentMaxValue, maxValueUsingCake);
      }      
    }

    maxValuesAtCapacities[i] = currentMaxValue;
  }

  return maxValuesAtCapacities[maxWeight];

}

module.exports = cakeThief;