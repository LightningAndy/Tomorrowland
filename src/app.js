// ============================================================
// AUTH CONFIG
// ============================================================
const USERS = __USERS_INJECT__;

// ============================================================
// FIREBASE CONFIG
// ============================================================
const FIREBASE_URL = 'https://tomorrowland2026-47c7b-default-rtdb.europe-west1.firebasedatabase.app';

// ============================================================
// LINEUP DATA — Tomorrowland Belgium 2026, Weekend 1
// ============================================================
const LINEUP = [

  // ── FRIDAY 17 JULY ──
  // Mainstage
  { id: 1,  day: 1, name: 'Martin Garrix',         stage: 'Mainstage' },
  { id: 2,  day: 1, name: 'Chainsmokers',           stage: 'Mainstage' },
  { id: 3,  day: 1, name: 'Sebastian Ingrosso',     stage: 'Mainstage' },
  { id: 4,  day: 1, name: 'NERVO',                  stage: 'Mainstage' },
  { id: 5,  day: 1, name: 'Henri PFR',              stage: 'Mainstage' },
  { id: 6,  day: 1, name: 'Disco Lines',            stage: 'Mainstage' },
  { id: 7,  day: 1, name: 'Marlon Hoffstadt',       stage: 'Mainstage' },
  { id: 8,  day: 1, name: 'Novah',                  stage: 'Mainstage' },
  // Freedom by Bud
  { id: 9,  day: 1, name: 'Mind Against',           stage: 'Freedom by Bud' },
  { id: 10, day: 1, name: 'Miss Monique',           stage: 'Freedom by Bud' },
  { id: 11, day: 1, name: 'Max Styler',             stage: 'Freedom by Bud' },
  { id: 12, day: 1, name: 'Holy Priest',            stage: 'Freedom by Bud' },
  { id: 13, day: 1, name: 'Jesabel',                stage: 'Freedom by Bud' },
  { id: 14, day: 1, name: 'Rose Ringed',            stage: 'Freedom by Bud' },
  { id: 15, day: 1, name: 'Semsei',                 stage: 'Freedom by Bud' },
  // The Rose Garden
  { id: 16, day: 1, name: 'Alison Wonderland',      stage: 'The Rose Garden' },
  { id: 17, day: 1, name: 'Camo & Krooked',         stage: 'The Rose Garden' },
  { id: 18, day: 1, name: 'Murdock',                stage: 'The Rose Garden' },
  { id: 19, day: 1, name: 'Anton Invicta',          stage: 'The Rose Garden' },
  { id: 20, day: 1, name: 'MAE.LIEN',               stage: 'The Rose Garden' },
  { id: 21, day: 1, name: 'Kanine',                 stage: 'The Rose Garden' },
  { id: 22, day: 1, name: 'Primate',                stage: 'The Rose Garden' },
  { id: 23, day: 1, name: 'Synoxis',                stage: 'The Rose Garden' },
  // Atmosphere
  { id: 24, day: 1, name: 'Sara Landry',            stage: 'Atmosphere' },
  { id: 25, day: 1, name: 'Nico Moreno',            stage: 'Atmosphere' },
  { id: 26, day: 1, name: 'ROW1',                   stage: 'Atmosphere' },
  { id: 27, day: 1, name: 'MANDY b2b NEGITIV',      stage: 'Atmosphere' },
  { id: 28, day: 1, name: 'KUKO',                   stage: 'Atmosphere' },
  { id: 29, day: 1, name: 'Peterblue',              stage: 'Atmosphere' },
  { id: 30, day: 1, name: 'sim0ne b2b Southstar',   stage: 'Atmosphere' },
  { id: 31, day: 1, name: 'Bisoux',                 stage: 'Atmosphere' },
  // Core
  { id: 32, day: 1, name: 'Modeselektor (DJ-set)',  stage: 'Core' },
  { id: 33, day: 1, name: 'Sasha b2b Young Marco',  stage: 'Core' },
  { id: 34, day: 1, name: 'Sally C',                stage: 'Core' },
  { id: 35, day: 1, name: 'Kettama b2b Michael Bibi',stage: 'Core' },
  { id: 36, day: 1, name: 'Bibi Seck',              stage: 'Core' },
  { id: 37, day: 1, name: 'Eileen',                 stage: 'Core' },
  // The Great Library
  { id: 38, day: 1, name: 'Hardwell b2b Sub Zero Project', stage: 'The Great Library' },
  { id: 39, day: 1, name: 'Artbat',                 stage: 'The Great Library' },
  { id: 40, day: 1, name: 'R3hab',                  stage: 'The Great Library' },
  { id: 41, day: 1, name: 'Nicky Romero',           stage: 'The Great Library' },
  { id: 42, day: 1, name: 'Sam Feldt',              stage: 'The Great Library' },
  { id: 43, day: 1, name: 'Ofenbach',               stage: 'The Great Library' },
  { id: 44, day: 1, name: 'Oliver Heldens',         stage: 'The Great Library' },
  { id: 45, day: 1, name: 'Mike Williams',          stage: 'The Great Library' },
  { id: 46, day: 1, name: 'Da Tweekaz',             stage: 'The Great Library' },
  // Planaxis
  { id: 47, day: 1, name: 'John OO Fleming',        stage: 'Planaxis' },
  { id: 48, day: 1, name: 'Neelix',                 stage: 'Planaxis' },
  { id: 49, day: 1, name: 'Hi Profile',             stage: 'Planaxis' },
  { id: 50, day: 1, name: 'Omiki',                  stage: 'Planaxis' },
  { id: 51, day: 1, name: 'Somnia',                 stage: 'Planaxis' },
  // Crystal Garden
  { id: 52, day: 1, name: 'Kettama b2b Michael Bibi', stage: 'Crystal Garden' },
  { id: 53, day: 1, name: 'Poleen',                 stage: 'Crystal Garden' },
  { id: 54, day: 1, name: 'Eridu',                  stage: 'Crystal Garden' },
  { id: 55, day: 1, name: 'Marsolo',                stage: 'Crystal Garden' },
  // The Rave Cave
  { id: 56, day: 1, name: 'Junkie Kid',             stage: 'The Rave Cave' },
  { id: 57, day: 1, name: 'Ben Malone',             stage: 'The Rave Cave' },
  { id: 58, day: 1, name: 'Thomas Moulene',         stage: 'The Rave Cave' },
  { id: 59, day: 1, name: 'Paloma',                 stage: 'The Rave Cave' },
  // Melodia
  { id: 60, day: 1, name: 'Da Capo b2b Caiiro b2b Enoo Napa', stage: 'Melodia by Corona' },
  { id: 61, day: 1, name: 'Thakzin',               stage: 'Melodia by Corona' },
  { id: 62, day: 1, name: 'Vanco',                  stage: 'Melodia by Corona' },
  { id: 63, day: 1, name: 'Danni Gato',             stage: 'Melodia by Corona' },

  // ── SATURDAY 18 JULY ──
  // Mainstage
  { id: 101, day: 2, name: 'David Guetta',           stage: 'Mainstage' },
  { id: 102, day: 2, name: 'Fisher',                 stage: 'Mainstage' },
  { id: 103, day: 2, name: 'Dimitri Vegas & Like Mike', stage: 'Mainstage' },
  { id: 104, day: 2, name: 'Boris Brejcha',          stage: 'Mainstage' },
  { id: 105, day: 2, name: 'Maddix',                 stage: 'Mainstage' },
  { id: 106, day: 2, name: 'John Newman',            stage: 'Mainstage' },
  { id: 107, day: 2, name: 'HALŌ',                   stage: 'Mainstage' },
  // Freedom by Bud
  { id: 108, day: 2, name: 'Armin van Buuren',       stage: 'Freedom by Bud' },
  { id: 109, day: 2, name: 'Netsky',                 stage: 'Freedom by Bud' },
  { id: 110, day: 2, name: 'Meduza³',               stage: 'Freedom by Bud' },
  { id: 111, day: 2, name: 'Space 92',               stage: 'Freedom by Bud' },
  { id: 112, day: 2, name: 'Plastik Funk b2b Olympe',stage: 'Freedom by Bud' },
  { id: 113, day: 2, name: 'Dave Lambert',           stage: 'Freedom by Bud' },
  { id: 114, day: 2, name: 'Luna & Lenthe',          stage: 'Freedom by Bud' },
  // Atmosphere
  { id: 115, day: 2, name: 'Reinier Zonneveld (live)', stage: 'Atmosphere' },
  { id: 116, day: 2, name: 'Ben Klock',              stage: 'Atmosphere' },
  { id: 117, day: 2, name: 'Indira Paganotto',       stage: 'Atmosphere' },
  { id: 118, day: 2, name: 'Elli Acula',             stage: 'Atmosphere' },
  { id: 119, day: 2, name: 'Estella Boersma',        stage: 'Atmosphere' },
  { id: 120, day: 2, name: 'Marhu',                  stage: 'Atmosphere' },
  // Core
  { id: 121, day: 2, name: 'Bedouin',                stage: 'Core' },
  { id: 122, day: 2, name: 'Antdot',                 stage: 'Core' },
  { id: 123, day: 2, name: 'Betical',                stage: 'Core' },
  { id: 124, day: 2, name: 'Dino Lenny',             stage: 'Core' },
  { id: 125, day: 2, name: 'Curol',                  stage: 'Core' },
  // The Great Library
  { id: 126, day: 2, name: 'Lost Frequencies',       stage: 'The Great Library' },
  { id: 127, day: 2, name: 'Oliver Heldens',         stage: 'The Great Library' },
  { id: 128, day: 2, name: 'Agents Of Time',         stage: 'The Great Library' },
  { id: 129, day: 2, name: 'Andromedik',             stage: 'The Great Library' },
  { id: 130, day: 2, name: 'Marten Hørger',          stage: 'The Great Library' },
  { id: 131, day: 2, name: 'Linska',                 stage: 'The Great Library' },
  // Crystal Garden
  { id: 132, day: 2, name: 'Steve Angello',          stage: 'Crystal Garden' },
  { id: 133, day: 2, name: 'Morten b2b Malaa',       stage: 'Crystal Garden' },
  { id: 134, day: 2, name: 'Ben Hemsley',            stage: 'Crystal Garden' },
  { id: 135, day: 2, name: 'DALI',                   stage: 'Crystal Garden' },
  // Planaxis
  { id: 136, day: 2, name: 'Steve Aoki',             stage: 'Planaxis' },
  { id: 137, day: 2, name: 'Laidback Luke',          stage: 'Planaxis' },
  { id: 138, day: 2, name: 'Bassjackers',            stage: 'Planaxis' },
  { id: 139, day: 2, name: 'Lucas & Steve',          stage: 'Planaxis' },
  { id: 140, day: 2, name: 'Quintino',               stage: 'Planaxis' },
  { id: 141, day: 2, name: 'DVBBS',                  stage: 'Planaxis' },
  { id: 142, day: 2, name: 'Chocolate Puma',         stage: 'Planaxis' },
  // The Rave Cave
  { id: 143, day: 2, name: 'Bobby & Djenko',         stage: 'The Rave Cave' },
  { id: 144, day: 2, name: 'Vitucci',                stage: 'The Rave Cave' },
  { id: 145, day: 2, name: 'Los Bomberos',           stage: 'The Rave Cave' },
  // Melodia
  { id: 146, day: 2, name: 'Arado',                  stage: 'Melodia by Corona' },
  { id: 147, day: 2, name: 'Sam Shure',              stage: 'Melodia by Corona' },
  { id: 148, day: 2, name: 'LYA',                    stage: 'Melodia by Corona' },
  // Rose Garden
  { id: 149, day: 2, name: 'Push',                   stage: 'The Rose Garden' },
  { id: 150, day: 2, name: 'Phi Phi',                stage: 'The Rose Garden' },
  { id: 151, day: 2, name: 'Franky Kloeck',          stage: 'The Rose Garden' },
  { id: 152, day: 2, name: 'Funkhauser',             stage: 'The Rose Garden' },

  // ── SUNDAY 19 JULY ──
  // Mainstage
  { id: 201, day: 3, name: 'Calvin Harris',          stage: 'Mainstage' },
  { id: 202, day: 3, name: 'John Summit',            stage: 'Mainstage' },
  { id: 203, day: 3, name: 'Alesso',                 stage: 'Mainstage' },
  { id: 204, day: 3, name: 'Kevin de Vries',         stage: 'Mainstage' },
  { id: 205, day: 3, name: 'Malugi',                 stage: 'Mainstage' },
  { id: 206, day: 3, name: 'B Jones',                stage: 'Mainstage' },
  // Freedom by Bud
  { id: 207, day: 3, name: 'ALOK: Rave The World',   stage: 'Freedom by Bud' },
  { id: 208, day: 3, name: 'Chase & Status (DJ set)',stage: 'Freedom by Bud' },
  { id: 209, day: 3, name: 'I Hate Models',          stage: 'Freedom by Bud' },
  { id: 210, day: 3, name: 'Pegassi',                stage: 'Freedom by Bud' },
  { id: 211, day: 3, name: 'Arielle Free',           stage: 'Freedom by Bud' },
  { id: 212, day: 3, name: 'Neon',                   stage: 'Freedom by Bud' },
  // Atmosphere
  { id: 213, day: 3, name: 'Amelie Lens',            stage: 'Atmosphere' },
  { id: 214, day: 3, name: 'Anetha',                 stage: 'Atmosphere' },
  { id: 215, day: 3, name: 'SHDW b2b ÜBERKIKZ',      stage: 'Atmosphere' },
  { id: 216, day: 3, name: 'Blondex',                stage: 'Atmosphere' },
  { id: 217, day: 3, name: 'Øtta',                   stage: 'Atmosphere' },
  { id: 218, day: 3, name: 'VE/RA',                  stage: 'Atmosphere' },
  { id: 219, day: 3, name: 'Flour',                  stage: 'Atmosphere' },
  // Core
  { id: 220, day: 3, name: 'Avalon Emerson b2b Ben UFO', stage: 'Core' },
  { id: 221, day: 3, name: 'Job Jobse',              stage: 'Core' },
  { id: 222, day: 3, name: 'Sedef Adasï',            stage: 'Core' },
  { id: 223, day: 3, name: 'Fafi Abdel Nour',        stage: 'Core' },
  { id: 224, day: 3, name: 'Ineffekt',               stage: 'Core' },
  // The Great Library
  { id: 225, day: 3, name: 'Afrojack',               stage: 'The Great Library' },
  { id: 226, day: 3, name: 'Dimitri Vegas b2b Timmy Trumpet', stage: 'The Great Library' },
  { id: 227, day: 3, name: 'Vini Vici',              stage: 'The Great Library' },
  { id: 228, day: 3, name: 'Gryffin',                stage: 'The Great Library' },
  { id: 229, day: 3, name: 'Gabry Ponte',            stage: 'The Great Library' },
  { id: 230, day: 3, name: 'Blasterjaxx',            stage: 'The Great Library' },
  { id: 231, day: 3, name: 'Hypaton',                stage: 'The Great Library' },
  // Crystal Garden
  { id: 232, day: 3, name: 'DJ Tennis b2b Vintage Culture', stage: 'Crystal Garden' },
  { id: 233, day: 3, name: 'Oscar and the Wolf',     stage: 'Crystal Garden' },
  { id: 234, day: 3, name: 'Wade',                   stage: 'Crystal Garden' },
  { id: 235, day: 3, name: 'DJ Gigola',              stage: 'Crystal Garden' },
  // Planaxis
  { id: 236, day: 3, name: 'Seven Lions',            stage: 'Planaxis' },
  { id: 237, day: 3, name: 'Subtronics',             stage: 'Planaxis' },
  { id: 238, day: 3, name: 'Liquid Stranger',        stage: 'Planaxis' },
  { id: 239, day: 3, name: 'Malaa\'s Alter Ego',     stage: 'Planaxis' },
  { id: 240, day: 3, name: 'Nostalgix',              stage: 'Planaxis' },
  // The Rose Garden
  { id: 241, day: 3, name: 'Sub Zero Project',       stage: 'The Rose Garden' },
  { id: 242, day: 3, name: 'Rooler',                 stage: 'The Rose Garden' },
  { id: 243, day: 3, name: 'Rebelion',               stage: 'The Rose Garden' },
  { id: 244, day: 3, name: 'Isaac',                  stage: 'The Rose Garden' },
  { id: 245, day: 3, name: 'TNT',                    stage: 'The Rose Garden' },
  // The Rave Cave
  { id: 246, day: 3, name: 'Coco Bevan',             stage: 'The Rave Cave' },
  { id: 247, day: 3, name: 'Godtripper',             stage: 'The Rave Cave' },
  { id: 248, day: 3, name: 'Mell Tierra',            stage: 'The Rave Cave' },
  // Melodia
  { id: 249, day: 3, name: 'Felix Da Funk',          stage: 'Melodia by Corona' },
  { id: 250, day: 3, name: 'Tania Moon',             stage: 'Melodia by Corona' },
  { id: 251, day: 3, name: 'Christian82',            stage: 'Melodia by Corona' },
  // Celestia
  { id: 252, day: 3, name: 'Helsloot',               stage: 'Celestia by KuCoin' },
  { id: 253, day: 3, name: 'Öona Dahl',              stage: 'Celestia by KuCoin' },
  { id: 254, day: 3, name: 'Fake Mood',              stage: 'Celestia by KuCoin' },
];

const DAY_NAMES = { 1: 'Friday 17 Jul', 2: 'Saturday 18 Jul', 3: 'Sunday 19 Jul' };

// Music search links
function getMusicLinks(artistName) {
  const q = encodeURIComponent(artistName);
  return {
    spotify:     `https://open.spotify.com/search/${q}`,
    apple:       `https://music.apple.com/search?term=${q}`,
    soundcloud:  `https://soundcloud.com/search?q=${q}`,
  };
}

// ============================================================
// STATE
// ============================================================
let currentUser = null;
let currentDay  = 'all';
let ratings     = {};
let listeners   = [];

// ============================================================
// FIREBASE HELPERS
// ============================================================
async function fbSet(path, data) {
  await fetch(`${FIREBASE_URL}/${path}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

async function fbGet(path) {
  const res = await fetch(`${FIREBASE_URL}/${path}.json`);
  return res.json();
}

function fbListen(path, callback) {
  const interval = setInterval(async () => {
    try {
      const data = await fbGet(path);
      if (data !== null) callback(data);
    } catch(e) {}
  }, 3000);
  listeners.push(interval);
  return interval;
}

function closeListeners() {
  listeners.forEach(i => clearInterval(i));
  listeners = [];
}

// ============================================================
// AUTH
// ============================================================
document.getElementById('passwordInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

async function handleLogin() {
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const err      = document.getElementById('loginError');

  if (USERS[username] && USERS[username] === password) {
    currentUser = username;
    err.classList.remove('visible');
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appScreen').style.display   = 'block';
    document.getElementById('currentUserDisplay').textContent = currentUser;
    document.getElementById('userAvatar').textContent = currentUser.charAt(0).toUpperCase();
    await initApp();
  } else {
    err.classList.add('visible');
    document.getElementById('passwordInput').value = '';
  }
}

function handleLogout() {
  closeListeners();
  currentUser = null;
  ratings     = {};
  document.getElementById('appScreen').style.display   = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('usernameInput').value = '';
  document.getElementById('passwordInput').value = '';
}

// ============================================================
// INIT
// ============================================================
async function initApp() {
  const data = await fbGet('ratings');
  ratings = data || {};
  renderArtistList();
  renderPriorityList();
  renderConflicts();
  fbListen('ratings', snapshot => {
    ratings = snapshot;
    renderArtistList();
    renderPriorityList();
    renderConflicts();
  });
}

// ============================================================
// RATING HELPERS
// ============================================================
function getUserRating(userId, artistId) {
  return ratings?.[userId]?.[artistId] || { stars: 0, nope: false };
}

async function setUserRating(userId, artistId, update) {
  if (!ratings[userId]) ratings[userId] = {};
  const current = getUserRating(userId, artistId);
  const updated = { ...current, ...update };
  ratings[userId][artistId] = updated;
  await fbSet(`ratings/${userId}/${artistId}`, updated);
}

function getPartner() {
  return Object.keys(USERS).find(u => u !== currentUser) || null;
}

// ============================================================
// TABS & FILTERS
// ============================================================
function showTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function filterDay(day, btn) {
  currentDay = day;
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderArtistList();
  renderPriorityList();
}

function filteredArtists() {
  if (currentDay === 'all') return LINEUP;
  return LINEUP.filter(a => a.day === parseInt(currentDay));
}

// ============================================================
// RENDER ARTIST LIST
// ============================================================
function renderArtistList() {
  const container = document.getElementById('artistList');
  const artists   = filteredArtists();
  const partner   = getPartner();

  const byDay = {};
  artists.forEach(a => {
    if (!byDay[a.day]) byDay[a.day] = [];
    byDay[a.day].push(a);
  });

  container.innerHTML = '';

  Object.keys(byDay).sort().forEach(day => {
    if (currentDay === 'all') {
      const hdr = document.createElement('div');
      hdr.className = 'day-header';
      hdr.textContent = DAY_NAMES[day];
      container.appendChild(hdr);
    }
    byDay[day].forEach(artist => container.appendChild(buildArtistCard(artist, partner)));
  });
}

function buildArtistCard(artist, partner) {
  const myRating      = getUserRating(currentUser, artist.id);
  const partnerRating = partner ? getUserRating(partner, artist.id) : null;
  const isConflict    = detectConflict(myRating, partnerRating);
  const links         = getMusicLinks(artist.name);

  const card = document.createElement('div');
  card.className = 'artist-card' + (isConflict ? ' has-conflict' : '');
  card.id = 'card-' + artist.id;

  // Info + music links
  const info = document.createElement('div');
  info.style.flex = '1';
  info.innerHTML = `
    <div class="artist-name">${artist.name}${isConflict ? ' <span style="color:var(--red);font-size:13px;">⚠ conflict</span>' : ''}</div>
    <div class="artist-stage">${artist.stage} · ${DAY_NAMES[artist.day]}</div>
    <div class="music-links">
      <a href="${links.spotify}" target="_blank" class="music-link spotify" title="Spotify">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        Spotify
      </a>
      <a href="${links.apple}" target="_blank" class="music-link apple" title="Apple Music">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.05-.003-.098-.01-.147-.013H5.986c-.05.003-.1.01-.15.013a10.49 10.49 0 00-1.56.15 5.022 5.022 0 00-1.878.726C1.316 1.624.57 2.624.254 3.934a9.23 9.23 0 00-.24 2.19C.005 6.386 0 6.646 0 6.906v10.125c0 .26.005.52.014.758a9.23 9.23 0 00.24 2.19c.316 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.877.726c.513.1 1.033.148 1.564.15.05.003.098.01.147.013h12.028c.05-.003.1-.01.15-.013a10.49 10.49 0 001.56-.15 5.022 5.022 0 001.877-.726c1.118-.734 1.864-1.734 2.18-3.043a9.23 9.23 0 00.24-2.19c.01-.238.015-.498.015-.758V6.906c0-.26-.005-.52-.015-.782zM12 17.5c-3.038 0-5.5-2.462-5.5-5.5S8.962 6.5 12 6.5s5.5 2.462 5.5 5.5-2.462 5.5-5.5 5.5zm6.25-9.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>
        Apple Music
      </a>
      <a href="${links.soundcloud}" target="_blank" class="music-link soundcloud" title="SoundCloud">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.017 0-.033.01-.05.01A4.174 4.174 0 000 16.348C0 18.473 1.723 20.2 3.85 20.2h13.5c1.93 0 3.5-1.57 3.5-3.5 0-1.8-1.37-3.27-3.12-3.47.05-.32.08-.65.08-.98 0-3.36-2.72-6.08-6.08-6.08-2.37 0-4.43 1.35-5.47 3.33-.47-.27-1.01-.43-1.58-.43-1.74 0-3.15 1.4-3.15 3.13 0 .27.04.54.1.79l-.45.14z"/></svg>
        SoundCloud
      </a>
    </div>`;
  card.appendChild(info);

  // Partner rating
  if (partner) {
    const pr = document.createElement('div');
    pr.className = 'partner-rating';
    pr.innerHTML = buildPartnerStarsHTML(partnerRating, partner);
    card.appendChild(pr);
  }

  // My rating
  const section = document.createElement('div');
  section.className = 'rating-section';
  section.innerHTML = `<div class="rating-label">Your rating</div>`;

  const starsDiv = document.createElement('div');
  starsDiv.className = 'stars';
  for (let s = 1; s <= 5; s++) {
    const star = document.createElement('span');
    star.className = 'star' + (s <= myRating.stars ? ' lit' : '');
    star.textContent = '★';
    star.addEventListener('mouseenter', () => previewStars(starsDiv, s));
    star.addEventListener('mouseleave', () => resetStarPreview(starsDiv, artist.id));
    star.addEventListener('click', async () => {
      const current = getUserRating(currentUser, artist.id);
      const newVal  = current.stars === s ? 0 : s;
      await setUserRating(currentUser, artist.id, { stars: newVal, nope: false });
    });
    starsDiv.appendChild(star);
  }
  section.appendChild(starsDiv);

  const nope = document.createElement('button');
  nope.className = 'nope-btn' + (myRating.nope ? ' active' : '');
  nope.innerHTML = `<span>✕</span> Not for me`;
  nope.addEventListener('click', async () => {
    const current = getUserRating(currentUser, artist.id);
    await setUserRating(currentUser, artist.id, { nope: !current.nope, stars: 0 });
  });
  section.appendChild(nope);
  card.appendChild(section);
  return card;
}

function buildPartnerStarsHTML(pr, partner) {
  const shortName = partner.replace(/\d+$/, '');
  if (!pr || (!pr.stars && !pr.nope)) {
    return `<span class="partner-label">${shortName}: <span style="color:var(--text3)">—</span></span>`;
  }
  if (pr.nope) {
    return `<span class="partner-label">${shortName}:</span>
            <span class="partner-stars"><span class="pstar nope-shown">✕ Not for me</span></span>`;
  }
  let html = `<span class="partner-label">${shortName}:</span><span class="partner-stars">`;
  for (let s = 1; s <= 5; s++) html += `<span class="pstar${s <= pr.stars ? ' lit' : ''}">★</span>`;
  return html + `</span>`;
}

function previewStars(container, val) {
  container.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('preview', i < val && !s.classList.contains('lit'));
  });
}

function resetStarPreview(container, artistId) {
  const rating = getUserRating(currentUser, artistId);
  container.querySelectorAll('.star').forEach((s, i) => {
    s.classList.remove('preview');
    s.classList.toggle('lit', i < rating.stars);
  });
}

// ============================================================
// PRIORITY LIST
// ============================================================
function getScore(artistId) {
  const partner = getPartner();
  const my      = getUserRating(currentUser, artistId);
  const pr      = partner ? getUserRating(partner, artistId) : null;
  if (my.nope && pr?.nope) return -2;
  let scores = [];
  if (my.nope)        scores.push(0);
  else if (my.stars)  scores.push(my.stars);
  if (pr) {
    if (pr.nope)       scores.push(0);
    else if (pr.stars) scores.push(pr.stars);
  }
  return scores.length ? scores.reduce((a,b) => a+b, 0) / scores.length : -1;
}

function detectConflict(myR, partnerR) {
  if (!partnerR) return false;
  return (myR.stars === 5 && partnerR.nope) || (myR.nope && partnerR.stars === 5);
}

function renderPriorityList() {
  const container = document.getElementById('priorityList');
  const scored    = filteredArtists().map(a => ({ ...a, score: getScore(a.id) }));
  scored.sort((a, b) => b.score - a.score);
  const rated       = scored.filter(a => a.score >= 0);
  const unrated     = scored.filter(a => a.score === -1);
  const mutual_nope = scored.filter(a => a.score === -2);
  container.innerHTML = '';
  if (!rated.length && !unrated.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">⭐</div><p>Rate some artists first to see the priority list.</p></div>`;
    return;
  }
  let rank = 1;
  rated.forEach(a => {
    const my = getUserRating(currentUser, a.id);
    const pr = getPartner() ? getUserRating(getPartner(), a.id) : null;
    const conflict = detectConflict(my, pr);
    const item = document.createElement('div');
    item.className = 'priority-item';
    item.innerHTML = `
      <div class="priority-rank${rank <= 3 ? ' top' : ''}">${rank}</div>
      <div style="flex:1">
        <div class="priority-name">${a.name}</div>
        <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
      </div>
      ${conflict ? `<span class="score-pill conflict">⚠</span>` : `<span class="score-pill">${a.score.toFixed(1)}</span>`}`;
    container.appendChild(item);
    rank++;
  });
  if (unrated.length) {
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-size:12px;letter-spacing:1px;color:var(--text3);text-transform:uppercase;padding:20px 0 8px;border-top:1px solid var(--border);margin-top:12px';
    hdr.textContent = 'Not yet rated';
    container.appendChild(hdr);
    unrated.forEach(a => {
      const item = document.createElement('div');
      item.className = 'priority-item';
      item.innerHTML = `<div class="priority-rank">—</div><div style="flex:1"><div class="priority-name" style="color:var(--text2)">${a.name}</div><div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div><span class="score-pill unrated">?</span>`;
      container.appendChild(item);
    });
  }
  if (mutual_nope.length) {
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-size:12px;letter-spacing:1px;color:var(--text3);text-transform:uppercase;padding:20px 0 8px;border-top:1px solid var(--border);margin-top:12px';
    hdr.textContent = 'Skip list (both said no)';
    container.appendChild(hdr);
    mutual_nope.forEach(a => {
      const item = document.createElement('div');
      item.className = 'priority-item';
      item.style.opacity = '0.4';
      item.innerHTML = `<div class="priority-rank">✕</div><div style="flex:1"><div class="priority-name">${a.name}</div><div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>`;
      container.appendChild(item);
    });
  }
}

// ============================================================
// CONFLICTS
// ============================================================
function renderConflicts() {
  const container = document.getElementById('conflictsList');
  const badge     = document.getElementById('conflictBadge');
  const partner   = getPartner();
  if (!partner) {
    container.innerHTML = `<div class="empty-state"><p>Conflicts appear once both users have rated artists.</p></div>`;
    badge.style.display = 'none';
    return;
  }
  const conflicts = LINEUP.filter(a => detectConflict(getUserRating(currentUser, a.id), getUserRating(partner, a.id)));
  if (!conflicts.length) {
    badge.style.display = 'none';
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🎉</div><p>No conflicts — you're in sync!</p></div>`;
    return;
  }
  badge.style.display = 'inline';
  badge.textContent   = conflicts.length;
  container.innerHTML = '';
  conflicts.forEach(a => {
    const my      = getUserRating(currentUser, a.id);
    const pr      = getUserRating(partner, a.id);
    const myWants = my.stars === 5;
    const item    = document.createElement('div');
    item.className = 'conflict-item';
    item.innerHTML = `
      <div class="conflict-icon">⚡</div>
      <div style="flex:1"><div class="conflict-name">${a.name}</div><div class="conflict-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>
      <div class="conflict-detail">
        <div class="conflict-row"><span class="cuser">${currentUser.replace(/\d+$/,'')}</span><span class="${myWants?'cwant':'cnope'}">${myWants?'★★★★★ Must see':'✕ Not for me'}</span></div>
        <div class="conflict-row"><span class="cuser">${partner.replace(/\d+$/,'')}</span><span class="${pr.stars===5?'cwant':'cnope'}">${pr.stars===5?'★★★★★ Must see':'✕ Not for me'}</span></div>
      </div>`;
    container.appendChild(item);
  });
}