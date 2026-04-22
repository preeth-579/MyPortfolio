import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          PREETH. D
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar__menu-toggle ${menuOpen ? 'navbar__menu-toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          id="menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
