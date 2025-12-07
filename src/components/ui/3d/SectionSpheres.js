import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SectionBalloon = ({ position, color, scale, speed }) => {
    return (
        <Float
            speed={speed * 1.2}
            rotationIntensity={0.3}
            floatIntensity={0.8}
        >
            <Sphere args={[1, 32, 32]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    speed={1.5}
                    distort={0.15}
                    roughness={0.7}
                    transparent
                    opacity={0.4}
                />
            </Sphere>
        </Float>
    );
};

const FourSpheres = () => {
    const group = useRef();

    // Exactly 4 spheres as requested
    const balloons = useMemo(() => [
        { position: [-2.5, 0.5, 0], scale: 1.2, color: '#D4AF37', speed: 1.2 }, // Gold Left
        { position: [2.5, -0.8, -1], scale: 0.9, color: '#F5F5F5', speed: 1.0 }, // Cream Right
        { position: [-1, -1.5, -0.5], scale: 0.7, color: '#888888', speed: 0.8 }, // Grey Bottom Center
        { position: [1.8, 1.2, -2], scale: 1.1, color: '#C5A028', speed: 1.1 }   // Darker Gold Top Right
    ], []);

    useFrame((state) => {
        const { mouse } = state;
        if (group.current) {
            // Localized Parallax
            const targetX = (mouse.x || 0) * 0.3;
            const targetY = (mouse.y || 0) * 0.3;

            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY * 0.05, 0.05);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX * 0.05, 0.05);
        }
    });

    return (
        <group ref={group}>
            {balloons.map((b, i) => (
                <SectionBalloon key={i} {...b} />
            ))}
        </group>
    );
};

const SectionSpheres = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[5, 5, 5]} intensity={1} />
                <FourSpheres />
            </Canvas>
        </div>
    );
};

export default SectionSpheres;
