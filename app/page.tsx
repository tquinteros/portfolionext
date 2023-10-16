import CvButton from '@/src/components/Cv/Cv'
import Header from '@/src/components/Header/Header'
import Hero from '@/src/components/Hero/Hero'
import Projects from '@/src/components/Projects/Projects'
import Tabs from '@/src/components/Tabs/Tabs'
import TechCarousel from '@/src/components/TechCarousel/TechCarousel'
import Image from 'next/image'


export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <div className='container mx-auto'>
        <Projects />
      </div>
      <TechCarousel />
      <div className='container mx-auto'>
        <Tabs />
      </div>
      {/* <CvButton /> */}
    </main>
  )
}
