// rate of bag


document.getElementById("keser60").addEventListener("click", e => {
    document.getElementById("rate60").style.display = "block";
    document.getElementById("rate50").style.display = "none";
})

document.querySelector("#keser50").addEventListener("click", e => {
    document.getElementById("rate50").style.display = "block";
    document.getElementById("rate60").style.display = "none";
})



// box 2

document.getElementById("paghadi50").addEventListener("click", e => {
    document.getElementById("rate-paghadi50").style.display = "block";
    document.getElementById("rate-paghadi60").style.display = "none";
})


document.getElementById("paghadi60").addEventListener("click", e => {
    document.getElementById("rate-paghadi60").style.display = "block";
    document.getElementById("rate-paghadi50").style.display = "none";
})


// box 3

document.getElementById("vrundavan50").addEventListener("click", e => {
    document.getElementById("rate-vrundavan50").style.display = "block";
    document.getElementById("rate-vrundavan60").style.display = "none";
})


document.getElementById("vrundavan60").addEventListener("click", e => {
    document.getElementById("rate-vrundavan60").style.display = "block";
    document.getElementById("rate-vrundavan50").style.display = "none";
})





let button = document.querySelector(".button").addEventListener("click", e =>{
console.log("Starting")
    
    document.querySelector(".change").style.display = "block";
})

let checkPassword = document.querySelector("#checkPassword")

document.querySelector(".changeConform").addEventListener("click", e =>{
    let print = checkPassword.value
    if(print == "bhumi@123"){
        console.log("okk");


        
        document.querySelector(".change").style.display = "none";
    }else{

       alert("rong password")
    }

})
