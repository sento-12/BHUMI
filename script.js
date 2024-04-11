function option(){
    let a = true;

    if(a == true){
        document.getElementById("option").style.display = "none";
        document.getElementById("side-bar").style.left = "0px";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".cross").addEventListener('click', () => {
        document.getElementById("option").style.display = "block";
        document.getElementById("side-bar").style.left = "-300px";
    });
});

async function getPrice(){
    let a = await fetch("http://127.0.0.1:3000/getPrice")

    let res = await a.json()
    console.log(res)
}

getPrice()
