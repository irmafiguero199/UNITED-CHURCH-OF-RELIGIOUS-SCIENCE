import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, Search, Shield } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | United Church of Religious Science</title>
        <meta name="description" content="The page you are looking for does not exist. United Church of Religious Science, Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/404" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center bg-slate-50">
        <div className="container-custom px-4 text-center">
          <div className="max-w-lg mx-auto">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-6" />
            <h1 className="text-6xl font-bold text-church-navy mb-4">404</h1>
            <h2 className="text-2xl font-serif font-bold text-slate-700 mb-4">Page Not Found</h2>
            <p className="text-slate-500 mb-8">
              The page you are looking for does not exist or has been moved. 
              Please check the URL or navigate back to our homepage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-church-gold" />
                <span>United Church of Religious Science | EIN: 77-0003763 | Ventura, CA 93003-7739</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
