const crsr = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");
const smCards = document.querySelectorAll('.sm-card');
const BigCrsr = document.querySelectorAll('.bgcrsr');

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x -12.5  + "px";
  crsr.style.top = dets.y -12.5 + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

gsap.to("header", {
  backgroundColor: "#000",
  height: "150px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    start: "top -15%",
    end: "top -16%",
    scrub: 1
  },
  padding: "-10px"
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  effect:"fade",
  autoplay: {
    delay: 4000,
},
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    }
  });

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,
  speed: 500,
  virtualTranslate: true,
  effect:"fade", 
  fadeEffect: {
    crossFade: true,
  },
  slidersPerView: 1,
  autoplay: {
    delay: 3000,
},
  });
  
  gsap.from(".quote-left", {
    x: -70,
    y: -40,
    scrollTrigger: {
      trigger: ".review-container",
      scroller: "body",
      start: "top 80%",
      end: "top 95%",
      scrub: 4
    }    
  });

  gsap.from(".quote-right", {
    x: 70,
    y: 40,
    scrollTrigger: {
      trigger: ".review-container",
      scroller: "body",
      start: "top 80%",
      end: "top 95%",
      scrub: 4
    }
  });

  gsap.from(".cards-h h2", {
    y: 40,
    scrollTrigger: {
      trigger: ".small-cards-container",
      scroller: "body",
      start: "top 80%",
      end: "top 95%",
      scrub: 1
    }
  });

smCards.forEach(smCard => {
    smCard.addEventListener('mouseenter', () => {
        const cardsH = document.querySelector('.cards-h');
        cardsH.querySelector('h2').style.webkitTextStroke = ' 1.2px #95C11E';
    });
    
    smCard.addEventListener('mouseleave', () => {
        const cardsH = document.querySelector('.cards-h');
        cardsH.querySelector('h2').style.webkitTextStroke = ' 1.2px white';
    });
});

BigCrsr.forEach(Bigcursor => {
    Bigcursor.addEventListener('mouseenter', () => {
      const crsr = document.querySelector("#cursor");
      crsr.style.backgroundColor = 'transparent';
      crsr.style.transform = 'scale(3)';
      crsr.style.border = '1px solid white';
  });
  
  Bigcursor.addEventListener('mouseleave', () => {
    const crsr = document.querySelector("#cursor");
      crsr.style.backgroundColor = '#95C11E';
      crsr.style.transform = 'scale(1)';
      crsr.style.border = '1px solid transparent';
  });
});