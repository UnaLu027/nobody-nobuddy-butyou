const questions = [
  {
    text: "你剛到法國交換，明天要去辦學生證，但信件裡的地點和流程你看不太懂，你會？",
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
    animal: "🦌",
    resultName: "焦慮小鹿型",
    buddyEmoji: "🐶",
    buddyName: "黃金獵犬型學伴",
    cardLine: "主動的一句話，可能就能減少很多焦慮。",
    abroad:
      "陌生環境容易讓你感到不安。比起一次得到所有答案，你更需要有人陪你確認流程、主動帶你熟悉環境，並告訴你「沒關係」。",
    needs: ["有人陪你確認流程", "有人主動帶你熟悉環境", "有人告訴你「沒關係」"],
    buddy:
      "你知道主動的一句話可能就能減少很多焦慮。你可以主動關心、陪國際生確認方向，讓他知道自己不是一個人。",
    palette: ["#f8efe6", "#d95c54", "#245fa7", "#f3bb6c"],
    motif: "flow",
  },
  B: {
    animal: "🐑",
    resultName: "迷路小羊型",
    buddyEmoji: "🦊",
    buddyName: "指路狐狸型學伴",
    cardLine: "對熟悉的人來說只是走路，對陌生的人來說卻是迷路。",
    abroad:
      "你不是不願意自己處理問題，只是當地圖、建築名稱和樓層資訊都不熟悉時，你會很需要一個人幫你指出方向。",
    needs: ["有人告訴你地點在哪裡", "有人陪你走一次路線", "有人提醒你哪個入口比較好找"],
    buddy:
      "你知道對熟悉的人來說只是走路，對陌生的人來說卻是迷路。你可以帶國際生認識重要地點、說明辦公室位置，協助他熟悉校園空間。",
    palette: ["#edf4ea", "#77a987", "#245fa7", "#dfa842"],
    motif: "map",
  },
  C: {
    animal: "🦝",
    resultName: "資訊浣熊型",
    buddyEmoji: "🦉",
    buddyName: "貓頭鷹型學伴",
    cardLine: "資訊不是越多越好，而是要讓人知道下一步怎麼做。",
    abroad:
      "你其實有能力自己解決問題，但你需要清楚、完整、整理過的資訊。如果資料分散在信件、網站和不同單位之間，你會很想把它整理成清單。",
    needs: ["清楚的步驟", "文件檢查表", "有人幫你確認下一步"],
    buddy:
      "你知道資訊不是越多越好，而是要讓人知道下一步怎麼做。你可以幫國際生整理流程、確認文件，把複雜公告轉成簡單步驟。",
    palette: ["#eef0f7", "#566a8f", "#245fa7", "#d95c54"],
    motif: "paper",
  },
  D: {
    animal: "🦁",
    resultName: "勇敢獅子型",
    buddyEmoji: "🐬",
    buddyName: "海豚型學伴",
    cardLine: "困難不是沒有答案，而是不知道該怎麼開口。",
    abroad:
      "你願意嘗試，也願意主動問人。但在陌生語言和制度下，最困難的是不知道該問誰、怎麼問、問錯會不會尷尬。",
    needs: ["有人告訴你可以問哪個單位", "有人幫你確認問題怎麼說", "有人陪你降低開口壓力"],
    buddy:
      "你知道很多時候困難不是沒有答案，而是不知道該怎麼開口。你可以幫國際生找到對的人、陪他詢問，協助他把需求表達清楚。",
    palette: ["#eef7f6", "#3b9aa3", "#245fa7", "#dfa842"],
    motif: "chat",
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

const state = {
  current: 0,
  answers: [],
  resultKey: null,
};

let audioContext;
let masterGain;
let audioNodes = [];
let isMuted = false;
let melodyTimer;
let melodyStep = 0;

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
  const profile = profiles[state.resultKey];
  const canvas = createResultCanvas(profile);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.download = `nobody-no-buddy-but-you-result.png`;
    link.href = url;
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
  setVolume(isMuted ? 0 : 0.18);
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
  optionList.innerHTML = "";

  const orderedOptions = question.order.map((index) => question.options[index]);
  orderedOptions.forEach(([key, label], index) => {
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
  nextButton.style.opacity = state.answers[state.current] ? "1" : "0.48";
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
  document.getElementById("resultAnimal").textContent = `${profile.animal}${profile.buddyEmoji}`;
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

  const padNotes = [261.63, 329.63, 392];
  padNotes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();

    oscillator.type = index % 2 === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 520;
    gain.gain.value = 0.018;
    lfo.frequency.value = 0.025 + index * 0.01;
    lfoGain.gain.value = 4;

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    oscillator.start();
    lfo.start();
    audioNodes.push(oscillator, lfo);
  });

  startMelodyLoop();
  setVolume(0.22);
}

function setVolume(value) {
  if (!masterGain || !audioContext) return;
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.linearRampToValueAtTime(value, audioContext.currentTime + 0.7);
}

function drawIllustrationPanel(ctx, profile, x, y, width, height, accent, blue, warm) {
  const panelGradient = ctx.createLinearGradient(x, y, x + width, y + height);
  panelGradient.addColorStop(0, "rgba(255,255,255,0.92)");
  panelGradient.addColorStop(1, "rgba(232,244,255,0.86)");
  ctx.fillStyle = panelGradient;
  roundRect(ctx, x, y, width, height, 52);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  roundRect(ctx, x, y, width, height, 52);
  ctx.clip();

  ctx.strokeStyle = "rgba(36,95,167,0.22)";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(x + 82, y + height - 98);
  ctx.bezierCurveTo(x + 250, y + 250, x + 470, y + 430, x + width - 90, y + 150);
  ctx.stroke();

  ctx.fillStyle = "rgba(223,168,66,0.16)";
  ctx.beginPath();
  ctx.ellipse(x + width - 60, y + height - 18, 280, 145, -0.2, 0, Math.PI * 2);
  ctx.fill();

  drawMiniBuildings(ctx, x + 72, y + 256, blue, accent);
  drawMotif(ctx, profile.motif, x + width - 256, y + 68, accent, blue, warm);

  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.beginPath();
  ctx.ellipse(x + width / 2, y + 238, 188, 160, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(36,95,167,0.2)";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.font = "150px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "#172033";
  ctx.fillText(profile.animal, x + width / 2 - 70, y + 270);
  ctx.font = "112px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
  ctx.fillText(profile.buddyEmoji, x + width / 2 + 102, y + 285);

  ctx.restore();

  ctx.strokeStyle = "rgba(255,255,255,0.9)";
  ctx.lineWidth = 6;
  roundRect(ctx, x + 10, y + 10, width - 20, height - 20, 44);
  ctx.stroke();
}

function drawMiniBuildings(ctx, x, y, blue, accent) {
  ctx.fillStyle = "rgba(36,95,167,0.18)";
  roundRect(ctx, x, y, 76, 120, 16);
  ctx.fill();
  ctx.fillStyle = "rgba(217,92,84,0.18)";
  roundRect(ctx, x + 92, y + 40, 104, 80, 16);
  ctx.fill();
  ctx.fillStyle = blue;
  ctx.beginPath();
  ctx.moveTo(x - 8, y + 26);
  ctx.lineTo(x + 38, y - 20);
  ctx.lineTo(x + 84, y + 26);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.moveTo(x + 82, y + 58);
  ctx.lineTo(x + 144, y + 6);
  ctx.lineTo(x + 206, y + 58);
  ctx.closePath();
  ctx.fill();
}

function drawMotif(ctx, motif, x, y, accent, blue, warm) {
  if (motif === "map") {
    ctx.fillStyle = "rgba(255,255,255,0.74)";
    roundRect(ctx, x, y, 170, 142, 24);
    ctx.fill();
    ctx.strokeStyle = blue;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x + 28, y + 100);
    ctx.lineTo(x + 72, y + 48);
    ctx.lineTo(x + 116, y + 78);
    ctx.lineTo(x + 146, y + 34);
    ctx.stroke();
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(x + 72, y + 48, 11, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (motif === "paper") {
    ctx.fillStyle = "rgba(255,255,255,0.78)";
    roundRect(ctx, x, y, 166, 150, 24);
    ctx.fill();
    ctx.strokeStyle = blue;
    ctx.lineWidth = 6;
    [38, 70, 102].forEach((offset) => {
      ctx.beginPath();
      ctx.moveTo(x + 34, y + offset);
      ctx.lineTo(x + 132, y + offset);
      ctx.stroke();
    });
    ctx.fillStyle = accent;
    ctx.fillRect(x + 34, y + 116, 62, 10);
    return;
  }

  if (motif === "chat") {
    ctx.fillStyle = "rgba(255,255,255,0.78)";
    roundRect(ctx, x, y, 176, 112, 34);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + 44, y + 104);
    ctx.lineTo(x + 36, y + 142);
    ctx.lineTo(x + 78, y + 112);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = accent;
    [46, 86, 126].forEach((offset) => {
      ctx.beginPath();
      ctx.arc(x + offset, y + 56, 9, 0, Math.PI * 2);
      ctx.fill();
    });
    return;
  }

  ctx.strokeStyle = accent;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(x + 20, y + 112);
  ctx.bezierCurveTo(x + 42, y + 34, x + 130, y + 30, x + 154, y + 104);
  ctx.stroke();
  ctx.fillStyle = warm;
  ctx.beginPath();
  ctx.arc(x + 44, y + 46, 14, 0, Math.PI * 2);
  ctx.arc(x + 132, y + 64, 10, 0, Math.PI * 2);
  ctx.fill();
}

function drawSparkles(ctx, accent, blue, warm) {
  const dots = [
    [150, 292, 8, accent],
    [922, 310, 6, blue],
    [116, 1430, 7, warm],
    [962, 1310, 8, accent],
    [826, 1698, 6, blue],
  ];
  dots.forEach(([x, y, radius, color]) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function startMelodyLoop() {
  if (!audioContext || melodyTimer) return;
  const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 783.99];
  melodyTimer = window.setInterval(() => {
    if (isMuted || !audioContext) return;
    playBell(melody[melodyStep % melody.length], 0.08, 0.32);
    if (melodyStep % 4 === 0) playBell(melody[(melodyStep + 2) % melody.length] / 2, 0.055, 0.48);
    melodyStep += 1;
  }, 520);
}

function playBell(frequency, volume, duration) {
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, now);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1800, now);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}

function createResultCanvas(profile) {
  const canvas = document.createElement("canvas");
  const width = 1080;
  const height = 1920;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const [paper, accent, blue, warm] = profile.palette;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#fffdf7");
  gradient.addColorStop(0.44, paper);
  gradient.addColorStop(1, "#e5f2ff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  drawBlob(ctx, -170, -110, 520, accent, 0.17);
  drawBlob(ctx, 810, 120, 420, blue, 0.17);
  drawBlob(ctx, 725, 1460, 520, warm, 0.2);
  drawSparkles(ctx, accent, blue, warm);

  ctx.fillStyle = "rgba(255,255,255,0.7)";
  roundRect(ctx, 62, 72, 956, 1776, 64);
  ctx.fill();
  ctx.strokeStyle = "rgba(36,95,167,0.22)";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = blue;
  ctx.font = "800 30px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Nobody, No Buddy, But You", width / 2, 142);

  ctx.fillStyle = "#172033";
  ctx.font = "800 58px Georgia, 'Times New Roman', serif";
  ctx.fillText("辦不到？伴得到！", width / 2, 215);

  drawPill(ctx, 306, 252, 468, 64, accent, "我的交換情境測驗結果");
  drawIllustrationPanel(ctx, profile, 126, 356, 828, 458, accent, blue, warm);

  ctx.fillStyle = accent;
  ctx.font = "900 76px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(profile.resultName, width / 2, 910);

  ctx.fillStyle = "#172033";
  ctx.font = "900 44px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText(profile.buddyName, width / 2, 975);

  ctx.fillStyle = "rgba(255,255,255,0.82)";
  roundRect(ctx, 142, 1026, 796, 144, 34);
  ctx.fill();
  ctx.fillStyle = "#22304a";
  drawWrappedText(ctx, profile.cardLine, 194, 1079, 692, 38, 1.35, "#22304a", 900, 2);

  ctx.fillStyle = blue;
  ctx.font = "900 34px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("在國外的你更需要", 146, 1255);

  profile.needs.forEach((need, index) => {
    const y = 1292 + index * 74;
    ctx.fillStyle = index % 2 === 0 ? "rgba(255,255,255,0.74)" : "rgba(229,242,255,0.78)";
    roundRect(ctx, 146, y, 788, 56, 28);
    ctx.fill();
    ctx.fillStyle = warm;
    ctx.beginPath();
    ctx.arc(180, y + 28, 10, 0, Math.PI * 2);
    ctx.fill();
    drawWrappedText(ctx, need, 210, y + 36, 680, 30, 1.2, "#273650", 850, 1);
  });

  ctx.fillStyle = accent;
  ctx.font = "900 34px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText("你能給出的陪伴", 146, 1548);
  drawWrappedText(ctx, profile.buddy, 146, 1604, 788, 32, 1.5, "#273650", 750, 4);

  ctx.fillStyle = "rgba(36,95,167,0.1)";
  roundRect(ctx, 146, 1760, 788, 58, 29);
  ctx.fill();
  ctx.fillStyle = blue;
  ctx.font = "900 26px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("活動密碼 604  ·  那樣的溫柔與支持，其實你也做得到。", width / 2, 1798);

  return canvas;
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

function drawPill(ctx, x, y, width, height, color, text) {
  ctx.fillStyle = color;
  roundRect(ctx, x, y, width, height, height / 2);
  ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 32px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text, x + width / 2, y + 56);
}

function drawWrappedText(ctx, text, x, y, maxWidth, fontSize, lineHeight, color, weight, maxLines = Infinity) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${fontSize}px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif`;
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
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
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
