const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const items =require('./data/item.json');
const corce = require('./data/corce.json')


app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/items', (req, res) => {
    res.send(items);
});

app.get('/item/:id' , (req, res)=>{
    const id = req.params.id;
    const oneprodect = corce.find(p => p.id == id);
    res.send(oneprodect)
})


app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
