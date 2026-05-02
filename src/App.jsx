import Navbar              from './components/layout/Navbar'
import Footer              from './components/layout/Footer'
import Hero                from './components/sections/Hero'
import ExperienceTimeline  from './components/sections/ExperienceTimeline'
import TechStack           from './components/sections/TechStack'
import ProjectBento        from './components/sections/ProjectBento'
import Certifications      from './components/sections/Certifications'

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col font-inter overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ExperienceTimeline />
        <TechStack />
        <ProjectBento />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}
