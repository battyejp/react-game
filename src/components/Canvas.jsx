import "./canvas.css";
import { useRef, useEffect } from "react";
import frameRenderer from "./frameRenderer";
import positionUpdater from "./positionUpdater";

const size = { width: 800, height: 1000 };

function Canvas() {
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const ballRef = useRef([
    { x: 50, y: 50, vx: 3.9, vy: 3.3, radius: 20 }, 
    { x: 20, y: 20, vx: 3.9, vy: 3.3, radius: 20 } , 
    { x: 100, y: 100, vx: 3.9, vy: 3.3, radius: 20 },
    { x: 100, y: 100, vx: -3.9, vy: 3.3, radius: 5 },
    { x: 100, y: 0, vx: -3.9, vy: 3.3, radius: 15 },
    { x: 100, y: 0, vx: -1.5, vy: -2, radius: 15 },
    { x: 100, y: 0, vx: 1, vy: -1, radius: 15 }
  ]);

  useEffect(() => {
    const tick = () => {
      if (!canvasRef.current) return;
      renderFrame();
      requestIdRef.current = requestAnimationFrame(tick);
    };

    const renderFrame = () => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, size.width, size.height);
      ballRef.current.forEach((ball)=>{
        positionUpdater.call(ball, size)
        frameRenderer.call(ctx, ball)
      });
    };

    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <canvas {...size} ref={canvasRef} />;
}

export default Canvas;
