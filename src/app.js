// ============================================================
// AUTH CONFIG
// ============================================================
const USERS = __USERS_INJECT__;

// ============================================================
// FIREBASE CONFIG
// ============================================================
const FIREBASE_URL = 'https://tomorrowland2026-47c7b-default-rtdb.europe-west1.firebasedatabase.app';

// ============================================================
// LINEUP DATA
// ============================================================
const LINEUP = [
  // ── FRIDAY 18 JULY ──
  { id: 1,  day: 1, name: 'Martin Garrix',            stage: 'Mainstage' },
  { id: 2,  day: 1, name: 'David Guetta',             stage: 'Mainstage' },
  { id: 3,  day: 1, name: 'Armin van Buuren',         stage: 'Mainstage' },
  { id: 4,  day: 1, name: 'Tiësto',                   stage: 'Mainstage' },
  { id: 5,  day: 1, name: 'Dimitri Vegas & Like Mike',stage: 'Mainstage' },
  { id: 6,  day: 1, name: 'Lost Frequencies',         stage: 'Freedom Stage' },
  { id: 7,  day: 1, name: 'Vintage Culture',          stage: 'Freedom Stage' },
  { id: 8,  day: 1, name: 'Fisher',                   stage: 'Core Stage' },
  { id: 9,  day: 1, name: 'Tale Of Us',               stage: 'Elixir Stage' },
  { id: 10, day: 1, name: 'Charlotte de Witte',       stage: 'Elixir Stage' },
  { id: 11, day: 1, name: 'Chris Liebing',            stage: 'Elixir Stage' },
  { id: 12, day: 1, name: 'Amelie Lens',              stage: 'Elixir Stage' },
  { id: 13, day: 1, name: 'Solomun',                  stage: 'Atmosphere Stage' },
  { id: 14, day: 1, name: 'Dixon',                    stage: 'Atmosphere Stage' },
  { id: 15, day: 1, name: 'Âme',                     stage: 'Atmosphere Stage' },
  { id: 16, day: 1, name: 'Peggy Gou',                stage: 'Freedom Stage' },
  { id: 17, day: 1, name: 'Dj Snake',                 stage: 'Mainstage' },
  { id: 18, day: 1, name: 'Skrillex',                 stage: 'Core Stage' },
  { id: 19, day: 1, name: 'Rezz',                     stage: 'Core Stage' },
  { id: 20, day: 1, name: 'Nicky Romero',             stage: 'Freedom Stage' },
  // ── SATURDAY 19 JULY ──
  { id: 21, day: 2, name: 'Hardwell',                 stage: 'Mainstage' },
  { id: 22, day: 2, name: 'Swedish House Mafia',      stage: 'Mainstage' },
  { id: 23, day: 2, name: 'Eric Prydz',               stage: 'Mainstage' },
  { id: 24, day: 2, name: 'Afrojack',                 stage: 'Mainstage' },
  { id: 25, day: 2, name: 'Alesso',                   stage: 'Mainstage' },
  { id: 26, day: 2, name: 'Kx5',                      stage: 'Mainstage' },
  { id: 27, day: 2, name: 'Boris Brejcha',            stage: 'Elixir Stage' },
  { id: 28, day: 2, name: 'Adriatique',               stage: 'Elixir Stage' },
  { id: 29, day: 2, name: 'Maceo Plex',               stage: 'Elixir Stage' },
  { id: 30, day: 2, name: 'Rebuke',                   stage: 'Core Stage' },
  { id: 31, day: 2, name: 'HardStone Psycho',         stage: 'Core Stage' },
  { id: 32, day: 2, name: 'Chris Avantgarde',         stage: 'Elixir Stage' },
  { id: 33, day: 2, name: 'Anyma',                    stage: 'Atmosphere Stage' },
  { id: 34, day: 2, name: 'Massano',                  stage: 'Atmosphere Stage' },
  { id: 35, day: 2, name: 'Afterlife Showcase',       stage: 'Atmosphere Stage' },
  { id: 36, day: 2, name: 'Camelphat',                stage: 'Freedom Stage' },
  { id: 37, day: 2, name: 'Chris Lake',               stage: 'Freedom Stage' },
  { id: 38, day: 2, name: 'John Summit',              stage: 'Freedom Stage' },
  { id: 39, day: 2, name: 'Diplo',                    stage: 'Core Stage' },
  { id: 40, day: 2, name: 'Blond:ish',                stage: 'Freedom Stage' },
  // ── SUNDAY 20 JULY ──
  { id: 41, day: 3, name: 'Deadmau5',                 stage: 'Mainstage' },
  { id: 42, day: 3, name: 'Above & Beyond',           stage: 'Mainstage' },
  { id: 43, day: 3, name: 'Paul van Dyk',             stage: 'Mainstage' },
  { id: 44, day: 3, name: 'Fedde Le Grand',           stage: 'Mainstage' },
  { id: 45, day: 3, name: 'Scooter',                  stage: 'Mainstage' },
  { id: 46, day: 3, name: 'Vini Vici',                stage: 'Freedom Stage' },
  { id: 47, day: 3, name: 'Simon Patterson',          stage: 'Freedom Stage' },
  { id: 48, day: 3, name: 'Headhunterz',              stage: 'Mainstage' },
  { id: 49, day: 3, name: 'W&W',                      stage: 'Mainstage' },
  { id: 50, day: 3, name: 'Quintino',                 stage: 'Freedom Stage' },
  { id: 51, day: 3, name: 'Monika Kruse',             stage: 'Elixir Stage' },
  { id: 52, day: 3, name: 'Paula Temple',             stage: 'Elixir Stage' },
  { id: 53, day: 3, name: 'I Hate Models',            stage: 'Elixir Stage' },
  { id: 54, day: 3, name: 'Enrico Sangiuliano',       stage: 'Elixir Stage' },
  { id: 55, day: 3, name: 'Reinier Zonneveld',        stage: 'Elixir Stage' },
  { id: 56, day: 3, name: 'Tiga',                     stage: 'Core Stage' },
  { id: 57, day: 3, name: 'Nico Moreno',              stage: 'Core Stage' },
  { id: 58, day: 3, name: 'Innellea',                 stage: 'Atmosphere Stage' },
  { id: 59, day: 3, name: 'Stephan Bodzin',           stage: 'Atmosphere Stage' },
  { id: 60, day: 3, name: 'Undercatt',                stage: 'Atmosphere Stage' },
];

const DAY_NAMES = { 1: 'Friday 18 Jul', 2: 'Saturday 19 Jul', 3: 'Sunday 20 Jul' };

// ============================================================
// STATE
// ============================================================
let currentUser = null;
let currentDay  = 'all';
let ratings     = {};   // { [userId]: { [artistId]: { stars, nope } } }
let listeners   = [];   // SSE connections to close on logout

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

// Real-time listener using Firebase SSE streaming
function fbListen(path, callback) {
  const es = new EventSource(`${FIREBASE_URL}/${path}.json`);
  es.addEventListener('put', e => {
    const data = JSON.parse(e.data);
    callback(data.data);
  });
  es.addEventListener('patch', e => {
    const data = JSON.parse(e.data);
    callback(data.data);
  });
  listeners.push(es);
  return es;
}

function closeListeners() {
  listeners.forEach(es => es.close());
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
  // Load all ratings once first so UI isn't blank
  const data = await fbGet('ratings');
  ratings = data || {};

  renderArtistList();
  renderPriorityList();
  renderConflicts();

  // Then subscribe to live updates for ALL ratings
  fbListen('ratings', snapshot => {
    if (!snapshot) return;
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
  // Push to Firebase
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

  const card = document.createElement('div');
  card.className = 'artist-card' + (isConflict ? ' has-conflict' : '');
  card.id = 'card-' + artist.id;

  // Info
  const info = document.createElement('div');
  info.style.flex = '1';
  info.innerHTML = `<div class="artist-name">${artist.name}${isConflict ? ' <span style="color:var(--red);font-size:13px;">⚠ conflict</span>' : ''}</div>
                    <div class="artist-stage">${artist.stage} · ${DAY_NAMES[artist.day]}</div>`;
  card.appendChild(info);

  // Partner rating (read-only)
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
    star.dataset.value = s;
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
  for (let s = 1; s <= 5; s++) {
    html += `<span class="pstar${s <= pr.stars ? ' lit' : ''}">★</span>`;
  }
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

  if (rated.length === 0 && unrated.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">⭐</div><p>Rate some artists first to see the priority list.</p></div>`;
    return;
  }

  let rank = 1;
  rated.forEach(a => {
    const my      = getUserRating(currentUser, a.id);
    const partner = getPartner();
    const pr      = partner ? getUserRating(partner, a.id) : null;
    const conflict = detectConflict(my, pr);
    const item = document.createElement('div');
    item.className = 'priority-item';
    item.innerHTML = `
      <div class="priority-rank${rank <= 3 ? ' top' : ''}">${rank}</div>
      <div style="flex:1">
        <div class="priority-name">${a.name}</div>
        <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
      </div>
      ${conflict
        ? `<span class="score-pill conflict">⚠</span>`
        : `<span class="score-pill">${a.score.toFixed(1)}</span>`}
    `;
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
      item.innerHTML = `
        <div class="priority-rank">—</div>
        <div style="flex:1"><div class="priority-name" style="color:var(--text2)">${a.name}</div>
        <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>
        <span class="score-pill unrated">?</span>`;
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
      item.innerHTML = `
        <div class="priority-rank">✕</div>
        <div style="flex:1"><div class="priority-name">${a.name}</div>
        <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>`;
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

  const conflicts = LINEUP.filter(a => {
    const my = getUserRating(currentUser, a.id);
    const pr = getUserRating(partner, a.id);
    return detectConflict(my, pr);
  });

  if (!conflicts.length) {
    badge.style.display = 'none';
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🎉</div><p>No conflicts — you're in sync!</p></div>`;
    return;
  }

  badge.style.display = 'inline';
  badge.textContent   = conflicts.length;
  container.innerHTML = '';

  conflicts.forEach(a => {
    const my        = getUserRating(currentUser, a.id);
    const pr        = getUserRating(partner, a.id);
    const myWants   = my.stars === 5;
    const item = document.createElement('div');
    item.className = 'conflict-item';
    item.innerHTML = `
      <div class="conflict-icon">⚡</div>
      <div style="flex:1">
        <div class="conflict-name">${a.name}</div>
        <div class="conflict-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
      </div>
      <div class="conflict-detail">
        <div class="conflict-row">
          <span class="cuser">${currentUser.replace(/\d+$/,'')}</span>
          <span class="${myWants ? 'cwant' : 'cnope'}">${myWants ? '★★★★★ Must see' : '✕ Not for me'}</span>
        </div>
        <div class="conflict-row">
          <span class="cuser">${partner.replace(/\d+$/,'')}</span>
          <span class="${pr.stars === 5 ? 'cwant' : 'cnope'}">${pr.stars === 5 ? '★★★★★ Must see' : '✕ Not for me'}</span>
        </div>
      </div>`;
    container.appendChild(item);
  });
}