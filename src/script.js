

function valueButton(e) {

    calculatorForm.screen.value += e.value;
}
function clear1() {
    calculatorForm.screen.value = '';
}
var operator = {add:"+",sub:"-",mul:"*",div:"/"};
// var m1 = {1: "1",2:"2",3:"3",4:"4",5:"5"};
// var m2 = {6:"6",7:"7",8:"8",9:"9" };

function cal() {
    var opr1 = parseFloat(document.getElementById("first").value);
    var opr2 = parseFloat(document.getElementById("second").value);
    // var ope = document.getElementById("ope").value;
   

    if (operator.add) {
     var res = parseInt(opr1) + parseInt(opr2);
     console.log(res);
    
    }
    if(operator.sub)
    {
        var res2 = parseInt(opr1) - parseInt(opr2);
        console.log(res2);
    }
    if(operator.mul)
    {
        var res3 = parseInt(opr1) * parseInt(opr2);
        console.log(res3);
    }
    if(operator.div)
    {
        var res4 = parseInt(opr1) / parseInt(opr2);
        console.log(res4);
    }
}






