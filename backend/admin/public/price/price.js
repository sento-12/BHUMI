const formData = {};
function submit(){
  const sections = document.querySelectorAll("section");
  alert("work")
  // Define an empty object to store values
  let flag = true;

  //CHECK all element is not empty
  sections.forEach((section) => {
    const sectionId = section.id;
    formData[sectionId] = {};
    const inputs = section.querySelectorAll(".input");

    inputs.forEach((input) => {
      if (input.value === "") {
        flag = false;
      }
    });
  });
  console.log("Flag: " + flag);
  
  // Define an empty object to store values
  if (flag === true) {
    sections.forEach((section) => {
      const sectionId = section.id;
      formData[sectionId] = {};
      const inputs = section.querySelectorAll(".input");

      inputs.forEach((input) => {
        
      formData[sectionId][input.id] = input.value;
    });
});
console.log(flag);
console.log(formData);
// send data funtion to server
sendData()







window.location.href = "/";
}
}



function sendData() {

  const token = localStorage.getItem('token');

  if (!token) {
      console.error('No token found, please log in first.');
      return;
  }

    fetch("/admin/price", {
     method : "POST",
     headers : {
       "Content-type" : "application/json",
       'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    })

}
