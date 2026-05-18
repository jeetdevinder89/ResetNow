import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as SiIcons from 'react-icons/si'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SERVICE_DB } from '../data/services'
import { getRecoverySteps } from '../data/recoverySteps'

export default function PlatformSeoPage() {
  const { id } = useParams()
  const site = SERVICE_DB.find((s) => s.id === id)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('passguard_darkmode') === 'true' || true
    } catch {
      return true
    }
  })

  const steps = useMemo(() => (site ? getRecoverySteps(site) : []), [site])

  useEffect(() => {
    localStorage.setItem('passguard_darkmode', isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (!site) return

    document.title = `${site.name} Password Reset Guide | PassGuard`

    const description = `Reset your ${site.name} password safely with step-by-step guidance and the official recovery link.`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    const oldSchema = document.getElementById('platform-howto-schema')
    if (oldSchema) oldSchema.remove()

    const schemaScript = document.createElement('script')
    schemaScript.id = 'platform-howto-schema'
    schemaScript.type = 'application/ld+json'
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: `How to reset ${site.name} password`,
      description,
      step: steps.map((step, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: step,
      })),
    })
    document.head.appendChild(schemaScript)

    return () => {
      const current = document.getElementById('platform-howto-schema')
      if (current) current.remove()
    }
  }, [site, steps])

  if (!site) {
    return (
      <>
        <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <main style={{ maxWidth: 900, margin: '50px auto', padding: 20 }}>
          <h1>Platform not found</h1>
          <p>This platform guide does not exist.</p>
          <Link to="/">Back to home</Link>
        </main>
        <Footer />
      </>
    )
  }

  const IconComponent = SiIcons[site.icon]
  const reportUrl = `mailto:?subject=Broken Link Report: ${encodeURIComponent(site.name)}&body=The password reset link for ${encodeURIComponent(site.name)} appears to be broken.%0A%0AURL: ${encodeURIComponent(site.pwUrl)}%0A%0APlease describe the issue:`

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main style={{ maxWidth: 900, margin: '34px auto 70px', padding: 20 }}>
        <Link to="/" style={{ color: 'var(--muted)' }}>Back to PassGuard</Link>

        <section style={{ marginTop: 18, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: site.color, display: 'grid', placeItems: 'center' }}>
              {IconComponent ? <IconComponent color="white" size={24} /> : site.name[0]}
            </div>
            <div>
              <h1 style={{ fontSize: '1.6rem' }}>{site.name} Password Reset Guide</h1>
              <p style={{ color: 'var(--muted)', marginTop: 3 }}>{site.category}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            <a href={site.pwUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--primary)', color: '#fff', padding: '10px 14px', borderRadius: 8, fontWeight: 700 }}>
              Open Official Reset Link
            </a>
            <a href={reportUrl} style={{ border: '1px solid var(--border)', color: 'var(--warning)', padding: '10px 14px', borderRadius: 8, fontWeight: 700 }}>
              Report Broken Link
            </a>
          </div>
        </section>

        <section style={{ marginTop: 18, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
          <h2 style={{ marginBottom: 10 }}>Recovery Steps</h2>
          <ol style={{ marginLeft: 20, display: 'grid', gap: 9, lineHeight: 1.5 }}>
            {steps.map((step, idx) => <li key={idx}>{step}</li>)}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}
