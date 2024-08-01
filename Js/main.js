let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
}
window.onscroll=()=>{
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
}
// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email JS
function validate() {
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(email.value, msg.value);
      success();
      email.value="";
      msg.value="";
    }
  });
}
validate();
function sendmail(email, msg) {
  emailjs.send("service_e0bzggv", "template_2y8bbd7", {
    from_name: email,
    to_name: "Suraj",
    message: msg,
  });
}
function emptyerror() {
  swal({
    title: "Oh No...",
    text: "Fields cannot be empty",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}
// Header Background Change On Scroll
let header = document.querySelector ("header");
window. addEventListener ("scroll", () =>{
header.classList.toggle ("header-active",window. scrollY > 0);
});
// Scroll Top
let scrollTop = document.querySelector (".scroll-top");
window. addEventListener("scroll", () =>{
  scrollTop.classList. toggle ("scroll-active", window. scrollY >= 400);
});
let skills = document.querySelectorAll('.skills-content');

skills.forEach(skill => {
  let number = skill.querySelector('#number');
  let counter = 0;
  let maxPercentage = 0;

  if (skill.id === 'html') {
    maxPercentage = 100;
  } else if (skill.id === 'css') {
    maxPercentage = 80;
  } else if (skill.id === 'js') {
    maxPercentage = 70;
  }else if(skill.id==='java'){
    maxPercentage=65;
  }

  setInterval(() => {
    if (counter >= maxPercentage) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 30);
});
