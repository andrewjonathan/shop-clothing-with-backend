const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Build API using express
const app = express();

// Sett a port for backend url in port 5000
const port = process.env.PORT || 5000;

// Set the body for parsing a json
app.use(bodyParser.json());

// For escaping space and symbols in json return
app.use(bodyParser.urlencoded({ extended: true }));

// Stands for cross origin request, 
// it is enabling permission for different ports between frontend and backend url
app.use(cors()); 


if (process.env.NODE_ENV === 'production') {
    // Set the route
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle Get Request
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(port, error => {
    if(error) throw error;
    console.log('server running on port ' + port);
});

app.post('/payment', (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    };
  
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  });