"use client"
import { useState } from 'react';
import styles from "@/styles/forms/darkForm.module.scss";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (

    <form onSubmit={handleSubmit} className={`form ${styles.dark}`}>

      <div className={`field ${styles.field}`}>

        <input
          aria-label="Your First Name"
          type="text"
          name="name"
          placeholder="First Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />

      </div> {/* .field */}

      <div className={`field ${styles.field}`}>

        <input
          aria-label="Your Email Address"
          type="email"
          name="email"
          placeholder="Email Address*"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div> {/* .field */}

      <div className={`field ${styles.field}`}>

        <textarea
          aria-label="Type your message here"
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
        />

      </div> {/* .field */}

      <button className={`btn ${styles.submit}`} type="submit">
        
        <span>Send</span>
        
      </button>

      <p>{status}</p>

    </form>

  );

};

export default ContactForm;
