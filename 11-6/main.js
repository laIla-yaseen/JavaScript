// // task1
// let arr =[2,8,5,6,]
// let narr= arr.map( function(x){
//     return x**2;
// })
// console.log(narr)


// // task2
// let ary =[25,4,24,87,5,9,34]
// let rrr = ary.filter(function(y){
//     return y>=10
// })
// console.log (rrr)


// //   //task3//
// const strings = ["butato", "tomato", "watermilon"];

// strings.forEach(function(str) {
//   console.log(str.toUpperCase());
// });



// // //task4//

// const arrOb = [
//     { name: "ayah", age: 22 },
//     { name: "rahgood", age: 22 },
//     { name: "kalboz", age: 24 }
//   ];
  
//   const Values = arrOb.map(function(obj) {
//     return obj.name;
//   });
//   console.log(Values);


//   //task5//

//    const Val = "ayah";
//   const filtered = arrOb.filter(function(obj) {
//     return obj.name == Val;
//   });
//   console.log(filtered);



// //task6//

// const num = [3, 2, 7, 6, 5];
// let sum = 0;

// num.forEach(function(number) {
//     sum + number;
// });

// console.log(sum);

// //task7//

// // const strings = ["butato", "tomato", "watermilon"];
// const revers = strings.map(function(str) {
//     return str.split('').reverse().join('');
// });

// console.log(revers); 

// //task8//

// const numb = [ 3, 4, 5, 6, 7, 8];
// function isPrime(number) {
//     if (number % 2 === 0 || number % 3 === 0) return false;
//     else{
//         return true;
//     }
      
// }
// const primeNumbers = numb.filter(isPrime);

// console.log(primeNumbers);


// //task9//

// const booleans = [true, false];

// booleans.forEach(function(boolean, index) {
//     console.log(`Index ${index}: ${boolean}`);
// });

// //task10//

// const n = [12, 24, 33, 84];
// const tr = n.map(function(number) {
//     return String(number);
// });

// console.log(tr); 


// //task11//

// const duplicates = [11, 11, 22,22, 44, 44, 56 , 56];
// const unique = duplicates.filter(function(value, index , array) {
//     return array.indexOf(value) == index;
// });

// console.log(unique); 

// //task12//
// // const arrOb = [
// //     { name: "ayah", age: 22 },
// //     { name: "rahgood", age: 22 },
// //     { name: "kalboz", age: 24 }
// // ];

// arrOb.forEach(function(obj) {
//     for (let koko in obj) {
//         console.log(obj[koko]);
//     }
// });


// //task13//


// // const strings = ["butato", "tomato", "watermilon"];
// const  Indices = strings.map(function(string , index){
//     return string + index;

// })
//    console.log(Indices);

// //task14//

// const nm = [44,58.87,99,32];
// const even = nm.filter(function(number){
//     return number % 2 == 0;
// })
// console.log(even);

// //task15//

// const mn = [12 , 4 , 6 , 8];
// mn.forEach(function(number){
//     console.log(number * 2);
// })

// //task16//

// // ????????
// // const nb = [1, 2, 3, 4, 5];
// // const incrementedNumbers = nb.map(function(number, index) {
// //     return number + index;
// // });

// // console.log(incrementedNumbers); 


// //task17//

// const obje = [
//     {num: 3 , val: 12},
//     {num: 5 , val: 3},
//     {num:4 , val:9},
//     {num:2 , val:2}
// ];

// const ar = obje.filter(function(obj){
//     return obj.val > 5;
// })
// console.log(ar);


// //task18//

// const fruit = ["apple", "banana", "orange"];
// fruit.forEach(function(string) {
//     console.log(string.length);
// });


// //task19//

// const veg = ["tomato", "cucumber", "lettuce"];
// const capitalized = veg.map(function(string) {
//     return string.toUpperCase();
// });

// console.log(capitalized); 


// //task20//

// // const ne = [6 , 20, 4, 15];
// // const average = ne.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// // const Average = ne.filter(function(number) {
// //     return number > average;
// // });

// // console.log(Average); 

