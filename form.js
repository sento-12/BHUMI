function checkNumber() {
    // Get user input
    var userInput = document.getElementById('nan2').value;

    // Check if it's a number
    if (!isNaN(userInput)) {
        console.log(document.getElementById('nan2').value);
    } else {
        document.getElementById('msg-nan').innerText =  'Enter Only Number After Refresh';
    }


    // LOCAL HPST ChannelMergerNode.apply.apply.apply.apply.apply.apply.apply.apply.


    let name = document.getElementById("partyName").value;
    localStorage.setItem('name', name);

    let phoneNumber = document.getElementById("phoneNumber").value;
    localStorage.setItem('phoneNumber', phoneNumber);

    let gstNumber = document.getElementById("gstNumber").value;
    localStorage.setItem('gstNumber', gstNumber);

    let PANcard = document.getElementById("PANcard").value;
    localStorage.setItem('PANcard', PANcard);
   
    let city = document.getElementById("city").value;
    localStorage.setItem('city', city);

    let marko = document.getElementById("box").value;
    localStorage.setItem('marko', marko);


    console.log(name , gstNumber , city , marko);
}


 console.log("--------- this working... -->");




