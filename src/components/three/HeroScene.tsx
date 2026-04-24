import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sparkles, Stars, Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import portrait from "@/assets/aayush-3d.png";

/* ---------- Floating 3D portrait inside the portal ---------- */
function PortraitOrb() {
  const tex = useLoader(THREE.TextureLoader, portrait);
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.4) * 0.25;
      meshRef.current.position.y = 1.6 + Math.sin(t * 0.8) * 0.08;
    }
    if (ringRef.current) ringRef.current.rotation.z = t * 0.3;
    if (haloRef.current) {
      const sc = 1 + Math.sin(t * 1.2) * 0.05;
      haloRef.current.scale.set(sc, sc, 1);
    }
  });

  return (
    <group position={[0, 0, -1]}>
      {/* Outer glow halo */}
      <mesh ref={haloRef} position={[0, 1.6, -0.2]}>
        <ringGeometry args={[1.9, 4.2, 128]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.18} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* Spinning accretion ring */}
      <mesh ref={ringRef} position={[0, 1.6, -0.1]}>
        <ringGeometry args={[1.55, 1.85, 128]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.85} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* Portrait plane */}
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.4}>
        <mesh ref={meshRef} position={[0, 1.6, 0]}>
          <planeGeometry args={[2.6, 4.2]} />
          <meshBasicMaterial map={tex} transparent alphaTest={0.1} toneMapped={false} />
        </mesh>
      </Float>
      {/* Soft purple atmospheric glow */}
      <mesh position={[0, 1.6, -0.3]}>
        <circleGeometry args={[5.5, 64]} />
        <meshBasicMaterial color="#7e22ce" transparent opacity={0.08} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

/* ---------- Cosmic dust streaks ---------- */
function DustStreaks() {
  const points = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 8;
      const a = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = Math.sin(a) * r - 2;
    }
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);

  useFrame((s) => {
    if (points.current) points.current.rotation.y = s.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points} geometry={geom}>
      <pointsMaterial size={0.025} color="#e9d5ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <Stars radius={60} depth={50} count={4000} factor={3} saturation={0} fade speed={1} />
        <Sparkles count={120} scale={14} size={1.6} speed={0.25} color="#c084fc" />
        <DustStreaks />
        <PortraitOrb />
      </Suspense>
    </Canvas>
  );
}
