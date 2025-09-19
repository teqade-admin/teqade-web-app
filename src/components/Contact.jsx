import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "teqade-web-contact", // replace with your EmailJS service ID
        "template_uklrip3", // replace with your EmailJS template ID
        formData,
        "wR9h_UEcH7VskTPM3" // replace with your EmailJS public key/user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Contact Us</h1>

      <div className="contact-card">
        {/* Form side */}
        <div className="contact-form-side">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>

        {/* Info side */}
        <div className="contact-info-side">
          <h2>Contact Information</h2>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>No.2, 8th Floor, KRM Plaza</p>
              <p>Harrington Road, Chetpet, TN 600031</p>
              <p>India</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Phone</h3>
              <p>+91 9952234440</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>info@teqade.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Indian Standard Time (IST)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
