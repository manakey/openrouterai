const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// フロントエンド用の静的ファイルを配信
app.use(express.static(path.join(__dirname, 'public')));

// チャットAPIのエンドポイント
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        
        // OpenRouter APIの呼び出し
        const response = await axios.post('https://openrouter.ai', {
            model: "anthropic/claude-3.5-sonnet:beta", // 任意のモデルを指定
            messages: messages
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                // 本格的なサイトとして識別してもらうためのヘッダー（任意）
                'HTTP-Referer': req.headers.referer || 'http://localhost:3000', 
                'X-Title': '本格AIチャットサイト'
            }
        });

        res.json({ message: response.data.choices[0].message.content });
    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'サーバーエラーが発生しました。' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
