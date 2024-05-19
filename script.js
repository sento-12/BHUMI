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

    res.map((e)=>{
      let kesar = e.kesar_gold;
       console.log(kesar)
       let kes = document.getElementsByClassName("kesar")
       let kesararray = new Array();
        for(const e in kesar) {
            kesararray.push(kesar[e]);
        }    
        console.log(kesararray)
        for (let i = 0; i < kes.length; i++) {
            kes[i].innerHTML = kesararray[i]
        }   
        
        //vrundavan
        let vrundavan = e.vrundavan;
       console.log(kesar)
       let vru = document.getElementsByClassName("vrundavan")
       let vruarray = new Array();
        for(const e in vrundavan) {
            vruarray.push(vrundavan[e]);
        }    
        console.log(vruarray);
        for (let i = 0; i < vru.length; i++) {
            vru[i].innerHTML = vruarray[i]
        }   


        //padhadi 
        let padhadi = e.padhadi ;
       console.log(padhadi)
       let padh = document.getElementsByClassName("padhadi")
       let padharray = new Array();
        for(const e in padhadi) {
            padharray.push(padhadi[e]);
        }    
        console.log(padharray);
        for (let i = 0; i < padh.length; i++) {
            padh[i].innerHTML = padharray[i]
        }   

    })
}

getPrice()
