import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageAdsLayout from '../components/PageAdsLayout'
import styles from './InfoPage.module.css'

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('resetnow_darkmode') ?? localStorage.getItem('passguard_darkmode')
      return saved == null ? true : saved === 'true'
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.title = 'About ResetNow | Direct Password Reset Links for 48+ Platforms'
    const description = 'Learn about ResetNow - a free tool that provides direct password reset links for your favorite platforms.'
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

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      
      <PageAdsLayout>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>← Back to Home</Link>
          
          <div className={styles.content}>
            <h1>About ResetNow</h1>
        
        <section>
          <h2>Our Mission</h2>
          <p>
            ResetNow is dedicated to helping users quickly and securely reset their passwords across 48+ popular platforms. We understand that forgotten passwords can be frustrating, and navigating through complex login pages to find the password reset option is time-consuming.
          </p>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>
            ResetNow aggregates direct links to password reset pages for the most popular websites and applications. Our goal is to:
          </p>
          <ul>
            <li>Save you time by providing direct access to password reset pages</li>
            <li>Eliminate the need to navigate through login pages searching for the "Forgot Password" link</li>
            <li>Support a wide range of platforms across multiple categories (social media, finance, productivity, development, and more)</li>
            <li>Provide recovery guidance to help you regain access to your accounts</li>
            <li>Validate that password reset links are working correctly</li>
          </ul>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>48+ Platforms:</strong> Direct links to password reset pages for the most popular services</li>
            <li><strong>Link Validation:</strong> Check if password reset links are working before you click</li>
            <li><strong>Recovery Guidance:</strong> Step-by-step instructions tailored to each platform</li>
            <li><strong>Dark Mode:</strong> Comfortable viewing in any lighting condition</li>
            <li><strong>Favorites:</strong> Star your most frequently-used platforms for quick access</li>
            <li><strong>Copy to Clipboard:</strong> Quickly copy any password reset link</li>
            <li><strong>100% Free:</strong> No login required, no data collection, supported by ads</li>
          </ul>
        </section>

        <section>
          <h2>Privacy & Security</h2>
          <p>
            At ResetNow, your privacy is our priority:
          </p>
          <ul>
            <li>We do not store any of your personal information</li>
            <li>No login or registration is required</li>
            <li>No behavioural tracking or analytics cookies</li>
            <li>No analytics or user tracking</li>
            <li>All operations are performed locally in your browser</li>
            <li>The source code is open for transparency</li>
          </ul>
        </section>

        <section>
          <h2>Why We Built This</h2>
          <p>
            We noticed that many users struggle to find the password reset page when they're locked out of their accounts. Most platforms don't make it obvious where to find this feature. ResetNow solves this by curating and maintaining a list of verified, direct links to password reset pages across popular platforms.
          </p>
        </section>

        <section>
          <h2>Supported Categories</h2>
          <p>
            ResetNow supports platforms across 13+ categories including:
          </p>
          <ul>
            <li>Social Media</li>
            <li>Finance & Banking</li>
            <li>Productivity & Collaboration</li>
            <li>Development & Technical</li>
            <li>Cloud Storage & Backup</li>
            <li>Entertainment & Streaming</li>
            <li>E-commerce & Shopping</li>
            <li>Email Services</li>
            <li>Gaming & Streaming</li>
            <li>Food Delivery</li>
            <li>Travel & Accommodation</li>
            <li>Health & Fitness</li>
            <li>Blogging & Content</li>
            <li>And more...</li>
          </ul>
        </section>

        <section>
          <h2>Contact & Support</h2>
          <p>
            Have a question or found a broken link? Visit our <Link to="/contact">Contact page</Link> to get in touch, or check our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link>.
          </p>
        </section>
          </div>
        </div>
      </PageAdsLayout>

    <Footer />
    </>
  )
}
