// import CvButton from '@/src/components/Cv/Cv'
import Chat from '@/src/components/Chat/Chat'
import ChatFloat from '@/src/components/ChatFloat/ChatFloat'
import Contact from '@/src/components/Contact/Contact'
import Header from '@/src/components/Header/Header'
import Hero from '@/src/components/Hero/Hero'
import Projects from '@/src/components/Projects/Projects'
import TechCarousel from '@/src/components/TechCarousel/TechCarousel'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <TechCarousel />
      {/* <Chat /> */}
      <div className='container mx-auto'>
        <Projects />
      </div>
      <div className='container mx-auto'> 
        <Contact />
      </div>
      <ChatFloat />
      {/* <CvButton /> */}
      <ToastContainer />
    </main>
  )
}
