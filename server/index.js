require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Telegram Bot Setup
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Replace this URL with your ngrok HTTPS URL
const WEBAPP_URL = process.env.WEBAPP_URL || 'https://your-ngrok-url-here';

// Bot command handlers
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Добро пожаловать в Hackathon Portal! 🚀', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: 'Открыть приложение',
          web_app: { url: WEBAPP_URL }
        }
      ]]
    }
  });
});

// Models
const User = require('./models/User');
const Hackathon = require('./models/Hackathon');

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/hackathons', require('./routes/hackathons'));

// Telegram WebApp Authentication Middleware
const authenticateTelegramUser = async (req, res, next) => {
  const initData = req.headers['x-telegram-init-data'];
  if (!initData) {
    return res.status(401).json({ message: 'No Telegram init data provided' });
  }
  // Here you would validate the init data with your bot token
  // For demo purposes, we'll just pass through
  next();
};

app.use('/api/*', authenticateTelegramUser);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 