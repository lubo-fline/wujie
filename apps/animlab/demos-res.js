/* 资源盘点类 · 文章清单卡片 */
(function () {
  var D = window.DEMOS;
  var base = 'https://juejin.cn/post/';

  function resCard(n, title, url, desc, links) {
    D.push({
      id: 'res' + n, n: n, cat: '资源盘点', title: title, resource: true,
      tags: ['资源清单', '文章'], url: base + url, desc: desc,
      hint: '以下为文章要点摘录，点击可看原文',
      html: '<div class="reslist">' + links.map(function (l) {
        return '<div class="resitem"><div><a href="' + (l.url || '#') + '" target="_blank">' + l.name + '</a><div class="d">' + l.d + '</div></div></div>';
      }).join('') + '</div>'
    });
  }

  resCard(4, '27 个前端动画库', '7069945906518294536',
    '盘点了 27 个动画库，按 CSS / JS / React / 综合分类。精选常用的做成清单。', [
      { name: 'GSAP', url: 'https://gsap.com', d: '工业级动画库，时间轴控制强大，复杂交互动效首选' },
      { name: 'Anime.js', url: 'https://animejs.com', d: '轻量 JS 动画库，API 简洁，支持 SVG/CSS/JS 属性' },
      { name: 'Framer Motion', url: 'https://www.framer.com/motion', d: 'React 动画库，声明式，手势与布局动画开箱即用' },
      { name: 'Lottie', url: 'https://lottiefiles.com', d: '播放 AE 导出的 JSON 动画，设计与开发协作利器' },
      { name: 'Mo.js', url: 'https://mojs.io', d: ' Motion 图形库，擅长爆炸、粒子等炫酷效果' },
      { name: 'Popmotion', url: 'https://popmotion.io', d: '函数式动画原语，弹簧/缓动底层能力' },
      { name: 'Animate.css', url: 'https://animate.style', d: '现成 CSS 动画类，加个 class 就能用' },
      { name: 'Hover.css', url: 'https://ianlunn.github.io/Hover', d: '专注 hover 效果的 CSS 库' }
    ]);

  resCard(7, '十大网页炫酷特效', '7106018120036253710',
    '十个让人眼前一亮的网页特效，收藏了实现思路与出处。', [
      { name: '粒子.city', d: '鼠标交互的粒子背景，距离场连线' },
      { name: '液态 / 水波按钮', d: 'hover 时按钮像水面一样波动' },
      { name: '文字烟花', d: '点击绽放文字形状烟花（本合集已实现 → Canvas 分类）' },
      { name: '3D 卡片翻转', d: 'CSS 3D 变换 + 景深（本合集已实现 → CSS 分类）' },
      { name: '滚动视差', d: '多层背景按滚动速度差移动' },
      { name: '字体的粒子化', d: '文字拆成粒子再聚合（本合集已实现）' },
      { name: 'Canvas 流动背景', d: '噪声/流体模拟背景' },
      { name: '雷达扫描', d: 'conic-gradient 扫描（本合集已实现）' }
    ]);

  resCard(9, '10 个 CSS 动画库', '6859713431755784205',
    '专讲 CSS 动画库的一篇，这里整理核心库与适用场景。', [
      { name: 'Animate.css', url: 'https://animate.style', d: '最流行的 CSS 动画类库，几十种现成效果' },
      { name: 'Hover.css', url: 'https://ianlunn.github.io/Hover', d: 'hover 特效集合' },
      { name: 'Magic.css', url: 'https://miniapi.github.io/magic.css', d: '魔法感 3D 动画' },
      { name: 'CSShake', url: 'https://elrumordelaluz.github.io/csshake', d: '抖动动画，做出「 shaking」效果' },
      { name: 'Animation.css / Wow.js', url: 'https://wowjs.uk', d: '滚动到视口才触发的入场动画' },
      { name: 'AOS', url: 'https://michalsnik.github.io/aos', d: '滚动动画库，配合 IntersectionObserver' }
    ]);

  resCard(22, '淘系互动团队技术沉淀', '7106018120036253710',
    '淘系互动团队的娱乐化技术沉淀，覆盖互动游戏、动效引擎、工程化。', [
      { name: '互动游戏引擎', d: '淘宝互动项目的游戏化框架与渲染方案' },
      { name: '动效编排', d: '复杂营销活动的动画编排与性能治理' },
      { name: '3D / WebGL 互动', d: '电商场景的 3D 商品展示与互动' },
      { name: '性能优化', d: '低端机降级、帧率稳定、包体积控制' },
      { name: '工程化', d: '活动页快速搭建与复用体系' }
    ]);

  resCard(35, '魔改和上线合成大西瓜', '7134',
    '《从0开始做合成大西瓜》的续篇：如何魔改规则、加广告位、打包上线。本合集已实现可玩版 → 游戏分类。', [
      { name: '魔改方向', d: '改水果尺寸/合成表、加道具、换皮主题' },
      { name: '物理引擎', d: '原版用 matter.js，本合集用轻量圆形碰撞' },
      { name: '上线流程', d: '打包 H5、适配微信、埋点与广告接入' },
      { name: '性能优化', d: '贴图合图、对象池、低端机降帧' }
    ]);

})();
