var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");

var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslatorURL(text) {
    return serverURl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server, try again after some time!");
}

function clickEventHandler() {
    //taking input from user
    var inputText = textInput.value;

    //processing the input by calling the server to fetch data
    fetch(getTranslatorURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)

    //output the response
    // outPutDiv.innerText = "acsdtfadfuasgj " + textInput.value;

};

btnTranslator.addEventListener("click", clickEventHandler);