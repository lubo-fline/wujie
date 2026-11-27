/* WebGL 3D 精选实战合集 — 场景定义
 * 每个 demo: { cat, name, desc, tag, emoji, url, bg, fov, build({THREE,scene,camera,renderer,W,H,addCtl}) -> {update(t),dispose()} }
 * 全部基于原生 three.js（共享舞台注入），零外部模型依赖。
 */
window.DEMOS = [];
const D = window.DEMOS;

// ———————————————— 工具 ————————————————
function disposeScene(scene) {
  scene.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => {
        for (const k in m) { const v = m[k]; if (v && v.isTexture) v.dispose(); }
        m.dispose();
      });
    }
  });
  scene.clear && scene.clear();
}
function stars(THREE, scene, n = 600, spread = 400) {
  const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    p[i*3] = (Math.random()-.5)*spread; p[i*3+1] = (Math.random()-.5)*spread; p[i*3+2] = (Math.random()-.5)*spread;
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const m = new THREE.PointsMaterial({ color: 0x9fc4ff, size: 1.2, sizeAttenuation: true, transparent: true, opacity: .8 });
  const pts = new THREE.Points(g, m); scene.add(pts); return pts;
}
function orbitControls(THREE, camera, renderer) {
  // 轻量自转+拖拽（不引 addons，减少依赖）
  let drag = false, px = 0, py = 0, az = 0, el = 0.2, target = { az: 0, el: 0.2 };
  const dom = renderer.domElement;
  const down = e => { drag = true; px = e.clientX; py = e.clientY; };
  const move = e => { if (!drag) return; target.az -= (e.clientX-px)*.005; target.el += (e.clientY-py)*.005;
    target.el = Math.max(-1.2, Math.min(1.2, target.el)); px = e.clientX; py = e.clientY; };
  const up = () => drag = false;
  dom.addEventListener('mousedown', down); window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
  dom.style.cursor = 'grab';
  return {
    update(dist, auto = 0) {
      if (auto && !drag) target.az += auto;
      az += (target.az - az) * .1; el += (target.el - el) * .1;
      camera.position.set(Math.sin(az)*Math.cos(el)*dist, Math.sin(el)*dist, Math.cos(az)*Math.cos(el)*dist);
      camera.lookAt(0,0,0);
    },
    dispose() { dom.removeEventListener('mousedown', down); window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); }
  };
}

// 1. 赛博朋克 3D 数字地球（文章15/34）
D.push({
  cat: '地球 · 场景', tag: 'Three.js', emoji: '🌐',
  name: '赛博朋克数字地球', desc: '线框地球 + 发光经纬环 + 轨道卫星点，赛博霓虹大屏风。',
  url: 'https://juejin.cn/post/7156414257135982631',
  bg: 0x03060f, fov: 45,
  build({ THREE, scene, camera, renderer, addCtl }) {
    stars(THREE, scene, 900, 500);
    const earth = new THREE.Group(); scene.add(earth);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(10, 48, 32),
      new THREE.MeshPhongMaterial({ color: 0x0a2352, emissive: 0x061634, shininess: 30, transparent: true, opacity: .92 })
    ); earth.add(sphere);
    // 经纬线框
    const wire = new THREE.Mesh(new THREE.SphereGeometry(10.05, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0x24d3ee, wireframe: true, transparent: true, opacity: .18 }));
    earth.add(wire);
    // 发光环
    const ringMat = c => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: .7, side: THREE.DoubleSide });
    const r1 = new THREE.Mesh(new THREE.RingGeometry(13, 13.15, 100), ringMat(0x22d3ee));
    r1.rotation.x = Math.PI/2.4; earth.add(r1);
    const r2 = new THREE.Mesh(new THREE.RingGeometry(14.5, 14.58, 100), ringMat(0xa855f7));
    r2.rotation.x = Math.PI/1.8; r2.rotation.y = .5; earth.add(r2);
    // 陆地随机点簇
    const pg = new THREE.BufferGeometry(), pp = [];
    for (let i=0;i<500;i++){ const a=Math.random()*Math.PI*2, b=(Math.random()-.5)*Math.PI;
      const r=10.15; pp.push(r*Math.cos(b)*Math.cos(a), r*Math.sin(b), r*Math.cos(b)*Math.sin(a)); }
    pg.setAttribute('position', new THREE.Float32BufferAttribute(pp,3));
    const land = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x67e8f9, size: .5, transparent:true, opacity:.9 }));
    earth.add(land);
    // 卫星轨道点
    const sat = new THREE.Mesh(new THREE.SphereGeometry(.35,12,12), new THREE.MeshBasicMaterial({color:0xfbbf24}));
    const satOrbit = new THREE.Group(); satOrbit.add(sat); sat.position.x=12; earth.add(satOrbit);
    scene.add(new THREE.AmbientLight(0x4060a0, 1.4));
    const dl = new THREE.DirectionalLight(0x88bbff, 1.2); dl.position.set(20,15,20); scene.add(dl);
    const ctl = orbitControls(THREE, camera, renderer);
    addCtl('自转速度', 0, 2, .4, .1, v=>ctl._spd=v); ctl._spd=.4;
    return {
      update(t) { earth.rotation.y += .004*ctl._spd*60/60; r1.rotation.z=t*.2; r2.rotation.z=-t*.15;
        satOrbit.rotation.y = t*1.2; ctl.update(34); },
      dispose() { ctl.dispose(); disposeScene(scene); }
    };
  }
});

// 2. 穿越云层 / 星海飞行（文章10）
D.push({
  cat: '地球 · 场景', tag: 'Three.js', emoji: '☁️',
  name: '穿越云层', desc: '数千粒子组成星云隧道，相机持续前进，模拟穿越云层动效。',
  url: 'https://juejin.cn/post/6844904169521215502',
  bg: 0x050a18, fov: 70,
  build({ THREE, scene, camera, addCtl }) {
    camera.position.z = 0;
    const N = 3000, g = new THREE.BufferGeometry(), p = new Float32Array(N*3), col = new Float32Array(N*3);
    const palette = [[0.4,0.7,1],[0.7,0.5,1],[1,0.7,0.9]];
    for (let i=0;i<N;i++){ const a=Math.random()*Math.PI*2, r=6+Math.random()*40;
      p[i*3]=Math.cos(a)*r; p[i*3+1]=Math.sin(a)*r; p[i*3+2]=-Math.random()*200;
      const c=palette[i%3]; col[i*3]=c[0];col[i*3+1]=c[1];col[i*3+2]=c[2]; }
    g.setAttribute('position', new THREE.BufferAttribute(p,3)); g.setAttribute('color', new THREE.BufferAttribute(col,3));
    const mat = new THREE.PointsMaterial({ size:.9, vertexColors:true, transparent:true, opacity:.9, depthWrite:false,
      blending: THREE.AdditiveBlending });
    const pts = new THREE.Points(g, mat); scene.add(pts);
    let speed = 1;
    addCtl('飞行速度', 0, 3, 1, .1, v=>speed=v);
    return {
      update(t){ const a=g.attributes.position.array;
        for(let i=0;i<N;i++){ a[i*3+2]+=speed; if(a[i*3+2]>5) a[i*3+2]-=200; }
        g.attributes.position.needsUpdate=true;
        camera.rotation.z = Math.sin(t*.2)*.05; },
      dispose(){ disposeScene(scene); }
    };
  }
});

// 3. 粒子系统成形（文章8/19）
D.push({
  cat: '粒子 · 花开', tag: 'Three.js', emoji: '✨',
  name: '3D 粒子系统', desc: '粒子在球面 / 螺旋 / 星系三种形态间平滑过渡，可调粒子大小。',
  url: 'https://juejin.cn/post/6844903944856303624',
  bg: 0x04070f, fov: 50,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const N = 4000;
    const g = new THREE.BufferGeometry();
    const pos = new Float32Array(N*3), sph = new Float32Array(N*3), gal = new Float32Array(N*3), col = new Float32Array(N*3);
    for(let i=0;i<N;i++){
      // sphere (Fibonacci)
      const y=1-(i/(N-1))*2, rad=Math.sqrt(1-y*y), th=Math.PI*(3-Math.sqrt(5))*i;
      sph[i*3]=Math.cos(th)*rad*9; sph[i*3+1]=y*9; sph[i*3+2]=Math.sin(th)*rad*9;
      // galaxy
      const br=Math.random()*11, ba=Math.random()*Math.PI*2;
      gal[i*3]=Math.cos(ba)*br; gal[i*3+1]=(Math.random()-.5)*2; gal[i*3+2]=Math.sin(ba)*br;
      pos[i*3]=sph[i*3];pos[i*3+1]=sph[i*3+1];pos[i*3+2]=sph[i*3+2];
      const h=i/N; col[i*3]=.4+.5*h; col[i*3+1]=.5+.4*Math.sin(h*6); col[i*3+2]=1-.3*h;
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos,3));
    g.setAttribute('color', new THREE.BufferAttribute(col,3));
    const mat=new THREE.PointsMaterial({size:.28,vertexColors:true,transparent:true,opacity:.9,blending:THREE.AdditiveBlending,depthWrite:false});
    const pts=new THREE.Points(g,mat); scene.add(pts);
    const ctl=orbitControls(THREE,camera,renderer);
    let mode=0, morph=0, target=0;
    addCtl('粒子大小',.1,.8,.28,.02,v=>mat.size=v);
    addCtl('形态 0球1螺旋2星系',0,2,0,1,v=>{ target=v; });
    return { update(t){
      morph+=(target-morph)*.05;
      const a=g.attributes.position.array;
      const from = mode===0?sph:(mode===1?gal:sph);
      const to = target===0?sph:(target===1?gal:gal);
      for(let i=0;i<N;i++){
        // 螺旋目标：按索引生成 helix
        let tx,ty,tz;
        if(target===1){ const hh=(i/N)*20-Math.PI*4; tx=Math.cos(hh)*7; ty=(i/N-.5)*18; tz=Math.sin(hh)*7; }
        else { tx=to[i*3]; ty=to[i*3+1]; tz=to[i*3+2]; }
        a[i*3]=from[i*3]*(1-morph)+tx*morph;
        a[i*3+1]=from[i*3+1]*(1-morph)+ty*morph;
        a[i*3+2]=from[i*3+2]*(1-morph)+tz*morph;
      }
      g.attributes.position.needsUpdate=true;
      ctl.update(26,.003);
    }, dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 4. 炫彩液晶球 / 流体着色器（文章23）
D.push({
  cat: '着色器 · 光效', tag: 'GLSL', emoji: '🔮',
  name: '炫彩液晶球', desc: '自定义 ShaderMaterial，噪声流动生成液态虹彩球，参数实时可调。',
  url: 'https://juejin.cn/post/7010736837700683820',
  bg: 0x060510, fov: 50,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const uniforms = { uTime:{value:0}, uSpeed:{value:1}, uColorA:{value:new THREE.Color(0x4f46e5)}, uColorB:{value:new THREE.Color(0xec4899)} };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `varying vec3 vN; varying vec3 vP; void main(){ vN=normalize(normalMatrix*normal);
        vec4 mv=modelViewMatrix*vec4(position,1.); vP=mv.xyz; gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform float uTime,uSpeed; uniform vec3 uColorA,uColorB; varying vec3 vN; varying vec3 vP;
        void main(){ vec3 N=normalize(vN), V=normalize(-vP); float fres=pow(1.-max(dot(N,V),0.),2.2);
        float w=sin(vP.y*2.+uTime*uSpeed)*.5+.5; w+=sin(vP.x*3.-uTime*uSpeed*.7)*.25;
        vec3 col=mix(uColorA,uColorB,clamp(w,0.,1.)); col+=fres*vec3(.5,.7,1.);
        col+=pow(max(dot(N,normalize(vec3(1.,1.,1.))),0.),16.)*.6;
        gl_FragColor=vec4(col,1.); }`
    });
    const ball = new THREE.Mesh(new THREE.SphereGeometry(7,96,96), mat); scene.add(ball);
    const halo = new THREE.Mesh(new THREE.SphereGeometry(7.4,48,48), new THREE.MeshBasicMaterial({color:0x8b5cf6,transparent:true,opacity:.08,side:THREE.BackSide}));
    scene.add(halo);
    const ctl=orbitControls(THREE,camera,renderer);
    addCtl('流动速度',0,3,1,.1,v=>uniforms.uSpeed.value=v);
    return { update(t){ uniforms.uTime.value=t; ball.rotation.y=t*.15; ctl.update(20); },
      dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 5. 太阳光与阴影（文章16）
D.push({
  cat: '着色器 · 光效', tag: 'Three.js', emoji: '☀️',
  name: '太阳光与实时阴影', desc: '方向光 + 阴影贴图，旋转的几何体在地面投下真实阴影，可调光位。',
  url: 'https://juejin.cn/post/6844904117398278157',
  bg: 0x111827, fov: 50,
  build({ THREE, scene, camera, renderer, addCtl }) {
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(60,60), new THREE.MeshStandardMaterial({color:0x334155,roughness:.9}));
    ground.rotation.x=-Math.PI/2; ground.position.y=-8; ground.receiveShadow=true; scene.add(ground);
    const objs=[];
    const geos=[new THREE.BoxGeometry(5,5,5), new THREE.SphereGeometry(3.2,32,32), new THREE.TorusGeometry(3,1,16,48), new THREE.ConeGeometry(3,6,32)];
    geos.forEach((g,i)=>{ const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:[0xf87171,0x60a5fa,0x34d399,0xfbbf24][i],roughness:.4,metalness:.2}));
      m.castShadow=true; m.receiveShadow=true; m.position.x=(i-1.5)*9; scene.add(m); objs.push(m); });
    scene.add(new THREE.AmbientLight(0xffffff,.35));
    const sun=new THREE.DirectionalLight(0xfff3d0,2.2); sun.position.set(15,25,12);
    sun.castShadow=true; sun.shadow.mapSize.set(1024,1024); sun.shadow.camera.left=-30;sun.shadow.camera.right=30;
    sun.shadow.camera.top=30;sun.shadow.camera.bottom=-30; sun.shadow.camera.far=80; scene.add(sun);
    const ctl=orbitControls(THREE,camera,renderer);
    addCtl('光源角度',-30,30,15,1,v=>{sun.position.x=v;});
    addCtl('环境光',.1,1,.35,.05,v=>scene.children.find(c=>c.isAmbientLight).intensity=v);
    return { update(t){ objs.forEach((m,i)=>{m.rotation.x=t*(.3+i*.1);m.rotation.y=t*(.5-i*.08);}); ctl.update(38); },
      dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 6. 辉光 / Bloom 后处理（文章12）
D.push({
  cat: '着色器 · 光效', tag: '后处理', emoji: '💫',
  name: '辉光 Bloom 效果', desc: '加色混合多层光晕模拟辉光，发光核心 + 呼吸脉冲，无需后处理管线。',
  url: 'https://juejin.cn/post/6844903987558805527',
  bg: 0x02030a, fov: 50,
  build({ THREE, scene, addCtl }) {
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(3,1),new THREE.MeshBasicMaterial({color:0xffffff})); scene.add(core);
    const glows=[];
    for(let i=0;i<5;i++){ const m=new THREE.Mesh(new THREE.SphereGeometry(3+i*1.6,32,32),
      new THREE.MeshBasicMaterial({color:new THREE.Color().setHSL(.6-i*.06,1,.6),transparent:true,opacity:.12/(i*.6+1),
        blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.BackSide})); scene.add(m); glows.push(m); }
    const ring=new THREE.Mesh(new THREE.TorusGeometry(9,.15,16,120),new THREE.MeshBasicMaterial({color:0x38bdf8}));
    ring.rotation.x=Math.PI/2; scene.add(ring);
    let pulse=true; addCtl('脉动开关(0/1)',0,1,1,1,v=>pulse=v);
    return { update(t){ core.rotation.x=t*.6;core.rotation.y=t*.9;
      const s=pulse?(1+Math.sin(t*3)*.12):1; core.scale.setScalar(s);
      glows.forEach((g,i)=>g.scale.setScalar(s*(1+Math.sin(t*2+i)*.05)));
      ring.rotation.z=t*.4; }, dispose(){disposeScene(scene);} };
  }
});

// 7. 3D 中国地图 / 柱状地图（文章14/22/33）
D.push({
  cat: '数据 · 可视化', tag: 'Three.js', emoji: '🗺️',
  name: '3D 柱状数据地图', desc: '网格柱体阵列按高度映射数据，颜色渐变 + 波纹扫过，数据大屏常用。',
  url: 'https://juejin.cn/post/7229812978789517364',
  bg: 0x06101f, fov: 55,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const grid=16, cell=1.6, bars=[];
    const geo=new THREE.BoxGeometry(1.1,1,1.1);
    for(let i=0;i<grid;i++) for(let j=0;j<grid;j++){
      const h=.5+Math.abs(Math.sin(i*.6)*Math.cos(j*.5))*8;
      const c=new THREE.Color().setHSL(.58-h/24,.85,.55);
      const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:.25,roughness:.4}));
      m.position.set((i-grid/2)*cell, h/2, (j-grid/2)*cell); m.scale.y=h; m.userData={h,i,j};
      scene.add(m); bars.push(m);
    }
    scene.add(new THREE.AmbientLight(0xffffff,.6));
    const dl=new THREE.DirectionalLight(0xaaccff,1);dl.position.set(10,20,10);scene.add(dl);
    const ctl=orbitControls(THREE,camera,renderer);
    addCtl('柱高倍率',.2,2,1,.1,v=>bars.forEach(b=>{b.scale.y=b.userData.h*v;b.position.y=b.userData.h*v/2;}));
    return { update(t){ bars.forEach(b=>{ const wave=Math.sin(t*2-(b.userData.i+b.userData.j)*.4);
      b.material.emissiveIntensity=.2+Math.max(0,wave)*.7; }); ctl.update(30,.002); },
      dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 8. 3D 场景漫游 / 第一人称（文章4）
D.push({
  cat: '场景 · 建筑', tag: 'Three.js', emoji: '🚶',
  name: '场景漫游', desc: '迷宫式建筑群 + 自动巡航相机，模拟双人称场景漫游视角。',
  url: 'https://juejin.cn/post/6844904113617215502',
  bg: 0x0a0f1c, fov: 65,
  build({ THREE, scene, camera, addCtl }) {
    const buildings=[];
    for(let i=0;i<40;i++){
      const w=2+Math.random()*3, h=4+Math.random()*20, d=2+Math.random()*3;
      const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),
        new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.6, .3, .25+Math.random()*.2),roughness:.7,metalness:.3}));
      let x=(Math.random()-.5)*80, z=(Math.random()-.5)*80;
      if(Math.abs(x)<6&&Math.abs(z)<6){x+=15;}
      m.position.set(x,h/2,z); scene.add(m); buildings.push(m);
      const edges=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry),new THREE.LineBasicMaterial({color:0x38bdf8,transparent:true,opacity:.35}));
      m.add(edges);
    }
    const grid=new THREE.GridHelper(100,50,0x1e40af,0x152347); scene.add(grid);
    scene.add(new THREE.AmbientLight(0x445588,.8));
    const dl=new THREE.DirectionalLight(0x99bbff,.8);dl.position.set(20,40,10);scene.add(dl);
    let auto=true; addCtl('自动巡航(0/1)',0,1,1,1,v=>auto=v);
    let az=0; const h=7;
    return { update(t){ if(auto) az=t*.12;
      camera.position.set(Math.cos(az)*22, h+Math.sin(t*.5)*.6, Math.sin(az)*22);
      camera.lookAt(0,4,0); }, dispose(){disposeScene(scene);} };
  }
});

// 9. threejs+vue3 烟花效果（文章11）
D.push({
  cat: '粒子 · 花开', tag: 'Three.js', emoji: '🎆',
  name: '3D 烟花绽放', desc: '点击/自动发射烟花，粒子受重力抛物 + 渐隐，夜空绽放效果。',
  url: 'https://juejin.cn/post/7012234191319984141',
  bg: 0x02030a, fov: 55,
  build({ THREE, scene, camera, renderer }) {
    camera.position.set(0,6,32); camera.lookAt(0,8,0);
    stars(THREE,scene,400,200);
    const fireworks=[], colors=[0xff4d6d,0xffd166,0x4cc9f0,0xb5179e,0x80ed99];
    function burst(){
      const N=160, g=new THREE.BufferGeometry(),p=new Float32Array(N*3),v=[];
      const ox=(Math.random()-.5)*30, oy=8+Math.random()*14, c=colors[(Math.random()*colors.length)|0];
      for(let i=0;i<N;i++){ p[i*3]=ox;p[i*3+1]=oy;p[i*3+2]=0;
        const a=Math.random()*Math.PI*2, b=Math.acos(2*Math.random()-1), sp=4+Math.random()*9;
        v.push(new THREE.Vector3(Math.sin(b)*Math.cos(a)*sp,Math.cos(b)*sp,Math.sin(b)*Math.sin(a)*sp)); }
      g.setAttribute('position',new THREE.BufferAttribute(p,3));
      const m=new THREE.PointsMaterial({color:c,size:.7,transparent:true,opacity:1,blending:THREE.AdditiveBlending,depthWrite:false});
      const pts=new THREE.Points(g,m); scene.add(pts); fireworks.push({pts,g,v,life:0,m});
    }
    burst(); let acc=0;
    const dom=renderer.domElement; const click=()=>burst(); dom.addEventListener('click',click);
    return { update(t,dt){ acc+=.016; if(acc>2.2){acc=0;burst();}
      for(let k=fireworks.length-1;k>=0;k--){ const f=fireworks[k]; f.life+=.016;
        const a=f.g.attributes.position.array;
        for(let i=0;i<f.v.length;i++){ f.v[i].y-=.12; a[i*3]+=f.v[i].x*.016; a[i*3+1]+=f.v[i].y*.016; a[i*3+2]+=f.v[i].z*.016; }
        f.g.attributes.position.needsUpdate=true; f.m.opacity=Math.max(0,1-f.life/2.6);
        if(f.life>2.6){ scene.remove(f.pts);f.g.dispose();f.m.dispose();fireworks.splice(k,1); }
      } }, dispose(){ dom.removeEventListener('click',click);disposeScene(scene);} };
  }
});

// 10. 卡车跑跑 demo（文章9）
D.push({
  cat: '场景 · 建筑', tag: 'Three.js', emoji: '🚚',
  name: '卡车跑跑', desc: '低多边形卡车沿起伏地形前进，相机跟随，路边灯柱掠过。',
  url: 'https://juejin.cn/post/6844904079405604871',
  bg: 0x87a8d0, fov: 55,
  build({ THREE, scene, camera, addCtl }) {
    scene.fog=new THREE.Fog(0x87a8d0,30,120);
    // 地面
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(400,400,60,60),new THREE.MeshStandardMaterial({color:0x6b8e5a,roughness:1}));
    ground.rotation.x=-Math.PI/2; scene.add(ground);
    // 卡车（Box 拼装）
    const truck=new THREE.Group();
    const body=new THREE.Mesh(new THREE.BoxGeometry(2.4,1,5),new THREE.MeshStandardMaterial({color:0xef4444}));
    body.position.y=1;truck.add(body);
    const cab=new THREE.Mesh(new THREE.BoxGeometry(2.2,1.6,1.8),new THREE.MeshStandardMaterial({color:0xf8fafc}));
    cab.position.set(0,1.8,1.6);truck.add(cab);
    const win=new THREE.Mesh(new THREE.BoxGeometry(1.9,.9,.1),new THREE.MeshStandardMaterial({color:0x38bdf8,metalness:.6}));
    win.position.set(0,1.95,2.5);truck.add(win);
    const wheels=[];
    [[-1.2,-1.6],[1.2,-1.6],[-1.2,1.6],[1.2,1.6]].forEach(([x,z])=>{
      const w=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,.3,16),new THREE.MeshStandardMaterial({color:0x1f2937}));
      w.rotation.z=Math.PI/2;w.position.set(x,.6,z);truck.add(w);wheels.push(w); });
    scene.add(truck);
    // 路边灯柱
    for(let i=0;i<30;i++){ const pole=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,6,8),new THREE.MeshStandardMaterial({color:0x94a3b8}));
      pole.position.set(i%2?8:-8,3,-i*14+40);scene.add(pole); }
    scene.add(new THREE.HemisphereLight(0xffffff,0x445533,1.2));
    const dl=new THREE.DirectionalLight(0xffffff,1);dl.position.set(20,40,20);scene.add(dl);
    let speed=1;addCtl('车速',.2,3,.6,.1,v=>speed=v);
    let dist=0;
    return { update(t){ dist+=speed*.3; truck.position.z=-(dist%600)+20;
      truck.position.y=Math.sin(t*3)*.03; wheels.forEach(w=>w.rotation.x+=speed*.2);
      camera.position.set(8,5,truck.position.z+13);camera.lookAt(truck.position.x,1,truck.position.z-6); },
      dispose(){disposeScene(scene);} };
  }
});

// 11. 艾尔登法环火焰 logo（文章32）
D.push({
  cat: '着色器 · 光效', tag: 'GLSL', emoji: '🔥',
  name: '火焰特效 Logo', desc: 'Shader 噪声滚动生成火焰，中心发光标识在火中浮现，速度可调。',
  url: 'https://juejin.cn/post/7018485410746109959',
  bg: 0x050208, fov: 50,
  build({ THREE, scene, camera, addCtl }) {
    const uniforms={uTime:{value:0},uSpeed:{value:1}};
    const mat=new THREE.ShaderMaterial({uniforms,transparent:true,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending,
      vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`uniform float uTime,uSpeed;varying vec2 vUv;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.;a*=.5;}return v;}
        void main(){vec2 uv=vUv;uv.y-=uTime*uSpeed*.35;
          float n=fbm(uv*6.+vec2(0.,uTime*uSpeed));
          float body=1.-abs(vUv.x-.5)*2.;body=pow(max(body,0.),.6);
          float flame=smoothstep(.35,.85,n)*body*(1.-vUv.y*.3);
          vec3 col=mix(vec3(1.,.3,0.),vec3(1.,.95,.5),flame);
          col=mix(col,vec3(1.,1.,.9),pow(flame,3.));
          gl_FragColor=vec4(col,flame*body); }`});
    const fire=new THREE.Mesh(new THREE.PlaneGeometry(10,14),mat);scene.add(fire);
    // 中心 logo 圆环
    const logo=new THREE.Mesh(new THREE.TorusGeometry(2.4,.25,16,64),new THREE.MeshBasicMaterial({color:0xfbbf24}));
    logo.position.z=.3;scene.add(logo);
    const inner=new THREE.Mesh(new THREE.RingGeometry(1.6,1.9,6),new THREE.MeshBasicMaterial({color:0xfef3c7,side:THREE.DoubleSide}));
    inner.position.z=.32;scene.add(inner);
    addCtl('火焰速度',0,3,1,.1,v=>uniforms.uSpeed.value=v);
    return { update(t){uniforms.uTime.value=t;logo.rotation.z=t*.2;inner.rotation.z=-t*.3;},
      dispose(){disposeScene(scene);} };
  }
});

// 12. tweenjs 场景动画（文章30）
D.push({
  cat: '动画 · 交互', tag: 'Three.js', emoji: '🎼',
  name: 'Tween 场景编舞', desc: '多个几何体按缓动曲线错峰入场、绕轨、缩放，演示补间动画编排。',
  url: 'https://juejin.cn/post/6844904054235838472',
  bg: 0x0a0a18, fov: 50,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const objs=[];
    const shapes=[new THREE.BoxGeometry(2,2,2),new THREE.SphereGeometry(1.3,32,32),new THREE.ConeGeometry(1.4,2.6,32),
      new THREE.TorusGeometry(1.4,.5,16,48),new THREE.OctahedronGeometry(1.5),new THREE.TorusKnotGeometry(1.1,.4,64,16)];
    shapes.forEach((g,i)=>{const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(i/6,.8,.6),roughness:.3,metalness:.5}));
      scene.add(m);objs.push(m);});
    scene.add(new THREE.AmbientLight(0xffffff,.5));
    const dl=new THREE.DirectionalLight(0xffffff,1.2);dl.position.set(10,15,10);scene.add(dl);
    const ctl=orbitControls(THREE,camera,renderer);
    let tempo=1;addCtl('节奏',.3,2.5,1,.1,v=>tempo=v);
    // 简易 easeInOutCubic
    const ease=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
    return { update(t){ const tt=t*tempo;
      objs.forEach((m,i)=>{const phase=(tt*.5+i*0.35);
        const r=6+Math.sin(phase)*2, a=phase+i*(Math.PI*2/objs.length);
        m.position.set(Math.cos(a)*r, Math.sin(phase*1.3+i)*3, Math.sin(a)*r);
        m.rotation.x=phase; m.rotation.y=phase*.7;
        const sc=.6+ease((Math.sin(phase*2)*.5+.5))*.6; m.scale.setScalar(sc);
      }); ctl.update(20,.004); }, dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 13. 下雨 / 雨雪粒子（three-lab 已有但收藏夹也有，做天空雨帘）
D.push({
  cat: '粒子 · 花开', tag: 'Three.js', emoji: '🌧️',
  name: '下雨粒子', desc: '数千条雨丝循环下落 + 地面涟漪点，可调雨量密度与风速。',
  url: 'https://juejin.cn/post/6844904121930745864',
  bg: 0x0b1220, fov: 55,
  build({ THREE, scene, camera, addCtl }) {
    camera.position.set(0,4,16);camera.lookAt(0,4,0);
    const N=2500, g=new THREE.BufferGeometry(),p=new Float32Array(N*6);
    const rain=[];
    for(let i=0;i<N;i++){const x=(Math.random()-.5)*60,y=Math.random()*40,z=(Math.random()-.5)*40,len=.8+Math.random()*1.5;
      rain.push({x,y,z,len,v:20+Math.random()*20});}
    g.setAttribute('position',new THREE.BufferAttribute(p,3));
    const mat=new THREE.LineBasicMaterial({color:0x9dc4ff,transparent:true,opacity:.5});
    const lines=new THREE.LineSegments(g,mat);scene.add(lines);
    let wind=0;addCtl('风力',-1,1,0,.05,v=>wind=v);
    return { update(t){const a=g.attributes.position.array;
      for(let i=0;i<N;i++){const r=rain[i];r.y-=r.v*.016;r.x+=wind*.05;
        if(r.y<0){r.y=40;r.x=(Math.random()-.5)*60;}
        a[i*6]=r.x;a[i*6+1]=r.y;a[i*6+2]=r.z;
        a[i*6+3]=r.x+wind*.3;a[i*6+4]=r.y-r.len;a[i*6+5]=r.z;}
      g.attributes.position.needsUpdate=true; },dispose(){disposeScene(scene);} };
  }
});

// 14. 炫酷 3D 登陆页（文章35）
D.push({
  cat: '动画 · 交互', tag: 'Three.js', emoji: '🛰️',
  name: '3D 登陆页背景', desc: '漂浮的几何碎片环绕中心发光体，鼠标视差，适合做网站 Hero 背景。',
  url: 'https://juejin.cn/post/7018485410746109959',
  bg: 0x050914, fov: 55,
  build({ THREE, scene, camera, renderer }) {
    const center=new THREE.Mesh(new THREE.IcosahedronGeometry(4,1),
      new THREE.MeshStandardMaterial({color:0x6366f1,emissive:0x312e81,emissiveIntensity:.6,roughness:.2,metalness:.7,flatShading:true}));
    scene.add(center);
    const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(4.3,1),new THREE.MeshBasicMaterial({color:0x818cf8,wireframe:true,transparent:true,opacity:.3}));
    scene.add(wire);
    const shards=[];
    for(let i=0;i<60;i++){const g=new THREE.TetrahedronGeometry(.4+Math.random()*.7);
      const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.6+Math.random()*.15,.8,.6),roughness:.4,metalness:.6}));
      const r=8+Math.random()*12, a=Math.random()*Math.PI*2, b=(Math.random()-.5)*Math.PI;
      m.position.set(Math.cos(a)*Math.cos(b)*r,Math.sin(b)*r,Math.sin(a)*Math.cos(b)*r);
      scene.add(m);shards.push(m);}
    scene.add(new THREE.AmbientLight(0x8899ff,.6));
    const dl=new THREE.DirectionalLight(0xffffff,1.2);dl.position.set(10,10,10);scene.add(dl);
    let mx=0,my=0;const dom=renderer.domElement;
    const mv=e=>{mx=(e.clientX/innerWidth-.5);my=(e.clientY/innerHeight-.5);};window.addEventListener('mousemove',mv);
    return { update(t){center.rotation.x=t*.1;center.rotation.y=t*.15;wire.rotation.y=-t*.1;
      shards.forEach((m,i)=>{m.rotation.x=t*(.2+i*.01);m.rotation.y=t*.15;});
      camera.position.set(mx*6,my*4+2,26);camera.lookAt(0,0,0);},
      dispose(){window.removeEventListener('mousemove',mv);disposeScene(scene);} };
  }
});

// 15. 综合 3D 场景 / 几何变形（文章18）
D.push({
  cat: '场景 · 建筑', tag: 'Three.js', emoji: '🧊',
  name: '综合 3D 场景', desc: '多种基础几何体 + 镜面地板 + 环绕光，涵盖 three.js 常用基础能力。',
  url: 'https://juejin.cn/post/7018485410746109959',
  bg: 0x0a0d18, fov: 50,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const geos=[new THREE.BoxGeometry(3,3,3),new THREE.SphereGeometry(2,32,32),new THREE.TorusGeometry(2,.7,16,64),
      new THREE.TorusKnotGeometry(1.6,.5,80,20),new THREE.IcosahedronGeometry(2,0),new THREE.CylinderGeometry(1.5,1.5,3,32)];
    const objs=[];
    geos.forEach((g,i)=>{const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(i/6,.75,.55),roughness:.25,metalness:.65}));
      const a=i/geos.length*Math.PI*2;m.position.set(Math.cos(a)*9,0,Math.sin(a)*9);scene.add(m);objs.push(m);});
    // 反射地板（用半透明+网格近似）
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.MeshStandardMaterial({color:0x111827,roughness:.15,metalness:.8}));
    floor.rotation.x=-Math.PI/2;floor.position.y=-4;scene.add(floor);
    const grid=new THREE.GridHelper(60,30,0x334155,0x1e293b);grid.position.y=-3.99;scene.add(grid);
    scene.add(new THREE.AmbientLight(0xffffff,.4));
    [0xff6b6b,0x4ecdc4,0xffe66d].forEach((c,i)=>{const l=new THREE.PointLight(c,1.5,60);
      l.position.set(Math.cos(i*2)*10,6,Math.sin(i*2)*10);scene.add(l);});
    const ctl=orbitControls(THREE,camera,renderer);
    addCtl('公转速度',0,2,.5,.1,v=>ctl._s=v);ctl._s=.5;
    return { update(t){objs.forEach((m,i)=>{m.rotation.x=t*(.3+i*.05)*ctl._s;m.rotation.y=t*.4*ctl._s;});
      ctl.update(30,.002*ctl._s);},dispose(){ctl.dispose();disposeScene(scene);} };
  }
});

// 16. 群星送福 / 文字粒子（文章8）
D.push({
  cat: '粒子 · 花开', tag: 'Three.js', emoji: '🎇',
  name: '文字粒子动画', desc: '用 canvas 采样文字轮廓生成粒子点阵，粒子聚合显字后炸散重组。',
  url: 'https://juejin.cn/post/6844903944856303624',
  bg: 0x03050d, fov: 50,
  build({ THREE, scene, camera, addCtl }) {
    camera.position.z=40;
    const cv=document.createElement('canvas');cv.width=400;cv.height=140;
    const ctx=cv.getContext('2d');ctx.fillStyle='#fff';ctx.font='bold 92px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('HELLO',200,70);
    const img=ctx.getImageData(0,0,400,140).data;
    const targets=[];
    for(let y=0;y<140;y+=2)for(let x=0;x<400;x+=2){ if(img[(y*400+x)*4+3]>128) targets.push([(x-200)*.09,(70-y)*.09,0]); }
    const N=targets.length, g=new THREE.BufferGeometry(),p=new Float32Array(N*3),base=new Float32Array(N*3);
    for(let i=0;i<N;i++){ const a=Math.random()*Math.PI*2,r=20+Math.random()*20;
      p[i*3]=Math.cos(a)*r;p[i*3+1]=Math.sin(a)*r;p[i*3+2]=(Math.random()-.5)*10;
      base[i*3]=targets[i][0];base[i*3+1]=targets[i][1];base[i*3+2]=targets[i][2];}
    g.setAttribute('position',new THREE.BufferAttribute(p,3));
    const mat=new THREE.PointsMaterial({color:0x67e8f9,size:.28,transparent:true,opacity:.95,blending:THREE.AdditiveBlending});
    const pts=new THREE.Points(g,mat);scene.add(pts);
    let gather=0;addCtl('聚合程度',0,1,0,.01,v=>gather=v);
    return { update(t){const a=g.attributes.position.array;
      for(let i=0;i<N;i++){ a[i*3]+=(base[i*3]-a[i*3])*gather*.12;
        a[i*3+1]+=(base[i*3+1]-a[i*3+1])*gather*.12;
        a[i*3+2]+=(base[i*3+2]-a[i*3+2])*gather*.12; }
      g.attributes.position.needsUpdate=true;pts.rotation.y=Math.sin(t*.3)*.15; },dispose(){disposeScene(scene);} };
  }
});

// ———————————————— AI · Skill 复刻三连（源自 MengTo/Skills，2026-11-22） ————————————————

// 17. 折射液态玻璃面板
D.push({
  cat: 'AI · Skill 复刻', tag: 'GLSL', emoji: '🫧',
  name: '折射液态玻璃面板', desc: '可拖动的圆角玻璃实时折射背景；斜线穿过面板会弯曲，边缘带掠射高光。拖动试试，调「折射厚度」看差异。',
  url: 'https://github.com/MengTo/Skills/tree/main/agent-skills/ui/refract-liquid-glass',
  bg: 0x0a1020, fov: 45,
  build({ THREE, scene, renderer, addCtl }) {
    const U = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uPos: { value: new THREE.Vector2(0.5, 0.5) },
      uSize: { value: new THREE.Vector2(0.42, 0.5) },
      uThick: { value: 0.035 }, uHover: { value: 0 }, uTime: { value: 0 }
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: U, depthTest: false, depthWrite: false,
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }`,
      fragmentShader: `
        precision highp float; varying vec2 vUv;
        uniform vec2 uRes,uPos,uSize; uniform float uThick,uHover,uTime;
        vec3 bg(vec2 uv){
          vec3 c=mix(vec3(0.04,0.07,0.14),vec3(0.08,0.12,0.24),uv.y);
          vec2 d=abs(uv-vec2(0.34,0.55))-vec2(0.16,0.30);
          float win=1.0-smoothstep(0.0,0.006,max(d.x,d.y));
          c=mix(c,mix(vec3(0.95,0.97,1.0),vec3(0.45,0.78,1.0),uv.y),win);
          vec2 d2=abs(uv-vec2(0.80,0.5))-vec2(0.16,0.42);
          c=mix(c,vec3(0.03,0.04,0.08),(1.0-smoothstep(0.0,0.01,max(d2.x,d2.y)))*0.85);
          float line=abs(uv.y-(0.85-uv.x*0.75));
          c=mix(c,vec3(1.0,0.75,0.15),1.0-smoothstep(0.0,0.006,line));
          vec3 cc[3]; cc[0]=vec3(0.97,0.45,0.45); cc[1]=vec3(0.66,0.55,0.97); cc[2]=vec3(0.13,0.83,0.93);
          for(int i=0;i<3;i++){ float fi=float(i);
            vec2 dp=abs(uv-vec2(0.12+fi*0.10,0.12))-vec2(0.04,0.035);
            c=mix(c,cc[i],1.0-smoothstep(0.0,0.004,max(dp.x,dp.y))); }
          return c;
        }
        float rbox(vec2 p,vec2 b,float r){ vec2 q=abs(p)-b+r; return min(max(q.x,q.y),0.0)+length(max(q,0.0))-r; }
        void main(){
          vec2 asp=vec2(uRes.x/uRes.y,1.0);
          vec2 p=(vUv-uPos)*asp, hsize=uSize*asp*0.5;
          float d=rbox(p,hsize,0.10);
          if(d>0.002){ gl_FragColor=vec4(bg(vUv),1.0); return; }
          float aa=fwidth(d)+1e-5, cover=1.0-smoothstep(-aa,aa,d);
          float edge=smoothstep(-0.14,0.0,d);
          vec2 g=vec2(dFdx(d),dFdy(d));
          vec2 nxy=normalize(g+1e-5)*edge + vec2(sin(uTime*1.2),cos(uTime))*0.06*uHover;
          vec3 n=normalize(vec3(nxy,sqrt(max(0.04,1.0-edge*edge))));
          vec3 ray=refract(vec3(0.0,0.0,-1.0),n,1.0/1.46);
          vec2 off=uThick*ray.xy/max(-ray.z,0.15);
          vec3 col=bg(clamp(vUv+off,0.0,1.0));
          col+=vec3(0.30,0.45,0.70)*pow(edge,2.5)*(0.55+0.45*uHover)+0.03;
          gl_FragColor=vec4(mix(bg(vUv),col,cover),1.0);
        }`
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    quad.frustumCulled = false; scene.add(quad);
    const dom = renderer.domElement;
    let dragging = false, hoverT = 0, grab = new THREE.Vector2();
    const toUV = e => { const r = dom.getBoundingClientRect();
      return new THREE.Vector2((e.clientX-r.left)/r.width, 1-(e.clientY-r.top)/r.height); };
    const inside = uv => {
      const r = dom.getBoundingClientRect(), asp = r.width/r.height;
      const px=(uv.x-U.uPos.value.x)*asp, py=uv.y-U.uPos.value.y;
      const hx=U.uSize.value.x*asp*0.5, hy=U.uSize.value.y*0.5;
      const qx=Math.abs(px)-hx+0.10, qy=Math.abs(py)-hy+0.10;
      return Math.min(Math.max(qx,qy),0)+Math.hypot(Math.max(qx,0),Math.max(qy,0))-0.10 < 0;
    };
    const down = e => { const uv=toUV(e); if(inside(uv)){ dragging=true; grab.set(uv.x-U.uPos.value.x, uv.y-U.uPos.value.y); dom.style.cursor='grabbing'; } };
    const move = e => { const uv=toUV(e); if(dragging) U.uPos.value.set(uv.x-grab.x, uv.y-grab.y); hoverT=inside(uv)?1:0; };
    const up = () => { dragging=false; dom.style.cursor='grab'; };
    dom.style.cursor='grab';
    dom.addEventListener('pointerdown', down); window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
    addCtl('折射厚度', 0, 0.09, 0.035, 0.001, v => U.uThick.value = v);
    return { update(t){
        const r=dom.getBoundingClientRect(); U.uRes.value.set(r.width,r.height); U.uTime.value=t;
        U.uHover.value+=(hoverT-U.uHover.value)*0.08;
      }, dispose(){
        dom.removeEventListener('pointerdown',down); window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); disposeScene(scene);
      } };
  }
});

// 18. 玻璃按钮按压波
D.push({
  cat: 'AI · Skill 复刻', tag: 'GLSL', emoji: '🔘',
  name: '玻璃按钮按压波', desc: '按住局部凹陷、松开扩散折射波并带边缘色散。鼠标点按或按空格/回车都能触发，可调波的时长。',
  url: 'https://github.com/MengTo/Skills/tree/main/agent-skills/ui/shade-glass-button-press',
  bg: 0x0a1020, fov: 45,
  build({ THREE, scene, renderer, addCtl }) {
    const U = {
      uRes: { value: new THREE.Vector2(1,1) }, uContact: { value: new THREE.Vector2(0.5,0.5) },
      uHold: { value: 0 }, uRelease: { value: -1 }, uTime: { value: 0 }
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: U, depthTest: false, depthWrite: false,
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }`,
      fragmentShader: `
        precision highp float; varying vec2 vUv;
        uniform vec2 uRes,uContact; uniform float uHold,uRelease,uTime;
        vec3 bg(vec2 uv){
          vec3 c=mix(vec3(0.05,0.08,0.16),vec3(0.10,0.16,0.30),uv.y);
          vec2 gr=abs(fract(uv*vec2(10.0,7.0))-0.5);
          c+=vec3((1.0-smoothstep(0.47,0.5,max(gr.x,gr.y)))*0.16);
          c+=vec3(0.25,0.35,0.60)*exp(-pow((uv.y-(0.2+uv.x*0.6))/0.06,2.0));
          return c;
        }
        float rbox(vec2 p,vec2 b,float r){ vec2 q=abs(p)-b+r; return min(max(q.x,q.y),0.0)+length(max(q,0.0))-r; }
        void main(){
          vec2 asp=vec2(uRes.x/uRes.y,1.0);
          vec2 bp=(vUv-vec2(0.5))*asp, hsize=vec2(0.34,0.16)*asp;
          float d=rbox(bp,hsize,0.06);
          if(d>0.002){ gl_FragColor=vec4(bg(vUv),1.0); return; }
          float edge=smoothstep(-0.05,0.0,d);
          vec2 bsize=vec2(0.68,0.32)*asp;
          vec2 contactW=(uContact-vec2(0.5))*bsize;
          vec2 delta=bp-contactW;
          float ind=exp(-dot(delta,delta)/0.02)*uHold;
          vec3 n=normalize(vec3(delta*(1.5*ind),1.0-0.6*ind));
          vec2 off=n.xy*0.02*ind;
          float sp=0.0;
          if(uRelease>=0.0){
            float t=uRelease;
            float reach=length((max(uContact,1.0-uContact)-0.5)*bsize);
            float travel=(1.0-pow(1.0-t,1.7))*(reach+0.08);
            float dd=(length(delta)-travel)/0.06;
            float crest=exp(-dd*dd), wake=exp(-pow((dd+1.1)/1.6,2.0));
            vec2 dir=normalize(delta+1e-5);
            off+=dir*(crest-wake)*0.025;
            sp=crest;
          }
          vec2 suv=clamp(vUv+off,0.0,1.0), dir=normalize(delta+1e-5);
          vec3 col=vec3(bg(clamp(suv+dir*0.006*sp,0.0,1.0)).r,bg(suv).g,bg(clamp(suv-dir*0.006*sp,0.0,1.0)).b);
          col+=vec3(0.15,0.22,0.35)*pow(edge,2.0);
          gl_FragColor=vec4(col,1.0);
        }`
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2,2), mat);
    quad.frustumCulled = false; scene.add(quad);
    const dom = renderer.domElement;
    let holdStart = -1, releaseStart = -1, waveDur = 0.9;
    const toUV = e => { const r=dom.getBoundingClientRect();
      return new THREE.Vector2((e.clientX-r.left)/r.width, 1-(e.clientY-r.top)/r.height); };
    const inside = uv => {
      const r=dom.getBoundingClientRect(), asp=r.width/r.height;
      const px=(uv.x-0.5)*asp, py=uv.y-0.5, hx=0.34*asp, hy=0.16;
      const qx=Math.abs(px)-hx+0.06, qy=Math.abs(py)-hy+0.06;
      return Math.min(Math.max(qx,qy),0)+Math.hypot(Math.max(qx,0),Math.max(qy,0))-0.06 < 0;
    };
    const down = e => { const uv=toUV(e); if(inside(uv)){ U.uContact.value.copy(uv); holdStart=performance.now(); releaseStart=-1; } };
    const up = () => { if(holdStart>=0){ releaseStart=performance.now(); holdStart=-1; } };
    const keyDown = e => { if((e.code==='Space'||e.code==='Enter') && holdStart<0){ U.uContact.value.set(0.5,0.5); holdStart=performance.now(); releaseStart=-1; e.preventDefault(); } };
    const keyUp = e => { if(e.code==='Space'||e.code==='Enter') up(); };
    dom.style.cursor='pointer';
    dom.addEventListener('pointerdown', down); window.addEventListener('pointerup', up);
    window.addEventListener('keydown', keyDown); window.addEventListener('keyup', keyUp);
    addCtl('波的时长', 0.4, 1.6, 0.9, 0.05, v => waveDur = v);
    return { update(t){
        const r=dom.getBoundingClientRect(); U.uRes.value.set(r.width,r.height); U.uTime.value=t;
        const hn=holdStart>=0?Math.min(1,(performance.now()-holdStart)/120):0;
        U.uHold.value+=(hn-U.uHold.value)*0.25;
        if(releaseStart>=0){ const p=(performance.now()-releaseStart)/(waveDur*1000);
          U.uRelease.value=p>=1?-1:p; if(p>=1) releaseStart=-1;
        } else U.uRelease.value=-1;
      }, dispose(){
        dom.removeEventListener('pointerdown',down); window.removeEventListener('pointerup',up);
        window.removeEventListener('keydown',keyDown); window.removeEventListener('keyup',keyUp); disposeScene(scene);
      } };
  }
});

// 19. 百叶窗体积光书房
D.push({
  cat: 'AI · Skill 复刻', tag: 'Three.js', emoji: '🪟',
  name: '百叶窗体积光书房', desc: '程序化窗墙/书桌/显示器/植物/台灯。拖动「百叶开合」滑杆，墙面投影条纹与空气中的光束同步变化。',
  url: 'https://github.com/MengTo/Skills/tree/main/agent-skills/3d/light-a-threejs-workspace',
  bg: 0x0b1120, fov: 50, camDist: 22,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const root = new THREE.Group(); scene.add(root);
    // 木纹纹理（本地生成）
    const wc=document.createElement('canvas'); wc.width=wc.height=256;
    const wx=wc.getContext('2d'); wx.fillStyle='#6b4423'; wx.fillRect(0,0,256,256);
    for(let i=0;i<70;i++){ wx.strokeStyle='rgba(35,18,8,.35)'; wx.lineWidth=1+Math.random()*2;
      wx.beginPath(); const y=Math.random()*256; wx.moveTo(0,y);
      wx.bezierCurveTo(80,y+Math.random()*8-4,170,y+Math.random()*8-4,256,y); wx.stroke(); }
    const woodTex=new THREE.CanvasTexture(wc);
    // 屏幕壁纸
    const sc=document.createElement('canvas'); sc.width=256; sc.height=160;
    const sx=sc.getContext('2d'), sg=sx.createLinearGradient(0,0,256,160);
    sg.addColorStop(0,'#1b2a6b'); sg.addColorStop(1,'#7b3fa0'); sx.fillStyle=sg; sx.fillRect(0,0,256,160);
    for(let i=0;i<36;i++){ sx.fillStyle='hsla('+(i*12)+',80%,65%,.5)'; sx.fillRect(Math.random()*256,Math.random()*160,2,2); }
    const screenTex=new THREE.CanvasTexture(sc);
    const std=(c,o)=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.7},o||{}));
    // 地板 / 后墙 / 窗
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(36,28),std(0x2a2f3d,{roughness:.95}));
    floor.rotation.x=-Math.PI/2; floor.position.y=-3.2; root.add(floor);
    const wall=new THREE.Mesh(new THREE.PlaneGeometry(36,16),std(0x3a4256,{roughness:1}));
    wall.position.set(0,4,-9); root.add(wall);
    const win=new THREE.Mesh(new THREE.PlaneGeometry(6,6),new THREE.MeshBasicMaterial({color:0xfff3d0}));
    win.position.set(-5,2,-8.9); root.add(win);
    // 书桌 + 桌腿
    const desk=new THREE.Mesh(new THREE.BoxGeometry(7,0.25,2.6),std(0xffffff,{map:woodTex,roughness:.6}));
    desk.position.set(0,-1.3,0); root.add(desk);
    [[-3,-1],[3,-1],[-3,1],[3,1]].forEach(([x,z])=>{ const l=new THREE.Mesh(new THREE.BoxGeometry(.2,2,.2),std(0x4a2f18)); l.position.set(x,-2.3,z); root.add(l); });
    // 显示器 + 屏幕 + 底座
    const mon=new THREE.Mesh(new THREE.BoxGeometry(3.2,1.9,.12),std(0x11151f)); mon.position.set(0,0.1,-0.9); root.add(mon);
    const screen=new THREE.Mesh(new THREE.PlaneGeometry(3,1.7),new THREE.MeshBasicMaterial({map:screenTex})); screen.position.set(0,0.1,-0.83); root.add(screen);
    const stand=new THREE.Mesh(new THREE.CylinderGeometry(.12,.2,.6,12),std(0x222a38)); stand.position.set(0,-1.0,-0.9); root.add(stand);
    // 键盘
    const kb=new THREE.Mesh(new THREE.BoxGeometry(2.2,.08,.7),std(0x1c2330)); kb.position.set(0,-1.13,0.8); root.add(kb);
    // 植物
    const pot=new THREE.Mesh(new THREE.CylinderGeometry(.35,.28,.5,16),std(0x8a5a3b)); pot.position.set(2.6,-0.95,0.2); root.add(pot);
    for(let i=0;i<6;i++){ const lf=new THREE.Mesh(new THREE.ConeGeometry(.26,1.1,6),std(0x2f7d4f));
      lf.position.set(2.6+(Math.random()-.5)*.7,-0.2+Math.random()*.5,0.2+(Math.random()-.5)*.5);
      lf.rotation.z=(Math.random()-.5)*1.0; root.add(lf); }
    // 台灯
    const lb=new THREE.Mesh(new THREE.CylinderGeometry(.25,.25,.06,16),std(0x333b4d)); lb.position.set(-2.4,-1.15,0); root.add(lb);
    const pole=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,1.2,8),std(0x555f75)); pole.position.set(-2.4,-0.55,0); root.add(pole);
    const shade=new THREE.Mesh(new THREE.ConeGeometry(.35,.4,16,1,true),new THREE.MeshStandardMaterial({color:0xe8c86a,side:THREE.DoubleSide}));
    shade.position.set(-2.4,0.15,0); shade.rotation.x=Math.PI; root.add(shade);
    const lampLight=new THREE.PointLight(0xffd88a,1.2,8); lampLight.position.set(-2.4,0,0); root.add(lampLight);
    // 光
    scene.add(new THREE.AmbientLight(0x8899bb,.45));
    const sun=new THREE.DirectionalLight(0xffe9c0,1.6); sun.position.set(-8,7,4); root.add(sun);
    // 百叶窗横板
    const slats=[];
    for(let i=0;i<11;i++){ const s=new THREE.Mesh(new THREE.BoxGeometry(6,0.14,0.32),std(0xd8c39a));
      s.position.set(-5,-1+i*0.55,-8.7); root.add(s); slats.push(s); }
    // 可见光束（additive 半透明）
    const beams=[];
    for(let i=0;i<8;i++){ const b=new THREE.Mesh(new THREE.PlaneGeometry(.55,11),
        new THREE.MeshBasicMaterial({color:0xffe1a0,transparent:true,opacity:.1,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));
      b.position.set(-4.5,0.4,-1+i*0.8); b.rotation.set(-0.55,0,-0.5); root.add(b); beams.push(b); }
    // 桌面光斑
    const spots=[];
    for(let i=0;i<7;i++){ const sp=new THREE.Mesh(new THREE.PlaneGeometry(.45,2.2),
        new THREE.MeshBasicMaterial({color:0xffe2a8,transparent:true,opacity:.35,blending:THREE.AdditiveBlending,depthWrite:false}));
      sp.rotation.x=-Math.PI/2; sp.position.set(-2.5+i*.8,-1.16,0.1); root.add(sp); spots.push(sp); }
    let blind=0.65;
    addCtl('百叶开合', 0, 1, 0.65, 0.01, v => blind=v);
    const ctl=orbitControls(THREE,camera,renderer);
    return { update(t){
        slats.forEach((s,i)=>{ s.rotation.x=(1-blind)*1.25+Math.sin(t*.3+i)*0.02; });
        beams.forEach(b=>{ b.material.opacity=0.02+blind*0.13; b.scale.x=0.5+blind*0.9; });
        spots.forEach(sp=>{ sp.material.opacity=0.06+blind*0.42; sp.scale.x=0.4+blind*1.1; });
        sun.intensity=0.3+blind*1.7;
        ctl.update(22);
      }, dispose(){ ctl.dispose(); disposeScene(scene); } };
  }
});

// 20. 滚动建屋 · Casa Serra 复刻（微信文章 2026-11-26 / GitHub Sam1983Aing/casa-serra）
D.push({
  cat: '场景 · 建筑', tag: 'Three.js', emoji: '🏠',
  name: '滚动建屋 · Casa Serra',
  desc: '进度驱动：俯视平面图 → 墙从图纸里长起来 → 相机降到人眼高度沿路径穿房 → 房间从线稿渐变为真实材质。全部几何由代码生成，对应微信文章 Casa Serra。',
  url: 'https://mp.weixin.qq.com/s/6C_SJ5m4mGeFDePTHtV9kA',
  bg: 0x0e1016, fov: 50, camDist: 26,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const root = new THREE.Group(); scene.add(root);
    const WH = 3.0, W = 12, DP = 10, hw = W/2, hd = DP/2;
    const paper = new THREE.Color(0xe9e4d8);
    // 房间：位置/尺寸/真实色/材质显现阈值
    const rooms = [
      { x:-3, z:-2.5, w:6, d:5, c:0xc08a5e, at:0.60 },
      { x: 3, z:-2.5, w:6, d:5, c:0x8f9fb5, at:0.70 },
      { x:-3, z: 2.5, w:6, d:5, c:0x7f9a72, at:0.80 },
      { x: 3, z: 2.5, w:6, d:5, c:0xa98fa0, at:0.88 },
    ];
    const floors = [];
    rooms.forEach(r => {
      const mat = new THREE.MeshStandardMaterial({ color: paper.clone(), roughness:.92 });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(r.w-0.16, r.d-0.16), mat);
      m.rotation.x = -Math.PI/2; m.position.set(r.x, 0.01, r.z); root.add(m);
      m.userData = { real: new THREE.Color(r.c), at: r.at }; floors.push(m);
    });
    // 纸面网格线（平面图质感）
    const grid = new THREE.GridHelper(W, 12, 0x9a9488, 0x9a9488);
    grid.position.y = 0.02; grid.material.transparent = true; root.add(grid);
    // 房间名标注（canvas 贴图）
    function label(text, x, z) {
      const c = document.createElement('canvas'); c.width = 256; c.height = 64;
      const g = c.getContext('2d'); g.fillStyle = '#333';
      g.font = 'bold 34px sans-serif'; g.textAlign = 'center'; g.fillText(text, 128, 44);
      const tex = new THREE.CanvasTexture(c);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent:true, opacity:.95, depthTest:false }));
      sp.position.set(x, 0.06, z); sp.scale.set(2.4, 0.6, 1); root.add(sp); return sp;
    }
    const labels = [ label('客厅',-3,-2.5), label('主卧',3,-2.5), label('厨房',-3,2.5), label('书房',3,2.5) ];
    // 墙：外墙 + 十字内墙（简化，不抠门洞）
    const wallMat = new THREE.MeshStandardMaterial({ color:0xf2efe6, roughness:.85 });
    const walls = [];
    const addWall = (x,z,w,d) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, WH, d), wallMat);
      m.position.set(x, WH/2, z); root.add(m); walls.push(m);
    };
    addWall(0,-hd,W,0.18); addWall(0,hd,W,0.18);
    addWall(-hw,0,0.18,DP); addWall(hw,0,0.18,DP);
    // 十字内墙留中央门洞（宽1.8），让相机能穿过而不是撞墙
    const gap = 0.9;
    addWall(-(hw+gap)/2, 0, (hw-gap), 0.18);  // 横墙左段：x∈[-hw,-gap]
    addWall((hw+gap)/2, 0, (hw-gap), 0.18);   // 横墙右段：x∈[gap,hw]
    addWall(0, -(hd+gap)/2, 0.18, (hd-gap));  // 竖墙前段：z∈[-hd,-gap]
    addWall(0, (hd+gap)/2, 0.18, (hd-gap));   // 竖墙后段：z∈[gap,hd]
    // 家具：随进度显现
    const furn = [];
    const addF = (x,y,z,w,h,d,c) => {
      const mat = new THREE.MeshStandardMaterial({ color:c, roughness:.7, transparent:true, opacity:0 });
      const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat);
      m.position.set(x,y,z); root.add(m); furn.push(m);
    };
    addF(-3,.45,-3.7,2.6,.9,1.0,0x4a6fa5);   // 客厅沙发
    addF(-3,.25,-2.3,1.2,.5,.7,0x6b4a35);     // 茶几
    addF(3,.35,-2.9,2.0,.7,2.3,0x9a5f6d);     // 主卧床
    addF(-3,.5,3.7,3.0,1.0,.8,0x5f7a5a);      // 厨房台面
    addF(3,.45,2.7,2.2,.9,1.0,0x7a6a4a);      // 书桌
    // 光照
    scene.add(new THREE.AmbientLight(0xffffff,.5));
    const sun = new THREE.DirectionalLight(0xffe9c8,1.5); sun.position.set(8,16,6); root.add(sun);
    const fill = new THREE.DirectionalLight(0x9fc4ff,.4); fill.position.set(-8,6,-6); root.add(fill);
    // 相机路径：俯视平面图 → 墙升起 → 降到门口 → 进门 → 深入
    const path = [
      { t:0.00, p:[0,24,0.01], look:[0,0,0] },
      { t:0.45, p:[0,16,6.5], look:[0,0,0] },
      { t:0.60, p:[0.5,4.4,13],  look:[0.5,1.4,0] },
      { t:0.72, p:[0.5,1.7,3.2],  look:[0.5,1.4,-1.5] },  // 进门穿行
      { t:0.84, p:[0.5,1.7,-1.5], look:[0.5,1.4,-4.5] },  // 深入房间
      { t:1.00, p:[9,12,13],      look:[0,0.5,0] },         // 拉升回望整体成品
    ];
    const tA = new THREE.Vector3(), tB = new THREE.Vector3();
    const setV = (a,out) => out.set(a[0],a[1],a[2]);
    let prog = 0, auto = true;
    addCtl('滚动进度 0=平面 → 1=建成穿行', 0, 1, 0, 0.001, v => { prog = v; auto = false; });
    return { update(t) {
      if (auto) prog = Math.min(1, t*0.12); // 自动建造一次后停在成品，拖动滑块可回看
      const p = prog;
      // 墙从地面长出
      const grow = Math.max(0.001, Math.min(1, p/0.45));
      walls.forEach(w => { w.scale.y = grow; w.position.y = WH*grow/2; });
      // 房间：纸白 → 真实材质
      floors.forEach(f => {
        const k = Math.max(0, Math.min(1, (p - f.userData.at + 0.18)/0.18));
        f.material.color.copy(paper).lerp(f.userData.real, k);
      });
      // 家具渐显
      furn.forEach((m,i) => { m.material.opacity = Math.max(0, Math.min(1, (p-(0.58+i*0.06))/0.16)); });
      // 网格线与房间名随建造淡出
      grid.material.opacity = 0.55*(1-Math.min(1,p/0.45));
      labels.forEach(l => { l.material.opacity = 0.95*(1-Math.min(1,p/0.42)); });
      // 相机沿路径插值（smoothstep）
      let i = 0; while (i < path.length-2 && p > path[i+1].t) i++;
      const a = path[i], b = path[i+1];
      const k = Math.max(0, Math.min(1, (p-a.t)/(b.t-a.t))), e = k*k*(3-2*k);
      camera.position.copy(setV(a.p,tA)).lerp(setV(b.p,tB), e);
      camera.lookAt(setV(a.look,tA).lerp(setV(b.look,tB), e));
    }, dispose(){ disposeScene(scene); } };
  }
});

// 21. 零件拼装建屋 · Blueprint（微信文章 2026-11-26 / GitHub Nyxera0x/blueprint）
D.push({
  cat: '场景 · 建筑', tag: 'Three.js', emoji: '🧱',
  name: '零件拼装建屋 · Blueprint',
  desc: '进度驱动：地基→立柱→横梁→椽子→屋板→墙→榻榻米→障子，每个零件独立对象按施工阶段从空中逐件飞入就位，角落实时计数，最后材质波从红枫扫过变真实。复刻开源 Skill Blueprint 的核心观感，对应微信文章。',
  url: 'https://mp.weixin.qq.com/s/pM4F1awt093epBce1YTlvA',
  bg: 0x141820, fov: 46, camDist: 30,
  build({ THREE, scene, camera, renderer, addCtl }) {
    const root = new THREE.Group(); scene.add(root);
    const W = 13, DP = 11, hw = W/2, hd = DP/2, WH = 3.2;
    // 施工阶段：名称 / 起始进度 / 颜色（白 clay 上闪色）
    const STAGES = [
      { name:'地基',   at:0.00, c:0xd9d2c4 },
      { name:'立柱',   at:0.10, c:0x8fb7e8 },
      { name:'横梁',   at:0.22, c:0xe0a86a },
      { name:'椽子',   at:0.34, c:0xd98c6a },
      { name:'屋面板', at:0.46, c:0x9aa9c0 },
      { name:'墙体',   at:0.58, c:0xe6e0d2 },
      { name:'榻榻米', at:0.70, c:0xc9b86a },
      { name:'障子格', at:0.82, c:0xf0e9d8 },
    ];
    const clay = new THREE.Color(0xded8cc);
    const parts = [];
    // 每个零件：几何 + 最终位置 + 阶段 + 真实色 + 顺序（用于飞行时序）
    function part(geo, x, y, z, stage, real, rot) {
      const mat = new THREE.MeshStandardMaterial({ color: clay.clone(), roughness:.85 });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      if (rot) m.rotation.set(rot[0]||0, rot[1]||0, rot[2]||0);
      root.add(m);
      parts.push({ mesh:m, stage, real:new THREE.Color(real), final:new THREE.Vector3(x,y,z),
        start:new THREE.Vector3(x + (Math.random()-.5)*10, y + 8 + Math.random()*9, z + (Math.random()-.5)*10),
        flash:new THREE.Color(STAGES[stage].c), fly:Math.random() });
      return m;
    }
    const BOX = (w,h,d) => new THREE.BoxGeometry(w,h,d);
    // 阶段0 地基：一圈石板
    for (let i=0;i<16;i++){ const a=i/16*Math.PI*2;
      part(BOX(1.5,.35,1.1), Math.cos(a)*(hw-1), .18, Math.sin(a)*(hd-1), 0, 0x8d8578, [0,-a,0]); }
    // 阶段1 立柱：四角+边柱
    const postX=[-hw+0.6,-4.3,0,4.3,hw-0.6], postZ=[-hd+0.6,0,hd-0.6];
    postX.forEach(x=>postZ.forEach(z=>part(BOX(.28,WH,.28), x, WH/2+.35, z, 1, 0x6b4a32)));
    // 阶段2 横梁：沿 X 与 Z 的主梁
    postZ.forEach(z=>part(BOX(W-.6,.3,.3), 0, WH+.35, z, 2, 0x7a5334));
    postX.forEach(x=>part(BOX(.3,.3,DP-.6), x, WH+.42, 0, 2, 0x7a5334));
    // 阶段3 椽子：斜向屋顶椽（每边若干）
    const R = 12;
    for(let i=0;i<=R;i++){
      const x=-hw+.4 + i*(W-.8)/R;
      [-1,1].forEach(s=>{
        const len=Math.hypot(hd, 1.6), ang=Math.atan2(1.6, hd)*s;
        part(BOX(.12,.12,len), x, WH+.35+0.8, s*hd/2, 3, 0x8a5f3d, [ang,0,0]);
      });
    }
    // 阶段4 屋面板：两坡板
    [-1,1].forEach(s=>{ const len=Math.hypot(hd,1.6), ang=Math.atan2(1.6,hd)*s;
      part(BOX(W-.2,.12,len), 0, WH+.45+0.8, s*hd/2, 4, 0x556170, [ang,0,0]); });
    // 阶段5 墙体：四面（留门洞用两段）
    const wt=.18;
    part(BOX(W,WH,wt), 0, WH/2+.35, -hd, 5, 0xeae4d6);
    [-1,1].forEach(s=>part(BOX((W-1.8)/2,WH,wt), s*(W+1.8)/4, WH/2+.35, hd, 5, 0xeae4d6));
    [-1,1].forEach(s=>part(BOX(wt,WH,DP), s*hw, WH/2+.35, 0, 5, 0xeae4d6));
    // 阶段6 榻榻米：室内地板格
    for(let ix=0;ix<4;ix++)for(let iz=0;iz<3;iz++){
      part(BOX(2.7,.1,2.9), -4.1+ix*2.75, .42, -3.0+iz*2.9, 6, 0xb9a860);
    }
    // 阶段7 障子格：正立面格窗
    for(let i=0;i<6;i++) for(let k=0;k<3;k++){
      part(BOX(.06,.55,.04), -4.5+i*1.8, .9+k*.6, -hd-.12, 7, 0xf2ecdd);
    }
    // 红枫（材质波焦点）
    const tree = new THREE.Group(); root.add(tree);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.16,.24,2.2,8),
      new THREE.MeshStandardMaterial({color:0x5b3d2a})); trunk.position.set(hw+1.8,1.45,hd-1); tree.add(trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6,1),
      new THREE.MeshStandardMaterial({color:0xa8392f, roughness:.9, flatShading:true})); crown.position.set(hw+1.8,3.1,hd-1); tree.add(crown);
    tree.scale.setScalar(0.001); // 随进度长出
    // 灯光
    scene.add(new THREE.AmbientLight(0xffffff,.65));
    const sun = new THREE.DirectionalLight(0xffe6c4,1.6); sun.position.set(10,18,8); root.add(sun);
    const fill = new THREE.DirectionalLight(0x9fc4ff,.45); fill.position.set(-9,7,-7); root.add(fill);
    // 计数文字 sprite（canvas 贴图，每帧更新）
    const cc = document.createElement('canvas'); cc.width=512; cc.height=128;
    const cx = cc.getContext('2d');
    const tex = new THREE.CanvasTexture(cc);
    const badge = new THREE.Sprite(new THREE.SpriteMaterial({map:tex, transparent:true, depthTest:false}));
    badge.position.set(0, 8.5, 0); badge.scale.set(9,2.25,1); root.add(badge);
    function drawBadge(stage, landed, total){
      cx.clearRect(0,0,512,128);
      cx.fillStyle='rgba(12,16,24,0.82)'; cx.fillRect(0,0,512,128);
      cx.strokeStyle='rgba(180,200,240,0.5)'; cx.lineWidth=3; cx.strokeRect(2,2,508,124);
      cx.fillStyle='#7fd4ff'; cx.font='bold 34px sans-serif'; cx.textAlign='left';
      cx.fillText('ASSEMBLING · '+stage, 22, 48);
      cx.fillStyle='#fff'; cx.font='bold 60px monospace';
      cx.fillText(String(landed).padStart(4,'0')+' / '+total, 22, 112);
    }
    // 每个零件按所属施工阶段窗口着陆（阶段窗口 0.11，阶段间隔 0.12，基本不重叠）
    const total=parts.length;
    const stageCount = STAGES.map(()=>0);
    parts.forEach(p=>stageCount[p.stage]++);
    const acc = STAGES.map(()=>0);
    parts.forEach(p=>{
      const st = STAGES[p.stage].at, span = 0.11, n = stageCount[p.stage];
      const k = acc[p.stage]++;
      p.landAt = st + span * (n>1 ? k/(n-1) : 0);
    });
    let prog=0, auto=true;
    addCtl('拼装进度 0=地基 → 1=建成', 0, 1, 0, 0.001, v=>{ prog=v; auto=false; });
    const tmp = new THREE.Vector3();
    return { update(t) {
      if(auto) prog = Math.min(1, t*0.11); // 自动拼装一次后停成品，拖滑块可回看
      const p = prog;
      let landed=0, curStage='地基';
      parts.forEach(pt=>{
        const local = (p - pt.landAt)/0.06; // 飞入持续 0.06 进度
        if(local<=0){ pt.mesh.visible=false; return; }
        pt.mesh.visible=true; landed++;
        if(curStage && p >= STAGES[pt.stage].at) curStage = STAGES[pt.stage].name;
        const e = Math.min(1, local); const ease = e<0.5 ? 2*e*e : 1-Math.pow(-2*e+2,2)/2;
        tmp.lerpVectors(pt.start, pt.final, Math.min(1,ease*1.15));
        pt.mesh.position.copy(tmp);
        // 飞行中：闪色 → 白clay；材质波扫过后：白clay → 真实色
        const flashMix = 1-Math.min(1, Math.max(0,(local-0.55)/0.45));
        pt.mesh.material.color.copy(clay).lerp(pt.flash, flashMix*0.75);
        const waveAt = 0.80 + (pt.final.x+pt.final.z)/(W+DP)*0.10;
        const realMix = Math.max(0, Math.min(1, (p-waveAt)/0.10));
        pt.mesh.material.color.lerp(pt.real, realMix);
      });
      tree.scale.setScalar(Math.max(0.001, Math.min(1,(p-0.80)/0.12)));
      drawBadge(curStage, landed, total); tex.needsUpdate=true;
      // 相机：俯视环绕，进度高时略拉低
      const az = t*0.05, dist = 30 - p*3;
      camera.position.set(Math.sin(az)*dist, 16 - p*3, Math.cos(az)*dist);
      camera.lookAt(0, 1.6, 0);
    }, dispose(){ disposeScene(scene); } };
  }
});
