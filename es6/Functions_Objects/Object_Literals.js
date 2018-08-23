var obj = {
	test1(times){
		console.log("test1".repeat(times));
	},
	test2(times){
		console.log("test2".repeat(times));
	}
};
//Remove the funcation keyword, add the repeat keywords for String
obj.test1(2);