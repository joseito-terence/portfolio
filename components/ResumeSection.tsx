import React from 'react'
import { Cover } from './ui/cover'

export default function ResumeSection() {
  return (
    <section className="bg-primary/80">
      <div className='flex flex-col md:flex-row md:items-center px-8 py-4 max-w-screen-xl mx-auto'>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl text-center md:text-left relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Building amazing software <br /> at <Cover>warp speed</Cover>
        </h1>

        <div className='flex-1 flex justify-center items-center'>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
