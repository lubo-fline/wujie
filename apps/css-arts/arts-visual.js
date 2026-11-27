/* 视觉特效类 · 掘金 CSS 收藏夹 */
(function () {
  var U = 'https://juejin.cn/post/';

  window.ARTS.push({
    id: 'v79', n: 79, cat: '视觉特效', title: '纯 CSS 赛博朋克风格',
    desc: '霓虹发光标题 + 扫描线 + 故障闪烁 + clip-path 斜切按钮，深夜科技感拉满。',
    tags: ['neon', 'clip-path', 'animation'], url: U + '7126890428451782663',
    html: `<style>
      .v79-box{position:relative;width:100%;height:190px;background:linear-gradient(160deg,#0a0e27,#1a0b2e 60%,#06121f);
        display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;overflow:hidden}
      .v79-box::before{content:"";position:absolute;inset:0;pointer-events:none;
        background:repeating-linear-gradient(0deg,transparent 0 2px,rgba(0,255,231,.05) 2px 4px)}
      .v79-title{font:800 34px/1 'Arial Black',sans-serif;letter-spacing:6px;color:#fff;
        text-shadow:0 0 6px #0ff,0 0 18px #0ff,0 0 38px #08f,2px 2px 0 #f0f,-2px -2px 0 #0ff;
        animation:v79glitch 2.6s infinite}
      .v79-sub{font:600 11px/1 monospace;letter-spacing:5px;color:#ff2d95;text-shadow:0 0 8px #ff2d95}
      .v79-btn{clip-path:polygon(12% 0,100% 0,88% 100%,0 100%);padding:9px 30px;border:0;cursor:pointer;
        font:700 12px/1 monospace;letter-spacing:3px;color:#04121a;
        background:linear-gradient(90deg,#0ff,#7df);box-shadow:0 0 20px rgba(0,255,255,.5)}
      @keyframes v79glitch{0%,92%,100%{transform:translate(0);opacity:1}94%{transform:translate(-3px,1px);opacity:.7}
        96%{transform:translate(3px,-1px)}98%{transform:translate(-2px,0)}}
    </style>
    <div class="v79-box"><div class="v79-title">CYBER</div><div class="v79-sub">NEON CITY 2077</div>
      <button class="v79-btn">ENTER →</button></div>`
  });

  window.ARTS.push({
    id: 'v97', n: 97, cat: '视觉特效', title: '霓虹灯文字',
    desc: '多层 text-shadow 叠加出真实霓虹发光，模拟灯管闪烁与熄灭瞬间。',
    tags: ['text-shadow', 'glow'], url: U + '6966108618299015182',
    html: `<style>
      .v97-box{width:100%;height:190px;background:#05060a;display:flex;align-items:center;justify-content:center;
        flex-direction:column;gap:18px}
      .v97-neon{font:700 42px/1.2 Georgia,serif;color:#fff;letter-spacing:3px;
        text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 122px #0fa;
        animation:v97flick 3s infinite}
      .v97-neon2{font:700 22px/1 Georgia,serif;color:#fff;
        text-shadow:0 0 6px #fff,0 0 12px #f0f,0 0 30px #f0f,0 0 60px #f0f;animation:v97flick 2.2s .5s infinite}
      @keyframes v97flick{0%,18%,22%,25%,53%,57%,100%{opacity:1;text-shadow:0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 122px #0fa}
        19%,24%,55%{opacity:.35;text-shadow:none}}
    </style>
    <div class="v97-box"><div class="v97-neon">NEON</div><div class="v97-neon2">glow effect</div></div>`
  });

  window.ARTS.push({
    id: 'v94', n: 94, cat: '视觉特效', title: '流光按钮',
    desc: 'background-size 400% 配合渐变位移动画，实现金属流光循环扫过按钮。',
    tags: ['gradient', 'background-position'], url: U + '6971340450741518344',
    html: `<style>
      .v94-box{width:100%;height:190px;background:#0b0d16;display:flex;align-items:center;justify-content:center}
      .v94-btn{width:220px;height:64px;line-height:64px;text-align:center;border-radius:40px;cursor:pointer;
        color:#fff;font:700 18px/64px 'Arial',sans-serif;letter-spacing:3px;text-transform:uppercase;
        background:linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);background-size:400%;
        animation:v94flow 6s linear infinite;box-shadow:0 8px 30px rgba(244,65,165,.35)}
      @keyframes v94flow{0%{background-position:0%}100%{background-position:400%}}
    </style>
    <div class="v94-box"><div class="v94-btn">FLOW</div></div>`
  });

  window.ARTS.push({
    id: 'v99', n: 99, cat: '视觉特效', title: '炫光倒影按钮',
    desc: '-webkit-box-reflect 做镜面倒影，配合渐变流光，做出玻璃质感炫光按钮。',
    tags: ['box-reflect', 'gradient'], url: U + '6966482130020859912',
    html: `<style>
      .v99-box{width:100%;height:190px;background:radial-gradient(circle at 50% 40%,#1b2140,#080a14 70%);
        display:flex;align-items:center;justify-content:center}
      .v99-btn{width:190px;height:56px;border-radius:30px;cursor:pointer;position:relative;overflow:hidden;
        font:700 15px/56px 'Arial',sans-serif;letter-spacing:4px;text-align:center;color:#0a0a14;
        background:linear-gradient(120deg,#ffd76e,#ff7ab6,#7ad7ff,#ffd76e);background-size:300%;
        -webkit-box-reflect:below 6px linear-gradient(transparent 55%,rgba(255,255,255,.35));
        animation:v99flow 5s linear infinite;box-shadow:0 0 25px rgba(255,180,120,.4)}
      @keyframes v99flow{0%{background-position:0%}100%{background-position:300%}}
    </style>
    <div class="v99-box"><div class="v99-btn">SHINE</div></div>`
  });

  window.ARTS.push({
    id: 'v100', n: 100, cat: '视觉特效', title: '光影黑魔法',
    desc: '伪元素 inherit 继承父级背景 + blur/brightness 滤镜，做出底部发光重影。',
    tags: ['filter', 'pseudo-element'], url: U + '6965488051695353886',
    html: `<style>
      .v100-box{width:100%;height:190px;background:#0a0a0f;display:flex;align-items:center;justify-content:center;gap:26px}
      .v100-av{position:relative;width:96px;height:96px;border-radius:50%;
        background:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop stop-color="%236ee7b7"/%3E%3Cstop offset="1" stop-color="%238b5cf6"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="96" height="96" rx="48" fill="url(%23g)"/%3E%3Ccircle cx="48" cy="38" r="16" fill="%23ffffff" opacity=".8"/%3E%3Cpath d="M20 88 Q48 56 76 88" fill="%23ffffff" opacity=".8"/%3E%3C/svg%3E') center/cover;
        box-shadow:inset 0 0 0 3px rgba(255,255,255,.5)}
      .v100-av::after{content:"";position:absolute;top:14%;left:0;width:100%;height:100%;border-radius:50%;
        background:inherit;filter:blur(12px) brightness(90%) opacity(.85);z-index:-1}
      .v100-txt{color:#9fe8c8;font:600 13px/1.7 monospace}
    </style>
    <div class="v100-box"><div class="v100-av"></div><div class="v100-txt">background:inherit<br>+ filter:blur<br>= glow ✨</div></div>`
  });

  window.ARTS.push({
    id: 'v91', n: 91, cat: '视觉特效', title: 'Beautiful 渐变按钮',
    desc: '伪元素做渐变边框，hover 时边框旋转 + 发光扩散，纯 CSS 高级按钮。',
    tags: ['pseudo-element', 'hover'], url: U + '6999127555085172767',
    html: `<style>
      .v91-box{width:100%;height:190px;background:#0b1020;display:flex;align-items:center;justify-content:center;gap:16px}
      .v91-btn{position:relative;padding:13px 30px;border:0;cursor:pointer;border-radius:10px;color:#fff;
        font:600 13px/1 'Arial',sans-serif;letter-spacing:2px;background:#141b34;overflow:hidden;z-index:0}
      .v91-btn::before{content:"";position:absolute;inset:-3px;z-index:-2;border-radius:13px;
        background:conic-gradient(from 0deg,#6ee7b7,#818cf8,#f472b6,#6ee7b7)}
      .v91-btn::after{content:"";position:absolute;inset:2px;z-index:-1;border-radius:8px;background:#141b34}
      .v91-btn:hover{box-shadow:0 0 26px rgba(129,140,248,.6)}
      .v91-btn:hover::before{animation:v91rot 2.4s linear infinite}
      @keyframes v91rot{to{transform:rotate(360deg)}}
    </style>
    <div class="v91-box"><button class="v91-btn">HOVER ME</button></div>`
  });
})();
