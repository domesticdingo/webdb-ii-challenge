const express = require('express');
const knex = require('knex');

const knexConfiguration = {
    client: "sqlite3",
    connection: {
        filename: "./data/car-dealer.db3",
    },
    useNullAsDefault: true,
};

const db = knex(knexConfiguration);

const server = express();

server.use(express.json());

//  V ENDPOINTS V

server.get('/', (req, res) => {
    res.send("It's alive!")
})

server.get('/cars', (req,res) => {
    db('cars')
        .then(cars => res.status(200).json(cars))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error getting the cars data." })
        });
});

server.post('/cars', (req, res) => {
    const car = req.body;

    db('cars').insert(car)
        .then(car => res.status(200).json(car))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error adding the car to the database." })
        });
});

module.exports = server;