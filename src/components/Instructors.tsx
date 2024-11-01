'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Arijit Singh',
      designation: 'Singer',
      image:
        'https://cdn.siasat.com/wp-content/uploads/2023/10/arijit-singh.jpg',
    },
    {
      id: 2,
      name: 'diljit dosanjh',
      designation: 'Punjabi Singer',
      image:
        'https://th.bing.com/th/id/OIP.OkxMToQ95MBhTXQoRRXR-QHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 3,
      name: 'Talha Anjum',
      designation: 'Rappper',
      image:
        'https://images.genius.com/ff598810a64e130c7c4e9156477db663.485x485x1.jpg',
    },
    {
      id: 4,
      name: 'AR Rehman',
      designation: 'Music Expert',
      image:
        'https://th.bing.com/th/id/OIP.3PLKwnO2sZwcEHvdrEvtzgHaEK?rs=1&pid=ImgDetMain',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors