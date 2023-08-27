const express = require('express');

/*const promptRoutes = require('./routes/promptRoutes');
//app.use('/prompt', promptRoutes);
*/

let { mongoose } = require('./config/mongodb');
const { Prompts } = require("./schemas/prompts");


const app = express();
const PORT = 3000;
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
});

/**
 * PROMPT API
 */

//works
app.post('/prompt', async(req, res) => {
    try {
        const newPrompt = new Prompts({
            promptQuestion: req.body.promptQuestion,
            topic: req.body.topic
        })
        const result = await newPrompt.save();
        res.status(201);
        res.send(result);
    }catch {
        res.status(404);
        res.send({
            error: "Prompt could not be saved!"
        })
    }
});

//works
app.get('/prompt', async (req, res) => {
    try{
        Prompts.find({
        }).then(async (Prompts) => {
            console.log(Prompts);
            res.send(Prompts);
        })
    } catch {
        res.status(404);
        res.send({
            error: "Prompts could not be read!"
        })
    }
});

//works
app.get('/prompt/:id', async (req, res) => {
    try{
        const prompt = await Prompts.findOne({_id: req.params.id});
        console.log(prompt);
        res.send(prompt);
    } catch {
        res.status(404);
        res.send({
            error: "Prompt could not be read!"
        })
    }
});

//doesnt work
app.get('prompt/random', async(req, res) => {
    try{
        const allPrompts = Prompts.find({})
        let random = Math.floor(Math.random()*allPrompts.length)
        let randPrompt = allPrompts[random]
        console.log(randPrompt)
        res.send(randPrompt)
    } catch {
        res.status(404);
        res.send({
            error: "Random prompt could not be read!"
        })
    }
});

// works
app.delete('/prompt/:id', async (req, res) => {
    try {
        await Prompts.deleteOne({_id: req.params.id})
        console.log('Entry was deleted')
        res.send()
    }
    catch {
        res.status(404)
        res.send({
            error: "Prompt could not be deleted!"
        })
    }
});
