import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const dataNodes = [
  { label: "SYS_STACK // Python", info: "Primary engine for data processing & backend logic.", icon: "code", color: "#3776AB" },
  { label: "SYS_STACK // FastAPI", info: "High-performance async API development.", icon: "bolt", color: "#009688" },
  { label: "SYS_STACK // React", info: "Dynamic frontend interface development.", icon: "terminal", color: "#61DAFB" },
  { label: "SYS_STACK // PyTorch", info: "Neural network training & inference.", icon: "memory", color: "#EE4C2C" },
  { label: "PROJECT // SRM Catalyst", info: "AI career guidance platform for students.", icon: "psychology", color: "#FF9900" },
  { label: "PROJECT // RAG Chatbot", info: "YouTube content intelligence engine.", icon: "smart_toy", color: "#47A248" },
  { label: "SYS_STACK // Vector DB", info: "Semantic search via Pinecone/Chroma.", icon: "database", color: "#2496ED" }
]

export default function DataFluxNodeGraph() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const wrapperRef = useRef(null)
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const parallaxRef = useRef(null)
  const tooltipRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const container = containerRef.current
    const parallaxLayer = parallaxRef.current
    const tooltip = tooltipRef.current
    
    let width, height;
    let particles = [];
    const particleCount = 120;
    const connectionDistance = 120;
    let mouse = { x: null, y: null, localX: null, localY: null };
    let hoveredNode = null;
    let animationFrameId;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor(isMajor = false) {
        this.isMajor = isMajor;
        this.data = isMajor ? dataNodes[Math.floor(Math.random() * dataNodes.length)] : null;
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseSize = this.isMajor ? Math.random() * 3 + 4 : Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.glow = 0;
      }
      update() {
        let zoomFactor = 1;
        if (hoveredNode) {
          const dx = this.x - hoveredNode.x;
          const dy = this.y - hoveredNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            zoomFactor = 1.2;
          }
        }

        this.x += this.vx * zoomFactor;
        this.y += this.vy * zoomFactor;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (this.isMajor && mouse.localX !== null && mouse.localY !== null) {
          const dx = this.x - mouse.localX;
          const dy = this.y - mouse.localY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 25) {
            this.size = this.baseSize * 1.5;
            this.glow = Math.min(this.glow + 0.15, 1);
            hoveredNode = this;
          } else {
            this.size = this.baseSize;
            this.glow = Math.max(this.glow - 0.1, 0);
            if (hoveredNode === this) hoveredNode = null;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.isMajor) {
          const opacity = 0.6 + (this.glow * 0.4);
          ctx.fillStyle = `rgba(121, 209, 255, ${opacity})`;
          if (this.glow > 0) {
            ctx.shadowBlur = 15 * this.glow;
            ctx.shadowColor = '#0094C6';
          }
        } else {
          ctx.fillStyle = 'rgba(121, 209, 255, 0.4)';
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 15; i++) {
        particles.push(new Particle(true));
      }
      for (let i = 0; i < particleCount - 15; i++) {
        particles.push(new Particle(false));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      let foundHover = null;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        if (p1.glow > 0.5) foundHover = p1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            let opacity = 1 - (dist / connectionDistance);
            let color = '121, 209, 255';
            
            if (p1.isMajor || p2.isMajor) opacity *= 1.5;
            if ((p1.glow > 0 || p2.glow > 0)) {
              opacity *= 2;
              color = '0, 148, 198';
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color}, ${opacity * 0.2})`;
            ctx.lineWidth = (p1.glow > 0 || p2.glow > 0) ? 1 : 0.5;
            ctx.stroke();
          }
        }
      }

      if (foundHover) {
        let tooltipX = 0;
        let tooltipY = 0;

        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          // Position tooltip relative to the actual node position, not just the mouse
          tooltipX = foundHover.x + rect.left + 20;
          tooltipY = foundHover.y + rect.top + 20;
          
          // Prevent tooltip from overflowing the right/bottom edges of the window
          if (tooltipX + 250 > window.innerWidth) {
            tooltipX = foundHover.x + rect.left - 260; // Flip to left of node
          }
          if (tooltipY + 120 > window.innerHeight) {
            tooltipY = foundHover.y + rect.top - 120; // Flip above node
          }
        }

        tooltip.style.opacity = '1';
        tooltip.style.transform = `translate(${tooltipX}px, ${tooltipY}px)`;
        tooltip.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            <span class="material-symbols-outlined" style="color: ${foundHover.data.color}; font-size: 24px;">${foundHover.data.icon}</span>
            <div style="font-weight: 600; letter-spacing: 0.05em; font-family: 'Inter', sans-serif; color: white;">${foundHover.data.label}</div>
          </div>
          <div class='opacity-70 mt-1 font-inter text-[10px] leading-relaxed' style='color: #d8e4ee;'>${foundHover.data.info}</div>
        `;
      } else {
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / 60;
      const moveY = (e.clientY - centerY) / 60;

      if (container && parallaxLayer) {
        container.style.transform = `perspective(1000px) rotateX(${-moveY/2}deg) rotateY(${moveX/2}deg)`;
        parallaxLayer.style.transform = `translateX(${moveX * 1.5}px) translateY(${moveY * 1.5}px)`;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      if (container && parallaxLayer) {
        container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        parallaxLayer.style.transform = `translateX(0px) translateY(0px)`;
      }
      tooltip.style.opacity = '0';
    };

    const handleCanvasMouseMove = (e) => {
      mouse.localX = e.offsetX;
      mouse.localY = e.offsetY;
    };

    const handleCanvasMouseLeave = () => {
      mouse.localX = null;
      mouse.localY = null;
      tooltip.style.opacity = '0';
    };

    const handleTouch = (e) => {
      if (!canvas) return;
      const touch = e.touches[0];
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      
      const rect = canvas.getBoundingClientRect();
      mouse.localX = touch.clientX - rect.left;
      mouse.localY = touch.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    if (canvas) {
      canvas.addEventListener('mousemove', handleCanvasMouseMove);
      canvas.addEventListener('mouseleave', handleCanvasMouseLeave);
      canvas.addEventListener('touchstart', handleTouch, { passive: true });
      canvas.addEventListener('touchmove', handleTouch, { passive: true });
      // Intentionally omitting 'touchend' so the last tapped node stays visible
      // until the user taps somewhere empty.
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleCanvasMouseMove);
        canvas.removeEventListener('mouseleave', handleCanvasMouseLeave);
        canvas.removeEventListener('touchstart', handleTouch);
        canvas.removeEventListener('touchmove', handleTouch);
      }
      cancelAnimationFrame(animationFrameId);
    }
  }, [isFullscreen])

  return (
    <>
      {typeof document !== 'undefined' && createPortal(
        <div id="flux-tooltip" ref={tooltipRef} style={{ position: 'fixed', top: 0, left: 0 }} className="pointer-events-none z-[9999] opacity-0 transition-opacity" />,
        document.body
      )}
      <div ref={wrapperRef} className={`flex items-center justify-center transition-all duration-500 ease-in-out ${
        isFullscreen 
          ? 'fixed inset-0 z-[200] bg-[#040F16] p-4 md:p-12' 
          : 'h-[400px] lg:h-[600px] relative w-full mb-12 lg:mb-0'
      }`}>
        <div 
          ref={containerRef}
          className="w-full h-full glass-panel flex flex-col items-center justify-center border-dashed border-2 border-blue-400/20 rounded-xl overflow-hidden group/flux transition-transform duration-200 ease-out relative" 
        >
          <div className="technical-grid"></div>
          <div className="flux-glowing-focal"></div>
          <div 
            ref={parallaxRef}
            className="absolute inset-0 z-0 opacity-40 transition-transform duration-200 ease-out" 
          >
            <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair"></canvas>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Fullscreen Toggle */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(!isFullscreen);
            }}
            className="absolute bottom-4 right-4 z-[999] text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 p-3 md:p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            style={{ touchAction: 'manipulation' }}
          >
            <span className="material-symbols-outlined text-[24px] md:text-[20px]">
              {isFullscreen ? 'close_fullscreen' : 'fullscreen'}
            </span>
          </button>
          
          <div className="absolute bottom-12 w-full z-10 text-center pointer-events-none">
            <p className="font-grotesk text-[14px] text-blue-400 animate-pulse-slow">SYSTEM_FLUX_STABLE</p>
            <p className="text-zinc-400 text-[10px] font-grotesk mt-2 opacity-50 uppercase tracking-widest">FLUID_DATA_TRANSFER</p>
            <p className="text-zinc-500 text-[9px] font-grotesk mt-1 opacity-40">DATA_MODEL_FLIGHT_PATH</p>
          </div>
        </div>
      </div>
    </>
  )
}
