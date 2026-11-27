/* 动画库与方案 · 9 篇落地 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  // 27. 65行动画序列播放器
  D.push({
    id: 'seqlab', n: 27, cat: '动画库与方案', title: '迷你动画序列播放器',
    tags: ['JS', '时间轴'], url: base + '7134',
    desc: '仿文章里的 65 行迷你动画库：链式 API (.to().to()) + 队列 + 缓动，把多个元素的动画按顺序播放，可暂停/重播。',
    hint: '点重播看序列动画',
    html: '<style>.sq{width:100%;display:flex;flex-direction:column;gap:12px;align-items:center}.sq .items{display:flex;gap:10px}.sq .it{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,#7c9dff,#b98bff)}</style>' +
      '<div class="sq"><div class="items" id="sq-items"></div><button class="btn" id="sq-b">重播</button></div>',
    init: function (root) {
      var box = root.querySelector('#sq-items'), els = [];
      for (var i = 0; i < 5; i++) { var e = document.createElement('div'); e.className = 'it'; box.appendChild(e); els.push(e); }
      // 迷你动画库：链式队列
      function Animate(el) { this.el = el; this.q = []; }
      Animate.prototype.to = function (style, dur, delay) { this.q.push({ style: style, dur: dur, delay: delay || 0 }); return this; };
      Animate.prototype.run = function (done) {
        var self = this, i = 0;
        function next() {
          if (i >= self.q.length) { done && done(); return; }
          var s = self.q[i++];
          setTimeout(function () {
            Object.assign(self.el.style, { transition: 'all ' + s.dur + 'ms cubic-bezier(.34,1.56,.64,1)' }, s.style);
            setTimeout(next, s.dur);
          }, s.delay);
        }
        next();
      };
      function play() {
        els.forEach(function (e) { e.style.cssText = ''; });
        els.forEach(function (e, i) {
          new Animate(e).to({ transform: 'translateY(-30px) rotate(45deg)', background: '#22d3ee', borderRadius: '50%' }, 400, i * 130)
            .to({ transform: 'translateY(0) rotate(0)', background: 'linear-gradient(135deg,#7c9dff,#b98bff)' }, 500, 0).run();
        });
      }
      root.querySelector('#sq-b').onclick = play; setTimeout(play, 300);
    }
  });

  // 23. 时间轴与动画（前端组件化）
  D.push({
    id: 'timeline', n: 23, cat: '动画库与方案', title: '时间轴动画组件',
    tags: ['组件化', '时间轴'], url: base + '7134',
    desc: '把时间轴抽象成组件：数据驱动节点，支持进度拖动、播放/暂停，节点随进度点亮并连线延伸。',
    hint: '拖动进度条或点播放',
    html: '<style>.tl{width:100%;display:flex;flex-direction:column;gap:12px;align-items:center}.tl .bar{display:flex;align-items:center;gap:8px;width:100%;justify-content:center}.tl .nodes{display:flex;gap:0;align-items:center;width:100%;justify-content:center}.tl .node{width:26px;height:26px;border-radius:50%;background:#1b2340;border:2px solid #3a445c;display:flex;align-items:center;justify-content:center;font-size:11px;color:#6f7ba5;transition:.3s;flex:none}.tl .node.on{background:#7c9dff;border-color:#b98bff;color:#0a1020;transform:scale(1.15)}.tl .line{width:34px;height:2px;background:#3a445c;transition:.3s;flex:none}.tl .line.on{background:#7c9dff}</style>' +
      '<div class="tl"><div class="nodes" id="tl-n"></div><input type="range" id="tl-r" min="0" max="100" value="0" style="width:90%"><button class="btn" id="tl-b">播放</button></div>',
    init: function (root) {
      var box = root.querySelector('#tl-n'), r = root.querySelector('#tl-r'), labels = ['开始', '加载', '解析', '渲染', '完成'];
      var nodes = [];
      labels.forEach(function (l, i) {
        if (i) { var ln = document.createElement('div'); ln.className = 'line'; box.appendChild(ln); nodes.push({ el: ln, line: true }); }
        var d = document.createElement('div'); d.className = 'node'; d.textContent = i + 1; box.appendChild(d); nodes.push({ el: d, line: false });
      });
      function paint(v) {
        var active = Math.floor(v / 100 * labels.length);
        nodes.forEach(function (n, i) {
          var idx = Math.floor(i / 2);
          n.el.classList.toggle('on', idx < active);
        });
      }
      r.oninput = function () { paint(+r.value); };
      root.querySelector('#tl-b').onclick = function () {
        var v = 0; r.value = 0; paint(0);
        var t = setInterval(function () { v += 4; r.value = v; paint(v); if (v >= 100) clearInterval(t); }, 90);
      };
    }
  });

  // 30. 从英雄联盟学 Pixi.js
  D.push({
    id: 'pixi', n: 30, cat: '动画库与方案', title: 'Pixi.js 精灵动画入门',
    tags: ['Pixi.js', '精灵'], url: base + '7134',
    desc: 'Pixi.js 的核心是 Sprite + Ticker + Container。这里用原生 canvas 复刻它的精灵批渲染模型：一堆精灵在容器里按 ticker 更新位置、旋转、透明度和缩放。',
    hint: '多个精灵持续运动，点按钮增减',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:8px">' +
      '<canvas id="px-cv" width="300" height="170" style="border-radius:10px"></canvas>' +
      '<div><button class="btn" id="px-add">+ 精灵</button> <button class="btn" id="px-del">- 精灵</button></div></div>',
    init: function (root) {
      var cv = root.querySelector('#px-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var sprites = [];
      function add() { sprites.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * 3, vy: (Math.random() - .5) * 3, r: Math.random() * 6 + 8, a: Math.random(), c: 'hsl(' + Math.random() * 360 + ',80%,65%)' }); }
      for (var i = 0; i < 12; i++) add();
      root.querySelector('#px-add').onclick = add;
      root.querySelector('#px-del').onclick = function () { sprites.pop(); };
      function loop() {
        ctx.clearRect(0, 0, W, H);
        sprites.forEach(function (s) {
          s.x += s.vx; s.y += s.vy; s.a += .05;
          if (s.x < 0 || s.x > W) s.vx *= -1; if (s.y < 0 || s.y > H) s.vy *= -1;
          ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.a);
          ctx.fillStyle = s.c; ctx.globalAlpha = .8;
          ctx.fillRect(-s.r, -s.r, s.r * 2, s.r * 2); ctx.restore();
        });
        ctx.globalAlpha = 1; ctx.fillStyle = '#5f6c96'; ctx.font = '11px system-ui';
        ctx.fillText('Ticker · ' + sprites.length + ' sprites', 8, 16);
        requestAnimationFrame(loop);
      }
      loop();
    }
  });

  // 41. 教你用 PixiJs 实现复杂动画
  D.push({
    id: 'pixiComplex', n: 41, cat: '动画库与方案', title: '粒子系统复杂动画',
    tags: ['粒子系统', '滤镜'], url: base + '7134',
    desc: 'PixiJs 复杂动画的精髓是粒子系统 + 滤镜叠加。这里用原生 canvas 做一个跟随鼠标的漩涡粒子系统，带拖尾和辉光混合。',
    hint: '移动鼠标搅动粒子',
    html: '<style>.pc canvas{border-radius:10px;max-width:100%;cursor:crosshair}</style>' +
      '<canvas id="pc-cv" class="pc" width="300" height="180"></canvas>',
    init: function (root) {
      var cv = root.querySelector('#pc-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var ps = [], mouse = { x: W / 2, y: H / 2 };
      for (var i = 0; i < 300; i++) ps.push({ a: Math.random() * 7, r: Math.random() * 80, sp: Math.random() * .01 + .003, c: Math.random() * 360 });
      cv.addEventListener('mousemove', function (e) { var r = cv.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * W / r.width; mouse.y = (e.clientY - r.top) * H / r.height; });
      function loop() {
        ctx.fillStyle = 'rgba(5,7,14,.15)'; ctx.fillRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        ps.forEach(function (p) {
          p.a += p.sp; p.r += .1; if (p.r > 90) p.r = 4;
          var x = mouse.x + Math.cos(p.a) * p.r, y = mouse.y + Math.sin(p.a) * p.r * .6;
          ctx.fillStyle = 'hsla(' + (p.c + p.a * 20) + ',90%,60%,.7)';
          ctx.beginPath(); ctx.arc(x, y, 1.6, 0, 7); ctx.fill();
        });
        ctx.globalCompositeOperation = 'source-over';
        requestAnimationFrame(loop);
      }
      loop();
    }
  });

  // 39. 十天自制软渲染器
  D.push({
    id: 'softrender', n: 39, cat: '动画库与方案', title: '迷你软渲染器 · Day01',
    tags: ['图形学', '渲染器'], url: base + '7134',
    desc: '「十天自制软渲染器」系列开篇的环境与思路。这里放一个最小可视化：用 canvas 逐像素实现一个旋转的 3D 立方体线框（投影矩阵 + 旋转），看渲染管线最底层。',
    hint: '线框立方体自行旋转',
    html: '<canvas id="sr-cv" width="240" height="180" style="border-radius:10px"></canvas>',
    init: function (root) {
      var cv = root.querySelector('#sr-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var verts = [[-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]];
      var edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
      var a = 0;
      function proj(v) {
        var x = v[0] * Math.cos(a) - v[2] * Math.sin(a), z = v[0] * Math.sin(a) + v[2] * Math.cos(a);
        var y = v[1] * Math.cos(a * .7) - z * Math.sin(a * .7); z = v[1] * Math.sin(a * .7) + z * Math.cos(a * .7);
        var d = 5 / (5 + z); return [W / 2 + x * 55 * d, H / 2 + y * 55 * d];
      }
      function loop() {
        ctx.clearRect(0, 0, W, H);
        var pv = verts.map(proj);
        edges.forEach(function (e) {
          ctx.beginPath(); ctx.moveTo(pv[e[0]][0], pv[e[0]][1]); ctx.lineTo(pv[e[1]][0], pv[e[1]][1]);
          ctx.strokeStyle = 'rgba(124,157,255,.8)'; ctx.lineWidth = 1.5; ctx.stroke();
        });
        pv.forEach(function (p) { ctx.fillStyle = '#e879f9'; ctx.fillRect(p[0] - 2, p[1] - 2, 4, 4); });
        a += .015; requestAnimationFrame(loop);
      }
      loop();
    }
  });

  // 21. web 端动效方案对比（交互演示 CSS vs JS vs Canvas）
  D.push({
    id: 'schemecmp', n: 21, cat: '动画库与方案', title: '动效方案对比实验',
    tags: ['方案对比', '性能'], url: base + '7134',
    desc: '得物技术文章对比 CSS / JS / Canvas / Web Animations API 四种动效方案。这里并排放三种实现同一「旋转方块」的方式，直观对比写法与手感。',
    hint: '三种方案同步运行',
    html: '<style>.sc{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%}.sc .cell{background:rgba(0,0,0,.25);border-radius:10px;padding:8px;text-align:center}.sc .lab{font-size:10px;color:#6f7ba5;margin-bottom:6px}.sc .box{width:34px;height:34px;border-radius:8px;margin:0 auto}@keyframes scrt{to{transform:rotate(360deg)}}.sc .a .box{background:#7c9dff;animation:scrt 3s linear infinite}</style>' +
      '<div class="sc"><div class="cell a"><div class="lab">CSS</div><div class="box"></div></div>' +
      '<div class="cell"><div class="lab">JS / rAF</div><div class="box" id="sc-js"></div></div>' +
      '<div class="cell"><div class="lab">Canvas</div><canvas id="sc-cv" width="40" height="40"></canvas></div></div>',
    init: function (root) {
      var jsBox = root.querySelector('#sc-js'), cv = root.querySelector('#sc-cv'), ctx = cv.getContext('2d'), a = 0;
      function loop() {
        a += .02; jsBox.style.transform = 'rotate(' + a + 'rad)';
        ctx.clearRect(0, 0, 40, 40); ctx.save(); ctx.translate(20, 20); ctx.rotate(a);
        ctx.fillStyle = '#b98bff'; ctx.fillRect(-12, -12, 24, 24); ctx.restore();
        requestAnimationFrame(loop);
      }
      loop();
    }
  });

  // 26. 前端动画展示方案
  D.push({
    id: 'showcase', n: 26, cat: '动画库与方案', title: 'GIF / CSS / 视频 展示对比',
    tags: ['方案', '展示'], url: base + '7134',
    desc: '文章讨论动效展示方案的取舍：GIF（兼容性好、体积大）、CSS（轻量、可控）、视频（复杂动效）。这里做一个「同一效果三种载体」的体积/画质示意。',
    hint: '静态示意，说明三种载体差异',
    html: '<style>.sh{width:100%;display:flex;flex-direction:column;gap:9px}.sh .row{display:flex;align-items:center;gap:10px;font-size:11px;color:#9fabd4}.sh .row b{width:52px;color:#a8c6ff}.sh .bar{height:12px;border-radius:6px;background:linear-gradient(90deg,#7c9dff,#b98bff)}</style>' +
      '<div class="sh"><div class="row"><b>GIF</b><div class="bar" style="width:88%"></div><span>体积大 · 256色</span></div>' +
      '<div class="row"><b>CSS</b><div class="bar" style="width:12%"></div><span>极小 · 可控</span></div>' +
      '<div class="row"><b>视频</b><div class="bar" style="width:55%"></div><span>中等 · 复杂动效</span></div>' +
      '<div class="row"><b>WebM</b><div class="bar" style="width:38%"></div><span>小 · 高清透明</span></div></div>'
  });

})();
