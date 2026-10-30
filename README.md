# 💊 Pharmez – Pharmacy E-Commerce Web Application

Pharmez is a full-stack pharmacy e-commerce web application designed to simulate an online medical store. It provides a clean and responsive user interface for browsing healthcare products, along with a robust Spring Boot backend that manages product data via REST APIs.

The application combines a static frontend with a Java-based backend and an H2 in-memory database, making it lightweight and easy to run for development and learning purposes.

---

## 🚀 Features

### 🛍️ User Features

* Browse pharmacy products
* Product listing and detailed view
* Search products by name
* Filter products by category
* Shopping cart functionality
* Checkout page
* Informational pages (About, Contact, Blog, FAQ, Services, Team, Privacy Policy)

### ⚙️ Admin Features

* Admin dashboard
* Add new products
* Update existing products
* Delete products
* View all products via REST API

### 🔧 Backend Features

* RESTful API built with Spring Boot
* CRUD operations for product management
* H2 in-memory database
* Preloaded sample data using `data.sql`

---

## 🏗️ Project Structure

```text
pharmez/
│
├── admin/
│   └── admin.html
│
├── img/
│   └── (product & UI images)
│
├── pharmez-backend/
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/pharmez/
│       │   ├── PharmezApplication.java
│       │   ├── controller/
│       │   ├── model/
│       │   ├── repository/
│       │   └── service/
│       └── resources/
│           ├── application.properties
│           └── data.sql
│
├── home.html
├── shop.html
├── shoppingcart.html
├── checkout.html
├── about.html
├── contact.html
├── blog.html
├── faq.HTML
├── service.html
├── team.html
└── privacy.html
```

---

## 🛠️ Tech Stack

| Category   | Technology              |
| ---------- | ----------------------- |
| Frontend   | HTML5, CSS3, JavaScript |
| Backend    | Java, Spring Boot       |
| API Layer  | Spring Web (REST APIs)  |
| Database   | H2 (In-Memory)          |
| ORM        | Spring Data JPA         |
| Build Tool | Maven                   |
| Utilities  | Lombok                  |

---

## ▶️ Getting Started

### ✅ Prerequisites

* Java JDK 17+
* Maven
* Web Browser
* IDE (IntelliJ / Eclipse / VS Code)

---

### 🔽 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Navathakamaraj/pharmez.git
cd pharmez
```

#### 2. Run Backend Server

```bash
cd pharmez-backend
mvn spring-boot:run
```

Backend will start at:

```
http://localhost:8080
```

#### 3. Run Frontend

Open `home.html` in your browser
OR use Live Server in VS Code

⚠️ Ensure backend is running for product APIs:

```
http://localhost:8080/api/products
```

---

## 🔗 API Endpoints

Base URL:

```
http://localhost:8080/api/products
```

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/`                 | Get all products   |
| GET    | `/{id}`             | Get product by ID  |
| GET    | `?search=name`      | Search products    |
| GET    | `?category=Vitamin` | Filter by category |
| POST   | `/`                 | Add product        |
| PUT    | `/{id}`             | Update product     |
| DELETE | `/{id}`             | Delete product     |

---

## 📦 Product Model

```json
{
  "id": 1,
  "name": "ImmunoBoost",
  "category": "Vitamin",
  "price": 63.0,
  "rating": 4.8,
  "imageUrl": "img/best-product1.png",
  "description": "Boosts immune system naturally",
  "inStock": true
}
```

---

## 🗄️ Database Configuration

* Database: H2 (In-Memory)
* Console: http://localhost:8080/h2-console

### Connection Details

```
JDBC URL: jdbc:h2:mem:pharmezdb
Username: sa
Password: (empty)
```

📌 Data resets every time the server restarts.

---

## ⚙️ Backend Configuration

`application.properties`

```properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:pharmezdb
spring.jpa.hibernate.ddl-auto=create-drop
spring.h2.console.enabled=true
```

---

## 🧪 Sample API Request

```bash
curl -X POST http://localhost:8080/api/products \
-H "Content-Type: application/json" \
-d '{
  "name": "Herbal Care",
  "category": "Herbal",
  "price": 49.0,
  "rating": 4.6,
  "imageUrl": "img/product1.png",
  "description": "Herbal wellness supplement",
  "inStock": true
}'
```

---

## 📄 Key Pages

* `home.html` – Homepage
* `shop.html` – Product listing
* `shoppingcart.html` – Cart
* `checkout.html` – Checkout
* `admin/admin.html` – Admin panel

---

## 🧠 Concepts Demonstrated

* REST API Development
* MVC Architecture
* Object-Oriented Programming (OOP)
* Dependency Injection
* CRUD Operations
* JPA & Repository Pattern
* Database Seeding

---

## 🚀 Future Improvements

* User authentication & authorization
* Payment gateway integration
* Order management system
* Product image upload
* Persistent database (MySQL/PostgreSQL)
* Reviews & ratings system
* Wishlist feature
* Cloud deployment

---

## 👤 Author

**Navatha**
GitHub: https://github.com/Navathakamaraj

---

## 📜 License

This project is open-source and intended for educational purposes.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
