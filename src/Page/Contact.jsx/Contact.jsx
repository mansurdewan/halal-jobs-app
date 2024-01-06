import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            className="input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            className="input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            className="textarea"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <footer className="footer">
        <ul className="social-icons">
          <li>
          <Link  className="facebook">
            <FaFacebook />
            </Link>
          </li>
          <li>
            <Link  className="linkdIn">
            <TiSocialLinkedin />
            </Link>
          </li>
          <li>
          <Link  className="twitter">
          <FaTwitter />
            </Link>
          </li>
          <li>
          <Link>
            <FaFacebook />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Contact;
