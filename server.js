const express = require('express');
const path = require('path');
const QRCode = require('qrcode');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// index.ejs route
app.get('/', (req, res) => {
  res.render('index');
});

// QR code generate api
app.post('/generate', async (req, res) => {
  const { type, input, ssid, password, encryption } = req.body;

  let data;
  switch (type) {
    case 'whatsapp':
      data = `https://wa.me/${input}`;
      break;
    case 'phone':
      data = `tel:${input}`;
      break;
    case 'paypal':
      data = `https://paypal.me/${input}`;
      break;
    case 'url':
      data = input;
      break;
    case 'email':
      data = `mailto:${input}`;
      break;
    case 'wifi':
      data = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
      break;
    default:
      return res.status(400).json({ success: false, message: 'Invalid QR code type.' });
  }

  try {
    const qrCode = await QRCode.toDataURL(data);
    res.json({ success: true, qrCode });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error generating QR Code' });
  }
});

// server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});