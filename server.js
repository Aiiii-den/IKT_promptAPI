const express = require('express');

const promptRoutes = require('./routes/promptRoutes');
const randomPromptRoutes = require('./routes/randomPromptRoutes');


const app = express();
const PORT = 8082;
const cors = require('cors')
app.use(express.json());
app.use(cors({
    origin: ['https://localhost:8080/', 'https://localhost:8081/', 'https://localhost:8082/',
        'http://127.0.0.1:8080', 'http://127.0.0.1:8081', 'http://127.0.0.1:8082',
        'https://ikt-frontend-new.vercel.app/', 'https://ikt-frontend-new-git-main-aiiii-den.vercel.app/', 'https://ikt-frontend-kord9vk6t-aiiii-den.vercel.app/']
}));
app.options('*', cors())
app.use('/prompt', promptRoutes);
app.use('/random', randomPromptRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running`);
    }
});

