const timerText = document.getElementById("timer");
const timerSet = 300;
let solved = 0;
let started = false;
timerText.innerText = timerSet;
document.getElementById("controlButton").onclick = () => {
  if (!started) {
    StartCountdown();
    started = true;
    document.getElementById("controlButton").classList.add('d-none')
    window.addEventListener("keypress", function (event) {
      console.log(event);
      if (event.charCode == 113) {
        playAudio("audioq1")
        name1.style.width = '250px';
        name1.phone.width = '250px';
        solved += 1;
      }
    });

    window.addEventListener("keypress", function (event) {
      if (event.charCode == 119) {
        playAudio("audioq2")
        name2.style.width = '250px';
        solved += 1;
      }
    });

    window.addEventListener("keypress", function (event) {
      if (event.charCode == 101) {
        playAudio("audioq3")
        name3.style.width = '250px';
        solved += 1;
      }
    });

    window.addEventListener("keypress", function (event) {
      if (event.charCode == 114) {
        playAudio("audioq4")
        name4.style.width = '250px';
        solved += 1;
      }
    });

    window.addEventListener("keypress", function (event) {
      if (event.charCode == 116) {
        playAudio("audioq5")
        name5.style.width = '250px';
        solved += 1;
      }
    });

    button1.addEventListener('click', (e) => {
      playAudio("audioq1")
      name1.style.width = '250px';
      solved += 1;
    })

    button2.addEventListener('click', (e) => {
      playAudio("audioq2")
      name2.style.width = '250px';
      solved += 1;

    })

    button3.addEventListener('click', (e) => {
      playAudio("audioq3")
      name3.style.width = '250px';
      solved += 1;

    })

    button4.addEventListener('click', (e) => {
      playAudio("audioq4")
      name4.style.width = '250px';
      solved += 1;

    })

    button5.addEventListener('click', (e) => {
      playAudio("audioq5")
      name5.style.width = '250px';
      solved += 1;

    })
  }
}
function playAudio(playThis) {
  let audio = document.getElementById(playThis);
  audio.play();
}
function stopAudio(stopThis) {
  let audio = document.getElementById(stopThis);
  audio.pause();
}
const StartCountdown = async () => {
  let timer = timerSet - 1;
  timerText.innerText = timer;
  let interval = setInterval(() => {
    if (timer <= 0) {
      clearInterval(interval);
      started = false;
      playAudio('audio3')
      Result();
      return;
    }
    playAudio("audio2")
    timer--;
    timerText.innerText = timer;
  }, 1000);
}
anime({
  targets: ".grid .el",
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 500 },
  ],
  delay: anime.stagger(100, { grid: [8, 7], from: "center" }),
});

let button1 = document.getElementById('b1')
let button2 = document.getElementById('b2')
let button3 = document.getElementById('b3')
let button4 = document.getElementById('b4')
let button5 = document.getElementById('b5')

let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')
let name3 = document.getElementById('name3')
let name4 = document.getElementById('name4')
let name5 = document.getElementById('name5')

document.getElementsByClassName("Overlay")[0].style.display = "none";
let answer = 0;

function check() {
  let h1 = document.getElementById('h1').value.toLowerCase();
  let o1 = document.getElementById('o1').value.toLowerCase();
  let c1 = document.getElementById('c1').value.toLowerCase().toLowerCase();
  let k1 = document.getElementById('k1').value.toLowerCase().toLowerCase();
  let e1 = document.getElementById('e1').value.toLowerCase().toLowerCase();
  let y1 = document.getElementById('y1').value.toLowerCase().toLowerCase();
  let hockey = h1 + o1 + c1 + k1 + e1 + y1;
  let o2 = document.getElementById('o2').value.toLowerCase();
  let a2 = document.getElementById('a2').value.toLowerCase();
  let s2 = document.getElementById('s2').value.toLowerCase();
  let i2 = document.getElementById('i2').value.toLowerCase();
  let s22 = document.getElementById('s22').value.toLowerCase();
  let oasis = o2 + a2 + s2 + i2 + s22;
  let k3 = document.getElementById('k3').value.toLowerCase();
  let i3 = document.getElementById('i3').value.toLowerCase();
  let n3 = document.getElementById('n3').value.toLowerCase();
  let skin = s2 + k3 + i3 + n3;
  let o4 = document.getElementById('o4').value.toLowerCase();
  let o44 = document.getElementById('o44').value.toLowerCase();
  let k4 = document.getElementById('k4').value.toLowerCase();
  let e4 = document.getElementById('e4').value.toLowerCase();
  let s4 = document.getElementById('s4').value.toLowerCase();
  let cookies = c1 + o4 + o44 + k4 + i3 + e4 + s4;
  let a5 = document.getElementById('a5').value.toLowerCase();
  let s5 = document.getElementById('s5').value.toLowerCase();
  let e5 = document.getElementById('e5').value.toLowerCase();
  let ease = e1 + a5 + s5 + e5;

  if (hockey != "hockey") {
    document.getElementById('h1').value = "";
    document.getElementById('o1').value = "";
    document.getElementById('k1').value = "";
    document.getElementById('y1').value = "";
  }


  if (c1 != "c") {
    document.getElementById('c1').value = "";
  }

  if (e1 != "e") {
    document.getElementById('e1').value = "";
  }

  if (oasis != "oasis") {
    document.getElementById('o2').value = "";
    document.getElementById('a2').value = "";
    document.getElementById('i2').value = "";
    document.getElementById('s22').value = "";
  }

  if (s2 != "s") {
    document.getElementById('s2').value = "";
  }

  if (skin != "skin") {
    document.getElementById('k3').value = "";
    document.getElementById('n3').value = "";
  }

  if (i3 != "i") {
    document.getElementById('i3').value = "";
  }

  if (cookies != "cookies") {
    document.getElementById('o4').value = "";
    document.getElementById('o44').value = "";
    document.getElementById('k4').value = "";
    document.getElementById('e4').value = "";
    document.getElementById('s4').value = "";
  }


  if (ease != "eyes") {
    document.getElementById('a5').value = "";
    document.getElementById('s5').value = "";
    document.getElementById('e5').value = "";
  }
}
function reload() {
  location.reload();
}
let blocked = false;
function sub() {
  if (!blocked) {
    blocked = true;
    let h1 = document.getElementById('h1').value.toLowerCase();
    let o1 = document.getElementById('o1').value.toLowerCase();
    let c1 = document.getElementById('c1').value.toLowerCase().toLowerCase();
    let k1 = document.getElementById('k1').value.toLowerCase().toLowerCase();
    let e1 = document.getElementById('e1').value.toLowerCase().toLowerCase();
    let y1 = document.getElementById('y1').value.toLowerCase().toLowerCase();
    let hockey = h1 + o1 + c1 + k1 + e1 + y1;
    let o2 = document.getElementById('o2').value.toLowerCase();
    let a2 = document.getElementById('a2').value.toLowerCase();
    let s2 = document.getElementById('s2').value.toLowerCase();
    let i2 = document.getElementById('i2').value.toLowerCase();
    let s22 = document.getElementById('s22').value.toLowerCase();
    let oasis = o2 + a2 + s2 + i2 + s22;
    let k3 = document.getElementById('k3').value.toLowerCase();
    let i3 = document.getElementById('i3').value.toLowerCase();
    let n3 = document.getElementById('n3').value.toLowerCase();
    let skin = s2 + k3 + i3 + n3;
    let o4 = document.getElementById('o4').value.toLowerCase();
    let o44 = document.getElementById('o44').value.toLowerCase();
    let k4 = document.getElementById('k4').value.toLowerCase();
    let e4 = document.getElementById('e4').value.toLowerCase();
    let s4 = document.getElementById('s4').value.toLowerCase();
    let cookies = c1 + o4 + o44 + k4 + i3 + e4 + s4;
    let a5 = document.getElementById('a5').value.toLowerCase();
    let s5 = document.getElementById('s5').value.toLowerCase();
    let e5 = document.getElementById('e5').value.toLowerCase();
    let ease = e1 + a5 + s5 + e5;

    if (hockey == "hockey") {
      answer = answer + 1;
    }
    if (oasis == "oasis") {
      answer = answer + 1;
    }
    if (skin == "skin") {
      answer = answer + 1;
    }
    if (cookies == "cookies") {
      answer = answer + 1;
    }
    if (ease == "eyes") {
      answer = answer + 1;
    }

    document.getElementsByClassName("grid")[0].style.display = "none";
    document.getElementsByClassName("buttons")[0].style.display = "none";
    document.getElementsByClassName("heading")[0].style.display = "none";
    document.getElementsByClassName("timerBlock")[0].style.display = "none";
    document.getElementById("verify").classList.add('d-none');
    document.getElementById("submit").classList.add('d-none');
    document.getElementsByClassName("Overlay")[0].style.display = "flex";
    document.getElementsByClassName("answer")[0].innerText = `Your Result ${answer}/5`;
    stopAudio('audio2')
  }
}

function Result() {
  console.log("right")
  sub()
}