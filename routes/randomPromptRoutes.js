const express = require('express');
const router = express.Router();
const mongoose = require('../config/mongodb');
const { Prompts } = require('../schemas/promptsSchema');


router.get('', async(req, res) => {
    try{
        const allPrompts = await Prompts.find({})
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

module.exports = router;