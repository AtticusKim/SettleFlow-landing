const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'demo-requests.json');
const CONTACT_FILE = path.join(__dirname, 'contact-messages.json');

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (error) {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

async function ensureContactFile() {
  try {
    await fs.access(CONTACT_FILE);
  } catch (error) {
    await fs.writeFile(CONTACT_FILE, JSON.stringify([], null, 2));
  }
}

async function saveContactMessage(message) {
  await ensureContactFile();

  const existingData = await fs.readFile(CONTACT_FILE, 'utf8');
  const messages = JSON.parse(existingData);

  const newMessage = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    message: message.trim()
  };

  messages.push(newMessage);

  await fs.writeFile(CONTACT_FILE, JSON.stringify(messages, null, 2));
  return newMessage;
}

async function saveRequest(requestData) {
  await ensureDataFile();

  const existingData = await fs.readFile(DATA_FILE, 'utf8');
  const requests = JSON.parse(existingData);

  const newRequest = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    ...requestData
  };

  requests.push(newRequest);

  await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2));
  return newRequest;
}

app.post('/api/demo-request', async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    if (!name || !email || !company) {
      return res.status(400).json({
        error: 'Name, email, and company are required fields'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    const savedRequest = await saveRequest({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      phone: phone ? phone.trim() : '',
      message: message ? message.trim() : ''
    });

    console.log(`New demo request from ${savedRequest.name} at ${savedRequest.company}`);

    res.json({
      success: true,
      message: 'Demo request submitted successfully',
      id: savedRequest.id
    });

  } catch (error) {
    console.error('Error saving demo request:', error);
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
});

app.get('/api/demo-requests', async (req, res) => {
  try {
    await ensureDataFile();
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const requests = JSON.parse(data);

    res.json({
      success: true,
      count: requests.length,
      requests: requests.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    });
  } catch (error) {
    console.error('Error retrieving demo requests:', error);
    res.status(500).json({
      error: 'Error retrieving requests'
    });
  }
});

app.post('/api/contact-message', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required'
      });
    }

    const savedMessage = await saveContactMessage(message);

    console.log(`New contact message saved with ID ${savedMessage.id}`);

    res.json({
      success: true,
      message: 'Message received successfully',
      id: savedMessage.id
    });

  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({
      error: 'Failed to save message. Please try again later.'
    });
  }
});

app.get('/api/contact-messages', async (req, res) => {
  try {
    await ensureContactFile();
    const data = await fs.readFile(CONTACT_FILE, 'utf8');
    const messages = JSON.parse(data);

    res.json({
      success: true,
      count: messages.length,
      messages: messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    });
  } catch (error) {
    console.error('Error retrieving contact messages:', error);
    res.status(500).json({
      error: 'Error retrieving messages'
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`SettleFlow server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`View demo requests: http://localhost:${PORT}/api/demo-requests`);
  console.log(`View contact messages: http://localhost:${PORT}/api/contact-messages`);
});

module.exports = app;