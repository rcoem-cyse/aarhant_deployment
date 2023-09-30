const scroll = new LocomotiveScroll({
  el: document.querySelector(".main_container"),
  smooth: true,
});

let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
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
var i = 1;
nxtbtn.addEventListener("click", function (e) {
  console.log(i);
  i++;
  if (i == 1) {
    change(
      "DAY 1",
      i,
      2,
      "Opening Ceremony",
      "2M",
      "200",
      "Time : 11:00 AM - 01:00 PM",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.",
      "Tagline: Opening Ceremony",
      "url('image 17.png')"
    );
  }
  if (i == 2) {
    change(
      "DAY 1",
      i,
      2,
      "Workshop",
      "2M",
      "200",
      "Time : 02:00-04:00 PM",
      `ethical hacking workshop for students , pros and cons , various tools and awareness 
    Learn ethical hacking and cybersecurity in this workshop, covering tools, pros, cons, and cybersecurity awareness.
    `,
      "Tagline: ethical hacking workshop",
      "url('src/image 675.png')"
    );
    i = 0;
  }
});

function dayy1(e) {
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "Opening Ceremony";
  btxt3.innerHTML = "03/10/23";
  tagline.innerHTML = "Tagline: Opening Ceremony";
  desc.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.";
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
  var i = 1;
  day1.style.color = "#1f99d1";
  day2.style.color = "white";
  day3.style.color = "white";
  day4.style.color = "white";
  console.log("hello");
  dayy1(e);
  console.log(e.target);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        2,
        "Opening Ceremony",
        "2M",
        "200",
        "Time : 11:00 AM - 01:00 PM",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.",
        "Tagline: Opening Ceremony",
        "url('image 17.png')"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        2,
        "Workshop",
        "2M",
        "200",
        "Time : 02:00-04:00 PM",
        `ethical hacking workshop for students , pros and cons , various tools and awareness 
    Learn ethical hacking and cybersecurity in this workshop, covering tools, pros, cons, and cybersecurity awareness.
    `,
        "Tagline: ethical hacking workshop",
        "url('src/image 675.png')"
      );
      i = 0;
    }
  });
});

day2.addEventListener("click", function (e) {
  var i = 1;
  day1.style.color = "white";
  day2.style.color = "#1f99d1";
  day3.style.color = "white";
  day4.style.color = "white";
  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Digital Key Quest";
  btxt3.innerHTML = "04/10/23";
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
        "2M",
        "200",
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
        "Workshop",
        "2M",
        "200",
        "Time : 02:00 - 04:00 PM",
        "DRDO Workshop is an exclusive event for future innovators, offering insights into cutting-edge projects, groundbreaking research, and dynamic tech careers.",
        "Tagline: DRDO workshop",
        "url('src/DRDO.png')"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Seminar(CTF)",
        "2M",
        "200",
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

  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "MUN Security Council";
  btxt3.innerHTML = "05/10/23";
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
        "2M",
        "200",
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
        "2M",
        "200",
        "Time : 04:30 - 06:30 PM",
        "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.",
        "Tagline: OPEN MIC",
        "url('src/Open mic.png')"
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

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Imposter Hunt";
  btxt3.innerHTML = "06/10/23";
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
        "2M",
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
        "2M",
        "200",
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
        "2M",
        "200",
        "Time : 05:00 - 06:30 PM",
        "lorem ipsum dolor sit amet, consectetur adipiscing lorem, sed diam nonumy lore lore lorem.",
        "Tagline: Closing ceremony",
        "url('src/image 675.png')"
      );
      i = 0;
    }
  });
});

let aboutInDynamic = document.querySelector(".abt_info_in_cont1");

let h1 = document.createElement("h1");

h1.innerHTML = "60+";

aboutInDynamic.appendChild(h1);

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
