"use client";

import { useEffect, useRef, useState } from "react";

const ImageColorDetecor = ({ imageUrl }: { imageUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("");

  // #RRGGBB

  const rgbToHex = (r: number, g: number, b: number) =>
    `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;

  useEffect(() => {
    if (imageUrl) {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = imageUrl;

        image.onload = () => {
          if (ctx) {
            // draw the image onto the canvas
            ctx?.drawImage(image, 0, 0);

            // top-left corner(position(0,0))
            const pixelData = ctx.getImageData(0, 0, 1, 1).data;

            // convert pixelData => []
            const pixelArray = Array.from(pixelData);

            // extract RGB values
            const [red, green, blue] = pixelArray;

            const hexCode = rgbToHex(red, green, blue);
            setColor(hexCode);
            console.log(hexCode);
          }
        };
      }
    }
  }, []);

  return (
    <div
      style={{
        background: color,
        borderRadius: "10px",
      }}
    >
      <img src={imageUrl} alt="" className="image" height={500} width={500} />

      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default ImageColorDetecor;
