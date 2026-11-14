import * as THREE from '../vendor/three.module.min.js';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';

/**
 * 几何合批 · 攒 → 合并 → 一个材质一次 draw call
 *
 * 一个实例对应一种材质，需要多种颜色就建多个实例，最后各 build 一次：
 *
 *   const walls = new GeometryBatch();
 *   const roofs = new GeometryBatch();
 *   for (...只算位置，不建 Mesh...) {
 *     walls.box(w, h, d, x, y, z, ry);
 *     roofs.cone(0.72, 1.2, 4, x, y + h / 2, z, ry, w, d);
 *   }
 *   group.add(walls.build(wallMat), roofs.build(roofMat));
 *
 * 为什么这样能省：draw call 的开销在 CPU（设置状态 + 提交命令），
 * 1000 个 Mesh 就是 1000 次提交；合并成 1 个几何体只剩 1 次。
 *
 * 代价（面试必被追问）：合并后无法单独做视锥剔除、无法单独改材质/位置。
 * 需要单独剔除就用 THREE.BatchedMesh，需要单独变换就用 InstancedMesh。
 */
const templateCache = new Map();

function cachedBox(w, h, d) {
  const key = `${w.toFixed(2)}_${h.toFixed(2)}_${d.toFixed(2)}`;
  let g = templateCache.get(key);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    templateCache.set(key, g);
  }
  return g;
}

const M = new THREE.Matrix4();
const Q = new THREE.Quaternion();
const E = new THREE.Euler();
const V = new THREE.Vector3();
const S = new THREE.Vector3(1, 1, 1);

export class GeometryBatch {
  constructor() {
    this.list = [];
  }

  add(template, x, y, z, ry, scale) {
    const g = template.clone();
    if (scale) g.scale(scale[0], scale[1], scale[2]);
    E.set(0, ry || 0, 0);
    Q.setFromEuler(E);
    V.set(x, y, z);
    M.compose(V, Q, S);
    g.applyMatrix4(M);
    this.list.push(g);
    return this;
  }

  box(w, h, d, x, y, z, ry) {
    return this.add(cachedBox(w, h, d), x, y, z, ry);
  }

  cone(r, h, seg, x, y, z, ry, sx, sz) {
    const g = new THREE.ConeGeometry(r, h, seg || 4, 1);
    g.rotateY(Math.PI / 4);
    return this.add(g, x, y, z, ry, [sx || 1, 1, sz || 1]);
  }

  /** 合并成一个 Mesh；中间几何体随即释放，别留着占内存 */
  build(material) {
    if (!this.list.length) return null;
    const merged = mergeGeometries(this.list, false);
    this.list.forEach((g) => g.dispose());
    this.list = [];
    if (!merged) return null;
    merged.computeBoundingSphere();
    return new THREE.Mesh(merged, material);
  }

  /** 不合批，一物一 Mesh：当对照组用，量 draw call 的差别 */
  buildSeparate(material) {
    const meshes = this.list.map((g) => {
      g.computeBoundingSphere();
      return new THREE.Mesh(g, material);
    });
    this.list = [];
    return meshes;
  }

  dispose() {
    this.list.forEach((g) => g.dispose());
    this.list = [];
  }

  get count() {
    return this.list.length;
  }
}
