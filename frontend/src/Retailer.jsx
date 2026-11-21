import { useState,useEffect } from 'react'
import './Retailer.css'

function Retailer() {

  const [activeSection, setActiveSection] = useState('Dashboard')
  const [products, setProducts] = useState(() => {
  return JSON.parse(localStorage.getItem('retailerProducts'
  )) || []
})
useEffect(() => {
  localStorage.setItem('retailerProducts', JSON.stringify(products))
}, [products])
const [shops, setShops] = useState(() => {
  return JSON.parse(localStorage.getItem('registeredShops')) || []
})

const [selectedShopId, setSelectedShopId] = useState('')

useEffect(() => {
  localStorage.setItem('registeredShops', JSON.stringify(shops))
}, [shops])
  const [successMessage, setSuccessMessage] = useState('') 
  const handleAddProduct = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const newProduct = {
    id: Date.now(),
    shopId: Number(formData.get('shopId')),
shopName: shops.find(
  shop => shop.id === Number(formData.get('shopId'))
)?.shopName,
    image: formData.get('image'),
    name: formData.get('name'),
    brand: formData.get('brand'),
    category: formData.get('category'),
    price: formData.get('price'),
    sizes: formData.get('sizes'),
    stock: formData.get('stock'),
    description: formData.get('description')
  }

  setProducts([...products, newProduct])
  setSuccessMessage('Product added successfully!')

  e.target.reset()
}
const handleDeleteProduct = (id) => {
  setProducts(products.filter((product) => product.id !== id))
  setSuccessMessage('Product deleted successfully!')
} 
const handleUpdateStock = (id) => {
  const newStock = prompt('Enter new stock quantity:')

  if (newStock === null || newStock.trim() === '') return

  if (!/^\d+$/.test(newStock)) {
    alert('Please enter a valid stock quantity.')
    return
  }

  setProducts(products.map((product) =>
    product.id === id
      ? { ...product, stock: newStock }
      : product
  ))

  alert('Stock updated successfully!')
}
  const handleRegisterShop = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const newShop = {
    id: Date.now(),
    shopName: formData.get('shopName'),
    ownerName: formData.get('ownerName'),
    image: formData.get('image'),
    address: formData.get('address'),
    city: formData.get('city'),
    phone: formData.get('phone'),
    category: formData.get('category')
  }

  setShops([...shops, newShop])
  setSuccessMessage('Shop registered successfully!')

  e.target.reset()
}
  const menuItems = [
    'Dashboard',
    'Add New Product',
    'My Products',
    'Update Stock',
    'Categories',
    'Shop Details',
    'Settings'
  ]

  return (
    <div className="retailer-page">

      {/* Sidebar */}
      <aside className="retailer-sidebar">

        <h2 className="retailer-logo">
          Smart Shopping<span>Guide</span>
        </h2>

        <div className="sidebar-menu">

          {menuItems.map((item) => (

            <button
              key={item}
              className={activeSection === item ? 'active' : ''}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </aside>

      {/* Main Dashboard */}
      <main className="retailer-main">

        <header className="retailer-header">

          <div>
            <h1>{activeSection}</h1>
            <p>Welcome back! Manage your store here.</p>
          </div>

          <button className="retailer-account">
            My Account
          </button>

        </header>

        <section className="dashboard-welcome">

          <h2>{activeSection}</h2>

          <p>
            {activeSection === 'Dashboard'
              ? 'Welcome! Manage your clothing store here.'
              : `You are now viewing ${activeSection}.`}
          </p>

        </section>

        {/* Dashboard Statistics */}
        {activeSection === 'Dashboard' && (

          <section className="dashboard-stats">

            <div className="stat-card">
              <h3>Total Products</h3>
              <h1>{products.length}</h1>
              <p>Products added to your shop</p>
            </div>

            <div className="stat-card">
              <h3>Available Stock</h3>
              <h1>{products.reduce((total, product) => total + Number(product.stock || 0), 0)}</h1>
              <p>Products currently available</p>
            </div>

            <div className="stat-card">
              <h3> {products.filter(product => Number(product.stock) === 0).length}</h3>
              <h1>15</h1>
              <p>Products unavailable</p>
            </div>

            <div className="stat-card">
              <h3>{products.filter(
    product => Number(product.stock) > 0 && Number(product.stock) <= 10
  ).length}</h3>
              <h1>10</h1>
              <p>Products running low</p>
            </div>

          </section>

        )}
        {/* Add New Product Section */}

{activeSection === 'Add New Product' && (

  <section className="add-product-section">

    <div className="product-form-heading">
      <h2>Add New Product</h2>
      <p>Enter your clothing product details below.</p>
    </div>

    <form className="product-form"
      onSubmit={handleAddProduct}>
    <div className="form-group">
  <label>Select Your Shop</label>

  <select name="shopId" required>
    <option value="">Choose a registered shop</option>

    {shops.map((shop) => (
      <option key={shop.id} value={shop.id}>
        {shop.shopName}
      </option>
    ))}

  </select>
</div>
      {/* Product Image */}
      <div className="form-group">
        <label>Product Image URL</label>
        <input
          type="url"
          name="image"
          placeholder="Enter product image URL"
        />
      </div>

      {/* Product Name */}
      <div className="form-row">

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Example: Cotton T-Shirt"
          />
        </div>

        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            name="brand"
            placeholder="Enter brand name"
          />
        </div>

      </div>

      {/* Category and Price */}
      <div className="form-row">

        <div className="form-group">
          <label>Category</label>

          <select name="category" required>
            <option value="">Select Category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
            <option>Boys</option>
            <option>Girls</option>
            <option>Ethnic Wear</option>
          </select>

        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            min="0"
          />
        </div>

      </div>

      {/* Available Sizes */}
      <div className="form-group">
        <label>Available Sizes</label>
        <input
          type="text"
          name="sizes"
          placeholder="Example: S, M, L, XL, XXL"
        />
      </div>

      {/* Stock */}
      <div className="form-group">
        <label>Stock Quantity</label>
        <input
          type="number"
          name="stock"
          placeholder="Enter total stock quantity"
          min="0"
        />
      </div>

      {/* Description */}
      <div className="form-group">
        <label>Product Description</label>
        <textarea
          name="description"
          placeholder="Describe your product..."
          rows="4"
        />
      </div>

      <button type="submit" className="add-product-btn">
        Add Product
      </button>

    </form>

  </section>

)}
      </main>
      {/* My Products Section */}
{activeSection === 'My Products' && (
  <section className="add-product-section">

    <div className="product-form-heading">
      <h2>My Products</h2>
      <p>View and manage all your clothing products.</p>
    </div>

    {products.length === 0 ? (
      <p>No products added yet. Add your first product!</p>
    ) : (
      <div className="products-list">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />

            <h3>{product.name}</h3>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Sizes:</strong> {product.sizes}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p>{product.description}</p><button
  className="delete-product-btn"
  onClick={() => handleDeleteProduct(product.id)}
>
  Delete Product
</button>

            <button
  className="delete-product-btn"
  onClick={() => handleDeleteProduct(product.id)}
>
  Delete Product
</button>
<button
  className="update-stock-btn"
  onClick={() => handleUpdateStock(product.id)}
>
  Update Stock
</button>
<button
  className="update-stock-btn"
  onClick={() => handleUpdateStock(product.id)}
>
  Update Stock
</button>

          </div>
        ))}

      </div>
    )}

  </section>
)}
{/* Shop Registration Section */}

{activeSection === 'Shop Details' && (

  <section className="add-product-section">

    <div className="product-form-heading">
      <h2>Register Your Shop</h2>
      <p>Enter your shop information to display it to customers.</p>
    </div>

    <form className="product-form" onSubmit={handleRegisterShop}>

      <div className="form-group">
        <label>Shop Name</label>
        <input
          type="text"
          name="shopName"
          placeholder="Enter shop name"
          required
        />
      </div>

      <div className="form-group">
        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          placeholder="Enter owner name"
          required
        />
      </div>

      <div className="form-group">
        <label>Shop Image URL</label>
        <input
          type="url"
          name="image"
          placeholder="Enter shop image URL"
        />
      </div>

      <div className="form-group">
        <label>Shop Address</label>
        <textarea
          name="address"
          placeholder="Enter complete shop address"
          required
        />
      </div>

      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          required
        />
      </div>

      <div className="form-group">
        <label>Contact Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter contact number"
          required
        />
      </div>

      <div className="form-group">
        <label>Shop Category</label>
        <select name="category" required>
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="All Clothing">All Clothing</option>
        </select>
      </div>

      <button type="submit" className="add-product-btn">
        Register Shop
      </button>

    </form>

    {successMessage && (
      <p className="success-message">{successMessage}</p>
    )}

  </section>

)}
    </div>
  )
} 

export default Retailer