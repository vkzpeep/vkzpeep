document.addEventListener('DOMContentLoaded', () => {
  fetchData({
    "uds": [
      "1222594003271417858",
      
    ]
})
}
);

function fetchData(userData) {
const uids = userData.uds
const profileContainer = document.querySelector('.profile-container');

uids.forEach((uid, index) => {
  const userLink = `https://discord.com/users/${uid}/`;
  const profile = createprofile(index, userLink);
  profileContainer.appendChild(profile);

  setTimeout(() => {
    fetchUser(uid, index);
  }, 100 * index);
});
}

function fetchUser(uid, index) {
fetch(`https://api.fxsh.run/users/${uid}/`)
.then(response => response.json())
.then(userData => {
  atualizarprofile(index, userData);
})
.catch(error => console.error(error));
}

function atualizarprofile(index, userData) {

const imgElement = document.getElementById(`avatar${index + 1}`);
const nameElement = document.getElementById(`name${index + 1}`);
const tagElement = document.createElement('p');
const flagsElement = document.getElementById(`flags${index + 1}`);
const connsElement = document.getElementById(`conns${index + 1}`);
connsElement.className = (userData.connectedAccounts && userData.connectedAccounts.length > 0)
  ? 'conn-container'
  : 'conn-container no-connections';
tagElement.className = 'tag';
tagElement.textContent = `@${userData.user.username}`;
imgElement.src = userData.profile.avatarUrl;
nameElement.textContent = userData.user.globalName || userData.user.username || ' ';

const flags = {
  ActiveDeveloper: "<img class='flag-icon' title='Desenvolvedor(a) Ativo(a)' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/activedeveloper.svg'>",
  PremiumEarlySupporter: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/pig.svg' alt='Premium Early Supporter' title='Apoiador Inicial'>",
  HypeSquadOnlineHouse1: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/hypebravery.svg' alt='HypeSquad Online House 1' title='Bravery'>",
  HypeSquadOnlineHouse2: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/hypebrilliance.svg' alt='HypeSquad Online House 2' title='Brilliance'>",
  HypeSquadOnlineHouse3: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/hypebalance.svg' alt='HypeSquad Online House 3' title='Balance'>",
  Nitro: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/nitro.svg' alt='Nitro' title='Nitro'>",
  BoostLevel1: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl1.svg' alt='Boost Level 1' title='Boost Nível 1'>",
  BoostLevel2: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl2.svg' alt='Boost Level 2' title='Boost Nível 2'>",
  BoostLevel3: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl3.svg' alt='Boost Level 3' title='Boost Nível 3'>",
  BoostLevel4: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl4.svg' alt='Boost Level 4' title='Boost Nível 4'>",
  BoostLevel5: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl5.svg' alt='Boost Level 5' title='Boost Nível 5'>",
  BoostLevel6: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl6.svg' alt='Boost Level 6' title='Boost Nível 6'>",
  BoostLevel7: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl7.svg' alt='Boost Level 7' title='Boost Nível 7'>",
  BoostLevel8: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl8.svg' title='Boost Nível 8'>",
  BoostLevel9: "<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/15a93aad09f150effc12fe8d9249c67bc48920d7/badges/lvl9.svg' title='Boost Nível 9'>",
  LegacyUsername: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/pomelo.svg' alt='Legacy Username Badge' title='Originalmente ${userData.user.legacyUsername}'>`,
  BotCommands: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/botcommands.svg' alt='Bot Commands Badge' title='Compatível com Comandos'>`,
  automod: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/automod.svg' alt='AutoMod Badge' title='Usa AutoMod'>`,
  VerifiedDeveloper: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/dev.svg' alt='Verified Developer' title='Desenvolvedor Verificado de bots Pioneiro'>`,
  HypeSquad: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/hypesquad.svg' alt='HypeSquad' title='HypeSquad Events'>`,
  Partner: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/discordpartner.svg' alt='Partner' title='Dono(a) de servidor parceiro'>`,
  CertifiedModerator: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/moderator.svg' alt='Moderador' title='Moderator'>`,
  BugHunterLevel2: `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/discord/discordbughunter2.svg' alt='BugHunter' title='BugHunter 2'>`,
}

flagsElement.innerHTML = (userData.profile.badgesArray && userData.profile.badgesArray.length > 0)
  ? userData.profile.badgesArray.map((flag) => {
    const flagHtml = flags[flag];
    const titleText = flagHtml.match(/title='(.*?)'/);
    const title = titleText ? titleText[1] : '';
    return `<div class="tooltip" style="white-space: nowrap;">${flagHtml}<span class="tooltiptext">${title}</span></div>`;
  }).join('')
  : `<img class='flag-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/main/connections/invis.png' alt=' '>`;


const connections = {
  paypal: {
    icon: "<img class='conn-icon' src='https://discord.com/assets/c44f32fe60d6657fda9f.svg'>",
    off: true
  },
  domain: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/domain.svg'>",
    link: 'https://',
  },
  steam: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/connections/steam.svg'>",
    link: 'https://steamcommunity.com/profiles/',
  },
  epicgames: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/epicgames.svg'>",
    off: true
  },
  spotify: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/spotify.svg'>",
    link: 'https://open.spotify.com/user/',
  },
  battlenet: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/battlenet.svg'>",
    off: true
  },
  crunchyroll: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/crunchyroll.svg'>",
    off: true
  },
  ebay: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/ebay.svg'>",
    off: true
  },
  facebook: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/facebook.svg'>",
    link: 'https://www.facebook.com/@',
  },
  github: {
    icon: "<img class='conn-icon'src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/github.svg'>",
    link: 'https://github.com/',
    user: true
  },
  leagueoflegends: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/leagueoflegends.svg'>",
    off: true
  },
  playstation: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/playstation.svg'>",
    off: true
  },
  reddit: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/reddit.svg'>",
    link: 'https://www.reddit.com/user/',
    user: true
  },
  riotgames: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/riotgames.svg'>",
    off: true
  },
  tiktok: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/tiktok.svg'>",
    link: 'https://www.tiktok.com/@',
    user: true
  },
  twitch: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/twitch.svg'>",
    link: 'https://www.twitch.tv/',
    user: true
  },
  twitter: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/twitter.svg'>",
    link: 'https://twitter.com/',
    user: true
  },
  xbox: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/xbox.svg'>",
    off: true
  },
  youtube: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/youtube.svg'>",
    link: 'https://www.youtube.com/channel/',
  },
  instagram: {
    icon: "<img class='conn-icon' src='https://raw.githubusercontent.com/irrecusavel/discord/8e35b50a8186eb92f54bb5446e7184ddc088aa4e/connections/instagram.svg'>",
    link: 'https://www.instagram.com/',
    user: true
  },
};

connsElement.innerHTML = (userData.connectedAccounts && userData.connectedAccounts.length > 0)
  ? userData.connectedAccounts.map((conn) => {
    const lowerCaseType = conn.type.toLowerCase();
    if (lowerCaseType in connections) {
      const connection = connections[lowerCaseType];
      if (connection.off) {
        return `<a title="${conn.name || ''}" class="tooltip">${connection.icon}<span class="tooltiptext">${conn.name || ''}</span></a>`;
      }
      if (connection.user) {
        return `<a href="${connection.link}${conn.name}" target="_blank" class="tooltip">${connection.icon}<span class="tooltiptext">${conn.name || ''}</span></a>`;
      } else {
        return `<a href="${connection.link}${conn.id}" target="_blank" class="tooltip">${connection.icon}<span class="tooltiptext">${conn.name || ''}</span></a>`;
      }
    }
    return '';
  }).join(' ')
  : "<img class='conn-icon' src='https://raw.githubusercontent.com/rhxsp/rhxDiscordAssets/main/badges/invis.png' alt=' '>";

nameElement.appendChild(tagElement);

imgElement.addEventListener('load', () => {
  const profileElement = document.querySelector(`.profile:nth-child(${index + 1}`);
  profileElement.classList.add('loaded');
});
}

function createprofile(index, userLink) {
const profile = document.createElement('div');
profile.className = 'profile';
const link = document.createElement('a');
link.href = userLink || `https://discord.com/users/${index + 1}`;
link.target = "_blank";
link.title = `Clique para ir para o profile.`;

const avatar = document.createElement('img');
avatar.id = `avatar${index + 1}`;
avatar.alt = '';

const nameContainer = document.createElement('div');
nameContainer.className = 'name-container';

const nameParagraph = document.createElement('p');
nameParagraph.id = `name${index + 1}`;
nameParagraph.textContent = ' ';

const flagsParagraph = document.createElement('p');
flagsParagraph.id = `flags${index + 1}`;
flagsParagraph.innerHTML = ' ';

const connsParagraph = document.createElement('p');
connsParagraph.id = `conns${index + 1}`;
connsParagraph.innerHTML = ' ';

link.appendChild(avatar);
nameContainer.appendChild(nameParagraph);
nameContainer.appendChild(flagsParagraph);
nameContainer.appendChild(connsParagraph);
profile.appendChild(link);
profile.appendChild(nameContainer);
avatar.addEventListener('load', () => {
  VanillaTilt.init(profile, {
    max: 25,
    speed: 1000,
    glare: true,
    "max-glare": 0.2,
    gyroscope: true,
  });
});

return profile;
}

function removeOverlay() {
var overlay = document.querySelector('.black-overlay');
Musica();
overlay.style.transition = 'opacity 1s';
overlay.style.opacity = '0';
setTimeout(() => {
  overlay.style.display = 'none';
}, 1000);
}

function Musica() {
const audio = document.getElementById('audio');
audio.volume = 0.2;
audio.currentTime = 13;
audio.play();
}

function getKey(e) {
var n = e.keyCode;
if (console.log(n), 16 != n && 17 != n || (mode = 2), 1 == mode) {
  if (123 == n)
    return !1
} else {
  if (73 == n || 74 == n || 85 == n)
    return !1;
  if (123 == n)
    return !1
}
}

let mode = 1;
document.oncontextmenu = new Function("return false;");

document.querySelector('.profile-container').onmousemove = e => {
for (const profile of document.querySelectorAll('.profile')) {
  const rect = profile.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  document.documentElement.style.setProperty('--mouse-x', `${x}px`);
  document.documentElement.style.setProperty('--mouse-y', `${y}px`);
}
};


document.addEventListener("DOMContentLoaded", function () {
var audio = document.getElementById("audio");
var muteButton = document.getElementById("muteButton");
var muteIcon = document.getElementById("muteIcon");
var unmuteIcon = document.getElementById("unmuteIcon");

if (!audio.muted) {
  muteIcon.style.display = "none";
  unmuteIcon.style.display = "inline-block";
}

muteButton.addEventListener("click", function () {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.style.display = "none";
    unmuteIcon.style.display = "inline-block";
  } else {
    audio.muted = true;
    muteIcon.style.display = "inline-block";
    unmuteIcon.style.display = "none";
  }
});
});