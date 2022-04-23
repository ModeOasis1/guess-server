const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.send('alive')
})
const players = [];

app.post('/addPlayer', (req, res) => {

    const name = req.body?.name;

    if(players[0]) {
        players.push(name);
        return res.send('/secondPlayerGame');
    }

    players.push(name);
    return res.send('/loader')
})

app.get('/startGame', (req, res) => {
    if(players[1]) {
        return res.send('start');
    }
})

app.listen(PORT, () => {
    console.log(`talia server listening on port ${PORT}`)
})