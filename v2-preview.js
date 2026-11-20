
"use strict";
/* Qinglang 2.0 interactive design preview — local demo data only, no remote requests. */
(function(){
  const $=id=>document.getElementById(id);
  const I={
    panel:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    sunmoon:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/>',
    bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    chat:'<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 3v-6a7.5 7.5 0 1 1 17-4.5Z"/><path d="M7 10h9M7 13h6"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    book:'<path d="M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1-2-2Zm0 0a2 2 0 0 1 2-2h14M9 8h7M9 12h7"/>',
    cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="10" y="10" width="4" height="4" rx=".5"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
    spark:'<path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2H3Zm12-15a3 3 0 0 1 0 6m2 4a5 5 0 0 1 4 5"/>',
    chart:'<path d="M3 3v18h18M6 16l5-5 4 3 5-7"/>',
    code:'<path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .3.5-2 3.5-1.7-.3a8 8 0 0 1-2.1 1.2l-.7 1.6H9l-.7-1.6a8 8 0 0 1-2.1-1.2l-1.7.3-2-3.5.9-1.5a8 8 0 0 1 0-2.4L2.5 10l2-3.5 1.7.3a8 8 0 0 1 2.1-1.2L9 4h4.2l.7 1.6a8 8 0 0 1 2.1 1.2l1.7-.3 2 3.5-.9 1.5a8 8 0 0 1 0 2.4z"/>',
    shield:'<path d="m12 2 8 4v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    arrowUp:'<path d="M12 19V5M5 12l7-7 7 7"/>',
    upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 17v4h16v-4"/>',
    paperclip:'<path d="m21 11-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>',
    file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z"/><path d="M13 2v7h7M8 14h8M8 18h6"/>',
    sliders:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="17" r="2"/>',
    layers:'<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>',
    refresh:'<path d="M20 6v5h-5M4 18v-5h5M5.5 9a7 7 0 0 1 12-3l2.5 5M18.5 15a7 7 0 0 1-12 3L4 13"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    chevron:'<path d="m9 18 6-6-6-6"/>',
    check:'<path d="m4 12 5 5L20 6"/>',
    bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/>',
    pen:'<path d="m4 20 4-.9L19 8a2.8 2.8 0 0 0-4-4L4 15v5ZM13 6l5 5"/>',
    activity:'<path d="M2 12h5l3-8 4 16 3-8h5"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',
    star:'<path d="m12 2 3.1 6.3 7 .9-5 5 .9 7-6-3.4L6 21l.9-7-5-5 7-.9L12 2Z"/>',
    trash:'<path d="M3 6h18M9 6V4h6v2m-9 0 1 15h10l1-15M10 10v7m4-7v7"/>',
    edit:'<path d="m4 20 4-.9L19 8a2.8 2.8 0 0 0-4-4L4 15v5Z"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18"/>',
    server:'<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01M12 7h6M12 17h6"/>',
    eye:'<path d="M2 12c2-4 6-6 10-6s8 2 10 6c-2 4-6 6-10 6s-8-2-10-6Z"/><circle cx="12" cy="12" r="3"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    key:'<circle cx="8" cy="15" r="5"/><path d="m12 11 9-9m-5 5 3 3"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
    send:'<path d="m22 2-7 20-4-9-9-4 20-7ZM11 13l11-11"/>',
    stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
    folder:'<path d="M3 7a2 2 0 0 1 2-2h6l2 3h6a2 2 0 0 1 2 2v9H3V7Z"/>',
    archive:'<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v12h14V9M10 14h4"/>',
    download:'<path d="M12 3v13m-5-5 5 5 5-5M4 18v3h16v-3"/>'
  };
  function icon(name){return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">'+(I[name]||I.spark)+'</svg>'}
  function hydrateIcons(){document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon))}
  const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pages=[
    {id:'chat',name:'AI 智能对话',short:'AI 对话',icon:'chat'},
    {id:'workspace',name:'智能工作空间',short:'工作空间',icon:'grid'},
    {id:'knowledge',name:'知识库管理',short:'知识库',icon:'book'},
    {id:'models',name:'模型服务中心',short:'模型中心',icon:'cpu'},
    {id:'apps',name:'智能应用',short:'智能应用',icon:'spark'},
    {id:'monitor',name:'运行监控',short:'运行监控',icon:'chart'},
    {id:'users',name:'用户与权限',short:'用户权限',icon:'users',admin:true},
    {id:'api',name:'API 接口管理',short:'API 管理',icon:'code',admin:true},
    {id:'audit',name:'审计日志',short:'审计日志',icon:'shield',admin:true},
    {id:'settings',name:'系统设置',short:'系统设置',icon:'settings'}
  ];
  const defaults={
    theme:'dark',motion:'on',collapsed:false,role:'管理员',page:'chat',selectedSession:null,modelFilter:'all',
    selectedModel:'Qwen3.8-27B',kbEnabled:true,deepMode:false,temperature:.7,maxTokens:'8192',contextOpen:true,
    sessions:[
      {id:'s1',title:'政务信息公开咨询',favorite:true,messages:[
        {role:'user',text:'请帮我概括政务信息公开工作的主要要求。'},
        {role:'ai',text:'以下为演示性的工作要点整理：\n\n一、主动公开：在法定范围内及时、准确公开应公开的信息。\n\n二、依申请公开：依法受理申请，规范办理流程和答复时限。\n\n三、保密审查：严格执行信息公开前的审查程序。\n\n四、便民服务：持续优化公开渠道，提高信息获取便利度。\n\n提示：正式办理请依据现行有效法律法规及本单位制度核验。'}
      ]},
      {id:'s2',title:'年度工作计划要点',favorite:false,messages:[
        {role:'user',text:'如何整理年度工作计划？'},
        {role:'ai',text:'建议按照“目标任务—重点举措—责任分工—时间节点—评价方式”的结构编写，并突出可执行、可检查、可追踪。'}
      ]},
      {id:'s3',title:'会议纪要结构优化',favorite:false,messages:[]}
    ],
    models:[
      {id:'m1',name:'Qwen3.8-27B',type:'本地部署',vendor:'llama.cpp',context:'128K',online:true,default:true},
      {id:'m2',name:'DeepSeek-R1',type:'API 接入',vendor:'兼容 OpenAI API',context:'64K',online:true,default:false},
      {id:'m3',name:'Qwen3-8B',type:'本地部署',vendor:'Ollama',context:'32K',online:false,default:false}
    ],
    docs:[
      {id:'d1',name:'政务信息公开工作指引.pdf',base:'政策法规知识库',kind:'PDF',size:'2.4 MB',status:'已完成',date:'2026-11-18'},
      {id:'d2',name:'年度重点工作任务清单.xlsx',base:'单位内部资料',kind:'Excel',size:'568 KB',status:'已完成',date:'2026-11-19'},
      {id:'d3',name:'机关常用公文范例.docx',base:'办公范本知识库',kind:'Word',size:'1.2 MB',status:'已完成',date:'2026-11-17'},
      {id:'d4',name:'办事服务事项清单.pdf',base:'政策法规知识库',kind:'PDF',size:'3.1 MB',status:'处理中',date:'2026-11-20'}
    ],
    knowledgeBases:['政策法规知识库','单位内部资料','办公范本知识库'],
    apps:[
      {id:'a1',name:'公文辅助',desc:'协助规范结构、整理要点与优化文字表达。',icon:'pen',tag:'OFFICE'},
      {id:'a2',name:'政策速读',desc:'面向政策文档提炼重点内容和办事提示。',icon:'book',tag:'KNOWLEDGE'},
      {id:'a3',name:'会议纪要',desc:'从讨论内容中快速生成会议纪要结构。',icon:'file',tag:'PRODUCTIVITY'},
      {id:'a4',name:'智能检索',desc:'跨文档查找内部知识与关联信息。',icon:'search',tag:'RETRIEVAL'},
      {id:'a5',name:'数据洞察',desc:'辅助汇总表格信息和生成可读结论。',icon:'chart',tag:'ANALYTICS'},
      {id:'a6',name:'材料总结',desc:'提取多篇材料要点，形成简明摘要。',icon:'layers',tag:'SUMMARY'}
    ],
    users:[
      {id:'u1',name:'张三',dept:'办公室',role:'系统管理员',enabled:true},
      {id:'u2',name:'李四',dept:'业务科室',role:'业务人员',enabled:true},
      {id:'u3',name:'王五',dept:'综合科',role:'普通用户',enabled:true},
      {id:'u4',name:'赵六',dept:'信息中心',role:'单位管理员',enabled:true},
      {id:'u5',name:'陈七',dept:'办公室',role:'普通用户',enabled:false}
    ],
    apiKeys:[
      {id:'k1',name:'政务办公应用',scope:'对话 / 知识库',masked:'sk-demo-••••••92A1',enabled:true},
      {id:'k2',name:'内部分析服务',scope:'对话 / 统计',masked:'sk-demo-••••••37CB',enabled:true}
    ],
    audit:[
      {time:'11-20 15:42',operator:'张三',action:'查看模型运行状态',result:'已完成'},
      {time:'11-20 14:35',operator:'李四',action:'访问政策知识库',result:'已完成'},
      {time:'11-20 11:18',operator:'系统演示',action:'模拟文档解析完成',result:'已完成'}
    ]
  };
  const storageKey='qinglang-visual-v2';
  function load(){
    try{
      const s=JSON.parse(localStorage.getItem(storageKey)||'null');
      if(!s||typeof s!=='object')return structuredClone(defaults);
      const d=structuredClone(defaults);
      Object.keys(d).forEach(k=>{if(Object.prototype.hasOwnProperty.call(s,k))d[k]=s[k]});
      return d;
    }catch(e){return structuredClone(defaults)}
  }
  let state=load();
  let historyQuery='',documentQuery='',commandQuery='',streamTimer=null,streamSessionId=null,streamText='',streamTarget='';
  let pendingModalSave=null,pendingConfirm=null,lastFocused=null,pendingAttachments=[];
  const modeLabel=()=>state.theme==='dark'?'深色模式':'浅色模式';
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify(state))}catch(e){toast('浏览器存储空间不足，数据未能保存')}}
  function notify(msg){toast(msg)}
  function toast(msg){
    const box=$('toast-container'),el=document.createElement('div');
    if(!box)return;el.className='toast';el.textContent=msg;box.appendChild(el);setTimeout(()=>{if(el.parentElement)el.remove()},3600)
  }
  function applySettings(){
    document.documentElement.dataset.theme=state.theme;
    document.documentElement.dataset.motion=state.motion;
    document.querySelector('meta[name=theme-color]').content=state.theme==='dark'?'#08111e':'#f3f7fd';
    $('app-shell').classList.toggle('nav-collapsed',!!state.collapsed);
    $('theme-toggle').title='切换主题（当前'+modeLabel()+'）';
  }
  function validPage(id){return pages.find(p=>p.id===id&&(!p.admin||state.role==='管理员'))}
  function activePage(){return validPage(state.page)||pages[0]}
  function setPage(id){
    if(!validPage(id)){toast('当前演示角色没有该页面的菜单权限');return}
    stopStream(false);
    state.page=id;persist();history.replaceState(null,'','#'+id);render();
  }
  function renderNav(){
    const filtered=pages.filter(p=>!p.admin||state.role==='管理员');
    $('nav-menu').innerHTML=filtered.map(p=>
      '<button class="nav-item '+(activePage().id===p.id?'active':'')+'" data-action="navigate" data-page="'+p.id+'" title="'+p.name+'" aria-current="'+(activePage().id===p.id?'page':'false')+'">'
      +icon(p.icon)+'<span class="nav-title">'+p.short+'</span>'+(p.id==='chat'?'<span class="nav-badge">AI</span>':'')+'</button>'
    ).join('');
    $('current-page').textContent=activePage().name;
    hydrateIcons();
  }
  function pageHeader(eyebrow,title,sub,actions){
    return '<div class="page-eyebrow">'+esc(eyebrow)+'</div><div class="page-header"><div><h1 class="page-title">'+esc(title)+'</h1><p class="page-subtitle">'+esc(sub)+'</p></div><div class="head-actions">'+(actions||'')+'</div></div>';
  }
  function btn(action,text,primary,extra){
    return '<button class="small-button'+(primary?' primary':'')+'" data-action="'+action+'" '+(extra||'')+'>'+text+'</button>';
  }
  function pill(text,type){return '<span class="status-pill '+(type||'')+'">'+esc(text)+'</span>'}
  function metric(label,value,sub,ico){
    return '<article class="metric-card"><div class="metric-top"><span>'+esc(label)+'</span><span class="metric-symbol">'+icon(ico)+'</span></div><div class="metric-number">'+esc(value)+'</div><div class="metric-foot">'+(sub||'演示统计数据')+'</div></article>';
  }
  function surface(title,body,end){
    return '<section class="surface-card"><div class="surface-title"><strong>'+esc(title)+'</strong>'+(end||'')+'</div>'+body+'</section>';
  }
  function chartSvg(){
    const vals=[16,22,19,33,36,32,41,48,44,58,61,66,62,80];
    const coords=vals.map((v,i)=>(20+i*39)+','+(204-v*2));
    const poly=coords.join(' ');
    const area='20,204 '+poly+' 527,204';
    return '<svg class="line-chart" viewBox="0 0 550 228" role="img" aria-label="近14天请求量变化趋势演示">'
      +'<defs><linearGradient id="chartShade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#4b92ef" stop-opacity=".26"/><stop offset="1" stop-color="#4b92ef" stop-opacity="0"/></linearGradient></defs>'
      +[50,95,140,185].map(y=>'<line x1="20" y1="'+y+'" x2="530" y2="'+y+'" stroke="currentColor" stroke-opacity=".09" stroke-dasharray="4 6"/>').join('')
      +'<polygon points="'+area+'" fill="url(#chartShade)"/><polyline points="'+poly+'" fill="none" stroke="#53b1ee" stroke-width="2.9" stroke-linejoin="round" stroke-linecap="round"/>'
      +coords.map((pt,i)=>i%3===1?'<circle cx="'+pt.split(',')[0]+'" cy="'+pt.split(',')[1]+'" r="3.5" fill="#53b1ee" stroke="var(--surface)" stroke-width="2"/>':'').join('')
      +'</svg><div class="chart-labels"><span>11.07</span><span>11.10</span><span>11.13</span><span>11.16</span><span>11.20</span></div>';
  }
  function renderMonitor(){return '<div class="page-outer">'
    +pageHeader('SYSTEM OBSERVABILITY','运行监控中心','集中了解模型、调用量与服务状态。以下均为演示统计。',
      btn('period','近 7 天  ▾',false,'id="period-button"')+btn('refresh-stats',icon('refresh')+' 刷新视图',false))
    +'<div class="metric-grid">'+metric('今日对话量','1,286','<strong>↗ 12.6%</strong> 较前日','chat')
    +metric('活跃使用人数','328','<strong>↗ 8.3%</strong> 演示变化','users')
    +metric('Token 总消耗','12.76 M','<strong>↗ 6.8%</strong> 演示变化','bolt')
    +metric('平均响应耗时','1.27 s','<strong>↘ 14.2%</strong> 演示变化','activity')+'</div>'
    +'<div class="analytics-grid">'+surface('模型调用趋势',chartSvg(),'<small>近 14 天 · 示例</small>')
    +surface('服务健康状态',['对话服务','模型推理','知识库索引','API 网关','数据存储'].map((s,i)=>'<div class="service-row"><span class="service-left">'+icon(['chat','cpu','book','code','server'][i])+esc(s)+'</span>'+pill('正常运行')+'</div>').join(''),'<small>5 / 5 正常</small>')+'</div>'
    +surface('最近操作动态',state.audit.slice(0,4).map(a=>'<div class="activity-row"><span>'+esc(a.action)+'</span><span class="page-subtitle">'+esc(a.time)+'</span>'+pill('已记录')+'</div>').join(''))
    +'<p class="help-foot">'+icon('info')+' 此页面为可交互设计演示，图表与服务状态非实时生产数据。</p></div>';
  }
  function renderWorkspace(){
    return '<div class="page-outer">'+pageHeader('YOUR AI WORKSPACE','让工作，更进一步','选择一个常用工作场景，快速进入智能协作流程。',
      btn('new-session',icon('plus')+' 开始新对话',true))+
      '<div class="metric-grid">'+metric('今日任务','24','演示任务','layers')+metric('关联知识库',String(state.knowledgeBases.length),'已配置知识空间','book')+metric('已接入模型',String(state.models.length),'本地及 API','cpu')+metric('我的会话',String(state.sessions.length),'浏览器本地保存','chat')+'</div>'
      +'<div class="application-grid">'+state.apps.map(a=>'<article class="application-card"><div class="app-head"><span class="app-icon">'+icon(a.icon)+'</span><span class="app-tag">'+esc(a.tag)+'</span></div><h3>'+esc(a.name)+'</h3><p>'+esc(a.desc)+'</p>'+btn('launch-app',icon('arrow')+' 立即使用',false,'data-id="'+a.id+'"')+'</article>').join('')+'</div></div>';
  }
  function sessionList(){
    const q=historyQuery.toLowerCase();
    const sorted=state.sessions.filter(s=>s.title.toLowerCase().includes(q)).sort((a,b)=>Number(!!b.favorite)-Number(!!a.favorite));
    return sorted.length?sorted.map(s=>'<div class="conversation-item '+(state.selectedSession===s.id?'active':'')+'">'
      +'<button class="conv-open" data-action="open-session" data-id="'+s.id+'" aria-label="打开会话 '+esc(s.title)+'">'+icon('chat')+'<span class="conv-title">'+esc(s.title)+'</span></button>'
      +(s.favorite?'<span class="conv-star" aria-label="已收藏">★</span>':'')
      +'<button class="conv-menu" data-action="session-menu" data-id="'+s.id+'" aria-label="管理会话 '+esc(s.title)+'">⋯</button></div>').join(''):'<div class="empty-state">没有符合条件的会话</div>';
  }
  function hero(){
    const quick=[
      {icon:'pen',title:'公文辅助',desc:'整理与优化文字',prompt:'请帮我整理一份规范的工作通知提纲。'},
      {icon:'book',title:'政策速读',desc:'提炼政策要点',prompt:'请概括政务信息公开工作的主要要求。'},
      {icon:'chart',title:'数据洞察',desc:'解读表格数据',prompt:'请提供一个分析部门月度业务统计的框架。'},
      {icon:'file',title:'会议纪要',desc:'提取行动事项',prompt:'帮我生成一份可直接填写的会议纪要模板。'}
    ];
    return '<section class="hero-welcome">'
      +'<div class="hero-visual" aria-hidden="true"><div class="orb-ring-2"></div><div class="orb-ring"></div><div class="orb-track"></div><div class="orb-center"><svg viewBox="0 0 48 48" fill="none"><path d="m10 32 14-24 14 24M15 24h18" stroke="currentColor" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="26" r="3" fill="currentColor"/></svg></div></div>'
      +'<div class="hero-kicker">QINGLANG INTELLIGENCE · 2.0</div>'
      +'<h1>让智慧，融入每一次<em>政务协作</em></h1>'
      +'<p class="hero-description">从政策研读到公文写作，从知识检索到数据洞察。<br>让 AI 成为日常工作中得心应手的智慧伙伴。</p>'
      +'<div class="capability-row"><span>'+icon('shield')+' 数据安全提示</span><span>'+icon('layers')+' 多模型协作</span><span>'+icon('bolt')+' 快捷任务</span></div>'
      +'<div class="quick-grid">'+quick.map(q=>'<button class="quick-card" data-action="quick-prompt" data-prompt="'+esc(q.prompt)+'">'+icon(q.icon)+'<span class="quick-arrow">↗</span><span><span class="quick-title">'+esc(q.title)+'</span><br><span class="quick-desc">'+esc(q.desc)+'</span></span></button>').join('')+'</div>'
      +'</section>';
  }
  function messagesMarkup(session){
    return '<div class="conversation-feed">'+session.messages.map((m,i)=>'<article class="message '+m.role+'"><span class="message-avatar">'+(m.role==='user'?'我':'AI')+'</span><div class="message-body"><div class="message-role">'+(m.role==='user'?'我':'清朗 AI')+'</div><div class="message-content">'+esc(m.text)+'</div>'
      +(m.role==='ai'?'<div class="message-actions"><button data-action="copy-message" data-id="'+session.id+'" data-idx="'+i+'">'+icon('copy')+' 复制</button><button data-action="regenerate" data-id="'+session.id+'">'+icon('refresh')+' 重新生成</button><button data-action="feedback">'+icon('check')+' 有帮助</button></div>':'')
      +'</div></article>').join('')+'</div>';
  }
  function insight(){
    const m=state.models.find(x=>x.name===state.selectedModel)||state.models[0];
    return '<aside class="insight-panel"><div class="insight-head"><strong>会话上下文</strong><button class="icon-btn" data-action="toggle-context" title="收起右侧面板" aria-label="收起右侧面板">'+icon('close')+'</button></div>'
      +'<p class="mini-label">MODEL STATUS</p><div class="info-surface"><div class="info-heading">'+icon('cpu')+' 当前模型</div>'
      +'<div class="model-pill">'+esc(m.name)+'</div><div class="info-sub">'+esc(m.vendor)+' · '+esc(m.context)+' 上下文</div>'
      +'<div class="latency-row"><span>模型连接状态</span><span class="cyan-text">演示 / 未连接</span></div></div>'
      +'<div class="section-break"></div><p class="mini-label">KNOWLEDGE CONTEXT</p>'
      +'<div class="kb-item">'+icon('book')+'<div><strong>政策法规知识库</strong><small>35 份演示资料</small></div></div>'
      +'<div class="kb-item">'+icon('file')+'<div><strong>单位内部资料</strong><small>18 份演示资料</small></div></div>'
      +'<div class="section-break"></div><p class="mini-label">INFERENCE CONTROL</p>'
      +'<div class="slider-row"><div class="slider-head"><span>Temperature</span><b id="temperature-value">'+Number(state.temperature).toFixed(1)+'</b></div>'
      +'<input id="temperature" type="range" min="0" max="1" step=".1" value="'+Number(state.temperature)+'" aria-label="Temperature"></div>'
      +'<div class="slider-row"><div class="slider-head"><span>最大输出 Token</span></div><select class="select-small" id="max-tokens">'
      +['2048','4096','8192','16384'].map(t=>'<option value="'+t+'" '+(state.maxTokens===t?'selected':'')+'>'+t+'</option>').join('')+'</select></div>'
      +'<div class="context-foot">'+icon('shield')+' 仅用于交互设计验证，不存储或处理真实业务文件及密钥。</div></aside>';
  }
  function chatComposer(){
    return '<div class="composer-wrap"><div class="composer"><div class="composer-text"><textarea id="message-input" aria-label="输入消息" rows="2" placeholder="向清朗 AI 提问，或输入您的工作需求..."></textarea></div>'
      +'<div id="file-chips" class="attachment-chips">'+pendingAttachments.map(f=>'<span class="attachment-chip">'+icon('file')+esc(f.name)+'</span>').join('')+'</div>'
      +'<div class="composer-bottom"><div class="compose-tools"><label for="chat-files" class="tool-button clickable-icon" title="选择本地文件">'+icon('paperclip')+'<span>附件</span></label><input type="file" multiple id="chat-files" accept=".pdf,.doc,.docx,.xls,.xlsx,.txt">'
      +'<span class="tool-sep"></span>'
      +'<button class="tool-button '+(state.kbEnabled?'active':'')+'" data-action="toggle-kb" aria-pressed="'+state.kbEnabled+'">'+icon('book')+' 知识库</button>'
      +'<button class="tool-button '+(state.deepMode?'active':'')+'" data-action="toggle-deep" aria-pressed="'+state.deepMode+'">'+icon('spark')+' 深度思考</button></div>'
      +'<div class="compose-right"><span class="tool-button" style="font-size:10px">'+icon('shield')+' 演示模式</span>'
      +'<button class="send-btn" id="send-message" data-action="send-message" title="发送消息" aria-label="发送消息">'+icon('arrowUp')+'</button></div></div></div>'
      +'<div class="composer-meta"><span>输入内容仅保存在当前浏览器</span><span class="dot-sep">·</span><span>Enter 发送 / Shift + Enter 换行</span></div></div>';
  }
  function renderChat(){
    const session=state.sessions.find(s=>s.id===state.selectedSession);
    const m=state.models.find(x=>x.name===state.selectedModel)||state.models[0];
    return '<div id="chat-layout" class="chat-layout '+(state.contextOpen?'':'context-hidden')+'">'
      +'<aside class="conversation-panel"><p class="panel-eyebrow">CONVERSATIONS</p>'
      +'<button class="primary-button new-chat" data-action="new-session">'+icon('plus')+' 新建对话</button>'
      +'<label class="filter-field">'+icon('search')+'<input type="search" id="history-filter" placeholder="搜索会话..." value="'+esc(historyQuery)+'" aria-label="搜索历史会话"></label>'
      +'<div class="conv-section-title"><span>最近会话</span><small>'+state.sessions.length+' 条</small></div>'
      +'<div id="conversation-list" class="conversation-scroll">'+sessionList()+'</div>'
      +'<div class="conversation-bottom">'+icon('archive')+' 历史内容仅在本地保存<br>请勿上传任何真实涉密资料</div></aside>'
      +'<section class="chat-main">'
      +'<div class="chat-header"><div><div class="chat-heading">'+(session?esc(session.title):'AI 智能对话')+'</div><div class="chat-subtitle">'+(session?'可随时切换会话，继续您的思路':'让每一次提问，都成为高效工作的起点')+'</div></div>'
      +'<div class="chat-actions"><button class="icon-btn history-show" data-action="toggle-history" title="查看会话" aria-label="查看会话">'+icon('menu')+'</button>'
      +'<div class="model-selector"><span class="model-dot"></span><select aria-label="选择对话模型" id="chat-model">'+state.models.filter(x=>x.online).map(x=>'<option '+(state.selectedModel===x.name?'selected':'')+' value="'+esc(x.name)+'">'+esc(x.name)+'</option>').join('')+'</select></div>'
      +'<button class="icon-btn" data-action="toggle-context" aria-label="展开或收起上下文" title="会话上下文">'+icon('sliders')+'</button></div></div>'
      +'<div id="chat-stream" class="chat-stream">'+(session&&session.messages.length?messagesMarkup(session):hero())+'</div>'
      +chatComposer()+'</section>'+insight()+'</div>';
  }
  function renderKnowledge(){
    const filtered=state.docs.filter(x=>(x.name+x.base).toLowerCase().includes(documentQuery.toLowerCase()));
    return '<div class="page-outer">'+pageHeader('KNOWLEDGE NETWORK','知识库管理','让文件、资料与制度成为可追溯的知识资产。',
      btn('upload-doc',icon('upload')+' 上传资料',true)+btn('add-knowledge',icon('plus')+' 新建知识库',false))
      +'<input type="file" id="knowledge-file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.txt">'
      +'<div class="metric-grid">'+metric('知识空间',String(state.knowledgeBases.length),'已配置','layers')+metric('资料总量',String(state.docs.length),'演示记录','file')
      +metric('已就绪',String(state.docs.filter(x=>x.status==='已完成').length),'演示状态','check')+metric('资料处理中',String(state.docs.filter(x=>x.status==='处理中').length),'模拟任务','activity')+'</div>'
      +'<div class="panel-toolbar"><label class="table-search">'+icon('search')+'<input id="document-filter" placeholder="检索文件名称或知识库..." value="'+esc(documentQuery)+'"></label></div>'
      +'<div class="table-surface"><table><thead><tr><th>资料名称</th><th>知识空间</th><th>类型</th><th>大小</th><th>处理状态</th><th>更新时间</th><th>操作</th></tr></thead><tbody id="document-rows">'
      +docsRows(filtered)+'</tbody></table></div><p class="help-foot">'+icon('info')+' 当前仅演示文件列表与状态，实际文件未上传或索引。</p></div>';
  }
  function docsRows(docs){
    return docs.length?docs.map(d=>'<tr><td><strong>'+icon('file')+' '+esc(d.name)+'</strong></td><td>'+esc(d.base)+'</td><td>'+esc(d.kind)+'</td><td>'+esc(d.size)+'</td><td>'+pill(d.status,d.status==='已完成'?'':'warning')+'</td><td>'+esc(d.date)+'</td>'
      +'<td><button class="table-btn" data-action="doc-detail" data-id="'+d.id+'">详情</button><button class="table-btn" data-action="delete-doc" data-id="'+d.id+'">删除</button></td></tr>').join('')
      :'<tr><td colspan="7" class="empty-state">没有匹配的资料</td></tr>';
  }
  function renderModels(){
    const list=state.models.filter(m=>state.modelFilter==='all'||(state.modelFilter==='local'?m.type==='本地部署':m.type==='API 接入'));
    return '<div class="page-outer">'+pageHeader('MODEL INFRASTRUCTURE','模型服务中心','连接不同模型能力，统一配置与管理工作入口。',
      btn('add-model',icon('plus')+' 添加模型',true))
      +'<div class="panel-toolbar"><div class="segmented">'
      +[['all','全部模型'],['local','本地部署'],['api','API 接入']].map(a=>'<button class="'+(state.modelFilter===a[0]?'active':'')+'" data-action="model-filter" data-filter="'+a[0]+'">'+a[1]+'</button>').join('')
      +'</div><span class="page-subtitle">已登记 '+state.models.length+' 个演示模型</span></div>'
      +'<div class="model-grid">'+list.map(m=>'<article class="model-card"><div class="model-head"><span class="model-icon">'+icon('cpu')+'</span>'+pill(m.online?'运行中':'已停用',m.online?'':'off')+'</div>'
      +'<h3>'+esc(m.name)+(m.default?' <small style="color:var(--primary);font-size:10px">默认</small>':'')+'</h3>'
      +'<div class="model-desc">'+esc(m.type)+' · '+esc(m.vendor)+'<br>当前仅展示模型接入设置与界面状态。</div>'
      +'<div class="model-meta"><span>上下文长度</span><b>'+esc(m.context)+'</b></div>'
      +'<div class="model-meta"><span>接入方式</span><b>'+esc(m.type)+'</b></div>'
      +'<div class="head-actions">'+btn('set-default','设为默认',false,'data-id="'+m.id+'"')+btn('toggle-model',m.online?'停用':'启用',false,'data-id="'+m.id+'"')+btn('edit-model',icon('sliders')+' 配置',false,'data-id="'+m.id+'"')+'</div></article>').join('')+'</div></div>';
  }
  function renderApps(){
    return '<div class="page-outer">'+pageHeader('INTELLIGENT APPLICATIONS','智能应用中心','将常见办公任务组织为触手可及的智能工作流。',
      btn('add-app',icon('plus')+' 创建应用',true))
      +'<div class="application-grid">'+state.apps.map(a=>'<article class="application-card"><div class="app-head"><span class="app-icon">'+icon(a.icon)+'</span><span class="app-tag">'+esc(a.tag)+'</span></div>'
      +'<h3>'+esc(a.name)+'</h3><p>'+esc(a.desc)+'</p><div class="head-actions">'+btn('launch-app',icon('arrow')+' 打开应用',false,'data-id="'+a.id+'"')+btn('edit-app',icon('sliders')+' 配置',false,'data-id="'+a.id+'"')+'</div></article>').join('')+'</div></div>';
  }
  function renderUsers(){
    return '<div class="page-outer">'+pageHeader('ACCESS GOVERNANCE','用户与权限','统一维护部门成员与演示权限角色。',
      btn('add-user',icon('plus')+' 添加用户',true))
      +'<div class="metric-grid">'+metric('用户总数',String(state.users.length),'示例账号','users')+metric('启用用户',String(state.users.filter(u=>u.enabled).length),'已启用','check')+metric('部门数',String(new Set(state.users.map(u=>u.dept)).size),'组织结构','layers')+metric('管理员',String(state.users.filter(u=>u.role==='系统管理员').length),'演示角色','shield')+'</div>'
      +'<div class="table-surface"><table><thead><tr><th>姓名</th><th>所属部门</th><th>角色</th><th>账户状态</th><th>操作</th></tr></thead><tbody>'
      +state.users.map(u=>'<tr><td><strong>'+esc(u.name)+'</strong></td><td>'+esc(u.dept)+'</td><td>'+esc(u.role)+'</td><td>'+pill(u.enabled?'正常':'已禁用',u.enabled?'':'off')+'</td><td>'
      +'<button class="table-btn" data-action="edit-user" data-id="'+u.id+'">编辑</button><button class="table-btn" data-action="toggle-user" data-id="'+u.id+'">'+(u.enabled?'禁用':'启用')+'</button></td></tr>').join('')
      +'</tbody></table></div><p class="help-foot">'+icon('info')+' 切换角色仅用于演示菜单显示，真实权限必须由服务端执行。</p></div>';
  }
  function renderApi(){
    return '<div class="page-outer">'+pageHeader('API GATEWAY','API 接口管理','维护应用接入入口与接口使用概览。',
      btn('add-key',icon('plus')+' 创建演示密钥',true))
      +'<div class="metric-grid">'+metric('API 接入项',String(state.apiKeys.length),'本地示例','key')+metric('今日调用','12,468','演示统计','chart')+metric('成功率','99.8%','演示统计','target')+metric('平均延迟','240 ms','演示统计','activity')+'</div>'
      +'<div class="table-surface"><table><thead><tr><th>接入应用</th><th>密钥标识（模拟）</th><th>权限范围</th><th>状态</th><th>操作</th></tr></thead><tbody>'
      +state.apiKeys.map(k=>'<tr><td><strong>'+esc(k.name)+'</strong></td><td><code>'+esc(k.masked)+'</code></td><td>'+esc(k.scope)+'</td><td>'+pill(k.enabled?'启用':'停用',k.enabled?'':'off')+'</td>'
      +'<td><button class="table-btn" data-action="toggle-key" data-id="'+k.id+'">'+(k.enabled?'停用':'启用')+'</button><button class="table-btn" data-action="remove-key" data-id="'+k.id+'">撤销</button></td></tr>').join('')
      +'</tbody></table></div><p class="help-foot">'+icon('shield')+' 这里没有真实的 API 密钥，切勿将实际密钥提交到静态网站。</p></div>';
  }
  function renderAudit(){
    return '<div class="page-outer">'+pageHeader('AUDIT & COMPLIANCE','审计日志','查看演示操作记录和界面事件。',
      btn('clear-audit','清空演示记录',false))
      +'<div class="table-surface"><table><thead><tr><th>时间</th><th>操作者</th><th>操作行为</th><th>结果</th></tr></thead><tbody>'
      +state.audit.map(a=>'<tr><td>'+esc(a.time)+'</td><td>'+esc(a.operator)+'</td><td>'+esc(a.action)+'</td><td>'+pill(a.result)+'</td></tr>').join('')
      +'</tbody></table></div></div>';
  }
  function renderSettings(){
    return '<div class="page-outer">'+pageHeader('PLATFORM PREFERENCES','系统设置','根据使用习惯调整界面外观和本地演示配置。',
      btn('reset-data',icon('refresh')+' 重置演示数据',false))
      +'<div class="preferences-grid">'
      +surface('外观与交互','<div class="setting-row"><div><strong>主题模式</strong><small>深浅双色彩系统，可即时切换</small></div><div class="segmented">'
      +'<button data-action="set-theme" data-theme="dark" class="'+(state.theme==='dark'?'active':'')+'">深色</button><button data-action="set-theme" data-theme="light" class="'+(state.theme==='light'?'active':'')+'">浅色</button></div></div>'
      +'<div class="setting-row"><div><strong>交互动效</strong><small>支持减少动态效果与辅助功能</small></div><div class="segmented"><button data-action="set-motion" data-motion="on" class="'+(state.motion==='on'?'active':'')+'">开启</button><button data-action="set-motion" data-motion="off" class="'+(state.motion==='off'?'active':'')+'">关闭</button></div></div>'
      +'<div class="setting-row"><div><strong>全局搜索</strong><small>按 Ctrl + K 打开快捷面板</small></div>'+btn('command','试一试',false)+'</div>')
      +surface('工作空间与演示','<div class="setting-row"><div><strong>当前角色</strong><small>切换管理员和普通用户的演示菜单</small></div>'
      +'<select id="demo-role" aria-label="切换演示角色"><option '+(state.role==='管理员'?'selected':'')+'>管理员</option><option '+(state.role==='普通用户'?'selected':'')+'>普通用户</option></select></div>'
      +'<div class="setting-row"><div><strong>模型回答</strong><small>当前使用本地模拟回复，不发起网络请求</small></div>'+pill('演示模式','warning')+'</div>'
      +'<div class="setting-row"><div><strong>演示数据</strong><small>会话和设置保存在当前浏览器</small></div>'+btn('reset-data','恢复初始数据',false)+'</div>')+'</div>'
      +'<p class="help-foot">'+icon('info')+' 该项目为外观及交互原型，不含政府认证、审计后端、实际模型调用和权限执行。</p></div>';
  }
  function render(){
    if(!validPage(state.page))state.page='chat';
    applySettings();renderNav();
    let out;
    switch(state.page){
      case 'chat':out=renderChat();break;
      case 'workspace':out=renderWorkspace();break;
      case 'knowledge':out=renderKnowledge();break;
      case 'models':out=renderModels();break;
      case 'apps':out=renderApps();break;
      case 'monitor':out=renderMonitor();break;
      case 'users':out=renderUsers();break;
      case 'api':out=renderApi();break;
      case 'audit':out=renderAudit();break;
      case 'settings':out=renderSettings();break;
      default:out=renderChat();
    }
    $('view').innerHTML=out;
    $('view').classList.remove('page-transition');
    void $('view').offsetWidth;
    $('view').classList.add('page-transition');
    hydrateIcons();
    if(state.page==='chat'){
      const area=$('chat-stream');
      if(area&&state.selectedSession&&state.sessions.find(s=>s.id===state.selectedSession)?.messages.length)area.scrollTop=area.scrollHeight;
    }
  }
  function startNewSession(){
    stopStream(false);
    state.selectedSession=null;state.page='chat';persist();history.replaceState(null,'','#chat');render();const f=$('message-input');if(f)f.focus();
  }
  function sessionById(id){return state.sessions.find(s=>s.id===id)}
  function replyFor(text){
    if(/会议|纪要/.test(text))return '以下为会议纪要参考模板（模拟生成）：\n\n一、会议基本信息\n时间、地点、主持人、参会人员。\n\n二、讨论议题\n按照议程依次记录主要意见，突出形成的共识。\n\n三、议定事项\n明确任务内容、责任部门、完成时限和交付要求。\n\n四、后续跟进\n建立事项台账，定期更新进度。\n\n说明：这是前端模拟回答，正式材料请结合实际会议记录校对。';
    if(/政策|公开|法规/.test(text))return '可以按照以下框架研读政策材料：\n\n一、适用范围：识别文件适用对象、地域和有效期。\n\n二、核心规定：提炼关键职责、办理流程和具体要求。\n\n三、执行步骤：整理任务清单、责任主体和时间节点。\n\n四、风险核验：查看现行有效版本，核对保密与公开要求。\n\n提示：当前没有连接真实政策资料库，上述内容仅为结构化示例，不构成政策依据。';
    if(/数据|统计|表格/.test(text))return '建议使用“数据概览—重点指标—变化趋势—异常说明—行动建议”的分析结构。\n\n1. 核实统计口径、时间周期与缺失值。\n2. 选择数量、占比、同比等适合的指标。\n3. 使用简洁图表展示变化，而非堆砌全部字段。\n4. 对异常值标注原因与需要核查的数据来源。\n\n这是模拟分析方法，并未读取或处理真实表格。';
    if(/公文|通知|材料/.test(text))return '为提升公文整理效率，建议按照以下步骤操作：\n\n1. 明确发文目的、阅读对象及所需行动。\n2. 按“背景—事项—要求—落实”组织内容。\n3. 使用准确、简练、正式的表述。\n4. 检查时间、单位名称、附件和依据。\n\n以下为示例提示：请提供需要整理的非敏感文字，我可以协助拟定结构。当前为设计演示，尚未接入实际模型。';
    return '已收到您的问题：'+text.slice(0,55)+(text.length>55?'…':'')+'\n\n在清朗政务的设计演示中，可以体验会话管理、模型选择、知识库切换与动态响应反馈。\n\n当前页面尚未连接实际 AI 模型或内部业务系统，因此这里展示的是模拟回答。正式上线前，需要接入经授权的模型服务与受控知识库，并完成身份认证、权限管理和安全审计。';
  }
  function sendMessage(raw,reuse){
    const t=String(raw||'').trim();if(!t){toast('请输入对话内容');return}
    if(streamTimer)stopStream(true);
    let s=sessionById(state.selectedSession);
    if(!s){
      s={id:'s'+Date.now(),title:t.slice(0,21)+(t.length>21?'…':''),favorite:false,messages:[]};
      state.sessions.unshift(s);state.selectedSession=s.id;
    }
    if(!reuse)s.messages.push({role:'user',text:t});
    const ai={role:'ai',text:''};s.messages.push(ai);
    state.page='chat';persist();render();
    const area=$('chat-stream');
    if(!area)return;
    const last=area.querySelector('.conversation-feed .message:last-child .message-content');
    if(!last)return;
    last.id='stream-content';
    last.innerHTML='<span class="typing-dots"><i></i><i></i><i></i></span>';
    const btn=$('send-message');if(btn){btn.dataset.action='stop-output';btn.title='停止输出';btn.innerHTML=icon('stop')}
    streamSessionId=s.id;streamText='';streamTarget=replyFor(t);
    let i=0;
    streamTimer=setInterval(()=>{
      i=Math.min(streamTarget.length,i+6+Math.floor(Math.random()*5));
      streamText=streamTarget.slice(0,i);
      const msg=$('stream-content');if(msg){msg.textContent=streamText;area.scrollTop=area.scrollHeight}
      ai.text=streamText;
      if(i>=streamTarget.length){clearInterval(streamTimer);streamTimer=null;streamSessionId=null;persist();const button=$('send-message');if(button){button.dataset.action='send-message';button.title='发送消息';button.innerHTML=icon('arrowUp')}}
    },28);
  }
  function stopStream(notifyUser){
    if(!streamTimer)return;
    clearInterval(streamTimer);streamTimer=null;
    const s=sessionById(streamSessionId);
    if(s&&s.messages.length&&s.messages[s.messages.length-1].role==='ai')s.messages[s.messages.length-1].text=streamText+'\n\n（已停止模拟生成）';
    streamSessionId=null;persist();render();
    if(notifyUser)toast('已停止生成');
  }
  function toggleTheme(newTheme){state.theme=newTheme|| (state.theme==='dark'?'light':'dark');persist();render();toast('已切换为'+modeLabel())}
  function addAudit(action){state.audit.unshift({time:'11-20 '+new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false}),operator:'演示用户',action,result:'已完成'});state.audit=state.audit.slice(0,30)}
  function openOverlay(markup){
    lastFocused=document.activeElement;
    $('overlay-root').innerHTML='<div class="overlay" id="overlay" role="presentation">'+markup+'</div>';
    const root=$('overlay');root.addEventListener('click',e=>{if(e.target===root)closeOverlay()});
    const focus=root.querySelector('input,button');if(focus)focus.focus();
  }
  function closeOverlay(){
    $('overlay-root').innerHTML='';pendingModalSave=null;pendingConfirm=null;
    if(lastFocused&&document.contains(lastFocused))lastFocused.focus();
  }
  function formDialog(title,fields,onSave){
    pendingModalSave=onSave;
    const fieldsHtml=fields.map(f=>'<div class="field"><label for="f-'+f.key+'">'+esc(f.label)+'</label>'
      +(f.type==='select'?'<select id="f-'+f.key+'" data-field="'+f.key+'">'+f.options.map(o=>'<option '+(o===f.value?'selected':'')+'>'+esc(o)+'</option>').join('')+'</select>'
      :'<input data-field="'+f.key+'" id="f-'+f.key+'" type="text" maxlength="150" value="'+esc(f.value||'')+'" placeholder="'+esc(f.placeholder||'')+'" '+(f.required?'required':'')+'>')+'</div>').join('');
    openOverlay('<div class="dialog" role="dialog" aria-modal="true" aria-label="'+esc(title)+'"><div class="dialog-head"><h2>'+esc(title)+'</h2>'
      +'<button class="icon-btn" data-action="close-overlay" aria-label="关闭">'+icon('close')+'</button></div><form id="modal-form">'+fieldsHtml
      +'<div class="dialog-actions"><button type="button" class="small-button" data-action="close-overlay">取消</button><button type="submit" class="small-button primary">保存修改</button></div></form></div>');
    const form=$('modal-form');form.addEventListener('submit',e=>{
      e.preventDefault();const out={};form.querySelectorAll('[data-field]').forEach(input=>{out[input.dataset.field]=input.value.trim()});
      if(fields.some(f=>f.required&&!out[f.key])){toast('请填写所有必填信息');return}
      const handler=pendingModalSave;closeOverlay();if(handler)handler(out);persist();render();toast('修改已保存（本地演示）')
    })
  }
  function confirmDialog(title,description,onYes){
    pendingConfirm=onYes;
    openOverlay('<div class="dialog" role="alertdialog" aria-modal="true" aria-label="'+esc(title)+'"><div class="dialog-head"><h2>'+esc(title)+'</h2></div><p class="page-subtitle">'+esc(description)+'</p>'
      +'<div class="dialog-actions"><button class="small-button" data-action="close-overlay">取消</button><button class="small-button primary" data-action="confirm-yes">确认操作</button></div></div>');
  }
  function sessionMenu(id){
    const s=sessionById(id);if(!s)return;
    openOverlay('<div class="dialog" role="dialog" aria-modal="true" aria-label="会话管理"><div class="dialog-head"><h2>会话管理</h2><button class="icon-btn" data-action="close-overlay">'+icon('close')+'</button></div>'
      +'<p class="page-subtitle" style="margin-bottom:19px">'+esc(s.title)+'</p>'
      +'<div class="head-actions" style="flex-direction:column;align-items:stretch">'
      +btn('session-rename',icon('edit')+' 重命名会话',false,'data-id="'+id+'"')
      +btn('session-favorite',icon('star')+(s.favorite?' 取消收藏':' 收藏会话'),false,'data-id="'+id+'"')
      +btn('session-delete',icon('trash')+' 删除会话',false,'data-id="'+id+'"')+'</div></div>');
  }
  function openCommand(){
    commandQuery='';
    openOverlay('<div class="dialog command-dialog" role="dialog" aria-modal="true" aria-label="全局快捷搜索"><label class="command-input">'+icon('search')+'<input id="command-input" placeholder="搜索功能、工作页面或指令..." autocomplete="off" aria-label="搜索命令">'
      +'<kbd>ESC</kbd></label><div class="command-results" id="command-results">'+commandResults()+'</div>'
      +'<div class="command-bottom">按 Ctrl + K 随时打开 · 选择项目立即导航</div></div>');
  }
  function commandResults(){
    let items=pages.filter(p=>!p.admin||state.role==='管理员').filter(p=>(p.name+p.short).toLowerCase().includes(commandQuery.toLowerCase()));
    if(!items.length)return '<div class="empty-state">暂无匹配的功能</div>';
    return items.map(p=>'<button class="command-result" data-action="command-go" data-page="'+p.id+'">'+icon(p.icon)+'<span>'+esc(p.name)+'<span class="command-hint">跳转至工作空间 / '+esc(p.short)+'</span></span></button>').join('');
  }
  function handleAction(action,el){
    const id=el.dataset.id;
    switch(action){
      case 'navigate':setPage(el.dataset.page);break;
      case 'new-session':startNewSession();break;
      case 'open-session':stopStream(false);state.selectedSession=id;persist();render();break;
      case 'session-menu':sessionMenu(id);break;
      case 'session-rename':{
        const s=sessionById(id);closeOverlay();if(s)formDialog('重命名会话',[{key:'title',label:'会话标题',value:s.title,required:true}],o=>{s.title=o.title});break;
      }
      case 'session-favorite':{const s=sessionById(id);if(s)s.favorite=!s.favorite;closeOverlay();persist();render();toast('已更新收藏状态');break}
      case 'session-delete':closeOverlay();confirmDialog('删除会话','删除后无法在该浏览器的演示数据中恢复。',()=>{state.sessions=state.sessions.filter(s=>s.id!==id);if(state.selectedSession===id)state.selectedSession=null;persist();render()});break;
      case 'quick-prompt':{const f=$('message-input');if(f){f.value=el.dataset.prompt||'';f.focus()}break}
      case 'send-message':{const f=$('message-input');if(f){const t=f.value;f.value='';sendMessage(t,false)}break}
      case 'stop-output':stopStream(true);break;
      case 'toggle-history':$('chat-layout')?.classList.toggle('show-history');break;
      case 'toggle-context':state.contextOpen=!state.contextOpen;persist();render();break;
      case 'toggle-kb':state.kbEnabled=!state.kbEnabled;persist();render();toast(state.kbEnabled?'已开启知识库引用（演示）':'已关闭知识库引用');break;
      case 'toggle-deep':state.deepMode=!state.deepMode;persist();render();toast(state.deepMode?'已开启深度思考标记':'已关闭深度思考标记');break;
      case 'copy-message':{
        const s=sessionById(id),m=s&&s.messages[Number(el.dataset.idx)];
        if(!m)return;
        if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m.text).then(()=>toast('已复制回答')).catch(()=>toast('浏览器不允许复制'));
        else toast('当前浏览器不支持剪贴板复制');break;
      }
      case 'feedback':toast('感谢反馈，已记录在当前演示页面');break;
      case 'regenerate':{
        const s=sessionById(id);if(!s)return;
        const lastUser=[...s.messages].reverse().find(m=>m.role==='user');
        if(!lastUser)return;while(s.messages.length&&s.messages[s.messages.length-1].role==='ai')s.messages.pop();
        sendMessage(lastUser.text,true);break;
      }
      case 'refresh-stats':toast('演示指标已刷新');break;
      case 'period':toast('当前展示固定的演示时间范围');break;
      case 'add-knowledge':formDialog('创建知识库',[{key:'name',label:'知识库名称',required:true,placeholder:'例如：政策法规知识库'}],o=>{
        if(!state.knowledgeBases.includes(o.name))state.knowledgeBases.push(o.name);addAudit('创建演示知识库')});break;
      case 'upload-doc':$('knowledge-file')?.click();break;
      case 'doc-detail':{
        const d=state.docs.find(x=>x.id===id);if(d)formDialog('资料信息',[{key:'name',label:'资料名称',value:d.name,required:true},{key:'base',label:'所属知识库',value:d.base,required:true}],o=>Object.assign(d,o));break;
      }
      case 'delete-doc':confirmDialog('删除资料记录','仅从浏览器演示列表中删除，不涉及真实文件。',()=>{state.docs=state.docs.filter(x=>x.id!==id);persist();render()});break;
      case 'model-filter':state.modelFilter=el.dataset.filter;render();break;
      case 'add-model':formDialog('添加模型',[{key:'name',label:'模型名称',required:true},{key:'vendor',label:'接入提供方',value:'Ollama',required:true},{key:'type',label:'接入方式',type:'select',options:['本地部署','API 接入'],value:'本地部署'}],o=>{
        state.models.push({id:'m'+Date.now(),name:o.name,vendor:o.vendor,type:o.type,context:'32K',online:false,default:false});addAudit('新增模型 '+o.name)});break;
      case 'edit-model':{
        const m=state.models.find(x=>x.id===id);if(!m)return;
        formDialog('配置模型',[{key:'name',label:'模型名称',value:m.name,required:true},{key:'vendor',label:'接入服务',value:m.vendor,required:true},{key:'context',label:'上下文长度',value:m.context}],o=>Object.assign(m,o));break;
      }
      case 'toggle-model':{
        const m=state.models.find(x=>x.id===id);if(!m)return;m.online=!m.online;addAudit('更新模型状态：'+m.name);persist();render();toast('模型状态仅作本地模拟');break;
      }
      case 'set-default':{
        const m=state.models.find(x=>x.id===id);if(!m)return;
        state.models.forEach(x=>x.default=x.id===id);state.selectedModel=m.name;persist();render();toast('默认模型已更新（演示）');break;
      }
      case 'launch-app':{
        const a=state.apps.find(x=>x.id===id);state.page='chat';state.selectedSession=null;render();const input=$('message-input');
        if(input){input.value='请使用“'+(a?a.name:'智能助手')+'”辅助我完成工作。';input.focus()}break;
      }
      case 'add-app':formDialog('创建智能应用',[{key:'name',label:'应用名称',required:true},{key:'desc',label:'应用用途',required:true}],o=>{
        state.apps.push({id:'a'+Date.now(),name:o.name,desc:o.desc,icon:'spark',tag:'CUSTOM'})});break;
      case 'edit-app':{const a=state.apps.find(x=>x.id===id);if(a)formDialog('配置智能应用',[{key:'name',label:'应用名称',value:a.name,required:true},{key:'desc',label:'用途描述',value:a.desc,required:true}],o=>Object.assign(a,o));break}
      case 'add-user':formDialog('添加演示用户',[{key:'name',label:'姓名',required:true},{key:'dept',label:'所属部门',required:true},{key:'role',label:'角色',type:'select',options:['普通用户','业务人员','单位管理员','系统管理员'],value:'普通用户'}],o=>{
        state.users.push({id:'u'+Date.now(),name:o.name,dept:o.dept,role:o.role,enabled:true});addAudit('新增演示用户')});break;
      case 'edit-user':{const u=state.users.find(x=>x.id===id);if(u)formDialog('编辑演示用户',[{key:'name',label:'姓名',value:u.name,required:true},{key:'dept',label:'所属部门',value:u.dept,required:true},{key:'role',label:'角色',type:'select',options:['普通用户','业务人员','单位管理员','系统管理员'],value:u.role}],o=>Object.assign(u,o));break}
      case 'toggle-user':{const u=state.users.find(x=>x.id===id);if(!u)return;u.enabled=!u.enabled;persist();render();toast('演示用户状态已调整');break}
      case 'add-key':formDialog('创建模拟 API 接入项',[{key:'name',label:'应用名称',required:true},{key:'scope',label:'使用范围',value:'对话',required:true}],o=>{
        state.apiKeys.push({id:'k'+Date.now(),name:o.name,scope:o.scope,masked:'sk-demo-••••••'+Math.random().toString(16).slice(2,6).toUpperCase(),enabled:true})});break;
      case 'toggle-key':{const k=state.apiKeys.find(x=>x.id===id);if(k)k.enabled=!k.enabled;persist();render();toast('模拟密钥状态已更新');break}
      case 'remove-key':confirmDialog('撤销演示密钥','仅删除本地模拟密钥条目。',()=>{state.apiKeys=state.apiKeys.filter(k=>k.id!==id);persist();render()});break;
      case 'clear-audit':confirmDialog('清空演示日志','此操作会清除浏览器保存的演示日志。',()=>{state.audit=[];persist();render()});break;
      case 'reset-data':confirmDialog('恢复初始演示数据','当前浏览器保存的会话与配置将恢复至初始状态。',()=>{state=structuredClone(defaults);historyQuery='';documentQuery='';persist();render()});break;
      case 'set-theme':toggleTheme(el.dataset.theme);break;
      case 'set-motion':state.motion=el.dataset.motion;persist();render();toast('动效偏好已保存');break;
      case 'command':openCommand();break;
      case 'command-go':{const page=el.dataset.page;closeOverlay();setPage(page);break}
      case 'close-overlay':closeOverlay();break;
      case 'confirm-yes':{const callback=pendingConfirm;closeOverlay();if(callback)callback();toast('操作完成（本地演示）');break}
    }
  }
  document.addEventListener('click',e=>{
    const node=e.target.closest('[data-action]');if(node)handleAction(node.dataset.action,node);
  });
  document.addEventListener('input',e=>{
    if(e.target.id==='history-filter'){
      historyQuery=e.target.value;$('conversation-list').innerHTML=sessionList();
    }
    if(e.target.id==='document-filter'){
      documentQuery=e.target.value;$('document-rows').innerHTML=docsRows(state.docs.filter(d=>(d.name+d.base).toLowerCase().includes(documentQuery.toLowerCase())));
    }
    if(e.target.id==='command-input'){
      commandQuery=e.target.value;$('command-results').innerHTML=commandResults();
    }
    if(e.target.id==='temperature'){
      state.temperature=parseFloat(e.target.value);const t=$('temperature-value');if(t)t.textContent=Number(state.temperature).toFixed(1);persist();
    }
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='chat-model'){state.selectedModel=e.target.value;persist();render();toast('已切换当前对话模型（演示）')}
    if(e.target.id==='max-tokens'){state.maxTokens=e.target.value;persist()}
    if(e.target.id==='demo-role'){state.role=e.target.value;state.page='settings';persist();render();toast('已切换演示角色')}
    if(e.target.id==='chat-files'){
      pendingAttachments=[...e.target.files].map(f=>({name:f.name,size:f.size}));const chips=$('file-chips');if(chips)chips.innerHTML=pendingAttachments.map(f=>'<span class="attachment-chip">'+icon('file')+esc(f.name)+'</span>').join('');
      toast('已选择 '+pendingAttachments.length+' 个本地文件。当前未上传或分析内容。');
    }
    if(e.target.id==='knowledge-file'){
      const list=[...e.target.files];list.forEach(f=>state.docs.unshift({id:'d'+Date.now()+Math.random().toString(16).slice(2,5),name:f.name,base:state.knowledgeBases[0],kind:(f.name.split('.').pop()||'FILE').toUpperCase(),size:(f.size/1024/1024).toFixed(2)+' MB',status:'待处理',date:new Date().toISOString().slice(0,10)}));
      addAudit('选择演示文档 '+list.length+' 份');persist();render();toast('文件信息已记录；真实文件尚未上传或解析');
    }
  });
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand();return}
    if(e.key==='Escape'&&$('overlay')){closeOverlay();return}
    if(e.key==='Enter'&&e.target.id==='message-input'&&!e.shiftKey&&!e.isComposing){e.preventDefault();const t=e.target.value;e.target.value='';sendMessage(t,false)}
    if(e.key==='Enter'&&e.target.id==='command-input'){
      const first=$('command-results')?.querySelector('[data-action=command-go]');if(first)first.click();
    }
  });
  $('toggle-nav').addEventListener('click',()=>{state.collapsed=!state.collapsed;persist();applySettings()});
  $('theme-toggle').addEventListener('click',()=>toggleTheme());
  $('notification').addEventListener('click',()=>toast('暂无新通知 · 当前是视觉设计演示'));
  $('account-menu').addEventListener('click',()=>{state.page='settings';render()});
  $('command-open').addEventListener('click',openCommand);
  window.addEventListener('hashchange',()=>{const next=location.hash.replace('#','');if(validPage(next)){state.page=next;render()}});
  window.addEventListener('error',e=>{
    const view=$('view');
    if(view&&view.querySelector('.initial-state'))view.innerHTML='<div class="initial-state"><h1>页面初始化异常</h1><p>请刷新页面或清除当前网站的演示数据后重试。</p></div>';
    console.error('Qinglang preview error',e.message);
  });
  const hash=location.hash.slice(1);if(validPage(hash))state.page=hash;
  if(!state.models.some(m=>m.name===state.selectedModel&&m.online))state.selectedModel=state.models.find(m=>m.online)?.name||state.models[0]?.name;
  render();
})();
