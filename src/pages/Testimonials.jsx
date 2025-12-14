import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      rating: 5,
      comment: "Amazing hotel with excellent service! The staff was incredibly friendly and helpful.",
      date: "Dec 2024",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Beautiful rooms with stunning views. The breakfast was outstanding!",
      date: "Nov 2024",
    },
    {
      name: "Michael Brown",
      rating: 4,
      comment: "Great location and comfortable rooms. Would definitely stay again.",
      date: "Oct 2024",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Luxury experience at affordable prices. Highly recommended for families!",
      date: "Oct 2024",
    },
    {
      name: "Robert Wilson",
      rating: 5,
      comment: "Exceptional hospitality and world-class facilities. Best hotel experience ever!",
      date: "Sep 2024",
    },
    {
      name: "Lisa Anderson",
      rating: 4,
      comment: "Clean rooms, friendly staff, and great amenities. Had a wonderful stay.",
      date: "Sep 2024",
    },
  ]

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Guest Testimonials</h1>
        <p>See what our guests have to say about their stay with us</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">{"⭐".repeat(testimonial.rating)}</div>
            <p className="comment">"{testimonial.comment}"</p>
            <div className="testimonial-footer">
              <strong>{testimonial.name}</strong>
              <span className="date">{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
