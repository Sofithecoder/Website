const numbers = [5, 3, 13, 48, 7, 0];
let negativeNumsum = 0;
let positiveNumsum = 0;
let amountofZeros = 0;
let negativeCount = 0;
let positiveCount = 0;

for(let i=0; i<numbers.length;i++){
    if(numbers[i] <0) {
        {
            negativeNumsum += numbers[i];
            negativeCount++;
          }
    }
    else if(numbers[i]>0) {
        positiveNumsum += numbers[i]
        positiveCount++
    }
    else {amountofZeros++}
}

const stats = [
    negativeCount > 0 ? negativeNumsum / negativeCount : 0,
    positiveCount > 0 ? positiveNumsum / positiveCount : 0,
    amountofZeros
  ];

  console.log(stats)