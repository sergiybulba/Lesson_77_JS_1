var number;
var digits = [];


function call() {
    number =    Math.abs(Number(document.getElementById('num').value));
    if(!Number.isInteger(number)){
        alert("Error, try again");
        clean();
        return;
    }
    parse();
    document.getElementById("result").innerHTML = '<b>' + Math.max(...digits) + '</b>' ;
    document.getElementById("butt_parse").setAttribute('disabled', 'true');
}

function parse() {
    if(number < 10) {
        digits.push(number);
        return;
    }
    else {
        digits.push(number % 10);
        number = Math.trunc(number/10);
        parse();
    }
}


function clean() {
    document.getElementById('num').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_parse").removeAttribute('disabled');
    digits = [];
}
