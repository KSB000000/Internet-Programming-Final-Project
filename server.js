const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/search/image', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
                q: query,
                searchType: 'image',
                num: 1,
                key: 'AIzaSyAS36-3C0roZP6bDaMAEsn8gF5rJpx3qwY', // API 키
                cx: '53b1f511663484fd0' // Custom Search Engine ID
            }
        });

        if (response.data.items && response.data.items.length > 0) {
            res.json(response.data.items[0].link); // 첫 번째 이미지 링크 반환
        } else {
            res.status(404).json({ error: 'No image found' });
        }
    } catch (error) {
        console.error('Error fetching the image:', error.message);
        console.error('Error details:', error.response ? error.response.data : error); // 자세한 오류 메시지 출력
        res.status(500).json({ error: 'Error fetching the image' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
