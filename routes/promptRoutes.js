const express = require('express');
const router = express.Router();
const mongoose = require('../config/mongodb');
const { Prompts } = require('../schemas/promptsSchema');

router.post('', async(req, res) => {
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

router.get('', async (req, res) => {
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

router.get('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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


module.exports = router;
