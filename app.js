// Chapter 21 TAsks
// ===============tsks of chapter 21 - 25====================


// // // chapter 21 tasks

// var userInput = 'AHSANULLAH'
// var allLower = userInput.toLowerCase();
// console.log(allLower);



// var x = 'AHSANULLAH'
// var x = x.toLowerCase()
// console.log(x);


// var y = 'ahsanullah'
// var y = y.toUpperCase()
// console.log(y);



// var a = "Hello World!";
// var allLower = a.toLowerCase();
// console.log(allLower);



// var array = ["Hello", "WORLD", "AHSAN", "ANSARI"];
// var lowercaseArray = [];

// for (var i = 0; i < array.length; i++) {
//   var lowercasedElement = array[i].toLowerCase();
//   lowercaseArray.push(lowercasedElement);
// }

// console.log(lowercaseArray);




// var str = 'karachi'
// var change = str.toUpperCase()
// alert(change)


// var cityName = "kaRacHi"
// var a = cityName.charAt(0).toUpperCase()
// var otherwords = cityName.slice(1).toLowerCase()
// var c = a + otherwords
// console.log(c);



// // // chapter 22 -25 tasks


// var cap = 'caption'
// var sliceword = cap.slice(1 ,3)
// console.log(sliceword);



// var a = 'ahsanansari'
// var b = a.length
// console.log(b);



// var animal = 'elephant'
// var seg = animal.slice(2 , 6)
// console.log(seg);



// var a =  'my name'
// var b = a.length
// console.log(b);



// var a = ''
// var a =  a.slice(2 ,7)
// console.log(a);



// var text = "To be or not to be."
// var indx = text.indexOf("be");
// console.log(indx);


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);




// var a = 'abcde'
// var a = a.charAt(2)
// console.log(a);



// var cha = 'dhgkkjxchjkhd'
// var cha = cha.charAt(10)
// console.log(cha);



// var a = "string"
// var x = a.lastIndexOf("g") 
// console.log(x);


// var input = 'stringsbotle'
// var cha = input.charAt(5)
// console.log(cha);


// var text = "Let it go, let it go,";
// var searchStr = "go";

// var lastIndex = text.lastIndexOf(searchStr);
// if (lastIndex !== -1) {
//  var firstIndex = text.indexOf(searchStr, lastIndex);
//  if (firstIndex !== -1) {
//  var indx = firstIndex;
//  console.log(indx); 
//   }
// }


// var str = "ahsanullah"
// var x = str.length - 1
// var lastindex = str.charAt(x)
// console.log(lastindex);



// let strr = "Example";
// if (strr.charAt(2) === 'X') {
//   console.log("The 3rd character is 'X'");
// } else {
//   console.log("The 3rd character is not 'X'");
// }


// var array = ["a","b", "c", "d", "e",]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

// }


// let str = "Hello, World!";
// let charactersArray = [];

// for (let i = 0; i < str.length; i++) {
//   charactersArray[i] = str.charAt(i);
// }

// console.log(charactersArray);


// var reply = "no"
// var change = reply.replace("no", "yes")
// console.log(change);



// var x = "Hello, world! The weather is nice";
// var y = x.replace("a", "z");
// console.log(y);



// Chapter 26 Tasks 


// var rnd = Math.round(0.3)
// console.log(rnd);

// var origNum = Math.round(0.6)
// console.log(origNum);

// var origNum = 0.3
// var roundNumber = Math.round(origNum)
// console.log(roundNumber);

// var number = 0.5
// var roundNumber = Math.round(number)
// console.log(roundNumber);





// Chapter 27 tasks



// var random = Math.random()*50
// console.log(random.toFixed(0));



// var newrandom = Math.random()
// console.log(newrandom);




// var a = Math.random();
// var toss = Math.round(a);
// var toss = Math.ceil(a*6);
// console.log (toss);




// // ==============toss ==============


// var a = Math.random()
// var toss = Math.ceil(a * 2)
// if(toss == 1){
//     console.log("Head")
// }
// else{
//     console.log("Tail")
// }
// console.log(toss);





///// // //  Chapter 28-29 tasks

// var a = +'string'
// console.log(typeof(a));

// var b =  parseInt('123')
// console.log(typeof(b));

// var str = "3";
// var num = parseFloat(str);
// console.log(num); 
// console.log(typeof num); 



//// their is a  method to chek if a string can be successfully converted to an
//// integer or decimal in JavaScript before performing the
//// conversion?(typeof())


// var numtostr = 123
// var numtostr = numtostr.toString()
// console.log(typeof(numtostr));



// var numtostr = 40
// var numtostr = numtostr.toString()
// console.log(typeof(numtostr));




// var str = Number("3.14");
// console.log(str); 


// Chapter 30 Tasks

// var num = 3.14159265359; 
// var roundedNum = num.toFixed(4); 
// var newNum = roundedNum.toString(); 
// console.log(newNum); 


// var num = +(3.14159).toFixed(2);
//  console.log(num);


//  var num = 3.14152965.toFixed(2)
//  if (num.toString().length > 4) {
//   }
//   console.log(num);


//   var assignNumber = 4.1234567890
//   alert(assignNumber.toFixed(2).toString());


// // // // Chapter 31 - 34 Tasks

// var dObj = new Date() 
// console.log(dObj);


// var dstr = new Date()
// console.log(dstr.toString());


// var d = new Date()
// var day = d.getDay()
// console.log(day);


// var date = new Date()
// var days = ['sun','mon','tue','wed','thu','fri','sat']
// console.log(days[date.getDay()]);


// var date = new Date()

// console.log('date ===>' , date.getDate());
// console.log('day ===>' ,date.getDay());
// console.log('month ===>' , date.getMonth());
// console.log('year ===>' , date.getFullYear());
// console.log('Hours ===>' , date.getHours());
// console.log('min ===>' , date.getMinutes());
// console.log('sec ===>' , date.getSeconds());
// console.log('milisec ===>' , date.getMilliseconds());
// console.log('time ===>' , date.getTime());
// console.log('date ===>' , date);


// var later = new Date(2020, 11, 30);
// console.log(later);


// var Day = new Date(1992, 01, 02)
// console.log(Day);


// alert(new Date(1980, 0, 1).getTime());


// var date = new Date()
// var date = date.setFullYear(2020)
// console.log(date);


// var date = new Date()
// date.setFullYear(2008)
// console.log(date);


// var date = new Date()
//  date.setMonth(0)
// console.log(date);


// var date = new Date()
// date.setDate(10)
// console.log(date);


// var givenTime = new Date(); 
// var newMinutes = prompt("Enter the new minute value:");
// givenTime.setMinutes(newMinutes);
// console.log(givenTime);



// var givenTime = new Date(); 
// var newHours = prompt("Enter hours to add:")
// givenTime.setHours(newHours);
// console.log(givenTime);




// var x = new Date();
// console.log(x)
// console.log(x.getTime());

// var y = new Date('Jan 21 2008')
// console.log(y.getTime());



// //  var a = 1683388967661
////  var b =  1200855600000
// var c = a - b
// var d = c /(1000*60*60*24*365)
// alert("your age is "  + d.toFixed(0))




// // // // // // Chapter 35 - 37 (Functions)



// function fun() {
//     var a = 'javascript functions' 
//     alert(a)
// }
// fun()



// function askName() {
//     var userName = prompt('Enter Name')
//     alert('Hi ' + userName);
// }
// askName()



// function callTwoFunctions() {
//     function firstFunction() {
//       console.log("This is the first function.");
//     }
  
//     function secondFunction() {
//       console.log("This is the second function.");
//     }
  
//     firstFunction();
//     secondFunction();
//   }
  
//   callTwoFunctions();
  


// function calltwofun() {

//    function firstfun() {
//     console.log('this is a first function');
//    }

//    function secfun() {
//     console.log('this is a second function');
//    }

//    firstfun()
//    secfun()

// }

// calltwofun()




// function thirdfun() {
//     var user = prompt('enter name')
//     alert(user)
// }
// thirdfun()







// function concat(a, b, c, variable, str, num) {
//     var result = a + b + c + variable + str + num;
//     console.log(result);
//   }
  
//   var alphabetPart1 = "A";
//   var alphabetPart2 = "B";
//   var alphabetPart3 = "C";
//   var myVariable = "Hello";
//   var myString = "World";
//   var myNumber = 42;
  
//   rse(alphabetPart1, alphabetPart2, alphabetPart3, myVariable, myString, myNumber);
  
  



// function funsix(hello , world) {
//     var conc = hello  + world
//     console.log(conc);
// }
// var Name = "Hello ";
// var name = "World";
// funsix(Name , name)





// function funseven(num1 ,num2 , num3) {
//     var multiply = num1 *num2 *num3
//     console.log(multiply); 
// }

// var n1 = 6
// var n2 = 8
// var n3 = 0
// funseven(n1 , n2 , n3)





// function funnine(n1 , n2) {
//     var add = n1 + n2
//     return add ;
// }

// var n1  = 10
// var n2  = 9
// var sum = funnine(n1, n2);
// console.log(sum);




// function funleven(n1, n2) {
//     var add = n1 + n2;
//     return add;
//   }
  
//   var n1 = 10;
//   var n2 = 77;
//   var result = funleven(n1, n2);
//   console.log(result);
  


// function lettrecounts(word) {
//     var count = word.length
//     console.log(count)
// }
// lettrecounts ('Hello Ahsan!')


// // write a function to set (year) in date object.

// function setyear(year) {
//     var year = new Date()
//     year.setFullYear(2008)
//     console.log(year);
// }

// setyear()




// function reverse() {
//     var array = ['a','b','c','d','e']
//     var a = array.reverse()
//     console.log(a);
// }

// reverse();



// // write a function which repeat (letter) 10 times.
// // "abcde" str.repeat(10)

// function repeatletter(letters) {
//     var letter ='abcde'
//     var a = letter.repeat(10)
//     console.log(a);
// }
// repeatletter()





// function names(word) {
//     var  array = ['zaid','haris','raza','abu bakar','umar','usman','ali','hassan','hussain','fatima'] 
//     var a =  array.indexOf(word)
//     if (a == -1 ) {
//         console.log(false)
//     }else{
//         console.log(true)
//     }
// }
// names('haris')
// names('fiuid')
// names('raza')





// function calculateAge(dateOfBirth) {
//     var birthDate = new Date(dateOfBirth);
//     var currentDate = new Date();
  
//     var age = currentDate.getFullYear() - birthDate.getFullYear();
  
//     return age;
//   }
  
//   var dateOfBirth = '2008-01-21';
//   var age = calculateAge(dateOfBirth);
//   console.log(age);
  

// // // // // // chapter 38 (Local vs. GlobalVariables) tasks


// function local(name) {
//     var a = 'hello '
//        var b = a + name
//     console.log(b);
// }  
// local('AHSAN')

// var globalVariable = "this is a global variable";

// function accessGlobalVariable() {
//   console.log(globalVariable);
// }

// accessGlobalVariable();




// // // // // // chapter 39-40 tasks





// var day = prompt("Enter day")

// switch (day) {
//     case 'mon':
//         alert('monday')
//         break;
//     case 'tue':
//         alert('tuesday')
//         break;
//     case 'wed':
//         alert('wednesday')
//         break;
//     case 'thu':
//         alert('thursday')
//         break;
//     case 'fri':
//         alert('friday')
//         break;
//     case 'sat':
//         alert('saturday')
//         break;
//     case 'sun':
//         alert('sunday')
//         break;
//     default:
//         alert('default set');
// }



// var cityToCheck = prompt("Enter city name")


// switch (cityToCheck) {
//     case "Karachi":
//         alert("City of lights")
//         break;
//     case "Islamabad":
//         alert("Capital of Pakistan")
//         break;
//     case "Lahore":
//         alert("Congragulations")
//         break;
//     case "Multan":
//         alert("Beautiful place in punjab")
//         break;
//     case "Kashmir":
//         alert("Paradise")
//         break;
//     default:
//         alert("Karachi")
// }