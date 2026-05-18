import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './InfoPage.module.css'

export default function PrivacyPolicyPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('resetnow_darkmode') ?? localStorage.getItem('passguard_darkmode')
      return saved == null ? true : saved === 'true'
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.title = 'Privacy Policy | ResetNow'
    const description = 'ResetNow Privacy Policy - Learn how we protect your data and respect your privacy.'
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
          <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: May 2026</p>
        
        <section>
          <h2>Introduction</h2>
          <p>
            ResetNow ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains our practices regarding data collection, use, and disclosure when you use our website (the "Service").
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          
          <h3>1.1 Information We Do Not Collect</h3>
          <p>
            ResetNow is designed with privacy as a core principle. We do NOT collect, store, or process:
          </p>
          <ul>
            <li>Personal information (names, email addresses, phone numbers)</li>
            <li>Account credentials or passwords</li>
            <li>Browsing history or user activity data</li>
            <li>Device information or IP addresses</li>
            <li>Geolocation data</li>
            <li>Cookies for tracking or analytics</li>
          </ul>

          <h3>1.2 Information Stored Locally</h3>
          <p>
            The only data we store is on your device's local storage:
          </p>
          <ul>
            <li><strong>Favorites:</strong> Your starred platforms (stored locally in your browser)</li>
            <li><strong>Theme Preference:</strong> Your dark/light mode selection</li>
            <li><strong>Link Validation Cache:</strong> Results of link checks performed during your session</li>
          </ul>
          <p>
            This data is stored only on your device and is never sent to our servers.
          </p>

          <h3>1.3 Information From Contact Forms</h3>
          <p>
            If you contact us via email to report a broken link or ask a question, we will receive:
          </p>
          <ul>
            <li>Your email address</li>
            <li>The content of your message</li>
            <li>Any attachments you include</li>
          </ul>
          <p>
            This information is used only to respond to your inquiry and is not shared with third parties.
          </p>
        </section>

        <section>
          <h2>2. How We Use Information</h2>
          <p>
            We use information only for the following purposes:
          </p>
          <ul>
            <li>To respond to your inquiries and support requests</li>
            <li>To improve and maintain our Service</li>
            <li>To fix bugs and technical issues</li>
            <li>To verify that password reset links are working correctly</li>
          </ul>
        </section>

        <section>
          <h2>3. Third-Party Services</h2>
          
          <h3>3.1 External Links</h3>
          <p>
            ResetNow provides links to third-party password reset pages. When you click these links, you are subject to those platforms' privacy policies. We are not responsible for their data practices.
          </p>

          <h3>3.2 No Third-Party Analytics</h3>
          <p>
            ResetNow does not use Google Analytics, Mixpanel, or any other analytics services. We do not track your behavior or usage patterns.
          </p>

          <h3>3.3 No Advertising</h3>
          <p>
            ResetNow is advertisement-free. We do not sell data to advertisers or use your information for targeted advertising.
          </p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            Your privacy and security are important to us:
          </p>
          <ul>
            <li>We use HTTPS encryption for all data in transit</li>
            <li>Most data is processed locally on your device</li>
            <li>We do not store sensitive user information on our servers</li>
            <li>Our source code is open for security audits</li>
          </ul>
          <p>
            While we implement industry-standard security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            You have rights regarding your data:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> Request what data we hold about you</li>
            <li><strong>Right to Delete:</strong> Request deletion of your data (available in your browser's local storage settings)</li>
            <li><strong>Right to Opt-Out:</strong> You can clear your browser's local storage at any time</li>
          </ul>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>
            ResetNow does not knowingly collect information from children under 13 years of age. If we become aware that we have collected data from a child under 13, we will delete it immediately.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date above.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            <a href="mailto:support@resetnow.dev" className={styles.emailLink}>support@resetnow.dev</a>
          </p>
        </section>

        <section>
          <h2>9. Legal Basis</h2>
          <p>
            Under GDPR, CCPA, and other privacy regulations, we process data based on:
          </p>
          <ul>
            <li><strong>Legitimate Interest:</strong> Maintaining our service and responding to inquiries</li>
            <li><strong>Consent:</strong> When you contact us, you consent to us processing your email</li>
          </ul>
        </section>
      </div>
    </div>

    <Footer />
    </>
  )
}
