// task1 
localStorage.setItem("Name" ,"Hello world!")
console.log( localStorage.Name )


// task2
localStorage.setItem("numbers" ,"12345")
console.log( localStorage.numbers )


// task3
localStorage.setItem("boolean" ,"true & false")
console.log( localStorage.boolean )

// task4
localStorage.setItem("txt" ,"welcome")
console.log( localStorage.txt )

localStorage.removeItem("txt")


// task5
// localStorage.clear()

// // task6
// console.log ( localStorage.key(2))
localStorage.setItem("kk", "lolo")

if(localStorage.getItem("kk")) {
    console.log(yes)
} else{
    console.log(no)
}

// task7
localStorage.setItem ("skills",JSON.stringify ([1,2,3,4,5,]))
console.log( JSON.parse(localStorage.getItem("skills"))) 

// task8
localStorage.setItem ("skill",JSON.stringify ({ name:"lolo" , age:22
}))
console.log( JSON.parse(localStorage.getItem("skill"))) 



