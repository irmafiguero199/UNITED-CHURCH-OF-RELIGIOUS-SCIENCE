import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Newsletter from '../components/Newsletter'
import { BookOpen, Heart, Users, Calendar, ArrowRight, MapPin, Shield } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>United Church of Religious Science | Ventura, CA</title>
        <meta name="description" content="United Church of Religious Science - A 501(c)(3) nonprofit spiritual community in Ventura, California. Transforming lives through the Science of Mind since 1984." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Mission" subtitle="" centered={false} />
              <p className="text-slate-600 leading-relaxed mb-6">
                The United Church of Religious Science is dedicated to the study and practice of the Science of Mind 
                philosophy as taught by Ernest Holmes. We provide a spiritual home where individuals can explore 
                their divine nature, develop their inner wisdom, and apply spiritual principles to create lives of 
                health, happiness, and prosperity.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Located in Ventura, California, our community welcomes all who seek a deeper understanding of 
                themselves and the universe. Through Sunday services, classes, meditation groups, and community 
                outreach, we support each person on their unique spiritual journey.
              </p>
              <Link to="/mission-vision" className="btn-primary">
                Read Our Full Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center gap-2 text-primary-700 font-medium mb-4">
                <Shield className="w-5 h-5" />
                <span>501(c)(3) Nonprofit Organization</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-church-navy mb-4">
                Federal Tax Information
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">EIN:</span>
                  <span>77-0003763</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">Status:</span>
                  <span>501(c)(3) Tax-Exempt since September 1984</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary-600" />
                  <span>2646 Palma Dr Ste 250, Ventura, CA 93003-7739</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold shrink-0">Email:</span>
                  <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">
                    admin@unitedchurchofreligiousscience.sbs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader 
            title="Our Programs" 
            subtitle="Discover the transformative programs and services we offer to support your spiritual growth and well-being."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Sunday Services',
                desc: 'Weekly inspirational services featuring meditation, music, and practical spiritual teachings based on the Science of Mind.',
              },
              {
                icon: Users,
                title: 'Classes & Workshops',
                desc: 'In-depth study of Science of Mind principles, including Foundations, Practitioner Training, and special topic workshops.',
              },
              {
                icon: Heart,
                title: 'Spiritual Support',
                desc: 'One-on-one spiritual counseling, prayer support, and pastoral care for members navigating life's challenges.',
              },
              {
                icon: Calendar,
                title: 'Community Events',
                desc: 'Retreats, social gatherings, holiday celebrations, and interfaith activities that build meaningful connections.',
              },
            ].map((program, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy mb-2">{program.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{program.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-church-navy py-16">
        <div className="container-custom px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '1984', label: 'Year Founded' },
              { value: '500+', label: 'Community Members Served' },
              { value: '12+', label: 'Weekly Programs' },
              { value: '$50K+', label: 'Annual Community Support' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-church-gold mb-2">{stat.value}</p>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-2xl p-8 lg:p-16 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Join Our Spiritual Community
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Whether you are new to Religious Science or a long-time practitioner, 
              we welcome you to explore, grow, and connect with us in Ventura, California.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary">
                Visit Us
              </Link>
              <Link to="/donate" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-900 transition-colors">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
