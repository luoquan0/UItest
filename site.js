"use strict";
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const toast=message=>{const el=$("#toast");if(!el)return;el.textContent=message;el.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),2600)};
const images=[
 {src:"https://upload.wikimedia.org/wikipedia/commons/1/11/Gulangyu_at_dusk.jpg",title:"暮色入海 · Gulangyu at dusk"},
 {src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/Gulangyu.jpg",title:"红瓦与绿荫 · Island rooftops"},
 {src:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Shuzhuang_garden.jpg",title:"庭院听风 · Shuzhuang Garden"},
 {src:"https://upload.wikimedia.org/wikipedia/commons/0/01/Gu_Lang_Yu_Piano_Museum_20161231.jpg",title:"琴岛回响 · Piano Museum"}
];
const serviceCopy={
 ferry:["轮渡与交通","鼓浪屿往返交通涉及不同码头、航线与乘船规则。出行前请通过厦门轮渡官方渠道确认当日航班、购票方式、乘船证件及码头安排。页面不展示未经核实的实时班次。"],
 tickets:["门票与预约","部分景点可能实行单独售票、预约或限流管理。请在出发前核对景点官方公告、预约入口、票价及优惠政策，以实际购票页面为准。"],
 hours:["开放时间","景点开放时间可能因季节、活动或维护安排调整。建议出行前查看景区官方通知，并为轮渡往返及步行游览预留充足时间。"],
 guide:["游览须知","鼓浪屿适合步行慢游。请留意现场导览和安全提示，爱护历史建筑与自然环境，文明参观；路线和游览顺序可按体力与开放情况灵活调整。"]
};
function hidePreloader(){const p=$("#preloader"),bar=$("#preloader-bar");if(bar)bar.style.width="100%";setTimeout(()=>p&&p.classList.add("done"),650)}
window.addEventListener("load",hidePreloader);setTimeout(hidePreloader,2300);
if(new URLSearchParams(location.search).has("qa")){const preloader=$("#preloader");if(preloader)preloader.classList.add("done")}
const header=$("#site-header"),progress=$("#scroll-progress");let ticking=false;
function onScroll(){const y=window.scrollY,doc=document.documentElement.scrollHeight-window.innerHeight;header&&header.classList.toggle("scrolled",y>40);if(progress)progress.style.width=(doc>0?y/doc*100:0)+"%";const hero=$("#hero-image");if(hero&&window.innerWidth>760)hero.style.transform="translate3d(0,"+Math.min(y*.16,115)+"px,0) scale(1.07)";ticking=false}
window.addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});onScroll();
const menu=$("#main-nav"),menuToggle=$("#menu-toggle");
menuToggle&&menuToggle.addEventListener("click",()=>{menu&&menu.classList.toggle("open");menuToggle.classList.toggle("open")});
$$('#main-nav a').forEach(a=>a.addEventListener("click",()=>{menu&&menu.classList.remove("open");menuToggle&&menuToggle.classList.remove("open")}));
const navLinks=$$('#main-nav a');
if("IntersectionObserver"in window){
 const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id))}),{rootMargin:"-38% 0px -52% 0px"});
 ["home","about","spots","island-map","journey","island-film","gallery","services"].forEach(id=>{const el=$("#"+id);if(el)navObserver.observe(el)});
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
 $$(".reveal").forEach((el,i)=>{el.style.transitionDelay=(i%4)*65+"ms";revealObserver.observe(el)});
}else $$(".reveal").forEach(el=>el.classList.add("visible"));
let stateGallery=0;
function openLightbox(index){const box=$("#lightbox"),img=$("#lightbox-image"),caption=$("#lightbox-caption");if(!box||!img)return;stateGallery=(index+images.length)%images.length;img.src=images[stateGallery].src;img.alt=images[stateGallery].title;caption.textContent=images[stateGallery].title;box.classList.add("open");box.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeLightbox(){const box=$("#lightbox");box&&box.classList.remove("open");box&&box.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function stepLightbox(dir){openLightbox(stateGallery+dir)}
$$("[data-gallery]").forEach(el=>el.addEventListener("click",()=>openLightbox(Number(el.dataset.gallery))));
$("#hero-film")&&$("#hero-film").addEventListener("click",()=>openLightbox(0));
$("#lightbox-close")&&$("#lightbox-close").addEventListener("click",closeLightbox);$("#lightbox-prev")&&$("#lightbox-prev").addEventListener("click",()=>stepLightbox(-1));$("#lightbox-next")&&$("#lightbox-next").addEventListener("click",()=>stepLightbox(1));
$("#lightbox")&&$("#lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox")closeLightbox()});
const dialog=$("#info-dialog");
function closeDialog(){dialog&&dialog.classList.remove("open");dialog&&dialog.setAttribute("aria-hidden","true");if(!$("#lightbox")?.classList.contains("open")&&!$("#search-panel")?.classList.contains("open"))document.body.style.overflow=""}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLightbox();closeDialog();closeSearch()}if($("#lightbox")?.classList.contains("open")&&e.key==="ArrowRight")stepLightbox(1);if($("#lightbox")?.classList.contains("open")&&e.key==="ArrowLeft")stepLightbox(-1)});
const track=$("#spot-track"),trackWrap=$(".spot-track-wrap"),spotCards=$$(".spot-card");let spotIndex=0;
function updateSpotSlider(){if(!track||!spotCards.length)return;const gap=parseFloat(getComputedStyle(track).gap)||20,card=spotCards[0].getBoundingClientRect().width;const max=Math.max(0,spotCards.length-Math.max(1,Math.floor((trackWrap?.clientWidth||window.innerWidth)/(card+gap))));spotIndex=Math.max(0,Math.min(spotIndex,max));track.style.transform="translateX("+(-spotIndex*(card+gap))+"px)";const fill=$("#spot-progress-fill");if(fill)fill.style.width=((spotIndex+1)/(max+1)*100)+"%"}
$("#spot-next")&&$("#spot-next").addEventListener("click",()=>{spotIndex++;updateSpotSlider()});$("#spot-prev")&&$("#spot-prev").addEventListener("click",()=>{spotIndex--;updateSpotSlider()});window.addEventListener("resize",updateSpotSlider);setTimeout(updateSpotSlider,300);
const routeDetails=[
 ["从日光岩开始，遇见开阔的海。","登高、远眺、感受海风，让旅程从岛屿的高处缓缓展开。"],
 ["走进菽庄花园，在园林与海之间停留。","沿着园林空间慢慢走，看看建筑、庭院与海景如何彼此映衬。"],
 ["在钢琴博物馆，听见音乐之岛的故事。","透过乐器与展陈，感受鼓浪屿与音乐文化之间的深厚联系。"],
 ["把最后一段时间留给海岸与日落。","放慢脚步，沿海边走一段，让一天的旅程在海风里收尾。"]
];
$$("[data-route]").forEach(btn=>btn.addEventListener("click",()=>{const idx=Number(btn.dataset.route);$$("[data-route]").forEach(b=>b.classList.toggle("active",b===btn));const detail=$("#route-detail");if(!detail)return;detail.querySelector(".route-detail-number").textContent=String(idx+1).padStart(2,"0");detail.querySelector("h3").textContent=routeDetails[idx][0];detail.querySelector("p").textContent=routeDetails[idx][1];detail.animate([{opacity:.45,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:360,easing:"cubic-bezier(.16,1,.3,1)"})}));
function openDialog(key){const data=serviceCopy[key];if(!data)return;$("#dialog-title").textContent=data[0];$("#dialog-copy").textContent=data[1];dialog&&dialog.classList.add("open");dialog&&dialog.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
$$("[data-service]").forEach(btn=>btn.addEventListener("click",()=>openDialog(btn.dataset.service)));
$("#dialog-close")&&$("#dialog-close").addEventListener("click",closeDialog);dialog&&dialog.addEventListener("click",e=>{if(e.target===dialog)closeDialog()});
$("#language-switch")&&$("#language-switch").addEventListener("click",()=>toast("英文导览内容正在整理，当前展示中文版本。"));
const searchPanel=$("#search-panel"),searchInput=$("#site-search"),searchResults=$("#search-results");
function openSearch(){searchPanel&&searchPanel.classList.add("open");searchPanel&&searchPanel.setAttribute("aria-hidden","false");setTimeout(()=>searchInput&&searchInput.focus(),150)}
function closeSearch(){searchPanel&&searchPanel.classList.remove("open");searchPanel&&searchPanel.setAttribute("aria-hidden","true");if(!$("#lightbox")?.classList.contains("open")&&!dialog?.classList.contains("open"))document.body.style.overflow=""}
$("#search-open")&&$("#search-open").addEventListener("click",openSearch);$("#search-close")&&$("#search-close").addEventListener("click",closeSearch);
const searchItems=[["日光岩","spots"],["菽庄花园","spots"],["钢琴博物馆","spots"],["万国建筑","spots"],["景区介绍","about"],["互动地图","island-map"],["游玩攻略","journey"],["影像长卷","island-film"],["影像画廊","gallery"],["游客服务","services"],["轮渡与交通","services"],["门票与预约","services"]];
function renderSearch(q=""){if(!searchResults)return;const results=searchItems.filter(x=>x[0].toLowerCase().includes(q.toLowerCase()));searchResults.innerHTML=results.length?results.map(x=>'<button data-target="'+x[1]+'">'+x[0]+'　↗</button>').join(""):"没有找到相关内容";searchResults.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{closeSearch();document.getElementById(b.dataset.target)?.scrollIntoView({behavior:"smooth"})}))}
searchInput&&searchInput.addEventListener("input",e=>renderSearch(e.target.value));renderSearch();
$$("img").forEach(img=>img.addEventListener("error",()=>{img.style.opacity=".25";img.alt=img.alt+"（图片暂时无法加载）"}));

/* Cinematic A+B+C upgrade: pointer depth, ambient particles, pinned scroll story. */
const reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hero=$("#home"),heroImage=$("#hero-image"),heroCopy=$(".hero-copy"),heroSun=$(".hero-sun");
let pointerFrame=0,mouseX=0,mouseY=0;
if(hero&&!reduceMotion&&window.matchMedia("(pointer:fine)").matches){
 hero.addEventListener("pointermove",e=>{
  const r=hero.getBoundingClientRect();mouseX=(e.clientX-r.left)/r.width-.5;mouseY=(e.clientY-r.top)/r.height-.5;
  if(pointerFrame)return;
  pointerFrame=requestAnimationFrame(()=>{
   const sy=Math.min(window.scrollY*.16,115);
   if(heroImage)heroImage.style.transform="translate3d("+(mouseX*-13)+"px,"+(sy+mouseY*-9)+"px,0) scale(1.07)";
   if(heroCopy)heroCopy.style.transform="translate3d("+(mouseX*-10)+"px,"+(mouseY*-7)+"px,32px)";
   if(heroSun)heroSun.style.transform="translate3d("+(mouseX*22)+"px,"+(mouseY*16)+"px,0) scale(1.06)";
   $$(".hero-orbit").forEach((el,i)=>el.style.transform="translate3d("+(mouseX*(i?18:-11))+"px,"+(mouseY*(i?12:-8))+"px,0) rotate("+(i?-30:20)+"deg)");
   pointerFrame=0;
  });
 });
 hero.addEventListener("pointerleave",()=>{
  if(heroImage)heroImage.style.transform="translate3d(0,"+Math.min(window.scrollY*.16,115)+"px,0) scale(1.07)";
  if(heroCopy)heroCopy.style.transform="translate3d(0,0,32px)";
  if(heroSun)heroSun.style.transform="";
  $$(".hero-orbit").forEach(el=>el.style.transform="");
 });
}
const particleCanvas=$("#hero-particles");
if(particleCanvas&&!reduceMotion){
 const ctx=particleCanvas.getContext("2d");
 if(ctx){
  let w=0,h=0,dpr=1,particles=[],raf=0;
  const count=window.innerWidth<760?18:42;
  const resize=()=>{
   const r=hero.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,1.5);w=r.width;h=r.height;
   particleCanvas.width=Math.round(w*dpr);particleCanvas.height=Math.round(h*dpr);
   particleCanvas.style.width=w+"px";particleCanvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);
   particles=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,r:.5+Math.random()*1.4,vx:(Math.random()-.5)*.13,vy:-.08-Math.random()*.18,a:.15+Math.random()*.45,phase:Math.random()*6.28}));
  };
  const draw=()=>{
   ctx.clearRect(0,0,w,h);
   for(const p of particles){
    p.x+=p.vx;p.y+=p.vy;p.phase+=.012;
    if(p.y<-8){p.y=h+8;p.x=Math.random()*w}
    if(p.x<-8)p.x=w+8;if(p.x>w+8)p.x=-8;
    const alpha=p.a*(.7+.3*Math.sin(p.phase));
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(244,218,174,"+alpha+")";ctx.fill();
   }
   raf=requestAnimationFrame(draw);
  };
  resize();draw();window.addEventListener("resize",resize,{passive:true});
  document.addEventListener("visibilitychange",()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else if(!raf)draw()});
 }
}
const story=$("#island-story"),storyImages=$$("[data-story-image]"),storyDots=$$("[data-story]");
const storyChapters=[
 {kicker:"CHAPTER 01 · THE SEA BREEZE",title:"海风入巷，<br><em>时光慢了下来。</em>",copy:"潮声沿着石阶轻轻漫上来。穿过树影与老墙，岛屿的故事，从一阵海风开始。"},
 {kicker:"CHAPTER 02 · ARCHITECTURE & MEMORY",title:"百年建筑，<br><em>收藏城市的回声。</em>",copy:"拱廊、红瓦、窗棂与庭院，来自不同年代的建筑在岛上相遇，留下多元文化交汇的生活印记。"},
 {kicker:"CHAPTER 03 · THE ISLAND OF MUSIC",title:"琴声响起，<br><em>整座岛都有了旋律。</em>",copy:"从钢琴收藏到街巷里的音乐记忆，鼓浪屿的浪漫不只在海边，也藏在每一次轻轻响起的琴声里。"}
];
let storyActive=-1,storyTick=false;
function setStoryChapter(index){
 if(!story||index===storyActive)return;
 storyActive=index;
 storyImages.forEach((img,i)=>img.classList.toggle("active",i===index));
 storyDots.forEach((dot,i)=>dot.classList.toggle("active",i===index));
 const chapter=storyChapters[index],copy=$("#story-copy");
 if(copy){
  copy.innerHTML='<p class="story-chapter">'+chapter.kicker+'</p><h2>'+chapter.title+'</h2><p>'+chapter.copy+'</p>';
  copy.classList.remove("story-copy");void copy.offsetWidth;copy.classList.add("story-copy");
 }
 const number=String(index+1).padStart(2,"0");
 if($("#story-index"))$("#story-index").textContent=number+" / 03";
 if($("#story-counter-big"))$("#story-counter-big").textContent=number;
}
function updateStory(){
 if(!story||reduceMotion)return;
 const rect=story.getBoundingClientRect(),range=story.offsetHeight-window.innerHeight;
 const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,range)));
 const index=Math.min(2,Math.floor(progress*3.001));
 setStoryChapter(index);
 const active=storyImages[index];
 if(active){const offset=(progress*2-1)*13;active.style.transform="translate3d(0,"+offset+"px,0) scale(1.035)"}
 storyTick=false;
}
if(story&&!reduceMotion){
 window.addEventListener("scroll",()=>{if(!storyTick){requestAnimationFrame(updateStory);storyTick=true}},{passive:true});
 window.addEventListener("resize",updateStory,{passive:true});
 updateStory();
 storyDots.forEach(dot=>dot.addEventListener("click",()=>{
  const i=Number(dot.dataset.story),range=story.offsetHeight-window.innerHeight;
  const y=story.offsetTop+(range*(i+.48)/3);
  window.scrollTo({top:y,behavior:"smooth"});
 }));
}else if(story){setStoryChapter(0)}
if(!reduceMotion&&window.matchMedia("(pointer:fine)").matches){
 $$(".spot-card,.gallery-item").forEach(card=>{
  card.addEventListener("pointermove",e=>{
   const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   card.style.setProperty("--tilt-x",(x*3.2).toFixed(2)+"deg");
   card.style.setProperty("--tilt-y",(y*-3.2).toFixed(2)+"deg");
   card.style.setProperty("--spot-x",(x*100+50)+"%");
   card.style.setProperty("--spot-y",(y*100+50)+"%");
  });
  card.addEventListener("pointerleave",()=>{card.style.setProperty("--tilt-x","0deg");card.style.setProperty("--tilt-y","0deg")});
 });
}

if(story&&!reduceMotion&&window.matchMedia("(pointer:fine)").matches){
 const stack=$("#story-image-stack");
 story.addEventListener("pointermove",e=>{
  if(!stack)return;
  const r=story.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  stack.style.setProperty("--story-px",(x*1.7).toFixed(2)+"deg");
  stack.style.setProperty("--story-py",(y*-1.5).toFixed(2)+"deg");
  const da=$(".depth-a"),db=$(".depth-b");
  if(da)da.style.transform="translate3d("+(x*18)+"px,"+(y*12)+"px,0)";
  if(db)db.style.transform="translate3d("+(x*-13)+"px,"+(y*-10)+"px,0)";
 });
 story.addEventListener("pointerleave",()=>{
  const stack=$("#story-image-stack");if(stack){stack.style.setProperty("--story-px","0deg");stack.style.setProperty("--story-py","0deg")}
  const da=$(".depth-a"),db=$(".depth-b");if(da)da.style.transform="";if(db)db.style.transform="";
 });
}

/* V2: island map, horizontal scroll film, ocean shimmer and opt-in ambient sound */
const mapPlaces=[
 {eyebrow:"01 / HIGH POINT",name:"日光岩",copy:"登高望远，感受岛屿与海湾的开阔视野。这里是认识鼓浪屿地貌与城市天际线的经典视角。"},
 {eyebrow:"02 / GARDEN",name:"菽庄花园",copy:"园林与海景相映成趣，在曲径、亭台与临海空间之间，感受岛屿园林的雅致。"},
 {eyebrow:"03 / MUSIC",name:"钢琴博物馆",copy:"透过珍贵钢琴与音乐文化展陈，认识鼓浪屿作为音乐之岛的历史记忆。"},
 {eyebrow:"04 / HERITAGE",name:"历史建筑群",copy:"多元建筑风格在岛上交汇，拱廊、红瓦与庭院共同留下历史国际社区的独特风貌。"}
];
$$("[data-map]").forEach(pin=>pin.addEventListener("click",()=>{
 const index=Number(pin.dataset.map),place=mapPlaces[index],detail=$("#map-detail");
 $$("[data-map]").forEach(p=>p.classList.toggle("active",p===pin));
 if(!detail||!place)return;
 detail.innerHTML='<p class="overline">'+place.eyebrow+'</p><h3>'+place.name+'</h3><p>'+place.copy+'</p><a href="#spots">查看景点介绍 ↗</a><small>位置与步行路线为艺术示意，请以现场导览为准。</small>';
 detail.animate([{opacity:.45,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:380,easing:"cubic-bezier(.16,1,.3,1)"});
}));
const film=$("#island-film"),filmTrack=$("#horizontal-track"),filmFill=$("#film-progress-fill");
let filmBusy=false;
function updateFilm(){
 if(!film||!filmTrack||window.innerWidth<=760||reduceMotion)return;
 const rect=film.getBoundingClientRect(),distance=film.offsetHeight-window.innerHeight;
 const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,distance)));
 const max=Math.max(0,filmTrack.scrollWidth-window.innerWidth);
 filmTrack.style.transform="translate3d("+(-max*progress)+"px,0,0)";
 if(filmFill)filmFill.style.width=(progress*100)+"%";
 filmBusy=false;
}
if(film&&!reduceMotion){
 window.addEventListener("scroll",()=>{if(!filmBusy){requestAnimationFrame(updateFilm);filmBusy=true}},{passive:true});
 window.addEventListener("resize",updateFilm,{passive:true});
 updateFilm();
}
const water=$("#water-canvas");
if(water&&!reduceMotion){
 const ctx=water.getContext("2d");
 if(ctx){
  let ww=0,hh=0,dpr=1,raf=0,t=0;
  function resizeWater(){
   const r=hero.getBoundingClientRect();ww=r.width;hh=r.height;dpr=Math.min(window.devicePixelRatio||1,1.5);
   water.width=Math.round(ww*dpr);water.height=Math.round(hh*dpr);water.style.width=ww+"px";water.style.height=hh+"px";ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function paintWater(){
   if(document.hidden){raf=0;return}
   t+=.006;ctx.clearRect(0,0,ww,hh);
   const horizon=hh*.67;
   for(let row=0;row<13;row++){
    const y=horizon+row*hh*.027;
    ctx.beginPath();
    for(let x=0;x<=ww;x+=12){
     const perspective=(row+1)/13;
     const wave=Math.sin(x*.012+ t*2.2+row*.58)*2.1+Math.sin(x*.025-t+row)*.8;
     const yy=y+wave*perspective*2.6;
     if(x===0)ctx.moveTo(x,yy);else ctx.lineTo(x,yy);
    }
    const alpha=.018+row*.0025;
    ctx.strokeStyle="rgba(244,216,170,"+alpha+")";ctx.lineWidth=.6+row*.035;ctx.stroke();
   }
   for(let i=0;i<18;i++){
    const x=(i*137+t*18)%Math.max(1,ww),y=horizon+((i*47+Math.sin(t+i)*12)%Math.max(1,hh-horizon));
    ctx.fillStyle="rgba(255,225,177,"+(0.08+0.08*Math.sin(t*2+i))+")";ctx.fillRect(x,y,1.5,1);
   }
   raf=requestAnimationFrame(paintWater);
  }
  resizeWater();paintWater();window.addEventListener("resize",resizeWater,{passive:true});
  document.addEventListener("visibilitychange",()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else if(!raf)paintWater()});
 }
}
let audioContext=null,audioNodes=[],audioOn=false,audioMaster=null;
let phraseTimer=null;
function startIslandSound(){
 const Ctx=window.AudioContext||window.webkitAudioContext;
 if(!Ctx){toast("当前浏览器不支持网页音效");return}
 if(!audioContext)audioContext=new Ctx();
 audioContext.resume().then(()=>{
  if(audioOn)return;
  const master=audioContext.createGain();audioMaster=master;master.gain.value=.0001;master.connect(audioContext.destination);
  master.gain.setTargetAtTime(.15,audioContext.currentTime,1.0);
  const buffer=audioContext.createBuffer(1,audioContext.sampleRate*2,audioContext.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.12;
  const noise=audioContext.createBufferSource(),low=audioContext.createBiquadFilter(),noiseGain=audioContext.createGain();
  noise.buffer=buffer;noise.loop=true;low.type="lowpass";low.frequency.value=390;noiseGain.gain.value=.1;
  noise.connect(low);low.connect(noiseGain);noiseGain.connect(master);noise.start();
  audioNodes=[noise,low,noiseGain,master];audioOn=true;
  const notes=[392,493.88,587.33,493.88,440,392,329.63,392,440,523.25,493.88,392];
  let noteIndex=0;
  const playNote=()=>{
   if(!audioOn||!audioContext)return;
   const now=audioContext.currentTime,hz=notes[noteIndex%notes.length];
   const osc=audioContext.createOscillator(),gain=audioContext.createGain(),tone=audioContext.createBiquadFilter();
   osc.type="triangle";osc.frequency.setValueAtTime(hz,now);tone.type="lowpass";tone.frequency.setValueAtTime(2300,now);
   gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.075,now+.018);gain.gain.exponentialRampToValueAtTime(.0001,now+1.15);
   osc.connect(tone);tone.connect(gain);gain.connect(master);osc.onended=()=>{try{osc.disconnect();tone.disconnect();gain.disconnect()}catch(e){}};osc.start(now);osc.stop(now+1.2);
   noteIndex++;
  };
  playNote();phraseTimer=setInterval(playNote,560);
  const b=$("#sound-toggle");if(b){b.classList.add("playing");b.setAttribute("aria-pressed","true")}
  const label=$("#sound-label");if(label)label.textContent="关闭岛屿声音";
 }).catch(()=>toast("音频启动失败，请再次点击"));
}
function stopIslandSound(){
 if(!audioContext||!audioOn)return;
 audioOn=false;if(phraseTimer){clearInterval(phraseTimer);phraseTimer=null}
 const master=audioMaster;
 if(master&&master.gain)master.gain.setTargetAtTime(.0001,audioContext.currentTime,.2);
 setTimeout(()=>{audioNodes.forEach(n=>{try{if(n.stop)n.stop()}catch(e){}try{n.disconnect()}catch(e){}});audioNodes=[];if(audioMaster){try{audioMaster.disconnect()}catch(e){}}audioMaster=null;const b=$("#sound-toggle");if(b){b.classList.remove("playing");b.setAttribute("aria-pressed","false")}const label=$("#sound-label");if(label)label.textContent="开启岛屿声音"},850);
}
$("#sound-toggle")&&$("#sound-toggle").addEventListener("click",()=>audioOn?stopIslandSound():startIslandSound());
("click",()=>audioOn?stopIslandSound():startIslandSound());

})();
