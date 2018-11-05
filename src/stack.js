class Stack {
    constructor(push, pop, peek, size){
        this.dataStore = [];
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.size = size;
    }

    push(element) {
        this.dataStore.push(element);
    }

    pop() {
        return this.dataStore.pop();
    }

    peek() {
        return this.dataStore[this.dataStore.length - 1];
    }

    size() {
        return this.dataStore.length;
    }
}

let rpn = prompt('Enter a Reverse Polish Notation expression');

let stack = new Stack();

let rpnArray = rpn.split(" ");

for (let i=0; i < rpnArray.length; i++){
    const element = rpnArray[i];

    if (typeof +element == 'number') {
        stack.push(element);
    }
    else {
        if (element == '+') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 + operand2;
            stack.push(result)
        }
        else if (element == '-') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 + operand2;
            stack.push(result)
        }
        else if (element == '*') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 + operand2;
            stack.push(result)
        }
        else  if (element == '/') {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = operand1 + operand2;
            stack.push(result)
        }
    }
}

alert(stack.peek());