import "./canvas.css";
import { useRef, useEffect } from "react";
import frameRenderer from "../helpers/frameRenderer";
import positionUpdater from "../helpers/positionUpdater";
import {getCar1, otherFunction} from "../helpers/spriteHelper";

const size = { width: 880, height: 720 };

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
      //ctx.clearRect(0, 0, size.width, size.height);

      var img = document.getElementById("sprites");
      let width = 80;
      let height = 80;
      
      for (let i = 0; i < 11; i++) {
        ctx.drawImage(img, 137, 158, width, height, width * i, size.height - width, width, height)
        ctx.drawImage(img, 318, 158, width, height, width * i, size.height - (width * 2), width, height)
        ctx.drawImage(img, 318, 158, width, height, width * i, size.height - (width * 3), width, height)
        ctx.drawImage(img, 318, 158, width, height, width * i, size.height - (width * 4), width, height)
        ctx.drawImage(img, 137, 158, width, height, width * i, size.height - (width * 5), width, height)
        ctx.drawImage(img, 228, 158, width, height, width * i, size.height - (width * 6), width, height)
        ctx.drawImage(img, 228, 158, width, height, width * i, size.height - (width * 7), width, height)
        ctx.drawImage(img, 228, 158, width, height, width * i, size.height - (width * 8), width, height)

        if (i % 2 == 0)
          ctx.drawImage(img, 409, 158, width, height, width * i, size.height - (width * 9), width, height)
        else
          ctx.drawImage(img, 499, 158, width, height, width * i, size.height - (width * 9), width, height)
      }

      var car = getCar1();
      ctx.drawImage(img, car.x, car.y, car.width, car.height, 0, height * 7, car.width, car.height)

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
