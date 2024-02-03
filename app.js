var displayinput = document.getElementById("inputdisplay")
function getvalue(val) {
 displayinput.value += val
}
function cal (){
    displayinput.value = eval(displayinput.value)
}
function clearAll(){
    displayinput.value = "";
}
