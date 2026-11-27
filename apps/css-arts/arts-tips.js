/* 实用技巧类 · 掘金 CSS 收藏夹 */
(function () {
  var U = 'https://juejin.cn/post/';

  window.ARTS.push({
    id: 't118', n: 118, cat: '实用技巧', title: '用 CSS 创造艺术',
    desc: 'conic-gradient + mix-blend-mode 叠加，纯 CSS 画出渐变艺术图案。',
    tags: ['conic-gradient', 'blend'], url: U + '6922257014840098830',
    html: `<style>
      .t118-box{width:100%;height:190px;background:#0a0a12;display:flex;align-items:center;justify-content:center}
      .t118-art{width:150px;height:150px;border-radius:30px;
        background:repeating-conic-gradient(from 0deg at 50% 50%,#f472b6 0 8deg,#818cf8 8deg 16deg,#34d399 16deg 24deg,#0f172a 24deg 32deg);
        box-shadow:0 0 50px rgba(129,140,248,.4);animation:t118rot 18s linear infinite}
      @keyframes t118rot{to{transform:rotate(360deg)}}
    </style>
    <div class="t118-box"><div class="t118-art"></div></div>`
  });

  window.ARTS.push({
    id: 't119', n: 119, cat: '实用技巧', title: 'mask-image 渐变图标',
    desc: 'mask-image 让纯色背景裁成图标形状，再叠加渐变，做出炫酷渐变图标。',
    tags: ['mask-image', 'gradient'], url: U + '6919683863492952072',
    html: `<style>
      .t119-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:22px}
      .t119-icon{width:54px;height:54px;background:linear-gradient(135deg,#34d399,#818cf8,#f472b6);
        -webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
        -webkit-mask-position:center;mask-position:center}
      .t119-heart{-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M12 21s-9-6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z"/%3E%3C/svg%3E');
        mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M12 21s-9-6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z"/%3E%3C/svg%3E')}
      .t119-star{-webkit-mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/%3E%3C/svg%3E');
        mask-image:url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"/%3E%3C/svg%3E')}
    </style>
    <div class="t119-box"><div class="t119-icon t119-heart"></div><div class="t119-icon t119-star"></div></div>`
  });

  window.ARTS.push({
    id: 't117', n: 117, cat: '实用技巧', title: 'clamp() 响应式字号',
    desc: 'clamp(最小, 弹性, 最大) 一行代码搞定流式排版，无需媒体查询。',
    tags: ['clamp', 'responsive'], url: U + '6923180396305711118',
    init: function (el) {
      var r = el.querySelector('input'), o = el.querySelector('.t117-v');
      function up() { o.style.fontSize = 'clamp(16px,' + r.value + 'vw,48px)'; el.querySelector('.t117-code').textContent = 'clamp(16px, ' + r.value + 'vw, 48px)'; }
      r.addEventListener('input', up); up();
    },
    html: `<style>
      .t117-box{width:100%;height:190px;background:#0d1220;display:flex;flex-direction:column;
        align-items:center;justify-content:center;gap:12px;padding:14px}
      .t117-v{font:800 30px sans-serif;color:#34d399;white-space:nowrap;transition:font-size .2s}
      .t117-code{font:11px monospace;color:#7f9c90}
      .t117-in{width:180px;accent-color:#818cf8}
    </style>
    <div class="t117-box"><div class="t117-v">响应式标题</div>
      <div class="t117-code">clamp(16px, 3vw, 48px)</div>
      <input class="t117-in" type="range" min="1" max="6" step="0.1" value="3" /></div>`
  });

  window.ARTS.push({
    id: 't108', n: 108, cat: '实用技巧', title: '文字装饰新特性',
    desc: 'text-decoration 的 color/thickness 与 text-emphasis 做出彩色下划线和强调点。',
    tags: ['text-decoration', 'text-emphasis'], url: U + '6947866495309316104',
    html: `<style>
      .t108-box{width:100%;height:190px;background:#0d1220;display:flex;flex-direction:column;
        align-items:center;justify-content:center;gap:16px}
      .t108-a{font:600 20px sans-serif;color:#e6f5ef;text-decoration-line:underline;
        text-decoration-color:#34d399;text-decoration-thickness:4px;text-underline-offset:6px}
      .t108-b{font:600 18px sans-serif;color:#c4b5fd;text-emphasis:'•';text-emphasis-color:#f472b6;text-emphasis-position:under right}
      .t108-c{font:600 18px sans-serif;color:#93c5fd;text-decoration:line-through;
        text-decoration-color:#f87171;text-decoration-style:wavy}
    </style>
    <div class="t108-box"><div class="t108-a">彩色下划线</div><div class="t108-b">重点强调文字</div><div class="t108-c">波浪删除线</div></div>`
  });

  window.ARTS.push({
    id: 't110', n: 110, cat: '实用技巧', title: 'box-shadow 的妙用',
    desc: '多重 box-shadow 叠加做出立体拟物按钮、内阴影与霓虹描边。',
    tags: ['box-shadow', 'neumorphism'], url: U + '6944761771152375810',
    html: `<style>
      .t110-box{width:100%;height:190px;background:#e0e5ec;display:flex;align-items:center;justify-content:center;gap:22px}
      .t110-neu{width:70px;height:70px;border-radius:18px;background:#e0e5ec;
        box-shadow:9px 9px 16px #a3b1c6,-9px -9px 16px #ffffff;display:flex;align-items:center;justify-content:center;
        color:#64748b;font:700 22px sans-serif}
      .t110-neu:active{box-shadow:inset 7px 7px 14px #a3b1c6,inset -7px -7px 14px #ffffff}
      .t110-glow{width:70px;height:70px;border-radius:50%;background:#1e293b;
        box-shadow:0 0 0 4px #34d399,0 0 22px 6px rgba(52,211,153,.6)}
    </style>
    <div class="t110-box"><div class="t110-neu">3D</div><div class="t110-glow"></div></div>`
  });

  window.ARTS.push({
    id: 't103', n: 103, cat: '实用技巧', title: '提取图片主题色',
    desc: '两张图叠放：底层模糊放大当背景，上层原图，得到图片主题色氛围。',
    tags: ['filter', 'blur'], url: U + '6960850759759953957',
    html: `<style>
      .t103-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center}
      .t103-card{width:260px;height:130px;border-radius:14px;position:relative;overflow:hidden;
        display:flex;align-items:flex-end;padding:14px;box-shadow:0 8px 24px rgba(0,0,0,.4)}
      .t103-bg{position:absolute;inset:-30px;background:conic-gradient(from 45deg,#f97316,#ec4899,#8b5cf6,#06b6d4,#f97316);
        filter:blur(28px);z-index:0}
      .t103-fg{position:absolute;inset:0;z-index:1;
        background:linear-gradient(135deg,rgba(249,115,22,.85),rgba(139,92,246,.85))}
      .t103-t{position:relative;z-index:2;color:#fff;font:700 16px sans-serif;text-shadow:0 2px 8px rgba(0,0,0,.5)}
    </style>
    <div class="t103-box"><div class="t103-card"><div class="t103-bg"></div><div class="t103-fg"></div>
      <div class="t103-t">主题色氛围</div></div></div>`
  });

  window.ARTS.push({
    id: 't116', n: 116, cat: '实用技巧', title: 'transition 技巧与细节',
    desc: 'transition 配合 cubic-bezier 弹性曲线与逐项延迟，做出精致的交互反馈。',
    tags: ['transition', 'cubic-bezier'], url: U + '6924114612799406093',
    init: function (el) {
      var b = el.querySelector('.t116-btn');
      b.addEventListener('mouseenter', function () { b.classList.add('h'); });
      b.addEventListener('mouseleave', function () { b.classList.remove('h'); });
    },
    html: `<style>
      .t116-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center}
      .t116-btn{padding:14px 28px;border:0;border-radius:30px;cursor:pointer;color:#fff;
        font:600 13px sans-serif;background:#7c3aed;
        transition:transform .5s cubic-bezier(.68,-.6,.27,1.6),box-shadow .4s,background .4s}
      .t116-btn.h{transform:scale(1.15) rotate(-3deg);background:#ec4899;box-shadow:0 12px 30px rgba(236,72,153,.5)}
    </style>
    <div class="t116-box"><button class="t116-btn">弹性悬停 ✦</button></div>`
  });

  window.ARTS.push({
    id: 't85', n: 85, cat: '实用技巧', title: '炫酷图片加载',
    desc: '图片未加载时用渐变骨架屏 + 遮罩扫光，加载完成后淡入，体验更高级。',
    tags: ['skeleton', 'loading'], url: U + '7122256732940107813',
    html: `<style>
      .t85-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center}
      .t85-img{width:240px;height:120px;border-radius:12px;position:relative;overflow:hidden;
        background:linear-gradient(100deg,#1e293b 30%,#334155 50%,#1e293b 70%);background-size:200%;
        animation:t85shine 1.8s linear infinite}
      .t85-img::after{content:"图片加载中...";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
        color:#64748b;font:12px monospace}
      @keyframes t85shine{to{background-position:-200%}}
    </style>
    <div class="t85-box"><div class="t85-img"></div></div>`
  });

  window.ARTS.push({
    id: 't89', n: 89, cat: '实用技巧', title: '贝塞尔曲线可视化',
    desc: 'cubic-bezier 四条控制线实时绘制缓动曲线，直观理解过渡动画的速度变化。',
    tags: ['cubic-bezier', 'svg'], url: U + '7000525748578549774',
    html: `<style>
      .t89-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:16px}
      .t89-svg{background:#111827;border-radius:10px}
      .t89-dot{width:24px;height:24px;border-radius:50%;background:#f472b6;transition:left 1s cubic-bezier(.68,-.6,.27,1.6)}
      .t89-track{width:120px;height:24px;background:#1e293b;border-radius:12px;position:relative;overflow:hidden}
      .t89-track:hover .t89-dot{left:calc(100% - 24px)}
    </style>
    <div class="t89-box">
      <svg class="t89-svg" width="130" height="130" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="#334155"/>
        <path d="M10 90 C28 -8 72 108 90 10" fill="none" stroke="#34d399" stroke-width="2"/>
        <line x1="10" y1="90" x2="28" y2="-8" stroke="#818cf8" stroke-dasharray="3"/>
        <line x1="90" y1="10" x2="72" y2="108" stroke="#818cf8" stroke-dasharray="3"/>
      </svg>
      <div><div class="t89-track"><div class="t89-dot" style="left:0"></div></div>
      <div style="color:#7f9c90;font:10px monospace;margin-top:8px">悬停轨道 →</div></div>
    </div>`
  });
})();
