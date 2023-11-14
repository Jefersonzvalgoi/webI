let first_number = document.getElementById("number_one")
let second_number = document.getElementById("number_two");

function showResult(operation) {
    //eval transforma texto em numeros
    let result = eval(first_number.value + operation + second_number.value)
    alert(result)
}