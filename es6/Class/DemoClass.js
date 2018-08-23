class Vehicle {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	getName(){
		return this.name;
	}
	getType(){
		return this.type;
	}
}
 
//inhenritence 
class Car extends Vehicle{
	constructor(name){
		//call parent constructor 
		super(name, 'car');
	}
	getName(){
		return 'car name: ' + super.getName();
	}
	//static method
	static create(name){
		return new Car(name, 'car');
	}
}

var car = new Car('BMW');
console.log(car.getName());
console.log(car.getType());
console.log(Car.create('xxx').getName())

//set, get property
class Person {
	constructor(name){
		this._name = name;
	}
	set name (name){
		this._name = name;
	}
	get name (){
		return this._name;
	}
}
var person = new Person('Perter');
console.log(person.name)
person.name = "Marry"
console.log(person.name)