import { useEffect, useRef } from 'react'

// Slowly drifting, twinkling dots behind a section. Pauses when off-screen
// and stays static when the visitor prefers reduced motion.
export default function DotsBackground({ density = 14000 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dots = [], w = 0, h = 0, raf = 0, visible = true

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = parent.clientWidth; h = parent.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(80, Math.round((w * h) / density))
      dots = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.4 + 0.6,
        vx: (Math.random() - 0.5) * 0.15, vy: -(Math.random() * 0.2 + 0.05),
        phase: Math.random() * Math.PI * 2,
        lime: i % 6 === 0,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        if (!reduce) {
          d.x += d.vx; d.y += d.vy
          if (d.y < -4) d.y = h + 4
          if (d.x < -4) d.x = w + 4
          if (d.x > w + 4) d.x = -4
        }
        const alpha = 0.25 + 0.3 * (0.5 + 0.5 * Math.sin(t / 1200 + d.phase))
        ctx.fillStyle = d.lime ? `rgba(201,243,29,${alpha})` : `rgba(255,255,255,${alpha})`
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill()
      }
    }

    const loop = (t) => { if (visible) draw(t); raf = requestAnimationFrame(loop) }

    build()
    if (reduce) draw(0); else raf = requestAnimationFrame(loop)

    const ro = new ResizeObserver(() => { build(); if (reduce) draw(0) })
    ro.observe(parent)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(parent)

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect() }
  }, [density])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />
}
