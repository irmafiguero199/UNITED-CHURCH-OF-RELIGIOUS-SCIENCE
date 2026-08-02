import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const News = () => {
  const articles = [
    {
      title: 'United Church of Religious Science Launches New Digital Ministry Platform',
      date: 'July 28, 2026',
      category: 'Technology',
      excerpt: 'We are excited to announce the launch of our new digital ministry platform, making our Sunday services, classes, and resources accessible to spiritual seekers worldwide. The platform includes livestreamed services, on-demand class recordings, and a community forum.',
    },
    {
      title: 'Summer Spiritual Retreat Draws Record Attendance in Ojai Valley',
      date: 'July 15, 2026',
      category: 'Events',
      excerpt: 'Our annual Summer Spiritual Retreat held at the Ojai Valley Retreat Center welcomed a record 65 participants this year. The weekend featured deep meditation practices, workshops on prosperity consciousness, and powerful community healing circles.',
    },
    {
      title: 'Rev. Susan Goldstein Announces New Practitioner Training Cohort',
      date: 'June 30, 2026',
      category: 'Programs',
      excerpt: 'Applications are now open for the Fall 2026 Practitioner Training Program. This two-year intensive program prepares students to become licensed Religious Science practitioners, capable of providing spiritual counseling and affirmative prayer support.',
    },
    {
      title: 'Community Food Drive Exceeds Goal, Provides 3,000 lbs of Food',
      date: 'June 12, 2026',
      category: 'Community',
      excerpt: 'Thanks to the generosity of our congregation and community partners, our quarterly food drive collected over 3,000 pounds of non-perishable food items for Ventura County Food Share. This represents a 50% increase over our previous drive.',
    },
    {
      title: 'Interfaith Panel Explores the Role of Spirituality in Mental Health',
      date: 'May 22, 2026',
      category: 'Events',
      excerpt: 'Leading spiritual leaders and mental health professionals gathered at Ventura City Hall for a thought-provoking discussion on integrating spiritual practices with modern mental health care. The event drew over 150 attendees from diverse faith backgrounds.',
    },
    {
      title: 'Youth Program Receives Grant for Expanded Curriculum',
      date: 'May 5, 2026',
      category: 'Programs',
      excerpt: 'United Church of Religious Science has been awarded a $15,000 grant from the Ventura County Community Foundation to expand our youth and family ministry programs. The funding will support new curriculum development, family retreat scholarships, and teen leadership training.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>News | United Church of Religious Science</title>
        <meta name="description" content="Latest news and updates from United Church of Religious Science in Ventura, CA. Programs, events, community outreach, and more. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/news" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">News & Updates</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay informed about the latest happenings at United Church of Religious Science.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Latest Articles" subtitle="News, announcements, and stories from our community." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy mb-3 leading-snug">{article.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-primary-700 text-sm font-medium mt-4 hover:underline">
                  Read more <ArrowRight className="w-3 h-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
