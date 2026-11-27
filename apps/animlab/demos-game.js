/* 游戏与互动 · 5 篇落地 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  // 14. 九宫格抽奖
  D.push({
    id: 'lottery9', n: 14, cat: '游戏与互动', title: '九宫格抽奖',
    tags: ['抽奖', '定时器'], url: base + '7134',
    desc: '经典九宫格抽奖：格子依次高亮，速度由快到慢，最后停在奖品格。用 setTimeout 递增长度实现缓停。',
    hint: '点开始抽奖，看它缓停',
    html: '<style>.l9{display:flex;flex-direction:column;align-items:center;gap:10px}.l9 .g{display:grid;grid-template-columns:repeat(3,58px);grid-template-rows:repeat(3,50px);gap:5px}.l9 .c{background:#1b2340;border:1px solid rgba(140,165,255,.2);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:11px;color:#9fabd4;transition:.12s}.l9 .c.on{background:linear-gradient(135deg,#7c9dff,#b98bff);color:#0a1020;font-weight:700;transform:scale(1.05)}</style>' +
      '<div class="l9"><div class="g" id="l9g"></div><button class="btn" id="l9b">开始抽奖</button><div class="hint" id="l9r"></div></div>',
    init: function (root) {
      var prizes = ['一等奖', '二等奖', '三等奖', '谢谢参与', '红包', '优惠券', '神秘奖', '积分', '再来一次'];
      var g = root.querySelector('#l9g'), cells = [];
      prizes.forEach(function (p) { var c = document.createElement('div'); c.className = 'c'; c.textContent = p; g.appendChild(c); cells.push(c); });
      var order = [0, 1, 2, 5, 8, 7, 6, 3], running = false;
      root.querySelector('#l9b').onclick = function () {
        if (running) return; running = true;
        var steps = 24 + Math.floor(Math.random() * 16), i = 0, idx = 0, delay = 60;
        function step() {
          cells.forEach(function (c) { c.classList.remove('on'); });
          cells[order[idx]].classList.add('on');
          idx = (idx + 1) % order.length; i++;
          if (i < steps) { delay = Math.min(320, delay * 1.12); setTimeout(step, delay); }
          else { running = false; root.querySelector('#l9r').textContent = '🎉 恭喜抽中：' + cells[order[(idx - 1 + order.length) % order.length]].textContent; }
        }
        step();
      };
    }
  });

  // 16. 大转盘抽奖
  D.push({
    id: 'wheel', n: 16, cat: '游戏与互动', title: '大转盘抽奖',
    tags: ['Canvas', '缓动'], url: base + '7134',
    desc: 'Canvas 绘制扇形转盘，点击后按 ease-out 缓动旋转若干圈停在随机奖项，指针指向结果。',
    hint: '点按钮转动转盘',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:10px">' +
      '<canvas id="wh-cv" width="220" height="220" style="border-radius:50%"></canvas>' +
      '<button class="btn" id="wh-b">转动</button><div class="hint" id="wh-r"></div></div>',
    init: function (root) {
      var cv = root.querySelector('#wh-cv'), ctx = cv.getContext('2d');
      var labels = ['一等奖', '谢谢参与', '三等奖', '红包', '二等奖', '积分'], n = labels.length;
      var colors = ['#ff5a7a', '#334066', '#b98bff', '#22d3ee', '#ffb03a', '#4ade80'];
      var angle = 0, spinning = false;
      function draw() {
        ctx.clearRect(0, 0, 220, 220); var arc = Math.PI * 2 / n;
        for (var i = 0; i < n; i++) {
          var a0 = angle + i * arc - Math.PI / 2, a1 = a0 + arc;
          ctx.beginPath(); ctx.moveTo(110, 110); ctx.arc(110, 110, 100, a0, a1); ctx.closePath();
          ctx.fillStyle = colors[i]; ctx.fill();
          ctx.save(); ctx.translate(110, 110); ctx.rotate(angle + (i + .5) * arc);
          ctx.fillStyle = '#0a1020'; ctx.font = 'bold 12px system-ui'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
          ctx.fillText(labels[i], 88, 0); ctx.restore();
        }
        ctx.fillStyle = '#e7ecff'; ctx.beginPath(); ctx.arc(110, 110, 22, 0, 7); ctx.fill();
        ctx.fillStyle = '#0a1020'; ctx.font = 'bold 12px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('GO', 110, 110);
        // 顶部指针
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(110, 4); ctx.lineTo(102, 22); ctx.lineTo(118, 22); ctx.closePath(); ctx.fill();
      }
      root.querySelector('#wh-b').onclick = function () {
        if (spinning) return; spinning = true;
        var target = Math.random() * n, turns = 5, start = 0, dur = 3200, startTime = performance.now();
        var finalAngle = turns * Math.PI * 2 - (target + .5) * (Math.PI * 2 / n);
        function step(now) {
          var t = Math.min(1, (now - startTime) / dur);
          var e = 1 - Math.pow(1 - t, 4);
          angle = finalAngle * e; draw();
          if (t < 1) requestAnimationFrame(step);
          else { spinning = false; root.querySelector('#wh-r').textContent = '🎉 ' + labels[target]; }
        }
        requestAnimationFrame(step);
      };
      draw();
    }
  });

  // 34/35. 合成大西瓜
  D.push({
    id: 'watermelon', n: 34, cat: '游戏与互动', title: '合成大西瓜',
    tags: ['游戏', '物理碰撞'], url: base + '7134',
    desc: '简化版合成大西瓜：点击投放水果，相同等级碰撞合成更大一级，累积到最高级「大西瓜」。用轻量圆形碰撞 + 重力模拟。',
    hint: '点击上方投放，相同的会合成',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:8px">' +
      '<div class="hint">移动鼠标选位置，点击投放</div>' +
      '<canvas id="wm-cv" width="260" height="360" style="border-radius:10px;cursor:crosshair"></canvas>' +
      '<button class="btn" id="wm-r">重新开始</button><div class="hint" id="wm-s"></div></div>',
    init: function (root) {
      var cv = root.querySelector('#wm-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var fruits = [
        { r: 12, c: '#ff6b6b' }, { r: 16, c: '#ffa94d' }, { r: 21, c: '#ffd43b' },
        { r: 27, c: '#69db7c' }, { r: 34, c: '#4dabf7' }, { r: 42, c: '#b197fc' }, { r: 52, c: '#e64980' }
      ];
      var balls = [], dropX = W / 2, score = 0, nextLv = 0, lock = false;
      function reset() { balls = []; score = 0; }
      cv.addEventListener('mousemove', function (e) { var r = cv.getBoundingClientRect(); dropX = Math.max(20, Math.min(W - 20, (e.clientX - r.left) * W / r.width)); });
      cv.addEventListener('click', function () {
        if (lock) return; lock = true;
        balls.push({ x: dropX, y: 22, vx: 0, vy: 0, lv: nextLv, r: fruits[nextLv].r, merged: false });
        nextLv = Math.floor(Math.random() * 3); setTimeout(function () { lock = false; }, 500);
      });
      root.querySelector('#wm-r').onclick = reset;
      function physics() {
        for (var i = 0; i < balls.length; i++) {
          var a = balls[i]; a.vy += .35; a.x += a.vx; a.y += a.vy; a.vx *= .99;
          if (a.x - a.r < 0) { a.x = a.r; a.vx *= -.5; } if (a.x + a.r > W) { a.x = W - a.r; a.vx *= -.5; }
          if (a.y + a.r > H) { a.y = H - a.r; a.vy *= -.35; if (Math.abs(a.vy) < 1) a.vy = 0; }
          for (var j = i + 1; j < balls.length; j++) {
            var b = balls[j], dx = b.x - a.x, dy = b.y - a.y, dist = Math.hypot(dx, dy) || 1, min = a.r + b.r;
            if (dist < min) {
              var overlap = (min - dist) / 2, nx = dx / dist, ny = dy / dist;
              a.x -= nx * overlap; a.y -= ny * overlap; b.x += nx * overlap; b.y += ny * overlap;
              if (a.lv === b.lv && !a.dead && !b.dead && a.lv < fruits.length - 1) {
                a.dead = b.dead = true; a.lv++; a.r = fruits[a.lv].r; score += (a.lv + 1) * 10;
                if (a.lv === fruits.length - 1) root.querySelector('#wm-s').textContent = '🍉 大西瓜合成成功！';
              }
            }
          }
        }
        balls = balls.filter(function (b) { return !b.dead; });
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(34,211,238,.5)'; ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.moveTo(dropX, 0); ctx.lineTo(dropX, 36); ctx.stroke(); ctx.setLineDash([]);
        balls.forEach(function (b) {
          var f = fruits[b.lv];
          ctx.fillStyle = f.c; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 7); ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.stroke();
          ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.font = 'bold 11px system-ui'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(b.lv + 1, b.x, b.y);
        });
        // 预览
        ctx.globalAlpha = .6; ctx.fillStyle = fruits[nextLv].c; ctx.beginPath(); ctx.arc(dropX, 22, fruits[nextLv].r, 0, 7); ctx.fill(); ctx.globalAlpha = 1;
        root.querySelector('#wm-s').textContent = root.querySelector('#wm-s').textContent || ('分数 ' + score);
        if (root.querySelector('#wm-s').textContent.indexOf('分数') === 0) root.querySelector('#wm-s').textContent = '分数 ' + score;
      }
      function loop() { physics(); draw(); requestAnimationFrame(loop); }
      loop();
    }
  });

  // 3. 爱心代码播放器
  D.push({
    id: 'player', n: 3, cat: '游戏与互动', title: 'BGM 爱心播放器',
    tags: ['Canvas', '音频可视化'], url: base + '7165103268996055048',
    desc: '周杰伦 BGM + 爱心代码：用 Web Audio 分析频谱，驱动屏幕上的爱心粒子随节拍缩放跳动，形成酷炫音乐播放器。',
    hint: '点播放，爱心随「节拍」跳动（内置模拟节拍，无需音频文件）',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:8px">' +
      '<canvas id="pl-cv" width="300" height="200" style="border-radius:10px"></canvas>' +
      '<button class="btn" id="pl-b">▶ 播放心跳</button></div>',
    init: function (root) {
      var cv = root.querySelector('#pl-cv'), ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
      var playing = false, phase = 0, hearts = [];
      for (var i = 0; i < 26; i++) hearts.push({ x: Math.random() * W, y: Math.random() * H, s: Math.random() * .6 + .4, sp: Math.random() * .02 + .01 });
      function heartPath(x, y, s) {
        ctx.beginPath();
        ctx.moveTo(x, y + 8 * s);
        ctx.bezierCurveTo(x - 14 * s, y - 6 * s, x - 6 * s, y - 18 * s, x, y - 8 * s);
        ctx.bezierCurveTo(x + 6 * s, y - 18 * s, x + 14 * s, y - 6 * s, x, y + 8 * s);
        ctx.fill();
      }
      function loop() {
        ctx.clearRect(0, 0, W, H);
        var beat = playing ? (Math.pow(Math.sin(phase), 8) * .6 + 1) : 1;
        hearts.forEach(function (h) {
          h.y -= h.sp * 30; if (h.y < -30) { h.y = H + 30; h.x = Math.random() * W; }
          ctx.globalAlpha = .35 + h.s * .4;
          ctx.fillStyle = ['#ff5a7a', '#ff8fa3', '#e64980'][Math.floor(h.s * 3) % 3];
          heartPath(h.x, h.y, h.s * beat);
        });
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.font = 'bold 22px system-ui';
        ctx.fillText('❤ 周杰伦 · 告白气球', W / 2, H - 18);
        if (playing) phase += .08;
        requestAnimationFrame(loop);
      }
      root.querySelector('#pl-b').onclick = function () { playing = !playing; this.textContent = playing ? '❚❚ 暂停' : '▶ 播放心跳'; };
      loop();
    }
  });

})();
