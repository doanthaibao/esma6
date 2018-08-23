// let only affect inside block
var x = 10;
if (x){
	let x = 4;
}
console.log(x); // 10

///////Const
const AGE = 100
AGE = 11 //throw error
 