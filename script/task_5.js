var number;
var multipliers  = [];


function call() {
    number =Number(document.getElementById('num').value);
    if(!Number.isInteger(number) || number < 0){
        alert("Error, try again");
        clean();
        return;
    }
    var prime = parse_prime();

    if(prime)
        document.getElementById("result").innerHTML = '<b>' + '1 * ' + number + ' = ' + number + ' (prime number)</b>' ;
    else {
        parse_mult();
        document.getElementById("result").innerHTML = '<b>' + multipliers + '</b>' ;
    }
    document.getElementById("butt_parse").setAttribute('disabled', 'true');
}

function parse_prime() {
    divider = 2; 
    while (divider < Math.trunc(number/2)) {
        if (number%divider == 0)
            return false;
        divider++;    
    }
    return true;
}

function parse_mult() {
    if(number == 1)
        return;
    else{
        mult = 2; 
        while (mult <= number) {
            if (number%mult == 0) {
                multipliers.push(mult);
                number = number/mult;
                parse_mult();
            }
            mult++;
        }        
    }
}


function clean() {
    document.getElementById('num').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_parse").removeAttribute('disabled');
    multipliers = [];
}
