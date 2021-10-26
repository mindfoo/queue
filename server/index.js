const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

app.use(express.json());

// configure CORS
app.use(cors({
  origin: true,
  credentials: true
}));

// use routes
app.get('/', function(req, res) {
    res.send('Hello World!')
});
  
// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


