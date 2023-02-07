gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Observer);

let title = document.querySelector(".title h1");
let name = document.querySelector(".name h1");
let question1 = document.querySelector(".question1 div h1");
let windowHeight = parseFloat(window.innerHeight);
let answers = document.querySelectorAll(".answ");
let answersarray = Array.from(answers);
answersarray.reverse();

let fontSize = parseFloat(window.getComputedStyle(title).fontSize);
let fontSize2 = parseFloat(window.getComputedStyle(name).fontSize);

function adjustFontSize(element, windowWidth) {
    let cfont = fontSize;
    let reduc = Math.pow((windowWidth / 1500), 0.95);
    element.style.fontSize = cfont*reduc + "px";
  }
  
window.addEventListener("resize", () => {
    windowHeight = parseFloat(window.innerHeight);
    windowWidth = parseFloat(window.innerWidth);
    adjustFontSize(title,  windowWidth);
    adjustFontSize(name,  windowWidth);
    // adjustFontSize(question1,  windowWidth);
    console.log(windowHeight, windowWidth, title.style.fontSize);
});

window.onload = function() {
    windowHeight = parseFloat(window.innerHeight);
    windowWidth = parseFloat(window.innerWidth);
    adjustFontSize(title,  windowWidth);
    adjustFontSize(name,  windowWidth);
    // adjustFontSize(question1,  windowWidth);
};

// Import a script on my computer

// randomLetters(title);
// randomLetters(name);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".title",
        start: "top 0",
        end: "bottom 0",
        scrub: true,
        onUpdate: self => {
            gsap.to(".title", {
                opacity: 1.8 - self.progress,
                duration: 0.5
            });

            
            // console.log(self.progress);
        }
    }
});

tl.fromTo(".name", {
    opacity: 0.8,
    y: -(windowHeight)},
        {
    opacity: 1,
    y: 0,
    backgroundPosition: "100% 100%",
    duration: 1
}).to(".title h1", {
    y:-100,
    color: "white",
    opacity: 0.4,
    duration: 1
}, "<")
.to(".title", {
    backgroundPosition: "100% 100%",
    duration: 1,
    onComplete: () => {
        ScrollTrigger.refresh(tl2);
    }
}, "<")

let tl2 = gsap.timeline({
    immediateRender: false,
    scrollTrigger: {
        trigger: ".question1",
        onEnter: () => {
            ScrollTrigger.refresh(tl2);
            console.log("refresh");
        },
        onLeave : () => {
            ScrollTrigger.refresh(tl2);
            console.log("refresh");
        },
        start: "top 0",
        end: "bottom 0",
        scrub: true
    }
});

tl2.fromTo(".question1", {
    y: "-100%",
}, {
    opacity: 1,
    y: 0,
    backgroundPosition: "100% 100%",
    duration: 1
})


document.querySelectorAll(".quest").forEach((element, index) => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".quest").forEach((element) => {
            element.style.display = "none";
        });
        answersarray[index].style.display = "block";
    });

    element.addEventListener("mouseover", () => {
    document.querySelector(".qu1").style.rotate = "0deg";
    document.querySelector(".qu2").style.rotate = "0deg";
    document.querySelector(".qu3").style.rotate = "0deg";
    document.querySelector(".qu4").style.rotate = "0deg";

    document.querySelector(".qu1").style.translate = "11vw 21vh";
    document.querySelector(".qu2").style.translate = "-11vw 21vh";
    document.querySelector(".qu3").style.translate = "11vw -21vh";
    document.querySelector(".qu4").style.translate = "-11vw -21vh";
    document.querySelector(".i2").style.display = "none";
    document.querySelector(".qu1").style.backgroundColor = "rgba(0, 0, 0, 0.353)";
    document.querySelector(".qu2").style.backgroundColor = "rgba(0, 0, 0, 0.353)";
    document.querySelector(".qu3").style.backgroundColor = "rgba(0, 0, 0, 0.353)";
    document.querySelector(".qu4").style.backgroundColor = "rgba(0, 0, 0, 0.353)";

    setTimeout(() => {
        document.querySelector(".qu1 h1").textContent = "3.4";
        document.querySelector(".qu2 h1").textContent = "3.3";
        document.querySelector(".qu3 h1").textContent = "3.1";
        document.querySelector(".qu4 h1").textContent = "2.3";
        
    }, 2000);
    });

    element.addEventListener("mouseout", () => {
        document.querySelector(".qu1").style.rotate = "-5deg";
        document.querySelector(".qu2").style.rotate = "1.5deg";
        document.querySelector(".qu3").style.rotate = "1.5deg";
        document.querySelector(".qu4").style.rotate = "5deg";
    
        document.querySelector(".qu1").style.translate = "0vw 0vh";
        document.querySelector(".qu2").style.translate = "0vw 0vh";
        document.querySelector(".qu3").style.translate = "0vw 0vh";
        document.querySelector(".qu4").style.translate = "0vw 0vh";

        document.querySelector(".qu1").style.backgroundColor = "rgba(245, 222, 179, 0.173)";
        document.querySelector(".qu2").style.backgroundColor = "rgba(245, 222, 179, 0.173)";
        document.querySelector(".qu3").style.backgroundColor = "rgba(245, 222, 179, 0.173)";
        document.querySelector(".qu4").style.backgroundColor = "rgba(245, 222, 179, 0.173)";
        setTimeout(() => {
            document.querySelector(".qu1 h1").textContent = null;
            document.querySelector(".qu2 h1").textContent = null;
            document.querySelector(".qu3 h1").textContent = null;
            document.querySelector(".qu4 h1").textContent = null;
            
        }
        , 2000);
    }
    );
});


function hideQuestions() {
    gsap.to(".qu2", {
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut"
    });
    gsap.to(".qu3", {
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");
    gsap.to(".qu4", {
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");
    gsap.to(".qu1", {
        opacity: 0,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");

    setTimeout(() => {  // use a callback function to wait for the animation to finish before hiding the questions 
      document.querySelector(".qu2").style.display = "none";  // hide all questions after 2000ms  (2 seconds)  have passed  
      document.querySelector(".qu3").style.display = "none";   // by setting the display style property to 'none'   (hiding them)   on each question element  ('.qu2', '.qu3', etc.)   in the DOM  (Document Object Model)  

      document.querySelector(".qu4").style.display = "none";

      document.querySelector(".qu1").style.display = "none";

    }, 2000); // wait for 2 seconds before hiding the questions  (2000ms)  

 }

function showQuestions() {
    document.querySelector(".qu2").style.display = "grid";
    document.querySelector(".qu3").style.display = "grid";
    document.querySelector(".qu4").style.display = "grid";
    document.querySelector(".qu1").style.display = "grid";

    gsap.to(".qu2", {
        opacity: 1,
        duration: 0.1,
        ease: "power1.inOut"
    });
    gsap.to(".qu3", {
        opacity: 1,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");
    gsap.to(".qu4", {
        opacity: 1,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");
    gsap.to(".qu1", {
        opacity: 1,
        duration: 0.1,
        ease: "power1.inOut"

    }, "<");
};



document.querySelector(".close").addEventListener("click", () => {
        answersarray.forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".quest").forEach(element => {
            element.style.display = "grid";
        });
    });


