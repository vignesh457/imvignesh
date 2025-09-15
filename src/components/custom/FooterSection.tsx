import React from 'react'

export default function FooterSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-16  backdrop-blur-md gap-4">
      <p className="text-neutral-800 font-bold md:text-3xl text-2xl flex items-center justify-center gap-2 tracking-wide animate-shiny-text">
        Built with <span className='opacity-80 scale-90 animate-pulse'>💙</span> by <a href='https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202' className='text-blue-500/50 hover:underline'>Vignesh</a>
      </p>
      <p className="text-xs text-neutral-600 p-4">
        © {new Date().getFullYear()} <a href='https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202' className='hover:underline'>Vignesh</a>. All rights reserved.
      </p>
    </div>
  )
}
