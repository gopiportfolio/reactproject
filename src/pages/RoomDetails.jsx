"use client"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Button, Badge, Alert } from "react-bootstrap"
import standard from "../assets/images/standard.jpg"
import delux from "../assets/images/delux.jpg"
import suite from "../assets/images/suite.jpg"
import family from "../assets/images/family.jpg"
import budget from "../assets/images/budget.jpg"
import ocean from "../assets/images/ocean.jpg"


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
  }
]

const RoomDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = ROOMS.find((r) => r.id === Number(id))

  if (!room) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Room not found!</Alert>
      </Container>
    )
  }

  return (
    <Container className="py-5">
      <Row className="g-4 fade-in">
        <Col md={6}>
          <img
            src={room.image || "/placeholder.svg"}
            alt={room.name}
            className="img-fluid rounded"
            style={{ width: "100%", height: "auto" }}
          />
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h1>{room.name}</h1>
            <Badge bg="warning" text="dark" className="fs-6">
              ⭐ {room.rating}
            </Badge>
          </div>
          <h3 className="text-primary mb-4">₹{room.price}/night</h3>
          <p className="text-muted mb-4">{room.description}</p>

          <Card className="mb-4 p-3">
            <h5>Room Amenities</h5>
            <ul className="mb-0">
              <li>WiFi</li>
              <li>Air Conditioning</li>
              <li>Private Bathroom</li>
              <li>TV</li>
              <li>Mini Fridge</li>
              <li>Work Desk</li>
            </ul>
          </Card>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={() => navigate(`/booking/${room.id}`)}>
              Book Now
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RoomDetails
