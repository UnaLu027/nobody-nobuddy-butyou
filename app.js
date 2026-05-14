const questions = [
  {
    text: "你剛到法國交換，明天要去辦學生證，但信件裡的地點和流程你看不太懂，你會？",
    options: [
      ["A", "很希望有人可以陪我確認一次流程"],
      ["B", "先打開地圖，自己研究地點在哪裡"],
      ["C", "把信件內容整理成待辦清單"],
      ["D", "直接找附近同學或辦公室問清楚"],
    ],
  },
  {
    text: "你在校園迷路，手機地圖也看不懂建築名稱，你會？",
    options: [
      ["A", "有點慌，希望有人可以帶我過去"],
      ["B", "慢慢看地圖和路標，自己找路"],
      ["C", "先確認建築名稱、樓層、房號再行動"],
      ["D", "直接找路人問：「請問這裡怎麼走？」"],
    ],
  },
  {
    text: "你收到一封行政通知，但裡面有很多文件和期限，你第一反應是？",
    options: [
      ["A", "有點焦慮，希望有人幫我確認哪些是重點"],
      ["B", "想知道這些文件要去哪裡交"],
      ["C", "想把所有文件和期限整理成表格"],
      ["D", "想直接寄信或去辦公室問清楚"],
    ],
  },
  {
    text: "你發現自己不知道該找國際處、系辦還是學生事務單位，你會？",
    options: [
      ["A", "希望有個熟悉的人告訴我「沒關係，我陪你問」"],
      ["B", "先查校園地圖和各單位位置"],
      ["C", "先查每個單位的業務範圍，判斷誰負責"],
      ["D", "先去其中一個單位問，再請他們轉介"],
    ],
  },
  {
    text: "在陌生國家生活一週後，你最希望有人給你的幫助是？",
    options: [
      ["A", "主動關心我最近適不適應"],
      ["B", "帶我走一次校園重要地點"],
      ["C", "給我一份清楚的生活與行政攻略"],
      ["D", "介紹我可以問問題的人或群組"],
    ],
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
  const link = document.createElement("a");
  link.download = `nobody-no-buddy-but-you-${profile.resultName}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
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

  question.options.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.dataset.key = key;
    if (state.answers[state.current] === key) button.classList.add("is-selected");
    button.innerHTML = `
      <span class="option-letter">${key}</span>
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
    return;
  }

  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;

  audioContext = new AudioCtor();
  masterGain = audioContext.createGain();
  masterGain.gain.setValueAtTime(0, audioContext.currentTime);
  masterGain.connect(audioContext.destination);

  const notes = [261.63, 329.63, 392, 493.88];
  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();

    oscillator.type = index % 2 === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency / (index === 3 ? 2 : 1);
    filter.type = "lowpass";
    filter.frequency.value = 760;
    gain.gain.value = 0.034;
    lfo.frequency.value = 0.035 + index * 0.012;
    lfoGain.gain.value = 8;

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    oscillator.start();
    lfo.start();
    audioNodes.push(oscillator, lfo);
  });

  setVolume(0.18);
}

function setVolume(value) {
  if (!masterGain || !audioContext) return;
  masterGain.gain.cancelScheduledValues(audioContext.currentTime);
  masterGain.gain.linearRampToValueAtTime(value, audioContext.currentTime + 0.7);
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
  gradient.addColorStop(0, paper);
  gradient.addColorStop(0.54, "#fffaf1");
  gradient.addColorStop(1, "#dce9f8");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  drawBlob(ctx, -130, -60, 440, accent, 0.22);
  drawBlob(ctx, 760, 180, 390, blue, 0.2);
  drawBlob(ctx, 710, 1390, 520, warm, 0.22);

  ctx.strokeStyle = "rgba(36,95,167,0.28)";
  ctx.lineWidth = 4;
  roundRect(ctx, 76, 76, 928, 1768, 58);
  ctx.stroke();

  ctx.fillStyle = blue;
  ctx.font = "700 34px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Nobody, No Buddy, But You", width / 2, 160);

  ctx.fillStyle = "#172033";
  ctx.font = "700 60px Georgia, serif";
  ctx.fillText("辦不到？伴得到！", width / 2, 235);

  ctx.font = "170px 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif";
  ctx.fillText(`${profile.animal}${profile.buddyEmoji}`, width / 2, 470);

  ctx.fillStyle = accent;
  ctx.font = "900 74px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText(profile.resultName, width / 2, 590);

  ctx.fillStyle = "#172033";
  ctx.font = "800 46px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText(`你適合成為 ${profile.buddyName}`, width / 2, 665);

  drawPill(ctx, 178, 725, 724, 88, blue, "在國外的你，需要這樣的支持");
  drawWrappedText(ctx, profile.abroad, 150, 878, 780, 44, 1.65, "#22304a", 700);

  ctx.fillStyle = accent;
  ctx.font = "900 38px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("你更需要", 150, 1112);

  profile.needs.forEach((need, index) => {
    ctx.fillStyle = warm;
    ctx.beginPath();
    ctx.arc(172, 1185 + index * 72, 12, 0, Math.PI * 2);
    ctx.fill();
    drawWrappedText(ctx, need, 205, 1168 + index * 72, 700, 36, 1.3, accent, 800);
  });

  ctx.fillStyle = blue;
  ctx.font = "900 38px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText("在中正的你，可以成為", 150, 1435);

  ctx.fillStyle = "#172033";
  ctx.font = "900 56px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText(profile.buddyName, 150, 1510);

  drawWrappedText(ctx, profile.cardLine, 150, 1580, 780, 42, 1.55, "#22304a", 800);

  ctx.fillStyle = "rgba(255,255,255,0.72)";
  roundRect(ctx, 150, 1700, 780, 96, 30);
  ctx.fill();
  ctx.fillStyle = "#637083";
  ctx.font = "700 28px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("那樣的溫柔與支持，其實你也做得到。", width / 2, 1760);

  ctx.fillStyle = blue;
  ctx.font = "900 28px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif";
  ctx.fillText("活動密碼 604", width / 2, 1822);

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

function drawWrappedText(ctx, text, x, y, maxWidth, fontSize, lineHeight, color, weight) {
  ctx.fillStyle = color;
  ctx.font = `${weight} ${fontSize}px 'Noto Sans TC', 'Microsoft JhengHei', sans-serif`;
  ctx.textAlign = "left";
  const lines = wrapText(ctx, text, maxWidth);
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
