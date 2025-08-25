const menu = document.getElementById("menu");
const game = document.getElementById("game");
const alphabetSection = document.getElementById("alphabet");
const numbersSection = document.getElementById("numbers");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const alphabetContent = document.getElementById("alphabet-content");
const numbersContent = document.getElementById("numbers-content");

let currentLevel = "basic";
let currentQuestion = {};
let score = 0;

function startGame(level) {
  currentLevel = level;
  menu.classList.add("hidden");
  alphabetSection.classList.add("hidden");
  numbersSection.classList.add("hidden");
  game.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const levelWords = words[currentLevel];
  currentQuestion = levelWords[Math.floor(Math.random() * levelWords.length)];
  questionEl.textContent = `Traduce: ${currentQuestion.word}`;

  const options = [currentQuestion.translation];
  while (options.length < 4) {
    const randomWord = levelWords[Math.floor(Math.random() * levelWords.length)].translation;
    if (!options.includes(randomWord)) options.push(randomWord);
  }

  options.sort(() => Math.random() - 0.5);

  optionsEl.innerHTML = "";
  options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === currentQuestion.translation) {
    alert("✅ Correcto!");
    score++;
  } else {
    alert(`❌ Incorrecto. La respuesta era: ${currentQuestion.translation}`);
  }
  showQuestion();
}

function returnToMenu() {
  menu.classList.remove("hidden");
  game.classList.add("hidden");
  alphabetSection.classList.add("hidden");
  numbersSection.classList.add("hidden");
}

// Mostrar Abecedario
function showAlphabet() {
  menu.classList.add("hidden");
  alphabetSection.classList.remove("hidden");
  numbersSection.classList.add("hidden");
  game.classList.add("hidden");

  const alphabet = [
    { en: "A", es: "A" }, { en: "B", es: "Be" }, { en: "C", es: "Ce" },
    { en: "D", es: "De" }, { en: "E", es: "E" }, { en: "F", es: "Efe" },
    { en: "G", es: "Ge" }, { en: "H", es: "Hache" }, { en: "I", es: "I" },
    { en: "J", es: "Jota" }, { en: "K", es: "Ka" }, { en: "L", es: "Ele" },
    { en: "M", es: "Eme" }, { en: "N", es: "Ene" }, { en: "Ñ", es: "Eñe" },
    { en: "O", es: "O" }, { en: "P", es: "Pe" }, { en: "Q", es: "Cu" },
    { en: "R", es: "Erre" }, { en: "S", es: "Ese" }, { en: "T", es: "Te" },
    { en: "U", es: "U" }, { en: "V", es: "Uve" }, { en: "W", es: "Doble U" },
    { en: "X", es: "Equis" }, { en: "Y", es: "I griega" }, { en: "Z", es: "Zeta" }
  ];

  alphabetContent.innerHTML = "";
  alphabet.forEach(letter => {
    alphabetContent.innerHTML += `
      <div class="letter-card">
        <span class="big">${letter.en}</span>
        <span class="spanish-text">${letter.es}</span>
      </div>`;
  });
}

// Mostrar Números 1-100
function showNumbers() {
  menu.classList.add("hidden");
  numbersSection.classList.remove("hidden");
  alphabetSection.classList.add("hidden");
  game.classList.add("hidden");

  const numbers = {
    1:{en:"One",es:"Uno"},2:{en:"Two",es:"Dos"},3:{en:"Three",es:"Tres"},
    4:{en:"Four",es:"Cuatro"},5:{en:"Five",es:"Cinco"},6:{en:"Six",es:"Seis"},
    7:{en:"Seven",es:"Siete"},8:{en:"Eight",es:"Ocho"},9:{en:"Nine",es:"Nueve"},
    10:{en:"Ten",es:"Diez"},11:{en:"Eleven",es:"Once"},12:{en:"Twelve",es:"Doce"},
    13:{en:"Thirteen",es:"Trece"},14:{en:"Fourteen",es:"Catorce"},15:{en:"Fifteen",es:"Quince"},
    16:{en:"Sixteen",es:"Dieciséis"},17:{en:"Seventeen",es:"Diecisiete"},18:{en:"Eighteen",es:"Dieciocho"},
    19:{en:"Nineteen",es:"Diecinueve"},20:{en:"Twenty",es:"Veinte"},
    30:{en:"Thirty",es:"Treinta"},40:{en:"Forty",es:"Cuarenta"},
    50:{en:"Fifty",es:"Cincuenta"},60:{en:"Sixty",es:"Sesenta"},
    70:{en:"Seventy",es:"Setenta"},80:{en:"Eighty",es:"Ochenta"},
    90:{en:"Ninety",es:"Noventa"},100:{en:"One hundred",es:"Cien"}
  };

  numbersContent.innerHTML = "";
  for (let i = 1; i <= 100; i++) {
    let en = "", es = "";

    if (numbers[i]) {
      en = numbers[i].en;
      es = numbers[i].es;
    } else if (i < 100) {
      const tens = Math.floor(i / 10) * 10;
      const ones = i % 10;
      en = `${numbers[tens].en}-${numbers[ones].en}`;
      es = `${numbers[tens].es} y ${numbers[ones].es}`;
    }

    numbersContent.innerHTML += `
      <div class="number-card">
        <span class="big">${i}</span>
        <span class="english-text">${en}</span>
        <span class="spanish-text">${es}</span>
      </div>`;
  }
}
