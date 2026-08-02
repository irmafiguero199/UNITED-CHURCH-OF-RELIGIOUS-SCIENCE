import { Helmet } from "react-helmet-async"
import SectionHeader from "../components/SectionHeader"
import { Shield, MapPin, Calendar, Users, Lightbulb, Heart, Globe, BookOpen } from "lucide-react"

const About = () => {
  const milestones = [
    { year: "1984", title: "Founded in Ventura", desc: "United Church of Religious Science was established in Ventura, California, as a center for Religious Science and Science of Mind teachings." },
    { year: "1990", title: "First Practitioner Training", desc: "Launched our first Practitioner Training Program, certifying spiritual practitioners to serve the community." },
    { year: "1995", title: "Community Outreach Expansion", desc: "Expanded our outreach programs to include food drives, youth mentorship, and interfaith dialogue initiatives." },
    { year: "2005", title: "New Location", desc: "Moved to our current location at 2646 Palma Dr Ste 250, providing a dedicated space for worship, classes, and community gatherings." },
    { year: "2015", title: "Digital Ministry Launch", desc: "Began offering online classes and livestreamed Sunday services to reach members beyond Ventura County." },
    { year: "2024", title: "40th Anniversary", desc: "Celebrated 40 years of service to the Ventura community with a special anniversary celebration and community festival." },
  ]

  const values = [
    { icon: Lightbulb, title: "Spiritual Awakening", desc: "We believe every individual has the innate capacity to awaken to their divine nature and realize their full potential through the Science of Mind." },
    { icon: Heart, title: "Unconditional Love", desc: "Our community is built on the principle of unconditional love, acceptance, and respect for all people regardless of background or belief." },
    { icon: BookOpen, title: "Lifelong Learning", desc: "We are committed to continuous spiritual education, offering classes, workshops, and resources for seekers at every stage of their journey." },
    { icon: Globe, title: "Community Service", desc: "We actively serve our local and global community through outreach programs, charitable giving, and social justice initiatives." },
    { icon: Users, title: "Inclusive Fellowship", desc: "We welcome all people—regardless of race, gender, sexual orientation, or religious background—to join us in spiritual exploration." },
    { icon: Shield, title: "Integrity & Transparency", desc: "As a 501(c)(3) nonprofit, we operate with full financial transparency and ethical governance for the benefit of our community." },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | United Church of Religious Science</title>
        <meta name="description" content="Learn about United Church of Religious Science in Ventura, CA. Founded in 1984, we are a 501(c)(3) nonprofit spiritual community practicing the Science of Mind. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            About Our Church
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A spiritual community rooted in the Science of Mind philosophy, 
            serving Ventura, California since 1984.
          </p>
        </div>
      </section>

      {/* Legal Info Banner */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="container-custom px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-primary-800">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <strong>EIN:</strong> 77-0003763
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <strong>Founded:</strong> 1984
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <strong>Location:</strong> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <strong>Status:</strong> 501(c)(3) Nonprofit
            </span>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our History" 
            subtitle="Four decades of spiritual service to the Ventura community."
          />
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              The United Church of Religious Science was founded in September 1984 in Ventura, California, 
              by a dedicated group of Religious Science practitioners who sought to create a spiritual home 
              for the study and practice of Ernest Holmes" Science of Mind philosophy. From its earliest days, 
              the church has been committed to providing practical spiritual teachings that empower individuals 
              to transform their lives through the power of their own consciousness.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Over the past four decades, our church has grown from a small study group into a vibrant spiritual 
              community serving hundreds of individuals and families throughout Ventura County. We have certified 
              dozens of Spiritual Practitioners, licensed ministers, and supported countless individuals on their 
              journey of spiritual awakening.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Today, United Church of Religious Science continues to be a beacon of hope, healing, and transformation 
              in Ventura. Our Sunday services, classes, and community programs reach people from all walks of life, 
              offering a message of love, possibility, and the unlimited potential within every human being.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader 
            title="Our Journey" 
            subtitle="Key milestones in the history of United Church of Religious Science."
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary-200 ml-4 sm:ml-8 space-y-10">
              {milestones.map((milestone, i) => (
                <div key={i} className="relative pl-8 sm:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-church-gold rounded-full border-4 border-white shadow" />
                  <span className="text-sm font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">{milestone.year}</span>
                  <h3 className="font-serif font-bold text-xl text-church-navy mt-2">{milestone.title}</h3>
                  <p className="text-slate-600 mt-1">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at United Church of Religious Science."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-primary-700" />
              <h2 className="text-2xl font-serif font-bold text-church-navy">Legal & Organizational Information</h2>
            </div>
            <div className="space-y-4 text-slate-700">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Legal Name</p>
                  <p className="font-medium">United Church of Religious Science</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Also Known As</p>
                  <p className="font-medium">Center For Positive Living Ventura</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Federal EIN</p>
                  <p className="font-medium">77-0003763</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Tax Status</p>
                  <p className="font-medium">501(c)(3) Tax-Exempt (since Sept. 1984)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Year Founded</p>
                  <p className="font-medium">1984</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">State of Incorporation</p>
                  <p className="font-medium">California</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm text-slate-500">Physical Address</p>
                  <p className="font-medium">2646 Palma Dr Ste 250, Ventura, CA 93003-7739, United States</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="font-medium text-primary-700 hover:underline">
                    admin@unitedchurchofreligiousscience.sbs
                  </a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a href="tel:+18055550142" className="font-medium text-primary-700 hover:underline">
                    (805) 555-0142
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
