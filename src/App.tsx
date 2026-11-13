import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'

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
        {/* Hero arrives in Milestone 2 */}
        <Section id="projects" label="01 / Projects" title="Projects" />
        <Section id="experience" label="02 / Experience" title="Experience" />
        <Section id="skills" label="03 / Skills" title="Skills" />
        <Section id="about" label="04 / About" title="About" />
        <Section id="contact" label="05 / Contact" title="Contact" />
      </main>
      <Footer />
    </>
  )
}
