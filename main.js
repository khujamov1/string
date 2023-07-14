var elForm = document.querySelector(".site-form");
var elTextInput = document.querySelector(".input-first");
var elTextInputSec = document.querySelector(".input-second");
var elTextArea = document.querySelector(".text_area_content");
var elTextDesc = document.querySelector(".desc");

console.log(elTextArea);


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elTextInputValue = elTextInput.value;
    var elTextInputSecValue =elTextInputSec.value;
    var elTextAreaContetnt = elTextArea.value;
    var positionInputFirst = elTextAreaContetnt.indexOf(elTextInputValue);
    var positionInputSec = elTextAreaContetnt.indexOf(elTextInputSecValue);
    
    
    
    var position = elTextAreaContetnt.slice(positionInputFirst, positionInputSec);
    elTextDesc.textContent = position;
})
