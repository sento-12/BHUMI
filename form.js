
document.querySelector(".submit").addEventListener("click", ()=> {
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

  let party = document.querySelector("#partyName").value;
  let gst = document.querySelector("#gstNumber").value;
  let pancard = document.querySelector("#PANcard").value;
  let phone = document.querySelector("#phoneNumber").value;
  let city = document.querySelector("#city").value;


  // // console.log(name.value, gst, pancard, phone, city, bag, wieght, brand,price)
  // var bag, wieght, brand;
  let itemType = document.querySelector(".main-Categries").children
  let item = [];
 Array.from(itemType).map(e => {
    
   
   item.push({
     bag : e.querySelector("#bag").value,
     wieght : e.querySelector("#box1").value,
     brand : e.querySelector("#brand").value,
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
  "party" : party,
  "gst" : gst,
  "pancard" : pancard,
  "phone" : phone,
  "city" : city,
  "item" : item
 }
 console.log(obj);
 let flag = 0


 //check the value is not a empty empty string value";
 let input = document.getElementsByClassName("valid")
console.log(input)
 Array.from(input).map(e =>{
  console.log(e);
  if(e.value == ''){
    flag = 1;
  }
 })

 //send data to server
 if(flag==0){
   fetch("http://127.0.0.1:3000/data", {
     method : "POST",
     headers : {
       "Content-type" : "application/json"
      },
      body: JSON.stringify(obj)
    })  
    console.log(time);
  }
  
  fetch("http://127.0.0.1:3000/email");    
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


