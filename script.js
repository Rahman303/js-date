// const number = []
// let sum = 0
// for(let i=0; i<=100; i++){
//    number.push(i)
// }
// let evensArray = []

// let resultEvens = number.filter((n) => n % 2 ==0)
// let resultOdds = number.filter((n) => n % 2 ==1)

// for(i=0; i<resultEvens.length; i++){
//    sum+=resultEvens[i]
// }

// console.log(sum)


// let s4 = () => {
//    return Math.floor((12 + Math.random()) * 0x10000000000000)
//        .toString(16)
//        .substring(1);
//  }
 
//  console.log(s4());
//282b

//  const x = Math.floor(Math.random() * 256);
//  const y = Math.floor(Math.random() * 256);
//  const z = Math.floor(Math.random() * 256);
// const rgbColor = "rgb"+"("+`${x},${y},${z}` +")"


// let countries = [
//    'Albania',
//    'Bolivia',
//    'Canada',
//    'Denmark',
//    'Ethiopia',
//    'Finland',
//    'Germany',
//    'Hungary',
//    'Ireland',
//    'Japan',
//    'Kenya'
//  ]
//  let landCountries = ['Finland', 'Ireland', 'Iceland']
//   let emptyArr = []
// let userChoice = prompt("Enter a country")
// for(i=0; i<countries.length; i++){
//    emptyArr.push(countries[i])
//    if(userChoice == emptyArr.endsWith("land")){
//       continue
//    }
// }

// window.alert(emptyArr)


// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];

// console.log(word)


// const webTechs = [
//    'HTML',
//    'CSS',
//    'JavaScript',
//    'React',
//    'Redux',
//    'Node',
//    'MongoDB'
//  ]

//  let arrayWebTechs = [webTechs[0]]+' '+[webTechs[1] +' '+webTechs[11].length]
//  console.log(webTechs.sort())



// const countries = [
//    'Afghanistan',
//    'Albania',
//    'Algeria',
//    'Andorra',
//    'Angola',
//    'Antigua and Barbuda',
//    'Argentina',
//    'Armenia',
//    'Australia',
//    'Austria',
//    'Azerbaijan',
//    'Bahamas',
//    'Bahrain',
//    'Bangladesh',
//    'Barbados',
//    'Belarus',
//    'Belgium',
//    'Belize',
//    'Benin',
//    'Bhutan',
//    'Bolivia',
//    'Bosnia and Herzegovina',
//    'Botswana',
//    'Brazil',
//    'Brunei',
//    'Bulgaria',
//    'Burkina Faso',
//    'Burundi',
//    'Cambodia',
//    'Cameroon',
//    'Canada',
//    'Cape Verde',
//    'Central African Republic',
//    'Chad',
//    'Chile',
//    'China',
//    'Colombi',
//    'Comoros',
//    'Congo (Brazzaville)',
//    'Congo',
//    'Costa Rica',
//    "Cote d'Ivoire",
//    'Croatia',
//    'Cuba',
//    'Cyprus',
//    'Czech Republic',
//    'Denmark',
//    'Djibouti',
//    'Dominica',
//    'Dominican Republic',
//    'East Timor (Timor Timur)',
//    'Ecuador',
//    'Egypt',
//    'El Salvador',
//    'Equatorial Guinea',
//    'Eritrea',
//    'Estonia',
//    'Ethiopia',
//    'Fiji',
//    'Finland',
//    'France',
//    'Gabon',
//    'Gambia, The',
//    'Georgia',
//    'Germany',
//    'Ghana',
//    'Greece',
//    'Grenada',
//    'Guatemala',
//    'Guinea',
//    'Guinea-Bissau',
//    'Guyana',
//    'Haiti',
//    'Honduras',
//    'Hungary',
//    'Iceland',
//    'India',
//    'Indonesia',
//    'Iran',
//    'Iraq',
//    'Ireland',
//    'Israel',
//    'Italy',
//    'Jamaica',
//    'Japan',
//    'Jordan',
//    'Kazakhstan',
//    'Kenya',
//    'Kiribati',
//    'Korea, North',
//    'Korea, South',
//    'Kuwait',
//    'Kyrgyzstan',
//    'Laos',
//    'Latvia',
//    'Lebanon',
//    'Lesotho',
//    'Liberia',
//    'Libya',
//    'Liechtenstein',
//    'Lithuania',
//    'Luxembourg',
//    'Macedonia',
//    'Madagascar',
//    'Malawi',
//    'Malaysia',
//    'Maldives',
//    'Mali',
//    'Malta',
//    'Marshall Islands',
//    'Mauritania',
//    'Mauritius',
//    'Mexico',
//    'Micronesia',
//    'Moldova',
//    'Monaco',
//    'Mongolia',
//    'Morocco',
//    'Mozambique',
//    'Myanmar',
//    'Namibia',
//    'Nauru',
//    'Nepal',
//    'Netherlands',
//    'New Zealand',
//    'Nicaragua',
//    'Niger',
//    'Nigeria',
//    'Norway',
//    'Oman',
//    'Pakistan',
//    'Palau',
//    'Panama',
//    'Papua New Guinea',
//    'Paraguay',
//    'Peru',
//    'Philippines',
//    'Poland',
//    'Portugal',
//    'Qatar',
//    'Romania',
//    'Russia',
//    'Rwanda',
//    'Saint Kitts and Nevis',
//    'Saint Lucia',
//    'Saint Vincent',
//    'Samoa',
//    'San Marino',
//    'Sao Tome and Principe',
//    'Saudi Arabia',
//    'Senegal',
//    'Serbia and Montenegro',
//    'Seychelles',
//    'Sierra Leone',
//    'Singapore',
//    'Slovakia',
//    'Slovenia',
//    'Solomon Islands',
//    'Somalia',
//    'South Africa',
//    'Spain',
//    'Sri Lanka',
//    'Sudan',
//    'Suriname',
//    'Swaziland',
//    'Sweden',
//    'Switzerland',
//    'Syria',
//    'Taiwan',
//    'Tajikistan',
//    'Tanzania',
//    'Thailand',
//    'Togo',
//    'Tonga',
//    'Trinidad and Tobago',
//    'Tunisia',
//    'Turkey',
//    'Turkmenistan',
//    'Tuvalu',
//    'Uganda',
//    'Ukraine',
//    'United Arab Emirates',
//    'United Kingdom',
//    'United States',
//    'Uruguay',
//    'Uzbekistan',
//    'Vanuatu',
//    'Vatican City',
//    'Venezuela',
//    'Vietnam',
//    'Yemen',
//    'Zambia',
//    'Zimbabwe'
//  ]


// const deletedCountries = countries.filter(counter=>counter.includes('land'))
// if(countries.filter(counter=>counter.includes('land'))){
//    console.log(countries.pop(deletedCountries))
// }

// const word = 'JavaScript, Phyton, CSS'

// word[0] = 'Y'

// console.log(word.split())

// function myName(name){
//    return  `${name}`
// }

// console.log(myName('Rahman'))


// function addingNumber(){
//    let numOne = 5;
//    let numTwo = 4;
//    return total = numOne * numTwo
// } console.log(addingNumber())

// function areaOfCircle(r) {
//    let area = Math.PI * r
//    return area
//  }
 
//  console.log(areaOfCircle(10)) 


// function square(number) {
//    return number * number
//  }
 
//  console.log(square(10))

// function sumTwoNumbers(numOne, numTwo) {
//    let sum = numOne + numTwo
//    console.log(sum)
//  }sumTwoNumbers(10, 20)

// function printFullName(firstName, lastName) {
//    return fullName = firstName + " " + lastName
//  }
//  console.log(printFullName('Asabeneh', 'Yetayeh'))

// function sumArrayValues(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i];
//    }
//  }
//  const numbers = [1, 2, 3, 4, 5];
//      //calling a function
//  sumArrayValues(numbers)


// function sumAllNums() {
//    console.log(arguments)
//   }
//   sumAllNums(1, 2, 3, 4)

// const sumAllNums = (...args) => {
//    // console.log(arguments), arguments object not found in arrow function
//    // instead we use a parameter followed by spread operator (...)
//    console.log(args)
//   }
  
//   sumAllNums(1, 2, 3, 4)

// function sumArrayValues(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i];
//    }
//  }
//  const numbers = [1, 2, 3, 4, 5];
//      //calling a function
//  sumArrayValues(numbers)

// const addingNumber = arr =>{
//    let numOne = 0;
//    for(let i=0; i<arr.length; i++){
//       numOne += arr[i]
//    };
// }
// const numbers = [1,2,3]
// addingNumber(numbers)

// function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//    let space = ' '
//    let fullName = firstName + space + lastName
//    return fullName
//  }
 
//  console.log(generateFullName())
//  console.log(generateFullName('David', 'Smith'))

//  function greetings(name = 'Peter') {
//    let message = `${name}, welcome to 30 Days Of JavaScript!`
//    return message
//  }
 
//  console.log(greetings())
//  console.log(greetings('Asabeneh'))

//  function calculateAge(birthYear, currentYear = 2023) {
//    let age = currentYear - birthYear
//    return age
//  }
 
//  console.log('Age: ', calculateAge(1996))
 

// function weightOfObject(mass, gravity = 9.81) {
//    let weight = mass * gravity + ' N' // the value has to be changed to string first
//    return weight
//  }
 
//  console.log('Weight of an object in Newton: ', weightOfObject(1000)) // 9.81 gravity at the surface of Earth
//  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))

// function myName(){
//    let name = 'Rahman';
//    let surname = 'Zeynalov'
//    let fullName = name + " " + surname
//    console.log(name + ' ' + surname)
// }
// myName()

// function areaOfRectangle(length, width){
//    let area = length*width;
//    console.log(area)
// }
// areaOfRectangle(50,60)



// const number = [1,2,3,4]
// console.log(find.Max(0,2,4))




function showDateTime (){
   let newDate = new Date()
   let month = newDate.getMonth()+1
   if(month<10)month="0"+month
   let day = newDate.getDate()
   let year = newDate.getFullYear()
   let time = newDate.getHours()
   if(time<10)time = "0"+time
   let minutes = newDate.getMinutes()
   if(minutes<10)minutes = "0"+minutes
   let second = newDate.getSeconds()
   if(second<10)second = "0"+second


   const fullDate = month+"/"+day+'/'+year+" "+time+':'+minutes+':'+second;
   document.getElementById("clock").innerHTML=fullDate
   setTimeout("showDateTime()", 1000)
}
showDateTime()

// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// let userChoice = prompt("Please enter your name")
// let upperCasedName = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
// function userIdGeneratedByUser(length) {
//     let userIdNum = Math.floor(Math.random() * 100)
//     let userChar = '';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//          userChar += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     let userId = userIdNum+userChar

//     const userID = "This is your ID adress"+" "+'#'+`${userId}`+" "+"dear"+" "+`${upperCasedName}`;
//     document.getElementById("user-id").innerText=userID
//     return userId;
// }
// userIdGeneratedByUser(5);


// function rgbColorGenerator(){
//    let a = Math.floor(Math.random() * 255)
//    let b = Math.floor(Math.random() * 255)
//    let c = Math.floor(Math.random() * 255)
//    let color = "rgb"+'('+`${a},`+`${b},`+`${c}`+')'

//    return backGroundColor = document.body.style.backgroundColor=color
// }

// rgbColorGenerator()


// function sevenRandomNumbers(){
//    let arr = []
//    let a = Math.floor(Math.random() * 10)
//    let b = Math.floor(Math.random() * 10)
//    let c = Math.floor(Math.random() * 10)
//    let d = Math.floor(Math.random() * 10)
//    let e = Math.floor(Math.random() * 10)
//    let f = Math.floor(Math.random() * 10)
//    let g = Math.floor(Math.random() * 10)
//    let arrs = arr.push(`${a}`+','+`${b}`+","+`${c}`+','+`${d}`+','+`${e}`+','+`${f}`+','+`${g}`)
//    return arr
// }

// console.log(sevenRandomNumbers())

// const person = {
//    firstName: 'Asabeneh',
//    lastName: 'Yetayeh',
//    age: 250,
//    country: 'Finland',
//    city: 'Helsinki',
//    skills: [
//      'HTML',
//      'CSS',
//      'JavaScript',
//      'React',
//      'Node',
//      'MongoDB',
//      'Python',
//      'D3.js'
//    ],
//    isMarried: true
//  }
//  console.log(person)


// let array = ['a', 'b', 'c']
// let lastElement = array.at(-1)
// console.log(lastElement)


// for(let i=0; i<=5; i++){
//   for(j=0;j<=i;j++){
//     let b = "#"
//     console.log(b)
//   }
// }


// const areaOfCircle = (radius) => {
//    let area = Math.PI * radius * radius;
//    return area;
//  }
// console.log(areaOfCircle(100))


// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// arr.forEach(function (element, index, arr) {
//    console.log(index, element, arr)
//  })


// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// console.log(sum)


// const countries = [
//    'Albania',
//    'Bolivia',
//    'Canada',
//    'Denmark',
//    'Ethiopia',
//    'Finland',
//    'Germany',
//    'Hungary',
//    'Ireland',
//    'Japan',
//    'Kenya',
//  ]
//  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
//  console.log(countriesToUpperCase)

// const teamList = [
//    {name:'Rahman', age: 26},
//    {name:'Simral', age: 27},
//    {name:'Jahangir', age: 19},
//    {name:'Kamil', age: 51}
// ]

// const agesUnderThirty = teamList.filter((age)=>age.age<30)
// console.log(agesUnderThirty)


// const countries = [
//    {country:'Dutch',count:8},
//    {country:'German',count:7},
//    {country: 'Arabic',count:25},
//    {country:'Chinese',count:5},
//    {country:'Swahili',count:4},
//    {country: 'English',count:91},
//    {country: 'French',count:45},
//    {country: 'Spanish',count:24},
//    {country:'Russian',count:9},
//    {country:'Portuguese', count:9},
//    ]

// countries.sort((a,b) => {
//    if(a.count < b.count) return 1
//    if(a.count > b.count) return -1
// })
// console.log(countries)


// const users = [
//    { name: 'Asabeneh', age: 150 },
//    { name: 'Brook', age: 50 },
//    { name: 'Eyob', age: 100 },
//    { name: 'Elias', age: 22 },
//  ]
//  users.sort((a, b) => {
//    if (a.age < b.age) return 1
//    if (a.age > b.age) return -1
//    return 0
//  })
//  console.log(users)


let users = [
   {
      id:1,
      name:'John',
      age:31
   },
   {
      id:3,
      name:'Isabella',
      age:42
   },
   {
      id:23,
      name:'Tom',
      age:24
   }
]

users = users.map(user => {
   if(user.id === 3){
      user.name = 'Jerry'
   }
   return user
})
console.log(users)
