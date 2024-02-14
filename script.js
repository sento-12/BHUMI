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





let button = document.querySelector(".button").addEventListener("click", e => {
    console.log("Starting")

    document.querySelector(".change").style.display = "block";
})

let checkPassword = document.querySelector("#checkPassword")



/// change password buttin logical

document.querySelector(".changeConform").addEventListener("click", e => {
    let print = checkPassword.value
    if (print == "bhumi@123") {
        console.log("okk");



        document.querySelector(".change").style.display = "none";

        document.querySelector(".price").style.display = "block";



    } else {

        alert("rong password")
    }

})




//add to price data from form submission




//  localStorage.setItem("kesar_s_50", kesar_s_50);


// kesar is
document.querySelector(".submit").addEventListener("click", e => {
    let kesar_s_50 = document.getElementById("kesar_sugar-50kg").value;
    document.querySelector("#kesar-sugar-price50").innerHTML = kesar_s_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let kesar_n_50 = document.getElementById("kesar_nafed-50kg").value;
    document.querySelector("#kesar-nafed-price50").innerHTML = kesar_n_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let kesar_j_50 = document.getElementById("kesar_jod-50kg").value;
    document.querySelector("#kesar-jod-price50").innerHTML = kesar_j_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let kesar_d_50 = document.getElementById("kesar_digital-50kg").value;
    document.querySelector("#kesar-digital-price50").innerHTML = kesar_d_50

});


document.querySelector(".submit").addEventListener("click", e => {
    let kesar_s_60 = document.getElementById("kesar_sugar-60kg").value;
    document.querySelector("#kesar-sugar-price60").innerHTML =kesar_s_60

});

document.querySelector(".submit").addEventListener("click", e => {
    let kesar_n_60 = document.getElementById("kesar_nafed-60kg").value;
    document.querySelector("#kesar-nafed-price60").innerHTML =kesar_n_60

});


document.querySelector(".submit").addEventListener("click", e => {
    let kesar_j_60 = document.getElementById("kesar_jod-60kg").value;
    document.querySelector("#kesar-jod-price60").innerHTML = kesar_j_60


    document.querySelector(".price").style.display = "none"
});

// paghadi is
document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_s_50 = document.getElementById("paghadi_sugar-50kg").value;
    document.querySelector("#paghadi-sugar-price50").innerHTML = paghadi_s_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_n_50 = document.getElementById("paghadi_nafed-50kg").value;
    document.querySelector("#paghadi-nafed-price50").innerHTML = paghadi_n_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_j_50 = document.getElementById("paghadi_jod-50kg").value;
    document.querySelector("#paghadi-jod-price50").innerHTML = paghadi_j_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_d_50 = document.getElementById("paghadi_digital-50kg").value;
    document.querySelector("#paghadi-digital-price50").innerHTML =paghadi_d_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_s_60 = document.getElementById("paghadi_sugar-60kg").value;
    document.querySelector("#paghadi-sugar-price60").innerHTML =paghadi_s_60

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_n_60 = document.getElementById("paghadi_nafed-60kg").value;
    document.querySelector("#paghadi-nafed-price60").innerHTML = paghadi_n_60

});

document.querySelector(".submit").addEventListener("click", e => {
    let paghadi_j_60 = document.getElementById("paghadi_jod-60kg").value;
    document.querySelector("#paghadi-jod-price60").innerHTML = paghadi_j_60


    document.querySelector(".price").style.display = "none"
});



// Vrundavan is
document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_s_50 = document.getElementById("vrindavan_sugar-50kg").value;
    document.querySelector("#vrundavan-sugar-price50").innerHTML = vrindavan_s_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_n_50 = document.getElementById("vrindavan_nafed-50kg").value;
    document.querySelector("#vrundavan-nafed-price50").innerHTML = vrindavan_n_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_j_50 = document.getElementById("vrindavan_jod-50kg").value;
    document.querySelector("#vrundavan-jod-price50").innerHTML = vrindavan_j_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_d_50 = document.getElementById("vrindavan_digital-50kg").value;
    document.querySelector("#vrundavan-digital-price50").innerHTML =vrindavan_d_50

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_s_60 = document.getElementById("vrindavan_sugar-60kg").value;
    document.querySelector("#vrundavan-sugar-price60").innerHTML =vrindavan_s_60

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_n_60 = document.getElementById("vrindavan_nafed-60kg").value;
    document.querySelector("#vrundavan-nafed-price60").innerHTML = vrindavan_n_60

});

document.querySelector(".submit").addEventListener("click", e => {
    let vrindavan_j_60 = document.getElementById("vrindavan_jod-60kg").value;
    document.querySelector("#vrundavan-jod-price60").innerHTML = vrindavan_j_60


    document.querySelector(".price").style.display = "none"
});




