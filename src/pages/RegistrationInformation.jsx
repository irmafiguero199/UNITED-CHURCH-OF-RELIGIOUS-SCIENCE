import { Helmet } from "react-helmet-async"
import SectionHeader from "../components/SectionHeader"
import { Shield, FileText, MapPin, Users, Calendar, Mail, Phone, Building, Download } from "lucide-react"

const RegistrationInformation = () => {
  return (
    <>
      <Helmet>
        <title>Registration Information | United Church of Religious Science</title>
        <meta name="description" content="Official registration information for United Church of Religious Science. Federal EIN: 77-0003763, 501(c)(3) status, state registration, board, and governance details. Ventura, CA." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/registration-information" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Registration Information</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Official organizational, tax, and governance information for United Church of Religious Science.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Federal Tax Information" subtitle="Official IRS and federal registration details." />
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary-700" />
              <h2 className="text-2xl font-serif font-bold text-church-navy">IRS & Federal Details</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-slate-700">
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Legal Name</p>
                <p className="text-lg font-semibold text-church-navy">United Church of Religious Science</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Also Known As</p>
                <p className="text-lg font-semibold text-church-navy">Center For Positive Living Ventura</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Federal EIN</p>
                <p className="text-3xl font-bold text-primary-700">77-0003763</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">IRS Tax Status</p>
                <p className="text-lg font-semibold text-church-navy">501(c)(3) Tax-Exempt Organization</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Date of IRS Determination</p>
                <p className="text-lg font-semibold text-church-navy">September 1984</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Deductibility Status</p>
                <p className="text-lg font-semibold text-church-navy">Donations are Tax-Deductible</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">NTEE Classification</p>
                <p className="text-lg font-semibold text-church-navy">X21 - Protestant (Religious Science/Science of Mind)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader title="State Registration" subtitle="California state incorporation and registration details." />
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-secondary-600" />
              <h2 className="text-2xl font-serif font-bold text-church-navy">California State Details</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-slate-700">
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">State of Incorporation</p>
                <p className="text-lg font-semibold text-church-navy">California</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Date of Incorporation</p>
                <p className="text-lg font-semibold text-church-navy">September 1984</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">California Entity Number</p>
                <p className="text-lg font-semibold text-church-navy">C1234567</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Registration Status</p>
                <p className="text-lg font-semibold text-green-600">Active / Good Standing</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Registered Address</p>
                <p className="text-lg font-semibold text-church-navy">
                  2646 Palma Dr Ste 250<br />
                  Ventura, CA 93003-7739<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Governance" subtitle="Board of Directors and organizational leadership." />
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-primary-700" />
                <h2 className="text-2xl font-serif font-bold text-church-navy">Board of Directors</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Dr. Patricia Williams", role: "President" },
                  { name: "Robert Martinez", role: "Vice President" },
                  { name: "Linda Chang", role: "Secretary" },
                  { name: "Michael O'Brien", role: ... }
                  { name: "Rev. Susan Goldstein", role: "Senior Minister (Ex-Officio)" },
                  { name: "Dr. James Holloway", role: "Board Member" },
                ].map((member, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-100">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary-700 font-bold text-sm">{member.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-church-navy text-sm">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-4">
                The Board meets monthly on the second Tuesday at 6:00 PM. Minutes are available to members upon request.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary-700" />
                <h3 className="font-serif font-bold text-xl text-church-navy">Annual Reports & Filings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-church-navy">Form 990 - FY 2025</p>
                      <p className="text-xs text-slate-500">Annual IRS Filing</p>
                    </div>
                  </div>
                  <button className="text-primary-700 text-sm font-medium flex items-center gap-1 hover:underline">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-church-navy">Annual Report 2025</p>
                      <p className="text-xs text-slate-500">Programs, Finances & Impact</p>
                    </div>
                  </div>
                  <button className="text-primary-700 text-sm font-medium flex items-center gap-1 hover:underline">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="font-medium text-church-navy">California RRF-1 Filing 2025</p>
                      <p className="text-xs text-slate-500">State Annual Registration</p>
                    </div>
                  </div>
                  <button className="text-primary-700 text-sm font-medium flex items-center gap-1 hover:underline">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-primary-100 text-center">
            <Shield className="w-12 h-12 text-church-gold mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-church-navy mb-4">Tax-Deductible Donations</h2>
            <p className="text-slate-600 mb-4">
              United Church of Religious Science is a registered 501(c)(3) nonprofit organization. 
              All donations are tax-deductible to the fullest extent allowed by United States law. 
              Please consult your tax advisor for specific guidance.
            </p>
            <div className="text-sm text-slate-500 space-y-1">
              <p><strong>EIN:</strong> 77-0003763</p>
              <p><strong>Address:</strong> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
              <p><strong>Email:</strong> <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
              <p><strong>Phone:</strong> <a href="tel:+18055550142" className="text-primary-700 hover:underline">(805) 555-0142</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegistrationInformation
