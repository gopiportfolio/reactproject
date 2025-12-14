"use client"

import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const styles = {
    footer: {
      backgroundColor: "#1a1a1a",
      color: "#e0e0e0",
      paddingTop: "40px",
      paddingBottom: "20px",
      marginTop: "80px",
      borderTop: "2px solid #0d6efd",
    },
    topSection: {
      marginBottom: "30px",
    },
    aboutSection: {
      marginBottom: "30px",
    },
    aboutText: {
      fontSize: "13px",
      color: "#b0b0b0",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    linksColumn: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "13px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    link: {
      color: "#b0b0b0",
      textDecoration: "none",
      fontSize: "12px",
      marginBottom: "8px",
      display: "block",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#0d6efd",
    },
    contactInfo: {
      fontSize: "12px",
      marginBottom: "8px",
      color: "#b0b0b0",
    },
    contactLabel: {
      color: "#ffffff",
      fontWeight: "600",
      display: "inline",
      marginRight: "5px",
    },
    socialLinks: {
      display: "flex",
      gap: "10px",
      marginTop: "12px",
    },
    socialLink: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      backgroundColor: "#2a2a2a",
      borderRadius: "50%",
      color: "#0d6efd",
      textDecoration: "none",
      transition: "all 0.3s ease",
      fontSize: "13px",
      fontWeight: "600",
      border: "1px solid #3a3a3a",
    },
    socialLinkHover: {
      backgroundColor: "#0d6efd",
      color: "#ffffff",
      transform: "translateY(-2px)",
    },
    divider: {
      borderTop: "1px solid #2a2a2a",
      marginTop: "20px",
      paddingTop: "15px",
    },
    copyright: {
      fontSize: "11px",
      color: "#808080",
      textAlign: "center",
      margin: "0",
    },
    legalLinks: {
      textAlign: "center",
      marginBottom: "10px",
      fontSize: "11px",
    },
  }

  return (
    <footer style={styles.footer}>
      <Container>
        {/* Top Section with About and Menu Links */}
        <Row style={styles.topSection}>
          {/* About Hotel */}
          <Col md={4} sm={6} style={styles.aboutSection}>
            <h6 style={styles.sectionTitle}>About HotelBook</h6>
            <p style={styles.aboutText}>
              Your premier destination for luxury hotel bookings. We connect travelers worldwide with premium
              accommodations and unforgettable experiences.
            </p>
            <div style={styles.socialLinks}>
              <a
                href="#"
                style={styles.socialLink}
                title="Facebook"
                onMouseEnter={(e) => Object.assign(e.target.style, styles.socialLinkHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.socialLink)}
              >
                f
              </a>
              <a
                href="#"
                style={styles.socialLink}
                title="Instagram"
                onMouseEnter={(e) => Object.assign(e.target.style, styles.socialLinkHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.socialLink)}
              >
                ig
              </a>
              <a
                href="#"
                style={styles.socialLink}
                title="Twitter"
                onMouseEnter={(e) => Object.assign(e.target.style, styles.socialLinkHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.socialLink)}
              >
                𝕏
              </a>
              <a
                href="#"
                style={styles.socialLink}
                title="YouTube"
                onMouseEnter={(e) => Object.assign(e.target.style, styles.socialLinkHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.socialLink)}
              >
                ▶
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} style={styles.linksColumn}>
            <h6 style={styles.sectionTitle}>Explore</h6>
            <ul style={styles.linkList}>
              <li>
                <Link
                  to="/rooms"
                  style={styles.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={styles.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  style={styles.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
                >
                  Offers
                </Link>
              </li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2} sm={6} style={styles.linksColumn}>
            <h6 style={styles.sectionTitle}>Support</h6>
            <ul style={styles.linkList}>
              <li>
                <Link
                  to="/contact"
                  style={styles.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
                >
                  Contact
                </Link>
              </li>
          
              <li>
                <a
                  href="/contact"
                  style={styles.link}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
                >
                  Help Center
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} sm={6} style={styles.linksColumn}>
            <h6 style={styles.sectionTitle}>Contact</h6>
            <div style={styles.contactInfo}>
              <span style={styles.contactLabel}>Phone:</span>
              7904805711
            </div>
            <div style={styles.contactInfo}>
              <span style={styles.contactLabel}>Email:</span>
             royalstay@gmail.com
            </div>
            <div style={styles.contactInfo}>
              <span style={styles.contactLabel}>Address:</span>
              No 11 B Block Kotturpuram
            </div>
          </Col>
        </Row>

        {/* Bottom Divider */}
        <div style={styles.divider}>
          {/* Legal Links */}
          <div style={styles.legalLinks}>
            <a
              href="#"
              style={{ ...styles.link, display: "inline-block", marginRight: "20px", marginBottom: "0" }}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, { ...styles.link, marginRight: "20px", marginBottom: "0" })
              }
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ ...styles.link, display: "inline-block", marginRight: "20px", marginBottom: "0" }}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
              onMouseLeave={(e) =>
                Object.assign(e.target.style, { ...styles.link, marginRight: "20px", marginBottom: "0" })
              }
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{ ...styles.link, display: "inline-block", marginBottom: "0" }}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, { ...styles.link, marginBottom: "0" })}
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <p style={styles.copyright}>© {currentYear} Royal Stay. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
