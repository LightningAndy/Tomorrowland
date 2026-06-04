// ============================================================
// AUTH CONFIG — change passwords here
// ============================================================
const USERS = __USERS_INJECT__;

// ============================================================
// LINEUP DATA
// Artists grouped by day. Stages & timings TBA — update when released.
// ============================================================
const LINEUP = [
  // ── FRIDAY 18 JULY ──
  { id: 1,  day: 1, name: 'Martin Garrix',         stage: 'Mainstage' },
  { id: 2,  day: 1, name: 'David Guetta',           stage: 'Mainstage' },
  { id: 3,  day: 1, name: 'Armin van Buuren',       stage: 'Mainstage' },
  { id: 4,  day: 1, name: 'Tiësto',                 stage: 'Mainstage' },
  { id: 5,  day: 1, name: 'Dimitri Vegas & Like Mike', stage: 'Mainstage' },
  { id: 6,  day: 1, name: 'Lost Frequencies',       stage: 'Freedom Stage' },
  { id: 7,  day: 1, name: 'Vintage Culture',        stage: 'Freedom Stage' },
  { id: 8,  day: 1, name: 'Fisher',                 stage: 'Core Stage' },
  { id: 9,  day: 1, name: 'Tale Of Us',             stage: 'Elixir Stage' },
  { id: 10, day: 1, name: 'Charlotte de Witte',     stage: 'Elixir Stage' },
  { id: 11, day: 1, name: 'Chris Liebing',          stage: 'Elixir Stage' },
  { id: 12, day: 1, name: 'Amelie Lens',            stage: 'Elixir Stage' },
  { id: 13, day: 1, name: 'Solomun',                stage: 'Atmosphere Stage' },
  { id: 14, day: 1, name: 'Dixon',                  stage: 'Atmosphere Stage' },
  { id: 15, day: 1, name: 'Âme',                   stage: 'Atmosphere Stage' },
  { id: 16, day: 1, name: 'Peggy Gou',              stage: 'Freedom Stage' },
  { id: 17, day: 1, name: 'Dj Snake',               stage: 'Mainstage' },
  { id: 18, day: 1, name: 'Skrillex',               stage: 'Core Stage' },
  { id: 19, day: 1, name: 'Rezz',                   stage: 'Core Stage' },
  { id: 20, day: 1, name: 'Nicky Romero',           stage: 'Freedom Stage' },

  // ── SATURDAY 19 JULY ──
  { id: 21, day: 2, name: 'Hardwell',               stage: 'Mainstage' },
  { id: 22, day: 2, name: 'Swedish House Mafia',    stage: 'Mainstage' },
  { id: 23, day: 2, name: 'Eric Prydz',             stage: 'Mainstage' },
  { id: 24, day: 2, name: 'Afrojack',               stage: 'Mainstage' },
  { id: 25, day: 2, name: 'Alesso',                 stage: 'Mainstage' },
  { id: 26, day: 2, name: 'Kx5',                    stage: 'Mainstage' },
  { id: 27, day: 2, name: 'Boris Brejcha',          stage: 'Elixir Stage' },
  { id: 28, day: 2, name: 'Adriatique',             stage: 'Elixir Stage' },
  { id: 29, day: 2, name: 'Maceo Plex',             stage: 'Elixir Stage' },
  { id: 30, day: 2, name: 'Rebuke',                 stage: 'Core Stage' },
  { id: 31, day: 2, name: 'HardStone Psycho',       stage: 'Core Stage' },
  { id: 32, day: 2, name: 'Chris Avantgarde',       stage: 'Elixir Stage' },
  { id: 33, day: 2, name: 'Anyma',                  stage: 'Atmosphere Stage' },
  { id: 34, day: 2, name: 'Massano',                stage: 'Atmosphere Stage' },
  { id: 35, day: 2, name: 'Afterlife Showcase',     stage: 'Atmosphere Stage' },
  { id: 36, day: 2, name: 'Camelphat',              stage: 'Freedom Stage' },
  { id: 37, day: 2, name: 'Chris Lake',             stage: 'Freedom Stage' },
  { id: 38, day: 2, name: 'John Summit',            stage: 'Freedom Stage' },
  { id: 39, day: 2, name: 'Diplo',                  stage: 'Core Stage' },
  { id: 40, day: 2, name: 'Blond:ish',              stage: 'Freedom Stage' },

  // ── SUNDAY 20 JULY ──
  { id: 41, day: 3, name: 'Deadmau5',              stage: 'Mainstage' },
  { id: 42, day: 3, name: 'Above & Beyond',        stage: 'Mainstage' },
  { id: 43, day: 3, name: 'Paul van Dyk',          stage: 'Mainstage' },
  { id: 44, day: 3, name: 'Fedde Le Grand',        stage: 'Mainstage' },
  { id: 45, day: 3, name: 'Scooter',               stage: 'Mainstage' },
  { id: 46, day: 3, name: 'Vini Vici',             stage: 'Freedom Stage' },
  { id: 47, day: 3, name: 'Simon Patterson',       stage: 'Freedom Stage' },
  { id: 48, day: 3, name: 'Headhunterz',           stage: 'Mainstage' },
  { id: 49, day: 3, name: 'W&W',                   stage: 'Mainstage' },
  { id: 50, day: 3, name: 'Quintino',              stage: 'Freedom Stage' },
  { id: 51, day: 3, name: 'Monika Kruse',          stage: 'Elixir Stage' },
  { id: 52, day: 3, name: 'Paula Temple',          stage: 'Elixir Stage' },
  { id: 53, day: 3, name: 'I Hate Models',         stage: 'Elixir Stage' },
  { id: 54, day: 3, name: 'Enrico Sangiuliano',    stage: 'Elixir Stage' },
  { id: 55, day: 3, name: 'Reinier Zonneveld',     stage: 'Elixir Stage' },
  { id: 56, day: 3, name: 'Tiga',                  stage: 'Core Stage' },
  { id: 57, day: 3, name: 'Nico Moreno',           stage: 'Core Stage' },
  { id: 58, day: 3, name: 'Innellea',              stage: 'Atmosphere Stage' },
  { id: 59, day: 3, name: 'Stephan Bodzin',        stage: 'Atmosphere Stage' },
  { id: 60, day: 3, name: 'Undercatt',             stage: 'Atmosphere Stage' },
];

const DAY_NAMES = { 1: 'Friday 18 Jul', 2: 'Saturday 19 Jul', 3: 'Sunday 20 Jul' };

// ============================================================
// STATE
// ============================================================
let currentUser = null;
let currentDay = 'all';
let ratings = {};       // { [userId]: { [artistId]: { stars: 0-5, nope: bool } } }
let partnerMap = {};    // which user is the "partner" of current user

// Storage key
const STORAGE_KEY = 'tl2026_ratings';

function loadRatings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) ratings = JSON.parse(raw);
  } catch(e) { ratings = {}; }
}

function saveRatings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
}

function getUserRating(userId, artistId) {
  return ratings?.[userId]?.[artistId] || { stars: 0, nope: false };
}

function setUserRating(userId, artistId, update) {
  if (!ratings[userId]) ratings[userId] = {};
  ratings[userId][artistId] = { ...getUserRating(userId, artistId), ...update };
  saveRatings();
}

// ============================================================
// AUTH
// ============================================================
document.getElementById('passwordInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

function handleLogin() {
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const err = document.getElementById('loginError');

  if (USERS[username] && USERS[username] === password) {
    currentUser = username;
    const others = Object.keys(USERS).filter(u => u !== username);
    partnerMap = others[0] || null;

    err.classList.remove('visible');
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('appScreen').style.display = 'block';
    initApp();
  } else {
    err.classList.add('visible');
    document.getElementById('passwordInput').value = '';
  }
}

function handleLogout() {
  currentUser = null;
  document.getElementById('appScreen').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('usernameInput').value = '';
  document.getElementById('passwordInput').value = '';
}

// ============================================================
// INIT APP
// ============================================================
function initApp() {
  loadRatings();
  // Set user display
  document.getElementById('currentUserDisplay').textContent = currentUser;
  const av = document.getElementById('userAvatar');
  av.textContent = currentUser.charAt(0).toUpperCase();

  renderArtistList();
  renderPriorityList();
  renderConflicts();
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
  const artists = filteredArtists();

  // Group by day
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

    byDay[day].forEach(artist => {
      container.appendChild(buildArtistCard(artist));
    });
  });
}

function buildArtistCard(artist) {
  const myRating = getUserRating(currentUser, artist.id);
  const partnerRating = partnerMap ? getUserRating(partnerMap, artist.id) : null;
  const isConflict = detectConflict(myRating, partnerRating);

  const card = document.createElement('div');
  card.className = 'artist-card' + (isConflict ? ' has-conflict' : '');
  card.id = 'card-' + artist.id;

  // Artist info
  const info = document.createElement('div');
  info.style.flex = '1';
  info.innerHTML = `<div class="artist-name">${artist.name}${isConflict ? ' <span style="color:var(--red);font-size:13px;">⚠ conflict</span>' : ''}</div>
                    <div class="artist-stage">${artist.stage} · ${DAY_NAMES[artist.day]}</div>`;
  card.appendChild(info);

  // Partner's rating (read-only)
  if (partnerMap) {
    const pr = document.createElement('div');
    pr.className = 'partner-rating';
    pr.innerHTML = buildPartnerStarsHTML(partnerRating, partnerMap);
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
    star.title = s === 5 ? 'Must see!' : s === 1 ? 'Meh' : '';
    star.addEventListener('mouseenter', () => previewStars(starsDiv, s));
    star.addEventListener('mouseleave', () => resetStarPreview(starsDiv, artist.id));
    star.addEventListener('click', () => {
      const current = getUserRating(currentUser, artist.id);
      const newVal = current.stars === s ? 0 : s;
      setUserRating(currentUser, artist.id, { stars: newVal, nope: false });
      refreshCard(artist);
      refreshPriorityAndConflicts();
    });
    starsDiv.appendChild(star);
  }
  section.appendChild(starsDiv);

  const nope = document.createElement('button');
  nope.className = 'nope-btn' + (myRating.nope ? ' active' : '');
  nope.innerHTML = `<span>✕</span> Not for me`;
  nope.addEventListener('click', () => {
    const current = getUserRating(currentUser, artist.id);
    setUserRating(currentUser, artist.id, { nope: !current.nope, stars: 0 });
    refreshCard(artist);
    refreshPriorityAndConflicts();
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
  html += `</span>`;
  return html;
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

function refreshCard(artist) {
  const existing = document.getElementById('card-' + artist.id);
  if (existing) {
    const newCard = buildArtistCard(artist);
    existing.replaceWith(newCard);
  }
}

// ============================================================
// PRIORITY LIST
// ============================================================
function getScore(artistId) {
  const my = getUserRating(currentUser, artistId);
  const partner = partnerMap ? getUserRating(partnerMap, artistId) : null;

  if (my.nope && partner?.nope) return -2;
  if (!my.stars && !my.nope && !partner?.stars && !partner?.nope) return -1; // unrated

  let scores = [];
  if (my.nope) scores.push(0);
  else if (my.stars) scores.push(my.stars);

  if (partner) {
    if (partner.nope) scores.push(0);
    else if (partner.stars) scores.push(partner.stars);
  }

  if (scores.length === 0) return -1;
  return scores.reduce((a,b) => a+b, 0) / scores.length;
}

function detectConflict(myR, partnerR) {
  if (!partnerR) return false;
  return (myR.stars === 5 && partnerR.nope) || (myR.nope && partnerR.stars === 5);
}

function renderPriorityList() {
  const container = document.getElementById('priorityList');
  const artists = filteredArtists();

  const scored = artists.map(a => ({ ...a, score: getScore(a.id) }));
  scored.sort((a, b) => b.score - a.score);

  const rated = scored.filter(a => a.score >= 0);
  const unrated = scored.filter(a => a.score < 0 && a.score > -2);
  const mutual_nope = scored.filter(a => a.score === -2);

  container.innerHTML = '';
  let rank = 1;

  if (rated.length === 0 && unrated.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">⭐</div><p>Rate some artists first to see the priority list.</p></div>`;
    return;
  }

  rated.forEach(a => {
    const my = getUserRating(currentUser, a.id);
    const partner = partnerMap ? getUserRating(partnerMap, a.id) : null;
    const conflict = detectConflict(my, partner);
    const item = document.createElement('div');
    item.className = 'priority-item';
    const scoreDisplay = conflict
      ? `<span class="score-pill conflict">⚠</span>`
      : `<span class="score-pill">${a.score.toFixed(1)}</span>`;
    item.innerHTML = `
      <div class="priority-rank${rank <= 3 ? ' top' : ''}">${rank}</div>
      <div style="flex:1">
        <div class="priority-name">${a.name}</div>
        <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
      </div>
      ${scoreDisplay}
    `;
    container.appendChild(item);
    rank++;
  });

  if (unrated.length > 0) {
    const hdr = document.createElement('div');
    hdr.style.cssText = 'font-size:12px;letter-spacing:1px;color:var(--text3);text-transform:uppercase;padding:20px 0 8px;border-top:1px solid var(--border);margin-top:12px';
    hdr.textContent = 'Not yet rated';
    container.appendChild(hdr);
    unrated.forEach(a => {
      const item = document.createElement('div');
      item.className = 'priority-item';
      item.innerHTML = `
        <div class="priority-rank">—</div>
        <div style="flex:1">
          <div class="priority-name" style="color:var(--text2)">${a.name}</div>
          <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
        </div>
        <span class="score-pill unrated">?</span>
      `;
      container.appendChild(item);
    });
  }

  if (mutual_nope.length > 0) {
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
        <div style="flex:1">
          <div class="priority-name">${a.name}</div>
          <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div>
        </div>
      `;
      container.appendChild(item);
    });
  }
}

// ============================================================
// CONFLICTS
// ============================================================
function renderConflicts() {
  const container = document.getElementById('conflictsList');
  const badge = document.getElementById('conflictBadge');

  if (!partnerMap) {
    container.innerHTML = `<div class="empty-state"><p>Conflicts appear once both users have rated artists.</p></div>`;
    badge.style.display = 'none';
    return;
  }

  const conflicts = LINEUP.filter(a => {
    const my = getUserRating(currentUser, a.id);
    const partner = getUserRating(partnerMap, a.id);
    return detectConflict(my, partner);
  });

  if (conflicts.length === 0) {
    badge.style.display = 'none';
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🎉</div><p>No conflicts yet — you're in sync!</p></div>`;
    return;
  }

  badge.style.display = 'inline';
  badge.textContent = conflicts.length;

  container.innerHTML = '';
  conflicts.forEach(a => {
    const my = getUserRating(currentUser, a.id);
    const partner = getUserRating(partnerMap, a.id);
    const myWants = my.stars === 5;
    const partnerWants = partner.stars === 5;

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
          <span class="cuser">${currentUser.replace(/\d+$/, '')}</span>
          <span class="${myWants ? 'cwant' : 'cnope'}">${myWants ? '★★★★★ Must see' : '✕ Not for me'}</span>
        </div>
        <div class="conflict-row">
          <span class="cuser">${partnerMap.replace(/\d+$/, '')}</span>
          <span class="${partnerWants ? 'cwant' : 'cnope'}">${partnerWants ? '★★★★★ Must see' : '✕ Not for me'}</span>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function refreshPriorityAndConflicts() {
  renderPriorityList();
  renderConflicts();
}
