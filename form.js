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

document.getElementById("symbol").addEventListener("click", () => {
    let symbol = document.getElementById("symbol").value;
    document.querySelector("#symbol").innerHTML = `<div class="main-Categries">
          
    <div id="size">
      <div class="input-box">
        <!-- <span class="details">GST Number</span> -->
        <input type="text" placeholder="Exp-keser gold" class="deta" id="notmt" required><br>
        <span id="mag-mt" class="mag"></span>
      </div> 

       <div class="input-box">
      
        <select placeholder="Confirm your password" id="box1" required>
          <option>50 kg</option>
          <option>60 kg</option>
          
        </select>
      </div>
      
      
      <div class="input-box">
        <!-- <span class="details">GST Number</span> -->
        <input type="text" placeholder="exe bag"class="deta"  id="nan2" ><br>
        <span id="msg-nan" class="mag"></span>
      </div>
    </div>`;
});

 console.log("--------- this working... -->");




