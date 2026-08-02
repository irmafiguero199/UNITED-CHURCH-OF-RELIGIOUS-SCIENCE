import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Shield, Heart, Facebook, Instagram, ExternalLink } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-church-navy text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight">United Church of</h3>
                <p className="text-church-gold text-sm leading-tight">Religious Science</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              A 501(c)(3) nonprofit spiritual community in Ventura, California, 
              practicing the Science of Mind philosophy since 1984.
            </p>
            <div className="flex items-center gap-2 text-church-gold text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>EIN: 77-0003763</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-church-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/mission-vision", label: "Mission & Vision" },
                { to: "/programs", label: "Our Programs" },
                { to: "/impact", label: "Our Impact" },
                { to: "/team", label: "Leadership Team" },
                { to: "/registration-information", label: "Registration Info" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-church-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-church-gold mt-0.5 shrink-0" />
                <span>
                  2646 Palma Dr Ste 250<br />
                  Ventura, CA 93003-7739<br />
                  United States
                </span>
              </li>
              <li>
                <a href="tel:+18055550142" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-church-gold" />
                  <span>(805) 555-0142</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-church-gold" />
                  <span>admin@unitedchurchofreligiousscience.sbs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-church-gold">Legal & Connect</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Make a Donation
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/unitedchurchofreligiousscience" target="_blank" rel="noopener noreferrer" 
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/ucrsventura" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-church-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-400" />
            <span>United Church of Religious Science. All rights reserved.</span>
          </p>
          <p className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-church-gold" />
            <span>Registered 501(c)(3) Nonprofit | EIN: 77-0003763 | Ventura, CA 93003-7739</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
