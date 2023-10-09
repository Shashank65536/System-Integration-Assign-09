const express = require('express');
const axios = require('axios');

const app = express();
const lambdaURL = 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-686f1229-639f-4ced-b5be-4c6262d2c80d/default/hello/args';

app.get('/say', async (req, res) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.status(400).json({ error: 'Missing keyword query parameter' });
    }

    const response = await axios.get(lambdaURL, {
      params: {
        keyword,
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});