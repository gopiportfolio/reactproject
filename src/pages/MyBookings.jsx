"use client"

import { useState, useEffect } from "react"
import { Container, Table, Button, Alert } from "react-bootstrap"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import PageBanner from "../components/PageBanner"

const MyBookings = () => {
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    setBookings(storedBookings)
  }, [])

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

  const handleDelete = (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      const updatedBookings = bookings.filter((b) => b.id !== bookingId)
      setBookings(updatedBookings)
      localStorage.setItem("bookings", JSON.stringify(updatedBookings))
      toast.success("Booking cancelled!")
    }
  }

  return (

    <>
    <PageBanner
      title="My Bookings"
    />
    
    <Container className="py-5">
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
    

      {bookings.length === 0 ? (
        <Alert variant="info" className="text-center scroll-section">
          You have no bookings yet.{" "}
          <a onClick={() => navigate("/Rooms")} className="alert-link" style={{ cursor: "pointer" }}>
            Explore rooms
          </a>
        </Alert>
      ) : (
        <div className="table-responsive fade-in ">
          <Table striped bordered hover>
            <thead className="table-primary">
              <tr>
                <th>Room</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Guests</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="align-middle">
                  <td className="fw-bold">{booking.roomName}</td>
                  <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                  <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                  <td>{booking.guests}</td>
                  <td className="text-primary fw-bold">₹{booking.totalPrice}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(booking.id)}>
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      <div className="mt-4 text-center scroll-section">
        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </Container>
    </>
  )
}

export default MyBookings
