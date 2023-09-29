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

let abtHod = document.querySelector("#abt_hod");
let abtEvents = document.querySelector("#abt_events");
let abtMission = document.querySelector("#abt_mission");
let abtMessage = document.querySelector("#abt_message");
let hodInfo = document.querySelector("#abt_hod_info");
let evInfo = document.querySelector("#abt_events_info");
let missionInfo = document.querySelector("#abt_mission_info");
let messageInfo = document.querySelector("#abt_message_info");
let backImg = document.querySelector(".backimg")
const blob = document.getElementById("blob");

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

abtHod.addEventListener("click", function (e) {
  if (hodInfo.style.display == "none") {
    hodInfo.style.display = "flex";
  } else {
    hodInfo.style.display = "none";
  }
});
abtEvents.addEventListener("click", function (e) {
  if (evInfo.style.display == "none") {
    evInfo.style.display = "flex";
  } else {
    evInfo.style.display = "none";
  }
});
abtMission.addEventListener("click", function (e) {
  if (missionInfo.style.display == "none") {
    missionInfo.style.display = "flex";
  } else {
    missionInfo.style.display = "none";
  }
});
abtMessage.addEventListener("click", function (e) {
  if (messageInfo.style.display == "none") {
    messageInfo.style.display = "flex";
  } else {
    messageInfo.style.display = "none";
  }
});

// events section

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
      "2",
      "",
      "Time : 11:00 AM - 01:00 PM",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.",
      "Tagline: Opening Ceremony"
    );
  }
  if (i == 2) {
    change(
      "DAY 1",
      i,
      2,
      "Workshop",
      "",
      "200",
      "Time : 02:00-04:00 PM",
      `Explore the realm of ethical hacking and cybersecurity in our comprehensive workshop. Gain insights into tools, ethical principles, and responsible hacking practices. In today's digital world, ethical hackers play a vital role in safeguarding systems. Join us for an interactive experience, fostering cybersecurity awareness, whether you aspire to a cybersecurity career or seek knowledge
    `,
      "Tagline: ethical hacking workshop"
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
}

function change(e, i, n, a, b, c, d, f, g) {
  day.innerHTML = e;
  counter.innerHTML = `${i}/${n}`;
  ename.innerHTML = a;
  btxt1.innerHTML = b;
  btxt2.innerHTML = c;
  stxt3.innerHTML = d;
  desc.innerHTML = f;
  tagline.innerHTML = g;
  
}

day1.addEventListener("click", function (e) {
  var i = 1;
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
        "Tagline: Opening Ceremony"
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
        `Dive into Ethical Hacking & Cybersecurity: Discover tools, ethics, and responsible practices. Essential in our digital world, join us for interactive learning, whether you aim for a career or knowledge.
    `,
        "Tagline: ethical hacking workshop"
      );
      i = 0;
    }
  });
});

day2.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Digital Key Quest";
  btxt3.innerHTML = "04/10/23";
  tagline.innerHTML = "Tagline: Digital key quest";
  desc.innerHTML =
    " Treasure hunt:  Digital Key Quest is a treasure hunt event where you decipher clues, solve puzzles, and unlock digital keys to hidden treasure";
  console.log(e.target.textContent);

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
        "Tagline: Digital key quest"
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
        "Tagline: DRDO workshop"
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
        "Unlock the world of Capture the Flag (CTF) in our seminar. Dive into thrilling challenges, puzzles, and cybersecurity insights. Discover why CTF is vital in the digital era. Join us!",
        "Tagline: CTF how is that event and why? "
      );
      i = 0;
    }
  });
});

day3.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "MUN Security Council";
  btxt3.innerHTML = "05/10/23";
  tagline.innerHTML = "Tagline: MUN";
  desc.innerHTML =
    "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.";

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
        "Tagline: MUN"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        2,
        "Open Mic",
        "",
        "Time : 04:30 - 06:30 PM",
        "Embrace OPEN MIC: A celebration of creativity and diverse voices through spoken word, music, comedy, and more. Perform or witness, it's your stage for self-expression. Join our vibrant, inclusive community!",
        "Tagline: OPEN MIC"
      );
      i = 0;
    }
  });
});

day4.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Imposter Hunt";
  btxt3.innerHTML = "06/10/23";
  tagline.innerHTML = "Tagline: Imposter Among Us - Hunt or BeHunted!";
  desc.innerHTML =
    "Step into the immersive realm of Among Us brought to life. Uncover imposters, gather clues, and survive the thrilling fusion of trust and deception in this real-world gaming experience.";

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
        "100",
        "Time : 08:00 AM - 12:00 PM",
        "Imposter Hunt: Among Us in Real Life – a groundbreaking, never-before-seen experience Real-life Among Us event where you gather clues, uncover imposters, and work as a team to survive.",
        "Tagline: Imposter Among Us - Hunt or BeHunted!"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        "Catch The Flag",
        "1",
        "100",
        "Time : 02:00 - 05:00 PM",
        "Immersive cybersecurity competition testing your skills and knowledge, with heart-pounding scenarios and insights from top experts. ",
        "Tagline: Catch the flag and be a hero"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Closing Ceremony",
        "",
        "",
        "Time : 05:00 - 06:30 PM",
        "lorem ipsum dolor sit amet, consectetur adipiscing lorem, sed diam nonumy lore lore lorem.",
        "Tagline: Closing ceremony"
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
