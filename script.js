const panelTopics = document.querySelectorAll('.overlay'); // all topic panels
const panelTitles = document.querySelectorAll('.panel-label'); // all panel labels
const navLinks = document.querySelectorAll('.nav-link'); // all nav links
const midSection = document.querySelector('#gallery-section'); // for all active quirk
const navbar = document.querySelector('#navbar'); // for nav colour transition
// hamburger consts
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlist');

let focusUrl;
let focusHeading;
let focusSubheading;
let focusPara1;
let focusTechBadges;
let focusPara2;
let focusRepo;

// FUNCTION - openApp from button link at bottom of the page
function openApp() {
  if (!focusUrl) {
    focusUrl = 'https://lupo.onrender.com/'
  }
  console.log('focusUrl = ' + focusUrl)
  window.open(focusUrl);
}

// FUNCTION - openRepo from button link at bottom of the page
function openRepo() {
  if (!focusRepo) {
    focusRepo = 'https://github.com/pablisch/lupo'
  }
  console.log('focusRepo = ' + focusRepo)
  window.open(focusRepo);
}

// Listen for ENTER - go to top of page
document.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    backToTop();
  }
});

// Listen for topic panel click - get vid ID
panelTopics.forEach((topic) => {
  topic.addEventListener('click', (panelClickedEvent) => {
    let panelLinkID = panelClickedEvent.target.id;
    findFocusFromPanelLink(panelLinkID);
  });
});

// Listen for nav link click - get vid ID
navLinks.forEach((link) => {
  link.addEventListener('click', (navLinkClickedEvent) => {
    let navLinkText = navLinkClickedEvent.target.innerHTML;
    findFocusKeyFromNavLink(navLinkText);
  });
});

// Listen for topic panel mouseover - set active classes
panelTopics.forEach((topic) => {
  topic.addEventListener('mouseover', (hoverOn) => {
    let panelLinkID = hoverOn.target.id;
    indexfromPanel(panelLinkID);
  });
});

// Listen for nav link mouseover - set active classes
navLinks.forEach((link) => {
  link.addEventListener('mouseover', (hoverOn) => {
    let navLinkText = hoverOn.target.innerHTML;
    indexfromLink(navLinkText);
  });
});

// Listen for topic panel mouseOUT - set active classes
panelTopics.forEach((topic) => {
  topic.addEventListener('mouseout', (hoverOff) => {
    clearActive();
  });
});

// Listen for nav link mouseOUT - set active classes
navLinks.forEach((link) => {
  link.addEventListener('mouseout', (hoverOff) => {
    clearActive();
  });
});

// Listen for ICON mouseover - set ALL infoActive
document
  .querySelector('.logo-image')
  .addEventListener('mouseover', (logoHoverOn) => {
    allActive();
  });

// Listen for ICON mouseOUT - clear ALL infoActive
document
  .querySelector('.logo-image')
  .addEventListener('mouseout', (logoHoverOFF) => {
    clearAllActive();
  });

// FUNCTION - get FOCUS source from topic panel target which panel is clicked
function findFocusFromPanelLink(whichPanelLink) {
  let focusKey =
    whichPanelLink == 'panel-1-1'
      ? 0
      : whichPanelLink == 'panel-1-2'
      ? 0
      : whichPanelLink == 'panel-2-1'
      ? 1
      : whichPanelLink == 'panel-2-2'
      ? 1
      : whichPanelLink == 'panel-3-1'
      ? 2
      : whichPanelLink == 'panel-3-2'
      ? 2
      : whichPanelLink == 'panel-4-1'
      ? 3
      : whichPanelLink == 'panel-4-2'
      ? 3
      : whichPanelLink == 'panel-5-1'
      ? 4
      : whichPanelLink == 'panel-5-2'
      ? 4
      : whichPanelLink == 'panel-6-1'
      ? 5
      : whichPanelLink == 'panel-6-2'
      ? 5
      : 0;
  setFocusInfo(focusKey);
}

// FUNCTION - get vid source from nav link target
function findFocusKeyFromNavLink(whichNavLink) {
  let focusKey =
    whichNavLink == projectData[0].navLinkLabel
      ? 0
      : whichNavLink == projectData[1].navLinkLabel
      ? 1
      : whichNavLink == projectData[2].navLinkLabel
      ? 2
      : whichNavLink == projectData[3].navLinkLabel
      ? 3
      : whichNavLink == projectData[4].navLinkLabel
      ? 4
      : whichNavLink == projectData[5].navLinkLabel
      ? 5
      : 0;
  setFocusInfo(focusKey);
}

function setFocusInfo(focusKey) {
  console.log('focusKey is ' + focusKey);

  const focusProject =
    focusKey === 0 ? projectData[0] :
      focusKey === 1 ? projectData[1] :
        focusKey === 2 ? projectData[2] :
          focusKey === 3 ? projectData[3] :
            focusKey === 4 ? projectData[4] :
              focusKey === 5 ? projectData[5] :
                projectData[0];

  loadFocusInfo(focusProject);
}

// FUNCTION - load focus information that was set in setFocusInfo
function loadFocusInfo(focusProject) {
  document.querySelector('#focus-heading').innerHTML = focusProject.focusHeading;
  document.querySelector('#focus-subheading').innerHTML = focusProject.focusSubheading;
  document.querySelector('#focus-para-1').innerHTML = focusProject.focusPara1;
  document.querySelector('#technologies').innerHTML = focusProject.focusTechBadges;
  document.querySelector('#focus-para-2').innerHTML = focusProject.focusPara2;
  document.querySelector('#focus-page-message').innerHTML = focusProject.focusPageMessage;
  document.querySelector('#focus-page').src = focusProject.focusUrl; // #focusPage is the id of the iframe
  window.scrollTo(0, document.body.scrollHeight); // scrolls to bottom of the page
}

// FUNCTION - get array index from panel target when hovering over panel
function indexfromPanel(panelHover) {
  let index =
    panelHover == 'panel-1-1'
      ? 0
      : panelHover == 'panel-1-2'
      ? 0
      : panelHover == 'panel-2-1'
      ? 1
      : panelHover == 'panel-2-2'
      ? 1
      : panelHover == 'panel-3-1'
      ? 2
      : panelHover == 'panel-3-2'
      ? 2
      : panelHover == 'panel-4-1'
      ? 3
      : panelHover == 'panel-4-2'
      ? 3
      : panelHover == 'panel-5-1'
      ? 4
      : panelHover == 'panel-5-2'
      ? 4
      : panelHover == 'panel-6-1'
      ? 5
      : panelHover == 'panel-6-2'
      ? 5
      : 0;
  console.log(`panel #${index + 1}`);
  activePanel(index);
}

// FUNCTION - get array index from link target
function indexfromLink(linkHover) {
  let index =
    linkHover == projectData[0].navLinkLabel
      ? 0
      : linkHover == projectData[1].navLinkLabel
      ? 1
      : linkHover == projectData[2].navLinkLabel
      ? 2
      : linkHover == projectData[3].navLinkLabel
      ? 3
      : linkHover == projectData[4].navLinkLabel
      ? 4
      : linkHover == projectData[5].navLinkLabel
      ? 5
      : linkHover == 'More About Me'
      ? 6
      : 0;
  console.log(`navlink #${index + 1}`);
  activePanel(index);
}

// FUNCTION - scroll back to top of page
function backToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// hamburger sensing and apply classes
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
navLinks.forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// FUNCTION - set infoActive classes
function activePanel(whichPanel) {
  panelTopics[whichPanel].classList.add('infoActiveOverlay');
  panelTitles[whichPanel].classList.add('infoActiveKnotlabel');
}

// REMOVE ALL infoActive classes
function clearActive() {
  panelTopics.forEach((topic) => {
    topic.classList.remove('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.classList.remove('infoActiveKnotlabel');
  });
}

// APPLY infoActive to ALL panels + apply long transitions
function allActive() {
  panelTopics.forEach((topic) => {
    topic.style.transition = 'all 1s ease-in-out';
    topic.classList.add('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.style.transition = 'all 4s ease-in-out';
    label.classList.add('infoActiveKnotlabel');
  });
  midSection.style.backgroundColor = '#68b0ab';
  midSection.style.transition = 'background-color 4s ease';
  navbar.style.backgroundColor = '#626764';
  navbar.style.transition = 'background-color 4s ease';
}

// REMOVE ALL infoActive classes + apply normal transitions
function clearAllActive() {
  panelTopics.forEach((topic) => {
    topic.style.transition = 'all 0.4s ease-in-out';
    topic.classList.remove('infoActiveOverlay');
  });
  panelTitles.forEach((label) => {
    label.style.transition = 'all 0.8s ease-in-out';
    label.classList.remove('infoActiveKnotlabel');
  });
  midSection.style.backgroundColor = '#faf3dd';
  midSection.style.transition = 'background-color 3s ease';
  navbar.style.backgroundColor = '#c8d5b9';
  navbar.style.transition = 'background-color 3s ease';
}