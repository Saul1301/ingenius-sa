import React, { useEffect, useRef } from 'react';

// ─── Pure Canvas 2D → 3D wireframe cube ────────────────────────────────────────
export default function HeroCube() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angleX = 0.3;
    let angleY = 0;
    let angleZ = 0.1;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Cube vertices (unit cube centered at origin)
    const baseVertices = [
      [-1,-1,-1], [ 1,-1,-1], [ 1, 1,-1], [-1, 1,-1], // back face
      [-1,-1, 1], [ 1,-1, 1], [ 1, 1, 1], [-1, 1, 1], // front face
    ];

    // Edges: pairs of vertex indices
    const edges = [
      [0,1],[1,2],[2,3],[3,0], // back
      [4,5],[5,6],[6,7],[7,4], // front
      [0,4],[1,5],[2,6],[3,7], // sides
    ];

    // Inner cube (smaller, for depth effect)
    const innerScale = 0.4;

    // Project 3D → 2D
    const project = (x, y, z, scale, cx, cy) => {
      const fov = 500;
      const depth = z + 3;
      return {
        x: cx + (x * fov) / depth * scale,
        y: cy + (y * fov) / depth * scale,
      };
    };

    // Rotate point around axes
    const rotate = (x, y, z, ax, ay, az) => {
      // Rotate X
      let y1 = y * Math.cos(ax) - z * Math.sin(ax);
      let z1 = y * Math.sin(ax) + z * Math.cos(ax);
      // Rotate Y
      let x2 = x  * Math.cos(ay) + z1 * Math.sin(ay);
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
      // Rotate Z
      let x3 =  x2 * Math.cos(az) - y1 * Math.sin(az);
      let y3 =  x2 * Math.sin(az) + y1 * Math.cos(az);
      return [x3, y3, z2];
    };

    const drawCube = (scale, opacity, colorA, colorB, glowAlpha) => {
      const W  = canvas.width;
      const H  = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      // Rotate all vertices
      const rotated = baseVertices.map(([x, y, z]) =>
        rotate(x, y, z, angleX, angleY, angleZ)
      );

      // Project to 2D
      const projected = rotated.map(([x, y, z]) =>
        project(x, y, z, scale, cx, cy)
      );

      // Draw edges
      edges.forEach(([a, b], i) => {
        const pa = projected[a];
        const pb = projected[b];
        const isBack = rotated[a][2] < 0 && rotated[b][2] < 0;
        const alpha = isBack ? opacity * 0.3 : opacity;

        // Glow pass
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad.addColorStop(0, colorA.replace(')', `, ${alpha * glowAlpha})`).replace('rgb', 'rgba'));
        grad.addColorStop(1, colorB.replace(')', `, ${alpha * glowAlpha})`).replace('rgb', 'rgba'));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 6;
        ctx.filter = 'blur(4px)';
        ctx.stroke();
        ctx.restore();

        // Sharp line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        const grad2 = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        grad2.addColorStop(0, colorA.replace(')', `, ${alpha})`).replace('rgb', 'rgba'));
        grad2.addColorStop(1, colorB.replace(')', `, ${alpha})`).replace('rgb', 'rgba'));
        ctx.strokeStyle = grad2;
        ctx.lineWidth = 1.2;
        ctx.filter = 'none';
        ctx.stroke();
        ctx.restore();
      });

      // Draw vertex dots
      projected.forEach((p, i) => {
        const isBack = rotated[i][2] < 0;
        const dotAlpha = isBack ? opacity * 0.2 : opacity * 0.9;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212,${dotAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#06B6D4';
        ctx.fill();
        ctx.restore();
      });
    };

    const drawInnerCube = (scale) => {
      const W  = canvas.width;
      const H  = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const iScale = scale * innerScale;

      const rotated = baseVertices.map(([x, y, z]) =>
        rotate(x, y, z, -angleX * 1.3, -angleY * 1.5, angleZ * 0.7)
      );

      const projected = rotated.map(([x, y, z]) =>
        project(x, y, z, iScale, cx, cy)
      );

      edges.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = `rgba(139,92,246,0.25)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      });
    };

    const drawOrbitRings = (scale) => {
      const W  = canvas.width;
      const H  = canvas.height;
      const cx = W / 2;
      const cy = H / 2;

      // Outer ellipse ring 1
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angleY * 0.4);
      ctx.scale(1, 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, scale * 1.45, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59,130,246,0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.restore();

      // Outer ellipse ring 2
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-angleY * 0.6 + Math.PI / 4);
      ctx.scale(0.3, 1);
      ctx.beginPath();
      ctx.arc(0, 0, scale * 1.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139,92,246,0.10)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 12]);
      ctx.stroke();
      ctx.restore();

      // Moving dot on ring 1
      const t = Date.now() / 1000;
      const orbitX = cx + Math.cos(t * 0.6) * scale * 1.45;
      const orbitY = cy + Math.sin(t * 0.6) * scale * 0.435;
      ctx.save();
      ctx.beginPath();
      ctx.arc(orbitX, orbitY, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6,182,212,0.9)';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#06B6D4';
      ctx.fill();
      ctx.restore();

      // Moving dot on ring 2
      const orbitX2 = cx + Math.cos(-t * 0.9 + 2) * scale * 0.48;
      const orbitY2 = cy + Math.sin(-t * 0.9 + 2) * scale * 1.6;
      ctx.save();
      ctx.beginPath();
      ctx.arc(orbitX2, orbitY2, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.9)';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#8B5CF6';
      ctx.fill();
      ctx.restore();
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const scale = Math.min(W, H) * 0.32;

      // Draw outer cube
      drawCube(scale, 0.55, 'rgb(6,182,212)', 'rgb(59,130,246)', 1.5);

      // Draw inner cube
      drawInnerCube(scale);

      // Draw orbiting rings + dots
      drawOrbitRings(scale);

      angleX += 0.0018;
      angleY += 0.004;
      angleZ += 0.0007;

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
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
        opacity: 0.75,
      }}
    />
  );
}
