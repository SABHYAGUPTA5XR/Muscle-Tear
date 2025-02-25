# MUSCLE TEAR

MUSCLE TEAR is a premium fitness-themed e-commerce website that empowers users to push limits and break barriers with high-quality fitness gear and supplements. The website is built using HTML, CSS, and vanilla JavaScript (with localStorage for cart management and EmailJS for email integration) and is designed to be fully responsive across all devices.

## Table of Contents

- [Overview](#overview)
- [Pages & Features](#pages--features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Overview

MUSCLE TEAR is designed to inspire and empower fitness enthusiasts by providing premium products, engaging content, and a user-friendly experience. The website features bold, energetic visuals with a dark theme accented by red, aligning with the brand's strong personality.

## Pages & Features

### Home Page
- **Hero Section:** Bold tagline and call-to-action buttons to "Shop Now" and "Explore More."
- **Featured Products:** A grid showcasing key products.
- **Testimonials:** Customer reviews and success stories to build trust and credibility.

### About Page
- **Brand Story & Mission:** An expanded introduction that details the vision and values of MUSCLE TEAR.
- **Meet the Team:** Profiles of team members with links to their LinkedIn profiles.

### Products Page
- **Product Grid:** Display of product cards with images, names, and prices.
- **Add to Cart Functionality:** Each product card features an "Add to Cart" button that updates the cart stored in localStorage.

### Product Description Pages
- **Detailed Product Information:** Individual pages (e.g., Protein Supplement, Workout Gloves, etc.) featuring comprehensive product descriptions, usage instructions, pricing details, and an "Add to Cart" button.

### Cart Page
- **Dynamic Cart:** Displays items added to the cart with images, names, quantities, and prices. Users can remove items, and the total price updates automatically.

### Settings Page
- **User Account Details:** A form allowing users to update their account information.

## Technologies Used

- **HTML5** – for structuring content.
- **CSS3** – for styling and responsive design.
- **Vanilla JavaScript** – for dynamic functionality (cart management, theme toggling, etc.).
- **LocalStorage** – for storing cart data client-side.
- **EmailJS** – for integrating email notifications (order confirmations and auto-replies).
# MUSCLE TEAR

## Project Structure
```
MUSCLE-TEAR/
├── assets/
│   └── images/
│       ├── protein.jpg
│       ├── gloves.jpg
│       ├── shaker.jpg
│       ├── towel.jpg
│       ├── fitness.jpg
│       ├── resistanceBand.jpg
│       ├── hero-bg.jpg
│       └── ... (other images)
├── index.html
├── about.html
├── products.html
├── proteinSupplement.html
├── workoutGloves.html
├── gymShaker.html
├── workoutTowel.html
├── fitnessTracker.html
├── resistanceBand.html
├── cart.html
├── settings.html
├── script.js
├── styles.css
```

## Installation & Setup

### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/MUSCLE-TEAR.git
```

### 2. Open the Project:
- Simply open `index.html` in your web browser to view the website.
- Ensure that the `assets` folder and all HTML, CSS, and JS files are in the correct relative paths.

### 3. EmailJS Configuration:
- Update the EmailJS configuration in `script.js` with your own user ID, service ID, and template ID.

## Future Enhancements

### React & React Components:
- We plan to refactor the project using React to create more dynamic and modular components, improving the overall user experience.

### Enhanced UI/UX:
- Implementation of advanced animations, transitions, and responsive components to provide an even smoother interface.

### Backend Integration:
- Integration with backend services for user authentication, order processing, and database management.

### Additional Features:
- Real-time chat support, personalized product recommendations, and more interactive elements.

## Acknowledgements

### Inspiration:
- Inspired by modern e-commerce websites and fitness brands.

### EmailJS:
- Special thanks to EmailJS for providing an easy solution for email integration.

## License
This project is licensed under the MIT License.
