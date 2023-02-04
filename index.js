gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Observer);

let title = document.querySelector(".title h1");
let name = document.querySelector(".name h1");
let question1 = document.querySelector(".question1 h1");
let windowHeight = parseFloat(window.innerHeight);

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
    adjustFontSize(question1,  windowWidth);
    console.log(windowHeight, windowWidth, title.style.fontSize);
});

window.onload = function() {
    windowHeight = parseFloat(window.innerHeight);
    windowWidth = parseFloat(window.innerWidth);
    adjustFontSize(title,  windowWidth);
    adjustFontSize(name,  windowWidth);
    adjustFontSize(question1,  windowWidth);
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