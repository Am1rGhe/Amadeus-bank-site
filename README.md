# Aureus Bank

A modern, interactive banking web application built with vanilla HTML, CSS, and JavaScript. Experience a beautiful UI with smooth animations and a complete banking interface for managing your finances.

![Aureus Bank](https://img.shields.io/badge/Bank-Aureus-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🔐 Authentication
- **Login System**: Secure login with username and PIN
- **Sign Up**: Create new accounts with first name, last name, and PIN
- **Username Generation**: Automatic username creation from initials (e.g., "Amir Ghouari" → "ag")

### 💳 Banking Operations
- **Deposits**: Add funds to your account
- **Withdrawals**: Withdraw money (with balance validation)
- **Transfers**: Send money to other users by username
- **Transaction History**: View all your deposits and withdrawals in chronological order

### 🎨 Interactive UI
- **3D Credit Card**: Hover to flip and see card details and balance
- **Bento Grid Layout**: Modern, organized dashboard design
- **Currency Converter**: Convert USD to EUR with real-time calculations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎯 User Experience
- **Smooth Animations**: Transitions and hover effects throughout
- **Modal Notifications**: Success and error messages
- **Form Validation**: Input validation for all operations
- **Balance Tracking**: Real-time balance updates

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Amadeus-bank-site.git
   cd Amadeus-bank-site
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or double-click `index.html` to open directly

## 👤 Test Accounts

The application comes with two pre-configured accounts for testing:

### Account 1
- **Name**: Amir Ghouari
- **Username**: `ag`
- **PIN**: `1111`
- **Initial Balance**: $411.50

### Account 2
- **Name**: Sophie Lambert
- **Username**: `sl`
- **PIN**: `2222`
- **Initial Balance**: $41.00

## 📖 Usage Guide

### Creating an Account
1. Click "Sign in" button in the navbar
2. Fill in your first name, last name
3. Choose a 4-digit PIN
4. Confirm your PIN
5. Click "Create Account"
6. Your username will be automatically generated from your initials

### Logging In
1. Enter your username (e.g., `ag` for Amir Ghouari)
2. Enter your 4-digit PIN
3. Click "Login"

### Making Transactions
- **Deposit**: Enter amount and click "Confirm"
- **Withdraw**: Enter amount (must not exceed balance) and click "Withdraw"
- **Transfer**: Enter recipient username and amount, then click "Transfer"

### Viewing Card Details
- Hover over the credit card to see the back with your balance
- Card displays your name, PIN, and account balance

### Currency Conversion
- Enter USD amount in the converter
- Click "Convert" to see equivalent EUR amount
- Exchange rate: 1 USD = 1.17 EUR

## 🏗️ Project Structure

```
Amadeus-bank-site/
│
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Application logic and functionality
├── README.md           # This file
│
└── assets/             # Images and icons
    ├── Bank-logo.png
    ├── chip.png
    ├── european.png
    ├── facebook.svg
    ├── favicon.png
    ├── google.svg
    ├── logo.png
    ├── map.png
    ├── side-image.jpg
    ├── united-states-of-america.png
    └── visa.png
```

## 🎨 Design Features

- **Modern Bento Grid Layout**: Organized dashboard with card-based design
- **Gradient Backgrounds**: Beautiful color gradients for operations
- **3D Card Animation**: CSS 3D transforms for card flip effect
- **Responsive Grid**: Adapts to different screen sizes
- **Smooth Transitions**: CSS transitions for better UX
- **Custom Fonts**: Mona Sans from Google Fonts

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - 3D Transforms
  - Custom Properties
- **JavaScript (ES6+)**:
  - DOM Manipulation
  - Event Handling
  - Array Methods (map, reduce, find, forEach)
  - Arrow Functions

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🚧 Future Enhancements

Potential features for future development:
- [ ] Backend integration for persistent data storage
- [ ] Real-time currency exchange rates API
- [ ] Transaction history export
- [ ] Multiple currency support
- [ ] Account settings and profile management
- [ ] Two-factor authentication
- [ ] Dark mode toggle
- [ ] Transaction search and filtering

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for modern banking experiences.

## 🙏 Acknowledgments

- Design inspiration from modern banking applications
- Google Fonts for the beautiful typography
- All the open-source community for inspiration and support

---

**Note**: This is a front-end demonstration project. All data is stored locally in JavaScript and will reset on page refresh. For production use, integrate with a backend API and database.
