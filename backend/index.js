const express = require('express');
const mongoose = require('mongoose');
const base64 = require('base-64');
const cors = require('cors');
const mongoosePaginate = require('mongoose-paginate-v2');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json({limit: '50mb'}));

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/superheroesDB');
const superheroesSchema = new mongoose.Schema({
    nickname: String,
    real_name: String,
    origin_description: String,
    superpowers: String,
    catch_phrase: String,
    images: []
});

superheroesSchema.plugin(mongoosePaginate);

const Superheroes = new mongoose.model('Superhero', superheroesSchema);

app.get('/superhero', function(req, res) {
    Superheroes.paginate({}, {page: req.query.page, limit: 5})
        .then(response => res.send(response))
        .catch(err => console.log(err))
});


app.post('/superhero', function(req, res) {
    const newHero = new Superheroes({
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        origin_description: req.body.origin_description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
        images: req.body.images
    });
    newHero.save(function(err) {
        if(err) {
            console.log(err);
        } else {
            res.send('Your hero is ready!');
        }
    });
});

app.delete(`/superhero`, function(req, res) {
    Superheroes.deleteOne({_id: req.query.id}, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.send('Deleted successfully.');
        }
    });
});

app.patch(`/superhero`, function(req, res) {
    Superheroes.updateOne({_id: req.query.id},{nickname: req.body.nickname, real_name: req.body.real_name, origin_description: req.body.origin_description,
        superpowers: req.body.superpowers, catch_phrase: req.body.catch_phrase, images: req.body.images}, function(err) {
        if(err) {
            console.log(err);
        } else {
            res.send('Updated successfully.');
        }
    });
});








app.listen(PORT, function() {
    console.log('Server is running');
});
