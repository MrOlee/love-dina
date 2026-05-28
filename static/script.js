// PASSWORD

const secretPassword =
btoa("01112025");

function checkPassword(){

  const input =
  document.getElementById("passwordInput").value;

  const encoded =
  btoa(input);

  if(encoded === secretPassword){

    unlockWebsite();

  }else{

    shakeBox();

    alert("Password Salah, kamu bukan dina! 😌");

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

```javascript
const text =
`💔

Selamat ulang tahun ya sayang...

Abg sebenarnya bingung
harus mulai dari mana.

Karena semakin abg nulis ini,
semakin abg sadar
betapa berharganya adek buat hidup abg.

Adek tau ga?

Kadang abg takut...
takut kalau suatu hari nanti,
dunia bikin adek terlalu capek,
sampai adek memilih menyerah.

Padahal di sini,
ada seseorang
yang selalu berharap
adek tetap kuat hidup.

Ada seseorang
yang diam-diam selalu nyebut nama adek
di setiap doanya.

Dan itu abg.

Terima kasih ya sayang...
karena sudah bertahan sejauh ini.

Abg tau hidup adek ga selalu mudah.
Abg tau ada banyak luka
yang adek simpan sendiri.

Ada banyak malam
dimana adek pura-pura kuat,
padahal hati adek lagi hancur banget.

Dan jujur...
setiap kali adek cerita tentang rasa sakit adek,
hati abg ikut sakit.

Abg cuma ga pernah bilang.

Kalau saja abg bisa,
abg pengen ngambil semua sedih adek,
semua kecewa adek,
dan semua air mata adek.

Biar adek ga perlu ngerasain itu lagi.

Karena buat abg,
senyum adek itu...
lebih berharga dari apapun.

Adek tau hal paling menyakitkan buat abg apa?

Bukan kehilangan.

Tapi...
kalau suatu hari nanti
adek ngerasa sendirian,
padahal abg masih di sini
yang selalu sayang sama adek.

Kalau nanti hidup adek berat,
tolong jangan benci diri adek sendiri ya sayang.

Karena di mata abg,
adek itu perempuan hebat.

Perempuan yang udah berjuang sejauh ini
meski berkali-kali dihancurkan keadaan.

Dan abg bangga banget sama adek.

Bangga...
karena adek masih tetap hidup sampai hari ini.

Kalau suatu saat nanti
kita benar-benar dipisahkan keadaan...

abg cuma mau adek inget satu hal.

Pernah ada seseorang
yang mencintai adek
lebih dari dirinya sendiri.

Seseorang yang selalu menaruh nama adek
di tempat paling aman dalam hatinya.

Dan meskipun waktu berubah,
meskipun keadaan memaksa semuanya berubah...

cinta itu mungkin ga akan pernah benar-benar hilang.

tapi abg ga mau semua itu terjadi, abg mau adek dan abg tetap sama sama terus.
lewati semua nya sama sama sampai allah mengizin kan kita bersama hingga ke jannahnya.
dan untuk kali ini abg berharap untuk menentang takdir agar abg dan adek bisa utk sama sama terus.
gda lagi yang namanya berpisah, karna di hubungan kali ini abg bener bener berharap untuk bisa sampe tua dan maut yang memisahkan.

Selamat ulang tahun ya,
kesayangan nya abg ❤️

Tolong hidup lebih lama lagi ya sayang...

karena abg masih ingin
melihat senyum adek
lebih banyak lagi dan lewati semua ini bareng sama adek.

I'm Proud Of You,
Andina Putri, S.Gz ❤️`;

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
