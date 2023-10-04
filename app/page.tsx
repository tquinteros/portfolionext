import Header from '@/src/components/Header/Header'
import Hero from '@/src/components/Hero/Hero'
import Projects from '@/src/components/Projects/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
        <Header /> 
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <div className='container mx-auto'>
        <div className='relative'>
          {/* <h1 className='text-4xl mb-2 text-center font-bold'>Hola</h1>
            <div className='flex gap-4'>
              <span className="block w-10 h-8 my-6 bg-custom-color1"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color2"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color3"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color4"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color5"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color6"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color7"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color8"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color9"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color10"></span>
              <span className="block w-10 h-8 my-6 bg-custom-color11"></span>
            </div> */}
        </div>
        <Projects />
      </div>
    </main>
  )
}
