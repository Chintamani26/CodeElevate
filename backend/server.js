const express = require('express');
const path = require('path');
const app = express();
const aiRoutes = require('./routes/aiRoutes');

app.use(express.json());
app.use('/api/ai', aiRoutes);

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

// Define your API routes here
app.get('/api/users/common-interests', (req, res) => {
  const users = [
    { user: { id: 3, name: 'Charlie', interests: ['movies', 'sports'] }, commonInterests: ['movies', 'sports'] },
    { user: { id: 2, name: 'Bob', interests: ['music'] }, commonInterests: ['music'] }
  ];
  res.json(users);
});

app.listen(5000, () => console.log("Server running on port 5000"));