import { Helmet } from "react-helmet-async"
import SectionHeader from "../components/SectionHeader"
import { Target, Eye, Compass, Heart, Lightbulb, Users, Globe, Sparkles } from "lucide-react"

const MissionVision = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Spiritual Education Excellence",
      desc: "By 2030, expand our class offerings to serve 200+ students annually through Science of Mind courses, practitioner training, and specialized workshops.",
      year: "2026-2030",
    },
    {
      icon: Users,
      title: "Community Growth & Inclusion",
      desc: "Grow our active membership to 300+ individuals while maintaining our commitment to inclusivity, diversity, and welcoming all seekers regardless of background.",
      year: "2026-2030",
    },
    {
      icon: Heart,
      title: "Youth & Family Ministry",
      desc: "Develop comprehensive youth and family programs, including Sunday school, teen groups, and family retreats, serving 50+ children and teens annually.",
      year: "2026-2030",
    },
    {
      icon: Globe,
      title: "Digital Outreach Expansion",
      desc: "Expand our digital ministry to reach 5,000+ individuals worldwide through online classes, podcasts, livestreamed services, and social media engagement.",
      year: "2026-2030",
    },
    {
      icon: Sparkles,
      title: "Community Impact Programs",
      desc: "Launch new outreach initiatives including a community food pantry, mental health support groups, and partnerships with local nonprofits.",
      year: "2026-2030",
    },
    {
      icon: Compass,
      title: "Facility Enhancement",
      desc: "Complete renovations to our Ventura facility to create a more welcoming, accessible, and multi-purpose spiritual center for the community.",
      year: "2026-2030",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Mission & Vision | United Church of Religious Science</title>
        <meta name="description" content="Our mission is to teach and practice the Science of Mind philosophy, empowering individuals to realize their divine potential. United Church of Religious Science, Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/mission-vision" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            Mission & Vision
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Guiding principles that shape our spiritual community and inspire our work in Ventura and beyond.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Target className="w-8 h-8 text-primary-700" />
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-church-navy">Our Mission</h2>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border-l-4 border-primary-600">
              <p className="text-xl lg:text-2xl text-church-navy font-serif leading-relaxed text-center">
                "The mission of United Church of Religious Science is to teach, practice, and demonstrate the 
                principles of the Science of Mind and Religious Science philosophy as taught by Ernest Holmes, 
                empowering individuals to realize their divine potential, heal their lives, and create a world 
                that works for everyone through the conscious application of spiritual law."
              </p>
            </div>
            <div className="mt-8 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our mission is rooted in the understanding that every individual is an expression of the Divine, 
                possessing infinite creative potential. Through our Sunday services, classes, workshops, and 
                pastoral care, we provide the tools and teachings necessary for individuals to awaken to their 
                true nature and live lives of joy, health, prosperity, and purpose.
              </p>
              <p>
                We believe that the Science of Mind is not merely a philosophy to be studied, but a practical 
                way of life to be lived. Our mission extends beyond the walls of our church to encompass the 
                entire Ventura community and the world at large, as we work to be a force for good, healing, 
                and transformation in all that we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Eye className="w-8 h-8 text-secondary-600" />
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-church-navy">Our Vision</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
              <p className="text-xl lg:text-2xl text-church-navy font-serif leading-relaxed text-center">
                "We envision a world where every person recognizes their inherent divinity, lives in harmony 
                with spiritual law, and contributes to a global community of love, peace, and abundance. 
                United Church of Religious Science will be a leading spiritual center in Ventura County, 
                known for transformative teaching, compassionate service, and vibrant community life."
              </p>
            </div>
            <div className="mt-8 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our vision extends to 2030 and beyond. We see a future where our church is not only a place 
                of worship but a hub of spiritual innovation, community service, and personal transformation. 
                We envision thousands of lives changed through the application of Science of Mind principles, 
                and a Ventura community that is more loving, more peaceful, and more prosperous because of 
                our presence and work.
              </p>
              <p>
                We see our digital ministry reaching people across the globe, our youth programs nurturing 
                the next generation of spiritual leaders, and our outreach programs making a tangible difference 
                in the lives of those most in need. Our vision is bold, but we know that with faith, focus, 
                and the support of our community, all things are possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            title="Strategic Objectives 2026-2030" 
            subtitle="Concrete goals that will guide our growth and impact over the next five years."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <obj.icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">{obj.year}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy mb-2">{obj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
