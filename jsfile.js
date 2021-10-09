function add(x,y)
{
    return x+y;
}

function subtract(x,y)
{
    return x-y;
}

function multiply(x,y)
{
    return x*y;

}

function divide(x,y)
{
    if(y == 0)
    {
        return "Div by ZERO";
    }
    return x/y;
}

function modulus(x,y)
{
    if(y == 0)
    {
        return "Modulus by ZERO";
    }
    return x%y;
}

function operate(x,y, op)
{
    if(op == "+" )
    {
        return add(x,y);
    }
    else if(op == "-")
    {
        return  subtract(x,y);
    }
    else if(op == "*")
    {
        return multiply(x,y);
    }
    else if(op == "/")
    {
        return divide(x,y);
    }
    else if(op == "%")
    {
        return modulus(x/y);
    }
    
}


let temp = "";
let x1;
let x2;
const bottom = document.querySelector(".bot"); 
const display = document.querySelector(".top"); // display div
console.log(bottom);

bottom.addEventListener("click", handleClick);

function handleClick(event)
{
console.log(event.target.classList.contains("num"));
if(event.target.classList.contains("num"))
{
console.log(event.target.id);
temp += event.target.id;
console.log()
console.dir(display);
display.textContent = temp;
}


}

