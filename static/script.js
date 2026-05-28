# static/script.js

```javascript
// LOADING

window.onload = () => {

  setTimeout(() => {

    document.getElementById("loading-screen")
      .style.display = "none";

    document.getElementById("password-screen")
      .style.display = "flex";

  },3000);

};

// PASSWORD

function checkPassword(){

  const password =
    document.getElementById("passwordInput").value;

  if(password === "070106"){

    document.getElementById("password-screen")
      .style.display = "none";

    document.getElementById("mainContent")
      .style.display = "block";

  }else{

    alert("Hmm... kamu bukan Adek 😌");

  }

}

// COUNTDOWN

const startDate = new Date("2025-11-01");

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

  document.getElementById("timer").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;

}

setInterval(updateTimer,1000);

// LOVE BUTTON

function showLove(){

  document.getElementById("loveText").innerHTML =
    "💖 Aku Akan Selalu Menyayangimu 💖";

  fireworks();

  createHearts();

}

// HEART EFFECT

function createHearts(){

  for(let i=0;i<25;i++){

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

// FIREWORKS

function fireworks(){

  for(let i=0;i<40;i++){

    let fire = document.createElement("div");

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

    fire.style.animation =
      "boom 1s linear";

    document.body.appendChild(fire);

    setTimeout(()=>{

      fire.remove();

    },1000);

  }

}
```
