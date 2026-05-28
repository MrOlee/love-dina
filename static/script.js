// PASSWORD

const secretPassword =
btoa("01-11-2025");

function checkPassword(){

  const input =
  document.getElementById("passwordInput").value;

  const encoded =
  btoa(input);

  if(encoded === secretPassword){

    unlockWebsite();

  }else{

    shakeBox();

    alert("Password Salah 😌");

  }

}

// UNLOCK

function unlockWebsite(){

  const screen =
  document.getElementById("password-screen");

  screen.style.opacity = "0";

  setTimeout(()=>{

    screen.style.display = "none";

    document.getElementById("mainContent")
    .style.display = "block";

  },400);

}

// SHAKE

function shakeBox(){

  const box =
  document.querySelector(".password-box");

  box.classList.add("shake");

  setTimeout(()=>{

    box.classList.remove("shake");

  },500);

}

// TIMER

const startDate =
new Date("2025-11-01T00:00:00");

function updateTimer(){

  const now = new Date();

  const diff = now - startDate;

  const days =
  Math.floor(diff/(1000*60*60*24));

  const hours =
  Math.floor((diff/(1000*60*60))%24);

  const minutes =
  Math.floor((diff/(1000*60))%60);

  const seconds =
  Math.floor((diff/1000)%60);

  document.getElementById("timer")
  .innerHTML =
`${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;

}

setInterval(updateTimer,1000);

updateTimer();

// LOVE BUTTON

function showLove(){

  typeWriter();

  createHearts();

}

// TYPEWRITER

const text =
"💖 Aku Akan Selalu Menyayangimu Selamanya 💖";

let i = 0;

function typeWriter(){

  const target =
  document.getElementById("loveText");

  target.innerHTML = "";

  i = 0;

  const typing = setInterval(()=>{

    if(i < text.length){

      target.innerHTML += text.charAt(i);

      i++;

    }else{

      clearInterval(typing);

    }

  },50);

}

// HEARTS

function createHearts(){

  for(let i=0;i<20;i++){

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left =
    Math.random()*100+"vw";

    heart.style.fontSize =
    Math.random()*20+20+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

      heart.remove();

    },4000);

  }

}

// SLIDESHOW

let slideIndex = 0;

autoSlide();

function autoSlide(){

  const slides =
  document.querySelectorAll(".gallery img");

  slides.forEach(slide=>{

    slide.style.display = "none";

  });

  slideIndex++;

  if(slideIndex > slides.length){

    slideIndex = 1;

  }

  slides[slideIndex-1]
  .style.display = "block";

  setTimeout(autoSlide,2500);

}

// MUSIC

const music =
document.getElementById("bgMusic");

function toggleMusic(){

  if(music.paused){

    music.play();

  }else{

    music.pause();

  }

}
