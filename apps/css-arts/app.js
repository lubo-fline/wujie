/* CSS 创意工坊 · 渲染器 */
(function () {
  var ARTS = window.ARTS || [];
  var ORDER = ['视觉特效', '布局与图形', '动画动效', '实用技巧', '资源与清单'];
  var tabsEl = document.getElementById('tabs'), gridEl = document.getElementById('grid');
  var cats = [];
  ARTS.forEach(function (d) { if (cats.indexOf(d.cat) < 0) cats.push(d.cat); });
  cats.sort(function (a, b) { return ORDER.indexOf(a) - ORDER.indexOf(b); });
  var active = cats[0];
  function esc(s) { return String(s).replace(/</g, '&lt;'); }

  function renderTabs() {
    tabsEl.innerHTML = '';
    cats.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'tab' + (c === active ? ' on' : '');
      var n = ARTS.filter(function (d) { return d.cat === c; }).length;
      b.textContent = c + ' · ' + n;
      b.onclick = function () { active = c; renderTabs(); renderGrid(); };
      tabsEl.appendChild(b);
    });
  }

  function renderGrid() {
    gridEl.innerHTML = '';
    var list = ARTS.filter(function (d) { return d.cat === active; });
    list.forEach(function (d, i) {
      var card = document.createElement('div');
      card.className = 'card';
      var tags = (d.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('');
      var stageInner = d.resource
        ? '<div class="reslist">' + (d.links || []).map(function (l) {
            return '<a class="resitem" href="' + l.u + '" target="_blank"><b>' + esc(l.t) + '</b><div class="d">' + esc(l.d || '') + '</div></a>';
          }).join('') + '</div>'
        : (d.html || '');
      card.innerHTML =
        '<div class="meta"><span class="num">' + (d.n || (i + 1)) + '</span>' + tags + '</div>' +
        '<h3>' + esc(d.title) + '</h3>' +
        '<p class="desc">' + (d.desc || '') + '</p>' +
        '<div class="stage" id="stage-' + d.id + '">' + stageInner + '</div>' +
        (d.hint ? '<div class="hint">' + d.hint + '</div>' : '') +
        (d.url ? '<a class="src" href="' + d.url + '" target="_blank">阅读原文 →</a>' : '');
      gridEl.appendChild(card);
      if (!d.resource && typeof d.init === 'function') {
        try { d.init(document.getElementById('stage-' + d.id)); }
        catch (e) { console.error('init failed', d.id, e); }
      }
    });
    document.getElementById('stDemo').textContent = ARTS.filter(function (d) { return !d.resource; }).length;
    document.getElementById('stCat').textContent = cats.length;
  }
  renderTabs(); renderGrid();
})();
