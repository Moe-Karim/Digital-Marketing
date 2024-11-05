const navbar = document.getElementById("nav-bar");
const returnBtn = document.getElementById("return");
const submitBtn = document.getElementById("submitBtn");
const popBtn= document.getElementById("popBtn");

returnBtn.addEventListener("click",()=>{
window.location.href="index.html#hero";
});

popBtn.addEventListener("click",()=>{
  window.location.href="index.html#contact";
});

submitBtn.addEventListener("click",()=>{
  alert(`Thank you for your message ${document.getElementById("first-name").value}
  We will be back with you`);
});

let sticky = navbar.offsetTop;
window.onscroll = ()=> {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navigation");
  } else {
    navbar.classList.remove("navigation");
  }
};

gsap.from(".pop", {
    duration: 2,
    x: 100,
  });
