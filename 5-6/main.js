// task 1
function sayHello(Name)
{
console.log("Hello"+ Name)
}
 sayHello(" Alice")
 sayHello(" Bob")

//  task 2
function square (n1)
{
    return n1 **2 
    
}
console.log (square(5))
console.log (square(2))


// task 3 
function multiply (n1,n2)
{
    return n1 *n2  
    
}
console.log (multiply(5,4))
console.log (multiply(2,8))

// task 4
 let car = {
  make :" Toyota ",
  model : " camry ",
  yaer : 2020, 
getCarln :function()
{
    return this.make + this.model+ this.yaer
}

 }
 console.log(car.make);
 console.log(car.getCarln());

//  task 5
 let colors = [ 'Output' , 'Red' , 'Greed' , 'Blue' ]
function printColors (colors )
{
    for(  let i in colors)
        {
            console.log(colors[i])
        }
}


printColors (colors )

// task 6 
// function getStringLength(slo)
// {
// let coun = 0 
// for( i in slo ) 
//     {
//         coun ++
//     }
//      return coun
// }
function get (str)
{
    return str.length 
}

console.log(get ("hello"))
console.log( get('gavascript'))
// console.log(getStringLength("hello"));
// console.log(getStringLength("javascript"));

// task 7
function toUpperCase(upp)
{
    return upp. toUpperCase ()
}
console.log (toUpperCase('hello'))
console.log (toUpperCase('world'))
// task 8
function splitstring (p,k)
{
    let arr = p.split(k);
    return arr;
}
console.log(splitstring ('JavaScript is fun' , " "))
console.log(splitstring ('Hello,World' , ","))