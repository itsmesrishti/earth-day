// FOR HEADER SECTION
// (had to wrap each letter in a span tag so that they can be styled individually)
var h1Content = document.querySelector("h1");
var h1ContentArr = h1Content.innerHTML.split(" ");
h1Content.innerHTML = "";

var firstT = false;

h1ContentArr.forEach((element) => {
  for (i = 0; i < element.length; i++) {
    var html = "";

    if (element == "Earth") {
      html = "<span class='earth'>" + element[i] + "</span>";
      if (element[i] == "h") {
        html = "<a class='earth link-char'>" + element[i] + "</a>";
      }
    } else if (
      element[i] == "W" ||
      element[i] == "i" ||
      element[i] == "D" ||
      element[i] == "!" ||
      (element[i] == "t" && !firstT)
    ) {
      if (element[i] == "t") {
        firstT = true;
      }
      html = "<a class='link-char'>" + element[i] + "</a>";
    } else {
      html = "<span>" + element[i] + "</span>";
    }

    h1Content.innerHTML += html;
  }

  h1Content.innerHTML += " ";
});

// to help users
document
  .querySelector("header")
  .insertAdjacentHTML(
    "afterbegin",
    "<div class='h-strip'>Links to sections are hidden in this text. Find and visit them all to freely move the webpage!</div>"
  );

// to gamify header content and make it more interactive
// grab all the sections
const heroSec = document.querySelector("header");
const factsSec = document.querySelector(".facts");
const whySec = document.querySelectorAll("article")[1];
const helpSec = document.querySelectorAll("article")[2];
const actionSec = document.querySelector(".action-call");
const inspoSec = document.querySelector(".testimonial");
const eventSec = document.querySelector(".events");

const sectionArr = [factsSec, whySec, helpSec, actionSec, inspoSec, eventSec];

// add ids to each section
factsSec.setAttribute("id", "facts");
whySec.setAttribute("id", "why-sec");
helpSec.setAttribute("id", "help-sec");
actionSec.setAttribute("id", "action-sec");
inspoSec.setAttribute("id", "inspo-sec");
eventSec.setAttribute("id", "event-sec");
heroSec.setAttribute("id", "home");

// add home link to different sections
// (so that user can go to top from each section)

document.body.insertAdjacentHTML(
  "beforeend",
  "<a class='home-link' href='#home'>Home</a>"
);

// grab all the letters in h1 that will be used to navigate to diff sections
const linkChars = h1Content.getElementsByClassName("link-char");

linkChars[3].setAttribute("href", "#facts");
linkChars[0].setAttribute("href", "#why-sec");
linkChars[2].setAttribute("href", "#help-sec");
linkChars[1].setAttribute("href", "#action-sec");
linkChars[4].setAttribute("href", "#inspo-sec");
linkChars[5].setAttribute("href", "#event-sec");

// so that we can track which sections have been visited
var factsVisited,
  whyVisited,
  helpVisited,
  actionVisited,
  inspoVisited,
  eventVisited,
  allLinksVisited = false;

for (i = 0; i < linkChars.length; i++) {
  linkChars[i].addEventListener("click", function () {
    this.classList.add("visited-link");
    if (this.innerHTML == "D") {
      factsVisited = true;
    } else if (this.innerHTML == "W") {
      whyVisited = true;
    } else if (this.innerHTML == "h") {
      helpVisited = true;
    } else if (this.innerHTML == "t") {
      actionVisited = true;
    } else if (this.innerHTML == "i") {
      inspoVisited = true;
    } else {
      eventVisited = true;
    }

    if (
      factsVisited &&
      whyVisited &&
      helpVisited &&
      actionVisited &&
      inspoVisited &&
      eventVisited == true
    ) {
      document.body.style.overflowY = "scroll";
      document.getElementsByClassName("h-strip")[0].style.display = "none";
    }
  });
}

// FOR BETTER RESPONSIVENESS WRAPPING SECTIONS CONTAINING MORE THAN ONE CONTENT ELEMENT IN A DIV
// how we can help
helpSec.querySelector("p").remove();
helpSec.querySelector("ul").remove();

helpSec.insertAdjacentHTML(
  "beforeend",
  `<div>
<p>Join us in making a difference! Here are some ways you can contribute to preserving our planet:</p>
<ul>
  <li>Reduce, reuse, and recycle.</li>
  <li>Volunteer for cleanups in your community.</li>
  <li>Conserve water and electricity.</li>
  <li>Plant a tree.</li>
  <li>Educate others about environmental conservation.</li>
</ul>
</div>`
);

// action call sec
actionSec.querySelector("p").remove();
actionSec.querySelector("a").remove();

actionSec.insertAdjacentHTML(
  "beforeend",
  `<div>
<p>
Join our Earth Day quiz to test your knowledge and learn more about
what you can do to help our planet!
</p>
<a href="#">Start the Quiz!</a>
</div>`
);

// testimonial sec
inspoSec.querySelector("p").remove();
inspoSec.querySelector("p").remove();

inspoSec.insertAdjacentHTML(
  "beforeend",
  `<div>
<p class='quote'>The Earth does not belong to us: we belong to the Earth.<span>- Marlee Matlin</span></p>
<p>
This Earth Day, let's remember we are part of a larger ecosystem and our
actions have a profound impact on our planet.
</p>
</div>`
);

// TO ADD AN IMAGE AROUND WHICH TEXT CAN ROTATE TO EACH SECTION
sectionArr.forEach((e) => {
  e.insertAdjacentHTML(
    "beforeend",
    "<img src='/earth.png' class='earth-img' alt='image of Earth from space' />"
  );
});

// CIRCULAR TEXT
const h2Elements = document.getElementsByTagName("h2");
const h2TextAll = [];

// so that we can loop through each h2 word and
// keep h2 words belonging to same section together
for (i = 0; i < h2Elements.length; i++) {
  h2TextAll.push(h2Elements[i].innerHTML.split(" "));
}

// wrap each letter of h2 with in a <span> and add 'circle' class to it
for (i = 0; i < h2TextAll.length; i++) {
  h2Elements[i].innerHTML = "";
  var html = "";

  h2TextAll[i].forEach((e) => {
    for (j = 0; j < e.length; j++) {
      html = "<span class='circle'>" + e[j] + "</span>";
      h2Elements[i].innerHTML += html;
    }
    h2Elements[i].innerHTML += "<span> </span>";
  });
}

// grab span element of each section's <h2>
const firstSec = factsSec.querySelectorAll("span");
const secondSec = whySec.querySelectorAll("span");
const thirdSec = helpSec.querySelectorAll("span");
const fourthSec = actionSec.querySelectorAll("span");
const fifthSec = inspoSec.querySelectorAll("span");
const sixthSec = eventSec.querySelectorAll("span");

const h2SpanArr = [
  firstSec,
  secondSec,
  thirdSec,
  fourthSec,
  fifthSec,
  sixthSec,
];

h2SpanArr.forEach((e) => {
  if (e == h2SpanArr[1] || e == h2SpanArr[4]) {
    // for these sections text is too long so the angle span is wider and
    // thus the start position is more to the left
    var startPos = -120;
    var angleSpan = 270;
  } else {
    var startPos = -80;
    var angleSpan = 180;
  }

  // for each h2 present in the array loop through it and
  // apply transform: rotate() to each letter of h2
  for (i = 0; i < e.length; i++) {
    // to determine angle of each letter
    var charDeg = angleSpan / e.length;
    e[i].style.transform = "rotate(" + (startPos + i * charDeg) + "deg)";

    // to remove rotate property set on span tag that wraps -Marlee Matlin
    if (h2SpanArr[4] == e) {
      if (i == e.length - 1) {
        e[i].style.transform = "rotate(0deg)";
      }
    }
  }
});

//ACCESSIBILITY
linkChars[3].setAttribute("aria-describedby", "navigate to facts");
linkChars[0].setAttribute("aria-describedby", "navigate to why-sec");
linkChars[2].setAttribute("aria-describedby", "navigate to help-sec");
linkChars[1].setAttribute("aria-describedby", "navigate to action-sec");
linkChars[4].setAttribute("aria-describedby", "navigate to inspo-sec");
linkChars[5].setAttribute("aria-describedby", "navigate to event-sec");

// div to show msg that mobile version not available
document.body.insertAdjacentHTML(
  "beforeend",
  "<div class='mob'>This project doesn't have a mobile version!</div>"
);

document.head.insertAdjacentHTML("beforeend", 
`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Londrina+Solid:wght@100;300;400;900&family=Rubik+Moonrocks&display=swap"
  rel="stylesheet"
/>`)
