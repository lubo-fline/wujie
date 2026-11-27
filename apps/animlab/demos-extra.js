/* 补充 demo：requestAnimationFrame、汉字笔顺 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  // 10. requestAnimationFrame
  D.push({
    id: 'raf', n: 10, cat: '动画库与方案', title: 'requestAnimationFrame 上手',
    tags: ['rAF', '帧循环'], url: base + '6991297852462858277',
    desc: '文章讲的神奇动画 API。rAF 会按屏幕刷新率回调、切后台自动暂停，比 setInterval 更顺更省电。这里对比 rAF 与 setInterval 驱动同一个小球，看谁更平滑。',
    hint: '两个小球同时运动，rAF 版更顺；切到别的标签页 rAF 自动暂停',
    html: '<style>.rf{width:100%;display:flex;flex-direction:column;gap:10px}.rf .track{height:26px;border-radius:13px;background:rgba(0,0,0,.3);position:relative;overflow:hidden}.rf .ball{position:absolute;top:4px;width:18px;height:18px;border-radius:50%;left:0}.rf .lab{font-size:10px;color:#6f7ba5}</style>' +
      '<div class="rf"><div class="lab">requestAnimationFrame（平滑）</div><div class="track"><div class="ball" id="rf-a" style="background:#7c9dff"></div></div>' +
      '<div class="lab">setInterval(16ms)（易抖）</div><div class="track"><div class="ball" id="rf-b" style="background:#e879f9"></div></div>' +
      '<div class="hint" id="rf-fps">FPS: --</div></div>',
    init: function (root) {
      var a = root.querySelector('#rf-a'), b = root.querySelector('#rf-b'), fpsEl = root.querySelector('#rf-fps');
      var trackW = 260, pa = 0, pb = 0, dir = 1, frames = 0, last = performance.now();
      function rafLoop(now) {
        frames++;
        pa += 1.6 * dir; if (pa > trackW || pa < 0) dir *= -1;
        a.style.transform = 'translateX(' + pa + 'px)';
        if (now - last >= 1000) { fpsEl.textContent = 'FPS: ' + frames; frames = 0; last = now; }
        requestAnimationFrame(rafLoop);
      }
      requestAnimationFrame(rafLoop);
      setInterval(function () { pb += 1.6 * dir2; if (pb > trackW || pb < 0) dir2 *= -1; b.style.transform = 'translateX(' + pb + 'px)'; }, 16);
      var dir2 = 1;
    }
  });

  // 17. 汉字笔顺动画
  D.push({
    id: 'stroke', n: 17, cat: 'Canvas 与粒子', title: '汉字笔顺动画',
    tags: ['笔顺', 'Canvas'], url: base + '7134',
    desc: '汉字笔顺动画的核心是把每个笔画做成 SVG path，再用 stroke-dasharray/offset 逐笔绘制。这里用 SVG 演示「永」字八法的逐笔书写（简化路径）。',
    hint: '点重写，看逐笔书写',
    html: '<style>.sk{display:flex;flex-direction:column;align-items:center;gap:8px}.sk svg path{fill:none;stroke:#7fd8d0;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}</style>' +
      '<div class="sk"><svg width="170" height="170" viewBox="0 0 170 170" id="sk-svg">' +
      '<path d="M85 20 L85 150"/>' +
      '<path d="M40 60 Q85 50 130 55"/>' +
      '<path d="M85 80 Q60 110 35 140"/>' +
      '<path d="M85 80 Q110 110 138 140"/>' +
      '<path d="M50 100 L120 100"/>' +
      '<path d="M85 95 L60 135"/>' +
      '</svg><button class="btn" id="sk-b">重写「永」</button></div>',
    init: function (root) {
      var svg = root.querySelector('#sk-svg'), paths = svg.querySelectorAll('path');
      function write() {
        paths.forEach(function (p, i) {
          var len = p.getTotalLength();
          p.style.strokeDasharray = len; p.style.strokeDashoffset = len; p.style.transition = 'none';
          void p.getBoundingClientRect();
          p.style.transition = 'stroke-dashoffset .55s ease ' + (i * .5) + 's';
          p.style.strokeDashoffset = 0;
        });
      }
      root.querySelector('#sk-b').onclick = write; setTimeout(write, 300);
    }
  });

})();
