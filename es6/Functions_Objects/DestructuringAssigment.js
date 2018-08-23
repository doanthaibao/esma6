var [first, , ,forth] =['VN', "LAOS", "CAMBODIA","THAILAN", "KOREAN"];
console.log(first); //auto assign the variable to the property by the order
console.log(forth);

function test ({a1, a2}){ //Only get the properties are defined in arguments list
  console.log(`Result: ${a1} and ${a2}`)
}
var oInput = {
	a1: 14,
	a9: 8,
	a8: "5",
	a2: "10"
};
test(oInput);