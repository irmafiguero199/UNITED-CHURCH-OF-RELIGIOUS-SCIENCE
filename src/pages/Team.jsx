import { Helmet } from "react-helmet-async"
import SectionHeader from "../components/SectionHeader"
import { Users, Calendar, Mail, Shield } from "lucide-react"

const Team = () => {
  const board = [
    {
      name: "Dr. Patricia Williams",
      role: "President, Board of Directors",
      bio: "Dr. Williams has served on the Board since 2015 and brings over 30 years of experience in nonprofit governance and spiritual leadership. She is a licensed Religious Science practitioner and retired clinical psychologist who has dedicated her life to integrating spiritual principles with mental health practices.",
      since: "2015",
    },
    {
      name: "Robert Martinez",
      role: "Vice President, Board of Directors",
      bio: "Robert is a successful entrepreneur and long-time member of our community. He oversees strategic planning and fundraising initiatives for the church. His business acumen and deep spiritual commitment have been instrumental in the church"s growth and financial stability.",
      since: "2018",
    },
    {
      name: "Linda Chang",
      role: "Secretary, Board of Directors",
      bio: "Linda has been a member of United Church of Religious Science since 2008. As a retired educator, she brings exceptional organizational skills and a passion for youth ministry to the Board. She chairs the Education Committee and oversees our class curriculum development.",
      since: "2016",
    },
    {
      name: "Michael O"Brien",
      role: "Treasurer, Board of Directors",
      bio: "Michael is a Certified Public Accountant with 25 years of experience in nonprofit financial management. He ensures the church operates with full financial transparency and compliance with all 501(c)(3) regulations. He has been a member since 2010.",
      since: "2017",
    },
    {
      name: "Rev. Susan Goldstein",
      role: "Board Member, Senior Minister",
      bio: "Rev. Goldstein is the Senior Minister of United Church of Religious Science and serves as an ex-officio member of the Board. She has been with the church since 2005 and was ordained in 2012. Her sermons and teachings have inspired thousands of individuals in Ventura and beyond.",
      since: "2012",
    },
    {
      name: "Dr. James Holloway",
      role: "Board Member",
      bio: "Dr. Holloway is a professor of religious studies at a local university and brings academic expertise in New Thought philosophy to the Board. He has published extensively on Ernest Holmes and the history of Religious Science in America.",
      since: "2020",
    },
  ]

  const staff = [
    {
      name: "Rev. Susan Goldstein",
      role: "Senior Minister",
      bio: "Rev. Goldstein leads all spiritual and administrative functions of the church. She delivers Sunday messages, teaches advanced classes, provides pastoral care, and represents the church in the broader community.",
    },
    {
      name: "Maria Santos",
      role: "Office Administrator",
      bio: "Maria manages the day-to-day operations of the church office, coordinates events, handles communications, and serves as the primary point of contact for members and visitors. She has been with the church since 2016.",
    },
    {
      name: "Thomas Wright",
      role: "Music Director",
      bio: "Thomas oversees all musical aspects of our Sunday services and special events. He leads our choir, coordinates musicians, and creates an uplifting musical environment that enhances our spiritual experience.",
    },
    {
      name: "Jennifer Park",
      role: "Youth & Family Coordinator",
      bio: "Jennifer develops and implements programs for children, teens, and families. She creates curriculum for Sunday School, organizes family events, and ensures our youngest members feel welcomed and valued.",
    },
    {
      name: "Carlos Mendez",
      role: "Facilities Manager",
      bio: "Carlos maintains our Ventura facility, ensuring it is safe, clean, and welcoming for all who enter. He also coordinates setup for events, classes, and services.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Leadership Team | United Church of Religious Science</title>
        <meta name="description" content="Meet the Board of Directors and staff of United Church of Religious Science in Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/team" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Our Leadership Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Dedicated individuals guiding United Church of Religious Science with wisdom, compassion, and integrity.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-7 h-7 text-primary-700" />
            <h2 className="text-3xl font-serif font-bold text-church-navy">Board of Directors</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-3xl">
            The Board of Directors of United Church of Religious Science (EIN: 77-0003763) is responsible for 
            the governance, strategic direction, and financial oversight of our 501(c)(3) nonprofit organization. 
            Board members serve voluntarily and are elected by the congregation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary-700 font-bold text-lg">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                <p className="text-xs text-slate-400 mt-3">Board member since {member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-7 h-7 text-secondary-600" />
            <h2 className="text-3xl font-serif font-bold text-church-navy">Staff</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary-700 font-bold text-lg">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-church-navy">{member.name}</h3>
                <p className="text-secondary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 border border-primary-100">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary-700" />
              <h3 className="font-serif font-bold text-xl text-church-navy">Board Meetings</h3>
            </div>
            <p className="text-slate-600 mb-4">
              The Board of Directors meets monthly on the second Tuesday of each month at 6:00 PM. 
              Meetings are held at our Ventura location and are open to members of the congregation. 
              Minutes are available upon request.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1 text-slate-600">
                <Shield className="w-4 h-4 text-primary-600" />
                EIN: 77-0003763
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <Mail className="w-4 h-4 text-primary-600" />
                <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">admin@unitedchurchofreligiousscience.sbs</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
