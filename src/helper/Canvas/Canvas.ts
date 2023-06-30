interface Position {
  x: number;
  y: number;
}

interface Node extends Position {
  vx: number;
  vy: number;
}

const CONFIG = {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;

  constructor(options: {
    phase: number;
    offset: number;
    frequency: number;
    amplitude: number;
  }) {
    this.phase = options.phase;
    this.offset = options.offset;
    this.frequency = options.frequency;
    this.amplitude = options.amplitude;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Line {
  private spring: number;
  private friction: number;
  private nodes: Node[] = [];

  constructor(spring: number, start: Position) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;

    for (let i = 0; i < CONFIG.size; i++) {
      this.nodes.push({ x: start.x, y: start.y, vx: 0, vy: 0 });
    }
  }

  update(target: Position): void {
    let spring = this.spring;
    const first = this.nodes[0];

    first.vx += (target.x - first.x) * spring;
    first.vy += (target.y - first.y) * spring;

    this.nodes.forEach((node, index) => {
      if (index > 0) {
        const previous = this.nodes[index - 1];
        node.vx += (previous.x - node.x) * spring;
        node.vy += (previous.y - node.y) * spring;
        node.vx += previous.vx * CONFIG.dampening;
        node.vy += previous.vy * CONFIG.dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= CONFIG.tension;
    });
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const { nodes } = this;
    let index = 1;

    ctx.beginPath();
    ctx.moveTo(nodes[0].x, nodes[0].y);

    for (; index < nodes.length - 2; index++) {
      const current = nodes[index];
      const next = nodes[index + 1];
      ctx.quadraticCurveTo(
        current.x,
        current.y,
        0.5 * (current.x + next.x),
        0.5 * (current.y + next.y)
      );
    }

    const current = nodes[index];
    const next = nodes[index + 1];
    ctx.quadraticCurveTo(current.x, current.y, next.x, next.y);
    ctx.stroke();
    ctx.closePath();
  }
}

/**
 * Starts the pointer trail animation on the element with the id `canvas`.
 * Returns a function that stops the animation and removes every listener.
 */
export const renderCanvas = (): (() => void) => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  const ctx = canvas?.getContext("2d");

  if (!canvas || !ctx) {
    return () => undefined;
  }

  const hue = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  const position: Position = { x: 0, y: 0 };
  let lines: Line[] = [];
  let frameId: number | null = null;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const render = () => {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(hue.update())},90%,50%,0.25)`;
    ctx.lineWidth = 1;

    lines.forEach((line) => {
      line.update(position);
      line.draw(ctx);
    });

    frameId = window.requestAnimationFrame(render);
  };

  const start = () => {
    if (frameId === null && lines.length > 0) {
      frameId = window.requestAnimationFrame(render);
    }
  };

  const stop = () => {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
      frameId = null;
    }
  };

  const createLines = () => {
    lines = Array.from(
      { length: CONFIG.trails },
      (_, index) => new Line(0.45 + (index / CONFIG.trails) * 0.025, position)
    );
  };

  const moveTo = (x: number, y: number) => {
    position.x = x;
    position.y = y;

    if (lines.length === 0) {
      createLines();
      start();
    }
  };

  const onMouseMove = (event: MouseEvent) =>
    moveTo(event.clientX, event.clientY);

  const onTouch = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      moveTo(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("touchstart", onTouch, { passive: true });
  document.addEventListener("touchmove", onTouch, { passive: true });
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("focus", start);
  window.addEventListener("blur", stop);
  resizeCanvas();

  return () => {
    stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onTouch);
    document.removeEventListener("touchmove", onTouch);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("orientationchange", resizeCanvas);
    window.removeEventListener("focus", start);
    window.removeEventListener("blur", stop);
  };
};
