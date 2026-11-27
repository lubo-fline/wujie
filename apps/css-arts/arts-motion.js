/* 动画动效类 · 掘金 CSS 收藏夹 */
(function () {
  var U = 'https://juejin.cn/post/';

  window.ARTS.push({
    id: 'm81', n: 81, cat: '动画动效', title: '超酷炫转场动画',
    desc: 'clip-path + transform 组合出圆形遮罩展开转场，鼠标悬停触发。',
    tags: ['clip-path', 'transition'], url: U + '7121531408778493989',
    init: function (el) {
      var box = el.querySelector('.m81-card');
      box.addEventListener('mouseenter', function () { box.classList.add('open'); });
      box.addEventListener('mouseleave', function () { box.classList.remove('open'); });
    },
    html: `<style>
      .m81-box{width:100%;height:190px;background:#0b1120;display:flex;align-items:center;justify-content:center}
      .m81-card{width:230px;height:130px;border-radius:14px;overflow:hidden;position:relative;cursor:pointer;
        background:linear-gradient(135deg,#1e3a8a,#0f766e)}
      .m81-back{position:absolute;inset:0;background:linear-gradient(135deg,#7c3aed,#db2777);
        clip-path:circle(0% at 50% 50%);transition:clip-path .7s cubic-bezier(.77,0,.18,1);
        display:flex;align-items:center;justify-content:center;color:#fff;font:700 18px sans-serif}
      .m81-card.open .m81-back{clip-path:circle(75% at 50% 50%)}
      .m81-front{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
        color:#a5f3fc;font:600 14px sans-serif}
    </style>
    <div class="m81-box"><div class="m81-card"><div class="m81-front">悬停我 →</div><div class="m81-back">WOW!</div></div></div>`
  });

  window.ARTS.push({
    id: 'm88', n: 88, cat: '动画动效', title: '蜻蜓点水波纹特效',
    desc: '点击水面生成扩散圆环，多个 ripple 叠加，模拟蜻蜓点水。',
    tags: ['ripple', 'JS'], url: U + '7004704724049985549',
    init: function (el) {
      el.addEventListener('click', function (e) {
        var r = document.createElement('div'); r.className = 'm88-ripple';
        var b = el.getBoundingClientRect();
        r.style.left = (e.clientX - b.left) + 'px'; r.style.top = (e.clientY - b.top) + 'px';
        el.appendChild(r); setTimeout(function () { r.remove(); }, 1200);
      });
    },
    html: `<style>
      .m88-box{width:100%;height:190px;position:relative;overflow:hidden;cursor:crosshair;
        background:radial-gradient(circle at 50% 120%,#0e7490,#082f49 60%,#06121f)}
      .m88-tip{position:absolute;top:14px;left:0;right:0;text-align:center;color:#67e8f9;font:11px monospace;opacity:.7}
      .m88-ripple{position:absolute;width:10px;height:10px;border:2px solid #a5f3fc;border-radius:50%;
        transform:translate(-50%,-50%);animation:m88go 1.2s ease-out forwards;pointer-events:none}
      @keyframes m88go{to{width:180px;height:180px;opacity:0;border-width:1px}}
    </style>
    <div class="m88-box"><div class="m88-tip">点击水面 · 泛起涟漪</div></div>`
  });

  window.ARTS.push({
    id: 'm90', n: 90, cat: '动画动效', title: '奇思妙想 CSS 3D 动画',
    desc: 'transform-style:preserve-3d 打造 3D 折叠方块，六个面独立运动。',
    tags: ['3d', 'preserve-3d'], url: U + '6999801808637919239',
    html: `<style>
      .m90-box{width:100%;height:190px;background:#080d18;display:flex;align-items:center;justify-content:center;perspective:600px}
      .m90-wrap{width:70px;height:70px;position:relative;transform-style:preserve-3d;animation:m90rot 10s linear infinite}
      .m90-f{position:absolute;width:70px;height:70px;background:linear-gradient(135deg,#34d399,#3b82f6);
        opacity:.85;border:1px solid rgba(255,255,255,.3)}
      .m90-f:nth-child(1){transform:translateZ(35px)}.m90-f:nth-child(2){transform:rotateY(90deg) translateZ(35px)}
      .m90-f:nth-child(3){transform:rotateX(90deg) translateZ(35px)}
      @keyframes m90rot{to{transform:rotateX(360deg) rotateZ(360deg)}}
    </style>
    <div class="m90-box"><div class="m90-wrap"><div class="m90-f"></div><div class="m90-f"></div><div class="m90-f"></div></div></div>`
  });

  window.ARTS.push({
    id: 'm101', n: 101, cat: '动画动效', title: 'CSS 波浪效果',
    desc: '多个圆形 div 旋转 + 错位，拼出连续起伏的波浪曲线。',
    tags: ['border-radius', 'animation'], url: U + '6963445854589960206',
    html: `<style>
      .m101-box{width:100%;height:190px;background:linear-gradient(#0a1a2e,#0d3b66);position:relative;overflow:hidden}
      .m101-wave{position:absolute;bottom:-90px;left:50%;width:260px;height:260px;margin-left:-130px;
        border-radius:43% 57% 50% 50%;background:#22d3ee;animation:m101spin 8s linear infinite;opacity:.75}
      .m101-wave::before,.m101-wave::after{content:"";position:absolute;inset:-14px;border-radius:48% 52% 50% 50%;
        background:#0891b2;opacity:.5;animation:m101spin 6s linear infinite reverse}
      @keyframes m101spin{to{transform:rotate(360deg)}}
      .m101-txt{position:absolute;top:20px;left:0;right:0;text-align:center;color:#a5f3fc;font:600 13px sans-serif}
    </style>
    <div class="m101-box"><div class="m101-txt">CSS 波浪</div><div class="m101-wave"></div></div>`
  });

  window.ARTS.push({
    id: 'm104', n: 104, cat: '动画动效', title: 'Motion Path 运动路径',
    desc: 'offset-path 让元素沿自绘曲线运动，做出精准的轨迹动画。',
    tags: ['offset-path', 'motion'], url: U + '6956030985251061791',
    html: `<style>
      .m104-box{width:100%;height:190px;background:#0b1120;position:relative;overflow:hidden}
      .m104-path{position:absolute;left:50%;top:50%;width:200px;height:110px;margin:-55px 0 0 -100px;
        border:1px dashed rgba(129,140,248,.4);border-radius:50%}
      .m104-dot{position:absolute;left:0;top:0;width:16px;height:16px;border-radius:50%;background:#34d399;
        box-shadow:0 0 12px #34d399;
        offset-path:path('M0,95 C50,-10 150,-10 200,95');animation:m104go 4s linear infinite}
      @keyframes m104go{to{offset-distance:100%}}
    </style>
    <div class="m104-box"><div class="m104-path"></div><div class="m104-dot"></div></div>`
  });

  window.ARTS.push({
    id: 'm114', n: 114, cat: '动画动效', title: '奇思妙想文字动画',
    desc: 'background-clip:text + 渐变滚动 + 逐字延迟，文字出现流光与跳动。',
    tags: ['background-clip', 'text'], url: U + '6937102296442470413',
    html: `<style>
      .m114-box{width:100%;height:190px;background:#080d16;display:flex;flex-direction:column;
        align-items:center;justify-content:center;gap:10px}
      .m114-t{font:800 34px/1 'Arial Black',sans-serif;letter-spacing:4px;
        background:linear-gradient(90deg,#34d399,#818cf8,#f472b6,#34d399);background-size:300%;
        -webkit-background-clip:text;background-clip:text;color:transparent;animation:m114flow 4s linear infinite}
      .m114-sub span{display:inline-block;color:#9db8ad;font:600 14px monospace;animation:m114up 1.2s ease infinite}
      .m114-sub span:nth-child(2){animation-delay:.1s}.m114-sub span:nth-child(3){animation-delay:.2s}
      .m114-sub span:nth-child(4){animation-delay:.3s}.m114-sub span:nth-child(5){animation-delay:.4s}
      @keyframes m114flow{to{background-position:300%}}
      @keyframes m114up{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(-6px);opacity:.5}}
    </style>
    <div class="m114-box"><div class="m114-t">MAGIC</div>
      <div class="m114-sub"><span>C</span><span>S</span><span>S</span><span>!</span></div></div>`
  });

  window.ARTS.push({
    id: 'm115', n: 115, cat: '动画动效', title: 'box-reflect 倒影动效',
    desc: '-webkit-box-reflect 做出水中倒影，配合上下浮动像镜面波纹。',
    tags: ['box-reflect', 'animation'], url: U + '6935248489878126628',
    html: `<style>
      .m115-box{width:100%;height:190px;background:linear-gradient(#0a1424,#0f2a3d);display:flex;align-items:center;justify-content:center}
      .m115-o{font:800 40px/1 'Arial Black',sans-serif;color:#fbbf24;
        text-shadow:0 0 20px rgba(251,191,36,.5);animation:m115float 3s ease-in-out infinite;
        -webkit-box-reflect:below 2px linear-gradient(transparent 60%,rgba(255,255,255,.4))}
      @keyframes m115float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    </style>
    <div class="m115-box"><div class="m115-o">FLOAT</div></div>`
  });

  window.ARTS.push({
    id: 'm120', n: 120, cat: '动画动效', title: 'App Store 卡片展开',
    desc: '点击卡片用 grid-template-rows 0fr→1fr 平滑展开详情，仿 App Store 交互。',
    tags: ['grid', 'transition'], url: U + '6917479303572226061',
    init: function (el) {
      var c = el.querySelector('.m120-card');
      c.addEventListener('click', function () { c.classList.toggle('on'); });
    },
    html: `<style>
      .m120-box{width:100%;height:190px;background:#0d1220;display:flex;align-items:center;justify-content:center}
      .m120-card{width:250px;background:#161d33;border-radius:14px;padding:14px;cursor:pointer;color:#e6f5ef;overflow:hidden;
        box-shadow:0 8px 24px rgba(0,0,0,.35)}
      .m120-h{display:flex;align-items:center;gap:12px}
      .m120-ic{width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#34d399,#818cf8);flex:none}
      .m120-h b{font:600 14px sans-serif}.m120-h small{display:block;color:#7f9c90;font:11px sans-serif;margin-top:3px}
      .m120-detail{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s ease}
      .m120-card.on .m120-detail{grid-template-rows:1fr}
      .m120-detail>div{overflow:hidden}
      .m120-detail p{color:#94b0a4;font:11.5px/1.6 sans-serif;margin:12px 0 0}
    </style>
    <div class="m120-box"><div class="m120-card"><div class="m120-h"><div class="m120-ic"></div>
      <div><b>CSS Arts</b><small>点击展开详情</small></div></div>
      <div class="m120-detail"><div><p>用 grid-template-rows 0fr→1fr 实现无需 JS 计算高度的丝滑展开，是新一代手风琴/卡片展开最佳实践。</p></div></div>
    </div></div>`
  });

  window.ARTS.push({
    id: 'm121', n: 121, cat: '动画动效', title: 'CSS 水滴效果',
    desc: 'border-radius 变形 + 旋转做出水滴坠落与融合的黏稠效果。',
    tags: ['border-radius', 'gooey'], url: U + '6917079398160007175',
    html: `<style>
      .m121-box{width:100%;height:190px;background:#0a1424;position:relative;overflow:hidden}
      .m121-drop{position:absolute;left:50%;top:20px;width:22px;height:22px;margin-left:-11px;background:#38bdf8;
        border-radius:50% 50% 50% 0;animation:m121fall 2.4s ease-in infinite}
      @keyframes m121fall{0%{transform:translateY(0) rotate(-45deg) scale(1);opacity:0}
        20%{opacity:1}80%{transform:translateY(130px) rotate(-45deg) scale(1.15);opacity:1}
        100%{transform:translateY(150px) rotate(-45deg) scale(.4);opacity:0}}
      .m121-pool{position:absolute;bottom:22px;left:50%;width:60px;height:14px;margin-left:-30px;
        background:#38bdf8;border-radius:50%;filter:blur(1px);opacity:.7}
    </style>
    <div class="m121-box"><div class="m121-drop"></div><div class="m121-pool"></div></div>`
  });

  window.ARTS.push({
    id: 'm122', n: 122, cat: '动画动效', title: 'CSS 水波纹加载',
    desc: '双层超大圆旋转形成水波填充动画，经典的水波 loading 效果。',
    tags: ['border-radius', 'animation'], url: U + '6914862587863629831',
    html: `<style>
      .m122-box{width:100%;height:190px;background:#76daf7;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
      .m122-wave{position:absolute;bottom:-160px;left:-25%;width:150%;height:300px;background:#fff;
        border-radius:45%;animation:m122spin 7s linear infinite}
      .m122-wave:nth-child(2){bottom:-165px;border-radius:48%;opacity:.5;animation-duration:5s;animation-direction:reverse}
      .m122-txt{position:relative;color:#0e7490;font:700 20px sans-serif;letter-spacing:3px}
      @keyframes m122spin{to{transform:rotate(360deg)}}
    </style>
    <div class="m122-box"><div class="m122-wave"></div><div class="m122-wave"></div><div class="m122-txt">LOADING</div></div>`
  });

  window.ARTS.push({
    id: 'm86', n: 86, cat: '动画动效', title: 'CSS3 回城特效',
    desc: '多层同心圆旋转缩放 + 光柱，复刻游戏角色回城的法阵特效。',
    tags: ['transform', 'rings'], url: U + '7089473772058574862',
    html: `<style>
      .m86-box{width:100%;height:190px;background:radial-gradient(circle,#1e1b4b,#08060f 70%);
        display:flex;align-items:center;justify-content:center}
      .m86-circle{position:relative;width:120px;height:120px}
      .m86-ring{position:absolute;inset:0;border:2px solid #a78bfa;border-radius:50%;
        border-top-color:transparent;border-bottom-color:transparent;animation:m86spin 3s linear infinite}
      .m86-ring:nth-child(2){inset:16px;border-color:#818cf8;border-left-color:transparent;border-right-color:transparent;
        animation-duration:2s;animation-direction:reverse}
      .m86-ring:nth-child(3){inset:32px;border-color:#f0abfc;border-top-color:transparent;animation-duration:4s}
      .m86-core{position:absolute;inset:50px;border-radius:50%;background:#e9d5ff;box-shadow:0 0 30px 10px #a78bfa;
        animation:m86pulse 1.5s ease-in-out infinite}
      @keyframes m86spin{to{transform:rotate(360deg)}}
      @keyframes m86pulse{0%,100%{transform:scale(.8);opacity:.7}50%{transform:scale(1.15);opacity:1}}
    </style>
    <div class="m86-box"><div class="m86-circle"><div class="m86-ring"></div><div class="m86-ring"></div>
      <div class="m86-ring"></div><div class="m86-core"></div></div></div>`
  });
})();
