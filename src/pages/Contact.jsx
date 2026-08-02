import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | United Church of Religious Science</title>
        <meta name="description" content="Contact United Church of Religious Science in Ventura, CA. Address: 2646 Palma Dr Ste 250, Ventura, CA 93003-7739. Email: admin@unitedchurchofreligiousscience.sbs. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/contact" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We would love to hear from you. Reach out to United Church of Religious Science in Ventura, California.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeader title="Get in Touch" subtitle="" centered={false} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-church-navy">Physical Address</h3>
                    <p className="text-slate-600">
                      United Church of Religious Science<br />
                      2646 Palma Dr Ste 250<br />
                      Ventura, CA 93003-7739<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-church-navy">Phone</h3>
                    <a href="tel:+18055550142" className="text-slate-600 hover:text-primary-700 transition-colors">
                      (805) 555-0142
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-church-navy">Email</h3>
                    <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-slate-600 hover:text-primary-700 transition-colors">
                      admin@unitedchurchofreligiousscience.sbs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-church-navy">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: 9:00 AM - 1:00 PM (Service Day)
                    </p>
                  </div>
                </div>
              </div>

              {/* Nonprofit Info Box */}
              <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-church-gold" />
                  <h4 className="font-serif font-bold text-church-navy">Nonprofit Information</h4>
                </div>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><strong>Legal Name:</strong> United Church of Religious Science</p>
                  <p><strong>EIN:</strong> 77-0003763</p>
                  <p><strong>Status:</strong> 501(c)(3) Tax-Exempt Nonprofit</p>
                  <p><strong>Founded:</strong> 1984</p>
                  <p><strong>State:</strong> California</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100">
                <h3 className="font-serif font-bold text-2xl text-church-navy mb-2">Send Us a Message</h3>
                <p className="text-slate-500 text-sm mb-6">Fill out the form below and we will respond within 48 hours.</p>

                {submitted ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 rounded-lg py-8 px-6">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Thank you! Your message has been sent. We will be in touch soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white">
                        <option value="">Select a subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="programs">Programs & Classes</option>
                        <option value="counseling">Spiritual Counseling</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="membership">Membership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
