// ობიექტი
// ობიექტში არსებული ინფორმაცია გადანომრილი ერთმნიშვნელოვნად არ არის
const mentor = {
    firstName: 'Xatuna',
    LastName: 'Guliashvi',
    age: 29,
    job: 'unemployed',
}
// ობიექტის შემთხვევაში ერეი ფიგურულ ფრჩხილებში ჯდება და არა კვადრატულში
// key - values გამოვყოფთ ორწერტილით
// თითოეულ ინფორმაციას გამოვყოფთ მძიმეებით
// key და value ს ერთად ეწოდება ფროფერთი
// აქ არის  4 ფროფერთი

// ხათუნას გვარი როგორ დავბეჭდოთ?

console.log(mentor['LastName'])
// '' ბრჭყალების გარეშე არ უნდა დაწერო

console.log(mentor.LastName)
// ეს უკეთესი გზაა ნაწერი 

// ორივე გზა გამოიყენება. განსხვავება რაარი?

// როცა გვინდა, რომ დინამიურად მივწვდეთ ინფორმაციას, ვიყენებთ ბრექეთ ნოთეიშენს.
// ბრექეთ ნოთეიშნში ექსფრეშენის ჩაწერაც შესაძლებელია, doT notation-ში არა.
// ინფორმაციის ჩაწერა და შეცვლაც ორივე გზით შეილება
/*mentor.car = 'Ferrari'
mentor['age'] = 34
console.log(mentor.age)
console.log(mentor['age'])
// ესენი არის იგივე */

const siteSettings= {
    WelcomeMessage: 'Salami kvercxo',
    DefaultTheme:'dark',
    isOnline: true,
    LogoName: 'kutu'
}

console.log(siteSettings.WelcomeMessage);
console.log(siteSettings['WelcomeMessage'])
// ეს ზუსტად იგივეს დაპრინტავს

const cvladi1 = 'Default'
const cvladi2 = 'Theme'

console.log(siteSettings[cvladi1+cvladi2])

const shemosavali = {
    gayidvebi: 29,
    xarji: 44,
    jami:99
}
console.log(shemosavali.gayidvebi)
console.log(shemosavali['jami-xarji'])
// ასე რომ გამოვაკლო ერორს მიივიღებ, იმიტომ რომ სტრინგებს ვაკლებ ერთმანეთს. აი სწორი გამოკლება

console.log(shemosavali.jami - shemosavali.xarji)

// ახლაც ჩავუმატოთ ცვლადი შემოსავალს
shemosavali.mogeba = 55
console.log(shemosavali)

// Nested მასივები და ობიექტები 

// array-ში array 

const Salute =['gio', 55, 34, 'gela',66, [55, 77, 'gio', 'lela'], 55]
// როგორ მივწვდეთ ლელას?

console.log(Salute[5][3])
// ასე მივწვდით სალუტ ერეის მეხუტე ინდექსზე არსებული ერეის, მესამე ინდექსზე არსებულ ჩანაწერს

//ობიექტში array 

const Mama = {
    name:'daviti',
    age: 55,
    tall:true,
    jobs:['mdzgoli', 'mtvirtavi', 'umushevari', 'taxisti']

}

console.log(Mama.age)
console.log(Mama.jobs)
console.log(Mama.jobs[3])
// bracket და dot ნოთეიშენების შერევაც შეიძლება, როგორც ზემოთ ვნახეთ


// Array-ში ობიექტი

const Gmirebi = [
    {
        saxeli:'vaja',
        gvari:'pshavela',
      

    }
,
    {
        saxeli: 'cudsuniani',
        gvari:'tetri'
    }
]
// თვითონ ობიექტებიც ერთმანეთისგან გამოიყო მძიმით

console.log(Gmirebi[0])
// როგორ დავწეროთ ეკრანზე პირველი გმირის სახელი და გვარი?

// ჯერ უნდა მივწვდეთ პირველ ობიექტს
console.log(Gmirebi[0].saxeli)
// ახლა უნდა მვიწვდეთ გვარს
console.log(Gmirebi[0].gvari)
// ახლა უნდა ვიპოვოთ გზა, რომ ერთად დავწეროთ ეგ ორი

console.log( `${Gmirebi[0].saxeli} ${Gmirebi[0].gvari}`)

// Object ობიექტში


const monacemebi = {
    pirveli: 22,
    meore: 33,
    mesame: 99,
    damatebitiMonacemi: {
        meotxe:94,
        mexute: 39,
        meekvse:77
     }
    }
console.log(monacemebi.meore)

// როგორ მივწვდეთ ობიექტის შიდა ობიექტის მონაცემს?
console.log(monacemebi.damatebitiMonacemi.mexute)

// ობიექტში ერეიში ობიექტი

const tvisebebi = {
    xalisi: 'mixaria',
    mowyena: 'mwyins',
    molxena:'vilxen',
    tvisebebisgamoxatva: [
        {
            siyvaruli:'miyvarxar',
            sixaruli: 'mixarixar'
        },

        {  landzgva: 'vergitan',
           motmena: 'vitmen'

        }
    ]
}

console.log(tvisebebi.mowyena)
//როგორ დავბეჭდოთ ეკრანზე მიყვარხარ?

console.log(tvisebebi.tvisebebisgamoxatva[0].siyvaruli)

// როგორ დავბეჭდოთ ეკრანზე მიყვარხარ და ვერგიტან ერთად?
console.log(`${tvisebebi.tvisebebisgamoxatva[0].siyvaruli} , ${tvisebebi.tvisebebisgamoxatva[1].landzgva}`)



