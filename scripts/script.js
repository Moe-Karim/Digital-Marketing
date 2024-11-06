document.addEventListener("DOMContentLoaded", (event) => {

    function popMove(){
document.getElementById("hero").addEventListener('mouseenter',()=>{ gsap.to(".pop", {
    duration: 2,
    x: 100,
  });
});
}

function aboutMove(){
gsap.registerPlugin(TextPlugin);
const about=document.getElementById("about");
about.addEventListener('mouseenter',()=>{
  gsap.to("#about", {
    duration: 30,
    text: {
      value: "Based in the heart of Beirut,this digital marketing startup brings fresh ideas and innovative strategies to help brands make meaningful connections with their audiences. With a focus on authenticity and impact, every campaign is crafted to engage and inspire,ensuring that each message truly resonates<br><br>Driven by a commitment to excellence,the team offers a wide range of services from digital strategy to content creation,all tailored to meet the unique needs of each business. The goal is simple: to transform visions into dynamic,successful digital experiences that leave a lasting impression.",
      delimiter: "",
      newClass: "about",
    },
  });
});
}

  function scrollToElement(target, e) {
    const elem = target ? document.querySelector(target) : null;
    if (elem) {
      if (e) e.preventDefault();
      gsap.to(window, { duration: 1.5, scrollTo: elem });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = anchor.getAttribute('href');
      scrollToElement(target, e);
    });
  });

  document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', e => {
      const target = button.getAttribute('data-target');
      scrollToElement(target, e);
    });
  });

  if (window.location.hash) {
    scrollToElement(window.location.hash);
  }
  popMove();
aboutMove();
});

