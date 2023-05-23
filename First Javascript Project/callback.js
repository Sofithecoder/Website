// სხვა ფუნქციაში არგუმენტად ჩაწოდებულ ფუნქციის სახელს(ფრჩხილების გარეშე), რომელიც მაშინ ეშვება მხოლოდ თუ რაღაც წინაპიობა აქვს ეწოდება callback

function gaumarjos(text) {
    console.log(`jos ${text}`)
}

function runXtimes(times,f) {
    for (let i=0;i<times;i++) {
        f(i)
    }
}

// times არი რამდენჯერ უნდა გაუშვას ფუნქცია და f თვითონ ფუნქციააა

runXtimes(3,gaumarjos)
// დაპრინტავს:
// jos
// jos
// jos

// ეს შეგვეძლო გვექნა ასეც:
runXtimes(3, (text)=>{console.log('jos'+ text)})

// array მეთოდები, რომლებიც callback ფუნქციას იღებენ პარამეტრად.


// forEach - ანუ for loop ის ალტერნატივა
const array =[1,2,3,4,5]
const logger = item =>{
    console.log(item)
}

array.forEach(logger)
// ერეის ობიექტს მივეცი ფუნქცია forEach, რომელსაც არგუმენტად მივეცი მეორე ფუნქცია- logger
// დალოგა 1,2,3,4,5 თანმიმდევრულად

// ამის უფრო მარტივად დაწერაც შესაძლებელია:
array.forEach(item=>{console.log(item)})


const gogoebi=['sofi', 'nino', 'mari', 'gvanca']

gogoebi.forEach(item=>{console.log(item + ' miyvarxar')})
// თუ არ მივცემ პარამეტრს არ იმუშავებს. 


