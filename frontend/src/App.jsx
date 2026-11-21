import './App.css'
import Customer from './Customer.jsx'
import Retailer from './Retailer.jsx'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="website">

      <nav className="navbar">
        <h2 className="logo">
          Smart Shopping<span>Guide</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">

          <p className="tagline">SMARTER WAY TO SHOP</p>

          <h1>
            Smart Shopping <br />
            Starts Here!
          </h1>

          <p className="hero-description">
            Discover local clothing stores, compare prices,
            explore products and find the best shopping options
            near you.
          </p>

          <div className="role-cards">

            <div className="role-card">
              <h2>Customer</h2>
              <p>
                Explore products, compare prices and discover nearby shops.
              </p>

              <button onClick={() => navigate('/customer')}>
                Continue as Customer →
              </button>
            </div>

            <div className="role-card">
              <h2>Retailer</h2>
              <p>
                Manage your shop, add products and update your stock.
              </p>

              <button onClick={() => navigate('/retailer')}>
                Continue as Retailer →
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>Smart Search</h3>
            <p>Find your favourite clothing products easily.</p>
          </div>

          <div className="feature-card">
            <h3>Price Comparison</h3>
            <p>Compare prices across different local shops.</p>
          </div>

          <div className="feature-card">
            <h3>Nearby Shops</h3>
            <p>Discover clothing stores around your location.</p>
          </div>

          <div className="feature-card">
            <h3>Stock Availability</h3>
            <p>Check available products and sizes.</p>
          </div>

        </div>
      </section>

      <section className="about" id="about">
        <h2>About Smart Shopping Guide</h2>
        <p>
          Our platform connects customers with local clothing retailers.
          Discover products, compare prices and make smarter shopping
          decisions.
        </p>
      </section>

      <footer id="contact">
        <h2>Smart Shopping Guide</h2>
        <p>Making local shopping smarter and easier.</p>
        <p>© 2026 Smart Shopping Guide. All rights reserved.</p>
      </footer>

    </div>
  )
}

// Customer Page
function CustomerPage() {
  return (
    <div>
      <h1>Welcome to Customer Portal</h1>
      <p>Discover clothing products and compare prices.</p>
    </div>
  )
}

// Retailer Page
function RetailerPage() {
  return (
    <div>
      <h1>Welcome to Retailer Portal</h1>
      <p>Manage your shop and products.</p>
    </div>
  )
}

// Main Application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/retailer" element={<Retailer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App