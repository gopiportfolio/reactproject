"use client"

import { useState,useEffect} from "react"
import { useNavigate, Link } from "react-router-dom"
import { Container, Form, Button, Card, Alert } from "react-bootstrap"
import { toast } from "react-toastify"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill all fields")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem("user", JSON.stringify({ email: user.email, name: user.name }))
      toast.success("Login successful!")
      navigate("/home")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    
    <Container className="d-flex justify-content-center align-items-center scroll-section" style={{ minHeight: "70vh" }}>
      
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
          <h2 className="mb-4 text-center">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
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
            <Button type="submit" className="w-100 mb-3">
              Login
            </Button>
          </Form>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
