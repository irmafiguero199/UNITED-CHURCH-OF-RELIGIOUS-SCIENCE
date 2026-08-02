import { Helmet } from "react-helmet-async"
import { Shield, MapPin, Mail, Phone } from "lucide-react"

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | United Church of Religious Science</title>
        <meta name="description" content="Privacy Policy of United Church of Religious Science, a 501(c)(3) nonprofit in Ventura, CA. EIN: 77-0003763." />
        <link rel="canonical" href="https://www.unitedchurchofreligiousscience.sbs/privacy-policy" />
      </Helmet>

      <section className="bg-gradient-to-br from-church-navy to-primary-900 py-24 lg:py-32">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            How United Church of Religious Science collects, uses, and protects your personal information.
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
            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              United Church of Religious Science ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website <a href="https://www.unitedchurchofreligiousscience.sbs" className="text-primary-700 hover:underline">www.unitedchurchofreligiousscience.sbs</a> 
              or interact with us. As a 501(c)(3) nonprofit organization (EIN: 77-0003763), we operate with transparency 
              and integrity in all our practices.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Name, email address, phone number, and mailing address when you sign up for our newsletter, register for events, or make a donation.</li>
              <li>Payment information when you make a donation (processed securely through our payment processor).</li>
              <li>Information you provide when filling out contact forms or requesting spiritual counseling.</li>
              <li>Demographic information for program planning and reporting purposes.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>To communicate with you about church services, events, classes, and programs.</li>
              <li>To process donations and issue tax receipts.</li>
              <li>To respond to your inquiries and provide spiritual support.</li>
              <li>To improve our website, services, and community offerings.</li>
              <li>To comply with legal and regulatory requirements applicable to 501(c)(3) organizations.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              United Church of Religious Science does not sell, rent, or trade your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>With service providers who assist us in operating our website and processing donations (e.g., payment processors, email service providers).</li>
              <li>When required by law, such as in response to a subpoena or court order.</li>
              <li>To protect the rights, property, or safety of our organization, members, or others.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information, subject to legal obligations.</li>
              <li>Opt out of receiving communications from us at any time.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">7. Cookies & Tracking</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website may use cookies and similar technologies to enhance your browsing experience, analyze website 
              traffic, and understand where our visitors are coming from. You can control cookies through your browser 
              settings.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an 
              updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-serif font-bold text-church-navy mt-8 mb-4">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy
