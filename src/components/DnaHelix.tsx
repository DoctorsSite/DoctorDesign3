import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

type HelixProps = {
  turns?: number;
  height?: number;
  radius?: number;
  tubularSegments?: number;
  scrollProgress?: { current: number };
};

/**
 * Right-handed DNA double helix:
 * - two smooth tubular strands twisting clockwise as they rise
 * - evenly spaced base-pair "rungs" (with two-color A-T / G-C accents)
 * - subtle inner glow via emissive physical material
 */
function Helix({
  turns = 5,
  height = 10,
  radius = 0.95,
  tubularSegments = 600,
  scrollProgress,
}: HelixProps) {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Parametric curves for the two strands (right-handed => +angle as y increases)
  const { curveA, curveB } = useMemo(() => {
    class HelixCurve extends THREE.Curve<THREE.Vector3> {
      offset: number;
      constructor(offset: number) {
        super();
        this.offset = offset;
      }
      getPoint(t: number, target = new THREE.Vector3()) {
        const angle = t * turns * Math.PI * 2 + this.offset;
        const y = (t - 0.5) * height;
        return target.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      }
    }
    return { curveA: new HelixCurve(0), curveB: new HelixCurve(Math.PI) };
  }, [turns, height, radius]);

  // Rungs (base pairs) — evenly spaced along the helix
  const rungs = useMemo(() => {
    const count = turns * 10; // 10 base pairs per turn ~ B-form DNA
    const arr: { pos: THREE.Vector3; rot: THREE.Euler; len: number; kind: 0 | 1 }[] = [];
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      curveA.getPoint(t, a);
      curveB.getPoint(t, b);
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      const angle = Math.atan2(dir.z, dir.x);
      arr.push({
        pos: mid,
        rot: new THREE.Euler(0, -angle, Math.PI / 2),
        len,
        kind: i % 2 === 0 ? 0 : 1,
      });
    }
    return arr;
  }, [curveA, curveB, turns]);

  const strandMatGold = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#c9962f"),
        metalness: 0.9,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        emissive: new THREE.Color("#7a521a"),
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.3,
      }),
    [],
  );
  const strandMatBlue = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#3a5fa3"),
        metalness: 0.85,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: new THREE.Color("#0e2350"),
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.3,
      }),
    [],
  );
  const rungAT = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#b8862b"),
        metalness: 0.6,
        roughness: 0.3,
        emissive: new THREE.Color("#5a3d10"),
        emissiveIntensity: 0.25,
        transparent: true,
        opacity: 0.35,
      }),
    [],
  );
  const rungGC = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#6a7fb8"),
        metalness: 0.55,
        roughness: 0.35,
        emissive: new THREE.Color("#1a2a55"),
        emissiveIntensity: 0.25,
        transparent: true,
        opacity: 0.35,
      }),
    [],
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

  return (
    <group ref={group}>
      {/* Strand A — smooth tube */}
      <mesh material={strandMatGold}>
        <tubeGeometry args={[curveA, tubularSegments, 0.07, 16, false]} />
      </mesh>
      {/* Strand B — smooth tube */}
      <mesh material={strandMatBlue}>
        <tubeGeometry args={[curveB, tubularSegments, 0.07, 16, false]} />
      </mesh>

      {/* Base-pair rungs */}
      {rungs.map((r, i) => (
        <mesh
          key={i}
          position={r.pos}
          rotation={r.rot}
          material={r.kind === 0 ? rungAT : rungGC}
        >
          <cylinderGeometry args={[0.025, 0.025, r.len, 10]} />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
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
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#b8862b" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function DnaHelix({
  className = "",
  scrollProgress,
}: {
  className?: string;
  scrollProgress?: { current: number };
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 6, 5]} intensity={1.4} color="#fff3d6" />
        <directionalLight position={[-5, -2, -3]} intensity={0.7} color="#aac8ff" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#e6b860" />
        <pointLight position={[0, 3, -3]} intensity={0.8} color="#7aa6ff" />
        <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.45}>
          <Helix scrollProgress={scrollProgress} />
        </Float>
        <Particles />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
