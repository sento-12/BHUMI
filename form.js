
document.querySelector(".submit").addEventListener("click", ()=> {
  // Get user input
  var userInput = document.getElementById("bag").value;

  // Check if it's a number
  if (!isNaN(userInput)) {
    console.log(document.getElementById("bag").value);
  } else {
    document.getElementById("msg-nan").innerText =
      "Enter Only Number After Refresh";
  }


  let party = document.querySelector("#partyName").value;
  let gst = document.querySelector("#gstNumber").value;
  let pancard = document.querySelector("#PANcard").value;
  let phone = document.querySelector("#phoneNumber").value;
  let city = document.querySelector("#city").value;

  let bag = document.querySelector("#bag").value;
  let wieght = document.querySelector("#box1").value;
  let brand = document.querySelector("#brand").value;
  let price = document.querySelector("#price").value;
  // console.log(name.value, gst, pancard, phone, city, bag, wieght, brand,price)

 var obj = {
  "party" : party,
  "gst" : gst,
  "pancard" : pancard,
  "phone" : phone,
  "city" : city,
  "bag" : bag,
  "wieght" : wieght,
  "brand" : brand,
  "price" : price
 }


 fetch("http://127.0.0.1:3000/data", {
  method : "POSt",
  headers : {
    "Content-type" : "application/json"
  },
  body: JSON.stringify(obj)
 })
})


let html = `

          
<div id="size">
<div class="input-box">
  <span > BAG</span>
  <input type="text" placeholder="exe bag"class="deta"  id="bag" required ><br>
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
  <input type="text" placeholder="Exp-keser gold" class="deta" id="brand" required><br>
  <span id="mag-mt" class="mag"></span>
</div>

<div class="input-box">
  <span > Price</span>
  <input type="text" placeholder="1400 - 1530" class="deta" id="price" required><br>
  <span id="mag-mt" class="mag"></span>
</div> 

</div>`;

document.querySelector(".symbol").addEventListener("click", () => {
  document.querySelector(".main-Categries").innerHTML =
    document.querySelector(".main-Categries").innerHTML + html;
});

console.log("--------- this working... -->");


