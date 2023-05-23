// პრიმიტიული ინფორმაციის ტიპები :number, string , bullean -value types
//არაპრიმიტიული ინფორმაციის ტიპები: array, object, function არის reference types

let x =10;
let y = x;
y = 2;
console.log(x)
// დაწერდა 10 


// spread ოპერატორი ...
const array =[3,4,56,5]
// ... array იგივეა რაც  
// ამ ერეის შიგთავსი 3, 4, 56, 5

// ერეი სფრედით შეგვიძლია ერეის ინფორმაცია ფუნქციას არგუმენტებად ჩავაწოდოთ
const array1=[3,4,5]
Math.max(...array1)
// ამით ფუნქციას გადავეცით 3 არგუმენტი 3, 4, 5.

// rest არ არის სპრედ ოპერატორი, მაგრამ გავს
// rest ოპერატორი ფუნქციაში გვეხმარება მრავალი პარამეტრის ერთად ქცევაში, რომ ყველა არგუმენტს მოერგოს
// მაგალიტად
function students(saxeli1, saxeli2, ...rest) {
    console.log(`saxeli1 = ${saxeli1}`);
    console.log(`saxeli2=${saxeli2}`)
    console.log(`danarcheni=${rest}`)
}
students("gio", "nino", "mariami")
// რამდენი სახელიც არ უნდა დავამატო არგუმენტად, rest ერეის შექმნის და იქ დაამატებს
// !!! rest აუცილებლად უნდა იყოს ბოლო პარამეტრი

// RESTRUCTURING 
//როგორ გადმოვწეროთ ერეიდან სხვადასხვა ინფორმაცია ახალ ცვლადებში მარტივად

const Mentori =['sofi', 'Siradze',30]
// არაეფექტური გზა
//const firstName = 'Sofi';
//const lastName = 'Siradze';
//const age = 30;

// სწრაფი გზა
const [firstName, lastName, age] = Mentori
console.log(firstName) // დალოგავს Sofi ს
// destructuring -ის მუღამია კონსტრუქციული მეთოდების სტრუქტურიდან ამოგლეჯვა

// შემილია მარტო ერთი ცვლადი ამოვიღო ერეიდან
// ასევე შემილია, რომელიმე ცვლადი გამოვტოვო, მაგალითად lastName და მძიმეებს შორის არაფერი ჩავსვა


// swap ანუ როგორ გავცვალოთ ორ ცვლადს შორის ინფორმაციები
a =10;
b=5;
[b,a]=[a,b]
// მარჯვნივ რაცაა, ისინი იწერება მარცხენა ერეიში
// შეიცვლიან ადგილს
