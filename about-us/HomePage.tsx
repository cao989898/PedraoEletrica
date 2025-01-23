import React from "react";
import "./App.css"; // Import any CSS files if needed.

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Example extracted content */}
      <header className="header">
        <h1>Welcome to the Electrician Website</h1>
        <p>Your trusted source for electrical services.</p>
      </header>

      <main>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Electrical Installations</li>
            <li>Repairs</li>
            <li>Panel Upgrades</li>
            <li>Indoor & Outdoor Lighting</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Electrician Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
