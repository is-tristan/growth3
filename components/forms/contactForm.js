"use client";
import { useState } from 'react';
import styles from "@/styles/forms/darkForm.module.scss";
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false); // New state to manage sending status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
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
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${styles.dark}`}>
      
      <div className={`field ${styles.field}`}>
        <input
          aria-label="Your first name"
          id="name"
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
          aria-label="Your email address"
          id="email"
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
          aria-label="Your message"
          id="message"
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          required
        />

      </div> {/* .field */}

      <div className={`field checkbox ${styles.field}`}>

        <label className="checkboxLabel">

          <input
            type="checkbox"
            name="termsAccepted"
            required
          />

        <p>By submitting this form I agree to your <Link className="link" href="/privacy-policy/">Privacy Policy</Link>. <span className="green">*</span></p>

        </label>

      </div>{/* .field */}

      <button
        className={`btn ${styles.submit}`}
        type="submit"
        disabled={isSending || !formData.name || !formData.email || !formData.message}
      >
        {isSending ? <span>Sending...</span> : <span>Send</span>}
      </button>

      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
