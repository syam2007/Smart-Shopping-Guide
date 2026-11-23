🛍️ Smart Shopping Guide

Discover Local. Shop Smart. Empower Small Businesses.

Smart Shopping Guide is a city-based local shopping discovery platform designed to connect customers with nearby local retailers through a single digital platform.

The platform helps customers discover local shops, explore available products and find shopping options while helping small retailers showcase their products and manage their inventory digitally.

📌 1. Project Overview

Traditional shopping often requires customers to physically visit multiple shops to find products, compare prices and check availability.

At the same time, many small retailers lack an affordable digital platform to showcase their products and reach more customers.

Smart Shopping Guide aims to solve these problems by bringing local shops and customers together through one platform.

It provides two main interfaces:

Customer Interface: Allows customers to explore shops and browse available products.

Retailer Interface: Allows retailers to register their shops, add products and manage product information.

Our vision is to create a unified local shopping ecosystem that supports small businesses and makes shopping easier and more convenient.

🎯 2. Project Objectives

Connect local retailers with customers through a digital platform.

Help customers discover nearby physical shopping stores.

Allow retailers to showcase their products online.

Make product discovery easier through search and filtering.

Support digital product and inventory management.

Encourage local business growth and digital transformation.

Build a scalable platform that can expand across multiple cities.

⚙️ 3. How the Project Works

The application provides two different entry points.

👤 A. Customer Module

Customers can:

Access the Customer dashboard.

Explore registered local shops.

Select a shop using the Explore Shop option.

View products added by that retailer.

Search for products using product names or brands.

Browse available product information.

🏪 B. Retailer Module

Retailers can:

Access the Retailer dashboard.

Register their shop with shop details.

Add products to their registered shop.

Provide product information such as:

Product image URL

Product name

Brand

Category

Price

Available sizes

Stock quantity

Product description

View their added products.

Update product stock information.

🔄 C. Customer–Retailer Connection

The main concept is to connect the products added by retailers with the customer interface.

When a retailer registers a shop and adds products, the application stores the information in browser Local Storage.

The Customer interface reads the stored shop and product information and displays the corresponding products.

This allows customers to explore products without directly visiting the retailer dashboard.

🛠️ 4. Technologies Used

Technology

Purpose

HTML5

Structures the webpages and application elements.

CSS3

Designs the interface, layouts, buttons and product cards.

JavaScript

Handles application logic and user interactions.

React.js

Builds interactive Customer and Retailer interfaces.

Vite

Provides the development server and frontend build environment.

Local Storage

Stores shop and product information in the browser.

Git

Tracks project changes and manages versions.

GitHub

Hosts and shares the project source code.

🏗️ 5. Project Architecture

The current application follows a frontend-based architecture.

             SMART SHOPPING GUIDE
                       |
              -------------------
              |                 |
           CUSTOMER           RETAILER
              |                 |
         Explore Shops      Register Shop
              |                 |
         View Products      Add Products
              |                 |
         Search Products    Manage Stock
              |                 |
              -------------------
                       |
                  REACT.JS
                       |
                  JAVASCRIPT
                       |
                 LOCAL STORAGE
                       |
              BROWSER DATA STORAGE

📂 6. Project Folder Structure

smart_shopping-guide/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │
│   │   ├── Customer.jsx
│   │   ├── Customer.css
│   │   ├── Retailer.jsx
│   │   ├── Retailer.css
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

Note: This is an illustrative structure. Actual filenames and folders may differ depending on the latest project version.

💻 7. How to Run the Project on Your Laptop

Follow these instructions to run Smart Shopping Guide locally.

Prerequisites

Install the following software:

Node.js

npm (included with Node.js)

Visual Studio Code

Git (optional for running, required for Git version control)

Step 1: Clone the Repository

Open your terminal and execute:

git clone https://github.com/syam2007/Smart-Shopping-Guide.git

Step 2: Open the Project Folder

cd Smart-Shopping-Guide

Step 3: Navigate to the Frontend

cd frontend

Step 4: Install Dependencies

npm install

This installs the packages required by the application.

Step 5: Start the Development Server

On Windows PowerShell, execute:

npm.cmd run dev

Step 6: Open the Website

After starting the development server, Vite displays a local address.

Open this address in your browser:

http://localhost:5173/

The application should now be running on your laptop.

💾 8. Data Storage and Working Mechanism

The current prototype uses browser Local Storage.

It stores:

Registered shop information.

Retailer product information.

Product details and stock information.

The Customer and Retailer interfaces access this browser-stored information.

Important implementation detail:

Local Storage is specific to the browser and website origin. Therefore, the current prototype is suitable for demonstrating the application on the same browser and laptop, but it does not provide centralized data sharing between different devices.

A centralized backend and database are planned for future development.

🚀 9. Future Enhancements

The project can be extended with the following features:

Multi-City Support: Enable customers to discover shops across different cities.

Centralized Database: Integrate MySQL to maintain shared shop and product information.

Backend Development: Integrate Python FastAPI for server-side operations.

Google Maps Integration: Display retailer locations and provide directions.

Secure Authentication: Implement separate customer and retailer login systems.

Advanced Search: Add price filters, product categories and availability filters.

Inventory Automation: Improve stock updates and inventory tracking.

Online Ordering: Allow customers to place orders through the platform.

Notifications: Notify customers about product availability and offers.

🌍 10. Expected Impact

Smart Shopping Guide aims to create value for both customers and local businesses.

For Customers:

Easier discovery of local shops.

Convenient product browsing.

Reduced need to visit multiple shops just to explore products.

Better access to local shopping options.

For Retailers:

Digital visibility for small businesses.

An additional platform to showcase products.

Easier product information management.

Opportunities to reach more customers.

👩‍💻 11. Developer

Developer: Syam

Project Name: Smart Shopping Guide

Project Category: Web Application | E-Commerce | Local Business Empowerment

GitHub Repository:

https://github.com/syam2007/Smart-Shopping-Guide

📜 12. Conclusion

Smart Shopping Guide is an initiative to bridge the gap between traditional local shopping and digital technology.

By connecting customers and local retailers through a unified platform, the project aims to improve product discovery, support small businesses and encourage the digital transformation of local shopping.

Discover Local. Shop Smart. Empower Small Businesses.
