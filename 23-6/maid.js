class Car {
    mark;
    model;
    
    
    started (){
        console.log("the car has started")
    }
    


 constructor(mark,model){
    this.mark;
    this.model;

 }
}

let ca = new Car()
ca.mark = "jo",
ca.model= "ka"

console.log(ca)

ca.started()


class ElectricCar extends Car{
    Battery_size ;
}

class Account {
    #Balance;

    

    setBalance( codBalance){
   this.#Balance=codBalance
  
    }

    #getBalance(){
     return this.#Balance
    }

    printBalance(){
console.log(this.#getBalance)
    }

}

let acc = new Account(5252)
