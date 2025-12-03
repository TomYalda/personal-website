import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export const options: ISourceOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "connect",
      },
    },
    modes: {
      connect: {
        distance: 150,
        radius: 150,
        links: {
          color: "#92b4e2",
          opacity: 0.5,
          width: 1,

        },
        enable: true,
      }
    },
  },
  particles: {
    color: {
      value: "#92b4e2",
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 120,
    },
    opacity: {
      value: 0.7, // changes to 0.4 for dark theme as per background.tsx
    },
    shape: {
      type: "image",
      options: {
        image: [
          {
            src: "/background-icons/music.png",
          },
          {
            src: "/background-icons/semicolon.png",
          },
          {
            src: "/background-icons/curly-braces.png",
          },
          {
            src: "/background-icons/controller.png",
          },
          {
            src: "/background-icons/dumbbell.png",
          },
          {
            src: "/background-icons/football.png",
          },
          {
            src: "/background-icons/html-braces.png",
          },
        ]
      },
    },
    size: {
      value: 10
    }
  },
  detectRetina: true,
}