var index;
var fibonacci = [];


function call() {
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    index = Number(document.getElementById('index').value);
    if(!Number.isInteger(index) || index < 1){
        alert("Error, try again");
        clean();
        return;
    }

    if(index == 1 || index == 2)
        document.getElementById("result").innerHTML = '<b> Fibonacci[' + index + '] = ' + fibonacci[index - 1] + '</b>';
    else {
        document.getElementById("result").innerHTML = '<b> Fibonacci[' + index + '] = ' + calculate() + '</b>';
    }
    document.getElementById("butt_parse").setAttribute('disabled', 'true');
}

function calculate() {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    if(index == fibonacci.length)
        return fibonacci[fibonacci.length - 1];
    else
        return calculate();
}

function clean() {
    document.getElementById('index').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_parse").removeAttribute('disabled');
    fibonacci = [];
}
