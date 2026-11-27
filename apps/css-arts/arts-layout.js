/* 布局与图形类 · 掘金 CSS 收藏夹 */
(function () {
  var U = 'https://juejin.cn/post/';

  window.ARTS.push({
    id: 'l83', n: 83, cat: '布局与图形', title: 'Flex 色子布局',
    desc: '用 Flex 的 justify-content / align-items 组合，6 种点数布局一网打尽。',
    tags: ['flexbox', 'layout'], url: U + '7112451678615371790',
    html: `<style>
      .l83-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:18px}
      .l83-face{width:74px;height:74px;border-radius:12px;background:#f8fafc;padding:11px;display:flex;gap:6px;
        box-shadow:0 6px 18px rgba(0,0,0,.4)}
      .l83-pip{width:16px;height:16px;border-radius:50%;background:#1e293b;flex:none}
      .l83-f1{align-items:center;justify-content:center}
      .l83-f2{justify-content:space-between;flex-direction:column;align-items:flex-start}
      .l83-f2 .l83-pip:last-child{align-self:flex-end}
      .l83-f3{justify-content:space-between;flex-direction:column}
      .l83-f3 .l83-pip:nth-child(2){align-self:center}.l83-f3 .l83-pip:last-child{align-self:flex-end}
      .l83-f4{flex-wrap:wrap;align-content:space-between;justify-content:space-between}
      .l83-f5{flex-wrap:wrap;align-content:space-between;justify-content:space-between}
      .l83-f5 .l83-pip:nth-child(3){align-self:center}
      .l83-f6{flex-wrap:wrap;align-content:space-between;justify-content:space-between}
    </style>
    <div class="l83-box">
      <div class="l83-face l83-f1"><i class="l83-pip"></i></div>
      <div class="l83-face l83-f2"><i class="l83-pip"></i><i class="l83-pip"></i></div>
      <div class="l83-face l83-f3"><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i></div>
      <div class="l83-face l83-f4"><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i></div>
      <div class="l83-face l83-f5"><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i></div>
      <div class="l83-face l83-f6"><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i><i class="l83-pip"></i></div>
    </div>`
  });

  window.ARTS.push({
    id: 'l95', n: 95, cat: '布局与图形', title: 'conic-gradient 饼图',
    desc: '一个 div + conic-gradient 画出饼图，配合 CSS 变量动态改比例，无需 Canvas。',
    tags: ['conic-gradient', 'chart'], url: U + '6971325956409524261',
    html: `<style>
      .l95-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:24px}
      .l95-pie{width:130px;height:130px;border-radius:50%;
        background:conic-gradient(#34d399 0 45%,#818cf8 45% 75%,#f472b6 75% 100%);
        box-shadow:0 0 30px rgba(52,211,153,.2)}
      .l95-legend{color:#9fb8ad;font:12px/2 monospace}
      .l95-legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:7px}
    </style>
    <div class="l95-box"><div class="l95-pie"></div>
      <div class="l95-legend"><div><i style="background:#34d399"></i>A · 45%</div>
      <div><i style="background:#818cf8"></i>B · 30%</div><div><i style="background:#f472b6"></i>C · 25%</div></div></div>`
  });

  window.ARTS.push({
    id: 'l111', n: 111, cat: '布局与图形', title: 'CSS 优惠券技巧',
    desc: 'radial-gradient 挖出两侧半圆缺口，用 mask 做出真实优惠券的锯齿边。',
    tags: ['mask', 'radial-gradient'], url: U + '6945023989555134494',
    html: `<style>
      .l111-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center}
      .l111-t{width:300px;height:96px;display:flex;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.4)}
      .l111-l{width:190px;background:linear-gradient(135deg,#f97316,#ef4444);display:flex;flex-direction:column;
        align-items:center;justify-content:center;color:#fff;position:relative}
      .l111-l b{font:800 30px/1 Arial}.l111-l span{font:11px/1.6 sans-serif;opacity:.9}
      .l111-r{flex:1;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;
        color:#dc2626;font:600 12px/1.8 sans-serif;
        background-image:radial-gradient(circle at 0 12px,transparent 9px,#fff 10px),
          radial-gradient(circle at 0 calc(100% - 12px),transparent 9px,#fff 10px)}
      .l111-r b{font-size:14px}
    </style>
    <div class="l111-box"><div class="l111-t"><div class="l111-l"><b>¥50</b><span>满 199 可用</span></div>
      <div class="l111-r"><b>限时券</b><span>12.01-12.31</span></div></div></div>`
  });

  window.ARTS.push({
    id: 'l107', n: 107, cat: '布局与图形', title: 'N 种三角形画法',
    desc: 'border 法、clip-path 法、conic-gradient 法——同一三角形的多种实现。',
    tags: ['border', 'clip-path'], url: U + '6950081305560219679',
    html: `<style>
      .l107-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:34px}
      .l107-item{display:flex;flex-direction:column;align-items:center;gap:8px;color:#7f9c90;font:10px monospace}
      .l107-b1{width:0;height:0;border-left:34px solid transparent;border-right:34px solid transparent;border-bottom:58px solid #34d399}
      .l107-b2{width:68px;height:58px;background:#818cf8;clip-path:polygon(50% 0,100% 100%,0 100%)}
      .l107-b3{width:68px;height:58px;background:conic-gradient(from -30deg at 50% 100%,transparent 0 60deg,#f472b6 0 120deg,transparent 0)}
    </style>
    <div class="l107-box">
      <div class="l107-item"><div class="l107-b1"></div>border 法</div>
      <div class="l107-item"><div class="l107-b2"></div>clip-path 法</div>
      <div class="l107-item"><div class="l107-b3"></div>conic 法</div>
    </div>`
  });

  window.ARTS.push({
    id: 'l112', n: 112, cat: '布局与图形', title: '不规则边框 / 箭头按钮',
    desc: 'clip-path + 伪元素做出缺角、箭头、对话框气泡等不规则边框。',
    tags: ['clip-path', 'border'], url: U + '6944892753402822686',
    html: `<style>
      .l112-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center;gap:22px;flex-wrap:wrap}
      .l112-btn{padding:12px 22px;color:#fff;font:600 12px sans-serif;position:relative;cursor:pointer}
      .l112-a{background:#34d399;clip-path:polygon(0 0,100% 0,100% 65%,88% 100%,0 100%)}
      .l112-b{background:#818cf8;clip-path:polygon(10px 0,100% 0,100% 100%,10px 100%,0 50%)}
      .l112-bubble{background:#f472b6;border-radius:12px;padding:12px 18px;color:#fff;font:12px sans-serif;position:relative}
      .l112-bubble::after{content:"";position:absolute;bottom:-8px;left:24px;border:9px solid transparent;
        border-top-color:#f472b6;border-bottom:0}
    </style>
    <div class="l112-box">
      <div class="l112-btn l112-a">切角按钮</div>
      <div class="l112-btn l112-b">箭头按钮</div>
      <div class="l112-bubble">对话框气泡</div>
    </div>`
  });

  window.ARTS.push({
    id: 'l92', n: 92, cat: '布局与图形', title: 'CSS 3D 天空盒子',
    desc: '六个面用 transform 拼成 3D 立方体，perspective 营造裸眼 3D 天空盒效果。',
    tags: ['3d', 'transform-style'], url: U + '6997697496176820252',
    html: `<style>
      .l92-box{width:100%;height:190px;background:#070b16;display:flex;align-items:center;justify-content:center;
        perspective:520px;overflow:hidden}
      .l92-scene{width:100px;height:100px;position:relative;transform-style:preserve-3d;
        animation:l92rot 12s linear infinite}
      .l92-face{position:absolute;width:100px;height:100px;display:flex;align-items:center;justify-content:center;
        font:700 22px monospace;color:#fff;border:2px solid rgba(255,255,255,.15);background:rgba(110,231,183,.16)}
      .l92-f1{transform:translateZ(50px)}.l92-f2{transform:rotateY(180deg) translateZ(50px)}
      .l92-f3{transform:rotateY(90deg) translateZ(50px)}.l92-f4{transform:rotateY(-90deg) translateZ(50px)}
      .l92-f5{transform:rotateX(90deg) translateZ(50px)}.l92-f6{transform:rotateX(-90deg) translateZ(50px)}
      @keyframes l92rot{to{transform:rotateX(360deg) rotateY(360deg)}}
    </style>
    <div class="l92-box"><div class="l92-scene">
      <div class="l92-face l92-f1">1</div><div class="l92-face l92-f2">2</div>
      <div class="l92-face l92-f3">3</div><div class="l92-face l92-f4">4</div>
      <div class="l92-face l92-f5">5</div><div class="l92-face l92-f6">6</div>
    </div></div>`
  });
})();
