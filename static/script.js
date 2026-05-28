// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

  setTimeout(() => {

    const loading =
      document.getElementById("loading-screen");

    if(loading){

      loading.style.opacity = "0";

      setTimeout(() => {

        loading.style.display = "none";

      },1000);

    }

  },3000);

});

// =========================
// PASSWORD
// =========================

function checkPassword(){

  const password =
    document.getElementById("passwordInput").value;

  // GANTI PASSWORD DI SINI
  if(password === "01012024"){

    document.getElementById("password-screen")
      .style.display = "none";

    document.getElementById("mainContent")
      .style.display = "block";

  }else{

    alert("Hmm... kamu bukan Dina 😌");

  }

}

// =========================
// COUNTDOWN
// =========================

const startDate =
  new Date("2024-01-01T00:00:00");

function updateTimer(){

  const now = new Date();

  const diff = now - startDate;

  const days =
    Math.floor(diff / (1000*60*60*24));

  const hours =
    Math.floor((diff / (1000*60*60)) % 24);

  const minutes =
    Math.floor((diff / (1000*60)) % 60);

  const seconds =
    Math.floor((diff / 1000) % 60);

  const timer =
    document.getElementById("timer");

  if(timer){

    timer.innerHTML =
      `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;

  }

}

setInterval(updateTimer,1000);

updateTimer();

// =========================
// LOVE BUTTON
// =========================

function showLove(){

  const loveText =
    document.getElementById("loveText");

  loveText.innerHTML =
    "💖 Aku Akan Selalu Menyayangimu 💖";

  createHearts();

  fireworks();

}

// =========================
// HEART EFFECT
// =========================

function createHearts(){

  for(let i=0;i<25;i++){

    const heart =
      document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left =
      Math.random()*100+"vw";

    heart.style.top = "100vh";

    heart.style.fontSize = "30px";

    heart.style.zIndex = "999";

    heart.style.animation =
      "float 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    },4000);

  }

}

// =========================
// FIREWORKS
// =========================

function fireworks(){

  for(let i=0;i<40;i++){

    const fire =
      document.createElement("div");

    fire.style.position = "fixed";

    fire.style.width = "10px";

    fire.style.height = "10px";

    fire.style.borderRadius = "50%";

    fire.style.background = "pink";

    fire.style.left =
      Math.random()*100+"vw";

    fire.style.top =
      Math.random()*100+"vh";

    fire.style.boxShadow =
      "0 0 20px pink";

    fire.style.zIndex = "999";

    fire.animate([

      {
        transform:"scale(0)",
        opacity:1
      },

      {
        transform:"scale(4)",
        opacity:0
      }

    ],{

      duration:1000

    });

    document.body.appendChild(fire);

    setTimeout(() => {

      fire.remove();

    },1000);

  }

}
