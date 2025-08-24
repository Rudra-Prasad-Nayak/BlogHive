# BlogHive - Modern Blogging Platform

A full-stack, modern blogging platform built with React, Node.js, and MongoDB. BlogHive provides a complete solution for creating, managing, and sharing blog content with advanced features for both users and administrators.

![BlogHive](https://img.shields.io/badge/BlogHive-v1.0.0-blue)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-8.17.1-47A248)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)

## 🌟 Features

### For Users
- **Modern Authentication**: Secure login/register with JWT tokens
- **Rich Text Editor**: Create beautiful blog posts with React Quill
- **Dark/Light Theme**: Toggle between themes with custom accent colors
- **Responsive Design**: Mobile-first design that works on all devices
- **Search & Filter**: Find posts by title, content, or category
- **Comments System**: Engage with readers through comments
- **User Profiles**: Customizable profiles with avatars and bio
- **Social Sharing**: Share posts on social media platforms
- **Newsletter Subscription**: Stay updated with email notifications

### For Administrators
- **Admin Dashboard**: Comprehensive analytics and management tools
- **User Management**: Manage users, roles, and permissions
- **Content Moderation**: Approve, edit, or delete posts and comments
- **Category Management**: Organize content with custom categories
- **Analytics**: Track views, likes, comments, and user engagement
- **File Management**: Upload and manage images with automatic optimization
- **SEO Tools**: Meta tags, sitemaps, and search optimization

### Technical Features
- **RESTful API**: Clean, well-documented API endpoints
- **Real-time Updates**: Live notifications and updates
- **Image Optimization**: Automatic image compression and resizing
- **Security**: Rate limiting, CORS, Helmet, and input validation
- **Performance**: Caching, compression, and optimized queries
- **Scalability**: Modular architecture for easy scaling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB 6+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bloghive.git
   cd bloghive
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in both `server/` and `client/` directories:

   **Server (.env)**
   ```env
   NODE_ENV=development
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bloghive
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   CLIENT_URL=http://localhost:5173
   ```

   **Client (.env)**
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Start the application**
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start frontend (from client directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api
   - Health Check: http://localhost:3000/health

## 📁 Project Structure

```
BlogHive/
├── client/                 # React Frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── auth/      # Authentication components
│   │   │   ├── common/    # Shared components
│   │   │   └── shared/    # Layout components
│   │   ├── context/       # React contexts
│   │   ├── pages/         # Page components
│   │   │   └── admin/     # Admin pages
│   │   ├── styles/        # CSS and theme files
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js Backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Express middlewares
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── uploads/          # File uploads
│   ├── utils/            # Utility functions
│   ├── package.json
│   └── server.js
└── README.md
```

## 🎨 Design System

### Color Palette
BlogHive uses a modern color palette with support for dark and light themes:

```css
/* Primary Colors */
--blue-600: #2466ea
--purple-500: #c084fc
--cyan-500: #08b1d5

/* Dark Theme Colors */
--dark: #030712
--navy: #162b3c
--slate: #121a27
--deep-navy: #152345
--ocean: #0e2c3c

/* Light Theme Colors */
--light-blue: #61abfa
--gray: #1f2937
--dark-slate: #131a29
--royal-blue: #1b6dbf
```

### Components
- **Buttons**: Primary, secondary, ghost, and danger variants
- **Cards**: Hover effects, shadows, and responsive layouts
- **Forms**: Validation, error handling, and accessibility
- **Navigation**: Responsive header with mobile menu
- **Modals**: Overlay dialogs with backdrop blur

## 🔧 API Documentation

### Authentication Endpoints
```
POST /api/user/register     # Register new user
POST /api/user/login        # User login
POST /api/user/logout       # User logout
GET  /api/user/profile      # Get user profile
PUT  /api/user/profile      # Update user profile
```

### Posts Endpoints
```
GET    /api/posts           # Get all posts
POST   /api/posts           # Create new post
GET    /api/posts/:id       # Get post by ID
PUT    /api/posts/:id       # Update post
DELETE /api/posts/:id       # Delete post
GET    /api/posts/search    # Search posts
```

### Categories Endpoints
```
GET    /api/categories      # Get all categories
POST   /api/categories      # Create category (admin)
PUT    /api/categories/:id  # Update category (admin)
DELETE /api/categories/:id  # Delete category (admin)
```

### Upload Endpoints
```
POST /api/upload/image      # Upload single image
POST /api/upload/avatar     # Upload user avatar
POST /api/upload/post-image # Upload post image
POST /api/upload/images     # Upload multiple images
DELETE /api/upload/:file    # Delete uploaded file
```

## 🛠️ Development

### Available Scripts

**Backend (server/)**
```bash
npm run dev          # Start development server
npm start           # Start production server
npm test            # Run tests
npm run lint        # Lint code
npm run seed        # Seed database
```

**Frontend (client/)**
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Lint code
```

### Code Style
- **Frontend**: ESLint with React Hooks rules
- **Backend**: ESLint with Standard configuration
- **Formatting**: Prettier for consistent code style

### Database Schema

**User Model**
```javascript
{
  name: String,
  email: String,
  password: String,
  avatar: String,
  bio: String,
  role: String,
  isVerified: Boolean,
  preferences: Object,
  stats: Object,
  socialLinks: Object
}
```

**Post Model**
```javascript
{
  title: String,
  slug: String,
  content: String,
  excerpt: String,
  author: ObjectId,
  category: ObjectId,
  tags: [String],
  isPublished: Boolean,
  featuredImage: String,
  stats: Object
}
```

**Category Model**
```javascript
{
  name: String,
  slug: String,
  description: String,
  color: String,
  icon: String,
  isActive: Boolean,
  isFeatured: Boolean
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevent abuse with request limits
- **Input Validation**: Express-validator for all inputs
- **CORS Protection**: Configured for production
- **Helmet Security**: HTTP headers protection
- **File Upload Security**: Type and size validation

## 📊 Performance Optimizations

- **Image Optimization**: Sharp for automatic compression
- **Database Indexing**: Optimized queries with proper indexes
- **Caching**: Response caching for static content
- **Compression**: Gzip compression for responses
- **Lazy Loading**: Code splitting and dynamic imports
- **CDN Ready**: Static assets optimized for CDN

## 🚀 Deployment

### Backend Deployment (Heroku)
```bash
# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
```env
# Production
NODE_ENV=production
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-production-secret
CLIENT_URL=https://yourdomain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure all tests pass
- Use conventional commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **MongoDB** for the flexible database
- **Express.js** for the web framework
- **Vite** for the fast build tool

## 📞 Support

- **Documentation**: [Wiki](https://github.com/yourusername/bloghive/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/bloghive/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/bloghive/discussions)
- **Email**: support@bloghive.com

---

**Made with ❤️ by the BlogHive Team**
