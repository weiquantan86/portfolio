
import { useMemo } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function Background() {
  const options = useMemo(
    () => ({
      // Let tsparticles create a fixed, full-screen canvas on <body>
      fullScreen: { enable: true, zIndex: 0 },   
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      particles: {
        number: { value: 75, density: { enable: true, area: 800 } },
        color: { value: "#8BA3C7" },
        links: { enable: true, color: "#8BA3C7", distance: 130, opacity: 0.35, width: 1 },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        size: { value: { min: 1, max: 2 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 2 },
        },
      },
    }),
    []
  )

  const init = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="bg"
      init={init}
      options={options}
      style={{ pointerEvents: "none" }} // don’t block clicks
    />
  )
}

