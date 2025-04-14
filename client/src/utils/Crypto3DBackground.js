import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Crypto3DBackground = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Add renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create particles for a galaxy effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    // Create galaxy spiral pattern
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 12;
      const spiralOffset = Math.random() * 5 - 2.5;
      
      posArray[i] = Math.cos(angle) * radius + spiralOffset;
      posArray[i + 1] = Math.sin(angle) * radius + spiralOffset;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      
      // Colors - blue/purple theme
      colorArray[i] = 0.2 + Math.random() * 0.4; // R
      colorArray[i + 1] = 0.3 + Math.random() * 0.3; // G
      colorArray[i + 2] = 0.8 + Math.random() * 0.2; // B
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create Ethereum logo shape
    const createEthLogo = () => {
      const group = new THREE.Group();
      
      // Hexagon outline
      const hexGeometry = new THREE.CircleGeometry(3, 6);
      const hexEdges = new THREE.EdgesGeometry(hexGeometry);
      const hexMaterial = new THREE.LineBasicMaterial({ 
        color: 0x6e9df7,
        transparent: true,
        opacity: 0.8
      });
      const hexagon = new THREE.LineSegments(hexEdges, hexMaterial);
      group.add(hexagon);
      
      // Inner shapes for ETH logo
      const triangleShape = new THREE.Shape();
      triangleShape.moveTo(0, 2);
      triangleShape.lineTo(-1.7, 0);
      triangleShape.lineTo(1.7, 0);
      triangleShape.lineTo(0, 2);
      
      const trianglePath = new THREE.Path();
      trianglePath.moveTo(0, -0.2);
      trianglePath.lineTo(-1.7, -2.2);
      trianglePath.lineTo(1.7, -2.2);
      trianglePath.lineTo(0, -0.2);
      
      triangleShape.holes.push(trianglePath);
      
      const triangleGeometry = new THREE.ShapeGeometry(triangleShape);
      const triangleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x6e9df7,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      
      const triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
      group.add(triangle);
      
      scene.add(group);
      return group;
    };
    
    const ethLogo = createEthLogo();
    ethLogo.position.z = 5;
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles slowly
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.0003;
      
      // Rotate Eth logo
      ethLogo.rotation.z += 0.005;
      
      // Floating animation for logo
      ethLogo.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      scene.remove(ethLogo);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default Crypto3DBackground;