import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function AppCard() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border bg-slate-800 border-white p-5 md:p-5">
        <h2 className='text-xl text-white font-bold'>Wavehand App</h2>
        <div className="relative flex items-center justify-center">
            {/* A square image */}
            <Image
                src="/g1-wavehand.jpg"
                width={500}
                height={300}
                alt="App"
                style={{ objectFit: "cover", aspectRatio: "1/1" }}
                className="rounded-lg"
            />
            <p className="absolute bottom-0 right-2 text-white text-[10px]">
                Photo by Unitree. https://www.unitree.com/g1
            </p>
        </div>
        
        
        <Button variant={"outline"}>Download</Button>
    </div>
  )
}

export default AppCard