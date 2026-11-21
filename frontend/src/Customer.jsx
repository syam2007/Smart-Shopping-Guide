import './Customer.css'
import { useState, useEffect } from 'react'
function Customer() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [shops, setShops] = useState([])
const [selectedShopId, setSelectedShopId] = useState(null)
useEffect(() => {
  const savedProducts = JSON.parse(
    localStorage.getItem('retailerProducts')
  ) || []

  setProducts(savedProducts)
  const savedShops = JSON.parse(
  localStorage.getItem('registeredShops')
) || []

setShops(savedShops)
}, [])
  return (
    <div className="customer-page">

      {/* Navigation Bar */}
      <nav className="customer-navbar">

        <h2 className="customer-logo">
          Smart Shopping<span>Guide</span>
        </h2>

        <div className="customer-nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#shops">All Shops</a>
          <a href="#about">About Us</a>
        </div>

        <button className="customer-profile">
          My Account
        </button>

      </nav>

      {/* Hero Section */}
      <section className="customer-hero" id="home">

        <div className="customer-hero-content">

          <p className="customer-tagline">
            YOUR FASHION, YOUR CHOICE
          </p>

          <h1>
            Discover Fashion.<br />
            Shop Smarter.
          </h1>

          <p>
            Explore local clothing stores, discover amazing collections
            and compare prices before you shop.
          </p>

          <div className="customer-search">
            <input
              type="text"
              placeholder="Search for clothes, brands or shops..."
            />

            <button>Search</button>
          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="customer-categories" id="categories">

        <h2>Explore Categories</h2>

        <p>Find your favourite fashion collections.</p>

        <div className="category-container">

          <div className="category-card">Women</div>
          <div className="category-card">Men</div>
          <div className="category-card">Kids</div>
          <div className="category-card">Boys</div>
          <div className="category-card">Girls</div>
          <div className="category-card">Ethnic Wear</div>

        </div>

      </section>

      {/* All Registered Shops */}
      <section className="customer-shops" id="shops">

        <div className="section-heading">

          <div>
            <h2>Explore Local Shops</h2>
            <p>Discover clothing stores registered on our platform.</p>
          </div>

          <button>View All Shops →</button>

        </div>

        <div className="shop-container">

  {shops.length === 0 ? (
    <p>No shops registered yet. Please check back soon!</p>
  ) : (

    shops.map((shop) => (
      <div className="shop-card" key={shop.id}>

        {shop.image ? (
          <img
            src={shop.image}
            alt={shop.shopName}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
        ) : (
          <div className="shop-image">🏬</div>
        )}

        <h3>{shop.shopName}</h3>

        <p>{shop.address}</p>
        <p>{shop.city}</p>
        <p>{shop.category}</p>

        <button onClick={() => setSelectedShopId(shop.id)}>
          Explore Shop →
        </button>

      </div>
    ))

  )}

</div>

      </section>
      {/* Available Products */}
<section className="customer-products">

  <div className="section-heading">
    <div>
      <h2>
        {selectedShopId
          ? `${shops.find(shop => Number(shop.id) === Number(selectedShopId))?.shopName || 'Selected Shop'} Products`
          : 'Available Products'}
      </h2>
      <p>Explore clothing products from our registered retailers.</p>
    </div>

    {selectedShopId && (
      <button onClick={() => setSelectedShopId(null)}>
        ← Back to All Shops
      </button>
    )}
  </div>

  <input
    type="text"
    placeholder="Search by product name or brand..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="customer-search-input"
  />

  <div className="customer-products-grid">

    {products
      .filter((product) =>
        (selectedShopId === null ||
          Number(product.shopId) === Number(selectedShopId)) &&
        (
          (product.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.brand || '').toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .map((product) => (
        <div className="customer-product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <h3>₹{product.price}</h3>
          <p>Available Sizes: {product.sizes}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}

  </div>

</section>
      {/* About */}
      <section className="customer-about" id="about">

        <h2>Shopping Made Smarter</h2>

        <p>
          Smart Shopping Guide connects customers with local clothing
          retailers. Explore shops, discover products and compare prices
          to make better shopping decisions.
        </p>

      </section>

      {/* Footer */}
      <footer className="customer-footer">

        <h2>Smart Shopping Guide</h2>

        <p>Discover Local Fashion. Shop Smarter.</p>

        <p>© 2026 Smart Shopping Guide. All rights reserved.</p>

      </footer>

    </div>
  )
}

export default Customer