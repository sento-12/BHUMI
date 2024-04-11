const formData = {};
function submit() {
  const sections = document.querySelectorAll("section");

  // Define an empty object to store values
  let flag = false;

  //CHECK all element is not empty
  sections.forEach((section) => {
    const sectionId = section.id;
    formData[sectionId] = {};
    const inputs = section.querySelectorAll(".input");

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        flag = true;
      }
    });
  });
  console.log("Flag: " + flag);
  
  // Define an empty object to store values
  if (flag == false) {
    sections.forEach((section) => {
      const sectionId = section.id;
      formData[sectionId] = {};
      const inputs = section.querySelectorAll(".input");

      inputs.forEach((input) => {
        
      formData[sectionId][input.id] = input.value;
    });
});
console.log(flag);
// send data funtion to server
sendData()
}
}



function sendData() {
    fetch("http://127.0.0.1:3000/price", {
     method : "POST",
     headers : {
       "Content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    })

}
