import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Balloon = ({ position, color, scale, speed }) => {
    return (
        <Float
            speed={speed * 1.0} // Restored speed
            rotationIntensity={0.3}
            floatIntensity={1.2} // More float
        >
            <Sphere args={[1, 32, 32]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    speed={1.5}
                    distort={0.15}
                    roughness={0.7} // Matte
                    transparent
                    opacity={0.2} // Very subtle
                />
            </Sphere>
        </Float>
    );
};

const BalloonField = () => {
    const group = useRef();

    // Generate random balloons
    const balloons = useMemo(() => {
        const colors = ['#D4AF37', '#F5F5F5', '#888888']; // Gold, Cream, Grey
        const items = [];
        // Increase count for global coverage
        for (let i = 0; i < 25; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 20, // Wider Spread X
                    (Math.random() - 0.5) * 15, // Wider Spread Y
                    (Math.random() - 0.5) * 10 - 2 // Spread Z, pushed back slightly
                ],
                scale: Math.random() * 0.6 + 0.3, // Size 0.3 - 0.9
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 0.5 + 0.5
            });
        }
        return items;
    }, []);

    useFrame((state) => {
        const { mouse } = state;
        if (group.current) {
            // Parallax tilt - subtle
            const targetX = (mouse.x || 0) * 0.5;
            const targetY = (mouse.y || 0) * 0.5;

            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY * 0.02, 0.05);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX * 0.02, 0.05);
        }
    });

    return (
        <group ref={group}>
            {balloons.map((b, i) => (
                <Balloon key={i} {...b} />
            ))}
        </group>
    );
};

const GlobalBackground = () => {
    return (
        <div style={{
            position: 'fixed', // Stays in place while scrolling
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1, // Behind everything
            pointerEvents: 'none', // Clicks pass through
            overflow: 'hidden'
        }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <BalloonField />
            </Canvas>
        </div>
    );
};

export default GlobalBackground;
