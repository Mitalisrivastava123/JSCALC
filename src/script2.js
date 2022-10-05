

function valueButton(e) {

    calculatorForm.screen.value += e.value;
}
function clear1() {
    calculatorForm.screen.value = '';
}
var operator = { add: "+", sub: "-", mul: "*", div: "/" };
var m1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var m2 = ["+", "-", "*", "/"];

var m3 = [];
var m4 = [];

function oper(val) {
    var opx = document.getElementById("res").value;
    m3.push(opx);
    // console.log(m3);
    m4.push(val)
    // console.log(m4);
    document.getElementById("res").value = ''
}

function cal() {
    for (i = 0; i < m1.length; i++) {

        if (m2[0] == "+") {
            
            var results = 0;
            results = parseInt(m3[0])+ parseInt(m3[1]);
            // console.log(parseInt(m3[0]));
            // document.getElementById("res").value = res;
            console.log(parseInt(m3[1]));
            m1.shift();
            m1.shift();
            m1.unshift(res);
            m2.shift();
        }

    }
    m3 = [];
    m4 = [];
}








