import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './features/hero/Hero'
import Skills from './features/skills/Skills'
import Projects from './features/projects/Projects'
import './App.css'

function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
