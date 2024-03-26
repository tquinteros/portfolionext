import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const TestParticles = () => {
  const [init, setInit] = useState(false);
  const [loadParticles, setLoadParticles] = useState(false);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   // console.log(container);
  //   setLoadParticles(true);
  //   console.log("Particles loaded")
  // };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
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
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 125,
            duration: 0.3,
          },
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
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return <></>;
};
