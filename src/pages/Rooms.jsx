"use client"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import standard from "../assets/images/standard.jpg"
import delux from "../assets/images/delux.jpg"
import suite from "../assets/images/suite.jpg"
import family from "../assets/images/family.jpg"
import budget from "../assets/images/budget.jpg"
import ocean from "../assets/images/ocean.jpg"
import { useEffect } from "react"
import PageBanner from "../components/PageBanner"

const ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    price: 4000,
    image: standard,
    description: "Comfortable room with basic amenities",
    rating: 4.2,
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: 6000,
    image: delux,
    description: "Spacious room with premium furnishings",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Suite",
    price: 8000,
    image: suite,
    description: "Luxury suite with separate living area",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Family Room",
    price: 10000,
    image: family,
    description: "Spacious room for families",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Budget Room",
    price: 2500,
    image: budget,
    description: "Economy room, perfect for budget travelers",
    rating: 3.9,
  },
  {
    id: 6,
    name: "Ocean View Room",
    price: 18000,
    image: ocean,
    description: "Room with stunning ocean view",
    rating: 4.9,
  },
]

const styles = {
  hero: {
    backgroundColor: "#f8f9fa",
    padding: "4rem 0",
    marginBottom: "3rem",
    borderBottom: "1px solid #e9ecef",
  },
  heroContent: {
    textAlign: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#212529",
  },
  heroSubtitle: {
    fontSize: "1.1rem",
    color: "#6c757d",
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#212529",
  },
  roomCard: {
    border: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  roomCardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
  }
}

const Rooms = () => {
  const navigate = useNavigate()

   useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section")

    // Show already visible sections
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

  return (
    <>
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

      <PageBanner
        title="Our Rooms"
        subtitle="Choose from our wide selection of comfortable and luxurious rooms"
      />
     

      <Container style={{ paddingTop: "2rem", paddingBottom: "4rem" }} className="scroll-section"> 
        <Row className="g-4">
          {ROOMS.map((room) => (
            <Col key={room.id} md={6} lg={4}>
              <Card
                style={styles.roomCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.roomCardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.roomCard)}
              >
                <Card.Img
                  variant="top"
                  src={room.image}
                  alt={room.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <Card.Title style={{ marginBottom: 0, fontSize: "1.1rem" }}>{room.name}</Card.Title>
                    <Badge bg="light" text="dark">
                      ⭐ {room.rating}
                    </Badge>
                  </div>
                  <p style={{ color: "#6c757d", fontSize: "0.875rem", marginBottom: "1rem" }}>{room.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0d6efd" }}>₹{room.price}</span>
                    <div>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => navigate(`/room/${room.id}`)}
                        style={{ marginRight: "0.5rem" }}
                      >
                        Details
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => navigate(`/booking/${room.id}`)}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Rooms
