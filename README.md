# 鼓浪屿 GULANGYU · 海上花园 / 音乐之岛

沉浸式景区介绍网站设计预览，采用电影感海岛影像、编辑式排版、滚动叙事与轻量交互动效。

## 在线预览

https://luoquan0.github.io/UItest/

## 页面结构

- 首页：全屏海岛黄昏影像、品牌标题、探索入口、滚动提示。
- 景区介绍：岛屿文化、历史国际社区、世界遗产信息。
- 必游景点：日光岩、菽庄花园、钢琴博物馆、历史建筑与海岸漫步。
- 游玩攻略：交互式四段慢游路线示意。
- 影像画廊：图片灯箱、前后切换。
- 游客服务：轮渡交通、票务预约、开放时间、游览须知提示弹窗。

## 交互

- 顶部导航随滚动切换状态，并高亮当前章节。
- 首屏视差、滚动进度条、滚动进入动画。
- 景点横向滑动。
- 路线节点切换对应介绍。
- 画廊图片放大、键盘方向键切换、Esc 关闭。
- 站内搜索与快捷跳转。
- 游客服务提示弹窗。
- 移动端导航菜单。
- 支持 prefers-reduced-motion。

## 本地运行

无需安装依赖。直接打开 `index.html`，或在项目目录执行：

```bash
python -m http.server 8000
```

访问 http://localhost:8000 。

## 图片来源与授权

页面照片来自 Wikimedia Commons，并在页面底部列出作者及许可：
- Gulangyu at dusk — 周流劲火，CC BY 2.5
- Gulangyu.jpg — Jakob Montrasio，CC BY 2.0
- Sunlight Rock 1 — H2v5o68z，CC0
- Shuzhuang garden — Bolobolo，Public Domain
- Gu Lang Yu Piano Museum 20161231 — xiquinhosilva，CC BY 2.0

照片由 Wikimedia Commons 外链加载，因此预览图片需要联网。页面自身 HTML/CSS/JS 不依赖第三方脚本或字体 CDN。

## 内容说明

这是景区介绍网站的概念设计预览，不是鼓浪屿官方运营网站。页面中关于开放时间、门票、轮渡班次等动态信息不做猜测，提示游客以官方渠道实时公告为准。路线为设计示意，不代表官方推荐线路或精确导航。

