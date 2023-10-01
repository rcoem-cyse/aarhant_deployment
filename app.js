const scroll = new LocomotiveScroll({
  el: document.querySelector(".main_container"),
  smooth: true,
});

let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let day = document.querySelector("#day");
let counter = document.querySelector("#counter");
let ename = document.querySelector("#ename");
let enamediv = document.querySelector(".ename");
let nxtbtn = document.querySelector("#nxtbtn");
let btxt1 = document.querySelector("#btxt1");
let btxt2 = document.querySelector("#btxt2");
let btxt3 = document.querySelector("#btxt3");

let stxt3 = document.querySelector("#stxt3");
let desc = document.querySelector("#desc");
let tagline = document.querySelector("#tagline");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

//text effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".ar2").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
};

// about section

let abtHod = document.querySelector("#abt_hod");
let abtEvents = document.querySelector("#abt_events");
let abtMission = document.querySelector("#abt_mission");
let abtMessage = document.querySelector("#abt_message");
let hodInfo = document.querySelector("#abt_hod_info");
let evInfo = document.querySelector("#abt_events_info");
let missionInfo = document.querySelector("#abt_mission_info");
let messageInfo = document.querySelector("#abt_message_info");
let backImg = document.querySelector(".backimg");
const blob = document.getElementById("blob");
let abtSmallInfo = document.getElementsByClassName(".abt_small_info");
let messImg = document.querySelector("#messimg");

var display = 0;
var d2 = 0;
var d3 = 0;
var d4 = 0;
function hide(display, d2) {
  if (display == 0) {
    hodInfo.style.display = "none";
  }
  if (d2 == 0) {
    evInfo.style.display = "none";
  }
  if (d3 == 0) {
    missionInfo.style.display = "none";
  }
  if (d4 == 0) {
    messageInfo.style.display = "none";
  }
}

function hodShow() {
  if (display == 0) {
    hodInfo.style.display = "flex";

    d2 = 0;
    d3 = 0;
    d4 = 0;
    // if (d2 == 0) {
    //   evInfo.style.display = "none";
    //   console.log("d2 = 0");
    // }

    display = 1;
    hide(display, d2, d3, d4);
  } else {
    hodInfo.style.display = "none";
    display = 0;
  }
}

function evShow() {
  if (d2 == 0) {
    evInfo.style.display = "flex";
    display = 0;
    d3 = 0;
    d4 = 0;
    d2 = 1;
    hide(display, d2, d3, d4);
  } else {
    evInfo.style.display = "none";
    d2 = 0;
  }
}

function missionShow() {
  if (d3 == 0) {
    missionInfo.style.display = "flex";
    display = 0;
    d2 = 0;
    d4 = 0;
    d3 = 1;
    hide(display, d2, d3, d4);
  } else {
    missionInfo.style.display = "none";
    d3 = 0;
  }
}

function messageShow() {
  if (d4 == 0) {
    messageInfo.style.display = "flex";
    display = 0;
    d2 = 0;
    d3 = 0;
    d4 = 1;
    hide(display, d2, d3, d4);
  } else {
    messageInfo.style.display = "none";
    d4 = 0;
  }
}

// events section
day1.style.color = "#1f99d1";
day2.style.color = "white";
day3.style.color = "white";
day4.style.color = "white";
day5.style.color = "white";
var i = 0;
nxtbtn.addEventListener("click", function (e) {
  console.log(i);
  i++;
  if (i == 1) {
    change(
      "DAY 1",
      1,
      1,
      "Digital forensics",
      "Solo",
      "79",
      "Time : 02:00 - 04:00 PM",
      "DRDO Workshop is an exclusive event for future innovators, offering insights into cutting-edge projects, groundbreaking research, and dynamic tech careers.",
      "Tagline: DRDO workshop",
      "url('image 17.png')"
    );
    i = 0;
  }
  console.log(i);
});

function dayy2(e) {
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Opening Ceremony";
  btxt3.innerHTML = "04/10/23";
  tagline.innerHTML = "Tagline: Opening Ceremony";
  desc.innerHTML =
    "We invite you to AARHANT, central India's biggest dynamic cybersecurity awareness event designed to equip young college students with the knowledge and skills needed to navigate the digital landscape";

  enamediv.style.backgroundImage = "url('image 17.png')";
}

function change(e, i, n, a, b, c, d, f, g, h) {
  day.innerHTML = e;
  counter.innerHTML = `${i}/${n}`;
  ename.innerHTML = a;
  btxt1.innerHTML = b;
  btxt2.innerHTML = c;
  stxt3.innerHTML = d;
  desc.innerHTML = f;
  tagline.innerHTML = g;
  enamediv.style.backgroundImage = h;
}

day1.addEventListener("click", function (e) {
  var i = 0;
  day1.style.color = "#1f99d1";
  day2.style.color = "white";
  day3.style.color = "white";
  day4.style.color = "white";
  day5.style.color = "white";
  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/1";
  ename.innerHTML = "Digital forensics ";
  btxt3.innerHTML = "03/10/23";
  tagline.innerHTML = "Tagline: Digital key quest";
  desc.innerHTML =
    "Embark on a thrilling journey with our Cyber Crime Prevention and Cyber Law Workshop! Explore digital intrigue, master cyber threat prevention, and navigate internet legality. Equip yourself for the digital age!";
  console.log(e.target.textContent);
  enamediv.style.backgroundImage = "url('image 17.png')";

  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        1,
        1,
        "Digital forensics ",
        "Solo",
        "79",
        "Time : 02:00 - 04:00 PM",
        "Embark on a thrilling journey with our Cyber Crime Prevention and Cyber Law Workshop! Explore digital intrigue, master cyber threat prevention, and navigate internet legality. Equip yourself for the digital age!",
        "Tagline: DRDO workshop",
        "url('image 17.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        1,
        1,
        "Digital forensics ",
        "Solo",
        "79",
        "Time : 02:00 - 04:00 PM",
        "Embark on a thrilling journey with our Cyber Crime Prevention and Cyber Law Workshop! Explore digital intrigue, master cyber threat prevention, and navigate internet legality. Equip yourself for the digital age!",
        "Tagline: DRDO workshop",
        "url('image 17.png')"
      );
      i = 0;
      console.log(i);
    }
  });
});

day2.addEventListener("click", function (e) {
  var i = 1;
  day1.style.color = "white";
  day2.style.color = "#1f99d1";
  day3.style.color = "white";
  day4.style.color = "white";
  day5.style.color = "white";
  console.log("hello");
  dayy2(e);
  console.log(e.target);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        3,
        "Opening Ceremony",
        "Solo",
        "Free",
        "Time : 11:00 AM - 01:00 PM",

        "We invite you to AARHANT, central India's biggest dynamic cybersecurity awareness event designed to equip young college students with the knowledge and skills needed to navigate the digital landscape",

        "Tagline: Opening Ceremony",
        "url('image 17.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        "Workshop",
        "Solo",
        "79",
        "Time : 02:00-04:00 PM",
        `ethical hacking workshop for students , pros and cons , various tools and awareness 
    Learn ethical hacking and cybersecurity in this workshop, covering tools, pros, cons, and cybersecurity awareness.
    `,
        "Tagline: ethical hacking workshop",
        "url('src/image 675.png')"
      );
    }

    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Seminar(CTF)",
        "Solo",
        "Free",
        "Time : 04:00 - 05:00 PM ",
        "Explore Capture the Flag (CTF) in our seminar. Uncover its challenges, puzzles, and cybersecurity scenarios. Learn why it's popular and skill-enhancing. Join us!",
        "Tagline: CTF how is that event and why? ",
        "url('src/CTF SEMINAR.png')"
      );
      i = 0;
    }
  });
});

day3.addEventListener("click", function (e) {
  var i = 1;
  day1.style.color = "white";
  day2.style.color = "white";
  day3.style.color = "#1f99d1";
  day4.style.color = "white";
  day5.style.color = "white";
  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Digital Key Quest";
  btxt3.innerHTML = "05/10/23";
  tagline.innerHTML = "Tagline: Digital key quest";
  desc.innerHTML =
    " Treasure hunt:  Digital Key Quest is a treasure hunt event where you decipher clues, solve puzzles, and unlock digital keys to hidden treasure";
  console.log(e.target.textContent);
  enamediv.style.backgroundImage = "url('src/DIGITAL KEY QUEST.png')";

  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        3,
        "Digital Key Quest",
        "4",
        "150",
        "Time : 08:00 AM - 01:00 PM",
        " Treasure hunt  Digital Key Quest is a treasure hunt event where you decipher clues, solve puzzles, and unlock digital keys to hidden treasure",
        "Tagline: Digital key quest",
        "url('src/DIGITAL KEY QUEST.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        " Cyber Law",
        "Solo",
        "Free",
        "Time : 02:00 - 04:00 PM ",
        "Explore Capture the Flag (CTF) in our seminar. Uncover its challenges, puzzles, and cybersecurity scenarios. Learn why it's popular and skill-enhancing. Join us!",
        "Tagline: Workshop Cyber crime prevention and cyber law, solo ",
        "url('src/CTF SEMINAR.png')"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Workshop",
        "Solo",
        "50",
        "Time : 04:00 - 06:00 PM",
        "DRDO Workshop is an exclusive event for future innovators, offering insights into cutting-edge projects, groundbreaking research, and dynamic tech careers.",
        "Tagline: DRDO workshop",
        "url('src/DRDO.png')"
      );
      i = 0;
    }
  });
});

day4.addEventListener("click", function (e) {
  var i = 1;
  day1.style.color = "white";
  day2.style.color = "white";
  day3.style.color = "white";
  day4.style.color = "#1f99d1";
  day5.style.color = "white";

  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "MUN Security Council";
  btxt3.innerHTML = "06/10/23";
  tagline.innerHTML = "Tagline: MUN";
  desc.innerHTML =
    "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.";
  enamediv.style.backgroundImage = "url('src/MUN.png')";

  console.log(e.target.textContent);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        2,
        "MUN Security Council",
        "2",
        "350",
        "Time :10:00 AM - 04:00 PM",
        "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.",
        "Tagline: MUN",
        "url('src/MUN.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        2,
        "Open Mic",
        "Solo",
        "Free",
        "Time : 04:30 - 06:30 PM",

        "Welcome to OPEN MIC, where we celebrate unbridled creativity and amplify diverse voices.Join us for an unforgettable, electrifying experience. Don't miss out on this opportunity to be part of our vibrant and inclusive community!",

        "Tagline: OPEN MIC",
        "url('src/Open mic.png')"
      );
      i = 0;
    }
  });
});

day5.addEventListener("click", function (e) {
  var i = 1;
  day1.style.color = "white";
  day2.style.color = "white";
  day3.style.color = "white";
  day4.style.color = "white";
  day5.style.color = "#1f99d1";

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Imposter Hunt";
  btxt3.innerHTML = "07/10/23";
  tagline.innerHTML = "Tagline: Imposter Among Us - Hunt or BeHunted!";
  desc.innerHTML =
    "Imposter Hunt: Among Us in Real Life – a groundbreaking, never-before-seen experience Real-life Among Us event where you gather clues, uncover imposters, and work as a team to survive.";
  enamediv.style.backgroundImage = "url('src/IMPOSTER HUNT.png')";

  console.log(e.target.textContent);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        3,
        "Imposter Hunt",
        "4",
        "200",
        "Time : 08:00 AM - 12:00 PM",
        "Imposter Hunt: Among Us in Real Life – a groundbreaking, never-before-seen experience Real-life Among Us event where you gather clues, uncover imposters, and work as a team to survive.",
        "Tagline: Imposter Among Us - Hunt or BeHunted!",
        "url('src/IMPOSTER HUNT.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        "Catch The Flag",
        "Solo",
        "100",
        "Time : 02:00 - 05:00 PM",
        "Immersive cybersecurity competition testing your skills and knowledge, with heart-pounding scenarios and insights from top experts.        ",
        "Tagline: Catch the flag and be a hero",
        "url('src/CTF.png')"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Closing Ceremony",
        "Solo",
        "Free",
        "Time : 05:00 - 06:30 PM",

        "Join us at the closing ceremony of Aarhant2.0!",

        "Tagline: Closing ceremony",
        "url('src/image 675.png')"
      );
      i = 0;
    }
  });
});

// mouse Animation
window.addEventListener("mousemove", function (e) {
  var to_append = document.getElementsByClassName("loader-container")[0];
  var all = document.getElementsByClassName("loader-container");

  var parent_div = document.createElement("div");
  parent_div.className = "loader-container";
  var inner_div = document.createElement("div");
  inner_div.className = "loader";
  parent_div.appendChild(inner_div);
  var d = document.body.appendChild(parent_div);

  parent_div.style.left = e.clientX - 50 + "px";
  parent_div.style.top = e.clientY - 50 + "px";

  if (document.getElementsByClassName("loader-container").length > 50) {
    document.body.removeChild(to_append);
  }
});

let ta = gsap.timeline();

ta.from("nav", {
  opacity: 0,
  y: -50,

  duration: 0.8,
});

ta.from(".head_intro h2, .head_intro h3, .head_intro h1", {
  opacity: 0,
  duration: 0.5,
  x: -50,
  stagger: 0.3,
});

ta.from(".head_tagline h1, .head_tagline p", {
  opacity: 0,
  duration: 0.7,
  x: 50,
  stagger: 0.3,
});

ta.from(".explrbtn , .laptopimg ,.lapimgs", {
  opacity: 0,
  duration: 0.4,
  y: 30,
  stagger: 0.2,
});
