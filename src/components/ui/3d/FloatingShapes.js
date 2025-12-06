import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const Sphere = ({ position, color, size, speed }) => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x = time * 0.2 * speed;
        mesh.current.rotation.y = time * 0.3 * speed;
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.4}
                    metalness={0.1}
                />
            </mesh>
        </Float>
    );
};

const FloatingShapes = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none', // Allow clicks to pass through
            zIndex: 0
        }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />

                {/* Pilates Balls - Soft Palette */}
                <Sphere position={[-4, 2, -5]} color="#fce7f3" size={1.2} speed={1.5} /> {/* Soft Pink */}
                <Sphere position={[4, -2, -6]} color="#D4AF37" size={1.0} speed={1.2} /> {/* Muted Gold */}
                <Sphere position={[2, 3, -10]} color="#e0f2fe" size={1.5} speed={1.0} /> {/* Soft Blue */}
                <Sphere position={[-3, -3, -8]} color="#6B8272" size={0.8} speed={1.8} /> {/* Primary Light Green */}
            </Canvas>
        </div>
    );
};

export default FloatingShapes;
