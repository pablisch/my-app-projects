const panelTopics = document.querySelectorAll('.overlay'); // all topic panels
const panelTitles = document.querySelectorAll('.panel-label'); // all panel labels
const navLinks = document.querySelectorAll('.nav-link'); // all nav links
const midSection = document.querySelector('.galleryContainer'); // for all active quirk

let focusUrl;
let focusHeading;
let focusSubheading;
let focusPara1;
let focusTechBadges;
let focusPara2;

// hamburger consts
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlist');

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
    whichNavLink == 'LUPO'
      ? 0
      : whichNavLink == 'FarceBook'
      ? 1
      : whichNavLink == 'Lair BnB'
      ? 2
      : whichNavLink == 'Knot Very Useful'
      ? 3
      : whichNavLink == 'Picture Pad'
      ? 4
      : whichNavLink == 'Chitter'
      ? 5
      : whichNavLink == 'More About Me'
      ? 6
      : 0;
  setFocusInfo(focusKey);
}

// FUNCTION - set focus information according to focusKey (which panel or link was clicked)
function setFocusInfo(focusKey) {
  console.log('focusKey is ' + focusKey);

  if (focusKey === 0) { // LUPO
    console.log('lupo');
    focusPageMessage =
      'Click on the <span class="bold">TO TRAINS</span> icon to go to the main page.';
    focusUrl = 'https://lupo.onrender.com/';
    focusHeading = 'London Underground Phony Orchestra';
    focusSubheading = 'The sonification and visualisation of the London Underground Tube network';
    focusPara1 =
      "<span class='bold'>Description:</span> A generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API. Each tube line is assigned an instrument and each station assigned a different note. This was the final group engineering project on the Makers Software Development bootcamp. The app was designed and coded entirely from scratch as a group collaboration. It was designed and built in eight days by five students.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" class="left-space-1" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" class="left-space-1" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" class="left-space-2" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" class="left-space-2" width="35" height="35"/>'
    focusPara2 =
      "<span class='bold'>Technologies:</span> The app is primarily built in JavaScript using the React.js library. We relied heavily on tone.js for the audio side of things which was new to all in the group. We also learnt chart.js when we discovered an urgent need to visualise TFL's dubious data. We, of course used Git and GitHub throughout as well as Postman.";
    
  } else if (focusKey === 1) { // FarceBook
    focusPageMessage =
      "As this is hosted on a free tier of <span class='bold'>Render</span>, the backend may take up to 30 seconds to spin up. The app will not work until the backend is running. Please be patient";
    focusUrl = 'https://farcebook-9uwa.onrender.com/';
    focusHeading = 'FarceBook';
    focusSubheading = 'A clone of Facebook using the MERN stack';
    focusPara1 =
      "<span class='bold'>Description:</span> This Facebook clone app was the second group engineering project on the Makers Software Develpment Bootcamp completed in eight days. It was a first introduction to the MERN stack with no prior knowledge of any of the technologies except for nine days of having used Node.js as a runtime for vanilla JavaScript fundamentals. We were supplied with an existing codebase consisting of a basic backend server and the default React app with a few base components. We spent the the first couple of days reading through the codebase and exploring the new technologies."
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" class="left-space-1" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" class="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="express" class="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongodb" class="left-right-space-minus" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" class="left-space-2" width="30" height="30"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" class="left-space-2" width="30" height="30"/>'
    focusPara2 =
      "<span class='bold'>Technologies:</span> The app is primarily built in JavaScript using the React.js library. We relied heavily on tone.js for the audio side of things which was new to all in the group. We also learnt chart.js when we discovered an urgent need to visualise TFL's dubious data. We, of course used Git and GitHub throughout as well as Postman.";
    
  } else if (focusKey === 2) { // Lair BnB
    focusPageMessage =
      '<span class="bold">Lair BnB</span> is <span class="bold">NOT</span> currently deployed online. Please see the <span class="bold">README</span> for instructions on how to run it locally.';
    focusUrl = 'https://pablisch.github.io/lair-bnb/';
    focusHeading = 'Primary STEM and Computing Lead';
    focusSubheading = 'Subheading';
    focusPara1 =
      "I have been incredibly lucky to have had such a varied teaching career full of amazing projects and opportunities. I was tasked to create a STEM makers workshop for a Tottenham primary school and my first job was to design a series of 'WOW' projects to inspire the children and get them excited about STEM. We had huge amounts of fun and learning with water bottle rockets, effervescent cannons, wind-powered cars and balloon-popping robot wars.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/>'
    focusPara2 =
      'Over the next couple of years we hosted multi-school STEM events and won every STEM competition and award that we enetered.';
    
  } else if (focusKey === 3) { // Knot Very Useful
    focusPageMessage = 'Hover over a knot panel of navbar link to see details. Click on either to see a video of that knot or hitch.';
    focusUrl = 'https://pablisch.github.io/knot-very-useful/';
    focusHeading = 'Knot Very Useful';
    focusSubheading = 'Subheading';
    focusPara1 =
      "I was aksed 'make Forest School happen' at my primary school and despite being way outside my knowledge or comfort zone, I was excited to take on this challenge and so started a four year journey of planning and implenting all aspects of Forest School including Hundreds of pages of risk and benefit assessments.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/>'
    focusPara2 =
      'It was a joy to train and work as a Knot Very Useful helping our children learn a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking. Such a privilege to be able to see them growth and develop and for some children, just find a reason to get up and come to school!';
    
  } else if (focusKey === 4) { // Picture Pad
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/picture-pad-flex-morph/';
    focusHeading = 'Picture Pad Flex Morph';
    focusSubheading = 'Subheading';
    focusPara1 =
      'Following a lifelong passion for making and crafts, I took a degree in Furniture Design and Craftsmanship on the renowned Buckinghamshire New University course in High Wycombe. Following a few years working in professional craft workshops making one-off pieces for clients such as David Linley and Lily Curtis, I spent a decade as a self-employed furniture maker on a range bespoke projects for lovely artists, musicians and other creatives, such as Nigel Godrich, Garth Jennings and Joby Talbot.';
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/>'
    focusPara2 =
      'The urge to create has never left me and spills out into carving, book-binding, small sculptural pieces and into the digital world.';
    
  } else if (focusKey === 5) { // Chitter
    focusPageMessage = 'Hover over any image panel to expand it';
    focusUrl = 'https://chitter-7pam.onrender.com/';
    focusHeading = 'Chitter';
    focusSubheading = 'Subheading';
    focusPara1 =
      'I am naturally curious and have a deep love of learning whether that means learning something new or delving deeper into something current. I have a particular love of learning to do and to create whether it be a physical hands-on craft of software development. It always seems to hold true for me that the deeper you go, the more there is to find';
      focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/>'
    focusPara2 =
      "Curiosity also leads me to places near and far. I love spending time in different places, with different places, being exposed to different cultures, foods and ways of being. I find it bizarrely intriguing to see the different way different cultures behave on the roads but I'm often happiest up a mountain breathing the fresh high-altitude air.";
    
  } else { // IF NO FOCUS KEY FOUND
    console.log('no focusKey found');
    focusPageMessage =
      'Click on the <span class="bold">TO TRAINS</span> icon to go to the main page.';
    focusUrl = 'https://lupo.onrender.com/';
    focusHeading = 'London Underground Phony Orchestra';
    focusSubheading = 'Sonification and visualisation of the London Underground Tube network';
    focusPara1 =
      "<span class='bold'>Description:</span> A generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API. Each tube line is assigned an instrument and each station assigned a different note. This was the final group engineering project on the Makers Software Development bootcamp. The app was designed and coded entirely from scratch as a group collaboration. It was designed and built in eight days by five students.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="35" height="35"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="35" height="35"/>'
    focusPara2 =
      "<span class='bold'>Technologies:</span> The app is primarily built in JavaScript using the React.js library. We relied heavily on tone.js for the audio side of things which was new to all in the group. We also learnt chart.js when we discovered an urgent need to visualise TFL's dubious data. We, of course used Git and GitHub throughout as well as Postman.";
  }
  loadFocusInfo();
}

// FUNCTION - load focus information that was set in setFocusInfo
function loadFocusInfo() {
  document.querySelector('#focus-heading').innerHTML = focusHeading;
  document.querySelector('#focus-subheading').innerHTML = focusSubheading;
  document.querySelector('#focus-para-1').innerHTML = focusPara1;
  document.querySelector('#technologies').innerHTML = focusTechBadges;
  document.querySelector('#focus-para-2').innerHTML = focusPara2;
  document.querySelector('#focus-page-message').innerHTML = focusPageMessage;
  document.querySelector('#focus-page').src = focusUrl; // #focusPage is the id of the iframe
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
    linkHover == 'LUPO'
      ? 0
      : linkHover == 'Farce Book'
      ? 1
      : linkHover == 'Lair BnB'
      ? 2
      : linkHover == 'Knot Very Useful'
      ? 3
      : linkHover == 'Picture Pad'
      ? 4
      : linkHover == 'Chitter'
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
}
