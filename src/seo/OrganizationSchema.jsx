import { Helmet } from "react-helmet-async"

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "United Church of Religious Science",
    "alternateName": "Center For Positive Living Ventura",
    "url": "https://www.unitedchurchofreligiousscience.sbs",
    "logo": "https://www.unitedchurchofreligiousscience.sbs/logo.svg",
    "email": "admin@unitedchurchofreligiousscience.sbs",
    "telephone": "+1-805-555-0142",
    "taxID": "77-0003763",
    "foundingDate": "1984",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2646 Palma Dr Ste 250",
      "addressLocality": "Ventura",
      "addressRegion": "CA",
      "postalCode": "93003-7739",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/unitedchurchofreligiousscience",
      "https://www.instagram.com/ucrsventura"
    ],
    "description": "A 501(c)(3) nonprofit spiritual community in Ventura, California, practicing the Science of Mind philosophy and Religious Science teachings since 1984."
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema
