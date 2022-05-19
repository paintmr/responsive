// Scroll reveal begins.

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '300px',
  delay: 600
})

sr.reveal('.animate-left-flag', {
  origin: 'left',
  duration: 1000,
  distance: '300px',
  delay: 600,
  afterReveal: function (el) {
    countTriger();
  }
})

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

// Scroll reveal ends.

// Auto counting begins.
var recCounts = document.getElementsByClassName("rect-count");

const autoCount = (countDiv) => {
  // let targetNum = parseInt(countDiv.innerHTML)
  let targetNum = parseInt(countDiv.getAttribute("countTarget"))
  // targetNum = NaN;
  let countNum = 0
  let timer = null;
  const callback = () => {
    if (countNum > targetNum) {
      countDiv.innerHTML = targetNum;
      clearInterval(timer);
      console.log("Count finished.")
    } else {
      countDiv.innerHTML = countNum;
      if (targetNum <= 1500) {
        countNum += 1;
      } else if (targetNum <= 3000) {
        countNum += 3;
      } else if (targetNum <= 5000) {
        countNum += 5;
      } else if (targetNum <= 7000) {
        countNum += 6;
      } else if (targetNum <= 10000) {
        countNum += 8;
      } else if (targetNum > 10000) {
        countNum += 10;
      } else {
        clearInterval(timer);
        console.log("targetNum is not valid");
      }
    }
  }
  timer = setInterval(callback, 1)
}

const countTriger = () => {
  for (let i = 0; i < recCounts.length; i++) {
    autoCount(recCounts[i]);
  }
}
// Auto counting ends.
