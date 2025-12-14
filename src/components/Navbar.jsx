"use client"

import { useState, useEffect } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { toast } from "react-toastify"

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"))
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("user"))
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  useEffect(() => {
    const authPage = location.pathname === "/login" || location.pathname === "/register"
    setIsDisabled(authPage)
  }, [location.pathname])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    toast.success("Logged out successfully.")
    navigate("/home")
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/home"
          className="fw-bold text-primary"
          style={{
            textDecoration: "none",
            transition: "all 0.3s ease",
            transform: "scale(1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"
            e.currentTarget.style.opacity = "0.8"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.opacity = "1"
          }}
        >
          Royal Stay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/home"
              className={isActive("/home")}
              onClick={(e) => isDisabled && e.preventDefault()}
              style={{
                pointerEvents: isDisabled ? "none" : "auto",
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer",
                textDecoration: "none",
                color: isActive("/home") ? "#0d6efd" : "#212529",
                transition: "all 0.3s ease",
                borderBottom: isActive("/home") ? "2px solid #0d6efd" : "none",
                paddingBottom: "5px",
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.color = "#0d6efd"
                  e.target.style.borderBottom = "2px solid #0d6efd"
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.color = isActive("/home") ? "#0d6efd" : "#212529"
                  e.target.style.borderBottom = isActive("/home") ? "2px solid #0d6efd" : "none"
                }
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={isActive("/about")}
              onClick={(e) => isDisabled && e.preventDefault()}
              style={{
                pointerEvents: isDisabled ? "none" : "auto",
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer",
                textDecoration: "none",
                color: isActive("/about") ? "#0d6efd" : "#212529",
                transition: "all 0.3s ease",
                borderBottom: isActive("/about") ? "2px solid #0d6efd" : "none",
                paddingBottom: "5px",
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.color = "#0d6efd"
                  e.target.style.borderBottom = "2px solid #0d6efd"
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.color = isActive("/about") ? "#0d6efd" : "#212529"
                  e.target.style.borderBottom = isActive("/about") ? "2px solid #0d6efd" : "none"
                }
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/rooms"
              className={isActive("/rooms")}
              onClick={(e) => isDisabled && e.preventDefault()}
              style={{
                pointerEvents: isDisabled ? "none" : "auto",
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer",
                textDecoration: "none",
                color: isActive("/rooms") ? "#0d6efd" : "#212529",
                transition: "all 0.3s ease",
                borderBottom: isActive("/rooms") ? "2px solid #0d6efd" : "none",
                paddingBottom: "5px",
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.color = "#0d6efd"
                  e.target.style.borderBottom = "2px solid #0d6efd"
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.color = isActive("/rooms") ? "#0d6efd" : "#212529"
                  e.target.style.borderBottom = isActive("/rooms") ? "2px solid #0d6efd" : "none"
                }
              }}
            >
              Rooms
            </Nav.Link>




            
            <Nav.Link
              as={Link}
              to="/contact"
              className={isActive("/contact")}
              onClick={(e) => isDisabled && e.preventDefault()}
              style={{
                pointerEvents: isDisabled ? "none" : "auto",
                opacity: isDisabled ? 0.5 : 1,
                cursor: isDisabled ? "not-allowed" : "pointer",
                textDecoration: "none",
                color: isActive("/contact") ? "#0d6efd" : "#212529",
                transition: "all 0.3s ease",
                borderBottom: isActive("/contact") ? "2px solid #0d6efd" : "none",
                paddingBottom: "5px",
              }}
              onMouseEnter={(e) => {
                if (!isDisabled) {
                  e.target.style.color = "#0d6efd"
                  e.target.style.borderBottom = "2px solid #0d6efd"
                }
              }}
              onMouseLeave={(e) => {
                if (!isDisabled) {
                  e.target.style.color = isActive("/contact") ? "#0d6efd" : "#212529"
                  e.target.style.borderBottom = isActive("/contact") ? "2px solid #0d6efd" : "none"
                }
              }}
            >
              Contact Us
            </Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/my-bookings"
                  className={isActive("/my-bookings")}
                  onClick={(e) => isDisabled && e.preventDefault()}
                  style={{
                    pointerEvents: isDisabled ? "none" : "auto",
                    opacity: isDisabled ? 0.5 : 1,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    textDecoration: "none",
                    color: isActive("/my-bookings") ? "#0d6efd" : "#212529",
                    transition: "all 0.3s ease",
                    borderBottom: isActive("/my-bookings") ? "2px solid #0d6efd" : "none",
                    paddingBottom: "5px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isDisabled) {
                      e.target.style.color = "#0d6efd"
                      e.target.style.borderBottom = "2px solid #0d6efd"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isDisabled) {
                      e.target.style.color = isActive("/my-bookings") ? "#0d6efd" : "#212529"
                      e.target.style.borderBottom = isActive("/my-bookings") ? "2px solid #0d6efd" : "none"
                    }
                  }}
                >
                  My Bookings
                </Nav.Link>
                <Button variant="outline-info" size="sm" onClick={handleLogout} className="ms-2" disabled={isDisabled}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => navigate("/login")}
                  className="ms-2"
                  disabled={isDisabled}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/register")}
                  className="ms-2"
                  disabled={isDisabled}
                >
                  Register
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
