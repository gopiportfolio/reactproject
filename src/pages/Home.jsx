"use client"
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import standard from "../assets/images/standard.jpg"
import delux from "../assets/images/delux.jpg"
import suite from "../assets/images/suite.jpg"
import aboutImg from "../assets/images/about.jpeg"


const HERO_SLIDES = [
  {
    id: 1,
    title: "Welcome to HotelBook",
    subtitle: "Find your perfect stay at the best prices",
    image: banner1,
  },
  {
    id: 2,
    title: "Luxury Awaits",
    subtitle: "Experience world-class comfort and service",
    image: banner2
  },
  {
    id: 3,
    title: "Book Smart, Travel Easy",
    subtitle: "Secure your rooms with exclusive deals",
    image: banner3
  },
]

const SPECIAL_OFFERS = [
  {
    id: 1,
    title: "Weekend Getaway Offer",
    description: "Friday to Sunday stay",
    discount: 10,
    discountLabel: "10% OFF",
    icon: "🌴",
  },
  {
    id: 2,
    title: "Festive Season Discount",
    description: "Celebrate with us",
    discount: 15,
    discountLabel: "15% OFF",
    icon: "🎉",
  },
  {
    id: 3,
    title: "Long Stay Saver",
    description: "7+ nights minimum",
    discount: 20,
    discountLabel: "20% OFF",
    icon: "🗓️",
  },
  {
    id: 4,
    title: "Couple Package Deal",
    description: "Perfect romantic escape",
    discount: 12,
    discountLabel: "12% OFF",
    icon: "💑",
  },
]

const KEY_AMENITIES = [
  {
    id: 1,
    icon: "📶",
    title: "Free Wi-Fi",
    description: "High-speed internet in all rooms",
  },
  {
    id: 2,
    icon: "🏊",
    title: "Swimming Pool",
    description: "Olympic-size outdoor pool",
  },
  {
    id: 3,
    icon: "🍽️",
    title: "Restaurant",
    description: "24/7 dining and room service",
  },
  {
    id: 4,
    icon: "🛎️",
    title: "Concierge Service",
    description: "Expert travel assistance available",
  },
]

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Amazing experience! The staff was incredibly helpful and the rooms were spotless. Highly recommend!",
    title: "Perfect Vacation",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4.8,
    comment: "Great location, comfortable beds, and excellent breakfast. Will definitely book again.",
    title: "Wonderful Stay",
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 5,
    comment: "Best hotel experience ever. The views were breathtaking and service was exceptional.",
    title: "Highly Satisfied",
  },
  {
    id: 4,
    name: "David Martinez",
    rating: 4.7,
    comment: "Great value for money. Clean rooms, friendly staff, and convenient location.",
    title: "Very Good",
  },
]

const ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    price: 4000,
    image:standard,
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
]

const styles = {
  hero: {
    backgroundColor: "#f8f9fa",
    padding: "4rem 0",
    marginBottom: "3rem",
    borderBottom: "1px solid #e9ecef",
  },
  heroSection: {
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    marginBottom: "3rem",
     transition: "background-image 1s ease-in-out",
  },

  heroContent: {
    zIndex: 2,
    position: "relative",
    animation: "fadeIn 1s ease-in",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  heroSubtitle: {
    fontSize: "1.3rem",
    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },
  slideDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.5)",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  slideDotActive: {
    backgroundColor: "white",
  },
  aboutSection: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    marginBottom: "4rem",
    padding: "3rem",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
  },
  aboutImage: {
      flex: 1,
  height: "350px",
  borderRadius: "8px",
  backgroundImage: `url(${aboutImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  },
  aboutContent: {
    flex: 1,
  },
  aboutTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#212529",
  },
  aboutText: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#6c757d",
    marginBottom: "1.5rem",
     textAlign: "justify",
  },
  amenityCard: {
    border: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    textAlign: "center",
    padding: "2rem",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  amenityCardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
  },
  amenityIcon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  reviewCard: {
    border: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    padding: "2rem",
    height: "100%",
    borderLeft: "4px solid #0d6efd",
  },
  reviewRating: {
    fontSize: "1rem",
    color: "#ffc107",
    marginBottom: "1rem",
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
  },
  offerCard: {
    border: "1px solid #e9ecef",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
  },
  offerCardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
  },
  discountBadge: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#28a745",
  },
  section: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#212529",
  },






  
}

const Home = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [fade, setFade] = useState(true)


useEffect(() => {
  const sections = document.querySelectorAll(".scroll-section")

  // ✅ Immediately show sections already in viewport
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
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px", // ✅ IMPORTANT
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}, [])


  useEffect(() => {
  const heroInterval = setInterval(() => {
    setFade(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
      setFade(true)
    }, 500)
  }, 5000)

  return () => clearInterval(heroInterval)
}, [])

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length)
    }, 4000)
    return () => clearInterval(reviewInterval)
  }, [])

  const getVisibleReviews = () => {
    const reviews = []
    for (let i = 0; i < 3; i++) {
      reviews.push(CUSTOMER_REVIEWS[(currentReviewIndex + i) % CUSTOMER_REVIEWS.length])
    }
    return reviews
  }

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer)
    localStorage.setItem("selectedOffer", JSON.stringify(offer))
    navigate("/rooms")
  }

  return (
    <>
      <div
        style={{
          ...styles.heroSection,
    backgroundImage: `url(${HERO_SLIDES[currentSlide].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     opacity: fade ? 1 : 0,
    transition: "opacity 0.8s ease-in-out",
        }}
      >
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{HERO_SLIDES[currentSlide].title}</h1>
          <p style={styles.heroSubtitle}>{HERO_SLIDES[currentSlide].subtitle}</p>
          <div style={{ marginTop: "2rem" }}>
            {HERO_SLIDES.map((_, idx) => (
              <span
                key={idx}
                style={{
                  ...styles.slideDot,
                  ...(idx === currentSlide ? styles.slideDotActive : {}),
                }}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <style>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

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


      <Container>
         <Row className="align-items-center g-4">
  <Col lg={6} md={12}>
    <div
      style={{
        backgroundImage: `url(${aboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "320px",
        borderRadius: "8px",
      }}
    />
  </Col>

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
        booking experiences, secure payments, and unmatched support.</p>
      </div>

<Button
                variant="primary"
                onClick={() => navigate("/about")}
                style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
              >
                View More About Us
              </Button>

  </Col>
</Row>


        <div style={styles.section} className="scroll-section">
          <h2 style={styles.sectionTitle}>Our Key Amenities</h2>
          <Row className="g-4">
            {KEY_AMENITIES.map((amenity) => (
              <Col key={amenity.id} md={6} lg={3}>
                <Card
                  style={styles.amenityCard}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.amenityCardHover)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.amenityCard)}
                >
                  <div style={styles.amenityIcon}>{amenity.icon}</div>
                  <Card.Title style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{amenity.title}</Card.Title>
                  <Card.Text style={{ color: "#6c757d", fontSize: "0.875rem", marginBottom: 0 }}>
                    {amenity.description}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Rooms */}
        <div style={styles.section} className="scroll-section"> 
          <h2 style={styles.sectionTitle}>Featured Rooms</h2>
          <Row className="g-4">
            {ROOMS.slice(0, 3).map((room) => (
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
                      <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0d6efd" }}>${room.price}</span>
                      <Button variant="outline-primary" size="sm" onClick={() => navigate(`/room/${room.id}`)}>
                        View
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              variant="primary"
              onClick={() => navigate("/rooms")}
              style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            >
              View All Rooms
            </Button>
          </div>
        </div>

        <div style={styles.section} className="scroll-section">
          <h2 style={styles.sectionTitle}>Special Offers</h2>
          <Row className="g-4">
            {SPECIAL_OFFERS.map((offer) => (
              <Col key={offer.id} md={6} lg={3}>
                <Card
                  style={{
                    ...styles.offerCard,
                    cursor: "pointer",
                    border: selectedOffer?.id === offer.id ? "2px solid #0d6efd" : "1px solid #e9ecef",
                    backgroundColor: selectedOffer?.id === offer.id ? "#f0f6ff" : "white",
                  }}
                  onClick={() => handleOfferSelect(offer)}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.offerCardHover)}
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, {
                      ...styles.offerCard,
                      cursor: "pointer",
                      border: selectedOffer?.id === offer.id ? "2px solid #0d6efd" : "1px solid #e9ecef",
                      backgroundColor: selectedOffer?.id === offer.id ? "#f0f6ff" : "white",
                    })
                  }
                >
                  <Card.Body>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{offer.icon}</div>
                    <Card.Title style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{offer.title}</Card.Title>
                    <p style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "0.875rem" }}>{offer.description}</p>
                    <div style={styles.discountBadge}>{offer.discountLabel}</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div style={styles.section} className="scroll-section">
          <h2 style={styles.sectionTitle}>Guest Reviews</h2>
          <Row className="g-4">
            {getVisibleReviews().map((review) => (
              <Col key={review.id} md={6} lg={4}>
                <Card style={styles.reviewCard}>
                  <Card.Body>
                    <div style={styles.reviewRating}>{"⭐".repeat(Math.round(review.rating))}</div>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                      {review.title}
                    </Card.Subtitle>
                    <Card.Text style={{ color: "#6c757d", marginBottom: "1rem", fontSize: "0.95rem" }}>
                      "{review.comment}"
                    </Card.Text>
                    <small style={{ color: "#0d6efd", fontWeight: "600" }}>— {review.name}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {CUSTOMER_REVIEWS.map((_, idx) => (
              <span
                key={idx}
                style={{
                  ...styles.slideDot,
                  ...(idx === currentReviewIndex ? styles.slideDotActive : {}),
                  margin: "0 5px",
                }}
                onClick={() => setCurrentReviewIndex(idx)}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
