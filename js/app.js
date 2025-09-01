// js/app.js
// Remplace entièrement ton fichier par ceci.

// -------------------------
// Données (FR / EN) — avec champ `start` pour tri fiable
// -------------------------
const CARDS_FR = {
  rubrique: [
    { title: 'Spurious Finder', url: 'pages/rubrique.html', desc: 'Calcul des produits de mélange', icon: '📡' },
    { title: 'Architecture Verif', url: 'pages/rubrique.html', desc: 'Calcul gain / NF / P1dB', icon: '⚙️' },
    { title: 'Sims Chaîne', url: 'pages/rubrique.html', desc: 'Simulateur chaîne RF', icon: '🧪' }
  ],
  formation: [
    { title: "École d’ingénieur Polytech Marseille", start: "2023-09-01", url: "pages/formation.html", desc: "Spécialité Microélectronique & Télécommunications — 2023 à 2026", logo: "assets/images/logo_polytech2.png" },
    { title: "Brevet de Technicien Supérieur", start: "2021-09-01", url: "pages/formation.html", desc: "Option Électronique & Communications — Aix-en-Provence — 2021 à 2023", logo: "assets/images/logo_LMA.png" },
    { title: "Baccalauréat Général Scientifique", start: "2017-09-01", url: "pages/formation.html", desc: "Option Mathématiques — Lycée Pierre Gilles de Gennes, Digne-les-Bains — 2017 à 2020", logo: "assets/images/logo_bac.png" }
  ],
  experience: [
    { title: "Contrat de professionnalisation — Avantix (Atos)", start: "2025-09-01", period: "Septembre 2025 – Septembre 2026", desc: "Développement et optimisation de chaînes RF", logo: "assets/images/logo_avantix.png", url: "pages/experience.html" },
    { title: "Stage RF Front-End — Avantix (Atos)", start: "2025-06-01", period: "Juin 2025 – Septembre 2025", desc: "Conception d’un récepteur superhétérodyne RF.", logo: "assets/images/logo_avantix.png", url: "pages/experience.html" },
    { title: "Woofing — Norvège & Suède", start: "2024-06-01", period: "Juin 2024 – Août 2024", desc: "Agriculture, construction d’abris, soins aux animaux.", logo: "assets/images/logo_woofing.png" },
    { title: "Technicien itinérant — IPSOS Electric", start: "2022-07-01", period: "Juil. 2022 – Août 2023", desc: "Préparation, mise en service et entretien d’onduleurs et de groupes électrogènes.", logo: "assets/images/logo_ipsos.png" },
    { title: "Employé multitâches — Pépinières Robin", start: "2021-03-01", period: "Mars 2021 – Juil. 2021", desc: "Mise en place des plantes, préparation d’engrais, conduite véhicule adapté.", logo: "assets/images/logo_robin.png" },
    { title: "Employé polyvalent — Action Sisteron", start: "2020-06-01", period: "Juin 2020 – Août 2020", desc: "Mise en rayon, caisse, gestion stock.", logo: "assets/images/logo_action.png" },
    { title: "Commis de cuisine — Pizzeria des Arcades", start: "2019-06-01", period: "Juin 2019 – Août 2019", desc: "Préparation et dressage des assiettes.", logo: "assets/images/logo_pizzeria.png" }
  ],
loisirs: [
  {
    title: "Judo",
    start: "2015-01-01",
    logo: "assets/images/logo_ffj.png",
    url: "pages/loisirs.html"
  },
  {
    title: "Impression 3D",
    start: "2019-01-01",
    logo: "assets/images/logo_neodes.png",
    url: "pages/loisirs.html"
  },
  {
    title: "Voyages",
    start: "2018-01-01",
    logo: "assets/images/logo_monde.png",
    url: "pages/voyage.html"
  }
],
  projets: [
    { title: 'Spurious Finder (web)', url: 'pages/projets.html', desc: 'Outil JS/HTML', icon: '🛠️' },
    { title: 'Filtre tunable', url: 'pages/projets.html', desc: 'Data + scripts', icon: '🔧' }
  ]
};

const CARDS_EN = {
  rubrique: [
    { title: 'Spurious Finder', url: 'pages/rubrique.html', desc: 'Mixing products calculator', icon: '📡' },
    { title: 'Architecture Verif', url: 'pages/rubrique.html', desc: 'Gain / NF / P1dB calculation', icon: '⚙️' },
    { title: 'Chain Sims', url: 'pages/rubrique.html', desc: 'RF chain simulator', icon: '🧪' }
  ],
  formation: [
    { title: "Engineering — Polytech Marseille", start: "2023-09-01", url: "pages/formation.html", desc: "Specialisation Microelectronics & Telecommunications — 2023 to 2026", logo: "assets/images/logo_polytech2.png" },
    { title: "Higher Technician Certificate (BTS)", start: "2021-09-01", url: "pages/formation.html", desc: "Electronics & Communications — Aix-en-Provence — 2021 to 2023", logo: "assets/images/logo_LMA.png" },
    { title: "Scientific Baccalaureate", start: "2017-09-01", url: "pages/formation.html", desc: "Mathematics option — Lycée Pierre Gilles de Gennes, Digne-les-Bains — 2017 to 2020", logo: "assets/images/logo_bac.png" }
  ],
  experience: [
    { title: "Apprenticeship — Avantix (Atos)", start: "2025-09-01", period: "September 2025 – September 2026", desc: "Development and optimization of RF chains", logo: "assets/images/logo_avantix.png", url: "pages/experience.html" },
    { title: "RF Front-End Internship — Avantix (Atos)", start: "2025-06-01", period: "June 2025 – September 2025", desc: "Design of a superheterodyne RF receiver.", logo: "assets/images/logo_avantix.png", url: "pages/experience.html" },
    { title: "Woofing — Norway & Sweden", start: "2024-06-01", period: "June 2024 – August 2024", desc: "Agriculture, shelter building, animal care.", logo: "assets/images/logo_woofing.png" },
    { title: "Field Technician — IPSOS Electric", start: "2022-07-01", period: "July 2022 – August 2023", desc: "Setup, commissioning and maintenance of inverters and generators.", logo: "assets/images/logo_ipsos.png" },
    { title: "Multitask worker — Robin Nurseries", start: "2021-03-01", period: "March 2021 – July 2021", desc: "Plant placement, fertilizer preparation, vehicle operation.", logo: "assets/images/logo_robin.png" },
    { title: "Retail Assistant — Action Sisteron", start: "2020-06-01", period: "June 2020 – August 2020", desc: "Stocking shelves, cashier, inventory tasks.", logo: "assets/images/logo_action.png" },
    { title: "Kitchen assistant — Pizzeria des Arcades", start: "2019-06-01", period: "June 2019 – August 2019", desc: "Food preparation and plating.", logo: "assets/images/logo_pizzeria.png" }
  ],
loisirs: [
  {
    title: "Judo",
    start: "2015-01-01",
    logo: "assets/images/logo_ffj.png",
    url: "pages/loisirs.html"
  },
  {
    title: "3D Printing",
    start: "2019-01-01",
    logo: "assets/images/logo_neodes.png",
    url: "pages/loisirs.html"
  },
  {
    title: "Travels",
    start: "2018-01-01",
    logo: "assets/images/logo_monde.png",
    url: "pages/voyage.html"
  }
],
  projets: [
    { title: 'Spurious Finder (web)', url: 'pages/projets.html', desc: 'JS/HTML tool', icon: '🛠️' },
    { title: 'Tunable filter', url: 'pages/projets.html', desc: 'Data + scripts', icon: '🔧' }
  ]
};

// -------------------------
// Section titles (FR/EN)
// -------------------------
const SECTION_TITLES = {
  fr: {
    formation: "Formation",
    experience: "Expérience professionnelle",
    loisirs: "Loisirs / Activités",
    projets: "Projets personnels",
    rubrique: "Rubrique"
  },
  en: {
    formation: "Education",
    experience: "Professional Experience",
    loisirs: "Hobbies / Activities",
    projets: "Personal Projects",
    rubrique: "Sections"
  }
};

// -------------------------
// Helpers: langue stockée / récupération cartes
// -------------------------
function getStoredLang(){
  const s = localStorage.getItem('siteLang');
  if(s) return s === 'en' ? 'en' : 'fr';
  return (navigator.language && navigator.language.startsWith('en')) ? 'en' : 'fr';
}
function getCardsFor(key){
  return (getStoredLang() === 'en') ? CARDS_EN[key] : CARDS_FR[key];
}

// -------------------------
// Parse période/start -> Date pour tri fiable
// -------------------------
function parsePeriodStart(periodOrStart){
  try{
    if(!periodOrStart) return new Date(0);
    if(typeof periodOrStart === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(periodOrStart)){
      return new Date(periodOrStart);
    }
    const monthMap = {
      jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11,
      janvier:0,fev:1,févr:1,mars:2,avril:3,mai:4,juin:5,juillet:6,août:7,aout:7,septembre:8,octobre:9,novembre:10,décembre:11
    };
    const p = (periodOrStart || '').trim();
    let m = p.match(/^([A-Za-zéûàèçÉû]{3,})\s+(\d{4})/);
    if(m){
      const mon = m[1].toLowerCase();
      const year = parseInt(m[2],10);
      const k = mon.slice(0,3);
      const month = (monthMap[k] !== undefined) ? monthMap[k] : (monthMap[mon] !== undefined ? monthMap[mon] : 0);
      return new Date(year, month, 1);
    }
    m = p.match(/^(\d{4})/);
    if(m) return new Date(parseInt(m[1],10),0,1);
    return new Date(0);
  }catch(e){
    console.error('parsePeriodStart error', e, periodOrStart);
    return new Date(0);
  }
}

// -------------------------
// Rendu d'une section (tri + création DOM)
// -------------------------
function clearAndRenderSection(key, containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  container.innerHTML = '';
  const items = getCardsFor(key) || [];
  const copy = Array.isArray(items) ? items.slice() : Object.values(items);

  // tri décroissant (plus récent en premier) si présents des champs start / period
  copy.sort((a,b) => {
    const aStart = a.start ? parsePeriodStart(a.start) : parsePeriodStart(a.period || a.desc || '');
    const bStart = b.start ? parsePeriodStart(b.start) : parsePeriodStart(b.period || b.desc || '');
    return bStart - aStart;
  });

  copy.forEach(c => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = c.url || '#';

    // ---- OPTION : pour ouvrir dans le même onglet (décommente la ligne suivante) ----
    a.target = '_self';
    // ---- Par défaut si tu veux continuer à ouvrir dans un nouvel onglet : ----
    // a.target = c.url ? '_self' : '_self';

    // Si on est sur la section "loisirs", on veut une carte centrée logo + titre
    if(containerId === 'loisirsCards'){
      a.classList.add('logo-card');
      const iconHtml = c.logo ? `<img src="${c.logo}" alt="${c.title}" class="card-logo">` : (c.icon || '');
      a.innerHTML = `
        <div class="icon">${iconHtml}</div>
        <h3>${c.title}</h3>
      `;
      container.appendChild(a);
      return;
    }

    // Comportement par défaut pour les autres sections (comme avant)
    const iconHtml = c.logo
      ? `<img src="${c.logo}" alt="${c.title}" class="card-logo" style="max-height:40px;object-fit:contain;">`
      : (c.icon || '');

    a.innerHTML = `
      <div class="icon">${iconHtml}</div>
      <h3>${c.title}</h3>
      ${c.period ? `<p class="period">${c.period}</p>` : ''}
      <p>${c.desc || ''}</p>
    `;
    container.appendChild(a);
  });
}


function renderAllSections(){
  clearAndRenderSection('rubrique','rubriqueCards');
  clearAndRenderSection('formation','formationCards');
  clearAndRenderSection('experience','experienceCards');
  clearAndRenderSection('loisirs','loisirsCards');
  clearAndRenderSection('projets','projetsCards');
}

// -------------------------
// Mettre à jour titres de sections en fonction de la langue
// -------------------------
function updateSectionTitles(lang){
  document.querySelectorAll('.category-title[data-key]').forEach(h => {
    const key = h.dataset.key;
    if(SECTION_TITLES[lang] && SECTION_TITLES[lang][key]) h.textContent = SECTION_TITLES[lang][key];
  });
}

// -------------------------
// Header text updates (titre, description, intro)
// -------------------------
function applyHeaderTexts(lang){
  const siteTitle = document.getElementById('siteTitle');
  const siteDesc = document.getElementById('siteDesc');
  const introText = document.getElementById('introText');
  if(siteTitle) siteTitle.textContent = (lang === 'en') ? 'François Bordas — Portfolio' : 'François Bordas — Porte Folio';
  if(siteDesc) siteDesc.textContent = (lang === 'en')
    ? "Serious, hyper-energetic engineer — motto: 'Be serious without taking yourself seriously!' Competitive judoka, jack-of-all-trades and extremely curious, I share my projects and work here."
    : "Ingénieur sérieux et très énergique — ma devise : « Être sérieux sans se prendre au sérieux ! » Judoka en compétition, touche-à-tout et extrêmement curieux, je partage ici mes projets et réalisations.";
  if(introText) introText.innerHTML = (lang === 'en')
    ? `<strong>Purpose:</strong> this site presents everything I've done in a different, more complete format than a CV — each card opens a detailed presentation page.`
    : `<strong>But :</strong> ce site a pour objectif de présenter tout ce que j'ai pu réaliser dans un format différent et plus complet qu'un CV — chaque case ouvre une page de présentation détaillée.`;
}

// -------------------------
// Toggle init (dark + lang) et listeners
// -------------------------
function initTogglesAndState(){
  const darkToggle = document.getElementById('darkToggle');
  const langToggle = document.getElementById('langToggle');

  // Dark mode state (localStorage or existing body class)
  try {
    const darkStored = localStorage.getItem('darkMode');
    if(darkStored !== null){
      const enabled = darkStored === 'true';
      document.body.classList.toggle('dark', enabled);
      if(darkToggle) darkToggle.checked = enabled;
    } else {
      if(darkToggle) darkToggle.checked = document.body.classList.contains('dark');
    }
    if(darkToggle){
      darkToggle.addEventListener('change', () => {
        const enabled = darkToggle.checked;
        document.body.classList.toggle('dark', enabled);
        localStorage.setItem('darkMode', enabled);
      });
    }
  } catch(e){
    console.error('Dark toggle init error', e);
  }

  // Language initial + listener
  try {
    const storedLang = getStoredLang();
    if(langToggle) langToggle.checked = (storedLang === 'en');

    // Apply texts + section titles + render
    applyHeaderTexts(storedLang);
    updateSectionTitles(storedLang);
    renderAllSections();

    if(langToggle){
      langToggle.addEventListener('change', (e) => {
        const newLang = e.target.checked ? 'en' : 'fr';
        localStorage.setItem('siteLang', newLang);
        applyHeaderTexts(newLang);
        updateSectionTitles(newLang);
        renderAllSections();
      });
    }
  } catch(e){
    console.error('Lang toggle init error', e);
  }
}

// -------------------------
// DOM ready
// -------------------------
document.addEventListener('DOMContentLoaded', () => {
  try {
    initTogglesAndState();
  } catch (err) {
    console.error('Init error', err);
  }
});
