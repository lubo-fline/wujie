/* 框架实战（补到 lib.js 分类之外，归入框架实战） */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  D.push({
    id: 'webrtc', n: 5, cat: '框架实战', title: '摄像头 + 运动检测',
    tags: ['WebRTC', 'getUserMedia'], url: base + '7171711316422295560',
    desc: 'WebRTC + TensorFlow.js 做运动健康应用的基础：调用摄像头逐帧取像，用帧差法检测画面变化（人脸/肢体移动的轻量替代），统计运动强度。本 demo 需授权摄像头。',
    hint: '点开启并授权摄像头；无摄像头也能看帧差原理说明',
    html: '<div style="display:flex;flex-direction:column;align-items:center;gap:8px">' +
      '<div id="wc-msg" style="font-size:11px;color:#6f7ba5;text-align:center;max-width:260px;line-height:1.6">帧差法：对相邻两帧灰度图求差，变化像素占比即运动强度。点下方按钮授权摄像头实测。</div>' +
      '<video id="wc-v" style="width:220px;border-radius:10px;display:none" autoplay playsinline muted></video>' +
      '<canvas id="wc-cv" width="220" height="150" style="border-radius:10px"></canvas>' +
      '<div class="hint" id="wc-s">运动强度：--</div><button class="btn" id="wc-b">开启摄像头</button></div>',
    init: function (root) {
      var v = root.querySelector('#wc-v'), cv = root.querySelector('#wc-cv'), ctx = cv.getContext('2d');
      var W = cv.width, H = cv.height, prev = null, started = false;
      root.querySelector('#wc-b').onclick = function () {
        if (started) return;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          root.querySelector('#wc-msg').textContent = '当前环境不支持摄像头（http/沙箱限制），此处仅演示帧差算法：把任意动态画面送入即可检测变化。'; return;
        }
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
          v.srcObject = stream; v.style.display = 'block'; started = true;
          v.addEventListener('loadedmetadata', function () { v.play(); });
        }).catch(function () { root.querySelector('#wc-msg').textContent = '摄像头未授权或不可用。帧差原理：相邻帧像素差 → 运动强度。'; });
      };
      function loop() {
        if (started && v.videoWidth) {
          ctx.drawImage(v, 0, 0, W, H);
          var d = ctx.getImageData(0, 0, W, H).data, gray = new Uint8Array(W * H);
          for (var i = 0; i < W * H; i++) gray[i] = (d[i*4] * .3 + d[i*4+1] * .59 + d[i*4+2] * .11);
          if (prev) {
            var diff = 0; for (var j = 0; j < gray.length; j++) if (Math.abs(gray[j] - prev[j]) > 18) diff++;
            var pct = (diff / gray.length * 100).toFixed(1);
            root.querySelector('#wc-s').textContent = '运动强度：' + pct + '% ' + (pct > 3 ? '🏃 检测到运动' : '· 静止');
          }
          prev = gray;
        } else {
          // 无摄像头：画一个模拟的移动目标演示帧差概念
          ctx.fillStyle = '#0d1326'; ctx.fillRect(0, 0, W, H);
          var t = performance.now() / 1000;
          ctx.fillStyle = 'rgba(124,157,255,.5)'; ctx.beginPath();
          ctx.arc(W/2 + Math.sin(t)*70, H/2 + Math.cos(t*1.3)*40, 18, 0, 7); ctx.fill();
          ctx.fillStyle = '#8b96bd'; ctx.font = '11px system-ui'; ctx.textAlign = 'center';
          ctx.fillText('模拟运动目标（原理演示）', W/2, 20);
        }
        requestAnimationFrame(loop);
      }
      loop();
    }
  });

})();
