import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import GlobalStyles from './components/GlobalStyles'
import Hero from './components/Hero'
import Library from './components/Library'
import Ministries from './components/Ministries'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.backgroundColor = dark ? '#000' : '#fff'
  }, [dark])

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <GlobalStyles />
      <Navbar dark={dark} onToggleTheme={() => setDark((v) => !v)} />

      {/* Dynamic Hero, white background per request */}
      <Hero />

      {/* Library with glassmorphism and light switch */}
      <Library />

      {/* Ministries grid */}
      <Ministries />

      {/* Music player in its own section */}
      <MusicPlayer
        tracks={[
          { src: '', title: 'Sample Hymn', artist: 'EOTC Choir' },
        ]}
      />

      <footer className="py-12 text-center text-sm text-black/60 dark:text-white/60">
        በክብር፣ በቅንነት እና በስምምነት የተሰራ ገጽ — Glory to God.
      </footer>
    </div>
  )
}

export default App
