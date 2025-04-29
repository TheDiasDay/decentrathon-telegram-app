# Hackathon Portal - Telegram Mini App

A Telegram Mini App for managing and discovering hackathons, built with React.js and Node.js.

## Project Structure
```
hackathon-portal/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context
│   │   └── utils/        # Utility functions
│   └── public/           # Static files
└── server/               # Backend Node.js application
    ├── routes/          # API routes
    ├── models/          # MongoDB models
    ├── controllers/     # Route controllers
    └── config/         # Configuration files
```

## Prerequisites

1. Node.js and npm installed
2. MongoDB Atlas account or local MongoDB installation
3. Telegram Bot Token (get from @BotFather)

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
npm install
```

2. Create a .env file in the server directory with:
```
MONGODB_URI=mongodb://localhost:27017/hackathon-portal
BOT_TOKEN=8037012958:AAGkJqs4gyVdIf8LYSu64CQhonWADSCr-SI
PORT=5000
```

3. Start the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
npm install
```

2. Create a .env file in the client directory with:
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_BOT_USERNAME=your_bot_username
```

3. Start the development server:
```bash
npm start
```

## Running the Application

1. Start the backend server (from server directory):
```bash
npm start
```

2. Start the frontend development server (from client directory):
```bash
npm start
```

3. Access the application through your Telegram Bot

## Features

- User onboarding with multi-step form
- Hackathon listing and discovery
- Integration with Telegram WebApp
- User profile and preferences storage
- Responsive design with TailwindCSS 