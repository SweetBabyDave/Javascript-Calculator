/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */

document.title = "Javascript Calculator"

var div = document.createElement('div');
div.setAttribute('class', 'green');
document.body.appendChild(div);

var h1 = document.createElement('h1');
h1.textContent = "JavaScript Calculator";
h1.setAttribute('style', 'font-size: 60px');
h1.setAttribute('class', 'center');
div.appendChild(h1);

var p = document.createElement('p');
p.textContent = "Create an expression and choose color for <div>:";
p.setAttribute('style', 'font-size: 30px');
p.setAttribute('class', 'center');
div.appendChild(p);

var form = document.createElement('form');
form.setAttribute('class', 'center');
div.appendChild(form);

var input1 = document.createElement('input');
input1.setAttribute('type', 'number');
form.appendChild(input1);

var select = document.createElement('select');
form.appendChild(select);

var option1 = document.createElement('option');
option1.setAttribute('value', '+');
option1.textContent = "+";
select.appendChild(option1);

var option2 = document.createElement('option');
option2.setAttribute('value', '-');
option2.textContent = "-";
select.appendChild(option2);

var option3 = document.createElement('option');
option3.setAttribute('value', '*');
option3.textContent = "*";
select.appendChild(option3);

var option4 = document.createElement('option');
option4.setAttribute('value', '/');
option4.textContent = "/";
select.appendChild(option4);

var option5 = document.createElement('option');
option5.setAttribute('value', '%');
option5.textContent = "%";
select.appendChild(option5);

var option6 = document.createElement('option');
option6.setAttribute('value', '**');
option6.textContent = "**";
select.appendChild(option6);

var input2 = document.createElement('input');
input2.setAttribute('type', 'number');
form.appendChild(input2);

var input3 = document.createElement('input');
input3.setAttribute('type', 'color');
form.appendChild(input3);

var button = document.createElement('button');
button.setAttribute('type', 'button');
button.setAttribute('onclick', 'createDiv()');
button.textContent = "Compute";
form.appendChild(button);

var createDiv = function() {
    const date = new Date();
    const [month, day, year, hour, minutes, seconds] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()];
    
    if (input1.value == "") {
        createErrorDiv(date)
        return;
    } 
    if (input2.value == "") {
        createErrorDiv(date)
        return;
    }
    firstNum = input1.value;
    secondNum = input2.value;
    operand = select.value;
    color = input3.value;
    var expression = evaluateExpression(firstNum, secondNum, operand);

    var div1 = document.createElement('div');
    div1.setAttribute('style', 'background-color: ' + color);
    div1.setAttribute('class', 'center');
    div1.setAttribute('onclick', 'this.remove()');
    div1.textContent = date + " " + firstNum + " " + operand + " " + secondNum + " = " + expression;
    document.body.appendChild(div1);
}

var createErrorDiv = function(date) {
    var div1 = document.createElement('div');
    div1.textContent = date + " ERROR! MISSING OPERANDS!";
    div1.setAttribute('style', 'background-color: red');
    div1.setAttribute('class', 'center');
    div1.setAttribute('onclick', 'this.remove()');
    document.body.appendChild(div1);
}

var evaluateExpression = function(firstNum, secondNum, operand) {
    return eval(firstNum + operand + secondNum);
}
