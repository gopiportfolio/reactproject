"use client"

import { useState,useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { toast } from "react-toastify"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()


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



  const handleRegister = (e) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")

    if (users.find((u) => u.email === email)) {
      setError("Email already registered")
      return
    }

    users.push({ id: Date.now(), name, email, password })
    localStorage.setItem("users", JSON.stringify(users))
    toast.success("Registration successful! Please login.")
    navigate("/login")
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 scroll-section">

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


      <Card className="w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="mb-4 text-center">Register</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </Form.Group>
            <Button type="submit" className="w-100 mb-3">
              Register
            </Button>
          </Form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Register
