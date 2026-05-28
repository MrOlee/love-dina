// COUNTDOWN

const startDate = new Date("2024-01-01");

function updateTimer(){

  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000*60*60*24));

  document.getElementById("timer").innerHTML =
  days + " Hari Bersama ❤️";
}

setInterval(updateTimer,1000);

// BUTTON LOVE

function showLove(){

  document.getElementById("loveText").innerHTML =
  "💖 Aku Akan Selalu Menyayangimu 💖";

  createHearts();
}

// HEART EFFECT

function createHearts(){

  for(let i=0;i<20;i++){

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "30px";
    heart.style.animation = "float 4s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },4000);
  }
}
