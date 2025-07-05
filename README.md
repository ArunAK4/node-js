# Node.js Training Project

A simple Express.js REST API server with posts management functionality, built for Node.js training purposes.

## 🚀 Features

- Express.js REST API server
- Posts management with CRUD operations
- Custom middleware for logging and error handling
- Static file serving
- Environment variable support

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: v22.13.1 or higher
- **npm**: v10.9.2 or higher

### Check your versions:

```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/Sharan-jayakumar/node_js_training.git
   cd node_js_training
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Development Mode

To start the server in development mode with auto-reload:

```bash
npm run dev
```

### Production Mode

To start the server in production mode:

```bash
npm start
```

The server will start on `http://localhost:8080` (or the port specified in your `.env` file).

## 📁 Project Structure

```
node_js_training/
├── controllers/          # Route controllers
│   └── postsController.js
├── data/                # Data models
│   └── post.js
├── middleware/          # Custom middleware
│   ├── errorHandler.js
│   └── logger.js
├── public/             # Static files
│   └── index.html
├── routes/             # API routes
│   └── posts.js
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🔧 Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server in development mode with auto-reload
- `npm test` - Run tests (currently not implemented)

## 🌐 API Endpoints

The application provides the following API endpoints:

- `GET /` - Serve the main HTML page
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a specific post
- `PUT /api/posts/:id` - Update a specific post
- `DELETE /api/posts/:id` - Delete a specific post

## 📦 Dependencies

- **express**: ^4.21.2 - Web framework
- **body-parser**: ^1.20.3 - Request body parsing
- **@types/node**: ^22.13.5 - TypeScript definitions
- **node**: ^23.9.0 - Node.js runtime

## 🔧 Environment Variables

Create a `.env` file in the root directory to configure environment variables:

```env
PORT=8080
```
