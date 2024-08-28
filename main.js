let preScrollPosition = window.scrollY;
function hideNavbarOnScroll() {
  let currentScrollPosition = window.scrollY;
  if (preScrollPosition < currentScrollPosition) {
    document.getElementById("navbar").style.top = "-50px";
  }
  else {
    document.getElementById("navbar").style.top = "0px";
  }
  preScrollPosition = currentScrollPosition;
}

function throttle(func, delay) {
  let timeout = 0;
  return ()=>{
    if (!timeout) {
      func();
      timeout = setTimeout(()=>{
        timeout = null;
      }, delay);
    }
  }
}
const throttledScrollHandler = throttle(hideNavbarOnScroll, 100);

function handleTypewriterEffect(params) {
  const container = document.getElementById("typewriter_animation");
  if(!container) return;
  //this is for animating typing effect
  let animationText = [
    "Front-end developer.", 
    "Shopify developer.", 
    "Amateur musician.", 
    "Determined student.",
    "and mooore!"
  ];
  let line = 0;
  let direction = "forward";
  setInterval(function () {
    console.log("pickup");
    const wordLength = container.textContent.length;
    let currentWord = "";
    if(wordLength === animationText[line].length){
      direction = "backward";
    }
    if (wordLength < animationText[line].length && direction == "forward") {
      currentWord = container.textContent + animationText[line][wordLength];
    }else if(wordLength && direction == "backward") {
      currentWord = container.textContent.slice(0, -1);
      if (!currentWord.length) {
        direction = "forward";
        if (animationText[line+1]) {
          line ++;
        }else {
          line = 0;
        }
      }
    }
    container.textContent = currentWord;
  }, 250);
}

document.addEventListener("DOMContentLoaded", function typeWriter() {
  // this is for dropdown toggle button:
  document.getElementById("dropdown_nav").addEventListener("click", function toggleNav() {
    document.getElementById("dropdown_menu").classList.toggle("d-none");
  });
  handleTypewriterEffect();
  // this is for hiding navbar on scroll:
  window.addEventListener("scroll", throttledScrollHandler);
});