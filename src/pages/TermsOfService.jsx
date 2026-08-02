import { Helmet } from "react-helmet-async"
import { Shield, MapPin, Mail, Phone } from "lucide-react"

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | United Church of Religious Science</title>
        <meta name="description" content="Terms of Service for United Church of Religious Science website. 501(c)(3) nonprofit, Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/terms-of-service" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Terms and conditions governing the use of the United Church of Religious Science website.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="bg-slate-50 rounded-xl p-6 mb-10 border border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary-700" />
              <h2 className="font-serif font-bold text-lg text-church-navy">Organization Information</h2>
            </div>
            <div className="text-sm text-slate-600 space-y-1">
              <p><strong>Legal Name:</strong> United Church of Religious Science</p>
              <p><strong>EIN:</strong> 77-0003763</p>
              <p><strong>Address:</strong> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739, United States</p>
              <p><strong>Email:</strong> <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
              <p><strong>Phone:</strong> <a href="tel:+18055550142" className="text-primary-700 hover:underline">(805) 555-0142</a></p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing or using the website of United Church of Religious Science 
              (<a href="https://www.unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">www.unitedchurchofreligiousscience.sbs</a>), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. 
              United Church of Religious Science is a 501(c)(3) nonprofit organization (EIN: 77-0003763) located in Ventura, California.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">2. Use of Website</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to use the website in any way that could 
              damage, disable, overburden, or impair the site or interfere with any other party"s use of the website. 
              You may not attempt to gain unauthorized access to any portion of the website or any systems or networks 
              connected to the website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, audio, video, 
              and software, is the property of United Church of Religious Science or its content suppliers and is 
              protected by United States and international copyright laws. The United Church of Religious Science logo 
              and symbol are trademarks of our organization. You may not reproduce, distribute, modify, or create 
              derivative works from any content on this site without our prior written permission.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">4. Donations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All donations made through our website are voluntary and non-refundable. United Church of Religious Science 
              is a registered 501(c)(3) nonprofit organization (EIN: 77-0003763), and all donations are tax-deductible 
              to the fullest extent allowed by law. Donors will receive a tax receipt via email. We reserve the right 
              to refuse donations from any source at our discretion.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This website is provided on an "as is" and "as available" basis. United Church of Religious Science makes 
              no representations or warranties of any kind, express or implied, regarding the operation of the website 
              or the information, content, materials, or products included on the website. We do not warrant that the 
              website will be uninterrupted, timely, secure, or error-free.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In no event shall United Church of Religious Science, its board members, staff, volunteers, or affiliates 
              be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in 
              connection with your use of the website or our services. This includes but is not limited to damages for 
              loss of profits, goodwill, use, data, or other intangible losses.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">7. Spiritual Content Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The spiritual teachings, meditations, and content provided on this website are for educational and 
              inspirational purposes only. They are not intended to replace professional medical, psychological, or 
              legal advice. Always seek the advice of qualified professionals regarding any physical, mental, or legal 
              concerns.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">8. Links to Third-Party Sites</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website may contain links to third-party websites for your convenience. United Church of Religious 
              Science does not endorse, control, or assume responsibility for the content, privacy policies, or practices 
              of any third-party websites. We encourage you to review the terms and privacy policies of any third-party 
              sites you visit.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">9. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of 
              California, United States, without regard to its conflict of law provisions. Any legal action arising 
              out of or relating to these terms shall be filed in the courts of Ventura County, California.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of the website following the posting of changes constitutes 
              your acceptance of those changes.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">11. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 text-sm text-slate-700 space-y-2">
              <p><strong>United Church of Religious Science</strong></p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-600" /> 2646 Palma Dr Ste 250, Ventura, CA 93003-7739</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-600" /> <a href="mailto:admin@unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">admin@unitedchurchofreligiousscience.sbs</a></p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-600" /> <a href="tel:+18055550142" className="text-primary-700 hover:underline">(805) 555-0142</a></p>
              <p><strong>EIN:</strong> 77-0003763</p>
            </div>
            <p className="text-sm text-slate-500 mt-6">Last updated: August 1, 2026</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
