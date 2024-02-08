function checkNumber() {
    // Get user input
    var userInput = document.getElementById('nan2').value;

    // Check if it's a number
    if (!isNaN(userInput)) {
        console.log(document.getElementById('nan2').value);
    } else {
        document.getElementById('msg-nan').innerText =  'Enter Only Number After Refresh';
    }
}