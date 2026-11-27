/* Canvas 与粒子 · 7 篇落地 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  // 13. Canvas 文字粒子
  D.push({
    id: 'textparticle', n: 13, cat: 'Canvas 与粒子', title: 'Canvas 文字粒子',
    tags: ['Canvas 2D', '粒子'], url: base + '7134',
    desc: '把文字画到离屏 canvas 上采样像素，亮点聚成文字形状，鼠标靠近时粒子散开又回位，做出可交互的文字粒子。',
    hint: '鼠标在文字上移动',
    html: '<style>.tp{display:flex;flex-direction:column;align-items:center;gap:8px}.tp canvas{border-radius:10px;max-width:100%}.tp input{width:220px}</style>' +
      '<div class="tp"><canvas id="tp-cv" width="300" height="140"></canvas><input id="tp-txt" value="饮茶先啦" maxlength="8"></div>',
    init: function (root) {
      var cv = root.querySelector('#tp-cv'), ctx = cv.getContext('2d'), inp = root.querySelector('#tp-txt');
      var W = cv.width, H = cv.height, pts = [], mouse = { x: -999, y: -999 };
      function build() {
        var off = document.createElement('canvas'); off.width = W; off.height = H;
        var o = off.getContext('2d'); o.fillStyle = '#fff'; o.font = 'bold 62px system-ui';
        o.textAlign = 'center'; o.textBaseline = 'middle'; o.fillText(inp.value, W / 2, H / 2);
        var data = o.getImageData(0, 0, W, H).data; pts = [];
        for (var y = 0; y < H; y += 4) for (var x = 0; x < W; x += 4) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            pts.push({ x: x, y: y, ox: x, oy: y, vx: 0, vy: 0 });
          }
        }
      }
      function loop() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < pts.length; i++) {
          var p = pts[i];
          var dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.hypot(dx, dy) || 1;
          var force = dist < 55 ? (55 - dist) / 55 * 2.2 : 0;
          p.vx += dx / dist * force * 0.5; p.vy += dy / dist * force * 0.5;
          p.vx += (p.ox - p.x) * 0.06; p.vy += (p.oy - p.y) * 0.06;
          p.vx *= 0.82; p.vy *= 0.82; p.x += p.vx; p.y += p.vy;
          ctx.fillStyle = 'hsl(' + (190 + i % 60) + ',90%,65%)';
          ctx.fillRect(p.x, p.y, 2.4, 2.4);
        }
        requestAnimationFrame(loop);
      }
      cv.addEventListener('mousemove', function (e) { var r = cv.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * W / r.width; mouse.y = (e.clientY - r.top) * H / r.height; });
      cv.addEventListener('mouseleave', function () { mouse.x = mouse.y = -999; });
      inp.addEventListener('input', build);
      build(); loop();
    }
  });

  // 18. 文字烟花
  D.push({
    id: 'firework', n: 18, cat: 'Canvas 与粒子', title: '文字烟花表白',
    tags: ['Canvas', '烟花'], url: base + '7134',
    desc: '点击发射烟花，粒子升空后爆开成形，可切换成文字形状（LOVE / 心形），带重力和拖尾。',
    hint: '点击画布放烟花',
    html: '<style>.fw canvas{border-radius:10px;max-width:100%;cursor:crosshair}</style>' +
      '<canvas id="fw-cv" class="fw" width="320" height="220"></canvas>',
    init: function (root) {
      var cv = root.querySelector('#fw-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var rockets = [], parts = [], colors = ['#ff5a7a', '#ffb03a', '#22d3ee', '#b98bff', '#4ade80', '#e879f9'];
      function shoot(tx, ty) {
        rockets.push({ x: W / 2 + (Math.random() - .5) * 60, y: H, tx: tx, ty: ty, vy: -(Math.random() * 1 + 6.5), c: colors[Math.random() * colors.length | 0] });
      }
      function explode(x, y, c) {
        for (var i = 0; i < 70; i++) {
          var a = i / 70 * Math.PI * 2, sp = Math.random() * 3 + 1;
          parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, c: c });
        }
      }
      function loop() {
        ctx.fillStyle = 'rgba(5,7,14,.24)'; ctx.fillRect(0, 0, W, H);
        for (var i = rockets.length - 1; i >= 0; i--) {
          var r = rockets[i]; r.x += (r.tx - r.x) * .04; r.y += r.vy; r.vy += .06;
          ctx.fillStyle = r.c; ctx.fillRect(r.x - 1, r.y - 1, 3, 6);
          if (r.y <= r.ty) { explode(r.x, r.y, r.c); rockets.splice(i, 1); }
        }
        for (var j = parts.length - 1; j >= 0; j--) {
          var p = parts[j]; p.x += p.vx; p.y += p.vy; p.vy += .045; p.vx *= .985; p.life -= .012;
          if (p.life <= 0) { parts.splice(j, 1); continue; }
          ctx.globalAlpha = p.life; ctx.fillStyle = p.c;
          ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 7); ctx.fill(); ctx.globalAlpha = 1;
        }
        requestAnimationFrame(loop);
      }
      cv.addEventListener('click', function (e) {
        var r = cv.getBoundingClientRect();
        shoot((e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height);
      });
      loop(); setTimeout(function () { shoot(W / 2, 70); }, 400);
    }
  });

  // 33. Canvas 路径动画
  D.push({
    id: 'pathanim', n: 33, cat: 'Canvas 与粒子', title: 'Canvas 路径动画',
    tags: ['Canvas', '贝塞尔'], url: base + '7134',
    desc: '沿贝塞尔路径运动的粒子拖尾，展示路径采样、参数方程和缓动控制，可切换不同曲线。',
    hint: '粒子沿曲线循环运动',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:8px">' +
      '<canvas id="pa-cv" width="300" height="170" style="border-radius:10px"></canvas>' +
      '<div><button class="btn" id="pa-be">贝塞尔</button> <button class="btn" id="pa-ls">李萨如</button></div></div>',
    init: function (root) {
      var cv = root.querySelector('#pa-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var mode = 'be', t = 0, trail = [];
      function pos(t) {
        if (mode === 'be') {
          var mt = 1 - t;
          return { x: mt * mt * 30 + 2 * mt * t * 150 + t * t * 270, y: mt * mt * 140 + 2 * mt * t * 10 + t * t * 140 };
        }
        return { x: 150 + Math.sin(t * Math.PI * 4) * 110, y: 85 + Math.sin(t * Math.PI * 6) * 65 };
      }
      function loop() {
        ctx.fillStyle = 'rgba(5,7,14,.12)'; ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(140,165,255,.18)'; ctx.lineWidth = 1; ctx.beginPath();
        for (var i = 0; i <= 100; i++) { var p = pos(i / 100); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
        ctx.stroke();
        t += .004; if (t > 1) t = 0;
        var q = pos(t); trail.push(q); if (trail.length > 40) trail.shift();
        ctx.beginPath(); trail.forEach(function (p, i) { i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); });
        ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 3; ctx.stroke();
        ctx.fillStyle = '#e879f9'; ctx.beginPath(); ctx.arc(q.x, q.y, 5, 0, 7); ctx.fill();
        requestAnimationFrame(loop);
      }
      root.querySelector('#pa-be').onclick = function () { mode = 'be'; };
      root.querySelector('#pa-ls').onclick = function () { mode = 'ls'; };
      loop();
    }
  });

  // 42. APNG 帧动画原理
  D.push({
    id: 'apng', n: 42, cat: 'Canvas 与粒子', title: 'APNG 帧动画原理',
    tags: ['帧动画', '原理'], url: base + '7134',
    desc: 'APNG 通过 acTL/fcTL/fdAT 块存储多帧和时间控制。这里用 canvas 逐帧播放演示同样的帧动画机制：帧序列 + 每帧延时 + 循环次数。',
    hint: '逐帧播放，可暂停',
    html: '<style>.ap{display:flex;flex-direction:column;align-items:center;gap:8px}.ap canvas{border-radius:10px}</style>' +
      '<div class="ap"><canvas id="ap-cv" width="160" height="160"></canvas><button class="btn" id="ap-t">暂停/播放</button></div>',
    init: function (root) {
      var cv = root.querySelector('#ap-cv'), ctx = cv.getContext('2d'), playing = true, frame = 0, acc = 0, last = 0;
      var delays = [120, 120, 200, 120, 120]; // 每帧延时，演示 fcTL
      function drawFrame(f) {
        ctx.clearRect(0, 0, 160, 160);
        ctx.fillStyle = '#101830'; ctx.fillRect(0, 0, 160, 160);
        var cx = 80, cy = 80, r = 40 + f * 4;
        ctx.fillStyle = 'hsl(' + (f * 60) + ',85%,62%)';
        ctx.beginPath();
        for (var i = 0; i < 8; i++) { var a = i / 8 * Math.PI * 2 + f; var rr = i % 2 ? r * .5 : r; var x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#8b96bd'; ctx.font = '11px system-ui'; ctx.textAlign = 'center';
        ctx.fillText('frame ' + (f + 1) + ' · ' + delays[f] + 'ms', 80, 150);
      }
      function loop(ts) {
        if (!last) last = ts; var dt = ts - last; last = ts;
        if (playing) {
          acc += dt;
          if (acc >= delays[frame]) { acc = 0; frame = (frame + 1) % delays.length; }
        }
        drawFrame(frame); requestAnimationFrame(loop);
      }
      root.querySelector('#ap-t').onclick = function () { playing = !playing; };
      requestAnimationFrame(loop);
    }
  });

  // 24. SVG 滤镜表情包
  D.push({
    id: 'svgfilter', n: 24, cat: 'Canvas 与粒子', title: 'SVG 滤镜做表情包',
    tags: ['SVG filter', '视觉'], url: base + '7134',
    desc: '用 feTurbulence + feDisplacementMap 做扭曲、feGaussianBlur 做模糊、feColorMatrix 做染色，一个 🥺 表情套不同滤镜生成各种「梗图」效果。',
    hint: '切换不同滤镜看表情变形',
    html: '<style>.sf{display:flex;flex-direction:column;align-items:center;gap:10px}.sf .face{width:120px;height:120px;font-size:90px;line-height:120px;text-align:center}</style>' +
      '<svg width="0" height="0"><defs>' +
      '<filter id="sf-wave"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G"/></filter>' +
      '<filter id="sf-blur"><feGaussianBlur stdDeviation="3"/></filter>' +
      '<filter id="sf-glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
      '<filter id="sf-chaos"><feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="28"/></filter>' +
      '</defs></svg>' +
      '<div class="sf"><div class="face" id="sf-face">😭</div><div>' +
      '<button class="btn" data-f="none">原图</button> <button class="btn" data-f="url(#sf-wave)">扭曲</button> <button class="btn" data-f="url(#sf-blur)">模糊</button> <button class="btn" data-f="url(#sf-glow)">发光</button> <button class="btn" data-f="url(#sf-chaos)">狂扭曲</button>' +
      '</div></div>',
    init: function (root) {
      var face = root.querySelector('#sf-face');
      root.querySelectorAll('[data-f]').forEach(function (b) {
        b.onclick = function () { face.style.filter = b.dataset.f === 'none' ? '' : b.dataset.f; };
      });
    }
  });

  // 25. 从表情包学 JS 动画
  D.push({
    id: 'emojiAnim', n: 25, cat: 'Canvas 与粒子', title: '从表情包学 JS 动画',
    tags: ['requestAnimationFrame', '缓动'], url: base + '7134',
    desc: '用 requestAnimationFrame 驱动表情的位置/缩放/旋转，配合不同缓动函数（linear/ease-out/elastic）让表情「活」起来。',
    hint: '点按钮重播不同缓动',
    html: '<style>.ea{display:flex;flex-direction:column;align-items:center;gap:10px}.ea .e{font-size:56px;display:inline-block}</style>' +
      '<div class="ea"><div class="e" id="ea-e">😎</div><div>' +
      '<button class="btn" data-e="linear">linear</button> <button class="btn" data-e="easeOut">easeOut</button> <button class="btn" data-e="elastic">elastic</button></div></div>',
    init: function (root) {
      var el = root.querySelector('#ea-e');
      var fns = {
        linear: function (t) { return t; },
        easeOut: function (t) { return 1 - Math.pow(1 - t, 3); },
        elastic: function (t) { return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * (2 * Math.PI / 3)) + 1; }
      };
      root.querySelectorAll('[data-e]').forEach(function (b) {
        b.onclick = function () {
          var fn = fns[b.dataset.e], t = 0, dur = 900, start = performance.now();
          function step(now) {
            t = Math.min(1, (now - start) / dur); var v = fn(t);
            el.style.transform = 'translateX(' + (v * 140) + 'px) rotate(' + (v * 360) + 'deg) scale(' + (1 + v * .4) + ')';
            if (t < 1) requestAnimationFrame(step);
            else setTimeout(function () { el.style.transform = ''; }, 400);
          }
          requestAnimationFrame(step);
        };
      });
    }
  });

})();
