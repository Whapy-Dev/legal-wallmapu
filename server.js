const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

// Redirect root to privacy
app.get('/', (req, res) => {
  res.redirect('/privacy');
});

app.listen(PORT, () => {
  console.log(`Legal pages running on http://localhost:${PORT}`);
});
