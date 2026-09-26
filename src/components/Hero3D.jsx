import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function FloatingMesh({ mousePosition }) {
  const meshRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth continuous rotation
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.35;

    // Smooth mouse tilt parallax target calculation
    targetRotation.current.x = (mousePosition.current.y * 0.4);
    targetRotation.current.y = (mousePosition.current.x * 0.4);

    // Dampened tilt interpolation towards mouse target
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      meshRef.current.rotation.x + targetRotation.current.x * 0.05,
      0.08
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + targetRotation.current.y * 0.05,
      0.08
    );
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.6} // Rotation intensity
      floatIntensity={1.2} // Up/down float intensity
    >
      <group ref={meshRef}>
        {/* Core distorted glass-metallic sphere */}
        <Sphere args={[1.8, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#7F5AF0"
            emissive="#00E5FF"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.8}
            distort={0.42} // Strength of distortion
            speed={2.5} // Speed of distortion animation
            clearcoat={1}
            clearcoatRoughness={0.1}
            wireframe={false}
            transparent={true}
            opacity={0.88}
          />
        </Sphere>

        {/* Outer orbital neon ring / torus knot accent */}
        <TorusKnot args={[2.5, 0.08, 128, 32]} scale={1.1} rotation={[Math.PI / 4, 0, 0]}>
          <meshPhysicalMaterial
            color="#00E5FF"
            emissive="#7F5AF0"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.9}
            transparent={true}
            opacity={0.65}
          />
        </TorusKnot>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coords from -1 to 1
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-85">
      <Canvas
        camera={{ position: [0, 0, 6], fov: isMobile ? 55 : 45 }}
        dpr={[1, 2]} // Performance DPR cap
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#7F5AF0" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#00E5FF" />
        <pointLight position={[0, 0, 5]} intensity={1.8} color="#2CB67D" />

        {/* 3D Floating Object */}
        <FloatingMesh mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
