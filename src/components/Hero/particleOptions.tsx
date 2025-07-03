export const optionsParticles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: ["push"],
      // },
      // onHover: {
      //   enable: true,
      //   mode: "repulse",

      // },
      resize: true,
    },
    // modes: {
    //   push: {
    //     quantity: 5,
    //   },
    //   repulse: {
    //     distance: 125,
    //     duration: 0.3,
    //   },

    // },
  },
  particles: {
    color: {
      value: "#9999ff",
    },
    // links: {
    //   color: "#9999ff",
    //   distance: 105,
    //   enable: true,
    //   opacity: 0.5,
    //   width: 1.2,
    // },
    collisions: {
      enable: true,
    },
    // move: {
    //   direction: undefined,
    //   enable: true,
    //   random: true,
    //   speed: 0.5,
    //   straight: false,
    // },
    number: {
      value: 75,
    },
    opacity: {
      value: 0.6,
      animation: {
        enable: true,
        speed: 0.1,
        minimumValue: 0,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
  },
  detectRetina: true,
};