import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import { Users, Heart, BookOpen, HandHeart, Quote, Star } from 'lucide-react'

const Impact = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Individuals Served Annually' },
    { icon: Heart, value: '40+', label: 'Years of Continuous Service' },
    { icon: BookOpen, value: '200+', label: 'Students Trained in Science of Mind' },
    { icon: HandHeart, value: '$50K+', label: 'Annual Community Support' },
  ]

  const testimonials = [
    {
      name: 'Margaret Chen',
      role: 'Member since 2015',
      text: 'United Church of Religious Science transformed my life. The Science of Mind classes helped me overcome years of anxiety and discover a sense of peace I never knew was possible. The community here is genuinely loving and supportive.',
    },
    {
      name: 'David Rodriguez',
      role: 'Licensed Practitioner, 2019',
      text: 'I came to this church seeking answers and found a path to becoming a licensed practitioner. The training program is rigorous, compassionate, and deeply transformative. I am now able to serve others in ways I never imagined.',
    },
    {
      name: 'Sarah Thompson',
      role: 'Youth Program Parent',
      text: 'The youth program has been a blessing for our family. My children have learned values of compassion, self-esteem, and spiritual awareness that will serve them for a lifetime. The teachers are patient, creative, and deeply caring.',
    },
    {
      name: 'James Nakamura',
      role: 'Community Volunteer',
      text: 'Through the outreach programs, I have found purpose in serving others. The food drives, shelter support, and interfaith events have connected me with my community in meaningful ways. This church truly walks its talk.',
    },
  ]

  const partners = [
    'Ventura County Food Share',
    'Ojai Foundation',
    'Ventura Interfaith Council',
    'Science of Mind Archives Foundation',
    'Centers for Spiritual Living (CSL)',
    'Ventura County Community Foundation',
    'Local Homeless Shelter Network',
    'Ventura Unified School District',
  ]

  return (
    <>
      <Helmet>
        <title>Our Impact | United Church of Religious Science</title>
        <meta name="description" content="See the impact of United Church of Religious Science in Ventura, CA. 40+ years of service, 500+ lives transformed, $50K+ in annual community support. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/impact" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Our Impact</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Four decades of transforming lives and serving the Ventura community through the Science of Mind.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Impact at a Glance" subtitle="Measurable results from our programs and community service." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center border border-primary-100">
                <stat.icon className="w-10 h-10 text-primary-700 mx-auto mb-4" />
                <p className="text-4xl font-bold text-church-navy mb-2">{stat.value}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="Community Testimonials" subtitle="Hear from the people whose lives have been touched by our work." />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-sm">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-church-navy">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Our Partners" subtitle="We are proud to collaborate with these organizations to serve our community." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-church-gold" />
                  <span className="font-medium text-church-navy text-sm">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact
