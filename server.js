const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Minecraft Mining Mastery',
        subtitle: 'Your Ultimate Guide to Efficient Resource Gathering'
    });
});

app.get('/mining-guide', (req, res) => {
    res.render('mining-guide', {
        title: 'Complete Mining Strategies',
        subtitle: 'Master the art of mining in Minecraft'
    });
});

app.get('/mods', (req, res) => {
    res.render('mods', {
        title: 'Advanced Mining Mods',
        subtitle: 'Enhance your mining experience with these powerful mods'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
