import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Mail, MapPin, Shield } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/mission-vision", label: "Mission & Vision" },
    { to: "/programs", label: "Programs" },
    { to: "/impact", label: "Impact" },
    { to: "/team", label: "Team" },
    { to: "/news", label: "News" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-church-navy text-white text-xs sm:text-sm">
        <div className="container-custom px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-church-gold" />
              <span className="font-medium">EIN: 77-0003763</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3 text-church-gold" />
              <span>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="flex items-center gap-1 hover:text-church-gold transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">admin@unitedchurchofreligiousscience.sbs</span>
            </a>
            <a href="tel:+18055550142" className="flex items-center gap-1 hover:text-church-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden md:inline">(805) 555-0142</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="container-custom px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="United Church of Religious Science Logo" className="h-10 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-serif font-bold text-church-navy leading-tight">United Church of</h1>
                <p className="text-sm font-serif text-primary-700 leading-tight">Religious Science</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-700 hover:text-primary-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/donate" className="ml-2 btn-secondary text-sm">
                Donate
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="container-custom px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.to
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/donate" className="block btn-secondary text-center mt-4">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
