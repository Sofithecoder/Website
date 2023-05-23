/*პირველი დავალება*/
//let userIsLoggedIn = true;
//let videoIsCommentable = true;
//const userCanComment = userIsLoggedIn && videoIsCommentable;
//console.log(userCanComment);
/*მეორე დავალება*/
//let userIsLoggedIn=true;
//let userIsBlocked=false;
//const userCanPost = userIsLoggedIn && !userIsBlocked;
//console.log(userCanPost);

// მესამე დავალება
//let balance = 44;
//let userCartTotal = 32;

//const paymentComplete = balance >= userCartTotal;
//console.log(paymentComplete);

//let balance = 66;
//let userCartTotal = 68;

//const paymentComplete = (balance - userCartTotal) >=0;
//console.log(paymentComplete);

//let userIsAdmin = false;
//let userIsModerator = true;
//let userIsCommentAuthor = false;

//const userCanDelete = userIsAdmin || userIsCommentAuthor || userIsModerator;
//console.log(userCanDelete);

/*let presidentKey = true;
let primeMinisterKey = true;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;
console.log(bombWillLaunch);*/ 

/*let userLoggedIn = true;
let newMessages = true; 

if (userLoggedIn) {console.log('Salami Shemogevle')};
if (userLoggedIn && newMessages) {console.log('axali mesijebi gaqven')}; */




/*let userBalance = 40;
let cartTotal = 99;

const userCanBuy =  userBalance >= cartTotal ? 'purchase successful': 'purchase rejected';
console.log (userCanBuy);*/


/*let testScore = 44;

if (testScore >= 95) {
  console.log('Welcome to Novatori');
} else if (testScore >= 70 && testScore < 95) {
  console.log('Welcome to Cambridge');
} else if (testScore >= 50 && testScore < 70) {
  console.log('Welcome to Gepei Bitch');
}
else {
    console.log('you failed');
} */


/*let fuel = 100;
if (fuel >=10 && fuel <20) {
    console.log('igoetamde chaxval');
}
else if (fuel >= 20 && fuel <30) {
    console.log('goramde chaxval');
}
else if (fuel >= 30 && fuel <50) {
    console.log('xashuramde chaxval dzmao');
}
else if (fuel >= 50 && fuel <200) {
    console.log('batumamde chaxval dsmi');
}

// meore davaleba
if (fuel >= 100) {
    console.log('tbilisshic chaxval ukan');
} */

/*let adminSale = 50;
let frequentClientSale = 60;
let studentSale = 20;

let userBalance = 80;
let cartTotal = 100;

let userIsAdmin = false;
let userIsFrequentClient = false;
let userIsStudent = true;

let discount = 0;

if (userIsAdmin) {
  discount = adminSale;
} else if (userIsFrequentClient) {
  discount = frequentClientSale;
} else if (userIsStudent) {
  discount = studentSale;
}

let totalAfterDiscount = cartTotal - discount;

if (userBalance >= totalAfterDiscount) {
  console.log("Payment completed successfully");
} else {
  console.log("You don't have enough money");
} */

// ინფორმაციის ტიპების დავალებები

//1
/*
let userFirstname = 'Sofia'
const userjoined = 'salami '+ userFirstname;
console.log(userjoined);
*/



//2

/*let userbalance = 44;
let carttotal = 46;

if (userbalance >= carttotal) {
  console.log('payment completed successfully');
}
else if (userbalance < carttotal) {
  console.log(`you are lacking ${carttotal-userbalance} USD to complete the payment`);
} */




//3
/*const maxScore = 50;
const barrier = 20;
let studentScore = 12;

if(studentScore >= barrier) {
  console.log(`congratulations you have passed the ${barrier} score barrier. This is your result ${studentScore}/${maxScore}`);
}
else if(studentScore < barrier) {
  console.log(`unfortunately you haven't passed the ${barrier} score barrier. This is your result ${studentScore}/${maxScore}`);
} */




//4

/*let shippingIsPossible = true;
const message = shippingIsPossible? 'shipping available' : 'shipping not available';
console.log(message); */

/*let shippingIsPossible = false;
const message = `Shipping is ${shippingIsPossible ? 'available' : 'not available'}`;
console.log(message); */

/*let loveIsPossible = false;
const message = `love is ${loveIsPossible ? 'amazing' : 'painful'}`
console.log(message); */

//5

/*let userLoggedIn = false;
let userFirstName = 'Nino';
let userIsFemale = false;

if (userLoggedIn && userIsFemale) {
  console.log(`Hello Mrs ${userFirstName}, welcome to the website`);
}
else if (userLoggedIn && !userIsFemale) {
  console.log(`Hello Mr ${userFirstName}, welcome to the website`);
}
else if (!userLoggedIn && userIsFemale) {
  console.log(`bye Mrs ${userFirstName}`);
}
else if (!userLoggedIn && !userIsFemale) {
  console.log(`bye Mr ${userFirstName}`);
} */


// იტერაციების დავალებები


// პირველი დავალება

/*for(let odd=1;odd<2000;odd+=2) {
  console.log(`me var ${odd} ricxvi`);
} */




//მეორე დავალება

/*for (let odd = -1999; odd <= 0; odd += 2) {
  console.log(`me var ${odd} kenti ricxvi`);
} */

// მესამე დავალება

/*for (let km = 0; km <= 100; km++) {
  if (km === 10 || km === 25 || km === 75 || km === 90) {
    console.log(`Congratulations, you've passed the ${km} km checkpoint`);
  }
} */

/*for(let km=0; km<=100; km++) {
  if(km===10) {console.log('you have walked 10 kms')}
  else if (km===25) {
    console.log('you have walked 20 kms');
  }
  else if (km===75) {
    console.log ('you have walked 75 kms');
  }
  else if (km===100) {console.log('you have walked 100kms')}
} */


// მეოთხე დავალება

/*let total = 0;

for (let num = 1; num <= 2500; num += 2) {
  total += num;
}

console.log(`The total sum of odd numbers from 0 to 2500 is: ${total}`); */

// out of scope

/*let jami = 5;

for (let obj = 3; obj <10;obj++) {
  jami+=obj;
}
console.log(`jami aris ${jami}`); */



// მეხუთე დავალება

/* let oddSum = 0;
let evenSum = 0;

// Sum of all odd numbers between 500 and 800
for (let num = 501; num <= 799; num += 2) {
  oddSum += num;
}

// Sum of all even numbers between 1000 and 2000
for (let num = 1000; num <= 2000; num += 2) {
  evenSum += num;
}

Total = oddSum + evenSum;
console.log(Total); */ 




// მეექვსე დავალება

let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}

console.log(factorial);



































