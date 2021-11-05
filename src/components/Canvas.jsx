import "./canvas.css";
import { useRef, useEffect } from "react";
import { drawGame } from "../helpers/frameRendererHelper"
import { updatePositions } from "../helpers/motionHelper"

const size = { width: 880, height: 720 }

function Canvas() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const lanes = useRef([
    { position: 2, speed: 1.5, enemies: [{x: 0, type: "blueCar"}, {x: 200, type: "yellowCar"}, {x: 500, type: "greenCar" }] },
    { position: 3, speed: 2.0, enemies: [{x: 10, type: "yellowCar"}, {x: 210, type: "blueCar"}, {x: 400, type: "blueCar" }] },
    { position: 4, speed: 2.5, enemies: [{x: 50, type: "yellowCar"}, {x: 250, type: "yellowCar"}, {x: 450, type: "greenCar" }] }
  ])

  useEffect(() => {
    const tick = () => {
      if (!canvasRef.current) return;
      renderFrame();
      requestIdRef.current = requestAnimationFrame(tick);
    };

    const renderFrame = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, size.width, size.height)
      drawGame(ctx, size.height, lanes)
      updatePositions(lanes)
    };

    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <canvas {...size} ref={canvasRef} />;
}

export default Canvas;
