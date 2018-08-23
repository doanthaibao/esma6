var studentList = (students,
    age) => {
        console.log(students);
        console.log(`Age ${age}`);
    };
// var studentList = function (students) {
// 	console.log(students);
// }
studentList(["AB", "CD"], 1);

var person = {
	first: "Doug",
	actions: ['bike', 'hike', 'ski', 'surf'],
	printActions (){
		this.actions.forEach(action => {
			var str = this.first + " likes to " + action;
			//Can be able to access this from arrow function
			console.log(str);
		});
	}
};
person.printActions()
