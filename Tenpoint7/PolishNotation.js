// valuate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

// Some examples:

//     ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//     ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

class ReversePolishNotation {
    constructor() {
        this.stack = [];
    }
    doIt(arr) {
        for (var i = 0; i < arr.length; i++) {
            this.calc(arr[i]);
        }
        this.print();
    }
    calc(item) {
        if (!isNaN(parseInt(item))) {
            this.stack.push(parseInt(item));
        } else {
            if (item === "+") {
                var result = this.stack.pop() + this.stack.pop();
                this.stack.push(result);
             } else if (item === "-") {
                var num1 = this.stack.pop();
                var num2 = this.stack.pop();
                var result = num2 - num1;
                this.stack.push(result);
            } else if (item === "*") {
                var result = this.stack.pop() * this.stack.pop();
                this.stack.push(result); 
            } else if (item === "/") {
                var num1 = this.stack.pop();
                var num2 = this.stack.pop();
                var result = parseInt(num2 / num1);
                this.stack.push(result); 
            }
        }
    }
    print() {
        console.log(this.stack.pop());
    }
}
var input = ["4", "13", "5", "/", "+"];
var RPN = new ReversePolishNotation();
RPN.doIt(input);