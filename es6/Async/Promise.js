
const delay = seconds =>{
	return new Promise(resolve =>{
		setTimeout(resolve, seconds *1000);
	});
};
delay(1).then(()=>console.log("1 second"))
delay(3).then(()=>console.log("3 second"))