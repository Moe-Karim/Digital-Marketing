const navbar = document.getElementById("nav-bar");
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
