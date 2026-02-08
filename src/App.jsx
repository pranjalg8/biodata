import { useState, useEffect, useRef } from 'react'
import './App.css'

// Biodata data
const biodataData = {
  personal: {
    name: "Pranjal Gupta",
    nameHindi: "प्रांजल गुप्ता",
    dob: "1st July 1997 (Tuesday)",
    timeOfBirth: "05:50 AM",
    placeOfBirth: "Chhatarpur, Madhya Pradesh",
    height: "5' 8\"",
    complexion: "Wheatish",
    diet: "Vegetarian (Eggetarian)",
    hobbies: "Binge-watching movies & shows, working on tech projects, playing badminton"
  },
  career: {
    position: "Software Development Engineer (SDE-2)",
    company: "Amazon",
    location: "Gurugram",
    since: "2020"
  },
  education: {
    degree: "B.Tech (Computer Science) & M.Sc. (Mathematics)",
    institution: "BITS Pilani, Hyderabad Campus"
  },
  about: "Pranjal is a warm, grounded person who values family, meaningful relationships, and personal growth. He's known for his calm demeanor, reliability, and genuine care for the people around him.",
  family: {
    father: {
      name: "Mr. Dinesh Chandra Gupta",
      occupation: "Head (Engineering & Projects)",
      location: "Sector 4, Greater Noida West (Delhi NCR)",
      hometown: "Mahoba",
      contact: "+91 9662549655"
    },
    mother: {
      name: "Mrs. Sushma Gupta",
      occupation: "M.A., L.L.B. | Homemaker",
      location: "Sector 4, Greater Noida West (Delhi NCR)",
      hometown: "Khajuraho",
      contact: "+91 9662549610"
    },
    brother: {
      name: "Puru Gupta",
      occupation: "B.Tech (CS) & M.Sc. (Physics) at BITS Pilani (Pilani Campus)",
      location: "Interning at Apple (Hyderabad), Graduating 2026"
    },
    grandparents: {
      paternal: "Mr. Bihari Lal Gupta (Dhanwantari Medical, Mahoba) & Lt. Smt. Vigyan Devi Gupta",
      maternal: "Lt. Babu Lal Gupta (Chief Engineer, MPEB) & Mrs. Jamwati Gupta, Khajuraho"
    }
  },
  astrology: {
    rashi: "मेष (Mesh / Aries)",
    nakshatra: "कृत्तिका (Kritika)",
    gan: "राक्षस (Rakshas)",
    manglik: "अंशिक मांगलिक (Anshik Manglik)",
    caste: "Vaishya (Baniya) - Dradhomar",
    gotra: "काश्यप (Kashyap)"
  },
  contact: {
    father: "+91 9662549655",
    mother: "+91 9662549610",
    email: "dinesh4171@gmail.com"
  }
}

// Section component with intersection observer
function Section({ children, className = "" }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className={`section ${className} ${isVisible ? 'visible' : ''}`}>
      {children}
    </section>
  )
}

// Lightbox component
function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div className={`lightbox ${image ? 'active' : ''}`} onClick={onClose}>
      <span className="lightbox-close">&times;</span>
      <img src={image} alt="Full size" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function App() {
  const [lightboxImage, setLightboxImage] = useState(null)

  const handlePrint = () => {
    window.print()
  }

  const openLightbox = (src) => {
    setLightboxImage(src)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <div className="biodata-container">
        {/* Header */}
        <header className="header">
          <div className="decorative-border top"></div>
          <div className="header-content">
            <div className="om-symbol">॥ श्री गणेशाय नमः ॥</div>
            <div className="decorative-divider">
              <span className="divider-ornament">✦</span>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-image-container" onClick={() => openLightbox('./images/main-photo.jpg')}>
            <div className="image-frame">
              <img src="./images/main-photo.jpg" alt="Pranjal Gupta" className="profile-image" />
            </div>
            <div className="decorative-corner top-left"></div>
            <div className="decorative-corner top-right"></div>
            <div className="decorative-corner bottom-left"></div>
            <div className="decorative-corner bottom-right"></div>
          </div>
          <div className="profile-name">
            <h2>{biodataData.personal.name}</h2>
            <p className="tagline">{biodataData.personal.nameHindi}</p>
          </div>
        </section>

        {/* Personal Details */}
        <Section className="personal-details">
          <div className="section-header">
            <h3><span className="icon">👤</span> Personal Details</h3>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Date of Birth</span>
              <span className="value">{biodataData.personal.dob}</span>
            </div>
            <div className="detail-item">
              <span className="label">Time of Birth</span>
              <span className="value">{biodataData.personal.timeOfBirth}</span>
            </div>
            <div className="detail-item">
              <span className="label">Place of Birth</span>
              <span className="value">{biodataData.personal.placeOfBirth}</span>
            </div>
            <div className="detail-item">
              <span className="label">Height</span>
              <span className="value">{biodataData.personal.height}</span>
            </div>
            <div className="detail-item">
              <span className="label">Complexion</span>
              <span className="value">{biodataData.personal.complexion}</span>
            </div>
            <div className="detail-item">
              <span className="label">Diet</span>
              <span className="value">{biodataData.personal.diet}</span>
            </div>
            <div className="detail-item full-width">
              <span className="label">Hobbies</span>
              <span className="value">{biodataData.personal.hobbies}</span>
            </div>
          </div>
        </Section>

        {/* Education & Career */}
        <Section className="education-career">
          <div className="section-header">
            <h3><span className="icon">🎓</span> Education & Career</h3>
          </div>
          <div className="career-highlight">
            <div className="company-badge">
              <img src="./images/amazon-logo.png" alt="Amazon" className="company-logo-img" />
              <div className="company-info">
                <span className="position">{biodataData.career.position}</span>
                <span className="company">{biodataData.career.company}, {biodataData.career.location}</span>
                <span className="tenure">Since {biodataData.career.since}</span>
              </div>
            </div>
          </div>
          <div className="education-box">
            <div className="education-item">
              <img src="./images/bits-logo.png" alt="BITS Pilani" className="institution-logo" />
              <div className="education-details">
                <span className="degree">{biodataData.education.degree}</span>
                <span className="institution">{biodataData.education.institution}</span>
              </div>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section className="about-section">
          <div className="section-header">
            <h3><span className="icon">✨</span> About Pranjal</h3>
          </div>
          <div className="about-content">
            <p>{biodataData.about}</p>
          </div>
        </Section>

        {/* Family Section */}
        <Section className="family-section">
          <div className="section-header">
            <h3><span className="icon">👨‍👩‍👧‍👦</span> Family Background</h3>
          </div>

          <div className="family-grid">
            <div className="family-card">
              <div className="family-icon">👨</div>
              <div className="family-info">
                <span className="relation">Father</span>
                <span className="name">{biodataData.family.father.name}</span>
                <span className="occupation">{biodataData.family.father.occupation}</span>
                <span className="location">{biodataData.family.father.location}</span>
              </div>
            </div>

            <div className="family-card">
              <div className="family-icon">👩</div>
              <div className="family-info">
                <span className="relation">Mother</span>
                <span className="name">{biodataData.family.mother.name}</span>
                <span className="occupation">{biodataData.family.mother.occupation}</span>
                <span className="location">{biodataData.family.mother.location}</span>
              </div>
            </div>

            <div className="family-card">
              <div className="family-icon">👦</div>
              <div className="family-info">
                <span className="relation">Brother</span>
                <span className="name">{biodataData.family.brother.name}</span>
                <span className="occupation">{biodataData.family.brother.occupation}</span>
                <span className="location">{biodataData.family.brother.location}</span>
              </div>
            </div>
          </div>

          <div className="grandparents-summary">
            <h4>Grandparents</h4>
            <div className="grandparents-grid">
              <div className="grandparent-item">
                <span className="side">Paternal</span>
                <span className="names">{biodataData.family.grandparents.paternal}</span>
              </div>
              <div className="grandparent-item">
                <span className="side">Maternal</span>
                <span className="names">{biodataData.family.grandparents.maternal}</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Astrological Details */}
        <Section className="astro-section">
          <div className="section-header">
            <h3><span className="icon">⭐</span> Astrological Details</h3>
          </div>
          <div className="astro-container">
            <div className="astro-details">
              <div className="astro-item">
                <span className="label">Rashi (Moon Sign)</span>
                <span className="value">{biodataData.astrology.rashi}</span>
              </div>
              <div className="astro-item">
                <span className="label">Nakshatra</span>
                <span className="value">{biodataData.astrology.nakshatra}</span>
              </div>
              <div className="astro-item">
                <span className="label">Gan</span>
                <span className="value">{biodataData.astrology.gan}</span>
              </div>
              <div className="astro-item">
                <span className="label">Manglik Status</span>
                <span className="value highlight">{biodataData.astrology.manglik}</span>
              </div>
              <div className="astro-item">
                <span className="label">Caste</span>
                <span className="value">{biodataData.astrology.caste}</span>
              </div>
              <div className="astro-item">
                <span className="label">Gotra</span>
                <span className="value">{biodataData.astrology.gotra}</span>
              </div>
            </div>
            <div className="kundli-container">
              <h4>लग्न कुण्डली</h4>
              <img
                src="./images/kundli.png"
                alt="Kundli"
                className="kundli-image"
                onClick={() => openLightbox('./images/kundli.png')}
              />
            </div>
          </div>
        </Section>

        {/* Photo Gallery */}
        <Section className="gallery-section">
          <div className="section-header">
            <h3><span className="icon">📸</span> Photo Gallery</h3>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item" onClick={() => openLightbox('./images/kurta-photo.jpg')}>
              <img src="./images/kurta-photo.jpg" alt="Pranjal in traditional kurta" />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('./images/profile.jpeg')}>
              <img src="./images/profile.jpeg" alt="Pranjal at Golden Bridge" />
            </div>
            <div className="gallery-item" onClick={() => openLightbox('./images/casual-photo.jpg')}>
              <img src="./images/casual-photo.jpg" alt="Pranjal casual" />
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section className="contact-section">
          <div className="section-header">
            <h3><span className="icon">📞</span> Contact Information</h3>
          </div>
          <div className="contact-grid">
            <a href={`tel:${biodataData.contact.father}`} className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-info">
                <span className="contact-label">Father</span>
                <span className="contact-value">{biodataData.contact.father}</span>
              </div>
            </a>
            <a href={`tel:${biodataData.contact.mother}`} className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-info">
                <span className="contact-label">Mother</span>
                <span className="contact-value">{biodataData.contact.mother}</span>
              </div>
            </a>
            <a href={`mailto:${biodataData.contact.email}`} className="contact-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <span className="contact-value">{biodataData.contact.email}</span>
              </div>
            </a>
          </div>
        </Section>

        {/* Footer */}
        <footer className="footer">
          <div className="decorative-divider">
            <span className="divider-ornament">✦</span>
          </div>

          <div className="decorative-border bottom"></div>
        </footer>
      </div>

      {/* Lightbox */}
      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  )
}

export default App
