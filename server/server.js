const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); 
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); 

// --- MOCK ROUTING ENGINE ---
// This is where your 'Phase 1: US -> Pakistan' logic lives
app.get('/api/quote', (req, res) => {
  const amount = parseFloat(req.query.amount) || 1000;
  
  // Real-world logic: Compare bank wire ($50) vs Pixie ($5 sub + 0.5% spread)
  const savings = 50 - (5 + (amount * 0.005)); 
  
  res.json({
    source: "USD",
    destination: "PKR",
    pixieFee: 5.00,
    estimatedSavings: savings.toFixed(2),
    settlementTime: "12 Minutes"
  });
});

app.listen(PORT, () => {
  console.log(`Pixie Server running on port ${PORT}`);
});
