var number;
var power;
var power_copy; 

function call() {
    number =Number(document.getElementById('num').value);
    power = Number(document.getElementById('pow').value);
    power_copy = Math.abs(power);
    if(!Number.isInteger(number)|| !Number.isInteger(power)){
        alert("Error, try again");
        clean();
        return;
    }
    if (power >= 0)
        document.getElementById("result").innerHTML = '<b>' + number + '^' + power + ' = ' + calc() + '</b>' ;
    else
        document.getElementById("result").innerHTML = '<b>' + number + '^(' + power + ') = ' + 1/calc() + '</b>' ;
    document.getElementById("butt_calc").setAttribute('disabled', 'true');
}

function calc() {
    if(power_copy == 0)
        return 1;
    else{
        if(power_copy == 1)
            return number;
        else {
            power_copy -= 1;    
            return number * calc();
        }
    }
}


function clean() {
    document.getElementById('num').value = "";
    document.getElementById('pow').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_calc").removeAttribute('disabled');
}
