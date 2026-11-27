/**
 * 舞台读数条 · 右上角显示 draw calls / 三角形 / fps
 *
 *   const hud = createHud(stageEl);
 *   // update 里
 *   hud.tick(dt, `合批 · draw calls ${renderer.info.render.calls} · 三角形 ${k} k`);
 *
 * 读的是「上一帧」的 renderer.info（它每帧开头自动清零），所以放在 update 里没问题。
 */
export function createHud(stageEl, opts = {}) {
  const el = document.createElement('div');
  el.className = 'stage-hint';
  el.style.left = 'auto';
  el.style.right = '14px';
  el.style.fontFamily = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  el.style.color = opts.color || '#9fe8ff';
  stageEl.appendChild(el);

  let fps = 60;
  let acc = 0;
  let frames = 0;

  return {
    el,
    tick(dt, text) {
      acc += dt;
      frames += 1;
      if (acc < 0.4) return el.textContent;
      fps = frames / acc;
      acc = 0;
      frames = 0;
      el.textContent = `${text} · ${fps.toFixed(0)} fps`;
      return el.textContent;
    },
    dispose() {
      if (el.parentNode) el.parentNode.removeChild(el);
    },
  };
}
