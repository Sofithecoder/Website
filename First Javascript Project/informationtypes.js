// Undefined data type

let x;
let y = 5;
console.log(x);
console.log(y);

//თუ გინდა გაარკვიო რა ტიპის ინფორმაცია ინახება ექსფრეშენში, გამოიყენე typeof

console.log(typeof x);
console.log(typeof y);

// null არის undefined-ის ალტერნატივა. როცა ინფორმაცია არ არსებობს მაშინ იწერება. 
let z = null;
console.log(typeof z);
// null-ის ინფორმაციის ტიპი არის object. მარა ეგ ბევრს არაფერს ამბობს.
// undefined & null ერთი და იგივე მიზნებისთვის შეგვიძლია თავისუფლად გამოვიყენოთ

// String ოპერატორი
console.log('salami' + 'novatorebo');
// გადააბამს ორ ტექსტურ სიტყვას ერთმანეთს და ეგრე გამოიტანს
// თუ გამოტოვების ჩასმა გვინდა სიტყვებს შორის, ერთ-ერთ სიტყვასაც ჩავუწეროთ გამოტოვება
console.log('salami ' + 'novatorebo');

// აი ასე შეგვიძლია გამოვიყენოთ

let userFirstname = 'Misha';
console.log('salami ' + userFirstname);
// მიშა ბრჭყალებში რომარ ყოფილიყო არ იმუშავებდა კოდი
// რა ხდება თუ string-ში ' აი ამ სიმბოლოს გამოყენება მინდა წინადადების დასრულებამდე. მაგალითაფ
console.log('welcome to wendy\'s restaurant');
// საპირისპიროთ დახრილი ხაზი შველის პრობლემას.
// Template literal არის სმარტ ტიპის ინფორმაციის ჩაწერის მეთოდი. ტექსტშივე შეგვიძლია მოვაქციოთ ექსფრეშენი
const userName = 'Misha';
const welcomeMessage = `welcome to our website ${userName}`
console.log(welcomeMessage);

// სინტაქსი არაა მარტივი. ჯერ იწერება უცნაური ბრჭყალები, ერთიანის მარცხნივ რომაა ის.

// Arrays
let sofisResults= [100, 20, 50, 66, 25, 22]
// არის object 
// თუ ამ სიიდან კონკრეტული მონაცემის გამოტანა გვინდა, მაშინ უნდა მივუთითოთ ცვლადის მერე კვადრატული ფრჩხილები.
console.log(sofisResults[3]);
// აქ გამოიტანა ლოგმა 66 რეალურად ეს არის მეოთხე რიცხვი, მარა დალოგვისას პირველ რიცხვს 0 შეესაბამება.
// მაგ რიგითობას ეწოდება ინდექსი. მესამე ინდექსზე არსებული ჩანაწერი არის 66.

// არსებულ ერეიში ინფორმაციის შეცვლა შეგვიძლია. მაგალითად ასე
sofisResults[2] = 44
console.log(sofisResults);
// ამ შემთხვევაში 50 ზედა სიიდან ჩანაცვლდა და 44 ად გადაკეთდა

// შეგვიძლია ისეთი სიაც შევქმნათ სადაც მონაცემებს საერთოდ არ მივუთითებთ
let sofisCars=[];
sofisCars[50]='fuck you';
console.log(sofisCars[50]);
console.log(sofisCars);

// ტექსტში სიმბოლოების და array-ში ჩანაწერების რაოდენობის დათვლა შეგვიძლია. მაგალითად
let message = 'hi';
console.log(message.length);
// array-ში ბოლო მონაცემი რომ დაპრინტოს ასე უნდა მოვიქცეთ: .length-1.  მაგალითი ქვემოთ
console.log(sofisResults[sofisResults.length-1]);





