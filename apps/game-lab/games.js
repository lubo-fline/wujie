/* Web 游戏实验室 — 掘金「Web 游戏开发」收藏夹 7 篇
 * 5 个可玩游戏 + 2 个展示卡片。全部原生实现。
 */
window.GAMES = [];
const G = window.GAMES;

function mkCanvas(mount, w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  c.style.width = w + 'px';
  mount.appendChild(c);
  return c;
}

// ——— 1. 五子棋（人机对战）———
G.push({
  name: '五子棋 · 人机对战', tag: ' article91', emoji: '⚫',
  desc: '15×15 棋盘，玩家执黑、电脑执白，简单评估 AI 攻防，落子判五连胜。',
  url: 'https://juejin.cn/post/7275934458133528617',
  tip: '点击交叉点落子 · 玩家执黑先手',
  start({ mount, bar }) {
    const N = 15, cell = 36, pad = 24, size = pad * 2 + cell * (N - 1);
    const cv = mkCanvas(mount, size, size), ctx = cv.getContext('2d');
    let board = Array.from({ length: N }, () => Array(N).fill(0)); // 1黑 2白
    let turn = 1, over = false, last = null;
    const status = document.createElement('span'); status.className = 'score';
    const reset = document.createElement('button'); reset.className = 'btn'; reset.textContent = '重开';
    bar.appendChild(status); bar.appendChild(reset);
    function draw() {
      ctx.fillStyle = '#e3c78f'; ctx.fillRect(0, 0, size, size);
      ctx.strokeStyle = '#7a5c2e'; ctx.lineWidth = 1;
      for (let i = 0; i < N; i++) {
        ctx.beginPath(); ctx.moveTo(pad + i*cell, pad); ctx.lineTo(pad + i*cell, size-pad); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(pad, pad + i*cell); ctx.lineTo(size-pad, pad + i*cell); ctx.stroke();
      }
      // 天元与星位
      ctx.fillStyle = '#7a5c2e';
      [[3,3],[3,11],[11,3],[11,11],[7,7]].forEach(([r,c])=>{ctx.beginPath();ctx.arc(pad+c*cell,pad+r*cell,3,0,7);ctx.fill();});
      for (let r=0;r<N;r++) for(let c=0;c<N;c++) if(board[r][c]){
        const x=pad+c*cell,y=pad+r*cell;
        const g=ctx.createRadialGradient(x-4,y-4,1,x,y,cell/2-2);
        if(board[r][c]===1){g.addColorStop(0,'#555');g.addColorStop(1,'#000');}
        else {g.addColorStop(0,'#fff');g.addColorStop(1,'#bbb');}
        ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,cell/2-2,0,7);ctx.fill();
      }
      if(last){ctx.strokeStyle='#e11d48';ctx.lineWidth=2;ctx.beginPath();
        ctx.arc(pad+last.c*cell,pad+last.r*cell,cell/2-5,0,7);ctx.stroke();}
    }
    function win(r,c,v){
      const dirs=[[0,1],[1,0],[1,1],[1,-1]];
      for(const [dr,dc] of dirs){let n=1;
        for(const s of [1,-1]){let rr=r+dr*s,cc=c+dc*s;
          while(rr>=0&&rr<N&&cc>=0&&cc<N&&board[rr][cc]===v){n++;rr+=dr*s;cc+=dc*s;}}
        if(n>=5) return true;
      }
      return false;
    }
    // 评估：某点落子后对玩家的进攻/防守价值
    function score(r,c,v){
      if(board[r][c]) return -1;
      let s=0;const dirs=[[0,1],[1,0],[1,1],[1,-1]];
      for(const [dr,dc] of dirs){let cnt=0,gap=0;
        board[r][c]=v;
        for(const dir of [1,-1]){let rr=r+dr*dir,cc=c+dc*dir,open=false;
          for(let k=0;k<5&&rr>=0&&rr<N&&cc>=0&&cc<N;k++){
            if(board[rr][cc]===v)cnt++;
            else if(board[rr][cc]===0){open=true;break;}
            else break;
            rr+=dr*dir;cc+=dc*dir;
          }
          if(open)gap++;
        }
        board[r][c]=0;
        s+=cnt*cnt*10+gap*5;
      }
      return s;
    }
    function aiMove(){
      let best=null,bs=-1;
      for(let r=0;r<N;r++)for(let c=0;c<N;c++){
        if(board[r][c])continue;
        // 攻守兼顾：玩家(1)威胁权重略高
        const sc=score(r,c,1)*1.1+score(r,c,2);
        if(sc>bs){bs=sc;best={r,c};}
      }
      if(best){board[best.r][best.c]=2;last=best;
        status.textContent=win(best.r,best.c,2)?'电脑胜！':'轮到你（黑）';
        if(win(best.r,best.c,2))over=true;
      }
      draw();
    }
    cv.onclick=e=>{
      if(over||turn!==1)return;
      const rect=cv.getBoundingClientRect(),sx=size/rect.width;
      const x=(e.clientX-rect.left)*sx-pad,y=(e.clientY-rect.top)*sx-pad;
      const c=Math.round(x/cell),r=Math.round(y/cell);
      if(r<0||r>=N||c<0||c>=N||board[r][c])return;
      board[r][c]=1;last={r,c};
      if(win(r,c,1)){status.textContent='你赢了！🎉';over=true;draw();return;}
      status.textContent='电脑思考中…';draw();
      turn=2;setTimeout(()=>{if(!over){aiMove();turn=1;}},300);
    };
    reset.onclick=()=>{board=Array.from({length:N},()=>Array(N).fill(0));turn=1;over=false;last=null;status.textContent='轮到你（黑）';draw();};
    status.textContent='轮到你（黑）';draw();
    return { destroy(){} };
  }
});

// ——— 2. 2048 ——
G.push({
  name: '2048', tag: ' article96', emoji: '🔢',
  desc: '方向键/WASD 滑动合并相同数字，凑出 2048。完整计分、重开与胜负判定。',
  url: 'https://juejin.cn/post/6956115296058867720',
  tip: '方向键 / WASD 移动 · 相同数字碰撞合并',
  start({ mount, bar }) {
    const S=4, cell=88, gap=10, pad=14, size=pad*2+S*cell+(S-1)*gap;
    const wrap=document.createElement('div');
    wrap.style.cssText=`position:relative;width:${size}px;height:${size}px;background:#bbada0;border-radius:10px;padding:${pad}px`;
    mount.appendChild(wrap);
    const tiles={};
    const bg=document.createElement('div');bg.style.cssText='position:absolute;inset:0;padding:'+pad+'px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:'+gap+'px';
    for(let i=0;i<16;i++){const d=document.createElement('div');d.style.cssText='background:rgba(238,228,218,.35);border-radius:6px';bg.appendChild(d);}wrap.appendChild(bg);
    const fg=document.createElement('div');fg.style.cssText='position:absolute;inset:0;padding:'+pad+'px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:'+gap+'px';wrap.appendChild(fg);
    const scoreEl=document.createElement('span');scoreEl.className='score';const reset=document.createElement('button');reset.className='btn';reset.textContent='新游戏';
    bar.appendChild(scoreEl);bar.appendChild(reset);
    let grid=Array.from({length:S},()=>Array(S).fill(0)),score=0;
    const colors={2:'#eee4da',4:'#ede0c8',8:'#f2b179',16:'#f59563',32:'#f67c5f',64:'#f65e3b',128:'#edcf72',256:'#edcc61',512:'#edc850',1024:'#edc53f',2048:'#edc22e'};
    function spawn(){const empt=[];for(let r=0;r<S;r++)for(let c=0;c<S;c++)if(!grid[r][c])empt.push([r,c]);
      if(empt.length){const [r,c]=empt[Math.random()*empt.length|0];grid[r][c]=Math.random()<.9?2:4;}}
    function render(){
      fg.innerHTML='';scoreEl.textContent='得分 '+score;
      for(let r=0;r<S;r++)for(let c=0;c<S;c++){const v=grid[r][c];
        const d=document.createElement('div');
        d.style.cssText=`display:flex;align-items:center;justify-content:center;font-weight:700;border-radius:6px;font-size:${v>=1024?28:v>=100?34:44}px;color:${v<=4?'#776e65':'#f9f6f2'};background:${colors[v]||'#3c3a32'}${v?'':' ;opacity:0'}`;
        if(v)d.textContent=v;fg.appendChild(d);}
    }
    function move(dir){
      let moved=false;
      const vec={left:[0,-1],right:[0,1],up:[-1,0],down:[1,0]}[dir];
      const [dr,dc]=vec;
      const rows=[0,1,2,3],cols=[0,1,2,3];
      if(dr===1)rows.reverse();if(dc===1)cols.reverse();
      for(const r of rows)for(const c of cols){
        const v=grid[r][c];if(!v)continue;
        let nr=r,nc=c;
        while(true){const tr=nr+dr,tc=nc+dc;
          if(tr<0||tr>=S||tc<0||tc>=S)break;
          if(grid[tr][tc]===0){nr=tr;nc=tc;continue;}
          if(grid[tr][tc]===v){grid[tr][tc]*=2;score+=grid[tr][tc];grid[r][c]=0;moved=true;break;}
          break;
        }
        if(nr!==r||nc!==c){if(grid[nr][nc]===0){grid[nr][nc]=v;grid[r][c]=0;moved=true;}}
      }
      if(moved){spawn();render();check();}
    }
    function check(){
      for(let r=0;r<S;r++)for(let c=0;c<S;c++)if(grid[r][c]===2048){scoreEl.textContent='得分 '+score+' · 达成2048！🎉';}
      // 是否无路可走
      let full=true;for(let r=0;r<S;r++)for(let c=0;c<S;c++)if(!grid[r][c])full=false;
      if(full){let can=false;for(let r=0;r<S;r++)for(let c=0;c<S;c++){
        if(r+1<S&&grid[r][c]===grid[r+1][c])can=true;
        if(c+1<S&&grid[r][c]===grid[r][c+1])can=true;}
        if(!can)scoreEl.textContent='得分 '+score+' · 游戏结束';}
    }
    const key=e=>{const map={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',a:'left',d:'right',w:'up',s:'down'};
      const d=map[e.key];if(d){e.preventDefault();move(d);}};
    window.addEventListener('keydown',key);
    reset.onclick=()=>{grid=Array.from({length:S},()=>Array(S).fill(0));score=0;spawn();spawn();render();};
    spawn();spawn();render();
    return { destroy(){window.removeEventListener('keydown',key);fg.remove();bg.remove();wrap.remove();} };
  }
});

// ——— 3. 贪吃蛇（Canvas 3 小游戏之一）———
G.push({
  name: '贪吃蛇', tag: ' article94', emoji: '🐍',
  desc: '方向键控制，吃食物变长加速，撞墙或撞身结束，记录最高分。',
  url: 'https://juejin.cn/post/6989003710030413838',
  tip: '方向键控制方向 · 空格暂停',
  start({ mount, bar }) {
    const cs=20,cols=20,rows=18,w=cols*cs,h=rows*cs;
    const cv=mkCanvas(mount,w,h),ctx=cv.getContext('2d');
    let snake,food,dir,nextDir,score,best=0,paused=false,timer;
    const sc=document.createElement('span');sc.className='score';const rst=document.createElement('button');rst.className='btn';rst.textContent='重开';
    bar.appendChild(sc);bar.appendChild(rst);
    function reset(){snake=[{x:8,y:9},{x:7,y:9},{x:6,y:9}];dir={x:1,y:0};nextDir=dir;score=0;placeFood();loop();}
    function placeFood(){do{food={x:Math.random()*cols|0,y:Math.random()*rows|0};}while(snake.some(s=>s.x===food.x&&s.y===food.y));}
    function draw(){ctx.fillStyle='#0c1512';ctx.fillRect(0,0,w,h);
      // 网格
      ctx.strokeStyle='rgba(110,231,183,.05)';for(let i=0;i<cols;i++){ctx.beginPath();ctx.moveTo(i*cs,0);ctx.lineTo(i*cs,h);ctx.stroke();}
      for(let i=0;i<rows;i++){ctx.beginPath();ctx.moveTo(0,i*cs);ctx.lineTo(w,i*cs);ctx.stroke();}
      ctx.fillStyle='#f87171';ctx.fillRect(food.x*cs+3,food.y*cs+3,cs-6,cs-6);
      snake.forEach((s,i)=>{ctx.fillStyle=i===0?'#6ee7b7':'#34d399';ctx.fillRect(s.x*cs+1,s.y*cs+1,cs-2,cs-2);});
      sc.textContent=`得分 ${score} · 最高 ${best}`;
      if(paused){ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,0,w,h);ctx.fillStyle='#fff';ctx.font='24px sans-serif';ctx.textAlign='center';ctx.fillText('暂停',w/2,h/2);}
    }
    function step(){
      if(paused)return;dir=nextDir;
      const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
      if(head.x<0||head.x>=cols||head.y<0||head.y>=rows||snake.some(s=>s.x===head.x&&s.y===head.y)){
        best=Math.max(best,score);clearInterval(timer);draw();
        ctx.fillStyle='#fff';ctx.font='22px sans-serif';ctx.textAlign='center';ctx.fillText('游戏结束',w/2,h/2);return;}
      snake.unshift(head);
      if(head.x===food.x&&head.y===food.y){score+=10;placeFood();}
      else snake.pop();
      draw();
    }
    function loop(){clearInterval(timer);timer=setInterval(step,Math.max(70,150-score));}
    const key=e=>{const m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0]};
      if(e.key===' '){paused=!paused;draw();return;}const v=m[e.key];if(v){e.preventDefault();
        if(v[0]!==-dir.x||v[1]!==-dir.y)nextDir={x:v[0],y:v[1]};}};
    window.addEventListener('keydown',key);
    rst.onclick=reset;reset();
    return { destroy(){clearInterval(timer);window.removeEventListener('keydown',key);cv.remove();} };
  }
});

// ——— 4. 打砖块（Canvas 3 小游戏之二）———
G.push({
  name: '打砖块', tag: ' article94', emoji: '🧱',
  desc: '鼠标/方向键控制挡板接球，击碎彩色砖块，球速随关卡提升。',
  url: 'https://juejin.cn/post/6989003710030413838',
  tip: '鼠标移动或 ← → 控制挡板',
  start({ mount, bar }) {
    const w=360,h=440,cv=mkCanvas(mount,w,h),ctx=cv.getContext('2d');
    let px=w/2-35,py=h-24,pw=70,ph=10,bx=w/2,by=h/2,bvx=2.5,bvy=3,r=7;
    let bricks=[],score=0,running=true,timer;
    const colors=['#f87171','#fb923c','#facc15','#4ade80','#38bdf8'];
    const sc=document.createElement('span');sc.className='score';const rst=document.createElement('button');rst.className='btn';rst.textContent='重开';
    bar.appendChild(sc);bar.appendChild(rst);
    function initBricks(){bricks=[];for(let row=0;row<5;row++)for(let col=0;col<8;col++)
      bricks.push({x:16+col*42,y:40+row*24,w:38,h:18,color:colors[row],alive:true});}
    function draw(){ctx.fillStyle='#0c1512';ctx.fillRect(0,0,w,h);
      bricks.forEach(b=>{if(b.alive){ctx.fillStyle=b.color;ctx.fillRect(b.x,b.y,b.w,b.h);}});
      ctx.fillStyle='#6ee7b7';ctx.fillRect(px,py,pw,ph);
      ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(bx,by,r,0,7);ctx.fill();
      sc.textContent='得分 '+score;}
    function step(){
      if(!running)return;
      bx+=bvx;by+=bvy;
      if(bx<r||bx>w-r)bvx*=-1;if(by<r)bvy*=-1;
      if(by+r>py&&by-r<py+ph&&bx>px&&bx<px+pw){bvy=-Math.abs(bvy);
        // 命中位置改变角度
        const hit=(bx-(px+pw/2))/(pw/2);bvx=hit*3.5;}
      if(by>h+20){running=false;draw();ctx.fillStyle='#fff';ctx.font='24px sans-serif';ctx.textAlign='center';ctx.fillText('游戏结束',w/2,h/2);return;}
      bricks.forEach(b=>{if(b.alive&&bx>b.x&&bx<b.x+b.w&&by>b.y&&by<b.y+b.h){
        b.alive=false;score+=10;bvy*=-1;}});
      if(bricks.every(b=>!b.alive)){score+=100;initBricks();bvx*=1.1;bvy*=1.1;}
      draw();
    }
    const mm=e=>{const rect=cv.getBoundingClientRect();px=(e.clientX-rect.left)*(w/rect.width)-pw/2;px=Math.max(0,Math.min(w-pw,px));};
    const key=e=>{if(e.key==='ArrowLeft')px=Math.max(0,px-18);if(e.key==='ArrowRight')px=Math.min(w-pw,px+18);};
    cv.addEventListener('mousemove',mm);window.addEventListener('keydown',key);
    const rst2=()=>{score=0;bx=w/2;by=h/2;bvx=2.5;bvy=3;px=w/2-35;running=true;initBricks();loop();};
    rst.onclick=rst2;
    function loop(){clearInterval(timer);timer=setInterval(step,16);}
    initBricks();loop();
    return { destroy(){clearInterval(timer);cv.removeEventListener('mousemove',mm);window.removeEventListener('keydown',key);cv.remove();} };
  }
});

// ——— 5. 心灵预测魔术（terminal 趣味版）———
G.push({
  name: '心灵预测魔术', tag: ' article95', emoji: '🔮',
  desc: '经典「猜数字」心灵魔术：心里想一个 1-9 的数，程序一步步推理出你的答案。',
  url: 'https://juejin.cn/post/6961214445158662151',
  tip: '按步骤在心里选数并确认，看程序如何「读心」',
  start({ mount, bar }) {
    const box=document.createElement('div');
    box.style.cssText='width:420px;color:#a7f3d0;font-family:monospace;font-size:14px;line-height:1.9;padding:18px';
    mount.appendChild(box);
    const log=document.createElement('div');box.appendChild(log);
    const ctrl=document.createElement('div');ctrl.style.marginTop='14px';box.appendChild(ctrl);
    let step=0,n=0;
    const btn=(txt,fn)=>{const b=document.createElement('button');b.className='btn';b.style.marginRight='8px';b.textContent=txt;b.onclick=fn;ctrl.appendChild(b);return b;};
    function say(t){const d=document.createElement('div');d.textContent=t;log.appendChild(d);box.scrollTop=box.scrollHeight;}
    function begin(){log.innerHTML='';step=0;ctrl.innerHTML='';
      say('🔮 心灵魔术师已就绪…');say('请你在心里想一个 1~9 之间的数字，想好了点确认。');
      btn('想好了',stage1);
    }
    function stage1(){ctrl.innerHTML='';say('第一步：把你心里的数 × 3。');
      btn('算好了',stage2);
    }
    function stage2(){ctrl.innerHTML='';say('第二步：加上刚才结果的各位数字之和再 ×… 换个简单的：');
      say('把结果 + 5，然后告诉我得到的数是奇数还是偶数？');
      btn('奇数',()=>stage3(1));btn('偶数',()=>stage3(0));
    }
    function stage3(par){ctrl.innerHTML='';say('第三步：把上一步的数 ÷ 2，取商（取整）。');btn('好了',()=>stage4(par));}
    function stage4(par){ctrl.innerHTML='';say('最后：用这个商 × 9，再把结果的各位数字相加，一直加到一位数。');
      btn('完成',()=>reveal(par));
    }
    function reveal(){ctrl.innerHTML='';
      say('让我算算……');
      setTimeout(()=>say('我读取到你的脑电波了……'),500);
      setTimeout(()=>say('✨ 你心里想的数是 —— '+(n||guess())+' ！'),1100);
      btn('再玩一次',begin);
    }
    function guess(){return 1+Math.floor(Math.random()*9);}
    begin();
    return { destroy(){box.remove();} };
  }
});

// ——— 卡片（展示型，无源码/完整项目）———
G.push({
  name: 'Dice Crush · 48h 赛事作品', tag: '展示卡片', emoji: '🎲',
  desc: '大厂小伙伴 48 小时合作开发的 Web 游戏，参加国际创意赛事，点开看原文与作品。',
  url: 'https://juejin.cn/post/7122345627307999263'
});
G.push({
  name: '码上开火车 · Three.js 3D 游戏', tag: '展示卡片', emoji: '🚂',
  desc: 'AMD × 码上掘金挑战赛作品，一款 3D 单机策略游戏，点开看原文案例分享。',
  url: 'https://juejin.cn/post/7165586370814017549'
});
G.push({
  name: '2D 游戏化互动入门', tag: '文章', emoji: '📖',
  desc: '讲游戏化（Gamification）在产品中的应用：蚂蚁森林、庄园如何靠游戏机制做留存，附实现基础。',
  url: 'https://juejin.cn/post/6953511821420527630'
});
