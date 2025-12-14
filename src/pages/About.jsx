"use client"

import { Container, Row, Col, Card } from "react-bootstrap"
import { useEffect } from "react"
import PageBanner from "../components/PageBanner"
import aboutImg from "../assets/images/about.jpeg"



const About = () => {
  const VALUES = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To provide accessible, affordable, and exceptional hotel booking experiences for travelers worldwide.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "To become the most trusted and innovative hotel booking platform globally.",
    },
    {
      icon: "💎",
      title: "Our Values",
      description: "Integrity, innovation, customer-centricity, and excellence guide everything we do.",
    },
  ]

  const STORY_CARDS = [
    {
      title: "Our Beginnings",
      year: "2015",
      icon: "🚀",
      description:
        "Founded with a vision to revolutionize hotel bookings, we started small with a team of 5 passionate travelers who saw a gap in the market for hassle-free hotel reservations.",
    },
    {
      title: "Rapid Growth",
      year: "2017-2019",
      icon: "📈",
      description:
        "Expanded to 500+ hotel partnerships and processed over 1 million bookings. Our platform became the go-to choice for travelers seeking convenience and great deals.",
    },
    {
      title: "Service Philosophy",
      year: "2020-2022",
      icon: "🤝",
      description:
        "Focused on customer experience excellence. Introduced 24/7 support, AI-powered recommendations, and mobile app. Won multiple industry awards for innovation and service.",
    },
    {
      title: "Future Vision",
      year: "2024+",
      icon: "🌟",
      description:
        "Continuing innovation with blockchain verification, sustainable travel options, and expanded international presence. Committed to supporting eco-friendly hotels globally.",
    },
  ]

  const WHY_CHOOSE_US = [
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We match any lower price you find, ensuring you always get the best deal.",
    },
    {
      icon: "🔒",
      title: "Secure Booking",
      description: "Your personal and payment information is protected with industry-leading encryption.",
    },
    {
      icon: "⚡",
      title: "Instant Confirmation",
      description: "Receive booking confirmation within seconds with detailed reservation information.",
    },
    {
      icon: "🛡️",
      title: "Buyer Protection",
      description: "Full refund guarantee if your hotel doesn't meet expectations or cancels on you.",
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Access to 1000+ hotels across 150+ countries worldwide.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Our dedicated team is always ready to help with any questions or concerns.",
    },
  ]

  const STATS = [
    { value: "50K+", label: "Happy Guests" },
    { value: "1000+", label: "Hotels" },
    { value: "150+", label: "Countries" },
    { value: "4.8/5", label: "Avg Rating" },
  ]


  
  useEffect(() => {
  const sections = document.querySelectorAll(".scroll-section")

  // ✅ Show sections already visible on load
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      section.classList.add("show")
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    },
    { threshold: 0.15 }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}, [])




  const styles = {
    container: { paddingTop: "3rem", paddingBottom: "3rem" },
aboutImage: {
  width: "100%",
  height: "100%",
  maxHeight: "420px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
},

 banner: {
      width: "100%",
      height: "320px",
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/banner/about-banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "3rem",
    },
    bannerTitle: {
      color: "#fff",
      fontSize: "2.8rem",
      fontWeight: "700",
    },



    heroSection: {
      textAlign: "center",
      marginBottom: "3rem",
      paddingBottom: "2rem",
      borderBottom: "1px solid #e9ecef",
    },
    heroTitle: { fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem", color: "#212529" },
    heroSubtitle: { fontSize: "1rem", color: "#6c757d", maxWidth: "600px", margin: "0 auto" },
    section: { marginBottom: "4rem" },
    sectionTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      marginBottom: "2rem",
      textAlign: "center",
      color: "#212529",
    },
    valueCard: {
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      height: "100%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    valueCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    },
    icon: { fontSize: "2.5rem", marginBottom: "1rem" },
    storyCard: {
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      height: "100%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      borderTop: "4px solid #0d6efd",
    },
    storyCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    },
    storyIcon: { fontSize: "2rem", marginBottom: "0.5rem" },
    storyYear: { fontSize: "0.9rem", color: "#0d6efd", fontWeight: "700", marginBottom: "0.5rem" },
    whyChooseCard: {
      border: "1px solid #e9ecef",
      padding: "2rem",
      textAlign: "center",
      height: "100%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      borderRadius: "8px",
    },
    whyChooseCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    },
    whyChooseIcon: { fontSize: "2rem", marginBottom: "1rem" },
    statCard: {
      textAlign: "center",
      padding: "1.5rem",
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
    },
    statValue: { fontSize: "2rem", fontWeight: "700", color: "#0d6efd", marginBottom: "0.5rem" },
    statLabel: { color: "#6c757d", fontSize: "0.9rem" },
  }

  return (
    
<>
<PageBanner
  title="About Us"
  subtitle="Your trusted partner for hotel bookings worldwide"
/>


    
    <Container style={styles.container}>
      <style>{`
  .scroll-section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
  }

  .scroll-section.show {
    opacity: 1;
    transform: translateY(0);
  }
`}</style>



      {/* Hero Section */}
     {/* About Section */}
<div style={styles.section} className="scroll-section">
  <Row className="align-items-center g-4">
    
    {/* Left Image */}
    <Col lg={6} md={12}>
      <img
    src={aboutImg}
    alt="About Royal Stay"
    style={styles.aboutImage}
  />
    </Col>

    {/* Right Content */}
    <Col lg={6} md={12}>
    <div>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "700",textAlign: "center", }}>
        About Royal Stay..
      </h2></div>
<div>
      <p style={{ color: "#6c757d", fontSize: "1rem", lineHeight: "1.7", textAlign: "justify",}}>
        Royal Stay is your trusted partner for hotel bookings worldwide. For over a decade,
        we’ve helped travelers discover comfortable, affordable, and memorable stays.Our platform combines cutting-edge technology with customer-first values to deliver
        seamless booking experiences, secure payments, and unmatched support.Our platform combines cutting-edge technology with customer-first values to deliver seamless 
        booking experiences, secure payments, and unmatched support. From budget-friendly stays to luxury hotels, Royal Stay offers carefully curated options 
        to suit every travel need.We believe travel should be stress-free and transparent. That’s why we provide real guest reviews, instant booking confirmations, 
        and 24/7 customer assistance—so you can plan your journey with complete confidence.With a growing global network of trusted hotel partners and a commitment 
        to innovation, Royal Stay continues to redefine how people experience travel. Wherever your journey takes you, we’re here to make every stay feel just right.
      </p>
      </div>
    </Col>

  </Row>
</div>

      {/* Mission, Vision, Values */}
      <div style={styles.section} className="scroll-section"> 
        <h2 style={styles.sectionTitle}>Our Purpose</h2>
        <Row className="g-4">
          {VALUES.map((value, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                style={styles.valueCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.valueCardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.valueCard)}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <div style={styles.icon}>{value.icon}</div>
                  <Card.Title style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>{value.title}</Card.Title>
                  <Card.Text style={{ color: "#6c757d", fontSize: "0.95rem", marginBottom: 0 }}>
                    {value.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Story Section with Cards */}
      <div style={styles.section} className="scroll-section">
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <Row className="g-4">
          {STORY_CARDS.map((story, idx) => (
            <Col key={idx} md={6} lg={3}>
              <Card
                style={styles.storyCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.storyCardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.storyCard)}
              >
                <Card.Body>
                  <div style={styles.storyIcon}>{story.icon}</div>
                  <div style={styles.storyYear}>{story.year}</div>
                  <Card.Title style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{story.title}</Card.Title>
                  <Card.Text style={{ color: "#6c757d", fontSize: "0.85rem", marginBottom: 0 }}>
                    {story.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Why Choose Us */}
      <div style={styles.section} className="scroll-section">
        <h2 style={styles.sectionTitle}>Why Choose HotelBook</h2>
        <Row className="g-4">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <Col key={idx} md={6} lg={4}>
              <div
                style={styles.whyChooseCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.whyChooseCardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.whyChooseCard)}
              >
                <div style={styles.whyChooseIcon}>{feature.icon}</div>
                <h5 style={{ marginBottom: "0.5rem", fontWeight: "700" }}>{feature.title}</h5>
                <p style={{ color: "#6c757d", fontSize: "0.9rem", marginBottom: 0 }}>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Statistics */}
      <div style={styles.section} className="scroll-section">
        <h2 style={styles.sectionTitle}>By The Numbers</h2>
        <Row className="g-4">
          {STATS.map((stat, idx) => (
            <Col key={idx} md={6} lg={3}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    </>
  )
}

export default About
