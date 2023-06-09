// მოდულები
// გვეხმარება სხვადასხვა დოკუმენტებში კოდის დახარისხებაში

// ერთ ფაილში შეგილია დაწერო რაღაც ფუნქცია და გამოიყენო სხვა ფაილებში

// export - ით შეიძლება როგორც კონკრეტული ცვლადების ექსპორტი, ასევე ფუნქციების და სხვა რაღაცების

// export- რო გამოიტანო ჯავასკრიპტის ფაილი და import რო სხვაგან შეიტანო

// როცა მოდულიდან რამეს აიმპორტებ, ეს მოდულის ფაილი მთლიანად ეშვება- ფუნქცია რო დააიმპორტო
// ფუნქციის გარდა რა კოდიც ეწერება წინა ფაილში, ეგეც დაიმპორტდება

// import ყოველთვის იწერება ფაილის თავში, იმიტო რომ სადაც არუნდა იყოს სულ პირველი სრულდება


// ფაილს შეილება ჰქონდეს ერთი მთავარი - default ექსპორტი და ბევრი არამთავარი
export default function isPrime (number) {}
// თუ default export-ს აიმპორტებ არაქ მნიშვნელობა ფუნქციას რო isprime ქვია, შეგილია სახელი უცვალო

import isPrime from 'modules.mjs'
// ესეც სწორია და
import isPrimeNumber from 'modules.mjs'

// არა-default ანუ, ჩვეულებრივი ექსპორტი 
 export function isPrime(number) {}
 // თუ ექსპორტით დავაიმპორტეთ ფუნქცია, მაშინ ფიგურული ფრჩხილები საჭიროა
 import {isPrime} from 'modules.mjs'
 // რეგულარული იმპორტისას ფუნქციას სახელს ვერ ვუცვლით

 // თუ მაინცდამაინც სახელის შეცვლა მინდა ესე შემილია
 import {isPrime as isPrime2} from 'modules.mjs'

 // შეგვიძლია ფიგურულ ფრჩხილებში მძიმეთი გამოვყოთ და სხვა არა-default ცვლადიც შემოვიტანოთ

 // ისიც შემილია, რომ default და Named ექსპორტები ერთად შემოვაიმპორტო

 import Isprime, {IsCool, isBoring} from './modules.mjs'
 // ისპრაიმი არია აქ default იმპორტი, iscool და isboring არიან ნეიმდ იმპორტები

 // რამდენიმე ველიუს ერთად დაექსპორტებაც შეგვიძლია, როგორც დაიმპორტება ზემოთ

 // default -ზე არ მოქმედებს, named ექსპორტებს ასე ვექცევი:

 export {
    Isprime,
    isPrime2
 }
// HTML -ში მოდულარული ფაილები რომ შემოვიტანოთ უნდა გამოვიყენოთ script tag - ის ატრიბუტი
// ატრიბუტს ეწოდება type='module'
// თვითონ ბრაუზერში live server  ის გარეშე არ გახსნის მოდულარულ ფაილებს

