// this is for dropdown toggle button:
document.getElementById("dropdown_nav").addEventListener("click", function toggleNav() {
  document.getElementById("dropdown_menu").classList.toggle("d-none");
});
// this is for hiding navbar on scroll:
let preScrollPosition = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPosition = window.pageYOffset;
  if (preScrollPosition < currentScrollPosition) {
    document.getElementById("navbar").style.top = "-50px";
  }
  else {
    document.getElementById("navbar").style.top = "0px";
  }
  preScrollPosition = currentScrollPosition;
}
//this is for animating typing effect
let animationText = [
  "Front-end developer.", 
  "Amateur musician.", 
  "Versatile teacher.", 
  "Determined student.",
  "and mooore!"
];
let i = 0;
document.addEventListener("DOMContentLoaded", function typeWriter() {
  setInterval(function () {
    if (i > animationText.length - 1) {
      i = 0; //this is for repeating text
    }
    document.getElementById("salomAnimation2").innerHTML = animationText[i];
    document.getElementById("salomAnimation2").style.animationPlayState = "running";
    i++;

  }, 4001);

});
//this is for heart-beat  animation in Uroljon text
document.getElementById("salomAnimation").addEventListener("mouseover", function(event){
  event.target.style.display = "inline-block";
  event.target.style.animation = "uroljon 0.5s 1";
});
let children = document.getElementById("salomAnimation").children;
for(let i=0; i<children.length; i++){
children[i].addEventListener("mouseleave", function(event){

  event.target.style.animation = "";
 
});
}









// ===================CODE AREA THAT ARE FAILED======================
document.addEventListener('DOMContentLoaded00', function (event) {

  var dataText = ["Front-end developer.", "Amatuer musician.", "Teacher.", "and more!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("#salomAnimation").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// function write(rrrrr) {

//     //this is not a loop, because I need to pause between each letter. setTimeout is used to write one letter (invoking typewrite() once for each letter). i is not overwritten in if statement, meaning it will continue incrementing the index of animationText. 
//     if (i < 5) {
//         document.getElementById("salomAnimation2").innerText += rrrrr.substr(0, i+1 );
//         i++;
//     }
//     setTimeout(write, animationSpeed);
// }
// function erase(text) {
//     if (i >= 0) {
//         document.getElementById("salomAnimation2").innerHTML += text.charAt(i).replace("");
//         i--;
//     }
//     setTimeout(erase, animationSpeed);
// }























// ======================================================================
// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("header").style.fontSize = "30px";
//     } else {
//         document.getElementById("header").style.fontSize = "90px";
//     }
// }
