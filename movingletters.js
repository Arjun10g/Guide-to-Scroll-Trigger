// let htitle = document.querySelector('.title');
// let hname = document.querySelector('.name');
let interval = null;


// let hArray = [htitle, hname];

// hArray.forEach((item) => {
//     item.addEventListener('mouseover', (event) => {
//         let iteration = 0;
//         clearInterval(interval);
//         interval = setInterval(() => {
//             event.target.innerText = event.target.innerText
//               .split("")
//               .map((letter, index) => {
//                 if(index < iteration) {
//                   return event.target.dataset.value[index];
//                 }
              
//                 return letters[Math.floor(Math.random() * 26)]
//               })
//               .join("");
            
//             if(iteration >= event.target.dataset.value.length){ 
//               clearInterval(interval);
//             }
            
//             iteration += 1 / 3;
//           }, 30);

//     });
// });



function randomLetters(element) {
    let interval = null;
    const letters =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    element.addEventListener('mouseover', (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
              .split("")
              .map((letter, index) => {
                if(index < iteration) {
                  return event.target.dataset.value[index];
                }
              
                return letters[Math.floor(Math.random() * 26)]
              })
              .join("");

            if(iteration >= event.target.dataset.value.length){ 
              clearInterval(interval);  // stop the loop when value is reached 
            }

            iteration += 1 / 3; // increment the loop by 1/3 each time 

          }, 30); // interval of 30 milliseconds 

    }); // end of mouseover event listener 

     // end of function randomLetters() 
}


// let title = document.querySelector(".title h1");
// let fontSize = parseFloat(window.getComputedStyle(title).fontSize);
function adjustFontSize(element, windowWidth) {
    let cfont = fontSize;
    let reduc = Math.sqrt(windowWidth / 1500);
    element.style.fontSize = cfont*reduc + "px";
  }
  
// window.addEventListener("resize", () => {
//     windowHeight = parseFloat(window.innerHeight);
//     windowWidth = parseFloat(window.innerWidth);
//     adjustFontSize(title,  windowWidth);
//     console.log(windowHeight, windowWidth, title.style.fontSize);
// });

// window.onload = function() {
//     windowHeight = parseFloat(window.innerHeight);
//     windowWidth = parseFloat(window.innerWidth);
//     adjustFontSize(title,  windowWidth);
// };