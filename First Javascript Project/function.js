// ფუნქციები
// ფუნქციის მთავარი მუღამია, კოდის ბლოკს დაარქვას სახელი მისი  შემდგომში ხშირი გამოყენების მიზნით
// ფუნქციები პროგრამირებას მაგრად ამარტივებს, რადგან გზებს ამოკლებს
/*function welcome () {
    console.log('სალამი, კარგ დღეს გისურვებ')
}

welcome()*/
// თუ მინდა რომ ეკრანზე გამოვიტანო- უნდა დავწერო ფუნქციის სახელი და ფრჩხილები. როგორც ზედა მაგალითში


// ფუნქციაში input-ს ეწოდება პარამეტრი. მაგალითად:

/*function welcome(userFirstName) {
    console.log(`სალამი ${userFirstName}, როგორ ხარ?`)
}
// ახლა შემიძლია welcome-ის მერე ფრჩხილებში ნებისმიერი რამე დავწერო, და მაგის მიხედვით გამოვა ეკრანზე კონსოლ ლოგის ინფორმაცია

welcome('სოფი') */

// ამ ჩანაწერის მერე ეკრანზე გამოვიდა ტექსტი: სალამი სოფი, როგორ ხარ?

// კიდევ ერთი მაგალითი 

/*function Trawi(feri) {
    console.log(`dzalian miyvars ${feri} trawi`)
}
Trawi('tetri') */
// აქ პარამეტრი არის feri

// ფუნქციას შეგიძლია მისცე რამდენიმე პარამეტრი.

/*function welcome(userFirstName, Messages, Unopened) {
    Unopened = Messages - 5
    console.log(`სალამი ${userFirstName}, შენ გაქვს ${Messages} მესიჯი, და ${Unopened} გაუხსნელი მესიჯი`)
}

welcome('სოფი', 5) */
// ეს არ არის პარამეტრები, ინფორმაციას რასაც ჩვენ ხელით ვწერთ ცვლადში, ეწოდება არგუმენტები

//ფუნქცია უნდა იყოს მრავალჯერ გამოყენებადი, ამიტომ მას არ უნდა ჰქონდეს უამრავი პარამეტრი

// ფუნქციის გამოძახებისას არგუმენტი ადგება და პარამეტრში ჩაიწერება

// გამოსაძახებლად ან ფუნქციის შესაქმნელად ვიყენებთ პარამეტრებს, გამოსახატად არგუმენტებს


// რა მოხდება თუ პარამეტრებიან ფუნქციას გამოვიძახებთ და არგუმენტებს არ გადავცემთ?

/*function welcome(userFirstName,Messages) {
    if(userFirstName) // ეს რომ ჩავამატე, თუ არ არის პარამეტრი დასეტილი აღარ დალოგავს
    console.log(`გამარჯობა ${userFirstName} ,შენ გაქვს ${Messages} მესიჯი`)
}

welcome()*/
// ცვლადებს undefined ებით შეავსებს

// შემიძლია ფუნქციას ვასწავლო, როცა არგუმენტს არ ვატან არაფერს, პარამეტრში რა ჩაწეროს. 

// მაგალითად

/*function welcome (firstName, messages = 0) // ეს ნიშნავს, რომ თუ მესიჯების არგუმენტი ცარიელიაო, default მნიშვნელობა იყოს 0 ანუ ნული ჩაწერეო
{ console.log(`სალამი ${firstName} , შენ გაქვს ${messages} მესიჯი`)

} */

//welcome('სოფი') // მარტო სახელი გადავეცი, მესიჯების რაოდენობა არა
// დაბეჭდა სალამი სოფი, შენ გაქვს 0 მესიჯი

// მაგრამ თუ არგუმენტს გადასცემ ფუნქციას დაიკიდებს default მნიშვნელობას და ჩაწერს არგუმენტს

//welcome('სოფი', 55)

/*function welcome(firstName,LastName = 'გიორგაძე') // default მნიშვნელობა ლასთნეიმს გადავეცი გიორგაძე
 {
    console.log(`მოგესალმებით ${firstName} ${LastName}`);
} */

//welcome('სოფი', 'სირაძე')
// აქ დაწერა სოფი სირაძე

//  ახლა გვარი აღარ მივცეთ პარამეტრებში

//welcome('სოფი')
// დაწერა მოგესალმებით სოფი გიორგაძე
// პარამეტრები არ არის ცვლადები, მასთან არ ვიყენებთ const or let ქივორდებს



// return value ანუ output ფუნქციაში

/*function welcome(firstName, Messages = 0) {
    return `სალამი ${firstName}, შენ გაქვს ${Messages} მესიჯი`
}
welcome('სოფი', 65) */
// თვითონ ესეც არის ექსფრეშენი
// ასე ეკრანზე არაფერი გამოვიდა, return-მა რომ იმუშავოს welcome('სოფი', 65) უნდა ჩავსვათ console.logში

//console.log(welcome('სოფი', 67))

// ცვლადისგან განსხვავებით ფუნქცია ადინამიურებს აუთფუთს

// ფუნქციის გამოძახება არის expression-ის ანუ ფორმულის ნაწილი,
//function calculateAge(birthYear) {
    //return 2023 - birthYear;
//}

//console.log(calculateAge(1999))

// შეგვილია, რომ ფუნქციის მიერ დაბრუნებული ინფორმაცია შევინახოთ ცვლადში
//მაგალითად
//const age = calculateAge(1999)
// და მერე ცვლადი შეგვილია დავლოგოთ
//console.log(age)
// გამოიტანა 24 

// შეგვილია ფუნქცია ვაქციოთ არითმეტიკული ოპერაციების ნაწილად, აი მაგალითდ: 

// თუ ბიჭის ასაკს 2ზე გაყოფ და 7 ს მიუმატებ ეგ არის ყველაზე ადრეული ასაკი ვისაც შეულია ხვდებოდეს, თორე პედოა
/*let Bichi=50;

if (calculateAge(1999)<Bichi/2+7) {
    console.log('ეს ბიჭი პედოფილია')
} 
else console.log('შეგილია შეხვდე')*/


// ფუნქციის აღწერის სხვადასხვა მეთოდები

// ანონიმური ფუნქციები- ცვლადში ვწერთ ფუნქციას, მაგრამ სახელს არ ვარქმევთ

// სახელი შეგვილია ცვლადს დავარქვათ, მაგალითად


const welcome = function(userFirstName, messages) {
    return `სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი`
}

console.log(welcome('ვაკო', 5));

// arrow function

const welcomes = (userFirstName, messages) => {
    return `სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი` 
}

// კოდის ბლოკსა და პარამეტრების მერე იწერება => აი ეს სიმბოლო

// თუ ერთი პარამეტრი აქ  arrow function-ს, შეგილია ფრჩხილები ვაფშე აღარ დაუწერო

const welcomesa = userFirstName => {
    return `სალამი ${userFirstName}`
}

// უფრჩხილებოდ მარტო მაშინ შეგილია დაწერო როცა გადასცემ 1 პარამეტს მარტო.

//თუ პირველივე ბრძანება არის  return მაშინ arrow function-ში შეგილია ვაფშე არდაწერო ფიგურული ფრჩხილები და return

// მაგალითად

const welcomito = orderNumber => `სალამი შე გნიდა`
// ფუნქციაში return მდე შემილია უამრავი კოდი გავუშვა, მარა მაგის მერე, ვერაფერს გავუშვებ


// ფუნქციაში სხვა ფუნქციის გამოძახება

function calculateAge(birthYear) {
    return 2023-birthYear;
}

const averageAge = (person1, person2) =>{
    const avgAge = (calculateAge(person1) +calculateAge(person2))/2
    console.log(`ორი პიროვნების საშუალო ასაკია ${avgAge}`)
}

averageAge(1999,2003);



