"use client"

import { useState, useMemo, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Form, Button, Card, Alert, Modal } from "react-bootstrap"
import { toast } from "react-toastify"

const ROOMS = [
  { id: 1, name: "Standard Room", price: 4000 },
  { id: 2, name: "Deluxe Room", price: 6000 },
  { id: 3, name: "Suite", price: 8000 },
  { id: 4, name: "Family Room", price: 10000 },
  { id: 5, name: "Budget Room", price: 2500 },
  { id: 6, name: "Ocean View Room", price: 18000 },
]

const SPECIAL_OFFERS = [
  { id: 1, title: "Weekend Getaway Offer", description: "Friday to Sunday stay", discount: 10, icon: "🌴" },
  { id: 2, title: "Festive Season Discount", description: "Celebrate with us", discount: 15, icon: "🎉" },
  { id: 3, title: "Long Stay Saver", description: "7+ nights minimum", discount: 20, icon: "🗓️" },
  { id: 4, title: "Couple Package Deal", description: "Perfect romantic escape", discount: 12, icon: "💑" },
]

const Booking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = ROOMS.find((r) => r.id === Number(id))
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("1")
  const [error, setError] = useState("")
  const [showConflictModal, setShowConflictModal] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState(null)

  useEffect(() => {
    const storedOffer = localStorage.getItem("selectedOffer")
    if (storedOffer) {
      setSelectedOffer(JSON.parse(storedOffer))
    }
  }, [])

  const bookedDates = useMemo(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    const roomBookings = bookings.filter((b) => b.roomId === room.id)
    const dates = new Set()

    roomBookings.forEach((booking) => {
      const start = new Date(booking.checkIn)
      const end = new Date(booking.checkOut)

      for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
        dates.add(d.toISOString().split("T")[0])
      }
    })

    return dates
  }, [room.id])

  if (!room) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Room not found!</Alert>
      </Container>
    )
  }

  const checkForConflict = (checkInDate, checkOutDate) => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    const incomingStart = new Date(checkInDate)
    const incomingEnd = new Date(checkOutDate)

    return bookings.some((booking) => {
      if (booking.roomId !== room.id) return false

      const existingStart = new Date(booking.checkIn)
      const existingEnd = new Date(booking.checkOut)

      return incomingStart < existingEnd && incomingEnd > existingStart
    })
  }

  const isDateBooked = (dateString) => {
    return bookedDates.has(dateString)
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  const baseTotal = calculateNights() * room.price

  const discountAmount = selectedOffer ? Math.round((baseTotal * selectedOffer.discount) / 100) : 0

  const finalTotal = baseTotal - discountAmount

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer)
    localStorage.setItem("selectedOffer", JSON.stringify(offer))
    toast.success("Offer applied successfully!")
  }

  const handleClearOffer = () => {
    setSelectedOffer(null)
    localStorage.removeItem("selectedOffer")
  }

  const handleBooking = (e) => {
    e.preventDefault()
    setError("")

    if (!checkIn || !checkOut || !guests) {
      setError("Please fill all fields")
      return
    }

    const start = new Date(checkIn)
    const end = new Date(checkOut)

    if (start >= end) {
      setError("Check-out date must be after check-in date")
      return
    }

    if (checkForConflict(checkIn, checkOut)) {
      setShowConflictModal(true)
      return
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]")

    const booking = {
      id: Date.now(),
      roomId: room.id,
      roomName: room.name,
      checkIn,
      checkOut,
      guests,
      basePrice: baseTotal,
      discountOffer: selectedOffer ? selectedOffer.title : "No Offer",
      discountPercentage: selectedOffer ? selectedOffer.discount : 0,
      discountAmount: discountAmount,
      totalPrice: finalTotal,
      userName: user.name,
    }

    bookings.push(booking)
    localStorage.setItem("bookings", JSON.stringify(bookings))

    if (selectedOffer) {
      toast.success("Booking completed with discount!")
    } else {
      toast.success("Booking confirmed!")
    }

    localStorage.removeItem("selectedOffer")
    navigate("/my-bookings")
  }

  return (
    <Container className="py-5">
      <div className="row justify-content-center fade-in">
        <div className="col-md-8">
          <Card>
            <Card.Body>
              <h2 className="mb-4">Book {room.name}</h2>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleBooking}>
                <Form.Group className="mb-3">
                  <Form.Label>Check-in Date</Form.Label>
                  <Form.Control type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                  <Form.Text className="text-muted d-block mt-1">
                    {checkIn && isDateBooked(checkIn) && (
                      <span style={{ color: "#dc3545" }}>This date is already booked</span>
                    )}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Check-out Date</Form.Label>
                  <Form.Control type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                  <Form.Text className="text-muted d-block mt-1">
                    {checkOut && isDateBooked(checkOut) && (
                      <span style={{ color: "#dc3545" }}>This date is already booked</span>
                    )}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Number of Guests</Form.Label>
                  <Form.Select value={guests} onChange={(e) => setGuests(e.target.value)}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </Form.Select>
                </Form.Group>

                <Card className="mb-4 p-3 border-light-blue">
                  <h5 className="mb-3">Choose a Special Offer</h5>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {SPECIAL_OFFERS.map((offer) => (
                      <Card
                        key={offer.id}
                        onClick={() => handleOfferSelect(offer)}
                        style={{
                          cursor: "pointer",
                          border: selectedOffer?.id === offer.id ? "2px solid #0d6efd" : "1px solid #e9ecef",
                          backgroundColor: selectedOffer?.id === offer.id ? "#f0f6ff" : "white",
                          padding: "1rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{offer.icon}</div>
                        <div style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.3rem" }}>
                          {offer.title}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#6c757d", marginBottom: "0.5rem" }}>
                          {offer.description}
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "#28a745" }}>
                          {offer.discount}% OFF
                        </div>
                      </Card>
                    ))}
                  </div>
                  {selectedOffer && (
                    <Button variant="link" size="sm" onClick={handleClearOffer} className="text-danger">
                      Clear Offer
                    </Button>
                  )}
                 
                </Card>

                <Card className="mb-4 p-3 bg-light">
                  <h5>Price Details</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Price per night:</span>
                    <span className="fw-bold">₹{room.price}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Number of nights:</span>
                    <span className="fw-bold">{calculateNights()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Room Price:</span>
                    <span className="fw-bold">₹{baseTotal}</span>
                  </div>

                  {selectedOffer && (
                    <>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Offer Applied:</span>
                        <span className="fw-bold text-success">{selectedOffer.title}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Discount ({selectedOffer.discount}%):</span>
                        <span className="fw-bold text-success">-₹{discountAmount}</span>
                      </div>
                    </>
                  )}

                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Final Payable Amount:</span>
                    <h5 className="text-primary mb-0">₹{finalTotal}</h5>
                  </div>
                </Card>

                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" size="lg">
                    Confirm Booking
                  </Button>
                  <Button variant="outline-secondary" onClick={() => navigate(`/room/${room.id}`)}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal show={showConflictModal} onHide={() => setShowConflictModal(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#fff3cd", borderColor: "#ffc107" }}>
          <Modal.Title style={{ color: "#856404" }}>Booking Unavailable</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "30px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>📅</div>
            <h5 style={{ marginBottom: "15px", fontWeight: "700", color: "#dc3545" }}>
              This room is already booked for the selected dates
            </h5>
            <p style={{ color: "#6c757d", marginBottom: "10px" }}>
              The {room.name} is not available from <strong>{checkIn}</strong> to <strong>{checkOut}</strong>.
            </p>
            <p style={{ color: "#6c757d", marginBottom: "0" }}>Please select different dates or choose another room.</p>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "1px solid #dee2e6" }}>
          <Button variant="secondary" onClick={() => setShowConflictModal(false)}>
            Choose Different Dates
          </Button>
          <Button variant="primary" onClick={() => navigate("/home")}>
            Browse Other Rooms
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Booking
