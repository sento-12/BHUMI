
function checkNumber() {
  // Get user input
  var userInput = document.getElementById("nan2").value;

  // Check if it's a number
  if (!isNaN(userInput)) {
    console.log(document.getElementById("nan2").value);
  } else {
    document.getElementById("msg-nan").innerText =
      "Enter Only Number After Refresh";
  }

  // LOCAL HPST ChannelMergerNode.apply.apply.apply.apply.apply.apply.apply.apply.

}

let html = `

<div id="size">
          <div class="input-box">
            <span > BAG</span>
            <input type="text" placeholder="exe bag"class="deta"  id="nan2" required ><br>
            <span id="msg-nan" class="mag"></span>
          </div>
          
          <div class="input-box">
            <span > Weight</span>
            <select placeholder="Confirm your password" id="box1" required>
              <option>50 kg</option>
              <option>60 kg</option>
              
            </select>
          </div>
          
          <div class="input-box">
            <span > Brand</span>
            <input type="text" placeholder="Exp-keser gold" class="deta" id="notmt" required><br>
            <span id="mag-mt" class="mag"></span>
          </div> 

          <div class="input-box">
            <span > Price</span>
            <input type="text" placeholder="1400 - 1530" class="deta" id="notmt" required><br>
            <span id="mag-mt" class="mag"></span>
          </div> 
          
        </div>`;

document.querySelector(".symbol").addEventListener("click", () => {
  document.querySelector(".main-Categries").innerHTML =
    document.querySelector(".main-Categries").innerHTML + html;
});

console.log("--------- this working... -->");
