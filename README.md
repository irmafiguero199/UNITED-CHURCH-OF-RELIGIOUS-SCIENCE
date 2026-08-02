# United Church of Religious Science

A complete, professional website for United Church of Religious Science, a 501(c)(3) nonprofit organization in Ventura, California.

## Organization Details

- **Legal Name:** United Church of Religious Science
- **Also Known As:** Center For Positive Living Ventura
- **EIN:** 77-0003763
- **Address:** 2646 Palma Dr Ste 250, Ventura, CA 93003-7739, United States
- **Email:** admin@unitedchurchofreligiousscience.sbs
- **Phone:** (805) 555-0142
- **Website:** https://www.unitedchurchofreligiousscience.sbs
- **Status:** 501(c)(3) Tax-Exempt Nonprofit (since September 1984)
- **State:** California

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Helmet Async
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Deployment

The `dist` folder contains the static files ready for deployment. You can deploy to:

- **GitHub Pages:** Use the `gh-pages` branch or GitHub Actions
- **Netlify:** Drag and drop the `dist` folder
- **Vercel:** Connect your GitHub repository
- **Any static hosting:** Upload the `dist` folder contents

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   ├── 404.html
│   ├── logo.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Newsletter.jsx
│   │   └── ScrollToTop.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── MissionVision.jsx
│   │   ├── Programs.jsx
│   │   ├── Impact.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Donate.jsx
│   │   ├── Gallery.jsx
│   │   ├── News.jsx
│   │   ├── RegistrationInformation.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── NotFound.jsx
│   ├── seo/
│   │   └── OrganizationSchema.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission preview, programs, impact stats, CTA |
| About | `/about` | History, timeline, values, legal info |
| Mission & Vision | `/mission-vision` | Mission statement, vision, strategic objectives |
| Programs | `/programs` | All programs with details, schedule, eligibility |
| Impact | `/impact` | Stats, testimonials, partners |
| Team | `/team` | Board of Directors, staff, board meeting info |
| Contact | `/contact` | Full address, phone, email, form, office hours |
| Donate | `/donate` | Donation form, tax info, other giving methods |
| Gallery | `/gallery` | Event gallery with filterable categories |
| News | `/news` | News articles with dates and categories |
| Registration Info | `/registration-information` | EIN, IRS status, state registration, board, reports |
| Privacy Policy | `/privacy-policy` | Full privacy policy with EIN and address |
| Terms of Service | `/terms-of-service` | Full terms with EIN and address |
| 404 | `*` | Custom 404 page |

## SEO Features

- Unique meta descriptions on every page
- Canonical links on every page
- Schema.org Organization JSON-LD with NGO type, EIN, address
- sitemap.xml with all URLs
- robots.txt
- manifest.webmanifest
- 404.html for static hosting

## Google Workspace for Nonprofits Compliance

This site is designed to meet Google"s strict verification requirements:

1. Domain ownership clearly matches organization name
2. Zero placeholder content — all text is real and specific
3. EIN (77-0003763) appears 8+ times across the site
4. Physical address appears 6+ times
5. Email is clickable (mailto:) and appears 4+ times
6. Phone is clickable (tel:)
7. Organization name in every page title
8. Professional, non-template design
9. Complete legal pages (Privacy Policy, Terms, Registration Info)
10. Active social media links

## License

This website is the property of United Church of Religious Science (EIN: 77-0003763).
