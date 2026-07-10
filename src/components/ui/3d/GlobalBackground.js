import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const createSeededRandom = (seed) => {
    let value = seed;

    return () => {
        value = (value * 1664525 + 1013904223) % 4294967296;
        return value / 4294967296;
    };
};

const getPrefersReducedMotion = () => (
    typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const Balloon = ({ position, color, scale, speed }) => {
    return (
        <Float
            speed={speed}
            rotationIntensity={0.3}
            floatIntensity={1.2}
        >
            <Sphere args={[1, 32, 32]} position={position} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    speed={1.5}
                    distort={0.15}
                    roughness={0.7}
                    transparent
                    opacity={0.2}
                />
            </Sphere>
        </Float>
    );
};

const BalloonField = () => {
    const group = useRef();

    const balloons = useMemo(() => {
        const colors = ['#D4AF37', '#F5F5F5', '#888888']; // Gold, Cream, Grey
        const items = [];
        const random = createSeededRandom(20251218);

        for (let i = 0; i < 25; i++) {
            items.push({
                position: [
                    (random() - 0.5) * 20,
                    (random() - 0.5) * 15,
                    (random() - 0.5) * 10 - 2
                ],
                scale: random() * 0.6 + 0.3,
                color: colors[Math.floor(random() * colors.length)],
                speed: random() * 0.5 + 0.5
            });
        }
        return items;
    }, []);

    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize mouse position to -1 to 1
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        if (group.current) {
            const targetX = mouse.current.x * 1.5;
            const targetY = mouse.current.y * 1.5;

            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY * 0.05, 0.1);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX * 0.05, 0.1);
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
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return undefined;
        }

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

        handleChange();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden'
        }} aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <BalloonField />
            </Canvas>
        </div>
    );
};

export default GlobalBackground;
