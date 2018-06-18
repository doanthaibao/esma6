let x = 1, y = 2,
obj = {x, y};
console.log(obj);
//ommited function keywork
//closure 
let obj2 = {
	name: 'ES6',
	toString (){
		return this.name;
	}
}
console.log(obj2.toString());
setTimeout(()=>{
	console.log('Hello world');
}, 1000);
//https://github.com/lukehoban/es6features