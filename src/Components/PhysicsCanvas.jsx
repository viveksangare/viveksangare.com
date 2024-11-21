import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "matter-wrap";
import "matter-attractors";

const PhysicsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const {
      Engine,
      Render,
      World,
      Bodies,
      Body,
      Common,
      Mouse,
      Events,
      Runner,
    } = Matter;

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    // Set up engine and renderer
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();

    // Create an attractive body
    const attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        // render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
        render: { fillStyle: "#3aafa9", strokeStyle: "#3aafa9", lineWidth: 0 }, // light
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );
    World.add(engine.world, attractiveBody);

    // Add bodies that will be attracted
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, dimensions.width);
      const y = Common.random(0, dimensions.height);
      const s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 4);

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 10,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: { fillStyle: "#222222", strokeStyle: "#000000", lineWidth: 2 },
      });
      World.add(engine.world, body);

      const r = Common.random(0, 1);
      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          // fillStyle: r > 0.3 ? `#27292d` : `#444444`,
          // fillStyle: r > 0.3 ? `#A3e0DD` : `#57C7C1`, //LIGHT
          fillStyle: r > 0.3 ? `#F0F9F9` : `#8AD0CD`,

          // strokeStyle: `#000000`,
          strokeStyle: `#195d4a`, //LIGHT

          lineWidth: 2,
        },
      });
      World.add(engine.world, circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 0.6,
        friction: 0.2,
        frictionAir: 0.05,
        render: {
          // fillStyle: r > 0.3 ? `#334443` : `#222222`,
          // fillStyle: r > 0.3 ? `#F0F9F9` : `#8AD0CD`,
          fillStyle: r > 0.3 ? `#A3e0DD` : `#57C7C1`, //LIGHT

          // strokeStyle: `#111111`,
          strokeStyle: `#6DC5C0`,
          lineWidth: 4,
        },
      });
      World.add(engine.world, circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.2,
        frictionAir: 0.2,
        render: {
          fillStyle: `#191919`,
          strokeStyle: `#111111`,
          lineWidth: 3,
        },
      });

      // World.add(engine.world, circle3);
    }

    // Add mouse control for attracting bodies
    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (mouse.position.x) {
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      }
    });

    // Run the engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Resize the canvas on window resize
    const handleResize = () => {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      render.canvas.width = dimensions.width;
      render.canvas.height = dimensions.height;
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: dimensions.width, y: dimensions.height },
      });
    };
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default PhysicsCanvas;
