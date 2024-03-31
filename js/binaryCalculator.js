  
let res = document.getElementById('res');

function clickZero() {
    res.innerHTML += '0';
}

function clickOne() {
    res.innerHTML += '1';
}

function clickClr() {
    res.innerHTML = '';
}

function clickSum() {
    res.innerHTML += '+';
}

function clickSub() {
    res.innerHTML += '-';
}

function clickMul() {
    res.innerHTML += '*';
}

function clickDiv() {
    res.innerHTML += '/';
}

function clickEql()
{
let operand=res.innerHTML.split(/[\+\-\*/\]]/g);
let operator = res.innerHTML.match(/[\+\-\*/\]]/g)
if(operator[0]==='+'){
    res.innerHTML = (parseInt(operand[0],2)+parseInt(operand[1],2)).toString(2) 
}
if(operator[0]==='-'){
    res.innerHTML = (parseInt(operand[0],2)-parseInt(operand[1],2)).toString(2) 
}
if(operator[0]==='*'){
    res.innerHTML = (parseInt(operand[0],2)*parseInt(operand[1],2)).toString(2) 
}
if(operator[0]==='/'){
    res.innerHTML = Math.floor(((parseInt(operand[0],2)/parseInt(operand[1],2)))).toString(2) 
}
}