import { Helmet } from "react-helmet-async"
import { useState } from "react"
import SectionHeader from "../components/SectionHeader"
import { MapPin, Calendar, Filter } from "lucide-react"

const Gallery = () => {
  const [filter, setFilter] = useState("all")

  const categories = ["all", "services", "events", "community", "retreats"]

  const events = [
    {
      title: "Easter Sunday Celebration 2026",
      date: "April 5, 2026",
      location: "2646 Palma Dr Ste 250, Ventura, CA",
      category: "services",
      desc: "Our annual Easter celebration brought together over 120 community members for a powerful service of renewal, music, and spiritual inspiration.",
      color: "from-rose-100 to-rose-200",
    },
    {
      title: "Spring Spiritual Retreat",
      date: "March 15-16, 2026",
      location: "Ojai Valley Retreat Center, Ojai, CA",
      category: "retreats",
      desc: "A weekend of deep meditation, workshops, and community connection in the beautiful Ojai Valley. 45 participants experienced transformative spiritual practices.",
      color: "from-emerald-100 to-emerald-200",
    },
    {
      title: "Community Food Drive",
      date: "February 22, 2026",
      location: "Ventura County Food Share Warehouse",
      category: "community",
      desc: "Our volunteers collected and sorted over 2,000 pounds of food for local families in need. A powerful demonstration of love in action.",
      color: "from-amber-100 to-amber-200",
    },
    {
      title: "Interfaith Dialogue Panel",
      date: "January 18, 2026",
      location: "Ventura City Hall Community Room",
      category: "events",
      desc: "Leaders from Christian, Jewish, Muslim, Buddhist, and Hindu communities came together for an evening of respectful dialogue and mutual understanding.",
      color: "from-violet-100 to-violet-200",
    },
    {
      title: "Holiday Candlelight Service",
      date: "December 24, 2025",
      location: "2646 Palma Dr Ste 250, Ventura, CA",
      category: "services",
      desc: "A beautiful candlelight service featuring choir performances, readings, and a message of peace and unity for the holiday season.",
      color: "from-sky-100 to-sky-200",
    },
    {
      title: "Youth Talent Showcase",
      date: "November 15, 2025",
      location: "Ventura Community Center",
      category: "events",
      desc: "Our youth program showcased the talents of 30 children and teens through music, art, poetry, and dance performances.",
      color: "from-orange-100 to-orange-200",
    },
    {
      title: "Thanksgiving Community Dinner",
      date: "November 27, 2025",
      location: "United Church of Religious Science, Ventura",
      category: "community",
      desc: "Over 200 community members gathered for a free Thanksgiving dinner, sharing gratitude, food, and fellowship with neighbors from all walks of life.",
      color: "from-yellow-100 to-yellow-200",
    },
    {
      title: "Summer Solstice Meditation",
      date: "June 21, 2025",
      location: "Ventura Botanical Gardens",
      category: "retreats",
      desc: "An outdoor meditation gathering at sunrise to celebrate the summer solstice. 80 participants joined in silence, prayer, and community.",
      color: "from-lime-100 to-lime-200",
    },
    {
      title: "Founders Day Celebration",
      date: "September 14, 2025",
      location: "2646 Palma Dr Ste 250, Ventura, CA",
      category: "services",
      desc: "Celebrating the life and teachings of Ernest Holmes with special speakers, historical exhibits, and a commemorative service.",
      color: "from-indigo-100 to-indigo-200",
    },
  ]

  const filteredEvents = filter === "all" ? events : events.filter(e => e.category === filter)

  return (
    <>
      <Helmet>
        <title>Gallery | United Church of Religious Science</title>
        <meta name="description" content="Photo gallery of events, services, and community activities at United Church of Religious Science in Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/gallery" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Moments from our services, events, retreats, and community outreach in Ventura, California.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Event Gallery" subtitle="A visual journey through our community life." />

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  filter === cat
                    ? "bg-primary-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                  <div className="text-center px-4">
                    <span className="text-5xl">
                      {event.category === "services" && "✨"}
                      {event.category === "events" && "🎉"}
                      {event.category === "community" && "🤝"}
                      {event.category === "retreats" && "🌿"}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full capitalize">{event.category}</span>
                  <h3 className="font-serif font-bold text-lg text-church-navy mt-2">{event.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{event.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{event.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
