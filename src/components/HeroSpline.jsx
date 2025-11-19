import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Cyber Astral Experience</h1>
        <p className="mt-4 text-blue-200/90 max-w-2xl mx-auto">A dark, futuristic animation with a 3D browser window and a retro astronaut interacting with an iridescent ribbon.</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
    </section>
  )
}
