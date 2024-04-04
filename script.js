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


