var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");

var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//  var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function getTranslatorURL(text) {
    return serverURl + "?" + "text=" + text
}

function clickEventHandler() {
    //taking input from user
    var inputText = textInput.value;

    //processing the input by calling the server to fetch data
    fetch(getTranslatorURL(textInput))
        .then(response => response.json())
        .then(json => console.log(json))

    //output the response

    // outPutDiv.innerText = "acsdtfadfuasgj " + textInput.value;

};

btnTranslator.addEventListener("click", clickEventHandler);