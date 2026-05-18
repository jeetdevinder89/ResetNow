import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './InfoPage.module.css'

export default function TermsPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('resetnow_darkmode') === 'true' || true
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.title = 'Terms of Service | ResetNow'
    const description = 'ResetNow Terms of Service - Read our terms and conditions for using ResetNow.'
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
      
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>← Back to Home</Link>
        
        <div className={styles.content}>
          <h1>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: May 2026</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using ResetNow (the "Service"), you accept and agree to be bound by the terms, conditions, and notices contained herein. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            ResetNow grants you a limited, non-exclusive, non-transferable license to use the Service for private, personal, and non-commercial purposes. You may not:
          </p>
          <ul>
            <li>Modify or copy the materials (including HTML and publishing format)</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            <li>Use the Service in any way that infringes upon the rights of others or restricts their use and enjoyment of the Service</li>
          </ul>
        </section>

        <section>
          <h2>3. Disclaimer of Warranties</h2>
          <p>
            The materials on ResetNow are provided on an 'as is' basis. ResetNow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2>4. Password Reset Links</h2>
          
          <h3>4.1 Accuracy of Information</h3>
          <p>
            ResetNow provides links to password reset pages for various platforms. While we strive to maintain accurate and up-to-date information, we cannot guarantee that all links are correct or functional at all times. Platforms may change their URLs or functionality without notice.
          </p>

          <h3>4.2 Use At Your Own Risk</h3>
          <p>
            When you click a password reset link, you are leaving ResetNow and visiting a third-party website. We are not responsible for:
          </p>
          <ul>
            <li>The content, accuracy, or functionality of third-party websites</li>
            <li>Technical issues or errors on those websites</li>
            <li>Data breaches or security issues on third-party platforms</li>
            <li>Changes made by third-party platforms to their websites</li>
          </ul>

          <h3>4.3 Third-Party Websites</h3>
          <p>
            ResetNow is not affiliated with, endorsed by, or responsible for any third-party websites. Each platform's website is governed by its own terms of service and privacy policy. We recommend reviewing those policies before resetting your password.
          </p>
        </section>

        <section>
          <h2>5. Account Security</h2>
          <p>
            It is your responsibility to:
          </p>
          <ul>
            <li>Keep your account credentials secure</li>
            <li>Use strong, unique passwords for each account</li>
            <li>Enable two-factor authentication where available</li>
            <li>Never share your passwords with others</li>
            <li>Verify that you are on the legitimate website before entering credentials</li>
          </ul>
          <p>
            ResetNow is not responsible for unauthorized access to your accounts or accounts on third-party platforms.
          </p>
        </section>

        <section>
          <h2>6. Limitations of Liability</h2>
          <p>
            In no event shall ResetNow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ResetNow, even if ResetNow or a ResetNow authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2>7. Accuracy of Materials</h2>
          <p>
            The materials appearing on ResetNow could include technical, typographical, or photographic errors. ResetNow does not warrant that any of the materials on the Service are accurate, complete, or current. ResetNow may make changes to the materials contained on the Service at any time without notice.
          </p>
        </section>

        <section>
          <h2>8. Materials and Content</h2>
          <p>
            ResetNow has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ResetNow of the site. Use of any such linked web site is at the user's own risk.
          </p>
        </section>

        <section>
          <h2>9. Modifications</h2>
          <p>
            ResetNow may revise these terms of service for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which ResetNow operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2>11. Prohibited Activities</h2>
          <p>
            You agree not to use ResetNow for any unlawful purposes or in any way that could damage, disable, or impair the Service. Prohibited activities include:
          </p>
          <ul>
            <li>Attempting to gain unauthorized access to the Service</li>
            <li>Harassing, abusing, or threatening other users</li>
            <li>Reverse engineering or attempting to discover the source code</li>
            <li>Scraping or automated access to the Service</li>
            <li>Using the Service for phishing or fraud</li>
            <li>Any activity that violates applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2>12. Termination</h2>
          <p>
            ResetNow may terminate your access to the Service at any time, without notice, for violations of these Terms of Service or for any other reason at its sole discretion.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <a href="mailto:support@ResetNow.dev" className={styles.emailLink}>support@ResetNow.dev</a>
          </p>
          <p>
            Or visit our <Link to="/contact">Contact page</Link>.
          </p>
        </section>
      </div>
    </div>

    <Footer />
    </>
  )
}
