import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

const SKILLS = [
  { name: "Python", color: "#facc15" },
  { name: "Java", color: "#fb923c" },
  { name: "C++", color: "#60a5fa" },
  { name: "JavaScript", color: "#fde047" },
  { name: "SQL", color: "#22d3ee" },
  { name: "React", color: "#38bdf8" },
  { name: "Node.js", color: "#4ade80" },
  { name: "TensorFlow", color: "#f97316" },
  { name: "Git", color: "#f43f5e" },
  { name: "Docker", color: "#3b82f6" },
];

function SkillSphere({ skill, index, total, radius }: { skill: typeof SKILLS[0]; index: number; total: number; radius: number }) {
  const ref = useRef<THREE.Group>(null);
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const basePos = useMemo(() => new THREE.Vector3(
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi),
  ), [phi, theta, radius]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.15;
    const cos = Math.cos(t), sin = Math.sin(t);
    ref.current.position.set(
      basePos.x * cos - basePos.z * sin,
      basePos.y,
      basePos.x * sin + basePos.z * cos,
    );
  });

  return (
    <group ref={ref}>
      <Float speed={2} floatIntensity={0.4}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
        <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
          <div className="text-[11px] font-mono font-semibold text-foreground whitespace-nowrap px-2 py-0.5 rounded glass-strong border border-border/50">
            {skill.name}
          </div>
        </Html>
      </Float>
    </group>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.3;
      ref.current.rotation.x = s.clock.elapsedTime * 0.15;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial
        color="#60a5fa"
        emissive="#3b82f6"
        emissiveIntensity={0.7}
        metalness={1}
        roughness={0}
        wireframe
      />
    </mesh>
  );
}

export default function SkillsScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#60a5fa" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a78bfa" />

        <Sparkles count={60} scale={8} size={1.5} speed={0.4} color="#a78bfa" />
        <Core />
        {SKILLS.map((s, i) => (
          <SkillSphere key={s.name} skill={s} index={i} total={SKILLS.length} radius={2.8} />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}
