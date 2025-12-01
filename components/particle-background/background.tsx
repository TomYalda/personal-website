"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image";
import { options } from "./options";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => {
      setInit(true);
    }).catch((error) => {
      console.error("Failed to initialize particles engine:", error);
    });
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded: ", container?.id);
  }

  const particleOptions: ISourceOptions = useMemo(() => options, []);

  if (init) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          className="w-full h-full"
        />
      </div>
    );
  }

  return <div className="absolute inset-0 w-full h-full bg-transparent">Loading particles...</div>;
}