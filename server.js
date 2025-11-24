
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>Your Node.js app is live!</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running! Open this link in your browser:`);
  console.log(`http://localhost:${PORT}`);
  console.log(`(Press Ctrl + C to stop)`);
});
















