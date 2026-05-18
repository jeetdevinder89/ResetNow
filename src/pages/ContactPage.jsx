import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './InfoPage.module.css'

export default function ContactPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('passguard_darkmode') === 'true' || true
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.title = 'Contact PassGuard | Get in Touch'
    const description = 'Contact PassGuard to report broken links, suggest new platforms, or ask questions about our service.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [])

  useEffect(() => {
    localStorage.setItem('passguard_darkmode', isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        
        <div className={styles.content}>
          <h1>Contact Us</h1>
          
          <section>
            <h2>Get in Touch</h2>
            <p>
              Have a question about PassGuard? Found a broken password reset link? Or would you like to suggest a new platform we should add? We'd love to hear from you!
            </p>
          </section>

          <section>
            <h2>Ways to Reach Us</h2>
            
            <h3>Report a Broken Link</h3>
            <p>
              If you find that a password reset link is not working, you can report it directly from any platform card by clicking the <strong>"⚠ Broken link?"</strong> button. This will open your email client with a pre-filled form containing the platform details and link.
            </p>

            <h3>Email Support</h3>
            <p>
              You can also reach us directly via email:
            </p>
            <p>
              <a href="mailto:support@passguard.dev" className={styles.emailLink}>support@passguard.dev</a>
            </p>
            <p>
              When emailing, please include:
            </p>
            <ul>
              <li>The name of the platform</li>
              <li>The URL that is broken (if applicable)</li>
              <li>A description of the issue</li>
              <li>Any relevant screenshots</li>
            </ul>

            <h3>Suggest a New Platform</h3>
            <p>
              If you'd like us to add support for a platform that's not currently listed, please email us with:
            </p>
            <ul>
              <li>The name of the platform</li>
              <li>The direct URL to their password reset page</li>
              <li>The category it should be listed under</li>
              <li>Why you think it's important to include</li>
            </ul>

            <h3>General Inquiries</h3>
            <p>
              For other questions, feedback, or business inquiries, feel free to email us at the address above.
            </p>
          </section>

          <section>
            <h2>Response Time</h2>
            <p>
              We aim to respond to all inquiries within 24-48 hours. Please note that PassGuard is maintained by a small team of volunteers, so there may be times when responses take a bit longer.
            </p>
          </section>

          <section>
            <h2>Social Media</h2>
            <p>
              While PassGuard primarily communicates via email, you can also follow our updates on GitHub for the latest development news and feature releases.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              We will never share your email address or contact information with third parties. Your data is only used to respond to your inquiry. Please see our <Link to="/privacy-policy">Privacy Policy</Link> for more details.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}
