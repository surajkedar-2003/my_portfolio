import React, { useEffect } from 'react';
import './ParticleCursorEffect.css';

const ParticleCursorEffect = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@1.28.0/dist/tsparticles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('hero-particles', { // Attach particles to hero section by changing the id here
          particles: {
            number: { value: 0, density: { enable: true } },
            color: { value: "#ff0000", animation: { enable: true, speed: 180, sync: true } },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: {
              value: { min: 5, max: 20 },
              animation: { enable: true, speed: 5, sync: true, startValue: "random", destroy: "max" },
            },
            move: {
              enable: true,
              speed: { min: 2, max: 4 },
              direction: "none",
              outModes: "destroy",
            },
            life: {
              duration: 0.1, // Set lifespan to 100ms
              count: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "trail" },
            },
            modes: {
              trail: { delay: 0.005, quantity: 2 },
            },
          },
          background: { color: "#00000000" }, // Transparent background for the effect in hero section
        });
      }
    };

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  return <div id="hero-particles" className="absolute inset-0 z-0" />; // Assign unique ID for the particles in the hero section
};

export default ParticleCursorEffect;
