import axios from "axios";
import { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});


  const contactURL = `${process.env.REACT_APP_BASE_URL}/contact`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !email || !message) {
      setFormErrors({
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        message: !message ? "Message is required" : "",
      });
      return;
    }

    axios
      .post(contactURL, {
        name,
        email,
        message,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Form submitted successfully");
          setIsSubmitted(true);
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    setName("");
    setEmail("");
    setMessage("");
     setFormErrors({}); 
  };

  // Back button
  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <div>
          <p className="success-message">Thank you for your submission!</p>
          <button onClick={handleBack} className="back-button">
            Back to Form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="error-message">{formErrors.name}</span>
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="error-message">{formErrors.email}</span>
          </label>
          <br />
          <label>
            Message:
            <textarea
              className="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span className="error-message">{formErrors.message}</span>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
