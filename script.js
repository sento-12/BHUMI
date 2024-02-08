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
        console.log("rong");
    }

})
