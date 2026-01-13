import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  type?: "sphere" | "box" | "torus";
}

export function FloatingShape({
  position,
  color,
  type = "sphere",
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Rotation animation
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.5;

    // Floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(time + position[0]) * 0.3;

    // Scale on hover
    const targetScale = hovered ? 1.3 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const commonProps = {
    ref: meshRef,
    position,
    onPointerOver: () => setHovered(true),
    onPointerOut: () => setHovered(false),
  };

  if (type === "box") {
    return (
      <Box {...commonProps} args={[1.5, 1.5, 1.5]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
    );
  }

  if (type === "torus") {
    return (
      <Torus {...commonProps} args={[1, 0.4, 16, 100]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    );
  }

  return (
    <Sphere {...commonProps} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
}

export function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />

      {/* Directional lights for dramatic effect */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#00d4ff"
      />
      <directionalLight
        position={[-10, -10, -5]}
        intensity={1}
        color="#ff006e"
      />

      {/* Point lights for accent */}
      <pointLight position={[0, 5, 0]} intensity={1} color="#8338ec" />
      <pointLight position={[0, -5, 0]} intensity={0.5} color="#00d4ff" />

      {/* Floating shapes */}
      <FloatingShape position={[-3, 0, 0]} color="#00d4ff" type="sphere" />
      <FloatingShape position={[0, 0, -2]} color="#ff006e" type="box" />
      <FloatingShape position={[3, 0, 0]} color="#8338ec" type="torus" />

      {/* Additional background shapes */}
      <FloatingShape position={[-5, 2, -5]} color="#00d4ff" type="sphere" />
      <FloatingShape position={[5, -2, -5]} color="#ff006e" type="sphere" />
    </>
  );
}
