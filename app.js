const questions = [
  {
    image: "assets/display/question-1.jpg",
    alt: "Q1：剛到法國交換，明天要去辦學生證，但信件裡的地點和流程看不太懂",
    mapping: { A: "deer", B: "sheep", C: "raccoon", D: "lion" },
  },
  {
    image: "assets/display/question-2.jpg",
    alt: "Q2：在校園迷路，手機地圖也看不懂建築名稱",
    mapping: { A: "raccoon", B: "lion", C: "deer", D: "sheep" },
  },
  {
    image: "assets/display/question-3.jpg",
    alt: "Q3：收到一封行政通知，但裡面有很多文件和期限",
    mapping: { A: "sheep", B: "deer", C: "lion", D: "raccoon" },
  },
  {
    image: "assets/display/question-4.jpg",
    alt: "Q4：不知道該找國際處、系辦還是學生事務單位",
    mapping: { A: "lion", B: "raccoon", C: "deer", D: "sheep" },
  },
  {
    image: "assets/display/question-5.jpg",
    alt: "Q5：在陌生國家生活一週後，最希望有人給你的幫助",
    mapping: { A: "sheep", B: "lion", C: "deer", D: "raccoon" },
  },
];

const DESIGN_SIZE = { width: 1152, height: 2048 };

const HIT_AREAS = {
  cover: {
    startButton: { x: 170, y: 1728, width: 812, height: 128 },
  },
  question1: {
    A: { x: 112, y: 1198, width: 930, height: 118 },
    B: { x: 112, y: 1350, width: 930, height: 118 },
    C: { x: 112, y: 1502, width: 930, height: 118 },
    D: { x: 112, y: 1654, width: 930, height: 118 },
  },
  question2: {
    A: { x: 110, y: 1180, width: 932, height: 116 },
    B: { x: 110, y: 1332, width: 932, height: 116 },
    C: { x: 110, y: 1484, width: 932, height: 116 },
    D: { x: 110, y: 1636, width: 932, height: 116 },
  },
  question3: {
    A: { x: 110, y: 1212, width: 932, height: 116 },
    B: { x: 110, y: 1364, width: 932, height: 116 },
    C: { x: 110, y: 1516, width: 932, height: 116 },
    D: { x: 110, y: 1668, width: 932, height: 116 },
  },
  question4: {
    A: { x: 110, y: 1194, width: 932, height: 116 },
    B: { x: 110, y: 1346, width: 932, height: 116 },
    C: { x: 110, y: 1498, width: 932, height: 116 },
    D: { x: 110, y: 1650, width: 932, height: 116 },
  },
  question5: {
    A: { x: 110, y: 1188, width: 932, height: 116 },
    B: { x: 110, y: 1340, width: 932, height: 116 },
    C: { x: 110, y: 1492, width: 932, height: 116 },
    D: { x: 110, y: 1644, width: 932, height: 116 },
  },
};

const results = {
  deer: {
    name: "焦慮小鹿型",
    buddy: "黃金獵犬型",
    image: "assets/display/result-deer.jpg",
    download: "assets/result-deer.png",
  },
  sheep: {
    name: "迷路小羊型",
    buddy: "指路狐狸型",
    image: "assets/display/result-sheep.jpg",
    download: "assets/result-sheep.png",
  },
  raccoon: {
    name: "資訊浣熊型",
    buddy: "貓頭鷹型",
    image: "assets/display/result-raccoon.jpg",
    download: "assets/result-raccoon.png",
  },
  lion: {
    name: "勇敢獅子型",
    buddy: "交際海豚型",
    image: "assets/display/result-lion.jpg",
    download: "assets/result-lion.png",
  },
};

const screens = {
  intro: document.getElementById("introScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen"),
};

const coverHotspots = document.getElementById("coverHotspots");
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
const resultPriority = ["deer", "sheep", "raccoon", "lion"];
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

renderCoverHotspot();

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
  link.href = result.download;
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

function renderCoverHotspot() {
  coverHotspots.innerHTML = "";
  const button = document.createElement("button");
  button.className = "cover-start";
  button.type = "button";
  button.setAttribute("aria-label", "開始測驗");
  applyHitArea(button, HIT_AREAS.cover.startButton);
  button.addEventListener("click", () => {
    startAudio();
    state.current = 0;
    showScreen("quiz");
    renderQuestion();
  });
  coverHotspots.appendChild(button);
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
    applyHitArea(button, HIT_AREAS[`question${state.current + 1}`][key]);
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

function applyHitArea(element, area) {
  element.style.left = `${(area.x / DESIGN_SIZE.width) * 100}%`;
  element.style.top = `${(area.y / DESIGN_SIZE.height) * 100}%`;
  element.style.width = `${(area.width / DESIGN_SIZE.width) * 100}%`;
  element.style.height = `${(area.height / DESIGN_SIZE.height) * 100}%`;
}

function calculateResult() {
  const scores = { deer: 0, sheep: 0, raccoon: 0, lion: 0 };
  state.answers.forEach((answer, index) => {
    const type = questions[index].mapping[answer];
    scores[type] += 1;
  });

  const max = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter((type) => scores[type] === max);
  if (tied.length === 1) return tied[0];

  const q5Type = questions[4].mapping[state.answers[4]];
  if (tied.includes(q5Type)) return q5Type;

  const q1Type = questions[0].mapping[state.answers[0]];
  if (tied.includes(q1Type)) return q1Type;

  return resultPriority.find((type) => tied.includes(type));
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
