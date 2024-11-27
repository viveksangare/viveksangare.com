import { useEffect, useRef } from "react";
import { useTheme } from "@emotion/react";
import Matter from "matter-js";
import "matter-wrap";

const RandomPhysicsCanvas = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current.parentElement;

    const getDimensions = () => ({
      width: container.offsetWidth,
      height: container.offsetHeight,
    });

    let dimensions = getDimensions();

    const { Engine, Render, World, Bodies, Body, Common, Runner, Events } =
      Matter;

    Matter.use("matter-wrap");

    // Set up engine and renderer
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();

    // Add bodies that will move randomly
    const bodies = [];
    // Random bodies
    // for (let i = 0; i < 60; i++) {
    //   const x = Common.random(0, dimensions.width);
    //   const y = Common.random(0, dimensions.height);
    //   const radius = Common.random(10, 40);

    //   const body = Bodies.circle(x, y, radius, {
    //     restitution: 0.9, // Makes bodies bouncy
    //     friction: 0,
    //     frictionAir: 0.02,
    //     render: {
    //       fillStyle: theme.palette.background.bubble,
    //       // strokeStyle: `#195d4a`,
    //       // lineWidth: 2,
    //     },
    //   });
    //   // Assign an initial random velocity
    //   Body.setVelocity(body, {
    //     x: Common.random(-2, 2),
    //     y: Common.random(-2, 2),
    //   });

    //   World.add(engine.world, body);
    //   bodies.push(body);
    // }

    // upward floating bodies
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, dimensions.width);
      const y = dimensions.height; // Start from the bottom of the canvas
      const radius = Common.random(10, 40);

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.9, // Makes bodies bouncy
        friction: 0,
        frictionAir: 0.03,
        render: {
          fillStyle: theme.palette.background.bubble,
        },
      });

      // Set an initial velocity to float upwards
      Body.setVelocity(body, {
        x: Common.random(-0.2, 0.2), // Slight horizontal movement
        y: -Common.random(0.5, 1), // Upward velocity
      });

      World.add(engine.world, body);
      bodies.push(body);
    }

    // Add random movement logic
    // Events.on(engine, "afterUpdate", () => {
    //   bodies.forEach((body) => {
    //     // Apply a small random force to simulate random movement
    //     Body.applyForce(body, body.position, {
    //       x: Common.random(-0.002, 0.002),
    //       y: Common.random(-0.002, 0.002),
    //     });
    //   });
    // });

    // Add upward force logic
    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body) => {
        // Apply a small upward force
        Body.applyForce(body, body.position, {
          x: 0,
          y: -0.0003, // Constant upward force
        });

        // Wrap bodies to reappear at the bottom when they float out of view
        if (body.position.y + body.circleRadius < 0) {
          Body.setPosition(body, {
            x: Common.random(0, dimensions.width),
            y: dimensions.height + body.circleRadius,
          });
        }
      });
    });

    // Run the engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Resize the canvas on window resize
    const handleResize = () => {
      dimensions = getDimensions();
      render.options.width = dimensions.width;
      render.options.height = dimensions.height;
      render.canvas.width = dimensions.width;
      render.canvas.height = dimensions.height;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: dimensions.width, y: dimensions.height },
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [theme, scrollbarWidth]);

  return <div ref={canvasRef}></div>;
};

export default RandomPhysicsCanvas;
