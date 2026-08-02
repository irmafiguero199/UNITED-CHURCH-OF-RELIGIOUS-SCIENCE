import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import { BookOpen, Heart, Users, Calendar, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Sunday Services',
      shortDesc: 'Weekly inspirational worship services featuring meditation, music, and practical spiritual teachings.',
      fullDesc: 'Our Sunday services are the heart of our spiritual community. Each week, we gather to celebrate life, practice meditation, enjoy uplifting music, and receive practical spiritual teachings based on the Science of Mind philosophy. Services include a guided meditation, inspirational message, musical offerings, and time for community connection. Whether you are new to Religious Science or a long-time practitioner, you will find our services welcoming, inspiring, and transformative.',
      schedule: 'Every Sunday at 10:00 AM',
      location: '2646 Palma Dr Ste 250, Ventura, CA',
      eligibility: 'Open to all. No prior experience or membership required.',
    },
    {
      icon: Users,
      title: 'Science of Mind Classes',
      shortDesc: 'Structured courses exploring the principles of Religious Science, from foundations to advanced study.',
      fullDesc: 'Our Science of Mind classes provide a comprehensive education in the principles and practices of Religious Science. The curriculum includes Foundations of Science of Mind, Practitioner Training, and advanced courses in spiritual mind treatment, prosperity consciousness, and healing. Classes are taught by licensed Religious Science practitioners and ministers who bring years of experience and deep understanding to their teaching. Students receive certificates upon completion and may pursue practitioner licensure through our training program.',
      schedule: 'Tuesday & Thursday evenings, 6:30 PM - 8:30 PM',
      location: 'In-person at our Ventura center and online via Zoom',
      eligibility: 'Open to all. Foundations class has no prerequisites. Advanced classes require prior completion of prerequisites.',
    },
    {
      icon: Heart,
      title: 'Spiritual Counseling & Prayer Support',
      shortDesc: 'One-on-one spiritual counseling and affirmative prayer support for life challenges and transitions.',
      fullDesc: 'Our licensed Spiritual Practitioners offer one-on-one spiritual counseling and affirmative prayer support to individuals facing life challenges, transitions, or seeking deeper spiritual understanding. Spiritual Mind Treatment (affirmative prayer) is a powerful practice that helps individuals shift their consciousness and align with the good they seek. Sessions are confidential, compassionate, and grounded in the Science of Mind principles. We also offer a 24/7 prayer line for urgent spiritual support needs.',
      schedule: 'By appointment, Monday through Saturday',
      location: 'In-person or virtual sessions available',
      eligibility: 'Available to all. Sliding scale fees offered for those with financial need.',
    },
    {
      icon: Calendar,
      title: 'Meditation & Mindfulness Groups',
      shortDesc: 'Guided meditation sessions and mindfulness practices for inner peace and spiritual growth.',
      fullDesc: 'Our meditation and mindfulness groups offer a supportive environment for developing a consistent meditation practice. Sessions include guided meditation, silent sitting, breathwork, and discussions on mindfulness techniques. We offer both beginner-friendly sessions and advanced practices for experienced meditators. Special themed groups include Prosperity Meditation, Healing Meditation, and Gratitude Circles. These groups are designed to help participants quiet the mind, connect with their inner wisdom, and experience the peace that passes understanding.',
      schedule: 'Wednesday mornings 7:00 AM, Friday evenings 6:00 PM',
      location: '2646 Palma Dr Ste 250, Ventura, CA',
      eligibility: 'Open to all levels of experience. Free for members; $10 suggested donation for non-members.',
    },
    {
      icon: Users,
      title: 'Youth & Family Programs',
      shortDesc: 'Spiritual education and activities for children, teens, and families.',
      fullDesc: 'Our Youth and Family Programs provide age-appropriate spiritual education for children and teens, helping them develop a strong foundation of spiritual values, self-esteem, and compassion. Sunday School classes use creative activities, stories, and discussions to teach Science of Mind principles in ways that resonate with young minds. Teen groups focus on relevant topics such as self-identity, relationships, and purpose. We also host family events, holiday celebrations, and parent support groups throughout the year.',
      schedule: 'Sunday School during Sunday Service; Teen Group meets 2nd & 4th Saturday at 2:00 PM',
      location: '2646 Palma Dr Ste 250, Ventura, CA',
      eligibility: 'Children ages 3-17. Open to all families in the community.',
    },
    {
      icon: Heart,
      title: 'Community Outreach & Service',
      shortDesc: 'Programs that extend our spiritual principles into action through service to the Ventura community.',
      fullDesc: 'Our Community Outreach programs put our spiritual principles into action by serving those in need throughout Ventura County. Initiatives include a monthly community food drive, partnerships with local homeless shelters, environmental stewardship projects, and interfaith dialogue events. We believe that spiritual practice must be expressed through service, and we are committed to being a force for good in our community. Volunteers are always welcome, and we provide training and support for all outreach activities.',
      schedule: 'Various events throughout the month. Check our calendar for details.',
      location: 'Various locations throughout Ventura County',
      eligibility: 'Open to all who wish to serve. No religious affiliation required.',
    },
  ]

  const upcomingEvents = [
    { date: 'August 10, 2026', title: 'Summer Spiritual Retreat', location: 'Ojai Valley, CA', time: '9:00 AM - 4:00 PM' },
    { date: 'August 17, 2026', title: 'Foundations of Science of Mind - New Class Begins', location: 'Ventura Center & Online', time: '6:30 PM - 8:30 PM' },
    { date: 'August 24, 2026', title: 'Community Healing Service', location: '2646 Palma Dr Ste 250', time: '10:00 AM' },
    { date: 'September 7, 2026', title: 'Labor Day Community Picnic', location: 'Ventura Beach Park', time: '11:00 AM - 3:00 PM' },
    { date: 'September 14, 2026', title: 'Prosperity Workshop: Creating Abundance', location: 'Ventura Center', time: '10:00 AM - 2:00 PM' },
  ]

  return (
    <>
      <Helmet>
        <title>Programs | United Church of Religious Science</title>
        <meta name="description" content="Explore our programs: Sunday Services, Science of Mind Classes, Spiritual Counseling, Meditation Groups, Youth Programs, and Community Outreach. United Church of Religious Science, Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/programs" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transformative spiritual programs designed to support your growth, healing, and connection.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="What We Offer" subtitle="Comprehensive spiritual programs for every stage of your journey." />
          <div className="space-y-12">
            {programs.map((program, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 lg:p-10 border border-slate-100">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-16 shrink-0">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-primary-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-church-navy mb-3">{program.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{program.fullDesc}</p>
                    <div className="grid sm:grid-cols-3 gap-4 bg-white rounded-lg p-4 border border-slate-100">
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        <div><p className="text-xs text-slate-500 font-medium">Schedule</p><p className="text-sm text-slate-700">{program.schedule}</p></div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        <div><p className="text-xs text-slate-500 font-medium">Location</p><p className="text-sm text-slate-700">{program.location}</p></div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                        <div><p className="text-xs text-slate-500 font-medium">Eligibility</p><p className="text-sm text-slate-700">{program.eligibility}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="Upcoming Events" subtitle="Join us for these upcoming programs and community gatherings." />
          <div className="max-w-3xl mx-auto space-y-4">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 border border-slate-100 shadow-sm">
                <div className="bg-primary-50 text-primary-700 rounded-lg px-4 py-2 text-center min-w-[120px]">
                  <p className="text-xs font-medium uppercase">{event.date.split(' ')[0]}</p>
                  <p className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</p>
                  <p className="text-xs">{event.date.split(' ')[2]}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-lg text-church-navy">{event.title}</h4>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary">Register for an Event<ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
