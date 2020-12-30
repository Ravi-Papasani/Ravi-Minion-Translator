var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");


function clickEventHandler() {
    outPutDiv.innerText = "acsdtfadfuasgj " + textInput.value;

};

btnTranslator.addEventListener("click", clickEventHandler);