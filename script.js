let surpriseShown = false;
let catPartyStarted = false;
const surpriseEmojis = ["😺", "😸", "😹", "😻", "😼", "😽"];
const catEmojis = ["😺", "😸", "😹", "😻", "😼", "😽"]; // Added missing catEmojis array

function startBirthday() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    catTalk("Jangan lupa masukkan namamu dulu! 😺");
    return;
  }

  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("birthdayScreen").style.display = "block";
  document.getElementById("nameDisplay").textContent = name;
  setTimeout(
    () => catTalk("Selamat ulang tahun! Klik aku untuk pesta! 🎉"),
    100
  ); // Added timeout to ensure catTalk appears
}

function celebrate() {
  const cake = (document.getElementById("cake").textContent = "🍰");
  createFireworks();
  if (cake === "🍰") {
    catTalk("Wah, kuenya enak! 😋");
    return;
  }
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createStar();
    }, i * 100);
  }
}

function catTalk(message) {
  const catMessage = document.getElementById("catMessage");
  catMessage.textContent = message;
  catMessage.style.display = "block";

  setTimeout(() => {
    catMessage.style.display = "none";
  }, 3000);
}

function catParty() {
  if (!catPartyStarted) {
    catPartyStarted = true;
    document.getElementById("birthdayCat").classList.add("cat-dance");
    catTalk("Ayo berpesta! 🎉");

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createCatParty();
      }, i * 500);
    }
  }
}

function createCatParty() {
  const cat = document.createElement("div");
  cat.className = "cat-party";
  cat.textContent = catEmojis[Math.floor(Math.random() * catEmojis.length)];
  cat.style.left = Math.random() * window.innerWidth + "px";
  cat.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(cat);

  setTimeout(() => {
    cat.remove();
  }, 3000);
}

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.textContent = "⭐";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = "-20px";
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

function showSurprise() {
  if (!surpriseShown) {
    surpriseShown = true;
    document.getElementById("surpriseBox").style.display = "none";
    catTalk("Yay! Hadiah! 🎁");

    for (let i = 0; i < surpriseEmojis.length; i++) {
      const surprise = document.createElement("div");
      surprise.className = "surprise-element";
      surprise.textContent = surpriseEmojis[i];
      surprise.style.left = Math.random() * window.innerWidth + "px";
      surprise.style.top = Math.random() * window.innerHeight + "px";
      surprise.style.display = "block";
      document.body.appendChild(surprise);
    }

    createFireworks();
  }
}

function createFireworks() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.className = "star";
      firework.textContent = "✨";
      firework.style.left = Math.random() * window.innerWidth + "px";
      firework.style.fontSize = "30px";
      document.getElementById("fireworks").appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 2000);
    }, i * 200);
  }
}
