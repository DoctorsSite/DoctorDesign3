import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { F as Float, E as Environment } from "../_libs/react-three__drei.mjs";
import { i as Vector3, a0 as Euler, a1 as MeshPhysicalMaterial, e as Color, a2 as MeshStandardMaterial, a3 as Curve } from "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/suspend-react.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/three-stdlib.mjs";
import "../_libs/fflate.mjs";
import "module";
import "../_libs/monogrid__gainmap-js.mjs";
function Helix({
  turns = 5,
  height = 10,
  radius = 0.95,
  tubularSegments = 600,
  scrollProgress
}) {
  const group = reactExports.useRef(null);
  const mouse = reactExports.useRef({ x: 0, y: 0 });
  const { curveA, curveB } = reactExports.useMemo(() => {
    class HelixCurve extends Curve {
      offset;
      constructor(offset) {
        super();
        this.offset = offset;
      }
      getPoint(t, target = new Vector3()) {
        const angle = t * turns * Math.PI * 2 + this.offset;
        const y = (t - 0.5) * height;
        return target.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      }
    }
    return { curveA: new HelixCurve(0), curveB: new HelixCurve(Math.PI) };
  }, [turns, height, radius]);
  const rungs = reactExports.useMemo(() => {
    const count = turns * 10;
    const arr = [];
    const a = new Vector3();
    const b = new Vector3();
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      curveA.getPoint(t, a);
      curveB.getPoint(t, b);
      const mid = new Vector3().addVectors(a, b).multiplyScalar(0.5);
      const dir = new Vector3().subVectors(b, a);
      const len = dir.length();
      const angle = Math.atan2(dir.z, dir.x);
      arr.push({
        pos: mid,
        rot: new Euler(0, -angle, Math.PI / 2),
        len,
        kind: i % 2 === 0 ? 0 : 1
      });
    }
    return arr;
  }, [curveA, curveB, turns]);
  const strandMatGold = reactExports.useMemo(
    () => new MeshPhysicalMaterial({
      color: new Color("#c9962f"),
      metalness: 0.9,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      emissive: new Color("#7a521a"),
      emissiveIntensity: 0.35
    }),
    []
  );
  const strandMatBlue = reactExports.useMemo(
    () => new MeshPhysicalMaterial({
      color: new Color("#3a5fa3"),
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      emissive: new Color("#0e2350"),
      emissiveIntensity: 0.3
    }),
    []
  );
  const rungAT = reactExports.useMemo(
    () => new MeshStandardMaterial({
      color: new Color("#b8862b"),
      metalness: 0.6,
      roughness: 0.3,
      emissive: new Color("#5a3d10"),
      emissiveIntensity: 0.25
    }),
    []
  );
  const rungGC = reactExports.useMemo(
    () => new MeshStandardMaterial({
      color: new Color("#6a7fb8"),
      metalness: 0.55,
      roughness: 0.35,
      emissive: new Color("#1a2a55"),
      emissiveIntensity: 0.25
    }),
    []
  );
  useFrame((state, delta) => {
    if (!group.current) return;
    mouse.current.x += (state.mouse.x - mouse.current.x) * 0.04;
    mouse.current.y += (state.mouse.y - mouse.current.y) * 0.04;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = mouse.current.y * 0.18;
    group.current.position.x = mouse.current.x * 0.3;
    const s = scrollProgress?.current ?? 0;
    group.current.scale.setScalar(1 + s * 0.35);
    group.current.position.y = s * -0.6;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: group, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { material: strandMatGold, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tubeGeometry", { args: [curveA, tubularSegments, 0.07, 16, false] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { material: strandMatBlue, children: /* @__PURE__ */ jsxRuntimeExports.jsx("tubeGeometry", { args: [curveB, tubularSegments, 0.07, 16, false] }) }),
    rungs.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "mesh",
      {
        position: r.pos,
        rotation: r.rot,
        material: r.kind === 0 ? rungAT : rungGC,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [0.025, 0.025, r.len, 10] })
      },
      i
    ))
  ] });
}
function Particles({ count = 220 }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, [count]);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.02;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.03, color: "#b8862b", transparent: true, opacity: 0.5, sizeAttenuation: true })
  ] });
}
function DnaHelix({
  className = "",
  scrollProgress
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      camera: { position: [0, 0, 6.2], fov: 42 },
      dpr: [1, 1.8],
      gl: { antialias: true, alpha: true },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.55 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 6, 5], intensity: 1.4, color: "#fff3d6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, -2, -3], intensity: 0.7, color: "#aac8ff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 0, 4], intensity: 1.2, color: "#e6b860" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 3, -3], intensity: 0.8, color: "#7aa6ff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.1, rotationIntensity: 0.18, floatIntensity: 0.45, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Helix, { scrollProgress }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Environment, { preset: "apartment" })
      ]
    }
  ) });
}
export {
  DnaHelix as default
};
