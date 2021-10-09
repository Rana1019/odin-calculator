function add(x,y)
{
    
    return Number(x) + Number(y);
}

function subtract(x,y)
{
    return Number(x)-Number(y);
}

function multiply(x,y)
{
    return Number(x)*Number(y);

}

function divide(x,y)
{
    if(y == 0)
    {
        return "OOPS";
    }
    return Number(x)/Number(y);
}

function modulus(x,y)
{
    if(y == 0)
    {
        return "OOPS";
    }
    return Number(x)%Number(y);
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
        return modulus(x,y);
    }
    
}


let temp = "";
let x1;
let x2;
let operation = "";
const bottom = document.querySelector(".bot"); 
const display = document.querySelector(".top"); // display div
console.log(bottom);
display.textContent = 0;

bottom.addEventListener("click", handleClick);

function handleClick(event)
{
//console.log(event.target.classList.contains("num"));

if(event.target.classList.contains("num"))
    {
    console.log(event.target.id);
    temp += event.target.id;
    console.log()
    console.dir(display);
    display.textContent = temp;
    console.log(typeof(temp));
    }
   // console.log(event.target.classList.contains("op")+" op treu or false");

    if(event.target.classList.contains("op") &&   temp != "")
    {
        if(x1 != "")
        {
            
            x2 = temp;
            let tempret = operate(x1,x2, operation);
            operation = event.target.id;
            console.log("tempret " + tempret);
            temp = tempret;
            display.textContent = temp;
            temp = ""
            
            x1 = tempret;
            x2 = "";
            
        }
        else
        {
            x1 = temp;
            temp = "";
            operation = event.target.id;
            console.log(typeof(operation));
            console.log(event.target.id);
            console.log(operation+" operation");
        }
       
        
    }

    if(event.target.classList.contains("equal") &&   operation != "" && temp != "")
    {
        console.log(event.target);
        x2 = temp;
        
        temp = "";
        let ret = operate(x1, x2, operation);
        console.log(ret + " ret returned");
       // console.log(typeof(ret)+" ret");
        if( ret == "OOPS")
        {
            return;
        }
        temp = ret;
        x1 = "";
        x2 = "";
        display.textContent = temp;
        operation = "";
       
        
    }

    if(event.target.id == "clear")
    {
        temp ="";
        x1 = "";
        x2 = "";
        operation = "";
        display.textContent = 0;
    }

    if(event.target.id == "del")
    {
        temp = temp.slice(0,-1);
        display.textContent = temp;
    }

}






