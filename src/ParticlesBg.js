import React from "react";
import { loadFull } from "tsparticles"; 
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 50, density: { enable: true, area: 800 } },
                    color: { value: ["#ff9a9e", "#fad0c4", "#00c6ff", "#0072ff"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.7, random: true },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 1.5, direction: "none", random: true },
                    lineLinked: { enable: false },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "bubble" },
                        onClick: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        bubble: { distance: 150, size: 10, duration: 1 },
                        repulse: { distance: 200, duration: 0.4 },
                    },
                },
                background: { color: "transparent" },
            }}
        />
    );
};

export default ParticlesBg;
