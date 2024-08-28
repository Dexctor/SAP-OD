import React from 'react'
import Image from 'next/image'

const logos = [
  { src: '/images/logos/arcelormittal.png', alt: 'ArcelorMittal' },
  { src: '/images/logos/sopra.png', alt: 'Sopra' },
  { src: '/images/logos/oxya.png', alt: 'Oxya' },
  { src: '/images/logos/lashuttle.png', alt: 'La Shuttle' },
  { src: '/images/logos/decathlon.png', alt: 'Decathlon' },
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
                  layout="fill"
                  objectFit="contain"
                  className=" transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}