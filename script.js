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

  if (focusKey === 0) {
    console.log('lupo');
    focusPageMessage =
      'Click on the <span class="bold">TO TRAINS</span> icon to go to the main page.';
    focusUrl = 'https://lupo.onrender.com/';
    focusHeading = 'London Underground Phony Orchestra';
    focusSubheading = 'Sonification and visualisation of the London Underground Tube network';
    focusPara1 =
      "<span class='bold'>Description:</span> A generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API. Each tube line is assigned an instrument and each station assigned a different note. This was the final group engineering project on the Makers Software Development bootcamp. The app was designed and coded entirely from scratch as a group collaboration. It was designed and built in eight days by five students.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/>'
    focusPara2 =
      "<span class='bold'>Technologies:</span> The app is primarily built in JavaScript using the React.js library. We relied heavily on tone.js for the audio side of things which was new to all in the group. We also learnt chart.js when we discovered an urgent need to visualise TFL's dubious data. We, of course used Git and GitHub throughout as well as Postman.";
  } else if (focusKey === 1) {
    focusPageMessage =
      'Pan around the 360 degree view of March Wood including right up to the sky and down to the ground. This image was taken when March Wood was just a couple of years old.';
    focusUrl = 'https://pablisch.github.io/MarchWood/';
    focusHeading = 'Forest Creator';
    focusSubheading = 'Subheading';
    focusPara1 =
      'The greatest barrier to setting up Forest School at my primary school was the profound lack of trees so I planted a brand new baby woodland that become known as March Wood. There was no end of challenges including funds and resources, Immovable deadlines, the reality of how long natures take to grow what you want as well as how quickly it grows what you definitely do not want, and helping saplings survive the long, hot summer holidays when the school is closed.';
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      'It took passion, dedication and resilience, especially in the midst of the pandemic lockdowns, but March Wood has thrived, tiny saplings now tower over me and we have an amazing outdoor classroom for all the school to enjoy, not to mention and incredible legacy woodland.';
  } else if (focusKey === 2) {
    focusPageMessage =
      'The robots we used were designed, built and programmed by the children that drove them.';
    focusUrl = 'https://www.youtube.com/embed/CG7WkIYNqQA?rel=0&autoplay=1';
    focusHeading = 'Primary STEM and Computing Lead';
    focusSubheading = 'Subheading';
    focusPara1 =
      "I have been incredibly lucky to have had such a varied teaching career full of amazing projects and opportunities. I was tasked to create a STEM makers workshop for a Tottenham primary school and my first job was to design a series of 'WOW' projects to inspire the children and get them excited about STEM. We had huge amounts of fun and learning with water bottle rockets, effervescent cannons, wind-powered cars and balloon-popping robot wars.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      'Over the next couple of years we hosted multi-school STEM events and won every STEM competition and award that we enetered.';
  } else if (focusKey === 3) {
    focusPageMessage = 'Hover over a knot panel of navbar link to see details. Click on either to see a video of that knot or hitch.';
    focusUrl = 'https://pablisch.github.io/knot-very-useful/';
    focusHeading = 'Knot Very Useful';
    focusSubheading = 'Subheading';
    focusPara1 =
      "I was aksed 'make Forest School happen' at my primary school and despite being way outside my knowledge or comfort zone, I was excited to take on this challenge and so started a four year journey of planning and implenting all aspects of Forest School including Hundreds of pages of risk and benefit assessments.";
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      'It was a joy to train and work as a Knot Very Useful helping our children learn a huge range of activities and skills chosen by them from bug hunts to tree planting, and knife whittling to fire lighting and campfire cooking. Such a privilege to be able to see them growth and develop and for some children, just find a reason to get up and come to school!';
  } else if (focusKey === 4) {
    focusPageMessage = 'Click on compressed image panels to expand them';
    focusUrl = 'https://pablisch.github.io/picture-pad-flex-morph/';
    focusHeading = 'Picture Pad Flex Morph';
    focusSubheading = 'Subheading';
    focusPara1 =
      'Following a lifelong passion for making and crafts, I took a degree in Furniture Design and Craftsmanship on the renowned Buckinghamshire New University course in High Wycombe. Following a few years working in professional craft workshops making one-off pieces for clients such as David Linley and Lily Curtis, I spent a decade as a self-employed furniture maker on a range bespoke projects for lovely artists, musicians and other creatives, such as Nigel Godrich, Garth Jennings and Joby Talbot.';
    focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      'The urge to create has never left me and spills out into carving, book-binding, small sculptural pieces and into the digital world.';
  } else if (focusKey === 5) {
    focusPageMessage = 'Hover over any image panel to expand it';
    focusUrl = 'https://pablisch.github.io/travel-images-picture-pad/';
    focusHeading = 'Chitter';
    focusSubheading = 'Subheading';
    focusPara1 =
      'I am naturally curious and have a deep love of learning whether that means learning something new or delving deeper into something current. I have a particular love of learning to do and to create whether it be a physical hands-on craft of software development. It always seems to hold true for me that the deeper you go, the more there is to find';
      focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      "Curiosity also leads me to places near and far. I love spending time in different places, with different places, being exposed to different cultures, foods and ways of being. I find it bizarrely intriguing to see the different way different cultures behave on the roads but I'm often happiest up a mountain breathing the fresh high-altitude air.";
  } else {
    console.log('no focusKey found');
    focusPageMessage = 'Hover over any image panel to expand it';
    focusUrl = 'https://pablisch.github.io/travel-images-picture-pad/';
    focusHeading = 'Lifelong Learning & Curiosity';
    focusSubheading = 'Subheading';
    focusPara1 =
      'I am naturally curious and have a deep love of learning whether that means learning something new or delving deeper into something current. I have a particular love of learning to do and to create whether it be a physical hands-on craft of software development. It always seems to hold true for me that the deeper you go, the more there is to find';
      focusTechBadges = '<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>'
    focusPara2 =
      "Curiosity also leads me to places near and far. I love spending time in different places, with different places, being exposed to different cultures, foods and ways of being. I find it bizarrely intriguing to see the different way different cultures behave on the roads but I'm often happiest up a mountain breathing the fresh high-altitude air.";
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
  console.log(index);
  activePanel(index);
}

// FUNCTION - get array index from link target
function indexfromLink(linkHover) {
  let index =
    linkHover == 'LUPO'
      ? 0
      : linkHover == 'FarceBook'
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
