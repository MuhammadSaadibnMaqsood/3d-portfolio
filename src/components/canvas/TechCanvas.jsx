import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  MeshDistortMaterial,
  Float,
  Sphere,
  Preload,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm"; // Make sure maath is installed

const TechCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Ensure we don't have NaN rotations, which can cause issues
    meshRef.current.rotation.x = time * 0.2 || 0;
    meshRef.current.rotation.y = time * 0.3 || 0;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        {/* The Outer Wireframe Geometery */}
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial
          color="#00ffc3"
          wireframe
          transparent
          opacity={0.3}
        />

        {/* The Inner Glowing Core */}
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          {" "}
          {/* Explicitly position at origin */}
          <MeshDistortMaterial
            color="#00ffc3"
            attach="material"
            distort={0.4}
            speed={2}
            metalness={0.8}
            roughness={0.1}
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

const ParticleField = (props) => {
  const ref = useRef();
  // Increase radius slightly to ensure particles are visible around the core
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2.5 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10 || 0;
      ref.current.rotation.y -= delta / 15 || 0;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00ffc3"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const TechSceneCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true }}
      >
        {" "}
        {/* Added antialias */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          color="#00ffc3"
        />{" "}
        {/* Stronger directional light */}
        <pointLight
          position={[-10, -10, 10]}
          intensity={0.5}
          color="#00ffc3"
        />{" "}
        {/* Another light for better coverage */}
        <TechCore />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default TechSceneCanvas;
