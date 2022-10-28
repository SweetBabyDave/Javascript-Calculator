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
p.textContent = "Create an Expression:";
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
button.textContent = "Compute";
form.appendChild(button);

