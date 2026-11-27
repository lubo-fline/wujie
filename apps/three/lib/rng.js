/**
 * 确定性随机 · Park–Miller LCG
 * 程序生成的场景必须可复现才有法调：同一个 seed 每次都长出同一个结果，
 * 想改布局就换 seed，而不是「重开一次看运气」。
 *
 *   const rng = createRng(2026);
 *   rng.next()            // 0..1
 *   rng.range(2, 4.6)     // 2..4.6
 *   rng.int(1, 3)         // 1..3 整数
 *   rng.pick(['a','b'])
 *   rng.reseed(7)         // 换一座城
 */
export function createRng(seed = 1) {
  let s = Math.abs(Math.floor(seed)) % 2147483647;
  if (s <= 0) s = 1;
  const api = {
    next() {
      s = (s * 16807) % 2147483647;
      return s / 2147483647;
    },
    range(a, b) {
      return a + api.next() * (b - a);
    },
    int(a, b) {
      return Math.floor(api.range(a, b + 1));
    },
    pick(arr) {
      return arr[Math.floor(api.next() * arr.length)];
    },
    reseed(v) {
      s = Math.abs(Math.floor(v)) % 2147483647 || 1;
      return api;
    },
    get seed() {
      return s;
    },
  };
  return api;
}
