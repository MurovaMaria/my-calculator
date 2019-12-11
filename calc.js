var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultipli = document.getElementById("buttonMultipli");
var buttonDivide = document.getElementById("buttonDivide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function onButtonPlusClick() {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;
    window.alert(summ);
}

function onButtonMinusClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;
    window.alert(summ);
}

function onButtonMultipliClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 * number2;
    window.alert(summ);
}

function onButtonDivideClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;
    window.alert(summ);
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultipli.addEventListener("click", onButtonMultipliClick);
buttonDivide.addEventListener("click", onButtonDivideClick);
