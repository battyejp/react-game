import "./canvas.css";
import { useRef, useEffect } from "react";
import { drawGame } from "../helpers/frameRendererHelper"
import { updatePositions } from "../helpers/motionHelper"

const size = { width: 880, height: 720 }
const laneHeight = 80

function Canvas() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const lanes = useRef([
    { id: 2, speed: 1.5, enemies: [{x: 0}, {x: 200}, {x: 500 }] },
    { id: 3, speed: 1.5, enemies: [{x: 0}, {x: 200}, {x: 500 }] }
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
