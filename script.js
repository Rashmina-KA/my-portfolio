const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

const skillData={
 data:{title:"Data Engineering & Analytics",text:"I enjoy the full journey from raw data to a useful insight — building pipelines, querying data and presenting results.",items:[["Python / Pandas","Data preparation & analysis"],["SQL / PostgreSQL","Queries, KPIs & relational data"],["Power BI / DAX","Interactive reporting & measures"],["Kafka / Grafana","Streaming & monitoring workflows"],["Data Quality","Validation, cleaning & exploration"],["Business Insights","Turning analysis into recommendations"]]},
 cloud:{title:"Cloud Computing",text:"Hands-on AWS work through my cloud internship and personal projects, with a growing foundation in Azure.",items:[["AWS EC2","Ubuntu, SSH & Apache"],["AWS S3","Storage & static website hosting"],["AWS Lambda","Python serverless functions"],["DynamoDB","NoSQL table design & validation"],["CloudWatch","Logs & execution monitoring"],["IAM / Security Groups","Access control & inbound rules"]]},
 systems:{title:"Systems & Networking",text:"A practical foundation in Linux, infrastructure and networking concepts that supports my cloud work.",items:[["Linux / Ubuntu","Command line & server fundamentals"],["SSH","Remote Linux server access"],["Apache","Basic web server administration"],["Cisco Packet Tracer","Networking practice"],["Network Fundamentals","Core infrastructure concepts"],["Cloud Security","Zero Trust & security fundamentals"]]},
 tools:{title:"Development & Tools",text:"Tools I use across academic, internship and portfolio projects.",items:[["Python","Automation, APIs, data workflows"],["Java / JavaScript / C","Programming foundations"],["Docker / Compose","Containerized development"],["Git / GitHub","Version control & collaboration"],["Postman","REST API testing"],["VS Code","Development environment"]]}
};

function renderSkills(key){
 const d=skillData[key];
 $("#skillContent").innerHTML=`<div class="skill-content"><div><h3>${d.title}</h3><p>${d.text}</p></div><div class="skill-list">${d.items.map(i=>`<div class="skill-pill"><b>${i[0]}</b><span>${i[1]}</span></div>`).join("")}</div></div>`;
}
renderSkills("data");
$$(".skill-button").forEach(b=>b.addEventListener("click",()=>{$$(".skill-button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderSkills(b.dataset.skill)}));

const menu=$("#menu"),nav=$("#nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
$$("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(e=>observer.observe(e));

const progress=$("#progress");
function scrollUI(){
 const max=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(max>0?scrollY/max*100:0)+"%";
 const sections=$$("main section"), links=$$("nav a");
 let current="home"; const y=scrollY+130;
 sections.forEach(s=>{if(y>=s.offsetTop)current=s.id});
 links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
}
addEventListener("scroll",scrollUI,{passive:true});scrollUI();
$("#year").textContent=new Date().getFullYear();

if(matchMedia("(hover:hover) and (pointer:fine)").matches){
 const dot=$(".cursor-dot"),ring=$(".cursor-ring");
 addEventListener("mousemove",e=>{dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";ring.style.left=e.clientX+"px";ring.style.top=e.clientY+"px"});
 $$("a,button").forEach(el=>{el.addEventListener("mouseenter",()=>{ring.style.width="45px";ring.style.height="45px"});el.addEventListener("mouseleave",()=>{ring.style.width="30px";ring.style.height="30px"})});
}
