// როგორ დავლოგოთ ყველა იტერაცია ლუპში?

/*let testResults = [34,33,55,58,24];
for(let i =0; i <testResults.length;i++) {
    console.log(testResults[i]);
} */

//მეორე ვარიანტი IF ის გამოყენება

/*let testResults = [34,33,55,58,24]
for (let i=0; i<testResults.length; i++) {
    if(i>1) {console.log(testResults[i])}
} */

// მესამე ვარიანტი 

/*let testResults = [34,33,55,58,24]
for(let i=0;  i<testResults.length;i++) {
    if(testResults[i]>30) {console.log(testResults[i])};

} */ 

// სტრინგზე გადარბენა

/*let message = 'კარგად იყავი';
const angerLevel = 5;
for(let i = 0; i<=angerLevel;i++) {
    message =  '!!!!' + message + '!'
}
console.log(message); */

/*let testResults = [11, 22, 33, 44, 55]
for(let i=0; i<testResults.length; i++) {console.log (testResults[i])} */

/*let testResults = [11, 22, 33, 44, 55]
for(let i=0; i<testResults.length;i++) {
    if (testResults[i]>34) {console.log(i)}
} */

/*let message = 'შე ბანძო';
let angerLevel = 5;
for(let i= 0; i<=angerLevel;i++) {
    message = message + '!'
}
console.log(message) */

// Array-ზე უკუღმა გადარბენა

/*let testResults = [11, 22, 33, 44, 55];
for (let i = testResults.length-1; i>=0; i--) {
    console.log(testResults[i])
} */

/*let tech = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON'];
let search = 'PYTHON'
for (let i=0; i<tech.length;i++) {
    if(tech[i]==search) {
    console.log(`ვიპოვნე ${tech[i]}`);
    break
    }
} */

// break წყვეტს ლუპს, რო როცა იმას იპოვის რაც უნდოდა ძებნა შეწყვიოს და კომპიუტერი არ გადაღალოს

// Array-ში ინფორმაციის ჩაწერა

/*const testResults = [11, 22, 33, 44, 55, 66, 77, 88, 99]
const goodResults = []
// ცარიელი ერეი არის გუდრიზალთზი
for (let i=0; i<testResults.length; i++){
    if(testResults[i]<50)
    goodResults[goodResults.length] = testResults[i]
//[goodResults.length] ეს ნიშნავს შემდეგ თავისუფალ ინდექსს
}
console.log(goodResults); */

// loop ში loop
const testResults = [11, 22, 33, 44, 55, 33, 77, 88, 99]
for(let i=0; i<testResults.length;i++) {
    for(let j = i+1; j<testResults.length; j++) 
    if(testResults[i]==testResults[j]) {
        console.log(`${testResults[i]} დუბლირებულია`)
    }
}

