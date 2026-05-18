import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, isDarkMode, onToggleDarkMode }) {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {children}
      <Footer />
    </>
  )
}
