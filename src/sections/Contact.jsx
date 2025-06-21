import './Contact.css';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch('https://formspree.io/f/mldnwzqo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Oops! Something went wrong.');
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}