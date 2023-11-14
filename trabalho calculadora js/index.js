let valueDisplay = document.getElementById("ip_result")
function setCharacter(char) {
    valueDisplay.value += char 
}
function clearInput(){
    valueDisplay.value = ''
}
function executeCalculation(){
    valueDisplay.value = eval(valueDisplay.value)
}