import { useState } from "react"
import { Mail, Send, CheckCircle } from "lucide-react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="bg-primary-800 py-16">
      <div className="container-custom px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-10 h-10 text-church-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-primary-200 mb-8">
            Subscribe to our newsletter for weekly inspiration, event updates, and community news 
            from United Church of Religious Science.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 rounded-lg py-4 px-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing! Check your inbox for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-primary-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
              />
              <button type="submit" className="btn-secondary flex items-center justify-center gap-2">
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-primary-300 text-xs mt-4">
            United Church of Religious Science | EIN: 77-0003763 | 2646 Palma Dr Ste 250, Ventura, CA 93003-7739
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
