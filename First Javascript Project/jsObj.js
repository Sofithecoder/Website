// ჯავასკრიპტში ჩაშენებული ობიექტები

const x = Number('sofi')
console.log(typeof x);
// არარიცხვობრივი ინფორმაციაც რომ გადავცეთ ფუნქიცას პარამეტრად, მაინც რიცხვს დააბრუნებს

// ობიექტში ჩაწერილ ფუნქციას ეწოდება მეთოდი

// toFixed ადგენს წერტილის შემდეგ რიცხვების რაოდენობას. მაგალითად

let y = 5.2436;
console.log(y.toFixed(2))
// y ს ვექცევით, როგორც ობიექტს და წერტილით მივმართავთ მის ფროფერთის. toFixed-ს რასაც ჩაუწერ ფრჩხილებში, წერტილის მერე მაგდენ მონაცემს დატოვებს
console.log(y)
//  აქ გამოიტანა მთლიანი იგრეკი.


// toString-ს ნამბერი გადაჰყავს სტრინგში
let m = 53532;
console.log( typeof m.toString())
// დააბრუნა სიტყვა string
console.log(typeof x);
// ისევ number ად რჩება

// toPrecision - რიცხვების დასამრგვალებლად გამოიყენება

let n = 5.1367
console.log(n.toPrecision(1)) // დაამრგვალე ისე რომ ერთ რიცხვამდე დაიყვანო
console.log(n.toPrecision(2)); // 5.1
// თუ n ში 54.7353 ჩავწერთ ერთ რიცხვამდე ვერ დაამრგვალებს

console.log(n.toPrecision(3)); // 5.14




// Math 
// ამ ობიექტს წინასწარ განსაზღვრული ინფორმაციები არ გააჩნია. უნდა გადასცე ინფო, რო რამე დაგიბრუნოს

// მოდული - რაც არ უნდა გადასცე, მის პოზიტიურ values დაგიბრუნებს

let k = Math.abs(-15)
console.log(k) // 15 დააბრუნა, მინუსი გარდაქმნა პლიუსად

// დაბლა დამრგვალებაც გვაქვს, Math.floor მაგალითად

let j = Math.floor(9.99)
console.log(j) // დააბრუნა 9

// მაღლა დამრგვალება match.celi 
let h = Math.ceil(554.245)
console.log(h) // 555 დააბრუნა, მიუხედავად იმისა, რომ 245 არ დამრგვალდებოდა ნორმალურად

//ხარისხში აყვანა ორი მეთოდი
// Math.pow

let g = Math.pow(5, 2) // პირველი არგუმენტი არის რა აგყავს ხარისხში, მეორე რომელ ხარისხში
console.log(g) // 25

// უფრო მარტივი მეთოდი
console.log(5**2) // ეს იგივეა რაც 5-ის მეორე ხარისხი 

// კვადრატული ფესვის ამოღება

let r = Math.sqrt(25)
console.log(r) // 5 


// Math.random 0 დან 1 მდე რენდომ რიცხვის ამოღება

let f = Math.random() // არგუმენტს არ ვატანთ
console.log(f) //0.8577469260075494 ეს რიცხვი მომცა


// უდიდესი რიცხვის დადგენა რიცხვებს შორის Math.max

let d = Math.max(55, 33, 35, 53, 653)
console.log(d) // 653
// Math.min ყველაზე პატარა რიცხვს ამოირჩევს

let s = Math.min(-55, 55, 33, 42, 0)
console.log(s) // -55 დააბრუნა



// string ეძებს ერთი სტრინგი შეიცავს თუ არა მეორეს 

const message = 'სალამი, როგორ ხარ'
let search = 'სალამი'
const found = message.includes(search)
console.log(found)


// სტრინგის გამეორება repeat

const block = '$'
const cash = block.repeat(4);
console.log(cash) // დოლარი გამეორდა 4 ჯერ $$$$

// ტექსტის ჩასწორება სიტყვებით

const welcomeMessage = 'სალამი სოფია'
const goodbyeMessage = welcomeMessage.replace('სალამი', 'დროებით')// პირველი-რას ვანაცვლებთ, მეორე-რითი
console.log(goodbyeMessage) // დროებით სოფია


// ტექსტების დაყოფა ნაწილებად split

const mesiji = 'აბა როგორახართ ნოვატორებო'
const axalimesiji = mesiji.split(' ') // გამოტოვება სადაც იქნება იქ გასპლიტავს
console.log(axalimesiji) // ერეიში გადმოწერა დაცალკებებულად სიტყვები

// startswith ტექსტი თუ იწყება

const messages = 'აუ რა ჩავიცვა'
const wuwunebs = messages.startsWith('აუ')
console.log(wuwunebs) // true

// endswith იგივენაირად მუშაობს, ოღონდ ბოლოზე, მესიჯი რითი მთავრდება ამოწმებს


// დიდი და პატარა ასოების შეცვლა

const misalmeba = 'hello HOW are you?'
console.log(misalmeba.toLocaleUpperCase());// HELLO HOW ARE YOU?
console.log(misalmeba.toLocaleLowerCase()); // hello how are you?

// array 

//ერეიში მარკვნიდან ინფორმაციის დამატება push()

const array = [1, 2, 3, 5, 6, 7]
// ამის მერე უნდა შევიტანოთ მონაცემი ასე
array.push(66)
console.log(array) // array ს ჩაემატა მონაცემი
// განსხვავებით სხვა მეთოდებისგან, ფუშის მეთოდი ერიზე მოქმედებს. სტრინგში ან რიცხვებში თუ არ იცვლება ორიგინალი ინფორმაცია, ფუშით ერეიში იცვლება
array.pop() // არგუმენტი არ გადაეცემა, ერეიდან ბოლო ელემენტს შლის

// return value ერეი პოპის შემთხვევაში არის წაშლილი რიცხვი, ანუ რასაც შლის, იმას აბრუნებს

/// !!!! კარგად უნდა გავიზარო, რომელი მეთოდი რას აბრუნებს და რომელი მეთოდი როგორ ზემოქმედებს ობიექტზე

// 0 ინდექსზე არსებული ინფორმაციის წასაშლელად გამოვიყენოთ array.shift
// array.unshift მარცხნიდან წერს ინფორმაციას ერეიში

const monacemebi = [55, 33, 55, 55, 22, 22]
monacemebi.unshift(44, 22, 254)
console.log(monacemebi)
// მარცხნიდან ჩაწერა არის (on) სირთულის ოპერაცია, რადგან ჯავასკრიპტს უწევს ერეიზე გადარბენა


// array ს შემობრუნება
const monacemz= [ 1, 2, 3, 4, 5,];
monacemz.reverse() // ფრჩხილებში არაფერი იწერება
console.log(monacemz) // შემოაბრუნა ერეი

// ერეის ჩანაწერების /ტექსტის შეწებება

const words = [22, 'sofi', 44, 'madzungala']
const axali  = words.join('33'); // აი აქ შეგილია მიუთითო რისი ჩასმა გინდა მაგათ შორის რასაც აწებებ
console.log(axali) // 2233sofi334433madzungala


