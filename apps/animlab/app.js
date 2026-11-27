/* 前端动效实验室 · 渲染器：把 window.DEMOS 渲染成卡片并初始化 */
(function () {
  var DEMOS = window.DEMOS || [];
  var CAT_ORDER = ['CSS 动画与特效', 'Canvas 与粒子', '游戏与互动', '动画库与方案', '框架实战', '资源盘点'];
  var tabsEl = document.getElementById('tabs');
  var gridEl = document.getElementById('grid');

  var cats = [];
  DEMOS.forEach(function (d) { if (cats.indexOf(d.cat) < 0) cats.push(d.cat); });
  cats.sort(function (a, b) { return CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b); });

  var active = cats[0];

  function esc(s) { return String(s).replace(/</g, '&lt;'); }

  function renderTabs() {
    tabsEl.innerHTML = '';
    cats.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'tab' + (c === active ? ' on' : '');
      var n = DEMOS.filter(function (d) { return d.cat === c; }).length;
      b.textContent = c + ' · ' + n;
      b.onclick = function () { active = c; renderTabs(); renderGrid(); };
      tabsEl.appendChild(b);
    });
  }

  function renderGrid() {
    gridEl.innerHTML = '';
    var list = DEMOS.filter(function (d) { return d.cat === active; });
    list.forEach(function (d, i) {
      var card = document.createElement('div');
      card.className = 'card';
      var tags = (d.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
      card.innerHTML =
        '<div class="meta"><span class="num">' + (d.n || (i + 1)) + '</span>' + tags + '</div>' +
        '<h3>' + esc(d.title) + '</h3>' +
        '<p class="desc">' + (d.desc || '') + '</p>' +
        '<div class="stage" id="stage-' + d.id + '">' + (d.html || '') + '</div>' +
        (d.hint ? '<div class="hint">' + d.hint + '</div>' : '') +
        (d.url ? '<a class="src" href="' + d.url + '" target="_blank">阅读原文 →</a>' : '');
      gridEl.appendChild(card);
      if (typeof d.init === 'function') {
        try { d.init(document.getElementById('stage-' + d.id)); }
        catch (e) { console.error('demo init failed', d.id, e); }
      }
    });
    document.getElementById('stDemo').textContent = DEMOS.filter(function (d) { return !d.resource; }).length;
    document.getElementById('stCat').textContent = cats.length;
  }

  renderTabs();
  renderGrid();
})();
