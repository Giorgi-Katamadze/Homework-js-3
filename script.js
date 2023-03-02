function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.getCarInfo =function (){
    document.write("drives"+" "+ this.make + " " + this.model + " " + this.year)
    }
    }

function Person (name,age,car){
    this.name = name,
    this.age = age,
    this.displayInfo = function (){
        document.write(this.name + " "+ "is"+" " + this.age + " "+"years old and"+ " ")
    }
}


const tom = new Person("Tom",24)
tom.displayInfo()
const tesla = new Car("Tesla","Model S","released in 2015")
tesla.getCarInfo()
document.write("<br>")
const bill = new Person("bill", 22)
bill.displayInfo()
const toyota = new Car("Toyota","Prius","released in 2018")
toyota.getCarInfo()