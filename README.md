# 🚀 Decentrathon - Telegram Mini App

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
</div>

## 📝 Overview

Decentrathon is a Telegram Mini App designed to revolutionize the hackathon experience. It provides a seamless platform for users to discover, participate in, and manage hackathons directly through Telegram.

### 🌟 Key Features

- **User Onboarding**: Smooth multi-step onboarding process
- **Hackathon Discovery**: Browse and filter hackathons based on preferences
- **Real-time Updates**: Get instant notifications about hackathon events
- **Profile Management**: Customize your profile and preferences
- **Responsive Design**: Beautiful UI with TailwindCSS
- **Telegram Integration**: Seamless experience within Telegram

## 🏗️ Project Structure

```
decentrathon/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context for state management
│   │   └── utils/        # Utility functions
│   └── public/           # Static files
└── server/               # Backend Node.js application
    ├── routes/          # API routes
    ├── models/          # MongoDB models
    ├── controllers/     # Route controllers
    └── config/         # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation
- Telegram Bot Token (get from [@BotFather](https://t.me/BotFather))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheDiasDay/decentrathon-telegram-app.git
   cd decentrathon-telegram-app
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   
   Create a `.env` file:
   ```
   MONGODB_URI=your_mongodb_uri
   BOT_TOKEN=your_telegram_bot_token
   PORT=5000
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   ```
   
   Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_BOT_USERNAME=your_bot_username
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   npm start
   ```

3. **Access the application**
   - Open your Telegram bot
   - Click on the menu button
   - Select "Start App"

## 🛠️ Technologies Used

- **Frontend**:
  - React.js
  - TailwindCSS
  - Axios
  - React Router

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **DevOps**:
  - GitHub Actions
  - Docker (coming soon)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- [@TheDiasDay](https://github.com/TheDiasDay) - Lead Developer

## 🙏 Acknowledgments

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) 