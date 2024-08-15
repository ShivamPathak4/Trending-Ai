
# **AI Tool Explorer**

**AI Tool Explorer** is a platform where users can discover and explore trending AI tools. The platform allows users to check the availability of tools (whether they are free or premium), view their popularity, and explore other features. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform offers an intuitive interface for AI enthusiasts to stay updated on the latest tools in the industry.

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Configuration](#database-configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [License](#license)

## **Features**

- **User Authentication & Authorization**: Secure login/signup with admin access for tool management.
- **Tool Management**: Admins can add, edit, or delete AI tools.
- **Tool Details**: Users can view detailed information about AI tools, including polarity and whether they are free or premium.
- **Search & Filter**: Search for tools by name or filter by category, pricing, and more.
- **Responsive UI**: A user-friendly and responsive interface optimized for different devices.

## **Technologies Used**

- **Frontend**:
  - React.js
  - Redux
  - React-Router
  - Tailwind CSS
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Tokens) for authentication
  - Multer for file uploads

- **Database**:
  - MongoDB (NoSQL)

## **Getting Started**

To get a local copy of the project up and running, follow these steps:

### **Prerequisites**

Ensure you have the following installed on your local machine:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- **Git**: [Download and Install Git](https://git-scm.com/)

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-tool-explorer.git
   cd ai-tool-explorer
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

### **Environment Variables**

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
# MongoDB URI
MONGO_URI=mongodb://localhost:27017/aitool-explorer

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Port
PORT=5000

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# SMTP (for email notifications)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

### **Database Configuration**

Ensure MongoDB is running locally on your machine. The default configuration connects to a database named `aitool-explorer`.

### **Running the Project**

1. **Start the backend server**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**:
   ```bash
   cd ../frontend
   npm start
   ```

The application should now be running at `http://localhost:3000`.

### **Project Structure**

```plaintext
AI-Tool-Explorer/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   └── package.json
│
├── README.md
└── package.json
```

### **API Documentation**

API endpoints are documented using Postman. Import the Postman collection from the `backend/docs` directory to explore the available routes and test the API.


## **License** 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
