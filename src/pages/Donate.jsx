import { Helmet } from "react-helmet-async"
import { useState } from "react"
import SectionHeader from "../components/SectionHeader"
import { Heart, Shield, CheckCircle, Gift, Building, FileText } from "lucide-react"

const Donate = () => {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", frequency: "one-time" })

  const presetAmounts = ["25", "50", "100", "250", "500", "1000"]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const displayAmount = amount === "custom" ? customAmount : amount

  return (
    <>
      <Helmet>
        <title>Donate | United Church of Religious Science</title>
        <meta name="description" content="Support United Church of Religious Science, a 501(c)(3) nonprofit. Your donation is tax-deductible. EIN: 77-0003763. 2646 Palma Dr Ste 250, Ventura, CA 93003-7739." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/donate" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Support Our Mission</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your generous donation helps us continue our spiritual work in Ventura and beyond. 
            All contributions are tax-deductible.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mt-6">
            <Shield className="w-4 h-4 text-church-gold" />
            <span className="text-sm font-medium text-white">501(c)(3) Nonprofit | EIN: 77-0003763 | Tax-Deductible</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Donation Form */}
            <div>
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h2 className="font-serif font-bold text-2xl text-church-navy">Make a Donation</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif font-bold text-xl text-church-navy mb-2">Thank You!</h3>
                    <p className="text-slate-600">
                      Your donation of ${displayAmount} has been recorded. You will receive a confirmation 
                      email and a tax receipt at {formData.email}. Your generosity makes our work possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Amount Selection */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Select Amount *</label>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {presetAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => { setAmount(amt); setCustomAmount("") }}
                            className={`py-2.5 rounded-lg font-medium text-sm transition-colors ${
                              amount === amt
                                ? "bg-primary-700 text-white"
                                : "bg-white border border-slate-200 text-slate-700 hover:border-primary-400"
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setAmount("custom")}
                          className={`py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                            amount === "custom"
                              ? "bg-primary-700 text-white"
                              : "bg-white border border-slate-200 text-slate-700 hover:border-primary-400"
                          }`}
                        >
                          Custom
                        </button>
                        {amount === "custom" && (
                          <input
                            type="number"
                            placeholder="Enter amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            required
                            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none"
                          />
                        )}
                      </div>
                    </div>

                    {/* Frequency */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Frequency</label>
                      <div className="flex gap-2">
                        {["one-time", "monthly", "annual"].map((freq) => (
                          <button
                            key={freq}
                            type="button"
                            onClick={() => setFormData({ ...formData, frequency: freq })}
                            className={`flex-1 py-2.5 rounded-lg font-medium text-sm capitalize transition-colors ${
                              formData.frequency === freq
                                ? "bg-primary-700 text-white"
                                : "bg-white border border-slate-200 text-slate-700 hover:border-primary-400"
                            }`}
                          >
                            {freq === "one-time" ? "One-Time" : freq}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none" />
                    </div>

                    <button type="submit" className="w-full btn-secondary flex items-center justify-center gap-2 text-lg">
                      <Heart className="w-5 h-5" />
                      Donate {displayAmount ? `$${displayAmount}` : ""}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      This is a demonstration form. For actual donations, please contact us directly 
                      at <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-600 hover:underline">admin@unitedchurchofreligiousscience.sbs</a>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif font-bold text-2xl text-church-navy mb-4">Other Ways to Give</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Gift className="w-5 h-5 text-primary-700" />
                      <h3 className="font-semibold text-church-navy">By Check</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Mail your check payable to "United Church of Religious Science" to:<br />
                      2646 Palma Dr Ste 250<br />
                      Ventura, CA 93003-7739
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-5 h-5 text-primary-700" />
                      <h3 className="font-semibold text-church-navy">Employer Matching</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Many employers offer matching gift programs. Check with your HR department to see 
                      if your company will match your donation to United Church of Religious Science (EIN: 77-0003763).
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-primary-700" />
                      <h3 className="font-semibold text-church-navy">Planned Giving & Legacy</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      Include United Church of Religious Science in your estate planning. 
                      Contact us to learn about bequests, charitable trusts, and other legacy giving options 
                      that support our mission for generations to come.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax Info */}
              <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary-700" />
                  <h3 className="font-serif font-bold text-church-navy">Tax Information</h3>
                </div>
                <div className="text-sm text-slate-700 space-y-1">
                  <p><strong>Organization:</strong> United Church of Religious Science</p>
                  <p><strong>EIN:</strong> 77-0003763</p>
                  <p><strong>Status:</strong> 501(c)(3) Tax-Exempt Nonprofit</p>
                  <p><strong>Address:</strong> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
                  <p><strong>Email:</strong> <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
                  <p className="text-xs text-slate-500 mt-2">
                    All donations are tax-deductible to the fullest extent allowed by law. 
                    You will receive a tax receipt for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
