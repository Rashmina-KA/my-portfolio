const $ = s => document.querySelector(s);

const $$ = s => [...document.querySelectorAll(s)];


/* =========================================================
   SKILLS DATA
========================================================= */

const skillData = {

  engineering: {

    title: "Data Engineering",

    text:
      "Building practical data workflows from raw data to reliable storage and analysis.",

    items: [

      ["Python / Pandas", "ETL, transformation & validation"],

      ["SQL / PostgreSQL", "Queries, analysis & relational data"],

      ["SQLite", "Lightweight analytical databases"],

      ["Apache Kafka", "Streaming data workflows"],

      ["ETL Pipelines", "Extract → transform → load"],

      ["Data Quality", "Cleaning, validation & integrity"]

    ]

  },


  analytics: {

    title: "Data Analytics",

    text:
      "Turning datasets into measurable insights, dashboards and business recommendations.",

    items: [

      ["Python / Pandas", "Data cleaning & exploratory analysis"],

      ["SQL", "Business queries & KPI analysis"],

      ["Power BI / DAX", "Interactive dashboards & measures"],

      ["Grafana", "Monitoring & visualization"],

      ["KPI Development", "Metrics & performance analysis"],

      ["Business Insights", "Turning findings into recommendations"]

    ]

  },


  cloud: {

    title: "Cloud & DevOps",

    text:
      "Hands-on AWS experience with a growing foundation in Azure and cloud-based workflows.",

    items: [

      ["AWS EC2", "Ubuntu, SSH & Apache"],

      ["AWS S3", "Storage & static website hosting"],

      ["AWS Lambda", "Python serverless functions"],

      ["DynamoDB", "NoSQL data storage"],

      ["CloudWatch", "Logs & monitoring"],

      ["Docker / Git", "Containers & version control"]

    ]

  },


  tools: {

    title: "Tools & Technologies",

    text:
      "Development and collaboration tools used across my academic, internship and portfolio projects.",

    items: [

      ["Git / GitHub", "Version control & collaboration"],

      ["Docker Compose", "Multi-service development"],

      ["Postman", "REST API testing"],

      ["Linux", "Command line & server fundamentals"],

      ["VS Code", "Development environment"],

      ["Microsoft Azure", "Cloud fundamentals"]

    ]

  }

};



/* =========================================================
   RENDER SKILLS
========================================================= */

function renderSkills(key) {

  const d = skillData[key];

  if (!d) return;


  $("#skillContent").innerHTML = `

    <div class="skill-content">


      <div>

        <h3>
          ${d.title}
        </h3>


        <p>
          ${d.text}
        </p>

      </div>


      <div class="skill-list">


        ${d.items.map(item => `

          <div class="skill-pill">

            <b>
              ${item[0]}
            </b>

            <span>
              ${item[1]}
            </span>

          </div>

        `).join("")}


      </div>


    </div>

  `;

}


/* Default skill */

renderSkills("engineering");



/* =========================================================
   SKILL SWITCHER
========================================================= */

$$(".skill-button").forEach(button => {

  button.addEventListener("click", () => {


    $$(".skill-button").forEach(btn => {

      btn.classList.remove("active");

    });


    button.classList.add("active");


    renderSkills(
      button.dataset.skill
    );

  });

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menu = $("#menu");

const nav = $("#nav");


if (menu && nav) {

  menu.addEventListener("click", () => {


    const open =
      nav.classList.toggle("open");


    menu.setAttribute(
      "aria-expanded",
      open
    );

  });


  $$("nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {


        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );


          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


$$(".reveal").forEach(element => {

  observer.observe(element);

});



/* =========================================================
   SCROLL PROGRESS + ACTIVE NAV
========================================================= */

const progress = $("#progress");


function scrollUI() {


  const max =
    document.documentElement.scrollHeight -
    innerHeight;


  if (progress) {

    progress.style.width =

      (

        max > 0

          ? scrollY / max * 100

          : 0

      ) + "%";

  }


  const sections =
    $$("main section");


  const links =
    $$("nav a");


  let current =
    "home";


  const y =
    scrollY + 130;


  sections.forEach(section => {

    if (y >= section.offsetTop) {

      current =
        section.id;

    }

  });


  links.forEach(link => {

    link.classList.toggle(

      "active",

      link.getAttribute("href") ===
      "#" + current

    );

  });

}


addEventListener(

  "scroll",

  scrollUI,

  {
    passive: true
  }

);


scrollUI();



/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
  $("#year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}



/* =========================================================
   CUSTOM CURSOR
========================================================= */

if (

  matchMedia(
    "(hover:hover) and (pointer:fine)"
  ).matches

) {


  const dot =
    $(".cursor-dot");


  const ring =
    $(".cursor-ring");


  if (dot && ring) {


    addEventListener(

      "mousemove",

      event => {


        dot.style.left =
          event.clientX + "px";


        dot.style.top =
          event.clientY + "px";


        ring.style.left =
          event.clientX + "px";


        ring.style.top =
          event.clientY + "px";

      }

    );


    $$("a, button").forEach(element => {


      element.addEventListener(

        "mouseenter",

        () => {

          ring.style.width =
            "45px";

          ring.style.height =
            "45px";

        }

      );


      element.addEventListener(

        "mouseleave",

        () => {

          ring.style.width =
            "30px";

          ring.style.height =
            "30px";

        }

      );

    });

  }

}