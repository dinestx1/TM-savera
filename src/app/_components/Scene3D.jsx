"use client"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Text3D } from '@react-three/drei';
import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BuildingMesh({ position }) {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 2, 0.8]} />
        <meshStandardMaterial color="#FFD700" metalness={0.7} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function CraneMesh({ position }) {
  const groupRef = useRef(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.3}>
        {/* Crane Base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.2, 1]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        {/* Crane Arm */}
        <mesh position={[0.8, 0.5, 0]}>
          <boxGeometry args={[1.6, 0.05, 0.05]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
        {/* Crane Tower */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.05, 1, 0.05]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </Float>
    </group>
  );
}



const Scene3D = ({ className }) => {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          color="#FFD700"
          castShadow
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        {/* 3D Objects */}
        <BuildingMesh position={[-2, 0, 0]} />
        <BuildingMesh position={[0, 0, 0]} />
        <BuildingMesh position={[2, 0, 0]} />
        <CraneMesh position={[-1, 1, 1]} />
        <CraneMesh position={[1, 1, -1]} />
        
        {/* Background */}
        <mesh position={[0, 0, -5]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#0a0a0a" transparent opacity={0.8} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene3D;