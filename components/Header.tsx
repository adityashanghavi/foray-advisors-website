'use client'

const basePath = process.env.NODE_ENV === 'production' ? '/foray-advisors-website' : ''

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={`${basePath}/Logo.png`} alt="Foray Advisors" className="h-10 w-auto" />
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>
        <button className="md:hidden bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
          Menu
        </button>
      </nav>
    </header>
  )
}
