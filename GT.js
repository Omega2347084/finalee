const navigation = document.querySelector(".navbar");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);




//Scroll to
function scrollToElement(elementSelector, instance = 0) {
    //select all elements that match given selector
    const element = document.querySelectorAll(elementSelector);
    //Check if there are elements matching the selector and if
    if (elementSelector.lenght > instance) {
        //scroll to the specified instance of the element
        elements [instance].scrollIntoView({behavior:'smooth'});
    }
}

const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
const l3 = document.getElementById("l3")
const l4 = document.getElementById("l4")
const l5 = document.getElementById("l5")

l1.addEventListener('click', () => {
    scrollToElement('.intro')
})
l2.addEventListener('click', () => {
    scrollToElement('.abtMe')
})
l3.addEventListener('click', () => {
    scrollToElement('.achv')
})
l4.addEventListener('click', () => {
    scrollToElement('.Per-pro')
})
l5.addEventListener('click', () => {
    scrollToElement('.life-g')
})


//Contact function


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLETE_ID";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }


  
function sendMail (){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,


    }
    emailsjs.send("service_s6qh975","template_2501glm",parms).then(alert("Email Sent!!"))
}