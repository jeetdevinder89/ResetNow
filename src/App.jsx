import { useState, useMemo, useEffect } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import StatsRow from './components/StatsRow'
import ResultsGrid from './components/ResultsGrid'
import PlatformDrawer from './components/PlatformDrawer'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import AdSlot from './components/AdSlot'
import { SERVICE_DB, CATEGORIES } from './data/services'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [linkStatuses, setLinkStatuses] = useState({})
  const [validatingAll, setValidatingAll] = useState(false)
  const [selectedSite, setSelectedSite] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('resetnow_favorites') ?? localStorage.getItem('passguard_favorites')
      return JSON.parse(saved || '[]')
    } catch {
      return []
    }
  })
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('resetnow_darkmode') ?? localStorage.getItem('passguard_darkmode')
      return saved == null ? true : saved === 'true'
    } catch {
      return true
    }
  })

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return SERVICE_DB.filter(s => {
      const matchCat = activeCategory === 'All' || s.category === activeCategory
      const matchQ   = !q || s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [query, activeCategory])

  useEffect(() => {
    document.title = 'ResetNow — Change Your Password on Any Website Instantly'
    const description = 'Direct password reset links for 48+ popular websites with recovery guidance and link validation.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [])

  useEffect(() => {
    localStorage.setItem('resetnow_darkmode', isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  function handleCategory(cat) {
    setActiveCategory(cat)
  }

  function toggleFavorite(siteId) {
    setFavorites((prev) => {
      const updated = prev.includes(siteId)
        ? prev.filter(id => id !== siteId)
        : [...prev, siteId]
      localStorage.setItem('resetnow_favorites', JSON.stringify(updated))
      return updated
    })
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  async function validateSite(site) {
    setLinkStatuses((prev) => ({ ...prev, [site.id]: 'checking' }))

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 9000)

    try {
      await fetch(site.pwUrl, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store',
        signal: controller.signal,
      })
      setLinkStatuses((prev) => ({ ...prev, [site.id]: 'ok' }))
    } catch {
      setLinkStatuses((prev) => ({ ...prev, [site.id]: 'issue' }))
    } finally {
      clearTimeout(timeoutId)
    }
  }

  async function validateAllVisible() {
    setValidatingAll(true)
    for (const site of filtered) {
      // Sequential checks avoid browser burst throttling across many domains.
      // eslint-disable-next-line no-await-in-loop
      await validateSite(site)
    }
    setValidatingAll(false)
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <SearchBar
        query={query}
        onQuery={setQuery}
        total={SERVICE_DB.length}
        filtered={filtered.length}
      />
      <StatsRow
        total={SERVICE_DB.length}
        categories={CATEGORIES.length - 1}
      />
      {/* Ad slot — below hero, above grid */}
      <div style={{ maxWidth: 1020, margin: '0 auto 8px', padding: '0 24px' }}>
        <AdSlot slot="1234567890" format="horizontal" label="Top Banner Ad" style={{ minHeight: 90 }} />
      </div>
      <ResultsGrid
        sites={filtered}
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategory={handleCategory}
        onValidateAll={validateAllVisible}
        validatingAll={validatingAll}
        linkStatuses={linkStatuses}
        onValidateSite={validateSite}
        onOpenDetails={setSelectedSite}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      {/* Ad slot — above footer */}
      <div style={{ maxWidth: 1020, margin: '0 auto 40px', padding: '0 24px' }}>
        <AdSlot slot="0987654321" format="horizontal" label="Bottom Banner Ad" style={{ minHeight: 90 }} />
      </div>
      <PlatformDrawer
        site={selectedSite}
        status={selectedSite ? linkStatuses[selectedSite.id] : null}
        onValidate={validateSite}
        onClose={() => setSelectedSite(null)}
      />
      <Footer />
      <CookieBanner />
    </>
  )
}


