var res;

async function get() {
  let a = await fetch("http://127.0.0.1:3000/getData");

  res = await a.json();
  console.log(res);
  // console.log(res.data);
  const ress = new Array(res)
  ress.map((e) => {
    document.getElementById("party").innerHTML = e.party;
    document.getElementById("city").innerHTML = e.city;
    document.getElementById("phoneNumber").innerHTML = e.phone;
    // document.getElementById("PANcard").innerHTML = e.pancard;
    // document.getElementById("gstNumber").innerHTML = e.gst;

    // console.log(e.item[0]);
    let item = e.item
    // console.log(item)  
    
   let a = 1;
    item.forEach(e => {

        document.querySelector(".item-detail").innerHTML = document.querySelector(".item-detail").innerHTML
        +
        `<div class="item">
        <div className="" style="width: 20%;text-align: center;">${a++ + "."}</div>
        <div class="bagi" style="width: 20%;text-align: center;">${e.bag}</div>
        <div class="weigthi" style="width: 20%;text-align: center;">${e.wieght}</div>
        <div class="brandi" style="width: 20%;text-align: center;">${e.brand}</div>
        <div class="price" style="width: 20%;text-align: center;">${e.price}</div>
 </div>`
      console.log(e);
      console.log(e.bag)
    });


    
  });
  


  // date set for the template 
  let date = new Date();

  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();

  let time = `${d} / ${m + 1} / ${y}`;
  // console.log(time);
  document.querySelector("#date").innerHTML = time;
}

get();


// downloade the template
window.onload = function (){
  document.getElementById("downlode").addEventListener("click", () => {
        const invoc = this.document.getElementById("dow-templet");
      console.log(invoc)

        var opt = {
          marging:       0,
          filename:     'Bhumi.pdf',
          // image:        { type: 'jpeg', quality: 0.98 },
          // html2canvas:  { scale: 2 },
          // jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(invoc).set(opt).save();
  })
}