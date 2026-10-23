document.documentElement.classList.add("js");
const P={
de:{n:"Data Engineering",e:"🛠️",c:"--de",s:"Pipelines, ETL and data you can trust.",t:"I move data from source to dashboard: streaming with Kafka, cleaning with Pandas, storing in PostgreSQL and SQLite, and containerising it all with Docker Compose.",r:["Data Engineer","Pipeline Builder"]},
ai:{n:"AI & ML",e:"🤖",c:"--ai",s:"Good data first, then smart models.",t:"I have training in Azure AI Fundamentals, machine learning concepts and AI agents. Next step: building my first ML project on top of my data foundations.",r:["AI Engineer (learning)","ML Explorer"]},
ba:{n:"Business Analysis",e:"📊",c:"--ba",s:"From numbers to decisions.",t:"I define KPIs, explore data in SQL and Python, and turn the findings into dashboards and clear business recommendations with Power BI.",r:["Data Analyst","Business Analyst"]},
pm:{n:"Project Management",e:"🗂️",c:"--pm",s:"Plan it, track it, document it.",t:"I understand SDLC and Agile basics, plan tasks with ClickUp and keep clear documentation so other people can follow and repeat my work.",r:["Project Manager (growing)","Agile Learner"]}};
const S=[["Languages",["Python","SQL","Java","C","JavaScript","HTML","CSS"],{Python:"de ai ba",SQL:"de ba",Java:"",C:"",JavaScript:"",HTML:"",CSS:""}],
["Data and analytics",["Pandas","PostgreSQL","SQLite","Kafka","Power BI","DAX","Grafana","Excel","Microsoft Fabric"],{Pandas:"de ai ba",PostgreSQL:"de ba",SQLite:"de",Kafka:"de","Power BI":"ba",DAX:"ba",Grafana:"de",Excel:"ba","Microsoft Fabric":"ba de"}],
["Cloud and tools",["AWS EC2","S3","Lambda","DynamoDB","CloudWatch","Azure","Docker","Git","GitHub","Postman","Linux"],{"AWS EC2":"de","S3":"de",Lambda:"de",DynamoDB:"de",CloudWatch:"de",Azure:"ai de",Docker:"de",Git:"de pm",GitHub:"de pm",Postman:"de",Linux:"de"}],
["AI, process and people",["Azure AI Fundamentals","ML concepts","AI agents","SDLC","Agile basics","ClickUp","KPI development","Documentation","Communication","Teamwork"],{"Azure AI Fundamentals":"ai","ML concepts":"ai","AI agents":"ai",SDLC:"pm","Agile basics":"pm",ClickUp:"pm","KPI development":"ba",Documentation:"pm ba",Communication:"pm ba",Teamwork:"pm"}]];
const J=[
{t:"Near-Real-Time Weather Data Pipeline",p:"de",b:"A six-component streaming pipeline (Open-Meteo API, Python producer, Kafka, consumer, PostgreSQL, Grafana) with an auto-refreshing live dashboard.",k:"Python, Kafka, PostgreSQL, Grafana, Docker Compose",g:"Containerising and connecting multiple services into one working system.",u:"weather-data-pipeline"},
{t:"DecodeLabs Cloud Projects",p:"de",b:"Four applied AWS projects across storage, compute, databases and serverless: an S3 static site, a hardened EC2 Ubuntu server, a DynamoDB table, and a Lambda function with CloudWatch.",k:"AWS S3, EC2, DynamoDB, Lambda, CloudWatch, Linux",g:"Cloud deployment, security groups and monitoring.",u:"DecodeLabs-Internship"},
{t:"E-Commerce Sales Analytics",p:"ba de",b:"A 3-page interactive Power BI dashboard from a 9,994-record Superstore dataset, with KPIs and recommendations (12.47% profit margin, losses at 30%+ discounts).",k:"Python, Pandas, SQL, PostgreSQL, Power BI, DAX",g:"Data cleaning, KPI development and turning findings into business advice.",u:"ecommerce-sales-analytics"},
{t:"Mini Data Engineering ETL Pipeline",p:"de",b:"An ETL pipeline that validates and transforms raw sales data, handles duplicates and missing values, and loads it into SQLite.",k:"Python, Pandas, SQLite, SQL, Git",g:"Protecting data quality before analysis or model training.",u:"mini-data-engineering-pipeline"},
{t:"JSONPlaceholder REST API Testing",p:"de pm",b:"An automated Postman test suite for GET, POST, PUT and DELETE with assertions, environment variables, negative tests and Collection Runner.",k:"Postman, REST API",g:"Testing APIs systematically and documenting the results.",u:"jsonplaceholder-api-testing-postman"}];
const C=[["Azure AI Fundamentals and ML Concepts","Microsoft Learn, 2026"],["Power BI and Microsoft Fabric analytics","Microsoft Learn, 2026"],["Microsoft Student Champs","Microsoft Learn Student Ambassadors Sri Lanka, Jul 2026"],["Cloud Computing (AWS/Azure) Virtual Internship","Decode Labs, Jul to Aug 2026"],["AWS Academy Graduate, Data Engineering","AWS Academy, 2026"],["Linux Fundamentals RH104","Red Hat, 2026"],["Cloud Security and Cybersecurity Fundamentals","Palo Alto Networks, 2026"],["Cisco Packet Tracer","Cisco Networking Academy, 2026"],["Python for Beginners","CODL, University of Moratuwa, Apr 2026"],["DevOps 101","Simplilearn, 2026"]];
const $=s=>document.querySelector(s),R=document.documentElement;let cur="de",roles=[],ri=0,ci=0,del=false;
$("#cg").innerHTML=C.map(c=>`<div class="ct"><b>${c[0]}</b><small>${c[1]}</small></div>`).join("");
$("#pc").innerHTML=Object.keys(P).map(k=>`<button class="pc" data-p="${k}" style="--c:var(${P[k].c})" aria-pressed="false"><em>${P[k].e}</em><b>${P[k].n}</b><small>${P[k].s}</small></button>`).join("");
$("#fl").innerHTML=[["all","All"]].concat(Object.keys(P).map(k=>[k,P[k].n])).map(x=>`<button class="fb" data-f="${x[0]}" aria-pressed="false">${x[1]}</button>`).join("");
$("#sg").innerHTML=S.map(g=>`<div class="sk"><h3>${g[0]}</h3><div class="chips">${g[1].map(n=>`<span class="chip" data-t="${g[2][n]||""}">${n}</span>`).join("")}</div></div>`).join("");
$("#pg").innerHTML=J.map(j=>`<article class="pj" data-p="${j.p}"><h3>${j.t}</h3><ul><li><b>Built:</b> ${j.b}</li><li><b>Tools:</b> ${j.k}</li><li><b>Gained:</b> ${j.g}</li></ul><a href="https://github.com/Rashmina-KA/${j.u}" target="_blank" rel="noopener">View on GitHub</a></article>`).join("");
function set(k){cur=k;const p=P[k];R.style.setProperty("--ac",`var(${p.c})`);
 document.querySelectorAll(".pc").forEach(b=>b.setAttribute("aria-pressed",b.dataset.p==k));
 $("#pd").innerHTML=`<h3>${p.e} ${p.n}</h3><p>${p.t}</p>`;
 document.querySelectorAll(".chip").forEach(c=>{const m=c.dataset.t.split(" ").includes(k);c.classList.toggle("on",m);c.classList.toggle("off",!m)});
 filt(k);roles=p.r;ri=0;ci=0;del=false}
function filt(f){document.querySelectorAll(".fb").forEach(b=>b.setAttribute("aria-pressed",b.dataset.f==f));
 document.querySelectorAll(".pj").forEach(a=>a.hidden=!(f=="all"||a.dataset.p.split(" ").includes(f)))}
document.addEventListener("click",e=>{const b=e.target.closest("[data-p]");if(b&&b.matches(".pc,.dot")){set(b.dataset.p);if(b.matches(".dot"))$("#paths").scrollIntoView({behavior:"smooth"})}
 const f=e.target.closest("[data-f]");if(f)filt(f.dataset.f)});
function type(){const w=roles[ri]||"";ci+=del?-1:1;$("#ty").textContent=w.slice(0,ci);
 let d=del?40:80;if(!del&&ci==w.length){del=true;d=1400}else if(del&&ci==0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(type,d)}
$("#th").onclick=()=>{const d=getComputedStyle(R).colorScheme=="dark";R.dataset.theme=d?"light":"dark"};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");x.target.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n;let i=0;const s=Math.max(1,Math.ceil(n/50));const t=setInterval(()=>{i=Math.min(n,i+s);el.textContent=i.toLocaleString();if(i>=n)clearInterval(t)},25)});io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
set("de");type();