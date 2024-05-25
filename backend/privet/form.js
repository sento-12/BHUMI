

document.querySelector(".submit").addEventListener("click",async ()=> {
    // Get user input and return flase value
    document.querySelectorAll("input[type=text]").forEach(e => {
      if(e.value === ""){
        console.log(e.value + "please file this input");
        return false;
      }
    })
  var userInput = document.getElementById("bag").value;
  // Check if it's a number
  if (!isNaN(userInput)) {
    console.log(document.getElementById("bag").value);
  } else {
    document.getElementById("msg-nan").innerText =
      "Enter Only Number After Refresh";
  }
  let broker = document.querySelector("#broker").value;
  let party = document.querySelector("#partyName").value;
  let gst = document.querySelector("#gstNumber").value || 'no value';
  let pancard = document.querySelector("#PANcard").value || 'no value';
  let phone = document.querySelector("#phoneNumber").value;
  let city = document.querySelector("#city").value;

  
  let flag = 0


  // // console.log(name.value, gst, pancard, phone, city, bag, wieght, brand,price)
  // var bag, wieght, brand;
  let itemType = document.querySelector(".main-Categries").children
  let item = [];
 Array.from(itemType).map(e => {
    
   
   item.push({
     bag : e.querySelector("#bag").value,
     wieght : e.querySelector("#box").value,
     brand : e.querySelector("#box1").value,
     bagBrand : e.querySelector("#box2").value,
     price : e.querySelector("#price").value
    })
  });


  console.log(item);
  let date = new Date();
 
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
 
  let time = `${d} / ${m+1} / ${y}`


 var obj = {
  "broker" : broker,
  "party" : party,
  "gst" : gst,
  "pancard" : pancard,
  "phone" : phone,
  "city" : city,
  "item" : item || null
 }
 console.log(obj);


 //check the value is not a empty empty string value";
 let input = document.getElementsByClassName("valid")
console.log(input)
 Array.from(input).map(e =>{
  console.log(e);
  if(e.value == ''){
    flag = 1;
  }
  
 })
let value = document.getElementById("box2").value
console.log(value)

 if(document.getElementById("box2").value == " "){
  alert("file the option BRAND option")
  return flase
 }
 if(value == " "){
  alert("file the option BAG BRAND option")
  return flase
 }

 //send data to server
 if(flag==0){
  await fetch("/data", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    })  
    console.log(time);
   await fetch("/email"); 
    fetch("/whatsapp");    
    // window.location.href = "http://127.0.0.1:3000/templet"
  }




  
})



let html =
`
<div id="size">
<div class="input-box">
  <span > BAG</span>
  <input type="text" placeholder="exe bag"class="deta"  id="bag" class="valid" required ><br>
  <span id="msg-nan" class="mag"></span>
</div>

<div class="input-box">
  <span > Weight</span>
  <select placeholder="Confirm your password" id="box" class="valid" required>
    <option aria-checked="true">50 kg</option>
    <option>60 kg</option>
    
  
      
    </select>
  </div>       
  <div class="input-box">
    <span > Brand </span>
    <select placeholder="Confirm your password"style="margin-top: 10px;" id="box1" class="valid" required>
      <option value=" " disabled selected>SELECT</option>
      <option value=" KESAR">KESARGOLD</option>
      <option value=" VRUNDAVAN">VRUNDAVAN</option>
      <option value=" PAGHADI">PAGHADI</option>
      
    
        
      </select>
    </div>      
    
    <div class="input-box">
      <span > BAG TYPE </span>
      <select placeholder="Confirm your password"style="margin-top: 10px;" id="box2" class="valid" required>
        <option value=" "  disabled selected>SELECT</option>
        <option>SUGAR</option>
        <option>NAFED</option>
        <option>JOD</option>
        <option>PP BAG</option>
        
      
          
        </select>
      </div>       

<div class="input-box">
  <span > Price</span>
  <input type="text" placeholder="1400 - 1530" class="deta" id="price" class="valid" required><br>
  <span id="mag-mt" class="mag"></span>
</div> 

</div>
`

document.querySelector(".symbol").addEventListener("click", () => {
  document.querySelector(".main-Categries").innerHTML =
    document.querySelector(".main-Categries").innerHTML + html;
});

console.log("--------- this working... -->");


// >>>>>>> e2e774f70ee7ce037088f2d7aac126ee21728a5d
