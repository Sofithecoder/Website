//მოცემული გვაქვს რიცხვების მასივი const numbers = [5, 3, 13, 48, 7, 0];

//გამოთვალეთ ცალკე ნეგატიური და ცალკე პოზიტიური რიცხვების საშუალო რიცხვები.

//პასუხად დააბრუნეთ ცვლადი const stats (array).

//სადაც:
//0 ინდექსზე ჩაწერეთ ნეგატიური რიცხვების საშუალო რიცხვი.
//1 ინდექსზე ჩაწერეთ პოზიტიური რიცხვების საშუალო რიცხვი.
//2 ინდექსზე ჩაწერეთ 0-ების რაოდენობა.

//თუ მასივში მაგალითად ნეგატიური რიცხვები არ არის მოცემული, ნეგატიური რიცხვების საშუალო რიცხვად ჩაწერეთ 0.

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
        positiveNumsum++
    }
    else {amountofZeros++}
}

const stats = [
    negativeCount > 0 ? negativeSum / negativeCount : 0,
    positiveCount > 0 ? positiveSum / positiveCount : 0,
    zeroCount
  ];

  console.log(stats)

