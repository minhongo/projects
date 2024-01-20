const express = require('express');
const routes = require('./routes/frontendRoutes.js');

const app = express();
const PORT = process.env.PORT;
// const PORT = 3001;

// app.use('/api', (req, res, next) => {
//     res.setHeader('Cache-Control', 'no-store');
//     next();
// });

app.use(express.json());
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));
app.use(routes);

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));