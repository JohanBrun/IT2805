/*
Method for inputs interacting with each other based on
https://stackoverflow.com/questions/10004723/html5-input-type-range-show-range-value
*/

updateTextInput = (val, id) => {
    document.getElementById(id).value = val;
}

updateRangeInput = (val, id) => {
    document.getElementById(id).value = val;
}

calcTax = () => {
    const income = document.getElementById('income').value;
    const wealth = document.getElementById('wealth').value;
    document.getElementById('tax').value = 0.35 * income + 0.25 * wealth;
}