var number_1;
var number_2;
var dividers_1 = []; 
var dividers_2 = []; 

function call() {
    number_1 = Number(document.getElementById('number_1').value);
    number_2 = Number(document.getElementById('number_2').value);

    if(!Number.isInteger(number_1)|| number_1 < 1 || 
       !Number.isInteger(number_2)|| number_2 < 1){
        alert("Error, try again");
        clean();
        return;
    }

    calc(number_1, dividers_1);
    calc(number_2, dividers_2);

    document.getElementById("result").innerHTML = '<b>' + choice() + '</b>' ;
    document.getElementById("butt_calc").setAttribute('disabled', 'true');
}

function calc(number_func, dividers) {
    divider = 1; 
    do {
        if (number_func%divider == 0)
            dividers.push(divider);
        divider++;    
    }while (divider <= number_func)
}

function choice() {
    for(let i = (dividers_1.length - 1); i >= 0; i--){
        max = dividers_1[i]; 
        for(let j = (dividers_2.length - 1); j >= 0; j--){
            if (max == dividers_2[j])
                return max;
        }
    }
}


function clean() {
    document.getElementById('number_1').value = "";
    document.getElementById('number_2').value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("butt_calc").removeAttribute('disabled');
    dividers_1 = []; 
    dividers_2 = []; 
}
