//button tag used id as attribute then .queryselector has #
var btnTranslator = document.querySelector("#btn-translator");
console.log(btnTranslator);

var textInput = document.querySelector("#txt-input");


function clickEventHandler() {
    console.log("you clicked me");
    console.log("Input " + textInput.value);
};

//Hey Button when I clicked, perform call back function, and that function is clickEventHandler() here
btnTranslator.addEventListener("click", clickEventHandler);