import React, { useEffect, useRef } from 'react';

// ─── Optimized 3D wireframe cube — NO canvas filters, throttled RAF ─────────────
export default function HeroCube() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animId;
    let angleX = 0.3;
    let angleY = 0;
    let frameCount = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };
    window.addEventListener('resize', onResize);

    // Cube vertices (unit cube centered at origin)
    const baseVertices = [
      [-1,-1,-1], [ 1,-1,-1], [ 1, 1,-1], [-1, 1,-1],
      [-1,-1, 1], [ 1,-1, 1], [ 1, 1, 1], [-1, 1, 1],
    ];

    const edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7],
    ];

    const project = (x, y, z, scale, cx, cy) => {
      const depth = z + 3;
      return {
        x: cx + (x * 500) / depth * scale,
        y: cy + (y * 500) / depth * scale,
      };
    };

    const rotate = (x, y, z, ax, ay) => {
      // Rotate X
      const y1 = y * Math.cos(ax) - z * Math.sin(ax);
      const z1 = y * Math.sin(ax) + z * Math.cos(ax);
      // Rotate Y
      const x2 =  x  * Math.cos(ay) + z1 * Math.sin(ay);
      const z2 = -x  * Math.sin(ay) + z1 * Math.cos(ay);
      return [x2, y1, z2];
    };

    const drawCube = (scale) => {
      const W  = canvas.width;
      const H  = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      const rotated   = baseVertices.map(([x, y, z]) => rotate(x, y, z, angleX, angleY));
      const projected = rotated.map(([x, y, z])      => project(x, y, z, scale, cx, cy));

      edges.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        const zAvg = (rotated[a][2] + rotated[b][2]) / 2;
        // Back faces are dimmer
        const alpha = zAvg < 0 ? 0.12 : 0.45;

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        // Alternate edge color between cyan and blue
        ctx.strokeStyle = zAvg < 0
          ? `rgba(6,182,212,${alpha})`
          : `rgba(96,165,250,${alpha})`;
        ctx.lineWidth = zAvg < 0 ? 0.6 : 1.0;
        ctx.stroke();
      });

      // Vertex dots — only front-facing
      projected.forEach((p, i) => {
        if (rotated[i][2] < 0) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6,182,212,0.7)';
        ctx.fill();
      });
    };

    const drawOrbits = (scale) => {
      const cx = canvas.width  / 2;
      const cy = canvas.height / 2;
      const t  = Date.now() / 1000;

      // Ring 1 — ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * 1.5, scale * 0.4, angleY * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59,130,246,0.07)';
      ctx.setLineDash([4, 10]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Ring 2 — vertical ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * 0.35, scale * 1.55, -angleY * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139,92,246,0.06)';
      ctx.setLineDash([2, 14]);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Moving dot 1 (cyan)
      const d1x = cx + Math.cos(t * 0.5) * scale * 1.5;
      const d1y = cy + Math.sin(t * 0.5) * scale * 0.4;
      ctx.beginPath();
      ctx.arc(d1x, d1y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6,182,212,0.85)';
      ctx.fill();

      // Moving dot 2 (violet)
      const d2x = cx + Math.cos(-t * 0.8 + 2) * scale * 0.35;
      const d2y = cy + Math.sin(-t * 0.8 + 2) * scale * 1.55;
      ctx.beginPath();
      ctx.arc(d2x, d2y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.8)';
      ctx.fill();
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Throttle: only render every 2 frames (≈30fps) — still silky smooth visually
      frameCount++;
      if (frameCount % 2 !== 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(canvas.width, canvas.height) * 0.30;

      drawOrbits(scale);
      drawCube(scale);

      angleX += 0.0014;
      angleY += 0.003;
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.65,
        willChange: 'contents',
      }}
    />
  );
}
