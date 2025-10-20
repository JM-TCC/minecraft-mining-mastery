# Minecraft Mining Mastery

A comprehensive Node.js website dedicated to teaching the best mining strategies in Minecraft. Features detailed guides for different resources, optimal mining techniques, and information about helpful mods.

## Features

- **Professional Design**: Minecraft/creeper-themed UI with modern animations
- **Comprehensive Mining Guides**: Step-by-step strategies for diamonds, iron, redstone, gold, emerald, and lapis
- **Interactive Resource Tabs**: Easy navigation between different mining resources
- **Mod Recommendations**: Curated list of helpful mods for enhanced mining
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Interactive Elements**: Animated creeper face, particle effects, and smooth transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet with Minecraft theme
│   ├── js/
│   │   └── main.js            # Interactive JavaScript functionality
│   └── images/                # Image assets (if any)
├── views/
│   ├── layout.ejs             # Main layout template
│   ├── index.ejs              # Homepage
│   ├── mining-guide.ejs       # Mining strategies page
│   └── mods.ejs               # Mods recommendations page
├── server.js                  # Express server configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## Pages

### Homepage (`/`)
- Hero section with animated creeper face
- Feature overview cards
- Quick start guide
- Call-to-action buttons

### Mining Guide (`/mining-guide`)
- Interactive resource tabs (Diamonds, Iron, Redstone, Gold, Emerald, Lapis)
- Detailed mining strategies for each resource
- Y-level recommendations
- Tool and enchantment guides
- Safety tips and advanced techniques

### Mods (`/mods`)
- Categorized mod recommendations
- Detailed mod descriptions and features
- Download links and compatibility information
- Installation guide

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Orbitron, Roboto)

## Color Scheme

The website uses a Minecraft-inspired color palette:
- **Creeper Green**: Primary brand color (#4a5d23)
- **Minecraft Diamond Blue**: Accent color (#5dade2)
- **Dark Background**: Deep black/green gradient
- **Text Colors**: White and light gray for readability

## Features in Detail

### Interactive Elements
- Animated creeper face that responds to clicks
- Smooth scrolling navigation
- Tab-based content switching
- Hover effects and transitions
- Particle effects on the hero section

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

### Performance
- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Fast loading times
- Smooth animations using CSS transforms

## Customization

### Adding New Resources
1. Add a new tab button in the resource navigation
2. Create corresponding content section
3. Update JavaScript tab functionality

### Modifying Colors
- Update CSS custom properties in `:root` selector
- All colors are defined as variables for easy customization

### Adding New Pages
1. Create new EJS template in `views/` directory
2. Add route in `server.js`
3. Update navigation menu

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the website.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Minecraft and Mojang Studios for the amazing game
- The Minecraft modding community for inspiration
- Font Awesome for the excellent icon library
- Google Fonts for the typography
