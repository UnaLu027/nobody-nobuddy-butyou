const questions = [
  {
    image: "assets/question-1.png",
    alt: "Q1：剛到法國交換，明天要去辦學生證，但信件裡的地點和流程看不太懂",
  },
  {
    image: "assets/question-2.png",
    alt: "Q2：在校園迷路，手機地圖也看不懂建築名稱",
  },
  {
    image: "assets/question-3.png",
    alt: "Q3：收到一封行政通知，但裡面有很多文件和期限",
  },
  {
    image: "assets/question-4.png",
    alt: "Q4：不知道該找國際處、系辦還是學生事務單位",
  },
  {
    image: "assets/question-5.png",
    alt: "Q5：在陌生國家生活一週後，最希望有人給你的幫助",
  },
];

const results = {
  A: {
    name: "焦慮小鹿型",
    image: "assets/result-A.png",
  },
  B: {
    name: "迷路小羊型",
    image: "assets/result-B.png",
  },
  C: {
    name: "資訊浣熊型",
    image: "assets/result-C.png",
  },
  D: {
    name: "勇敢獅子型",
    image: "assets/result-D.png",
  },
};

const screens = {
  intro: document.getElementById("introScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen"),
};

const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const downloadButton = document.getElementById("downloadButton");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");
const questionImage = document.getElementById("questionImage");
const hotspots = document.getElementById("hotspots");
const resultImage = document.getElementById("resultImage");
const bgMusic = document.getElementById("bgMusic");

const answerKeys = ["A", "B", "C", "D"];
const state = {
  current: 0,
  answers: [],
  resultKey: null,
};

[...questions.map((question) => question.image), ...Object.values(results).map((result) => result.image)].forEach((src) => {
  const image = new Image();
  image.src = src;
});

let audioContext;
let masterGain;
let melodyTimer;
let melodyStep = 0;
let isMuted = false;
let usingAudioFile = false;

startButton.addEventListener("click", () => {
  startAudio();
  state.current = 0;
  showScreen("quiz");
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!state.answers[state.current]) return;
  if (state.current === questions.length - 1) {
    state.resultKey = calculateResult();
    renderResult();
    showScreen("result");
    return;
  }
  state.current += 1;
  renderQuestion();
});

restartButton.addEventListener("click", () => {
  state.current = 0;
  state.answers = [];
  state.resultKey = null;
  showScreen("intro");
});

downloadButton.addEventListener("click", () => {
  const result = results[state.resultKey];
  const link = document.createElement("a");
  link.href = result.image;
  link.download = `nobody-no-buddy-but-you-${result.name}.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
});

soundToggle.addEventListener("click", () => {
  if (usingAudioFile) {
    isMuted = !isMuted;
    bgMusic.muted = isMuted;
    soundIcon.textContent = isMuted ? "×" : "♪";
    if (!isMuted) bgMusic.play();
    return;
  }

  if (!audioContext) {
    startAudio();
    return;
  }
  isMuted = !isMuted;
  setVolume(isMuted ? 0 : 0.2);
  soundIcon.textContent = isMuted ? "×" : "♪";
});

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
}

function renderQuestion() {
  const question = questions[state.current];
  questionImage.src = question.image;
  questionImage.alt = question.alt;
  hotspots.innerHTML = "";

  answerKeys.forEach((key) => {
    const button = document.createElement("button");
    button.className = "answer-hotspot";
    button.type = "button";
    button.setAttribute("aria-label", `選擇 ${key}`);
    if (state.answers[state.current] === key) button.classList.add("is-selected");
    button.addEventListener("click", () => {
      state.answers[state.current] = key;
      renderQuestion();
    });
    hotspots.appendChild(button);
  });

  backButton.disabled = state.current === 0;
  backButton.style.opacity = state.current === 0 ? "0.42" : "1";
  nextButton.textContent = state.current === questions.length - 1 ? "看結果" : "下一題";
  nextButton.disabled = !state.answers[state.current];
  nextButton.style.opacity = state.answers[state.current] ? "1" : "0.5";
}

function calculateResult() {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  state.answers.forEach((answer) => {
    counts[answer] += 1;
  });
  const max = Math.max(...Object.values(counts));
  const tied = Object.keys(counts).filter((key) => counts[key] === max);
  return tied[Math.floor(Math.random() * tied.length)];
}

function renderResult() {
  const result = results[state.resultKey];
  resultImage.src = result.image;
  resultImage.alt = `你的測驗結果：${result.name}`;
}

function startAudio() {
  if (usingAudioFile) {
    bgMusic.play();
    return;
  }

  if (bgMusic && bgMusic.dataset.available !== "false") {
    bgMusic.volume = 0.46;
    bgMusic.play()
      .then(() => {
        usingAudioFile = true;
        soundIcon.textContent = "♪";
      })
      .catch(() => {
        startGeneratedAudio();
      });
    return;
  }

  startGeneratedAudio();
}

bgMusic.addEventListener("canplaythrough", () => {
  bgMusic.dataset.available = "true";
}, { once: true });

bgMusic.addEventListener("error", () => {
  bgMusic.dataset.available = "false";
});

function startGeneratedAudio() {
  if (audioContext) {
    audioContext.resume();
    startMelodyLoop();
    return;
  }
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;

  audioContext = new AudioCtor();
  masterGain = audioContext.createGain();
  masterGain.gain.setValueAtTime(0, audioContext.currentTime);
  masterGain.connect(audioContext.destination);

  [261.63, 329.63, 392].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 620;
    gain.gain.value = 0.012;
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    oscillator.start();
  });

  startMelodyLoop();
  setVolume(0.2);
}

function setVolume(value) {
  if (!masterGain || !audioContext) return;
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.linearRampToValueAtTime(value, audioContext.currentTime + 0.55);
}

function startMelodyLoop() {
  if (!audioContext || melodyTimer) return;
  const melody = [
    659.25, 0, 783.99, 0, 880, 783.99, 0, 659.25,
    587.33, 0, 659.25, 0, 783.99, 0, 659.25, 523.25,
    587.33, 0, 698.46, 0, 783.99, 880, 0, 783.99,
    659.25, 0, 587.33, 0, 659.25, 0, 523.25, 0,
    523.25, 0, 659.25, 0, 698.46, 659.25, 0, 587.33,
    523.25, 0, 587.33, 0, 659.25, 783.99, 0, 698.46,
    659.25, 0, 783.99, 0, 987.77, 880, 0, 783.99,
    659.25, 0, 587.33, 0, 523.25, 0, 0, 0,
  ];
  const bass = [261.63, 293.66, 329.63, 392, 349.23, 329.63, 293.66, 261.63];
  melodyTimer = window.setInterval(() => {
    if (isMuted) return;
    const note = melody[melodyStep % melody.length];
    const phrasePosition = melodyStep % 16;
    if (note) playTone(note, phrasePosition < 8 ? 0.052 : 0.044, 0.34, "triangle");
    if (melodyStep % 8 === 0) playTone(bass[Math.floor(melodyStep / 8) % bass.length], 0.032, 1.1, "sine");
    if (melodyStep % 16 === 10) playTone(note ? note * 1.5 : 783.99, 0.026, 0.18, "sine");
    melodyStep += 1;
  }, 960);
}

function playTone(frequency, volume, duration, type = "sine") {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(type === "triangle" ? 1450 : 980, now);
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}
