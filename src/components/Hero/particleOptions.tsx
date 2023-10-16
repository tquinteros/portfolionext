export const optionsParticles = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ["push"],
        },
        onHover: {
          enable: true,
          mode: "repulse",
          
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 5,
        },
        repulse: {
          distance: 125,
          duration: 0.3,
        },
        // bubble: {
        //   distance: 200,
        //   size: 20,
        //   duration: 2,
        //   opacity: 0.5,
        // },
        // slow: {
        //   factor: 3,
        //   radius: 200,
        // },
        // trail: {
        //   delay: 0.1,
        //   quantity: 11,
        // },
        
      },
    },
    particles: {
      color: {
        value: "#9999ff",
      },
      links: {
        color: "#9999ff",
        distance: 105,
        enable: true,
        opacity: 0.5,
        width: 1.2,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: undefined,
        enable: true,
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };