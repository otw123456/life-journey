const PROJECT_ID = "LIFE-00001";
const DATA_VERSION = "0.1";
const AUDIO_VERSION = 6;

const MUSIC_SLOTS = {
  opening: { file: "01-封面音乐", fallback: "00-opening", label: "封面音乐" },
  story: { file: "02-故事音乐", fallback: "10-ending", label: "故事音乐" }
};

const SFX_FILES = {
  lamp: { file: "灯亮", fallback: "lamp-on" },
  approach: { file: "相册靠近", fallback: "album-approach" },
  open: { file: "打开相册", fallback: "album-open" },
  button: { file: "轻按键", fallback: "button-soft" },
  page: { file: "普通翻页", fallback: "page-soft" },
  chapter: { file: "章节翻页", fallback: "chapter-page" },
  close: { file: "合上相册", fallback: "album-close" }
};

const introSteps = [
  { id: "INTRO-001", kind: "welcome" },
  { id: "INTRO-002", eyebrow: "第一步", title: "这一次，你想为谁留下故事？", type: "choice", options: ["我的母亲", "我的父亲", "我的爱人", "我自己", "家里的长辈", "其他重要的人"] },
  { id: "INTRO-003", eyebrow: "你们的关系", title: "你和 TA，是什么关系？", type: "choice", options: ["女儿 / 儿子", "伴侣", "孙辈", "兄弟姐妹", "朋友", "其他"] },
  { id: "INTRO-004", eyebrow: "一个熟悉的名字", title: "平时，你怎么称呼 TA？", type: "text", placeholder: "比如：妈妈、老伴、王老师……" },
  { id: "INTRO-005", eyebrow: "关于 TA", title: "接下来的故事里，我们怎么称呼 TA？", type: "choice", options: ["她", "他", "TA"] },
  { id: "INTRO-006", eyebrow: "关于现在", title: "TA 正处在人生的哪个阶段？", type: "choice", options: ["40—49 岁", "50—59 岁", "60—69 岁", "70—79 岁", "80 岁以上", "暂时不确定"] },
  { id: "INTRO-007", kind: "chapter" }
];

const chapters = [
  {
    id: "CHAPTER-01", numeral: "一", title: "TA是谁", intro: "从最熟悉的样子开始。",
    questions: [
      { id: "Q-CH01-001", title: "如果请你用一句话介绍 TA，你会怎么说？", hint: "不用想得很完整。第一句想到的话，就很好。", type: "textarea", placeholder: "TA 是一个……的人" },
      { id: "Q-CH01-002", title: "TA 出生在哪里？那里是什么样的？", hint: "一个地名、一条街、一间老屋，都可以。", type: "textarea", placeholder: "从记得的地方说起……" },
      { id: "Q-CH01-003", title: "TA 身上最鲜明的三个特点是什么？", hint: "比如：爽朗、要强、心软。", type: "text", placeholder: "写下你最先想到的三个词" },
      { id: "Q-CH01-004", title: "TA 平常最喜欢做什么？", hint: "越日常的小事，越能留下一个真实的人。", type: "textarea", placeholder: "喝茶、散步、做饭、听戏……" },
      { id: "Q-CH01-005", title: "别人通常会因为什么记住 TA？", hint: "也许是一句话、一道菜，或一个习惯。", type: "textarea", placeholder: "大家提起 TA 时，常常会说……" },
      { id: "Q-CH01-006", title: "有没有一张照片，特别像你心里的 TA？", hint: "可以写下照片背后的故事，也可以直接添加照片。", type: "textarea", placeholder: "那一天……" }
    ]
  },
  {
    id: "CHAPTER-02", numeral: "二", title: "从哪里来", intro: "每个人，都从一片土地、一个家出发。",
    questions: [
      { id: "Q-CH02-001", title: "TA 小时候住过的家，是什么样的？", hint: "院子、灶台、窗外的路，记得什么就说什么。", type: "textarea", placeholder: "那是一间……" },
      { id: "Q-CH02-002", title: "小时候，谁最疼 TA？", hint: "也许是父母、祖辈，或一位邻居。", type: "textarea", placeholder: "TA 常常提起……" },
      { id: "Q-CH02-003", title: "家里有哪些规矩，或常说的老话？", hint: "一句念叨多年的话，也藏着一个家的样子。", type: "textarea", placeholder: "家里总说……" },
      { id: "Q-CH02-004", title: "TA 小时候最盼望哪一顿饭、哪个节日？", hint: "味道最容易把人带回从前。", type: "textarea", placeholder: "每到……" },
      { id: "Q-CH02-005", title: "关于故乡，TA 最舍不得什么？", hint: "可以是一个人、一处风景，或一种声音。", type: "textarea", placeholder: "最舍不得的是……" },
      { id: "Q-CH02-006", title: "有没有一件东西，是从老家带到今天的？", hint: "一件旧物，也许就是一段很长的来路。", type: "textarea", placeholder: "那件东西是……" }
    ]
  },
  {
    id: "CHAPTER-03", numeral: "三", title: "年少时光", intro: "走回年轻的时候，看看那时的眼睛。",
    questions: [
      { id: "Q-CH03-001", title: "TA 还记得第一次上学的情景吗？", hint: "校门、老师、书包，任何一个画面都可以。", type: "textarea", placeholder: "那天……" },
      { id: "Q-CH03-002", title: "年轻时，TA 最想成为怎样的人？", hint: "有些梦想实现了，有些一直留在心里。", type: "textarea", placeholder: "那时候，TA 想……" },
      { id: "Q-CH03-003", title: "TA 年轻时最要好的朋友是谁？", hint: "你们一起做过什么，后来还有联系吗？", type: "textarea", placeholder: "有一个人叫……" },
      { id: "Q-CH03-004", title: "TA 做过最勇敢、或最淘气的一件事是什么？", hint: "那些不那么规矩的时刻，常常最鲜活。", type: "textarea", placeholder: "有一次……" },
      { id: "Q-CH03-005", title: "哪一首歌、一部电影，最像 TA 的青春？", hint: "不用准确，写下第一个想起的名字。", type: "text", placeholder: "那首歌 / 那部电影是……" },
      { id: "Q-CH03-006", title: "有没有一张年轻时的照片，TA 一直舍不得丢？", hint: "可以添加照片，也可以说说照片里的人。", type: "textarea", placeholder: "照片里……" }
    ]
  },
  {
    id: "CHAPTER-04", numeral: "四", title: "爱与成家", intro: "那些一起过日子的人，让岁月有了归处。",
    questions: [
      { id: "Q-CH04-001", title: "TA 是怎样遇见生命中重要的那个人的？", hint: "第一次见面，往往和后来想象得不一样。", type: "textarea", placeholder: "他们第一次见面是在……" },
      { id: "Q-CH04-002", title: "什么时候，TA 决定要和这个人一起生活？", hint: "也许没有一句承诺，只是一个很小的瞬间。", type: "textarea", placeholder: "那一天……" },
      { id: "Q-CH04-003", title: "刚成家时的日子，是什么样的？", hint: "第一间屋、第一件家具、最紧张的那几年。", type: "textarea", placeholder: "刚开始的时候……" },
      { id: "Q-CH04-004", title: "第一次成为父亲或母亲时，TA 有什么变化？", hint: "如果没有孩子，也可以说说 TA 第一次照顾一个人的经历。", type: "textarea", placeholder: "从那以后……" },
      { id: "Q-CH04-005", title: "这个家经历过什么难处，又是怎么一起走过来的？", hint: "可以只说愿意说的部分。", type: "textarea", placeholder: "最不容易的一段日子是……" },
      { id: "Q-CH04-006", title: "对 TA 来说，什么才叫“家”？", hint: "一张桌子、几个人，或一盏等着的灯。", type: "textarea", placeholder: "家就是……" }
    ]
  },
  {
    id: "CHAPTER-05", numeral: "五", title: "工作与担当", intro: "一双手，怎样一点一点撑起生活。",
    questions: [
      { id: "Q-CH05-001", title: "TA 的第一份工作是什么？", hint: "第一天上班的衣服、路程、心情，还记得吗？", type: "textarea", placeholder: "第一份工作是在……" },
      { id: "Q-CH05-002", title: "工作中最辛苦的一天，发生了什么？", hint: "那些咬牙坚持过的日子，值得被看见。", type: "textarea", placeholder: "那天……" },
      { id: "Q-CH05-003", title: "TA 最拿手、也最自豪的本事是什么？", hint: "不一定是职业技能，会把家照顾好也是本事。", type: "textarea", placeholder: "TA 最会……" },
      { id: "Q-CH05-004", title: "有没有一位同事或搭档，让 TA 一直记得？", hint: "说说这个人，也说说你们一起做过的事。", type: "textarea", placeholder: "那个人叫……" },
      { id: "Q-CH05-005", title: "为了家，TA 扛过哪些没人知道的压力？", hint: "不必说得完整，留下一个片段就好。", type: "textarea", placeholder: "那时候……" },
      { id: "Q-CH05-006", title: "这些年的工作，最后教会了 TA 什么？", hint: "可能是一条道理，也可能是看人的眼光。", type: "textarea", placeholder: "TA 后来明白……" }
    ]
  },
  {
    id: "CHAPTER-06", numeral: "六", title: "命运的转弯", intro: "有些路在当时很难，却悄悄改变了一生。",
    questions: [
      { id: "Q-CH06-001", title: "TA 做过哪个决定，后来改变了整个人生？", hint: "搬家、换工作、结婚，或一句答应。", type: "textarea", placeholder: "那个决定是……" },
      { id: "Q-CH06-002", title: "TA 经历过最难熬的一段时间是什么？", hint: "可以停一停，只说愿意留下的部分。", type: "textarea", placeholder: "那一段时间……" },
      { id: "Q-CH06-003", title: "在最难的时候，谁曾伸手帮过 TA？", hint: "一份恩情、一句安慰，都可以记下来。", type: "textarea", placeholder: "幸好有……" },
      { id: "Q-CH06-004", title: "TA 曾经失去过什么，又是怎样慢慢放下的？", hint: "有些离开不必解释，只要有人记得。", type: "textarea", placeholder: "后来……" },
      { id: "Q-CH06-005", title: "如果能回到一个转弯处，TA 会做不同的选择吗？", hint: "也许会，也许不会，都没有标准答案。", type: "textarea", placeholder: "如果再来一次……" },
      { id: "Q-CH06-006", title: "这些经历，让 TA 发现自己有怎样的力量？", hint: "请替那个一路走来的人，说一句公道话。", type: "textarea", placeholder: "原来 TA 比想象中更……" }
    ]
  },
  {
    id: "CHAPTER-07", numeral: "七", title: "日子里的TA", intro: "真正留住一个人的，常常是最普通的小事。",
    questions: [
      { id: "Q-CH07-001", title: "TA 一天里最喜欢的时刻是什么时候？", hint: "清晨的一杯茶，或夜里一家人都回来了。", type: "textarea", placeholder: "每天到了……" },
      { id: "Q-CH07-002", title: "哪一道菜，最有 TA 的味道？", hint: "谁最爱吃？有什么独门做法？", type: "textarea", placeholder: "TA 最拿手的是……" },
      { id: "Q-CH07-003", title: "TA 最常说的一句话是什么？", hint: "一句口头禅，会把一个人的声音留下来。", type: "text", placeholder: "TA 总说……" },
      { id: "Q-CH07-004", title: "TA 有什么用了很多年、舍不得换的东西？", hint: "一只杯子、一件外套、一把旧工具。", type: "textarea", placeholder: "那是一件……" },
      { id: "Q-CH07-005", title: "TA 是怎样表达关心的？", hint: "也许从不说爱，只会问一句“吃了吗”。", type: "textarea", placeholder: "TA 关心人的方式是……" },
      { id: "Q-CH07-006", title: "请留下一张最普通、却最像 TA 的生活照片。", hint: "不必摆拍。一个熟悉的背影，就很好。", type: "textarea", placeholder: "这个画面里……" }
    ]
  },
  {
    id: "CHAPTER-08", numeral: "八", title: "留给后来的人", intro: "把没有说完的话，安静地留给以后。",
    questions: [
      { id: "Q-CH08-001", title: "这一生，TA 最珍惜的是什么？", hint: "一个人、一份感情，或一种活法。", type: "textarea", placeholder: "最珍惜的是……" },
      { id: "Q-CH08-002", title: "有没有一句话，TA 一直想说却没说出口？", hint: "可以写给某个人，也可以写给曾经的自己。", type: "textarea", placeholder: "我想对你说……" },
      { id: "Q-CH08-003", title: "如果能见到年轻时的自己，TA 会说什么？", hint: "隔着很多年的一次相见。", type: "textarea", placeholder: "别怕…… / 请记得……" },
      { id: "Q-CH08-004", title: "TA 对家里下一代，最大的心愿是什么？", hint: "不是要求，只是一份牵挂。", type: "textarea", placeholder: "希望你们……" },
      { id: "Q-CH08-005", title: "TA 最想留给后来人的一句人生话是什么？", hint: "这句话，会被放在故事最后一页。", type: "textarea", placeholder: "这一辈子，我明白了……" },
      { id: "Q-CH08-006", title: "最后，再为这段人生留下一张照片或一段话吧。", hint: "不必告别。故事被记住，就会继续陪着我们。", type: "textarea", placeholder: "我想把这一刻留下来……" }
    ]
  }
];

const chapterQuestions = chapters.flatMap(chapter => chapter.questions);

const state = {
  view: "journey",
  section: "intro",
  step: 0,
  chapterIndex: 0,
  chapterStep: 0,
  answers: {},
  skips: [],
  attachments: {},
  updatedAt: null,
  storageMode: "none",
  folderName: "",
  audioPreference: null,
  musicVolume: 0.16,
  sfxVolume: 0.20,
  audioVersion: AUDIO_VERSION
};

let directoryHandle = null;
let localService = null;
let pendingPhotoQuestion = null;
let waitingToOpenAlbum = false;
let toastTimer;
const audioEngine = { ctx: null, master: null, timer: null, nextChord: 0 };
const soundscape = { activeDeck: 0, slot: null, fadeTimer: null, sfxToken: 0 };

const el = {
  stage: document.getElementById("stage"),
  saveState: document.getElementById("saveState"),
  storageModal: document.getElementById("storageModal"),
  storageSupport: document.getElementById("storageSupport"),
  soundModal: document.getElementById("soundModal"),
  musicVolumeControl: document.getElementById("musicVolumeControl"),
  sfxVolumeControl: document.getElementById("sfxVolumeControl"),
  musicVolumeValue: document.getElementById("musicVolumeValue"),
  sfxVolumeValue: document.getElementById("sfxVolumeValue"),
  photoInput: document.getElementById("photoInput"),
  toast: document.getElementById("toast"),
  bgmA: document.getElementById("bgmA"),
  bgmB: document.getElementById("bgmB"),
  sfxPlayer: document.getElementById("sfxPlayer")
};

function updateSoundButton() {
  const button = document.getElementById("soundBtn");
  if (!button) return;
  const on = state.audioPreference === true && audioEngine.ctx?.state === "running";
  button.setAttribute("aria-pressed", String(on));
  button.textContent = on ? "♫ 声音已开" : "♫ 开启声音";
}

function createReverb(ctx) {
  const convolver = ctx.createConvolver();
  const length = Math.floor(ctx.sampleRate * 2.2);
  const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel++) {
    const data = impulse.getChannelData(channel);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.7);
  }
  convolver.buffer = impulse;
  return convolver;
}

function setupAudio() {
  if (audioEngine.ctx) return audioEngine.ctx;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  const ctx = new AudioCtor();
  const master = ctx.createGain();
  const reverb = createReverb(ctx);
  const dry = ctx.createGain();
  const wet = ctx.createGain();
  master.gain.value = 0.17;
  dry.gain.value = 0.72;
  wet.gain.value = 0.28;
  master.connect(dry).connect(ctx.destination);
  master.connect(reverb).connect(wet).connect(ctx.destination);
  audioEngine.ctx = ctx;
  audioEngine.master = master;
  return ctx;
}

function playTone(frequency, start, duration, volume = 0.12, type = "sine") {
  const { ctx, master } = audioEngine;
  if (!ctx || !master || state.audioPreference !== true) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + Math.min(.65, duration * .25));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(master);
  osc.start(start);
  osc.stop(start + duration + .05);
}

function playPiano(frequency, start, duration = 4.2, volume = .09) {
  const { ctx, master } = audioEngine;
  if (!ctx || !master || state.audioPreference !== true) return;
  [
    { ratio: 1, gain: 1 },
    { ratio: 2, gain: .22 },
    { ratio: 3, gain: .07 }
  ].forEach(partial => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = partial.ratio === 1 ? "triangle" : "sine";
    osc.frequency.setValueAtTime(frequency * partial.ratio, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume * partial.gain, start + .025);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + duration + .08);
  });
}

function playAmbientPhrase() {
  const { ctx } = audioEngine;
  if (!ctx || state.audioPreference !== true) return;
  // D minor(add9) → B♭maj7 → F/A → Csus2：悲而不伤，最后留一点没有说完的感觉。
  const chordBook = [
    { pad: [146.83, 220.00, 293.66, 329.63], piano: [587.33, 440.00] },
    { pad: [116.54, 174.61, 220.00, 293.66], piano: [523.25, 440.00] },
    { pad: [110.00, 174.61, 261.63, 349.23], piano: [440.00, 392.00] },
    { pad: [130.81, 196.00, 293.66, 329.63], piano: [392.00, 329.63] }
  ];
  const phrase = chordBook[audioEngine.nextChord % chordBook.length];
  const now = ctx.currentTime + .05;
  phrase.pad.forEach((frequency, index) => playTone(frequency, now + index * .22, 8.2, index === 0 ? .043 : .031, index === 0 ? "sine" : "triangle"));
  playPiano(phrase.piano[0], now + 1.15, 4.8, .09);
  playPiano(phrase.piano[1], now + 4.65, 4.5, .068);
  audioEngine.nextChord++;
}

function startAmbient() {
  if (audioEngine.timer) clearInterval(audioEngine.timer);
  playAmbientPhrase();
  audioEngine.timer = setInterval(playAmbientPhrase, 9200);
}

async function ensureAudio(enable = true) {
  const wasRunning = state.audioPreference === true && audioEngine.ctx?.state === "running";
  state.audioPreference = enable;
  const ctx = setupAudio();
  if (!ctx) {
    showToast("这台电脑暂不支持声音播放");
    return;
  }
  if (enable) {
    await ctx.resume();
    audioEngine.master.gain.cancelScheduledValues(ctx.currentTime);
    audioEngine.master.gain.setTargetAtTime(.17, ctx.currentTime, .12);
    if (!wasRunning) {
      startAmbient();
      playPiano(587.33, ctx.currentTime + .05, 2.6, .15);
      playPiano(440.00, ctx.currentTime + .36, 3.2, .105);
      showToast("声音已开启");
    }
  } else {
    if (audioEngine.timer) clearInterval(audioEngine.timer);
    audioEngine.timer = null;
    audioEngine.master.gain.setTargetAtTime(.0001, ctx.currentTime, .08);
  }
  localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
  updateSoundButton();
}

function playPageTurn() {
  const { ctx, master } = audioEngine;
  if (!ctx || !master || state.audioPreference !== true || ctx.state !== "running") return;
  const duration = .44;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const p = i / data.length;
    const envelope = Math.sin(Math.PI * p) * (1 - p * .55);
    data[i] = (Math.random() * 2 - 1) * envelope;
  }
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1050, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + duration);
  filter.Q.value = .55;
  gain.gain.setValueAtTime(.0001, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(.24, ctx.currentTime + .07);
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + duration);
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(master);
  source.start();
}

function playChoiceChime() {
  const ctx = audioEngine.ctx;
  if (!ctx || state.audioPreference !== true || ctx.state !== "running") return;
  playTone(659.25, ctx.currentTime, .7, .075, "sine");
  playTone(880, ctx.currentTime + .1, .9, .045, "sine");
}

// Two quiet audio decks let chapters cross-fade without interrupting the story.
function musicCandidates(slot) {
  const item = MUSIC_SLOTS[slot] || MUSIC_SLOTS.opening;
  const file = encodeURIComponent(item.file);
  return [
    `/music-file/${file}.mp3`, `/music-file/${file}.wav`,
    `music/defaults/${item.fallback}.mp3`, `music/defaults/${item.fallback}.wav`
  ];
}

function sfxCandidates(name) {
  const item = SFX_FILES[name] || { file: name, fallback: name };
  const file = encodeURIComponent(item.file);
  return [`/sfx-file/${file}.mp3`, `/sfx-file/${file}.wav`, `assets/sfx/defaults/${item.fallback}.wav`];
}

function musicSlotForState() {
  return state.section === "intro" && state.step === 0 ? "opening" : "story";
}

function loadAudioCandidate(audio, candidates, index = 0) {
  return new Promise((resolve, reject) => {
    if (index >= candidates.length) return reject(new Error("No playable local audio file"));
    const cleanup = () => { audio.oncanplay = null; audio.onerror = null; };
    audio.oncanplay = () => { cleanup(); resolve(candidates[index]); };
    audio.onerror = () => { cleanup(); loadAudioCandidate(audio, candidates, index + 1).then(resolve, reject); };
    audio.src = candidates[index];
    audio.load();
  });
}

async function setMusicSlot(slot, immediate = false) {
  if (state.audioPreference !== true || !MUSIC_SLOTS[slot]) return;
  const active = soundscape.activeDeck === 0 ? el.bgmA : el.bgmB;
  if (soundscape.slot === slot && active?.src) {
    active.volume = state.musicVolume;
    if (active.paused) await active.play().catch(() => {});
    return;
  }
  soundscape.requestedSlot = slot;
  const nextIndex = soundscape.activeDeck === 0 ? 1 : 0;
  const next = nextIndex === 0 ? el.bgmA : el.bgmB;
  try {
    await loadAudioCandidate(next, musicCandidates(slot));
    if (soundscape.requestedSlot !== slot) return;
    next.currentTime = 0;
    next.volume = immediate ? state.musicVolume : 0;
    await next.play();
    clearInterval(soundscape.fadeTimer);
    if (immediate || !active?.src || active.paused) {
      if (active) { active.pause(); active.volume = 0; }
      next.volume = state.musicVolume;
    } else {
      const steps = 50;
      let step = 0;
      const oldStart = active.volume;
      soundscape.fadeTimer = setInterval(() => {
        step++;
        const amount = step / steps;
        next.volume = Math.min(1, state.musicVolume * amount);
        active.volume = Math.max(0, oldStart * (1 - amount));
        if (step >= steps) {
          clearInterval(soundscape.fadeTimer);
          active.pause();
          active.volume = 0;
        }
      }, 60);
    }
    soundscape.activeDeck = nextIndex;
    soundscape.slot = slot;
    updateSoundButton();
  } catch (error) {
    console.warn("Music slot unavailable", slot, error);
  }
}

function syncSoundscape() {
  if (state.audioPreference === true) setMusicSlot(musicSlotForState());
}

function updateSoundButton() {
  const button = document.getElementById("soundBtn");
  if (!button) return;
  const active = soundscape.activeDeck === 0 ? el.bgmA : el.bgmB;
  const on = state.audioPreference === true && active && !active.paused;
  button.setAttribute("aria-pressed", String(on));
  button.textContent = on ? "♫ 声音已开" : "♫ 开启声音";
}

async function ensureAudio(enable = true) {
  state.audioPreference = enable;
  if (enable) {
    try {
      await setMusicSlot(musicSlotForState(), soundscape.slot === null);
      showToast("声音已轻轻开启");
    } catch (_) {
      showToast("请再点一次右上角“开启声音”");
    }
  } else {
    clearInterval(soundscape.fadeTimer);
    [el.bgmA, el.bgmB].forEach(audio => { if (audio) audio.pause(); });
    showToast("声音已关闭");
  }
  localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
  updateSoundButton();
}

function syncVolumeControls() {
  const musicPercent = Math.round(state.musicVolume * 100);
  const sfxPercent = Math.round(state.sfxVolume * 100);
  el.musicVolumeControl.value = String(musicPercent);
  el.sfxVolumeControl.value = String(sfxPercent);
  el.musicVolumeValue.textContent = `${musicPercent}%`;
  el.sfxVolumeValue.textContent = `${sfxPercent}%`;
}

function openSoundSettings() {
  syncVolumeControls();
  el.soundModal.classList.remove("hidden");
}

function closeSoundSettings() {
  el.soundModal.classList.add("hidden");
}

function updateMusicVolume(value) {
  state.musicVolume = Number(value) / 100;
  [el.bgmA, el.bgmB].forEach(audio => {
    if (audio && !audio.paused) audio.volume = state.musicVolume;
  });
  el.musicVolumeValue.textContent = `${value}%`;
  localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
}

function updateSfxVolume(value) {
  state.sfxVolume = Number(value) / 100;
  el.sfxVolumeValue.textContent = `${value}%`;
  localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
}

function playSfx(name, level = 1) {
  if (state.audioPreference !== true || !el.sfxPlayer) return;
  const token = ++soundscape.sfxToken;
  const candidates = sfxCandidates(name);
  const tryAt = index => {
    if (token !== soundscape.sfxToken || index >= candidates.length) return;
    el.sfxPlayer.onerror = () => tryAt(index + 1);
    el.sfxPlayer.oncanplay = () => {
      if (token !== soundscape.sfxToken) return;
      el.sfxPlayer.onerror = null;
      el.sfxPlayer.oncanplay = null;
      el.sfxPlayer.volume = Math.min(.5, state.sfxVolume * level);
      el.sfxPlayer.play().catch(() => {});
    };
    el.sfxPlayer.src = candidates[index];
    el.sfxPlayer.load();
  };
  tryAt(0);
}

function playPageTurn() { playSfx("page", .82); }
function playChoiceChime() {
  if (state.audioPreference === null) ensureAudio(true);
  else playSfx("button", .88);
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[c]);
}

function activeChapter() {
  return chapters[Math.min(Math.max(state.chapterIndex, 0), chapters.length - 1)];
}

function currentQuestion() {
  return activeChapter()?.questions[state.chapterStep];
}

function answeredInChapter(chapter) {
  return chapter.questions.filter(question => state.answers[question.id]).length;
}

function hydrate() {
  try {
    const saved = localStorage.getItem(`${PROJECT_ID}:state`);
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      if (parsed.chapterIndex === undefined && parsed.section === "complete") {
        state.section = "chapter_complete";
        state.chapterIndex = 0;
      }
      if (parsed.audioVersion !== AUDIO_VERSION) {
        state.audioPreference = null;
        state.musicVolume = 0.16;
        state.sfxVolume = 0.20;
      }
      state.audioVersion = AUDIO_VERSION;
    }
  } catch (_) {}
  restoreDirectoryHandle();
  detectLocalService();
  routeFromHash();
  updateSoundButton();
}

function snapshot() {
  return {
    schema_version: DATA_VERSION,
    project_id: PROJECT_ID,
    updated_at: new Date().toISOString(),
    storage: { mode: state.storageMode, folder_name: state.folderName },
    current: { section: state.section, intro_step: state.step, chapter_index: state.chapterIndex, chapter_step: state.chapterStep },
    chapter_progress: chapters.map(chapter => ({ chapter_id: chapter.id, answered: answeredInChapter(chapter), total: chapter.questions.length })),
    responses: Object.entries(state.answers).map(([content_id, value]) => ({ content_id, value, status: "answered" })),
    skipped_content_ids: state.skips,
    attachments: Object.entries(state.attachments).flatMap(([content_id, items]) => items.map(item => ({ content_id, ...item })))
  };
}

async function persist() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
  updateSaveState("正在保存…");
  if (localService) {
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot())
      });
      if (!response.ok) throw new Error("Local save failed");
      state.storageMode = "local_service";
      state.folderName = localService.archivePath;
      localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
      updateSaveState(`已保存到 ${localService.archivePath}`);
      return;
    } catch (error) {
      console.warn("Local service save failed", error);
    }
  }
  if (directoryHandle) {
    try {
      const permission = await verifyPermission(directoryHandle, true);
      if (permission) {
        const projectDir = await directoryHandle.getDirectoryHandle(PROJECT_ID, { create: true });
        const dataDir = await projectDir.getDirectoryHandle("data", { create: true });
        const file = await dataDir.getFileHandle("project.json", { create: true });
        const writable = await file.createWritable();
        await writable.write(JSON.stringify(snapshot(), null, 2));
        await writable.close();
        state.storageMode = "folder";
        updateSaveState(`已保存到 ${state.folderName} / ${PROJECT_ID}`);
        return;
      }
    } catch (error) {
      console.warn("Folder save failed", error);
    }
  }
  state.storageMode = "browser";
  updateSaveState("已保存在此浏览器");
}

function updateSaveState(text) { el.saveState.textContent = text; }

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("show");
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2600);
}

function albumAside() {
  const isChapter = state.section === "chapter" || state.section === "chapter_complete";
  const chapter = activeChapter();
  const label = isChapter ? `第${chapter.numeral}章` : state.section === "complete" ? "旅程完成" : "序章";
  const title = isChapter ? chapter.title : state.section === "complete" ? "把故事收好" : "从一个人开始";
  const detail = isChapter ? `${answeredInChapter(chapter)} / ${chapter.questions.length} 段记忆` : `${PROJECT_ID} · 人生故事采集`;
  return `
    <aside class="album-left" aria-label="当前章节">
      <div class="album-stamp">${isChapter ? chapter.numeral : "忆"}</div>
      <div class="mounted-photo" aria-hidden="true"><span></span></div>
      <div class="album-caption"><small>${escapeHtml(label)}</small><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span></div>
      <div class="album-thread" aria-hidden="true"></div>
    </aside>`;
}

function page(content, className = "") {
  document.body.classList.remove("ritual-mode");
  el.stage.innerHTML = `
    <section class="album-shell">
      <div class="album-book">
        ${albumAside()}
        <div class="album-gutter" aria-hidden="true"></div>
        <article class="paper album-right ${className}">${content}</article>
      </div>
    </section>`;
  setTimeout(syncSoundscape, 0);
}

function render() {
  if (state.view === "os") return renderOS();
  if (state.section === "closed") return renderClosedScene();
  if (state.section === "home") return renderAlbumHome();
  if (state.section === "intro") return renderIntro();
  if (state.section === "chapter") return renderChapter();
  if (state.section === "chapter_complete") return renderChapterCompletion();
  renderCompletion();
}

function renderAlbumHome() {
  page(`
    <div class="ceremony" aria-hidden="true">LJ</div>
    <p class="eyebrow">LIFE JOURNEY · ${PROJECT_ID}</p>
    <h1><span>把这一生，</span><span>讲给爱你的人听。</span></h1>
    <p class="lede album-home-line">把记得的故事，留给最亲的人。</p>
    <p class="album-home-note">八个章节 · 一次只说一件事 · 随时可以回来</p>
    <div class="actions">
      <button class="primary" data-action="start-journey">开始讲述</button>
      <button class="secondary" data-action="open-os">看看已经留下的故事</button>
    </div>
  `, "centered album-home-page");
}

function renderCoverScene() {
  document.body.classList.add("ritual-mode");
  el.stage.innerHTML = `
    <section class="memory-scene cover-scene sequence-scene">
      <div class="sequence-frame frame-off" aria-hidden="true"></div>
      <div class="sequence-frame frame-closed" aria-hidden="true"></div>
      <div class="sequence-frame frame-half" aria-hidden="true"></div>
      <div class="sequence-frame frame-open" aria-hidden="true"></div>
      <div class="cover-logo" aria-label="LIFE JOURNEY 人生故事采集计划">
        <span class="cover-logo-mark">LJ</span>
        <strong>LIFE JOURNEY</strong>
        <small>人生故事采集计划</small>
      </div>
      <button class="memory-enter" data-action="open-gift">开始回忆</button>
    </section>`;
  setTimeout(syncSoundscape, 0);
}

function renderClosedScene() {
  document.body.classList.add("ritual-mode");
  el.stage.innerHTML = `
    <section class="memory-scene closed-scene">
      <div class="lamp-glow settled" aria-hidden="true"></div>
      <div class="cover-copy closing-copy">
        <p class="eyebrow">LIFE JOURNEY · ${PROJECT_ID}</p>
        <h1>故事没有结束。</h1>
        <p class="closing-line">它只是被好好收了起来。</p>
        <div class="actions">
          <button class="primary" data-action="reopen">再打开看看</button>
          <button class="secondary light" data-action="open-os">继续补充故事</button>
        </div>
      </div>
    </section>`;
  setTimeout(syncSoundscape, 0);
}

function renderIntro() {
  const step = introSteps[state.step] || introSteps[0];
  if (step.kind === "welcome") {
    return renderCoverScene();
  }
  if (step.kind === "chapter") {
    const pronoun = state.answers["INTRO-005"] || "TA";
    page(`
      <p class="eyebrow">序章 · 已完成</p>
      <div class="ceremony" aria-hidden="true">一</div>
      <h1>第一章<br>《${escapeHtml(pronoun)}是谁》</h1>
      <p class="lede">先从最熟悉的地方开始。不是写传记，只是把你认识的这个人，轻轻放进故事里。</p>
      <div class="actions">
        <button class="primary" data-action="start-chapter">翻开第一章</button>
        <button class="back-button" data-action="back">← 回到上一页</button>
      </div>
    `, "centered");
    return;
  }
  renderPrompt(step, state.step, introSteps.length - 1, "intro");
}

function renderPrompt(item, index, total, section) {
  const saved = state.answers[item.id] || "";
  const choices = item.type === "choice" ? `
    <div class="choice-grid">${item.options.map(option => `<button class="choice ${saved === option ? "selected" : ""}" data-choice="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div>` : "";
  const field = item.type === "text" ? `<div class="field-wrap"><input id="answerField" maxlength="120" value="${escapeHtml(saved)}" placeholder="${escapeHtml(item.placeholder)}" autocomplete="off"></div>` :
    item.type === "textarea" ? `<div class="field-wrap"><textarea id="answerField" maxlength="1000" placeholder="${escapeHtml(item.placeholder)}">${escapeHtml(saved)}</textarea></div>` : "";
  const attachment = state.attachments[item.id]?.length ? `<div class="attached">已添加 ${state.attachments[item.id].length} 张照片</div>` : "";
  const chapterTools = section === "chapter" ? `
    <div class="question-tools">
      <button class="tool-button" data-action="voice">◉ 用语音说</button>
      <button class="tool-button" data-action="photo">＋ 添加照片</button>
    </div>${attachment}` : "";
  page(`
    <div class="progress-wrap"><div class="progress-track"><span style="width:${((index + 1) / total) * 100}%"></span></div><span class="progress-label">${index + 1} / ${total}</span></div>
    <p class="eyebrow">${escapeHtml(item.eyebrow || `第一章 · ${String(index + 1).padStart(2,"0")}`)}</p>
    <h2>${escapeHtml(item.title)}</h2>
    ${item.hint ? `<p class="lede">${escapeHtml(item.hint)}</p>` : ""}
    ${choices}${field}${chapterTools}
    <div class="actions">
      ${item.type === "choice" ? "" : `<button class="primary" data-action="continue">继续</button>`}
      <button class="skip" data-action="skip">稍后再说 / 暂不填写</button>
      ${index > 0 || section === "chapter" ? `<button class="back-button" data-action="back">← 上一题</button>` : ""}
    </div>
  `);
  document.getElementById("answerField")?.focus({ preventScroll: true });
}

function renderChapter() {
  const chapter = activeChapter();
  const q = currentQuestion();
  if (!q) { state.section = "chapter_complete"; persist(); return renderChapterCompletion(); }
  q.eyebrow = `第${chapter.numeral}章 · ${String(state.chapterStep + 1).padStart(2, "0")}`;
  renderPrompt(q, state.chapterStep, chapter.questions.length, "chapter");
}

function renderChapterCompletion() {
  const chapter = activeChapter();
  const answered = answeredInChapter(chapter);
  const hasNext = state.chapterIndex < chapters.length - 1;
  const next = chapters[state.chapterIndex + 1];
  page(`
    <div class="ceremony" aria-hidden="true">${chapter.numeral}</div>
    <p class="eyebrow">第${chapter.numeral}章 · 已收好</p>
    <h1>《${escapeHtml(chapter.title)}》<br>已经写进故事里。</h1>
    <p class="lede">这一章留下了 ${answered} 段回答。${hasNext ? `下一章，我们一起走进《${escapeHtml(next.title)}》。` : "八章故事已经走完，接下来为它轻轻封存。"}</p>
    <div class="actions">
      <button class="primary" data-action="${hasNext ? "next-chapter" : "seal-journey"}">${hasNext ? `翻开第${next.numeral}章` : "完成这份人生礼物"}</button>
      <button class="secondary" data-action="review-chapter">回看这一章</button>
      <button class="secondary" data-action="open-os">查看全部进度</button>
    </div>
  `, "centered");
}

function renderCompletion() {
  const answered = Object.keys(state.answers).filter(key => key.startsWith("Q-")).length;
  page(`
    <div class="ceremony" aria-hidden="true">✦</div>
    <p class="eyebrow">LIFE JOURNEY · 已封存</p>
    <h1>谢谢你，<br>让这段人生被好好看见。</h1>
    <p class="lede">八章旅程里，你留下了 ${answered} 段回答。它们已经安静地保存在 ${escapeHtml(state.folderName || "这台电脑")}。以后随时可以回来，慢慢补上那些还没说完的话。</p>
    <div class="actions">
      <button class="primary" data-action="close-album">轻轻合上相册</button>
      <button class="secondary" data-action="review">从第一章回看</button>
      <button class="secondary" data-action="export">下载一份备份</button>
      <button class="secondary" data-action="open-os">查看 LIFE OS</button>
    </div>
  `, "centered");
}

function renderOS() {
  document.body.classList.remove("ritual-mode");
  const name = state.answers["INTRO-004"] || "尚未填写称呼";
  const completed = Object.keys(state.answers).filter(k => k.startsWith("Q-")).length;
  const storage = state.storageMode === "local_service" ? `本机硬盘 · ${state.folderName}` : state.storageMode === "folder" ? `本地文件夹 · ${state.folderName}` : state.storageMode === "browser" ? "浏览器自动保存" : "尚未设置";
  const chapterCards = chapters.map((chapter, index) => {
    const count = answeredInChapter(chapter);
    const isCurrent = index === state.chapterIndex && state.section !== "complete";
    return `<article class="chapter-mini ${isCurrent ? "current" : ""}"><span class="chapter-number">${chapter.numeral}</span><div><strong>${escapeHtml(chapter.title)}</strong><small>${count} / ${chapter.questions.length} 题</small></div></article>`;
  }).join("");
  el.stage.innerHTML = `
    <section class="os-layout">
      <div class="os-head"><div><p class="eyebrow">内部管理</p><h1>LIFE OS</h1><p>项目与保存状态</p></div><button class="secondary" data-action="journey">返回 LIFE JOURNEY</button></div>
      <article class="os-card">
        <div class="portrait-placeholder">01</div>
        <div><p class="eyebrow">${PROJECT_ID}</p><h3>${escapeHtml(name)}</h3><p>完整人生旅程 · 已回答 ${completed} / ${chapterQuestions.length} 题</p></div>
        <div class="status-stack"><div class="status">${escapeHtml(storage)}</div><div class="mini-meta">${state.updatedAt ? `最近保存 ${new Date(state.updatedAt).toLocaleString("zh-CN")}` : "还没有保存记录"}</div><button class="text-button" data-action="storage">更改保存位置</button></div>
      </article>
      <div class="os-chapters">${chapterCards}</div>
    </section>`;
}

function transition(next) {
  playPageTurn();
  const book = el.stage.querySelector(".album-book");
  if (!book) return next();
  book.classList.add("turning");
  setTimeout(next, 520);
}

function openAlbumSequence() {
  waitingToOpenAlbum = false;
  const scene = el.stage.querySelector(".cover-scene");
  if (!scene) {
    state.step = 1;
    persist();
    return render();
  }
  scene.classList.add("entering");
  setTimeout(() => playSfx("approach", .62), 980);
  setTimeout(() => playSfx("open", .58), 2450);
  setTimeout(() => {
    state.section = "home";
    state.step = 0;
    persist();
    render();
  }, 6050);
}

function closeAlbumSequence() {
  document.body.classList.add("ritual-mode");
  el.stage.innerHTML = `
    <section class="memory-scene sequence-scene closing-sequence">
      <div class="sequence-frame frame-closed" aria-hidden="true"></div>
      <div class="sequence-frame frame-half" aria-hidden="true"></div>
      <div class="sequence-frame frame-open" aria-hidden="true"></div>
    </section>`;
  setTimeout(() => playSfx("close", .7), 1050);
  setTimeout(() => {
    state.section = "closed";
    persist();
    render();
  }, 4700);
}

async function handleAction(action) {
  if (action === "open-gift") {
    if (state.audioPreference !== false) await ensureAudio(true);
    playSfx("lamp", .92);
    waitingToOpenAlbum = true;
    if (!localService && !directoryHandle && state.storageMode === "none") openStorageModal();
    else openAlbumSequence();
  }
  if (action === "start-journey") {
    transition(() => {
      state.section = "intro";
      state.step = 1;
      persist();
      render();
    });
  }
  if (action === "continue") {
    const item = state.section === "intro" ? introSteps[state.step] : currentQuestion();
    const field = document.getElementById("answerField");
    if (!field?.value.trim()) return showToast("可以写一点，也可以选择“稍后再说”");
    state.answers[item.id] = field.value.trim();
    state.skips = state.skips.filter(id => id !== item.id);
    await persist();
    advance();
  }
  if (action === "skip") {
    const item = state.section === "intro" ? introSteps[state.step] : currentQuestion();
    if (!state.skips.includes(item.id)) state.skips.push(item.id);
    await persist();
    advance();
  }
  if (action === "back") {
    transition(() => {
      if (state.section === "chapter" && state.chapterStep > 0) state.chapterStep--;
      else if (state.section === "chapter" && state.chapterIndex > 0) { state.chapterIndex--; state.section = "chapter_complete"; }
      else if (state.section === "chapter") { state.section = "intro"; state.step = introSteps.length - 1; }
      else if (state.section === "intro" && state.step === 1) { state.section = "home"; state.step = 0; }
      else state.step = Math.max(0, state.step - 1);
      persist(); render();
    });
  }
  if (action === "start-chapter") transition(() => { state.section = "chapter"; state.chapterIndex = 0; state.chapterStep = 0; persist(); render(); });
  if (action === "next-chapter") { playSfx("chapter", .7); transition(() => { state.chapterIndex++; state.chapterStep = 0; state.section = "chapter"; persist(); render(); }); }
  if (action === "seal-journey") { playSfx("chapter", .65); transition(() => { state.section = "complete"; persist(); render(); }); }
  if (action === "close-album") closeAlbumSequence();
  if (action === "reopen") { state.section = "complete"; persist(); render(); }
  if (action === "review-chapter") transition(() => { state.chapterStep = 0; state.section = "chapter"; persist(); render(); });
  if (action === "voice") showToast("语音入口已预留，V0.1 暂不录音");
  if (action === "photo") {
    pendingPhotoQuestion = currentQuestion()?.id;
    el.photoInput.click();
  }
  if (action === "review") { state.section = "chapter"; state.chapterIndex = 0; state.chapterStep = 0; persist(); render(); }
  if (action === "export") downloadBackup();
  if (action === "open-os") { location.hash = "os"; }
  if (action === "journey") { location.hash = "journey"; }
  if (action === "storage") openStorageModal();
}

function advance() {
  transition(() => {
    if (state.section === "intro") state.step++;
    else {
      state.chapterStep++;
      if (state.chapterStep >= activeChapter().questions.length) state.section = "chapter_complete";
    }
    persist();
    render();
  });
}

async function selectChoice(value) {
  playChoiceChime();
  const item = introSteps[state.step];
  state.answers[item.id] = value;
  state.skips = state.skips.filter(id => id !== item.id);
  await persist();
  advance();
}

function openStorageModal() {
  el.storageModal.classList.remove("hidden");
  el.storageSupport.innerHTML = "";
  if (!("showDirectoryPicker" in window)) {
    el.storageSupport.innerHTML = "当前浏览器不支持直接写入文件夹。你仍可继续，故事会保存在当前浏览器中，并可随时下载备份。";
    document.getElementById("chooseFolderBtn").disabled = true;
  } else {
    el.storageSupport.textContent = "如需本地副本，请使用 Chrome 或 Edge；浏览器会询问一次文件夹访问权限。";
  }
}

function closeStorageModal() { el.storageModal.classList.add("hidden"); }

async function chooseFolder() {
  try {
    const handle = await window.showDirectoryPicker({ id: "life-archive", mode: "readwrite", startIn: "documents" });
    directoryHandle = handle;
    state.folderName = handle.name;
    state.storageMode = "folder";
    await saveDirectoryHandle(handle);
    await persist();
    closeStorageModal();
    showToast("保存位置已选好");
    if (state.section === "intro" && state.step === 0) openAlbumSequence();
  } catch (error) {
    if (error?.name !== "AbortError") showToast("没有选成功，请再试一次");
  }
}

async function useFallback() {
  state.storageMode = "browser";
  state.folderName = "";
  await persist();
  closeStorageModal();
  showToast("已开启浏览器保存");
  if (state.section === "intro" && state.step === 0) openAlbumSequence();
}

async function verifyPermission(handle, request) {
  const options = { mode: "readwrite" };
  if ((await handle.queryPermission(options)) === "granted") return true;
  if (request && (await handle.requestPermission(options)) === "granted") return true;
  return false;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("life-journey", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("handles");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveDirectoryHandle(handle) {
  const db = await openDb();
  const tx = db.transaction("handles", "readwrite");
  tx.objectStore("handles").put(handle, PROJECT_ID);
}

async function restoreDirectoryHandle() {
  try {
    const db = await openDb();
    const request = db.transaction("handles").objectStore("handles").get(PROJECT_ID);
    request.onsuccess = async () => {
      if (!request.result) return;
      directoryHandle = request.result;
      state.folderName = directoryHandle.name;
      if (await verifyPermission(directoryHandle, false)) {
        state.storageMode = "folder";
        updateSaveState(`已连接 ${state.folderName} / ${PROJECT_ID}`);
      } else updateSaveState("保存文件夹需要重新授权");
      render();
    };
  } catch (_) {}
}

async function handlePhoto(file) {
  if (!file || !pendingPhotoQuestion) return;
  const allCount = Object.values(state.attachments).flat().length + 1;
  const ext = (file.name.split(".").pop() || "jpg").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const photoId = `PHOTO-${String(allCount).padStart(4, "0")}`;
  const storedName = `${photoId}.${ext}`;
  let stored = false;
  if (localService) {
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      let binary = "";
      const chunk = 0x8000;
      for (let i = 0; i < bytes.length; i += chunk) binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
      const response = await fetch("/api/photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: storedName, data: btoa(binary) })
      });
      stored = response.ok;
    } catch (error) {
      console.warn("Local photo save failed", error);
    }
  }
  if (!stored && directoryHandle && await verifyPermission(directoryHandle, true)) {
    try {
      const projectDir = await directoryHandle.getDirectoryHandle(PROJECT_ID, { create: true });
      const uploads = await projectDir.getDirectoryHandle("uploads", { create: true });
      const fh = await uploads.getFileHandle(storedName, { create: true });
      const writable = await fh.createWritable();
      await writable.write(file);
      await writable.close();
      stored = true;
    } catch (_) {}
  }
  const item = { attachment_id: photoId, filename: storedName, original_name: file.name, mime_type: file.type, size: file.size, storage_status: stored ? "saved_to_folder" : "metadata_only" };
  state.attachments[pendingPhotoQuestion] = [...(state.attachments[pendingPhotoQuestion] || []), item];
  await persist();
  render();
  showToast(stored ? "照片已经收好" : "已记下照片信息；下载备份时请另存原图");
  el.photoInput.value = "";
}

function downloadBackup() {
  const blob = new Blob([JSON.stringify(snapshot(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${PROJECT_ID}-backup.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("备份已开始下载");
}

function routeFromHash() {
  state.view = location.hash === "#os" ? "os" : "journey";
  render();
}

async function detectLocalService() {
  try {
    const response = await fetch("/api/status", { cache: "no-store" });
    if (!response.ok) return;
    const status = await response.json();
    if (!status.ok || status.projectId !== PROJECT_ID) return;
    localService = status;
    try {
      const savedResponse = await fetch("/api/project", { cache: "no-store" });
      if (savedResponse.ok) {
        const saved = await savedResponse.json();
        if (saved.project_id === PROJECT_ID) {
          state.answers = Object.fromEntries((saved.responses || []).map(item => [item.content_id, item.value]));
          state.skips = saved.skipped_content_ids || [];
          state.attachments = {};
          (saved.attachments || []).forEach(item => {
            state.attachments[item.content_id] = [...(state.attachments[item.content_id] || []), item];
          });
          if (saved.current) {
            state.section = saved.current.section || state.section;
            state.step = saved.current.intro_step ?? state.step;
            state.chapterIndex = saved.current.chapter_index ?? state.chapterIndex;
            state.chapterStep = saved.current.chapter_step ?? state.chapterStep;
            if (saved.current.chapter_index === undefined && state.section === "complete") state.section = "chapter_complete";
          }
        }
      }
    } catch (_) {}
    state.storageMode = "local_service";
    state.folderName = status.archivePath;
    localStorage.setItem(`${PROJECT_ID}:state`, JSON.stringify(state));
    updateSaveState(`已连接本机硬盘 · ${status.archivePath}`);
    render();
  } catch (_) {
    // Direct-file mode falls back to the browser folder picker.
  }
}

el.stage.addEventListener("click", event => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action) handleAction(action);
  const choice = event.target.closest("[data-choice]")?.dataset.choice;
  if (choice) selectChoice(choice);
});
document.getElementById("homeBtn").addEventListener("click", () => { location.hash = "journey"; state.section = "intro"; state.step = 0; persist(); render(); });
document.getElementById("osBtn").addEventListener("click", () => { location.hash = "os"; });
document.getElementById("soundBtn").addEventListener("click", () => ensureAudio(state.audioPreference !== true));
document.getElementById("soundSettingsBtn").addEventListener("click", openSoundSettings);
document.getElementById("soundClose").addEventListener("click", closeSoundSettings);
document.getElementById("soundDone").addEventListener("click", closeSoundSettings);
el.musicVolumeControl.addEventListener("input", event => updateMusicVolume(event.target.value));
el.sfxVolumeControl.addEventListener("input", event => updateSfxVolume(event.target.value));
el.sfxVolumeControl.addEventListener("change", () => playSfx("button", .88));
window.addEventListener("pointerdown", event => {
  if (event.target?.closest?.("#soundBtn, #soundSettingsBtn, #soundModal")) return;
  const active = soundscape.activeDeck === 0 ? el.bgmA : el.bgmB;
  if (state.audioPreference !== false && (!active || active.paused)) ensureAudio(true);
}, { once: true });
document.getElementById("chooseFolderBtn").addEventListener("click", chooseFolder);
document.getElementById("useFallbackBtn").addEventListener("click", useFallback);
document.getElementById("storageClose").addEventListener("click", closeStorageModal);
el.photoInput.addEventListener("change", () => handlePhoto(el.photoInput.files?.[0]));
window.addEventListener("hashchange", routeFromHash);
window.addEventListener("keydown", event => {
  if (event.key === "Enter" && !event.shiftKey && event.target?.id === "answerField" && event.target.tagName !== "TEXTAREA") handleAction("continue");
});

function registerWebMCP() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const register = tool => Promise.resolve(context.registerTool(tool)).catch(() => {});
  register({
    name: "read_life_journey_progress",
    title: "读取 LIFE JOURNEY 进度",
    description: "读取 LIFE-00001 当前章节、回答数与保存模式，不修改数据。",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() { return { project_id: PROJECT_ID, section: state.section, chapter_id: activeChapter().id, answered: Object.keys(state.answers).length, skipped: state.skips.length, storage_mode: state.storageMode }; }
  });
  register({
    name: "save_life_journey_answer",
    title: "保存一个人生故事回答",
    description: "按内容 ID 保存 LIFE-00001 的一条文字回答，并更新页面与本地存储。",
    inputSchema: { type: "object", properties: { content_id: { type: "string" }, value: { type: "string", minLength: 1 } }, required: ["content_id", "value"], additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    async execute(input) {
      const validIds = [...introSteps, ...chapterQuestions].map(x => x.id);
      if (!input || !validIds.includes(input.content_id) || typeof input.value !== "string" || !input.value.trim()) throw new Error("无效的内容 ID 或空回答");
      state.answers[input.content_id] = input.value.trim();
      state.skips = state.skips.filter(id => id !== input.content_id);
      await persist(); render();
      return { project_id: PROJECT_ID, content_id: input.content_id, status: "saved" };
    }
  });
}

hydrate();
registerWebMCP();
