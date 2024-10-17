import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { skills } from '@/app/constants'
export default function Skills() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl p-8 xl:px-0">
        <h1 className="font-bold text-4xl px-4" >Skills</h1>
        <HoverEffect items={skills} />
      </div>
    </section>
  )
}

