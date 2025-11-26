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
    });
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded: ", container?.id);
  }

  const particleOptions: ISourceOptions = useMemo(() => options, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particleOptions}
      />
    );
  }

  return <></>;
}