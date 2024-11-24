# Bicycle Store Server Development with Mongoose, MongoDB, TypeScript, and Express

This project is focused on creating a server using **Mongoose**, **MongoDB**, **TypeScript**, and **Express**. The server is designed following a modular pattern, ensuring scalability and maintainability.

---

## 🌐 Live API

Access the live version of the API here:  
[Bicycle store server](https://bicycle-store-server.vercel.app/)

---

## 🎥 Video Explanation

Watch the complete project walkthrough on YouTube:  
[Project Explanation Video](https://www.youtube.com/watch?v=HrNs_coEpg4)

## Getting Started

Follow the steps below to set up and start working on the project.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager) or **yarn**
- A running **MongoDB** instance or a connection string for MongoDB Atlas.

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Mahin-Hasan/Bicycle-Store-Server-Mongoose.git
cd ./your working directory
npm i
```

### Step 2: Install required packages and dev dependencies

```bash
npm i
```

### Step 3: provide MongoDB URL with your credentials at .env

```bash
DATABASE_URL= "your MongoDb URL"
```

# Bicycle Store API

A complete backend solution for managing a bicycle store, enabling product inventory, order processing, and revenue tracking. This API is built with modern web technologies and follows best practices for scalability and maintainability.

## 🚀 Features

- **Product Management**: Add, update, retrieve, and delete bicycles.
- **Order Processing**: Place orders with stock validation and automatic inventory updates.
- **Revenue Tracking**: Calculate total revenue dynamically using aggregation pipelines.
- **Schema Validation**: Strict validation for fields like email, price, and type.
- **Custom Error Handling**: Consistent error response structure for client-side debugging.
- **Middleware**: Pre-save and pre-aggregate middleware for enhanced functionality.

---

## 🛠️ Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for schema-based data modeling.
- **TypeScript**: Type-safe programming for error-free development.

---

## 📋 API Endpoints

### Products

- **GET** `/api/products`  
  Retrieve all available bicycles.

- **POST** `/api/products`  
  Add a new bicycle.
- **GET** `/api/products/:productId`  
  Get a specific bicycle.

- **PUT** `/api/products/:productId`  
  Update a bicycle.

- **DELETE** `/api/products:productId`  
  Delete a bicycle.

### Orders

- **POST** `/api/orders`  
  Order a bicycle.

- **POST** `/api/orders/revenue`  
  Calculate Revenue from Orders (Aggregation)

- add api live link and video link after hosting
