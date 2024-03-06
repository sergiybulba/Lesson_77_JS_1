var number;


function call() {
    number =Number(document.getElementById('num').value);
    if(!Number.isInteger(number) || number < 0){
        alert("Error, try again");
        clean();
        return;
    }
    var prime = parse();

    document.getElementById("result").innerHTML = '<b>' + '   ' + prime + '</b>' ;
    document.getElementById("butt_parse").setAttribute('disabled', 'true');
}

function parse() {
    divider = 2; 
    while (divider < Math.trunc(number/2)) {
        if (number%divider == 0)
            return false;
        divider++;    
    }
    return true;
}


function clean() {
    document.getElementById('num').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_parse").removeAttribute('disabled');
}
