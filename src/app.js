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
// 377 artists across all stages
// ============================================================
const LINEUP = [
  { id: 1, day: 1, name: 'Chainsmokers', stage: 'Mainstage' },
  { id: 2, day: 1, name: 'Disco Lines', stage: 'Mainstage' },
  { id: 3, day: 1, name: 'Henri PFR', stage: 'Mainstage' },
  { id: 4, day: 1, name: 'Marlon Hoffstadt', stage: 'Mainstage' },
  { id: 5, day: 1, name: 'Martin Garrix', stage: 'Mainstage' },
  { id: 6, day: 1, name: 'MC STRETCH', stage: 'Mainstage' },
  { id: 7, day: 1, name: 'NERVO', stage: 'Mainstage' },
  { id: 8, day: 1, name: 'Novah', stage: 'Mainstage' },
  { id: 9, day: 1, name: 'Sebastian Ingrosso', stage: 'Mainstage' },
  { id: 10, day: 1, name: 'Holy Priest', stage: 'Freedom by Bud' },
  { id: 11, day: 1, name: 'Jesabel', stage: 'Freedom by Bud' },
  { id: 12, day: 1, name: 'Max Styler', stage: 'Freedom by Bud' },
  { id: 13, day: 1, name: 'Mind Against', stage: 'Freedom by Bud' },
  { id: 14, day: 1, name: 'Miss Monique', stage: 'Freedom by Bud' },
  { id: 15, day: 1, name: 'Rose Ringed', stage: 'Freedom by Bud' },
  { id: 16, day: 1, name: 'Semsei', stage: 'Freedom by Bud' },
  { id: 17, day: 1, name: 'A Little Sound', stage: 'The Rose Garden' },
  { id: 18, day: 1, name: 'ÆON:MODE', stage: 'The Rose Garden' },
  { id: 19, day: 1, name: 'Alison Wonderland', stage: 'The Rose Garden' },
  { id: 20, day: 1, name: 'Anton Invicta', stage: 'The Rose Garden' },
  { id: 21, day: 1, name: 'Blooom b2b Sudley', stage: 'The Rose Garden' },
  { id: 22, day: 1, name: 'Camo & Krooked', stage: 'The Rose Garden' },
  { id: 23, day: 1, name: 'Kanine', stage: 'The Rose Garden' },
  { id: 24, day: 1, name: 'MAE.LIEN', stage: 'The Rose Garden' },
  { id: 25, day: 1, name: 'Murdock', stage: 'The Rose Garden' },
  { id: 26, day: 1, name: 'Primate', stage: 'The Rose Garden' },
  { id: 27, day: 1, name: 'STOOG3S', stage: 'The Rose Garden' },
  { id: 28, day: 1, name: 'Synoxis', stage: 'The Rose Garden' },
  { id: 29, day: 1, name: 'Audiowave', stage: 'Elixir' },
  { id: 30, day: 1, name: 'Flavour Drop', stage: 'Elixir' },
  { id: 31, day: 1, name: 'High Grade Sound', stage: 'Elixir' },
  { id: 32, day: 1, name: 'MC RIM', stage: 'Elixir' },
  { id: 33, day: 1, name: 'Milinguap', stage: 'Elixir' },
  { id: 34, day: 1, name: 'Monsieur', stage: 'Elixir' },
  { id: 35, day: 1, name: 'Nona Van Braeckel', stage: 'Elixir' },
  { id: 36, day: 1, name: 'Rick & James 80s Party', stage: 'Elixir' },
  { id: 37, day: 1, name: 'Soul Shakers', stage: 'Elixir' },
  { id: 38, day: 1, name: 'Tola OG', stage: 'Elixir' },
  { id: 39, day: 1, name: 'Unregular', stage: 'Elixir' },
  { id: 40, day: 1, name: 'DITHER', stage: 'Cage' },
  { id: 41, day: 1, name: 'elMefti', stage: 'Cage' },
  { id: 42, day: 1, name: 'GPF b2b DR DONK', stage: 'Cage' },
  { id: 43, day: 1, name: 'LOLALITA b2b BRENNT', stage: 'Cage' },
  { id: 44, day: 1, name: 'LUNAKORPZ', stage: 'Cage' },
  { id: 45, day: 1, name: 'MIND COMPRESSOR', stage: 'Cage' },
  { id: 46, day: 1, name: 'RAYZEN', stage: 'Cage' },
  { id: 47, day: 1, name: 'Sacha Malice', stage: 'Cage' },
  { id: 48, day: 1, name: 'SANDY WAREZ b2b REVENJA', stage: 'Cage' },
  { id: 49, day: 1, name: 'VERNEX b2b NRKi', stage: 'Cage' },
  { id: 50, day: 1, name: 'VON BIKRÄV', stage: 'Cage' },
  { id: 51, day: 1, name: 'Ben Malone', stage: 'The Rave Cave' },
  { id: 52, day: 1, name: 'CVNTS', stage: 'The Rave Cave' },
  { id: 53, day: 1, name: 'Junkie Kid', stage: 'The Rave Cave' },
  { id: 54, day: 1, name: 'Nastya Dikikh', stage: 'The Rave Cave' },
  { id: 55, day: 1, name: 'Paloma', stage: 'The Rave Cave' },
  { id: 56, day: 1, name: 'Thomas Moulene', stage: 'The Rave Cave' },
  { id: 57, day: 1, name: 'ZUKE', stage: 'The Rave Cave' },
  { id: 58, day: 1, name: 'Cyborg-18', stage: 'Planaxis' },
  { id: 59, day: 1, name: 'Fabio Fusco', stage: 'Planaxis' },
  { id: 60, day: 1, name: 'Firaga', stage: 'Planaxis' },
  { id: 61, day: 1, name: 'Hi Profile', stage: 'Planaxis' },
  { id: 62, day: 1, name: 'John OO Fleming', stage: 'Planaxis' },
  { id: 63, day: 1, name: 'Mad Maxx', stage: 'Planaxis' },
  { id: 64, day: 1, name: 'Neelix', stage: 'Planaxis' },
  { id: 65, day: 1, name: 'Omiki', stage: 'Planaxis' },
  { id: 66, day: 1, name: 'Somnia', stage: 'Planaxis' },
  { id: 67, day: 1, name: 'Trip-Tamine', stage: 'Planaxis' },
  { id: 68, day: 1, name: 'Yannick Thiry', stage: 'Planaxis' },
  { id: 69, day: 1, name: 'AWEN', stage: 'Melodia by Corona' },
  { id: 70, day: 1, name: 'Da Capo b2b Caiiro b2b Enoo Napa', stage: 'Melodia by Corona' },
  { id: 71, day: 1, name: 'Danni Gato', stage: 'Melodia by Corona' },
  { id: 72, day: 1, name: 'Isa Roos', stage: 'Melodia by Corona' },
  { id: 73, day: 1, name: 'Lerato Tsotetsi', stage: 'Melodia by Corona' },
  { id: 74, day: 1, name: 'Rosey Gold', stage: 'Melodia by Corona' },
  { id: 75, day: 1, name: 'Thakzin', stage: 'Melodia by Corona' },
  { id: 76, day: 1, name: 'Vanco', stage: 'Melodia by Corona' },
  { id: 77, day: 1, name: 'Bennett', stage: 'Celestia by KuCoin' },
  { id: 78, day: 1, name: 'Diffrent', stage: 'Celestia by KuCoin' },
  { id: 79, day: 1, name: 'Juno', stage: 'Celestia by KuCoin' },
  { id: 80, day: 1, name: 'MPH', stage: 'Celestia by KuCoin' },
  { id: 81, day: 1, name: 'MRMK', stage: 'Celestia by KuCoin' },
  { id: 82, day: 1, name: 'Olive Anguz', stage: 'Celestia by KuCoin' },
  { id: 83, day: 1, name: 'ROOX', stage: 'Celestia by KuCoin' },
  { id: 84, day: 1, name: 'Rozie', stage: 'Celestia by KuCoin' },
  { id: 85, day: 1, name: 'Bisoux', stage: 'Atmosphere' },
  { id: 86, day: 1, name: 'KUKO', stage: 'Atmosphere' },
  { id: 87, day: 1, name: 'MANDY b2b NEGITIV', stage: 'Atmosphere' },
  { id: 88, day: 1, name: 'Nico Moreno', stage: 'Atmosphere' },
  { id: 89, day: 1, name: 'Peterblue', stage: 'Atmosphere' },
  { id: 90, day: 1, name: 'ROW1', stage: 'Atmosphere' },
  { id: 91, day: 1, name: 'Sara Landry', stage: 'Atmosphere' },
  { id: 92, day: 1, name: 'sim0ne b2b Southstar', stage: 'Atmosphere' },
  { id: 93, day: 1, name: 'Bibi Seck', stage: 'Core' },
  { id: 94, day: 1, name: 'Eileen', stage: 'Core' },
  { id: 95, day: 1, name: 'Kenny Montana b2b John Noseda', stage: 'Core' },
  { id: 96, day: 1, name: 'Modeselektor (DJ-set)', stage: 'Core' },
  { id: 97, day: 1, name: 'Sally C', stage: 'Core' },
  { id: 98, day: 1, name: 'Sasha b2b Young Marco', stage: 'Core' },
  { id: 99, day: 1, name: 'Camilla Jun', stage: 'Crystal Garden' },
  { id: 100, day: 1, name: 'Eridu', stage: 'Crystal Garden' },
  { id: 101, day: 1, name: 'Kettama b2b Michael Bibi', stage: 'Crystal Garden' },
  { id: 102, day: 1, name: 'Marsolo', stage: 'Crystal Garden' },
  { id: 103, day: 1, name: 'Poleen', stage: 'Crystal Garden' },
  { id: 104, day: 1, name: 'Artbat', stage: 'The Great Library' },
  { id: 105, day: 1, name: 'Da Tweekaz', stage: 'The Great Library' },
  { id: 106, day: 1, name: 'DJ Sally', stage: 'The Great Library' },
  { id: 107, day: 1, name: 'Hardwell b2b Sub Zero Project', stage: 'The Great Library' },
  { id: 108, day: 1, name: 'MagiK', stage: 'The Great Library' },
  { id: 109, day: 1, name: 'Manuals', stage: 'The Great Library' },
  { id: 110, day: 1, name: 'Mike Williams', stage: 'The Great Library' },
  { id: 111, day: 1, name: 'Nicky Romero', stage: 'The Great Library' },
  { id: 112, day: 1, name: 'Ofenbach', stage: 'The Great Library' },
  { id: 113, day: 1, name: 'R3hab', stage: 'The Great Library' },
  { id: 114, day: 1, name: 'Sam Feldt', stage: 'The Great Library' },
  { id: 115, day: 1, name: 'Tomas Grey', stage: 'The Great Library' },
  { id: 116, day: 1, name: 'Whisnu Santika', stage: 'The Great Library' },
  { id: 117, day: 1, name: 'Bosart', stage: 'Moose Bar' },
  { id: 118, day: 1, name: 'Funktastix', stage: 'Moose Bar' },
  { id: 119, day: 1, name: 'Rino', stage: 'Moose Bar' },
  { id: 120, day: 1, name: 'Conrad Taylor', stage: 'House of Fortune' },
  { id: 121, day: 1, name: 'Fran Ares', stage: 'House of Fortune' },
  { id: 122, day: 1, name: 'Gravagerz', stage: 'House of Fortune' },
  { id: 123, day: 1, name: 'Lucca Van Damme', stage: 'House of Fortune' },
  { id: 124, day: 1, name: 'Mike Williams', stage: 'House of Fortune' },
  { id: 125, day: 1, name: 'Nicky Romero', stage: 'House of Fortune' },
  { id: 126, day: 1, name: 'StadiumX', stage: 'House of Fortune' },
  { id: 127, day: 2, name: 'Boris Brejcha', stage: 'Mainstage' },
  { id: 128, day: 2, name: 'David Guetta', stage: 'Mainstage' },
  { id: 129, day: 2, name: 'Dimitri Vegas & Like Mike', stage: 'Mainstage' },
  { id: 130, day: 2, name: 'Fisher', stage: 'Mainstage' },
  { id: 131, day: 2, name: 'HALŌ', stage: 'Mainstage' },
  { id: 132, day: 2, name: 'John Newman', stage: 'Mainstage' },
  { id: 133, day: 2, name: 'Maddix', stage: 'Mainstage' },
  { id: 134, day: 2, name: 'MC STRETCH', stage: 'Mainstage' },
  { id: 135, day: 2, name: 'Merow', stage: 'Mainstage' },
  { id: 136, day: 2, name: 'Omdat Het Kan & Average Rob', stage: 'Mainstage' },
  { id: 137, day: 2, name: 'Stephani B', stage: 'Mainstage' },
  { id: 138, day: 2, name: 'Armin van Buuren', stage: 'Freedom by Bud' },
  { id: 139, day: 2, name: 'Dave Lambert', stage: 'Freedom by Bud' },
  { id: 140, day: 2, name: 'Luna & Lenthe', stage: 'Freedom by Bud' },
  { id: 141, day: 2, name: 'Meduza³', stage: 'Freedom by Bud' },
  { id: 142, day: 2, name: 'Netsky', stage: 'Freedom by Bud' },
  { id: 143, day: 2, name: 'Plastik Funk b2b Olympe', stage: 'Freedom by Bud' },
  { id: 144, day: 2, name: 'Space 92', stage: 'Freedom by Bud' },
  { id: 145, day: 2, name: 'Symphony Of Unity', stage: 'Freedom by Bud' },
  { id: 146, day: 2, name: 'Blvckprint', stage: 'The Rose Garden' },
  { id: 147, day: 2, name: 'Bonzai All Stars', stage: 'The Rose Garden' },
  { id: 148, day: 2, name: 'DJ Furax', stage: 'The Rose Garden' },
  { id: 149, day: 2, name: 'DJ Ghost', stage: 'The Rose Garden' },
  { id: 150, day: 2, name: 'Franky Kloeck', stage: 'The Rose Garden' },
  { id: 151, day: 2, name: 'Funkhauser', stage: 'The Rose Garden' },
  { id: 152, day: 2, name: 'Greg S.', stage: 'The Rose Garden' },
  { id: 153, day: 2, name: 'Jan Vervloet', stage: 'The Rose Garden' },
  { id: 154, day: 2, name: 'Jente b2b Neall', stage: 'The Rose Garden' },
  { id: 155, day: 2, name: 'Just-K', stage: 'The Rose Garden' },
  { id: 156, day: 2, name: 'MC Pyro', stage: 'The Rose Garden' },
  { id: 157, day: 2, name: 'Phi Phi', stage: 'The Rose Garden' },
  { id: 158, day: 2, name: 'Push', stage: 'The Rose Garden' },
  { id: 159, day: 2, name: 'X-Tof', stage: 'The Rose Garden' },
  { id: 160, day: 2, name: 'Afrolosjes Soundsystem', stage: 'Elixir' },
  { id: 161, day: 2, name: 'Ballantine & Dieux-Pére', stage: 'Elixir' },
  { id: 162, day: 2, name: 'Encore Soundsystem', stage: 'Elixir' },
  { id: 163, day: 2, name: 'Kurashi Soundsystem', stage: 'Elixir' },
  { id: 164, day: 2, name: 'Lordesius & Anders', stage: 'Elixir' },
  { id: 165, day: 2, name: 'MC Claudio', stage: 'Elixir' },
  { id: 166, day: 2, name: 'MELV!EE', stage: 'Elixir' },
  { id: 167, day: 2, name: 'Pretty Girls Like Trap Music Soundsystem', stage: 'Elixir' },
  { id: 168, day: 2, name: 'Rockefellababe', stage: 'Elixir' },
  { id: 169, day: 2, name: 'sojuju & Julian Jermain', stage: 'Elixir' },
  { id: 170, day: 2, name: 'Steww Soundsystem', stage: 'Elixir' },
  { id: 171, day: 2, name: 'Vunzige Deuntjes Soundsystem', stage: 'Elixir' },
  { id: 172, day: 2, name: 'WEF', stage: 'Elixir' },
  { id: 173, day: 2, name: 'A.N.I.', stage: 'Cage' },
  { id: 174, day: 2, name: 'Byorn', stage: 'Cage' },
  { id: 175, day: 2, name: 'Dexphase', stage: 'Cage' },
  { id: 176, day: 2, name: 'Luna Fields', stage: 'Cage' },
  { id: 177, day: 2, name: 'Maike Depas', stage: 'Cage' },
  { id: 178, day: 2, name: 'Vieze Asbak', stage: 'Cage' },
  { id: 179, day: 2, name: 'Aghatixx', stage: 'The Rave Cave' },
  { id: 180, day: 2, name: 'Bobby & Djenko', stage: 'The Rave Cave' },
  { id: 181, day: 2, name: 'Brits & Boen', stage: 'The Rave Cave' },
  { id: 182, day: 2, name: 'Jonas van Opstal', stage: 'The Rave Cave' },
  { id: 183, day: 2, name: 'Los Bomberos', stage: 'The Rave Cave' },
  { id: 184, day: 2, name: 'Monta', stage: 'The Rave Cave' },
  { id: 185, day: 2, name: 'Soulcity', stage: 'The Rave Cave' },
  { id: 186, day: 2, name: 'The Spook', stage: 'The Rave Cave' },
  { id: 187, day: 2, name: 'Vitucci', stage: 'The Rave Cave' },
  { id: 188, day: 2, name: 'Bassjackers', stage: 'Planaxis' },
  { id: 189, day: 2, name: 'Chocolate Puma', stage: 'Planaxis' },
  { id: 190, day: 2, name: 'D\'Angello & Francis', stage: 'Planaxis' },
  { id: 191, day: 2, name: 'DVBBS', stage: 'Planaxis' },
  { id: 192, day: 2, name: 'Ian Asher', stage: 'Planaxis' },
  { id: 193, day: 2, name: 'Kaaze', stage: 'Planaxis' },
  { id: 194, day: 2, name: 'Laidback Luke', stage: 'Planaxis' },
  { id: 195, day: 2, name: 'Lucas & Steve', stage: 'Planaxis' },
  { id: 196, day: 2, name: 'Marnik', stage: 'Planaxis' },
  { id: 197, day: 2, name: 'Quintino', stage: 'Planaxis' },
  { id: 198, day: 2, name: 'Steve Aoki', stage: 'Planaxis' },
  { id: 199, day: 2, name: 'Arado', stage: 'Melodia by Corona' },
  { id: 200, day: 2, name: 'Chinonegro', stage: 'Melodia by Corona' },
  { id: 201, day: 2, name: 'Emiliano Demarco', stage: 'Melodia by Corona' },
  { id: 202, day: 2, name: 'Hermanos Inglesos', stage: 'Melodia by Corona' },
  { id: 203, day: 2, name: 'Idemi', stage: 'Melodia by Corona' },
  { id: 204, day: 2, name: 'LYA', stage: 'Melodia by Corona' },
  { id: 205, day: 2, name: 'Sam Shure', stage: 'Melodia by Corona' },
  { id: 206, day: 2, name: 'Twenty Six', stage: 'Melodia by Corona' },
  { id: 207, day: 2, name: 'UNREAD', stage: 'Melodia by Corona' },
  { id: 208, day: 2, name: 'Block & Crown b2b LYNNE', stage: 'Celestia by KuCoin' },
  { id: 209, day: 2, name: 'Diego Miranda b2b Pette', stage: 'Celestia by KuCoin' },
  { id: 210, day: 2, name: 'Dimitri Vangelis & Wyman', stage: 'Celestia by KuCoin' },
  { id: 211, day: 2, name: 'Dj Nano', stage: 'Celestia by KuCoin' },
  { id: 212, day: 2, name: 'Encure b2b Honey Gee', stage: 'Celestia by KuCoin' },
  { id: 213, day: 2, name: 'Joyse b2b Ryan Spicer', stage: 'Celestia by KuCoin' },
  { id: 214, day: 2, name: 'Matisse & Sadko', stage: 'Celestia by KuCoin' },
  { id: 215, day: 2, name: 'Sebsky', stage: 'Celestia by KuCoin' },
  { id: 216, day: 2, name: 'Will Sparks', stage: 'Celestia by KuCoin' },
  { id: 217, day: 2, name: 'Yves V', stage: 'Celestia by KuCoin' },
  { id: 218, day: 2, name: 'Ben Klock', stage: 'Atmosphere' },
  { id: 219, day: 2, name: 'BIIA b2b Charlie Sparks', stage: 'Atmosphere' },
  { id: 220, day: 2, name: 'Elli Acula', stage: 'Atmosphere' },
  { id: 221, day: 2, name: 'Estella Boersma', stage: 'Atmosphere' },
  { id: 222, day: 2, name: 'Indira Paganotto', stage: 'Atmosphere' },
  { id: 223, day: 2, name: 'Interactive Noise', stage: 'Atmosphere' },
  { id: 224, day: 2, name: 'Marhu', stage: 'Atmosphere' },
  { id: 225, day: 2, name: 'Reinier Zonneveld (live)', stage: 'Atmosphere' },
  { id: 226, day: 2, name: 'Antdot', stage: 'Core' },
  { id: 227, day: 2, name: 'Bedouin', stage: 'Core' },
  { id: 228, day: 2, name: 'Betical', stage: 'Core' },
  { id: 229, day: 2, name: 'Capoon', stage: 'Core' },
  { id: 230, day: 2, name: 'Curol', stage: 'Core' },
  { id: 231, day: 2, name: 'Dino Lenny', stage: 'Core' },
  { id: 232, day: 2, name: 'SAMM b2b Ajna', stage: 'Core' },
  { id: 233, day: 2, name: 'Ben Hemsley', stage: 'Crystal Garden' },
  { id: 234, day: 2, name: 'Cici Daze', stage: 'Crystal Garden' },
  { id: 235, day: 2, name: 'DALI', stage: 'Crystal Garden' },
  { id: 236, day: 2, name: 'Dean Turnley', stage: 'Crystal Garden' },
  { id: 237, day: 2, name: 'Morten b2b Malaa', stage: 'Crystal Garden' },
  { id: 238, day: 2, name: 'NOSI', stage: 'Crystal Garden' },
  { id: 239, day: 2, name: 'Steve Angello', stage: 'Crystal Garden' },
  { id: 240, day: 2, name: 'Agents Of Time', stage: 'The Great Library' },
  { id: 241, day: 2, name: 'Andromedik', stage: 'The Great Library' },
  { id: 242, day: 2, name: 'CIEL.', stage: 'The Great Library' },
  { id: 243, day: 2, name: 'Jazzy', stage: 'The Great Library' },
  { id: 244, day: 2, name: 'Linska', stage: 'The Great Library' },
  { id: 245, day: 2, name: 'Lost Frequencies', stage: 'The Great Library' },
  { id: 246, day: 2, name: 'Marten Hørger', stage: 'The Great Library' },
  { id: 247, day: 2, name: 'Marwan Dua', stage: 'The Great Library' },
  { id: 248, day: 2, name: 'Oliver Heldens', stage: 'The Great Library' },
  { id: 249, day: 2, name: 'Funkhauser', stage: 'Moose Bar' },
  { id: 250, day: 2, name: 'Jelle DK', stage: 'Moose Bar' },
  { id: 251, day: 2, name: 'Jeroen Visser', stage: 'Moose Bar' },
  { id: 252, day: 2, name: 'Fonsi Nieto', stage: 'House of Fortune' },
  { id: 253, day: 2, name: 'Lennert Wolfs', stage: 'House of Fortune' },
  { id: 254, day: 2, name: 'Lucas & Steve', stage: 'House of Fortune' },
  { id: 255, day: 2, name: 'Makasi', stage: 'House of Fortune' },
  { id: 256, day: 2, name: 'MANDY', stage: 'House of Fortune' },
  { id: 257, day: 2, name: 'Mark Roma', stage: 'House of Fortune' },
  { id: 258, day: 2, name: 'Yuuki Yoshiyama', stage: 'House of Fortune' },
  { id: 259, day: 3, name: 'Alesso', stage: 'Mainstage' },
  { id: 260, day: 3, name: 'B Jones', stage: 'Mainstage' },
  { id: 261, day: 3, name: 'Calvin Harris', stage: 'Mainstage' },
  { id: 262, day: 3, name: 'John Summit', stage: 'Mainstage' },
  { id: 263, day: 3, name: 'Kevin de Vries', stage: 'Mainstage' },
  { id: 264, day: 3, name: 'Malugi', stage: 'Mainstage' },
  { id: 265, day: 3, name: 'MC STRETCH', stage: 'Mainstage' },
  { id: 266, day: 3, name: 'ALOK: Rave The World', stage: 'Freedom by Bud' },
  { id: 267, day: 3, name: 'Arielle Free', stage: 'Freedom by Bud' },
  { id: 268, day: 3, name: 'Chase & Status (DJ set)', stage: 'Freedom by Bud' },
  { id: 269, day: 3, name: 'DJ Licious', stage: 'Freedom by Bud' },
  { id: 270, day: 3, name: 'I Hate Models', stage: 'Freedom by Bud' },
  { id: 271, day: 3, name: 'Jack Shore', stage: 'Freedom by Bud' },
  { id: 272, day: 3, name: 'Neon', stage: 'Freedom by Bud' },
  { id: 273, day: 3, name: 'Pegassi', stage: 'Freedom by Bud' },
  { id: 274, day: 3, name: 'Adrenalize', stage: 'The Rose Garden' },
  { id: 275, day: 3, name: 'Digital Madness', stage: 'The Rose Garden' },
  { id: 276, day: 3, name: 'Isaac', stage: 'The Rose Garden' },
  { id: 277, day: 3, name: 'Pat B', stage: 'The Rose Garden' },
  { id: 278, day: 3, name: 'Rebelion', stage: 'The Rose Garden' },
  { id: 279, day: 3, name: 'Rooler', stage: 'The Rose Garden' },
  { id: 280, day: 3, name: 'Sub Zero Project', stage: 'The Rose Garden' },
  { id: 281, day: 3, name: 'The Saints', stage: 'The Rose Garden' },
  { id: 282, day: 3, name: 'The Z.', stage: 'The Rose Garden' },
  { id: 283, day: 3, name: 'TNT', stage: 'The Rose Garden' },
  { id: 284, day: 3, name: 'Villain', stage: 'The Rose Garden' },
  { id: 285, day: 3, name: 'DJ FASTA', stage: 'Elixir' },
  { id: 286, day: 3, name: 'Favella Som Sistema', stage: 'Elixir' },
  { id: 287, day: 3, name: 'G-Lo', stage: 'Elixir' },
  { id: 288, day: 3, name: 'Heaven Sam', stage: 'Elixir' },
  { id: 289, day: 3, name: 'Jeronimo', stage: 'Elixir' },
  { id: 290, day: 3, name: 'Karyo', stage: 'Elixir' },
  { id: 291, day: 3, name: 'Noah', stage: 'Elixir' },
  { id: 292, day: 3, name: 'Sako Glitch', stage: 'Elixir' },
  { id: 293, day: 3, name: 'Sleazy Stereo', stage: 'Elixir' },
  { id: 294, day: 3, name: 'Team Damp', stage: 'Elixir' },
  { id: 295, day: 3, name: 'Tribal Kush', stage: 'Elixir' },
  { id: 296, day: 3, name: 'Adrián Mills F2F SISU', stage: 'Cage' },
  { id: 297, day: 3, name: 'David Löhlein F2F Yasmin regisford', stage: 'Cage' },
  { id: 298, day: 3, name: 'EMILIJA F2F Frederic Selected', stage: 'Cage' },
  { id: 299, day: 3, name: 'FUMI F2F HUJUS', stage: 'Cage' },
  { id: 300, day: 3, name: 'Hurts F2F ROW 1', stage: 'Cage' },
  { id: 301, day: 3, name: 'Klaps F2F Miamor', stage: 'Cage' },
  { id: 302, day: 3, name: 'Serafina F2F zwilling.', stage: 'Cage' },
  { id: 303, day: 3, name: 'Coco Bevan', stage: 'The Rave Cave' },
  { id: 304, day: 3, name: 'Dries Smet', stage: 'The Rave Cave' },
  { id: 305, day: 3, name: 'Foxed Up', stage: 'The Rave Cave' },
  { id: 306, day: 3, name: 'Godtripper', stage: 'The Rave Cave' },
  { id: 307, day: 3, name: 'Mell Tierra', stage: 'The Rave Cave' },
  { id: 308, day: 3, name: 'Mitched', stage: 'The Rave Cave' },
  { id: 309, day: 3, name: 'Nederhand', stage: 'The Rave Cave' },
  { id: 310, day: 3, name: 'Noaffection b2b OM3N', stage: 'The Rave Cave' },
  { id: 311, day: 3, name: 'YERUN', stage: 'The Rave Cave' },
  { id: 312, day: 3, name: '[IVY]', stage: 'Planaxis' },
  { id: 313, day: 3, name: 'Arcando', stage: 'Planaxis' },
  { id: 314, day: 3, name: 'Exception', stage: 'Planaxis' },
  { id: 315, day: 3, name: 'LEVEL UP', stage: 'Planaxis' },
  { id: 316, day: 3, name: 'Liquid Stranger', stage: 'Planaxis' },
  { id: 317, day: 3, name: 'Malaa\'s Alter Ego', stage: 'Planaxis' },
  { id: 318, day: 3, name: 'Nostalgix', stage: 'Planaxis' },
  { id: 319, day: 3, name: 'Punctual', stage: 'Planaxis' },
  { id: 320, day: 3, name: 'SABAI', stage: 'Planaxis' },
  { id: 321, day: 3, name: 'Seven Lions', stage: 'Planaxis' },
  { id: 322, day: 3, name: 'Subtronics', stage: 'Planaxis' },
  { id: 323, day: 3, name: 'Christian82', stage: 'Melodia by Corona' },
  { id: 324, day: 3, name: 'CRISTINA TOSIO', stage: 'Melodia by Corona' },
  { id: 325, day: 3, name: 'Dave Hang', stage: 'Melodia by Corona' },
  { id: 326, day: 3, name: 'Delafino', stage: 'Melodia by Corona' },
  { id: 327, day: 3, name: 'DJ Gee', stage: 'Melodia by Corona' },
  { id: 328, day: 3, name: 'Felix Da Funk', stage: 'Melodia by Corona' },
  { id: 329, day: 3, name: 'Le Windey', stage: 'Melodia by Corona' },
  { id: 330, day: 3, name: 'Lunnas', stage: 'Melodia by Corona' },
  { id: 331, day: 3, name: 'Marta Loe b2b Rebeca Ark', stage: 'Melodia by Corona' },
  { id: 332, day: 3, name: 'Tania Moon', stage: 'Melodia by Corona' },
  { id: 333, day: 3, name: 'Cyria (Hybrid)', stage: 'Celestia by KuCoin' },
  { id: 334, day: 3, name: 'Fake Mood', stage: 'Celestia by KuCoin' },
  { id: 335, day: 3, name: 'Helsloot', stage: 'Celestia by KuCoin' },
  { id: 336, day: 3, name: 'MXGPU (Hybrid)', stage: 'Celestia by KuCoin' },
  { id: 337, day: 3, name: 'Nico Morano b2b Xinobi', stage: 'Celestia by KuCoin' },
  { id: 338, day: 3, name: 'Öona Dahl', stage: 'Celestia by KuCoin' },
  { id: 339, day: 3, name: 'Sentin', stage: 'Celestia by KuCoin' },
  { id: 340, day: 3, name: 'Amelie Lens', stage: 'Atmosphere' },
  { id: 341, day: 3, name: 'Anetha', stage: 'Atmosphere' },
  { id: 342, day: 3, name: 'Blondex', stage: 'Atmosphere' },
  { id: 343, day: 3, name: 'Flour', stage: 'Atmosphere' },
  { id: 344, day: 3, name: 'Øtta', stage: 'Atmosphere' },
  { id: 345, day: 3, name: 'SHDW b2b ÜBERKIKZ', stage: 'Atmosphere' },
  { id: 346, day: 3, name: 'VE/RA', stage: 'Atmosphere' },
  { id: 347, day: 3, name: 'Avalon Emerson b2b Ben UFO', stage: 'Core' },
  { id: 348, day: 3, name: 'Fafi Abdel Nour', stage: 'Core' },
  { id: 349, day: 3, name: 'Ineffekt', stage: 'Core' },
  { id: 350, day: 3, name: 'Job Jobse', stage: 'Core' },
  { id: 351, day: 3, name: 'Massignan.y', stage: 'Core' },
  { id: 352, day: 3, name: 'Sedef Adasï', stage: 'Core' },
  { id: 353, day: 3, name: 'DJ Gigola', stage: 'Crystal Garden' },
  { id: 354, day: 3, name: 'DJ Tennis b2b Vintage Culture', stage: 'Crystal Garden' },
  { id: 355, day: 3, name: 'ELFIGO', stage: 'Crystal Garden' },
  { id: 356, day: 3, name: 'Hitty', stage: 'Crystal Garden' },
  { id: 357, day: 3, name: 'Oscar and the Wolf', stage: 'Crystal Garden' },
  { id: 358, day: 3, name: 'Wade', stage: 'Crystal Garden' },
  { id: 359, day: 3, name: 'Afrojack', stage: 'The Great Library' },
  { id: 360, day: 3, name: 'Blasterjaxx', stage: 'The Great Library' },
  { id: 361, day: 3, name: 'Diètro', stage: 'The Great Library' },
  { id: 362, day: 3, name: 'Dimitri Vegas b2b Timmy Trumpet', stage: 'The Great Library' },
  { id: 363, day: 3, name: 'Gabry Ponte', stage: 'The Great Library' },
  { id: 364, day: 3, name: 'Gryffin', stage: 'The Great Library' },
  { id: 365, day: 3, name: 'Hypaton', stage: 'The Great Library' },
  { id: 366, day: 3, name: 'James Carter', stage: 'The Great Library' },
  { id: 367, day: 3, name: 'MATTN', stage: 'The Great Library' },
  { id: 368, day: 3, name: 'Viktor', stage: 'The Great Library' },
  { id: 369, day: 3, name: 'Vini Vici', stage: 'The Great Library' },
  { id: 370, day: 3, name: 'Yazzmin', stage: 'The Great Library' },
  { id: 371, day: 3, name: 'Jerrooo', stage: 'Moose Bar' },
  { id: 372, day: 3, name: 'Les Mecs Eclectics', stage: 'Moose Bar' },
  { id: 373, day: 3, name: 'Tom Cosyns', stage: 'Moose Bar' },
  { id: 374, day: 3, name: 'Adam K', stage: 'House of Fortune' },
  { id: 375, day: 3, name: 'DJ GAB', stage: 'House of Fortune' },
  { id: 376, day: 3, name: 'Krevix', stage: 'House of Fortune' },
  { id: 377, day: 3, name: 'Sofia Cristo', stage: 'House of Fortune' },
];

const DAY_NAMES = { 1: 'Friday 17 Jul', 2: 'Saturday 18 Jul', 3: 'Sunday 19 Jul' };

const ALL_STAGES = [
  'Mainstage', 'Freedom by Bud', 'The Rose Garden', 'Elixir', 'Cage',
  'The Rave Cave', 'Planaxis', 'Melodia by Corona', 'Celestia by KuCoin',
  'Atmosphere', 'Core', 'Crystal Garden', 'The Great Library', 'Moose Bar', 'House of Fortune'
];

function getMusicLinks(artistName) {
  const q = encodeURIComponent(artistName);
  return {
    spotify:    `https://open.spotify.com/search/${q}`,
    apple:      `https://music.apple.com/gb/search?term=${q}`,
    soundcloud: `https://soundcloud.com/search?q=${q}`,
  };
}

// ============================================================
// STATE
// ============================================================
let currentUser  = null;
let currentDay   = 'all';
let currentStage = 'all';
let currentSort  = 'default'; // 'default' | 'alpha'
let ratings      = {};
let listeners    = [];

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
  currentUser = null; ratings = {};
  document.getElementById('appScreen').style.display   = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('usernameInput').value = '';
  document.getElementById('passwordInput').value = '';
}

// ============================================================
// INIT
// ============================================================
async function initApp() {
  buildStageDropdown();
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

function buildStageDropdown() {
  const sel = document.getElementById('stageFilter');
  sel.innerHTML = '<option value="all">All stages</option>';
  ALL_STAGES.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    sel.appendChild(opt);
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
  const updated = { ...getUserRating(userId, artistId), ...update };
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
  // Reset stage filter options based on day
  updateStageDropdownForDay();
  renderArtistList();
  renderPriorityList();
}

function filterStage(val) {
  currentStage = val;
  renderArtistList();
  renderPriorityList();
}

function filterSort(val, btn) {
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  currentSort = val;
  renderArtistList();
}

function updateStageDropdownForDay() {
  const sel = document.getElementById('stageFilter');
  const prevVal = sel.value;
  sel.innerHTML = '<option value="all">All stages</option>';
  const days = currentDay === 'all' ? [1,2,3] : [parseInt(currentDay)];
  const stages = [...new Set(LINEUP.filter(a => days.includes(a.day)).map(a => a.stage))];
  ALL_STAGES.filter(s => stages.includes(s)).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    sel.appendChild(opt);
  });
  sel.value = stages.includes(prevVal) ? prevVal : 'all';
  currentStage = sel.value;
}

function filteredArtists() {
  let artists = LINEUP;
  if (currentDay !== 'all') artists = artists.filter(a => a.day === parseInt(currentDay));
  if (currentStage !== 'all') artists = artists.filter(a => a.stage === currentStage);
  if (currentSort === 'alpha') artists = [...artists].sort((a,b) => a.name.localeCompare(b.name));
  return artists;
}

// ============================================================
// RENDER ARTIST LIST
// ============================================================
function renderArtistList() {
  const container = document.getElementById('artistList');
  const artists   = filteredArtists();
  const partner   = getPartner();
  container.innerHTML = '';

  if (currentSort === 'alpha' || currentStage !== 'all') {
    // Flat list with day label on each card
    artists.forEach(a => container.appendChild(buildArtistCard(a, partner, true)));
  } else {
    // Grouped by day
    const byDay = {};
    artists.forEach(a => {
      if (!byDay[a.day]) byDay[a.day] = [];
      byDay[a.day].push(a);
    });
    Object.keys(byDay).sort().forEach(day => {
      if (currentDay === 'all') {
        const hdr = document.createElement('div');
        hdr.className = 'day-header';
        hdr.textContent = DAY_NAMES[day];
        container.appendChild(hdr);
      }
      byDay[day].forEach(a => container.appendChild(buildArtistCard(a, partner, false)));
    });
  }
}

function buildArtistCard(artist, partner, showDay) {
  const myRating      = getUserRating(currentUser, artist.id);
  const partnerRating = partner ? getUserRating(partner, artist.id) : null;
  const isConflict    = detectConflict(myRating, partnerRating);
  const links         = getMusicLinks(artist.name);

  const card = document.createElement('div');
  card.className = 'artist-card' + (isConflict ? ' has-conflict' : '');
  card.id = 'card-' + artist.id;

  const info = document.createElement('div');
  info.style.flex = '1';
  info.innerHTML = `
    <div class="artist-name">${artist.name}${isConflict ? ' <span style="color:var(--red);font-size:13px;">⚠ conflict</span>' : ''}</div>
    <div class="artist-stage">${artist.stage}${showDay ? ' · ' + DAY_NAMES[artist.day] : ''}</div>
    <div class="music-links">
      <a href="${links.spotify}" target="_blank" class="music-link spotify" title="Spotify">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        Spotify
      </a>
      <a href="${links.apple}" target="_blank" class="music-link apple" title="Apple Music">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 14.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm6.5-10a1 1 0 110-2 1 1 0 010 2z"/></svg>
        Apple Music
      </a>
      <a href="${links.soundcloud}" target="_blank" class="music-link soundcloud" title="SoundCloud">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.017 0-.033.01-.05.01A4.174 4.174 0 000 16.348C0 18.473 1.723 20.2 3.85 20.2h13.5c1.93 0 3.5-1.57 3.5-3.5 0-1.8-1.37-3.27-3.12-3.47.05-.32.08-.65.08-.98 0-3.36-2.72-6.08-6.08-6.08-2.37 0-4.43 1.35-5.47 3.33-.47-.27-1.01-.43-1.58-.43-1.74 0-3.15 1.4-3.15 3.13 0 .27.04.54.1.79l-.45.14z"/></svg>
        SoundCloud
      </a>
    </div>`;
  card.appendChild(info);

  if (partner) {
    const pr = document.createElement('div');
    pr.className = 'partner-rating';
    pr.innerHTML = buildPartnerStarsHTML(partnerRating, partner);
    card.appendChild(pr);
  }

  const section = document.createElement('div');
  section.className = 'rating-section';
  section.innerHTML = '<div class="rating-label">Your rating</div>';

  const starsDiv = document.createElement('div');
  starsDiv.className = 'stars';
  for (let s = 1; s <= 5; s++) {
    const star = document.createElement('span');
    star.className = 'star' + (s <= myRating.stars ? ' lit' : '');
    star.textContent = '★';
    star.addEventListener('mouseenter', () => previewStars(starsDiv, s));
    star.addEventListener('mouseleave', () => resetStarPreview(starsDiv, artist.id));
    star.addEventListener('click', async () => {
      const cur = getUserRating(currentUser, artist.id);
      await setUserRating(currentUser, artist.id, { stars: cur.stars === s ? 0 : s, nope: false });
    });
    starsDiv.appendChild(star);
  }
  section.appendChild(starsDiv);

  const nope = document.createElement('button');
  nope.className = 'nope-btn' + (myRating.nope ? ' active' : '');
  nope.innerHTML = '<span>✕</span> Not for me';
  nope.addEventListener('click', async () => {
    const cur = getUserRating(currentUser, artist.id);
    await setUserRating(currentUser, artist.id, { nope: !cur.nope, stars: 0 });
  });
  section.appendChild(nope);
  card.appendChild(section);
  return card;
}

function buildPartnerStarsHTML(pr, partner) {
  const shortName = partner.replace(/\d+$/, '');
  if (!pr || (!pr.stars && !pr.nope)) return `<span class="partner-label">${shortName}: <span style="color:var(--text3)">—</span></span>`;
  if (pr.nope) return `<span class="partner-label">${shortName}:</span><span class="partner-stars"><span class="pstar nope-shown">✕ Not for me</span></span>`;
  let html = `<span class="partner-label">${shortName}:</span><span class="partner-stars">`;
  for (let s = 1; s <= 5; s++) html += `<span class="pstar${s <= pr.stars ? ' lit' : ''}">★</span>`;
  return html + '</span>';
}

function previewStars(container, val) {
  container.querySelectorAll('.star').forEach((s, i) => s.classList.toggle('preview', i < val && !s.classList.contains('lit')));
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
  const my = getUserRating(currentUser, artistId);
  const pr = partner ? getUserRating(partner, artistId) : null;
  if (my.nope && pr?.nope) return -2;
  let scores = [];
  if (my.nope) scores.push(0); else if (my.stars) scores.push(my.stars);
  if (pr) { if (pr.nope) scores.push(0); else if (pr.stars) scores.push(pr.stars); }
  return scores.length ? scores.reduce((a,b) => a+b,0) / scores.length : -1;
}

function detectConflict(myR, partnerR) {
  if (!partnerR) return false;
  return (myR.stars === 5 && partnerR.nope) || (myR.nope && partnerR.stars === 5);
}

function renderPriorityList() {
  const container = document.getElementById('priorityList');
  let artists = LINEUP;
  if (currentDay !== 'all') artists = artists.filter(a => a.day === parseInt(currentDay));
  if (currentStage !== 'all') artists = artists.filter(a => a.stage === currentStage);

  const scored = artists.map(a => ({ ...a, score: getScore(a.id) })).sort((a,b) => b.score - a.score);
  const rated       = scored.filter(a => a.score >= 0);
  const unrated     = scored.filter(a => a.score === -1);
  const mutual_nope = scored.filter(a => a.score === -2);

  container.innerHTML = '';
  if (!rated.length && !unrated.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">⭐</div><p>Rate some artists first to see the priority list.</p></div>';
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
      <div style="flex:1"><div class="priority-name">${a.name}</div>
      <div class="priority-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>
      ${conflict ? '<span class="score-pill conflict">⚠</span>' : `<span class="score-pill">${a.score.toFixed(1)}</span>`}`;
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
    container.innerHTML = '<div class="empty-state"><p>Conflicts appear once both users have rated artists.</p></div>';
    badge.style.display = 'none';
    return;
  }
  const conflicts = LINEUP.filter(a => detectConflict(getUserRating(currentUser, a.id), getUserRating(partner, a.id)));
  if (!conflicts.length) {
    badge.style.display = 'none';
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎉</div><p>No conflicts — you\'re in sync!</p></div>';
    return;
  }
  badge.style.display = 'inline';
  badge.textContent = conflicts.length;
  container.innerHTML = '';
  conflicts.forEach(a => {
    const my = getUserRating(currentUser, a.id);
    const pr = getUserRating(partner, a.id);
    const item = document.createElement('div');
    item.className = 'conflict-item';
    item.innerHTML = `
      <div class="conflict-icon">⚡</div>
      <div style="flex:1"><div class="conflict-name">${a.name}</div><div class="conflict-day">${DAY_NAMES[a.day]} · ${a.stage}</div></div>
      <div class="conflict-detail">
        <div class="conflict-row"><span class="cuser">${currentUser.replace(/\d+$/,'')}</span><span class="${my.stars===5?'cwant':'cnope'}">${my.stars===5?'★★★★★ Must see':'✕ Not for me'}</span></div>
        <div class="conflict-row"><span class="cuser">${partner.replace(/\d+$/,'')}</span><span class="${pr.stars===5?'cwant':'cnope'}">${pr.stars===5?'★★★★★ Must see':'✕ Not for me'}</span></div>
      </div>`;
    container.appendChild(item);
  });
}