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
const header=$("#site-header"),progress=$("#scroll-progress");let ticking=false;
function onScroll(){const y=window.scrollY,doc=document.documentElement.scrollHeight-window.innerHeight;header&&header.classList.toggle("scrolled",y>40);if(progress)progress.style.width=(doc>0?y/doc*100:0)+"%";const hero=$("#hero-image");if(hero&&window.innerWidth>760)hero.style.transform="translate3d(0,"+Math.min(y*.16,115)+"px,0) scale(1.07)";ticking=false}
window.addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});onScroll();
const menu=$("#main-nav"),menuToggle=$("#menu-toggle");
menuToggle&&menuToggle.addEventListener("click",()=>{menu&&menu.classList.toggle("open");menuToggle.classList.toggle("open")});
$$('#main-nav a').forEach(a=>a.addEventListener("click",()=>{menu&&menu.classList.remove("open");menuToggle&&menuToggle.classList.remove("open")}));
const navLinks=$$('#main-nav a');
if("IntersectionObserver"in window){
 const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id))}),{rootMargin:"-38% 0px -52% 0px"});
 ["home","about","spots","journey","gallery","services"].forEach(id=>{const el=$("#"+id);if(el)navObserver.observe(el)});
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
const searchItems=[["日光岩","spots"],["菽庄花园","spots"],["钢琴博物馆","spots"],["万国建筑","spots"],["景区介绍","about"],["游玩攻略","journey"],["影像画廊","gallery"],["游客服务","services"],["轮渡与交通","services"],["门票与预约","services"]];
function renderSearch(q=""){if(!searchResults)return;const results=searchItems.filter(x=>x[0].toLowerCase().includes(q.toLowerCase()));searchResults.innerHTML=results.length?results.map(x=>'<button data-target="'+x[1]+'">'+x[0]+'　↗</button>').join(""):"没有找到相关内容";searchResults.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{closeSearch();document.getElementById(b.dataset.target)?.scrollIntoView({behavior:"smooth"})}))}
searchInput&&searchInput.addEventListener("input",e=>renderSearch(e.target.value));renderSearch();
$$("img").forEach(img=>img.addEventListener("error",()=>{img.style.opacity=".25";img.alt=img.alt+"（图片暂时无法加载）"}));
})();
