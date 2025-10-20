# Setup Instructions for Minecraft Mining Mastery Website

## Prerequisites

Before running this website, you need to install Node.js on your system.

### Installing Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for Windows
   - Choose the Windows Installer (.msi) for your system architecture (64-bit recommended)

2. **Install Node.js**:
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation**:
   - Open a new Command Prompt or PowerShell window
   - Run: `node --version`
   - Run: `npm --version`
   - Both commands should return version numbers

## Running the Website

Once Node.js is installed:

1. **Open Terminal/Command Prompt**:
   - Navigate to the project directory: `cd C:\CursorProjects\Personal\JaneWebsite`

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Access the Website**:
   - Open your web browser
   - Navigate to: `http://localhost:3000`

## Alternative: Using npx (if npm is available)

If you have npm but want to avoid installing dependencies globally:

```bash
npx express-generator
npx nodemon server.js
```

## Troubleshooting

### If you get "command not found" errors:
- Make sure Node.js is properly installed
- Restart your terminal/command prompt
- Check that Node.js is added to your system PATH

### If you get port errors:
- The default port is 3000
- If port 3000 is in use, the server will try to use an alternative port
- Check the console output for the actual port being used

### If you get module errors:
- Make sure you've run `npm install` first
- Check that all files are in the correct locations
- Verify the package.json file is present

## Project Structure

Make sure your project has this structure:
```
JaneWebsite/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── mining-guide.ejs
│   └── mods.ejs
├── server.js
├── package.json
└── README.md
```

## Features to Test

Once the server is running, test these features:

1. **Homepage**: Animated creeper face, feature cards, navigation
2. **Mining Guide**: Resource tabs, detailed strategies, tool recommendations
3. **Mods Page**: Category tabs, mod cards, installation guide
4. **Responsive Design**: Test on different screen sizes
5. **Interactive Elements**: Click the creeper face, hover effects, smooth scrolling

## Next Steps

After getting the basic site running, you can:
- Add more mining resources to the guide
- Include more mods in the recommendations
- Add user accounts and favorites
- Implement a search functionality
- Add more interactive features

## Support

If you encounter any issues:
1. Check the console output for error messages
2. Verify all files are present and correctly named
3. Ensure Node.js and npm are properly installed
4. Try restarting the server
