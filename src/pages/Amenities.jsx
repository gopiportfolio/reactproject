"use client"
import { Container, Row, Col, Card } from "react-bootstrap"

const Amenities = () => {
  const AMENITIES = [
    { icon: "🏊", title: "Swimming Pool", description: "Olympic-size heated pool with spa facilities" },
    { icon: "🍽️", title: "Restaurant & Bar", description: "Fine dining with international cuisine" },
    { icon: "💪", title: "Fitness Center", description: "State-of-the-art gym with trainers" },
    { icon: "🧘", title: "Spa & Wellness", description: "Full-service spa with treatments" },
    { icon: "🎾", title: "Sports Courts", description: "Tennis and basketball courts" },
    { icon: "📚", title: "Business Center", description: "High-speed internet and meeting rooms" },
    { icon: "🛏️", title: "Luxury Rooms", description: "Elegantly designed rooms with premium amenities" },
    { icon: "🎵", title: "Entertainment", description: "Live music and cultural events" },
    { icon: "🚗", title: "Free Parking", description: "Complimentary valet services" },
    { icon: "🍷", title: "Wine Bar", description: "Curated wines and cocktails" },
    { icon: "📱", title: "24/7 Concierge", description: "Around-the-clock service" },
    { icon: "🌳", title: "Garden & Patio", description: "Lush gardens with outdoor seating" },
  ]

  const styles = {
    container: { paddingTop: "3rem", paddingBottom: "3rem" },
    heroSection: {
      textAlign: "center",
      marginBottom: "3rem",
      paddingBottom: "2rem",
      borderBottom: "1px solid #e9ecef",
    },
    heroTitle: { fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem", color: "#212529" },
    heroSubtitle: { fontSize: "1rem", color: "#6c757d", maxWidth: "600px", margin: "0 auto" },
    card: {
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      height: "100%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    },
    icon: { fontSize: "2.5rem", marginBottom: "1rem", display: "block" },
    title: { fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem", color: "#212529" },
    description: { color: "#6c757d", fontSize: "0.9rem", marginBottom: 0 },
  }

  return (
    <>
      <Container style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <h1 style={styles.heroTitle}>Our Amenities</h1>
          <p style={styles.heroSubtitle}>
            Experience world-class facilities and services designed for your comfort and convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <Row className="g-4">
          {AMENITIES.map((amenity, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                style={styles.card}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
              >
                <Card.Body>
                  <div style={styles.icon}>{amenity.icon}</div>
                  <Card.Title style={styles.title}>{amenity.title}</Card.Title>
                  <Card.Text style={styles.description}>{amenity.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Amenities
