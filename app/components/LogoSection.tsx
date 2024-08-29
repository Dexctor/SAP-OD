import React from 'react'
import Image from 'next/image'

const logos = [
  { src: '/images/logos/arcelormittal.png', alt: 'ArcelorMittal', priority: true },
  { src: '/images/logos/sopra.png', alt: 'Sopra', priority: true },
  { src: '/images/logos/oxya.png', alt: 'Oxya' ,priority: true },
  { src: '/images/logos/lashuttle.png', alt: 'La Shuttle' ,priority: true},
  { src: '/images/logos/decathlon.png', alt: 'Decathlon' , priority: true },
]

export default function LogoSection() {
  return (
    <div className="py-32 sm:py-16 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[150px]">
              <div className="relative w-full h-0 pb-[35%]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}