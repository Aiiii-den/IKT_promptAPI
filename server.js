const express = require('express');

const promptRoutes = require('./routes/promptRoutes');
const randomPromptRoutes = require('./routes/randomPromptRoutes');


const app = express();
const PORT = 8082;
const cors = require('cors')
app.use(express.json());
app.use(cors());
app.use('/prompt', promptRoutes);
app.use('/random', randomPromptRoutes);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
});

