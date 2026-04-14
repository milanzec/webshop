const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API radi');
});

app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product id' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
