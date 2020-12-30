var btnTranslator = document.querySelector("#btn-translator");
var textInput = document.querySelector("#txt-input");
var outPutDiv = document.querySelector("#output");


function clickEventHandler() {
    outPutDiv.innerText = "acsdtfadfuasgj " + textInput.value;

};

btnTranslator.addEventListener("click", clickEventHandler);


var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//Using JavaScript Browser console getting API response

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am IronMan"

fetch(url) //click shift + enter to visit next line
.then(response=>response.json())
.then(json=>console.log(json))



//PostMan Call
HttpMethod: GET
https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am IronMan

output:

{
    "success": {
        "total": 1
    },
    "contents": {
        "translated": "Testing,  you are",
        "text": "I am IronMan",
        "translation": "yoda"
    }
}