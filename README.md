# QR Code Generator 🔗✨

A modern, responsive web application to generate QR Codes for WhatsApp, Phone, PayPal, URL, Email, and WiFi!  
Users can download the generated QR Codes in PNG or SVG formats. Built with **Express.js** and styled with **Tailwind CSS** for a sleek, modern look.  

---

## 🌟 Features
- 📱 **WhatsApp and Phone Numbers**: Generate QR codes for quick dialing and messaging.  
- 💳 **PayPal**: Link directly to PayPal.me for payments.  
- 🌐 **URL**: Share website links with scannable QR codes.  
- ✉️ **Email**: Generate mailto QR codes for easy email setup.  
- 📶 **WiFi**: Create QR codes to share WiFi credentials with ease.  
- 🎨 **Responsive Design**: Looks great on both small and large screens.  
- ⬇️ **Download Options**: Dropdown menu to download QR codes in PNG or SVG formats.  
- 🔄 **Reset Functionality**: Clear the form and start fresh with a single button click.  

---

## 📂 Project Structure
```
qr-code-generator/
├── server.js            # Express.js server setup
├── package.json         # Project dependencies and scripts
├── views/
│   └── index.ejs        # Main HTML template using EJS
└── node_modules/        # Installed dependencies
```

---

## 🚀 Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/Karandev2007/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 💻 Usage

1. Choose an option (e.g., WhatsApp, Phone, URL, etc.) from the buttons on the left.  
2. Fill in the required details in the form (e.g., phone number, URL, etc.).  
3. Click **Generate QR Code** to generate the QR code.  
4. Use the **Download** button to save the QR code as PNG or SVG.  
5. Click **Create New** to create new QR code.

---

## 🛠️ Built With
- **Express.js** 🌐: Backend server for API and routing.  
- **EJS** 📄: Template engine for dynamic HTML rendering.  
- **Tailwind CSS** 🎨: For modern, responsive, and clean styling.  
- **QRCode Library** 📸: To generate QR codes dynamically.  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Karandev2007**  
[GitHub Profile](https://github.com/Karandev2007)  
Made with ❤️ and lots of ☕!
