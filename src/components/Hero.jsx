import { Link } from 'react-router-dom'
import { Shield, Users, BookOpen, Heart, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-church-navy via-primary-900 to-church-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-church-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-church-gold" />
            <span className="text-sm font-medium text-white">Registered 501(c)(3) Nonprofit | EIN: 77-0003763</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Transforming Lives Through the{' '}
            <span className="text-church-gold">Science of Mind</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            United Church of Religious Science is a spiritual community in Ventura, California, 
            dedicated to the practical application of Religious Science principles. 
            Since 1984, we have been helping individuals discover their inner power 
            and create lives of joy, health, and abundance.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/programs" className="btn-primary text-lg">
              Explore Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/donate" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-church-navy transition-colors duration-200 text-lg">
              Support Our Mission
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, value: '40+', label: 'Years of Service' },
              { icon: Heart, value: '500+', label: 'Lives Transformed' },
              { icon: BookOpen, value: '12+', label: 'Weekly Classes' },
              { icon: Shield, value: '501(c)(3)', label: 'Tax-Exempt Status' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-church-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
