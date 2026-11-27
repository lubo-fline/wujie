/* CSS 动画与特效 · 17 篇落地 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  // 2. 丝滑下陷 Tab 切换
  D.push({
    id: 'softtab', n: 2, cat: 'CSS 动画与特效', title: '丝滑 3D 下陷 Tab 切换',
    tags: ['CSS 3D', '交互'], url: base + '7129788202335862791',
    desc: '把抖音刷到的丝滑交互拆成容器/按钮/滑块三层：点击时容器带 perspective 沿 Y 轴下陷、变换旋转原点，按钮内容 scale 先放大再回弹，滑块平滑滑到目标下方。',
    hint: '点不同的标签，注意容器下陷角度和内容回弹',
    html: '<style>' +
      '.softtab{width:100%;max-width:340px}.softtab .sc{position:relative;perspective:600px;background:#1b2340;border-radius:16px;padding:16px;transition:transform .35s;transform-origin:center top}' +
      '.softtab .row{position:relative;display:flex;gap:6px;background:#0d1326;border-radius:12px;padding:5px}' +
      '.softtab .slide{position:absolute;top:5px;bottom:5px;left:5px;width:calc((100% - 10px)/3);background:linear-gradient(135deg,#7c9dff,#b98bff);border-radius:9px;transition:transform .4s cubic-bezier(.34,1.56,.64,1);z-index:0}' +
      '.softtab .b{position:relative;z-index:1;flex:1;padding:11px 0;text-align:center;color:#9fabd4;font-size:12.5px;cursor:pointer;transition:color .3s,transform .3s}.softtab .b.on{color:#0a1020;font-weight:700}' +
      '.softtab .b:active{transform:scale(.9)}' +
      '</style><div class="softtab"><div class="sc" id="st-sc"><div class="row"><div class="slide" id="st-slide"></div>' +
      '<div class="b on">推荐</div><div class="b">热点</div><div class="b">关注</div></div></div></div>',
    init: function (root) {
      var bs = root.querySelectorAll('.b'), slide = root.querySelector('#st-slide'), sc = root.querySelector('#st-sc');
      var origins = ['40%', '50%', '60%'];
      bs.forEach(function (b, i) {
        b.onclick = function () {
          bs.forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on');
          slide.style.transform = 'translateX(' + (i * 100) + '%)';
          sc.style.transformOrigin = origins[i] + ' top';
          sc.style.transform = 'rotateX(6deg) translateY(3px)';
          setTimeout(function () { sc.style.transform = ''; }, 260);
        };
      });
    }
  });

  // 8. CSS 海浪
  D.push({
    id: 'wave', n: 8, cat: 'CSS 动画与特效', title: '两个圆转出海浪',
    tags: ['纯 CSS', '@keyframes'], url: base + '6844903909169823757',
    desc: '两个超大不规则圆（border-radius 45%/47%）在里面无限旋转，overflow 裁切后边缘形成此起彼伏的波浪，是最简单的海浪实现。',
    hint: '纯 CSS，两个伪元素旋转叠加',
    html: '<style>.wv{position:relative;width:170px;height:170px;border-radius:50%;background:#5291e0;overflow:hidden;box-shadow:0 8px 30px rgba(82,145,224,.4)}' +
      '.wv::before,.wv::after{content:"";position:absolute;left:50%;bottom:14%;width:500%;height:500%;border-radius:45%;background:#fff;transform:translateX(-50%);animation:wvrot 14s linear infinite}' +
      '.wv::before{bottom:10%;opacity:.45;border-radius:47%;animation-duration:11s;animation-direction:reverse}@keyframes wvrot{to{transform:translateX(-50%) rotate(360deg)}}</style>' +
      '<div class="wv"></div>'
  });

  // 11. 星球环绕
  D.push({
    id: 'orbit', n: 11, cat: 'CSS 动画与特效', title: 'CSS 星球环绕',
    tags: ['CSS 3D', '旋转'], url: base + '7113',
    desc: '用 3D 变换让行星沿不同倾角的轨道绕恒星公转，配合自转和景深，做出太阳系环绕效果。',
    hint: '纯 CSS 3D 变换',
    html: '<style>.orb{width:230px;height:230px;position:relative;display:flex;align-items:center;justify-content:center;perspective:600px}' +
      '.orb .sun{width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffe07a,#ff8c42);box-shadow:0 0 30px #ff9c42;position:relative;z-index:2}' +
      '.orb .ring{position:absolute;border:1px dashed rgba(140,165,255,.25);border-radius:50%;width:150px;height:60px}' +
      '.orb .ring.r2{width:210px;height:84px;transform:rotateX(65deg)}' +
      '.orb .ring.r1{width:150px;height:60px;transform:rotateX(65deg) rotateZ(40deg)}' +
      '.orb .p{position:absolute;width:14px;height:14px;border-radius:50%;transform-style:preserve-3d}' +
      '.orb .p1{background:#7fd8d0;box-shadow:0 0 12px #7fd8d0}.orb .p2{background:#b98bff;box-shadow:0 0 12px #b98bff}' +
      '.orb .spin1{animation:or1 6s linear infinite}.orb .spin2{animation:or2 9s linear infinite}' +
      '@keyframes or1{to{transform:rotateZ(360deg)}}@keyframes or2{to{transform:rotateZ(-360deg)}}</style>' +
      '<div class="orb">' +
      '<div class="ring r1"></div><div class="ring r2"></div><div class="sun"></div>' +
      '<div class="spin1" style="position:absolute;width:150px;height:60px;transform-style:preserve-3d;transform:rotateX(65deg) rotateZ(40deg)"><div class="p p1" style="left:0;top:23px"></div></div>' +
      '<div class="spin2" style="position:absolute;width:210px;height:84px;transform-style:preserve-3d;transform:rotateX(65deg)"><div class="p p2" style="left:0;top:35px"></div></div>' +
      '</div>'
  });

  // 12. 充电水波
  D.push({
    id: 'charge', n: 12, cat: 'CSS 动画与特效', title: '充电水波特效',
    tags: ['HTML+CSS', '波浪'], url: base + '7111',
    desc: '电池容器里两层半透明波浪错位旋转，营造充电时液面晃动的动效，配合顶部电极造型。',
    hint: '两层波浪错位旋转',
    html: '<style>.chg{width:200px;height:290px;position:relative;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 0 24px rgba(255,255,255,.25)}' +
      '.chg::after{content:"";position:absolute;top:-16px;left:50%;width:42px;height:16px;transform:translateX(-50%);background:#fff;border-radius:8px 8px 0 0}' +
      '.chg .lv{position:absolute;left:50%;bottom:-160px;width:340px;height:340px;border-radius:44%;background:#4fc3f7;transform:translateX(-50%);animation:chgspin 8s linear infinite}' +
      '.chg .lv.b{bottom:-168px;background:#29b6f6;opacity:.6;border-radius:47%;animation-duration:11s;animation-direction:reverse}' +
      '@keyframes chgspin{to{transform:translateX(-50%) rotate(360deg)}}</style>' +
      '<div class="chg"><div class="lv"></div><div class="lv b"></div></div>'
  });

  // 29. @property 渐变动画
  D.push({
    id: 'property', n: 29, cat: 'CSS 动画与特效', title: '@property 让渐变能动',
    tags: ['@property', 'CSS 变量'], url: base + '7069',
    desc: 'CSS 自定义属性默认不能做过渡；@property 给它声明类型后就能被动画插值。这里让渐变角度 --ang 动起来，锥形渐变随之旋转。',
    hint: '需要支持 @property 的浏览器（Chrome/Edge）',
    html: '<style>@property --ang{syntax:"<angle>";initial-value:0deg;inherits:false}' +
      '.prop{width:180px;height:180px;border-radius:20px;background:conic-gradient(from var(--ang),#22d3ee,#8b5cf6,#e879f9,#22d3ee);animation:proprot 4s linear infinite;box-shadow:0 10px 40px rgba(139,92,246,.35)}' +
      '@keyframes proprot{to{--ang:360deg}}</style><div class="prop"></div>'
  });

  // 38. CSS 边框动画
  D.push({
    id: 'border', n: 38, cat: 'CSS 动画与特效', title: '奇思妙想边框动画',
    tags: ['伪元素', 'hover'], url: base + '7069',
    desc: '四角描边用伪元素实现，hover 时从四角向四周延展成完整边框；下面是流动虚线边框。',
    hint: '鼠标移到卡片上',
    html: '<style>.bdwrap{display:flex;gap:18px;flex-wrap:wrap;justify-content:center}' +
      '.bd1{--c:#22d3ee;position:relative;width:140px;height:96px;display:flex;align-items:center;justify-content:center;color:#9fabd4;font-size:12px;cursor:pointer}' +
      '.bd1::before,.bd1::after{content:"";position:absolute;width:16px;height:16px;transition:.35s}' +
      '.bd1::before{top:0;left:0;border-top:2px solid var(--c);border-left:2px solid var(--c)}' +
      '.bd1::after{bottom:0;right:0;border-bottom:2px solid var(--c);border-right:2px solid var(--c)}' +
      '.bd1:hover::before,.bd1:hover::after{width:100%;height:100%}' +
      '.bd2{width:140px;height:96px;display:flex;align-items:center;justify-content:center;color:#9fabd4;font-size:12px;border:2px dashed transparent;background:linear-gradient(#12182b,#12182b) padding-box, repeating-linear-gradient(45deg,#8b5cf6 0 8px,#22d3ee 8px 16px) border-box;animation:bdbg 1s linear infinite}' +
      '@keyframes bdbg{to{background-position:0 0,22.6px 22.6px}}</style>' +
      '<div class="bdwrap"><div class="bd1">四角延展</div><div class="bd2">流动虚线</div></div>'
  });

  // 40. 水波球进度
  D.push({
    id: 'waterball', n: 40, cat: 'CSS 动画与特效', title: '水波球进度组件',
    tags: ['Canvas', '进度'], url: base + '7069',
    desc: '圆形进度球里用两条正弦波叠加旋转，液面高度对应百分比，中间显示数值。原生 Canvas 复刻 Vue 组件。',
    hint: '拖动滑块改变进度',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:12px">' +
      '<canvas id="wb-cv" width="180" height="180"></canvas>' +
      '<input id="wb-r" type="range" min="0" max="100" value="68" style="width:180px;accent-color:#22d3ee"></div>',
    init: function (root) {
      var cv = root.querySelector('#wb-cv'), ctx = cv.getContext('2d'), r = root.querySelector('#wb-r');
      var t = 0;
      function draw() {
        t += 0.05;
        var rate = +r.value / 100, cx = 90, cy = 90, rad = 78;
        ctx.clearRect(0, 0, 180, 180);
        ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.clip();
        var level = cy + rad - rate * rad * 2;
        for (var k = 0; k < 2; k++) {
          ctx.beginPath();
          for (var x = 0; x <= 180; x++) {
            var y = level + Math.sin(x * 0.05 + t + k * 1.6) * 6;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.lineTo(180, 180); ctx.lineTo(0, 180); ctx.closePath();
          ctx.fillStyle = k === 0 ? 'rgba(34,211,238,.85)' : 'rgba(139,92,246,.7)'; ctx.fill();
        }
        ctx.restore();
        ctx.strokeStyle = 'rgba(34,211,238,.6)'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#e7ecff'; ctx.font = 'bold 32px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(rate * 100) + '%', cx, cy);
        requestAnimationFrame(draw);
      }
      draw();
    }
  });

  // 28. 雷达扫描
  D.push({
    id: 'radar', n: 28, cat: 'CSS 动画与特效', title: '两个 DIV 的雷达扫描',
    tags: ['conic-gradient', '扫描'], url: base + '7069',
    desc: '一个锥形渐变做扫描扇形、匀速旋转，同心圆环做刻度，再撒几个随机光点模拟目标回波。',
    hint: '绿色扇形匀速旋转',
    html: '<style>.rd{position:relative;width:190px;height:190px;border-radius:50%;border:1px solid rgba(127,216,208,.35);background:repeating-radial-gradient(circle,transparent 0 30px,rgba(127,216,208,.12) 30px 31px);overflow:hidden}' +
      '.rd::before,.rd::after{content:"";position:absolute;left:50%;top:50%;background:linear-gradient(90deg,transparent,rgba(127,216,208,.5))}' +
      '.rd::before{width:50%;height:1px;transform-origin:left center}.rd::after{width:1px;height:50%;transform-origin:center top}' +
      '.rd .fan{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,rgba(127,216,208,.45),transparent 60deg);animation:rdrot 3s linear infinite}' +
      '@keyframes rdrot{to{transform:rotate(360deg)}}' +
      '.rd .blip{position:absolute;width:6px;height:6px;border-radius:50%;background:#7fd8d0;box-shadow:0 0 10px #7fd8d0;animation:blip 3s infinite}' +
      '@keyframes blip{0%,70%{opacity:0}75%{opacity:1}100%{opacity:0}}</style>' +
      '<div class="rd"><div class="fan"></div><div class="blip" style="left:130px;top:60px"></div><div class="blip" style="left:55px;top:120px;animation-delay:1.2s"></div></div>'
  });

  // 15. 点赞动画（Vue transition → 原生）
  D.push({
    id: 'like', n: 15, cat: 'CSS 动画与特效', title: '点赞爱心爆开动画',
    tags: ['transition', '交互'], url: base + '7069',
    desc: '点击爱心后先弹跳放大，再向外迸射一圈小颗粒和光环，用 keyframes + JS 动态生成粒子复刻 Vue transition 组的进入动画。',
    hint: '点击爱心',
    html: '<style>.lk{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px}' +
      '.lk .heart{font-size:52px;cursor:pointer;user-select:none;transition:transform .2s;filter:grayscale(1) opacity(.5)}' +
      '.lk .heart.on{filter:none;animation:lkbounce .5s cubic-bezier(.34,1.56,.64,1)}' +
      '@keyframes lkbounce{0%{transform:scale(1)}40%{transform:scale(1.4)}70%{transform:scale(.9)}100%{transform:scale(1)}}' +
      '.lk .pt{position:absolute;font-size:16px;pointer-events:none;animation:lkfly .8s ease-out forwards}' +
      '@keyframes lkfly{to{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0}}</style>' +
      '<div class="lk"><div class="heart" id="lk-h">❤️</div></div>',
    init: function (root) {
      var h = root.querySelector('#lk-h');
      h.onclick = function () {
        h.classList.remove('on'); void h.offsetWidth; h.classList.add('on');
        var colors = ['#ff5a7a', '#ffb03a', '#22d3ee', '#b98bff'];
        for (var i = 0; i < 12; i++) {
          var s = document.createElement('span'); s.className = 'pt'; s.textContent = '✦';
          var a = i / 12 * Math.PI * 2; s.style.color = colors[i % colors.length];
          s.style.setProperty('--dx', Math.cos(a) * 70 + 'px'); s.style.setProperty('--dy', Math.sin(a) * 70 + 'px');
          s.style.left = '50%'; s.style.top = '40%'; h.parentNode.appendChild(s);
          setTimeout(function (el) { return function () { el.remove(); }; }(s), 850);
        }
      };
    }
  });

  // 19. 3D 扭动卡片
  D.push({
    id: 'twistcard', n: 19, cat: 'CSS 动画与特效', title: '3D 扭动卡片',
    tags: ['CSS 3D', 'hover'], url: base + '7069',
    desc: '卡片沿多轴做 3D 翻转扭动，内层元素带不同 translateZ 形成层次景深，鼠标悬停触发。',
    hint: '鼠标移到卡片上',
    html: '<style>.tw{width:200px;height:140px;perspective:700px;cursor:pointer}.tw .in{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.2,.8,.2,1);border-radius:16px;background:linear-gradient(135deg,#2a3a6a,#4a2a6a);display:flex;align-items:center;justify-content:center}' +
      '.tw:hover .in{transform:rotateY(24deg) rotateX(-16deg) translateZ(20px)}' +
      '.tw .l1,.tw .l2{position:absolute;color:#e7ecff;transform:translateZ(30px)}.tw .l1{font-size:28px;font-weight:700}.tw .l2{font-size:11px;color:#a8c6ff;margin-top:56px;transform:translateZ(50px)}' +
      '.tw .in::after{content:"";position:absolute;inset:0;border-radius:16px;box-shadow:inset 0 0 0 1px rgba(168,198,255,.3);transform:translateZ(-1px)}</style>' +
      '<div class="tw"><div class="in"><div class="l1">THREE</div><div class="l2">HOVER TO TWIST</div></div></div>'
  });

  // 20. 3D 卡片时钟
  D.push({
    id: 'clock3d', n: 20, cat: 'CSS 动画与特效', title: '3D 卡片时钟',
    tags: ['CSS 3D', '时间'], url: base + '7069',
    desc: '用 CSS 3D 把时/分/秒做成翻转卡片，数字变化时有翻页动画，实时走字。',
    hint: '实时 3D 翻页时钟',
    html: '<div id="ck3" style="display:flex;gap:10px"></div>',
    init: function (root) {
      var el = root.querySelector('#ck3');
      function pad(n) { return String(n).padStart(2, '0'); }
      function cell(v, label) {
        return '<div style="text-align:center"><div style="width:56px;height:70px;perspective:300px"><div style="position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:ckflip .6s">' +
          '<div style="position:absolute;inset:0;background:linear-gradient(#2a3a6a,#1a2547);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:700;color:#a8c6ff;backface-visibility:hidden">' + pad(v) + '</div>' +
          '</div></div><div style="font-size:10px;color:#6f7ba5;margin-top:6px">' + label + '</div></div>';
      }
      function tick() {
        var d = new Date();
        el.innerHTML = cell(d.getHours(), '时') + cell(d.getMinutes(), '分') + cell(d.getSeconds(), '秒');
      }
      var style = document.createElement('style');
      style.textContent = '@keyframes ckflip{from{transform:rotateX(-90deg)}to{transform:rotateX(0)}}';
      document.head.appendChild(style);
      tick(); setInterval(tick, 1000);
    }
  });

  // 31. 3D 时间动画展示
  D.push({
    id: 'time3d', n: 31, cat: 'CSS 动画与特效', title: '3D 时间轴动画',
    tags: ['CSS 3D', '时间轴'], url: base + '7069',
    desc: '年份沿 3D 空间纵深排列，自动轮播时当前项放大高亮、其余后退虚化，做出时间隧道感。',
    hint: '自动轮播，点年份可切换',
    html: '<style>.t3{width:100%;height:200px;position:relative;display:flex;align-items:center;justify-content:center;perspective:600px;overflow:hidden}' +
      '.t3 .yr{position:absolute;font-size:20px;color:#4a5578;cursor:pointer;transition:.6s;white-space:nowrap}' +
      '.t3 .yr.on{font-size:40px;font-weight:800;color:#a8c6ff;text-shadow:0 0 24px rgba(124,157,255,.7);transform:translateZ(80px)}</style>' +
      '<div class="t3" id="t3box"></div>',
    init: function (root) {
      var box = root.querySelector('#t3box'), years = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], cur = 4, timer;
      function paint() {
        box.innerHTML = '';
        years.forEach(function (y, i) {
          var s = document.createElement('span'); s.className = 'yr' + (i === cur ? ' on' : ''); s.textContent = y;
          var off = i - cur;
          if (i !== cur) { s.style.transform = 'translateX(' + (off * 66) + 'px) translateZ(' + (-Math.abs(off) * 60) + 'px)'; s.style.opacity = Math.max(.15, 1 - Math.abs(off) * .22); }
          s.onclick = function () { cur = i; paint(); };
          box.appendChild(s);
        });
      }
      paint();
      timer = setInterval(function () { cur = (cur + 1) % years.length; paint(); }, 1800);
      box.addEventListener('click', function () { clearInterval(timer); });
    }
  });

  // 36. CSS 过渡动画艺术
  D.push({
    id: 'transitionart', n: 36, cat: 'CSS 动画与特效', title: 'CSS 过渡动效集锦',
    tags: ['transition', '缓动'], url: base + '7069',
    desc: '一组常见的 CSS transition 效果：弹性按钮、平滑展开、颜色过渡、位移旋转，展示不同 cubic-bezier 缓动手感。',
    hint: '逐个悬停感受不同缓动曲线',
    html: '<style>.ta{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;width:100%}' +
      '.ta .x{height:64px;border-radius:10px;background:rgba(124,157,255,.12);border:1px solid rgba(140,165,255,.2);display:flex;align-items:center;justify-content:center;color:#9fabd4;font-size:11.5px;cursor:pointer;overflow:hidden;position:relative}' +
      '.ta .x i{display:block;width:30px;height:30px;background:linear-gradient(135deg,#7c9dff,#b98bff);border-radius:8px;transition:.5s}' +
      '.ta .x:nth-child(1):hover i{transform:translateX(50px) rotate(90deg);transition-timing-function:ease}' +
      '.ta .x:nth-child(2):hover i{transform:scale(1.5);border-radius:50%;transition-timing-function:cubic-bezier(.34,1.56,.64,1)}' +
      '.ta .x:nth-child(3):hover i{transform:rotate(180deg) scale(.6);background:#e879f9}' +
      '.ta .x:nth-child(4):hover i{width:80px;border-radius:20px;background:#22d3ee}</style>' +
      '<div class="ta"><div class="x">位移旋转 <i></i></div><div class="x">弹性缩放 <i></i></div><div class="x">颜色形变 <i></i></div><div class="x">延展 <i></i></div></div>'
  });

  // 37. Apple Watch Bubble UI
  D.push({
    id: 'bubble', n: 37, cat: 'CSS 动画与特效', title: 'Apple Watch Bubble UI',
    tags: ['拖拽', '弹簧'], url: base + '7069',
    desc: '苹果手表标志性的气泡排列：拖动时邻近图标被推开、松手弹回，用距离衰减 + 弹簧动画复刻。',
    hint: '拖动任意气泡',
    html: '<style>.bu{width:230px;height:230px;position:relative;touch-action:none}.bu .dot{position:absolute;width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;color:#0a1020;font-weight:700;cursor:grab;transition:transform .28s cubic-bezier(.34,1.56,.64,1);user-select:none}</style>' +
      '<div class="bu" id="bu"></div>',
    init: function (root) {
      var box = root.querySelector('#bu'), colors = ['#ff5a7a', '#ffb03a', '#22d3ee', '#8b5cf6', '#4ade80', '#e879f9', '#60a5fa', '#facc15', '#f472b6'];
      var dots = [];
      colors.forEach(function (c, i) {
        var d = document.createElement('div'); d.className = 'dot'; d.textContent = i + 1; d.style.background = c;
        var a = i / colors.length * Math.PI * 2, rr = 82;
        var bx = 115 + Math.cos(a) * rr - 23, by = 115 + Math.sin(a) * rr - 23;
        d.style.left = bx + 'px'; d.style.top = by + 'px';
        d._bx = bx; d._by = by; dots.push(d); box.appendChild(d);
      });
      var drag = null;
      box.addEventListener('pointerdown', function (e) {
        drag = e.target.closest('.dot'); if (!drag) return; drag.setPointerCapture(e.pointerId);
      });
      box.addEventListener('pointermove', function (e) {
        if (!drag) return;
        var r = box.getBoundingClientRect();
        var x = e.clientX - r.left - 23, y = e.clientY - r.top - 23;
        drag.style.transition = 'none'; drag.style.left = x + 'px'; drag.style.top = y + 'px';
        dots.forEach(function (o) {
          if (o === drag) return;
          var ocx = o._bx + 23, ocy = o._by + 23, dx = ocx - (x + 23), dy = ocy - (y + 23);
          var dist = Math.hypot(dx, dy) || 1;
          var push = Math.max(0, 90 - dist) / 90 * 34;
          o.style.transform = 'translate(' + (dx / dist * push) + 'px,' + (dy / dist * push) + 'px)';
        });
      });
      function release() {
        if (!drag) return;
        drag.style.transition = ''; drag.style.left = drag._bx + 'px'; drag.style.top = drag._by + 'px';
        dots.forEach(function (o) { o.style.transform = ''; }); drag = null;
      }
      box.addEventListener('pointerup', release); box.addEventListener('pointercancel', release);
    }
  });

  // 1. Vue3 生态（资源性质，但给个动画预览卡）
  D.push({
    id: 'vue3eco', n: 1, cat: 'CSS 动画与特效', title: 'Vue3 生态一键预览',
    tags: ['Vue3', '生态'], url: base + '7554572856147984424',
    desc: '文章盘点了 Vue3 生态的新工具。这里放一个 Vue 风格的组合式动画预览卡（原生复刻），展示声明式状态驱动的过渡。',
    hint: '点按钮切换状态',
    html: '<style>.v3{display:flex;flex-direction:column;align-items:center;gap:14px}.v3 .box{width:120px;height:80px;border-radius:14px;background:linear-gradient(135deg,rgba(66,184,131,.5),rgba(59,130,246,.5));border:1px solid rgba(66,184,131,.5);display:flex;align-items:center;justify-content:center;font-size:12px;color:#dff5e8;transition:.5s cubic-bezier(.34,1.56,.64,1)}.v3 .box.big{transform:scale(1.18) rotate(-3deg);box-shadow:0 12px 34px rgba(66,184,131,.35)}</style>' +
      '<div class="v3"><div class="box" id="v3b">composition API</div><button class="btn" id="v3t">触发响应式</button></div>',
    init: function (root) {
      var b = root.querySelector('#v3b'); root.querySelector('#v3t').onclick = function () { b.classList.toggle('big'); };
    }
  });

  // 32. animation 属性学习
  D.push({
    id: 'animate', n: 32, cat: 'CSS 动画与特效', title: 'animation 八种玩法',
    tags: ['animation', '基础'], url: base + '7069',
    desc: '系统演示 animation 的关键属性：name/duration/timing-function/delay/iteration-count/direction/fill-mode/play-state。',
    hint: '八个小球演示不同属性组合',
    html: '<style>.an{display:flex;gap:9px;flex-wrap:wrap;justify-content:center}.an .o{width:20px;height:20px;border-radius:50%;background:#7c9dff;animation:anmv 1.2s infinite}@keyframes anmv{from{transform:translateY(0);opacity:1}to{transform:translateY(-26px);opacity:.3}}</style>' +
      '<div class="an">' +
      '<div class="o" style="animation-name:anmv"></div>' +
      '<div class="o" style="animation-duration:2s;background:#b98bff"></div>' +
      '<div class="o" style="animation-timing-function:steps(4);background:#22d3ee"></div>' +
      '<div class="o" style="animation-delay:.3s;background:#e879f9"></div>' +
      '<div class="o" style="animation-iteration-count:2;background:#4ade80"></div>' +
      '<div class="o" style="animation-direction:alternate;background:#ffb03a"></div>' +
      '<div class="o" style="animation-fill-mode:both;background:#ff5a7a"></div>' +
      '<div class="o" style="animation-play-state:paused;background:#94a3b8"></div>' +
      '</div>'
  });

  // 6. 静态图局部流动（CSS mask + 动画模拟）
  D.push({
    id: 'flowimg', n: 6, cat: 'CSS 动画与特效', title: '静态图局部流动',
    tags: ['mask', '视觉'], url: base + '7127451058820874254',
    desc: '让静态图的某一区域（如水面、云层）产生流动：用两层相同图错位 + mask 裁切 + 平移，只让局部动起来。这里用渐变模拟水面流动。',
    hint: '局部区域持续流动',
    html: '<style>.fi{position:relative;width:230px;height:150px;border-radius:12px;overflow:hidden;background:linear-gradient(#7dd3fc 0%,#38bdf8 45%,#0ea5e9 46%,#0369a1 100%)}' +
      '.fi::before{content:"";position:absolute;left:0;right:0;top:46%;height:60px;background:repeating-linear-gradient(90deg,rgba(255,255,255,.25) 0 30px,transparent 30px 70px);transform:skewX(-20deg);animation:fimv 2.5s linear infinite;opacity:.6}' +
      '.fi .sun{position:absolute;right:22px;top:18px;width:38px;height:38px;border-radius:50%;background:#fde68a;box-shadow:0 0 24px #fcd34d}' +
      '@keyframes fimv{to{background-position:140px 0}}</style>' +
      '<div class="fi"><div class="sun"></div></div>'
  });

})();
