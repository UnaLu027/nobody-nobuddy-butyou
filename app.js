const questions = [
  {
    text: "你剛到法國交換，明天要去辦學生證，但信件裡的地點和流程你看不太懂，你會？",
    scene: {
      bg: "#ead49a",
      title: "收到一封看不太懂的行政信件，你會怎麼開始？",
      card: "學生證、地點、流程、明天以前",
      motif: "paper",
    },
    options: [
      ["A", "很希望有人可以陪我確認一次流程"],
      ["B", "先打開地圖，自己研究地點在哪裡"],
      ["C", "把信件內容整理成待辦清單"],
      ["D", "直接找附近同學或辦公室問清楚"],
    ],
    order: [0, 2, 3, 1],
  },
  {
    text: "你在校園迷路，手機地圖也看不懂建築名稱，你會？",
    scene: {
      bg: "#cfe2ae",
      title: "建築名稱、入口和樓層都陌生，你會怎麼找路？",
      card: "Campus Map ？  Building B ？",
      motif: "map",
    },
    options: [
      ["A", "有點慌，希望有人可以帶我過去"],
      ["B", "慢慢看地圖和路標，自己找路"],
      ["C", "先確認建築名稱、樓層、房號再行動"],
      ["D", "直接找路人問：「請問這裡怎麼走？」"],
    ],
    order: [1, 3, 0, 2],
  },
  {
    text: "你收到一封行政通知，但裡面有很多文件和期限，你第一反應是？",
    scene: {
      bg: "#d9d1e4",
      title: "文件、期限和附件一起出現，你第一眼會看哪裡？",
      card: "Deadline / Form / Upload / Signature",
      motif: "paper",
    },
    options: [
      ["A", "有點焦慮，希望有人幫我確認哪些是重點"],
      ["B", "想知道這些文件要去哪裡交"],
      ["C", "想把所有文件和期限整理成表格"],
      ["D", "想直接寄信或去辦公室問清楚"],
    ],
    order: [2, 0, 1, 3],
  },
  {
    text: "你發現自己不知道該找國際處、系辦還是學生事務單位，你會？",
    scene: {
      bg: "#c9e6df",
      title: "不知道該問哪個單位時，你會怎麼開口？",
      card: "International Office / Department / Student Affairs",
      motif: "sign",
    },
    options: [
      ["A", "希望有個熟悉的人告訴我「沒關係，我陪你問」"],
      ["B", "先查校園地圖和各單位位置"],
      ["C", "先查每個單位的業務範圍，判斷誰負責"],
      ["D", "先去其中一個單位問，再請他們轉介"],
    ],
    order: [3, 1, 2, 0],
  },
  {
    text: "在陌生國家生活一週後，你最希望有人給你的幫助是？",
    scene: {
      bg: "#f1d5c3",
      title: "生活進入第一週，你最想收到哪一種支持？",
      card: "一點方向、一點確認、一點安心",
      motif: "chat",
    },
    options: [
      ["A", "主動關心我最近適不適應"],
      ["B", "帶我走一次校園重要地點"],
      ["C", "給我一份清楚的生活與行政攻略"],
      ["D", "介紹我可以問問題的人或群組"],
    ],
    order: [1, 0, 3, 2],
  },
];

const profiles = {
  A: {
    key: "A",
    resultName: "焦慮小鹿型",
    buddyName: "黃金獵犬型學伴",
    theme: "#c9897b",
    bg: "#ead6c4",
    accent: "#d9b866",
    cardLine: "主動的一句話，可能就能減少很多焦慮。",
    abroad:
      "陌生環境容易讓你感到不安。比起一次得到所有答案，你更需要有人陪你確認流程、主動帶你熟悉環境，並告訴你「沒關係」。",
    needs: ["有人陪你確認流程", "有人主動帶你熟悉環境", "有人告訴你「沒關係」"],
    buddy:
      "你知道主動的一句話可能就能減少很多焦慮。你可以主動關心、陪國際生確認方向，讓他知道自己不是一個人。",
  },
  B: {
    key: "B",
    resultName: "迷路小羊型",
    buddyName: "指路狐狸型學伴",
    theme: "#8aa76e",
    bg: "#dfecc4",
    accent: "#d9b866",
    cardLine: "對熟悉的人來說只是走路，對陌生的人來說卻是迷路。",
    abroad:
      "你不是不願意自己處理問題，只是當地圖、建築名稱和樓層資訊都不熟悉時，你會很需要一個人幫你指出方向。",
    needs: ["有人告訴你地點在哪裡", "有人陪你走一次路線", "有人提醒你哪個入口比較好找"],
    buddy:
      "你知道對熟悉的人來說只是走路，對陌生的人來說卻是迷路。你可以帶國際生認識重要地點、說明辦公室位置，協助他熟悉校園空間。",
  },
  C: {
    key: "C",
    resultName: "資訊浣熊型",
    buddyName: "貓頭鷹型學伴",
    theme: "#8f85a6",
    bg: "#ded8e8",
    accent: "#6f9ed8",
    cardLine: "資訊不是越多越好，而是要讓人知道下一步怎麼做。",
    abroad:
      "你其實有能力自己解決問題，但你需要清楚、完整、整理過的資訊。如果資料分散在信件、網站和不同單位之間，你會很想把它整理成清單。",
    needs: ["清楚的步驟", "文件檢查表", "有人幫你確認下一步"],
    buddy:
      "你知道資訊不是越多越好，而是要讓人知道下一步怎麼做。你可以幫國際生整理流程、確認文件，把複雜公告轉成簡單步驟。",
  },
  D: {
    key: "D",
    resultName: "勇敢獅子型",
    buddyName: "海豚型學伴",
    theme: "#6babb0",
    bg: "#cde9e6",
    accent: "#d9b866",
    cardLine: "很多時候，困難不是沒有答案，而是不知道該怎麼開口。",
    abroad:
      "你願意嘗試，也願意主動問人。但在陌生語言和制度下，最困難的是不知道該問誰、怎麼問、問錯會不會尷尬。",
    needs: ["有人告訴你可以問哪個單位", "有人幫你確認問題怎麼說", "有人陪你降低開口壓力"],
    buddy:
      "你知道很多時候困難不是沒有答案，而是不知道該怎麼開口。你可以幫國際生找到對的人、陪他詢問，協助他把需求表達清楚。",
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
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const questionTitle = document.getElementById("questionTitle");
const optionList = document.getElementById("optionList");
const questionVisual = document.getElementById("questionVisual");
const resultVisual = document.getElementById("resultVisual");
const sharePreview = document.getElementById("sharePreview");

const state = {
  current: 0,
  answers: [],
  resultKey: null,
};

let audioContext;
let masterGain;
let melodyTimer;
let melodyStep = 0;
let isMuted = false;

startButton.addEventListener("click", () => {
  startAudio();
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
  const canvas = createResultCanvas(profiles[state.resultKey]);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nobody-no-buddy-but-you-result.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
});

soundToggle.addEventListener("click", () => {
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
  questionCounter.textContent = `${state.current + 1} / ${questions.length}`;
  progressBar.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  questionTitle.textContent = question.text;
  questionVisual.style.setProperty("--scene-bg", question.scene.bg);
  questionVisual.innerHTML = sceneTemplate(question.scene);
  optionList.innerHTML = "";

  question.order.map((index) => question.options[index]).forEach(([key, label], index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.dataset.key = key;
    if (state.answers[state.current] === key) button.classList.add("is-selected");
    button.innerHTML = `
      <span class="option-letter">${index + 1}</span>
      <span class="option-text">${label}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[state.current] = key;
      renderQuestion();
    });
    optionList.appendChild(button);
  });

  backButton.disabled = state.current === 0;
  backButton.style.opacity = state.current === 0 ? "0.42" : "1";
  nextButton.textContent = state.current === questions.length - 1 ? "看結果" : "下一題";
  nextButton.disabled = !state.answers[state.current];
  nextButton.style.opacity = state.answers[state.current] ? "1" : "0.5";
}

function sceneTemplate(scene) {
  const motif = {
    paper: '<div class="scene-paper"></div><div class="scene-building"></div>',
    map: '<div class="scene-map"></div><div class="scene-sign"></div>',
    sign: '<div class="scene-sign"></div><div class="scene-building"></div>',
    chat: '<div class="scene-chat"></div><div class="scene-map"></div>',
  }[scene.motif];

  return `
    <div class="scene">
      <p class="scene-title">${scene.title}</p>
      ${motif}
      <div class="scene-floor"></div>
      <div class="scene-character"><span class="scene-smile"></span></div>
      <div class="scene-card">${scene.card}</div>
    </div>
  `;
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
  const profile = profiles[state.resultKey];
  document.documentElement.style.setProperty("--profile-color", profile.theme);
  resultVisual.style.setProperty("--result-bg", profile.bg);
  resultVisual.innerHTML = sceneTemplate({
    bg: profile.bg,
    title: "",
    card: "",
    motif: profile.key === "B" ? "map" : profile.key === "C" ? "paper" : profile.key === "D" ? "chat" : "sign",
  });
  document.getElementById("resultTitle").textContent = profile.resultName;
  document.getElementById("resultSubtitle").textContent = `你適合成為：${profile.buddyName}`;
  document.getElementById("abroadText").textContent = profile.abroad;
  document.getElementById("buddyText").textContent = profile.buddy;

  const needsList = document.getElementById("needsList");
  needsList.innerHTML = "";
  profile.needs.forEach((need) => {
    const item = document.createElement("li");
    item.textContent = need;
    needsList.appendChild(item);
  });

  sharePreview.src = createResultCanvas(profile).toDataURL("image/png");
}

function startAudio() {
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

function createResultCanvas(profile) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  drawResultBackground(ctx, profile);
  drawClipboard(ctx, 118, 142, 844, 1570, profile);
  drawCanvasMascot(ctx, profile, 540, 500, 1.42);
  drawResultText(ctx, profile);
  return canvas;
}

function drawResultBackground(ctx, profile) {
  ctx.fillStyle = profile.bg;
  ctx.fillRect(0, 0, 1080, 1920);
  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(1080, 0);
  ctx.lineTo(1080, 280);
  ctx.bezierCurveTo(790, 200, 560, 360, 0, 260);
  ctx.closePath();
  ctx.fill();
  drawBlob(ctx, -130, 1260, 430, "#ffffff", 0.22);
  drawBlob(ctx, 820, 980, 430, profile.accent, 0.22);
  drawDots(ctx, profile);
}

function drawClipboard(ctx, x, y, width, height, profile) {
  ctx.fillStyle = "rgba(255,255,255,0.78)";
  roundRect(ctx, x, y, width, height, 18);
  ctx.fill();
  ctx.strokeStyle = "rgba(34,35,41,0.12)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#222329";
  roundRect(ctx, x + width / 2 - 120, y - 18, 240, 34, 9);
  ctx.fill();
  ctx.strokeStyle = "#222329";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(x + width / 2 - 95, y + 6);
  ctx.quadraticCurveTo(x + width / 2 - 95, y + 64, x + width / 2 - 48, y + 64);
  ctx.lineTo(x + width / 2 + 48, y + 64);
  ctx.quadraticCurveTo(x + width / 2 + 95, y + 64, x + width / 2 + 95, y + 6);
  ctx.stroke();

  ctx.fillStyle = profile.theme;
  roundRect(ctx, x + 58, y + 1170, width - 116, 98, 24);
  ctx.fill();
}

function drawResultText(ctx, profile) {
  ctx.textAlign = "center";
  ctx.fillStyle = "#222329";
  ctx.font = "900 30px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText("Nobody, No Buddy, But You", 540, 238);
  ctx.font = "900 42px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText("辦不到？伴得到！", 540, 292);

  ctx.fillStyle = profile.theme;
  ctx.font = "900 82px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText(`你是 ${profile.resultName}`, 540, 740);

  ctx.fillStyle = "#222329";
  ctx.font = "900 48px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText(profile.buddyName, 540, 810);

  drawSmallLabel(ctx, 200, 870, 260, 46, profile.theme, "在國外的你");
  drawSmallLabel(ctx, 620, 870, 260, 46, profile.theme, "你更需要");
  drawInfoBox(ctx, 178, 940, 340, 250, profile.abroad, 27, 6);
  drawNeedsBox(ctx, 562, 940, 340, 250, profile);

  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 34px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText("你能給出的陪伴", 540, 1358);
  ctx.fillStyle = "#333640";
  drawWrappedText(ctx, profile.buddy, 184, 1436, 712, 32, 1.52, "#333640", 760, 4);

  ctx.fillStyle = "rgba(65,109,163,0.1)";
  roundRect(ctx, 184, 1630, 712, 58, 20);
  ctx.fill();
  ctx.fillStyle = "#416da3";
  ctx.font = "900 27px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("活動密碼：604", 540, 1668);

  ctx.fillStyle = "rgba(34,35,41,0.54)";
  ctx.font = "700 24px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.fillText("那樣的溫柔與支持，其實你也做得到。", 540, 1772);
}

function drawCanvasMascot(ctx, profile, x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = "rgba(34,35,41,0.1)";
  ctx.beginPath();
  ctx.ellipse(0, 138, 140, 24, 0, 0, Math.PI * 2);
  ctx.fill();

  if (profile.key === "D") {
    ctx.fillStyle = "#d89a4b";
    ctx.beginPath();
    ctx.ellipse(0, 0, 122, 108, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = profile.key === "C" ? "#dadde2" : profile.key === "B" ? "#fffdf5" : "#fff7dc";
  ctx.beginPath();
  ctx.ellipse(0, 4, 98, 84, 0, 0, Math.PI * 2);
  ctx.fill();

  if (profile.key === "A") drawDeerDetails(ctx);
  if (profile.key === "B") drawSheepDetails(ctx);
  if (profile.key === "C") drawRaccoonDetails(ctx);
  if (profile.key === "D") drawLionDetails(ctx);

  ctx.fillStyle = "#222329";
  ctx.beginPath();
  ctx.arc(-26, -8, 5, 0, Math.PI * 2);
  ctx.arc(26, -8, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#222329";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 8, 15, 0.15, Math.PI - 0.15);
  ctx.stroke();

  ctx.fillStyle = profile.theme;
  roundRect(ctx, -74, 82, 148, 58, 22);
  ctx.fill();
  ctx.restore();
}

function drawDeerDetails(ctx) {
  ctx.strokeStyle = "#9e6d57";
  ctx.lineWidth = 7;
  [-42, 42].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(side, -72);
    ctx.lineTo(side * 1.15, -112);
    ctx.moveTo(side * 1.08, -92);
    ctx.lineTo(side * 1.45, -106);
    ctx.stroke();
  });
  ctx.fillStyle = "#e7b7a6";
  ctx.beginPath();
  ctx.arc(-60, 18, 10, 0, Math.PI * 2);
  ctx.arc(60, 18, 10, 0, Math.PI * 2);
  ctx.fill();
}

function drawSheepDetails(ctx) {
  ctx.fillStyle = "#fff7ee";
  [-70, -42, -14, 14, 42, 70].forEach((x) => {
    ctx.beginPath();
    ctx.arc(x, -72, 28, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "#e8d8c8";
  ctx.beginPath();
  ctx.ellipse(-92, -6, 22, 34, -0.35, 0, Math.PI * 2);
  ctx.ellipse(92, -6, 22, 34, 0.35, 0, Math.PI * 2);
  ctx.fill();
}

function drawRaccoonDetails(ctx) {
  ctx.fillStyle = "#68707b";
  ctx.beginPath();
  ctx.ellipse(-28, -10, 34, 22, -0.18, 0, Math.PI * 2);
  ctx.ellipse(28, -10, 34, 22, 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#b8bec7";
  ctx.beginPath();
  ctx.moveTo(-64, -64);
  ctx.lineTo(-28, -98);
  ctx.lineTo(-18, -52);
  ctx.closePath();
  ctx.moveTo(64, -64);
  ctx.lineTo(28, -98);
  ctx.lineTo(18, -52);
  ctx.closePath();
  ctx.fill();
}

function drawLionDetails(ctx) {
  ctx.fillStyle = "#fff4d3";
  ctx.beginPath();
  ctx.ellipse(0, 8, 80, 66, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#d89a4b";
  ctx.beginPath();
  ctx.arc(-72, -20, 20, 0, Math.PI * 2);
  ctx.arc(72, -20, 20, 0, Math.PI * 2);
  ctx.fill();
}

function drawSmallLabel(ctx, x, y, width, height, color, text) {
  ctx.fillStyle = color;
  roundRect(ctx, x, y, width, height, 12);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 25px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text, x + width / 2, y + 31);
}

function drawInfoBox(ctx, x, y, width, height, text, fontSize, maxLines) {
  ctx.fillStyle = "rgba(245,239,217,0.92)";
  roundRect(ctx, x, y, width, height, 18);
  ctx.fill();
  drawWrappedText(ctx, text, x + 26, y + 46, width - 52, fontSize, 1.48, "#333640", 720, maxLines);
}

function drawNeedsBox(ctx, x, y, width, height, profile) {
  ctx.fillStyle = "rgba(245,239,217,0.92)";
  roundRect(ctx, x, y, width, height, 18);
  ctx.fill();
  profile.needs.forEach((need, index) => {
    ctx.fillStyle = profile.theme;
    ctx.beginPath();
    ctx.arc(x + 34, y + 52 + index * 58, 9, 0, Math.PI * 2);
    ctx.fill();
    drawWrappedText(ctx, need, x + 56, y + 62 + index * 58, width - 82, 27, 1.25, "#333640", 800, 1);
  });
}

function drawDots(ctx, profile) {
  const dots = [
    [110, 300, 7, "#ffffff"],
    [960, 360, 9, profile.theme],
    [116, 1070, 7, profile.accent],
    [950, 1510, 8, "#ffffff"],
    [840, 1760, 6, profile.theme],
  ];
  dots.forEach(([x, y, radius, color]) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawBlob(ctx, x, y, size, color, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x + size * 0.5, y + size * 0.48, size * 0.54, size * 0.43, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawWrappedText(ctx, text, x, y, maxWidth, fontSize, lineHeight, color, weight, maxLines = Infinity) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${fontSize}px 'Noto Sans TC','Microsoft JhengHei',sans-serif`;
  ctx.textAlign = "left";
  let lines = wrapText(ctx, text, maxWidth);
  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[，。,.、\s]+$/, "")}...`;
  }
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * fontSize * lineHeight);
  });
}

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";
  Array.from(text).forEach((char) => {
    const next = line + char;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
