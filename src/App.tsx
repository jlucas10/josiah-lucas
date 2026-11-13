import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import FeaturedProject from './components/FeaturedProject'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Section from './components/Section'
import { Analytics } from '@vercel/analytics/react'
import { projects } from './data'

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        <div id="top" />
        <Hero />
        <Section id="projects" label="01 / Projects" title="Projects">
          {featured && <FeaturedProject project={featured} />}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Section>
        <Section id="experience" label="02 / Experience" title="Experience">
          <Experience />
        </Section>
        <Section id="skills" label="03 / Skills" title="Skills">
          <Skills />
        </Section>
        <Section id="about" label="04 / About" title="About">
          <About />
        </Section>
        <Section id="contact" label="05 / Contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
