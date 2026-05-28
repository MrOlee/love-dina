```javascript
// LOADING

window.addEventListener("load",()=>{

  setTimeout(()=>{

    const loading =
      document.getElementById("loading-screen");

    loading.style.opacity = "0";

    setTimeout(()=>{

      loading.style.display = "none";

    },1000);

  },3500);

});

// SECRET PASSWORD

const secretPassword = "MDEwMTIwMjQ=";

function checkPassword(){

  const input =
    document.getElementById("passwordInput").value;

  const encoded = btoa(input);

  if(encoded === secretPassword){

    unlockWebsite();

  }else{

    shakeBox();

    alert("Akses Ditolak,Karna kamu bukan adek 😌");

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

  },1000);

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

// COUNTDOWN

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

  fireworks();

}

// TYPEWRITER

const text =
"💖 Abg Akan Selalu Menyayangi adek Selamanya 💖 Sehat Selalu Ya Kesayangan Abg";

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

  },60);

}

// HEARTS

function createHearts(){

  for(let i=0;i<40;i++){

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

    },5000);

  }

}

// FIREWORKS

function fireworks(){

  for(let i=0;i<50;i++){

    const fire =
      document.createElement("div");

    fire.classList.add("firework");

    fire.style.left =
      Math.random()*100+"vw";

    fire.style.top =
      Math.random()*100+"vh";

    document.body.appendChild(fire);

    setTimeout(()=>{

      fire.remove();

    },1000);

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

  setTimeout(autoSlide,3000);

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
```
