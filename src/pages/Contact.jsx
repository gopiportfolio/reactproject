"use client"
import { useState,useEffect} from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { toast } from "react-toastify"
import PageBanner from "../components/PageBanner"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const CONTACT_INFO = [
    { icon: "📞", title: "Phone", value: "7904805711", subtitle: "Available 24/7" },
    { icon: "📧", title: "Email", value: "royalstay@gmail.com", subtitle: "Response within 24hrs" },
    { icon: "📍", title: "Address", value: "No 11 B Block Kotturpuram", subtitle: "Chennai TamilNadu" },
    { icon: "🕐", title: "Hours", value: "Mon - Fri: 9AM - 6PM", subtitle: "EST Timezone" },
  ]

  const styles = {
    container: { paddingTop: "3rem", paddingBottom: "3rem" },
    heroSection: {
      textAlign: "center",
      marginBottom: "3rem",
      paddingBottom: "2rem",
      borderBottom: "1px solid #e9ecef",
    },


mapContainer: {
  width: "100%",
  height: "400px",
  marginTop: "3rem",
  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  overflow: "hidden",
},




    heroTitle: { fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem", color: "#212529" },
    heroSubtitle: { fontSize: "1rem", color: "#6c757d", maxWidth: "600px", margin: "0 auto" },
    formCard: {
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      padding: "2rem",
      borderRadius: "8px",
    },
    formTitle: { fontSize: "1.3rem", fontWeight: "700", marginBottom: "1.5rem", color: "#212529" },
    contactCard: {
      border: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      height: "100%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      textAlign: "center",
    },
    contactCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.12)",
    },
    icon: { fontSize: "2rem", marginBottom: "1rem", color: "#0d6efd" },
    cardTitle: { fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem", color: "#212529" },
    cardValue: { fontSize: "0.95rem", color: "#6c757d", marginBottom: "0.25rem" },
    cardSubtitle: { fontSize: "0.85rem", color: "#adb5bd" },
    mapContainer: {
      marginTop: "3rem",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      height: "350px",
      backgroundColor: "#f0f7ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#6c757d",
      fontSize: "1rem",
    },
  }
 useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section")

    // Show sections already visible on load
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }
    toast.success("Message sent successfully! We will contact you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <><PageBanner className="scroll-section"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible.
"
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

  

     

      {/* Main Content */}
      <Row className="g-4 scroll-section">
        {/* Contact Form */}
        <Col lg={6}>
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>Send us a Message</h3>
            <Form onSubmit={handleSubmit} action="https://formspree.io/f/myzrjzwe" method="POST">
              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "600", color: "#212529", marginBottom: "0.5rem" }}>
                  Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "600", color: "#212529", marginBottom: "0.5rem" }}>
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Mail"
                  style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "600", color: "#212529", marginBottom: "0.5rem" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ fontWeight: "600", color: "#212529", marginBottom: "0.5rem" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message here..."
                  style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #dee2e6" }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ padding: "0.75rem", fontWeight: "600" }}
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>

        {/* Contact Information */}
        <Col lg={6}>
          <Row className="g-4">
            {CONTACT_INFO.map((info, idx) => (
              <Col key={idx} md={6}>
                <Card
                  style={styles.contactCard}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.contactCardHover)}
                  onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.contactCard)}
                >
                  <Card.Body>
                    <div style={styles.icon}>{info.icon}</div>
                    <h5 style={styles.cardTitle}>{info.title}</h5>
                    <p style={styles.cardValue}>{info.value}</p>
                    <p style={styles.cardSubtitle}>{info.subtitle}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Map Section */}
<div style={styles.mapContainer} className="scroll-section">
  <iframe
    title="Royal Stay Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.347842529235!2d80.24591287394307!3d13.013507213960397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670038de98ad%3A0x1d135609f8b73594!2sKotturpuram%20railway%20station%20entry!5e0!3m2!1sen!2sin!4v1765706743291!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </Container>
    </>
  )
}

export default Contact
