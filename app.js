const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//https://music-api-j95.herokuapp.com
//sdsf

const songs = [{
    id: '1',
    title: 'Yesterday (ak9 & MIDIcal Remix)', 
    artist: 'Borgeous & Zaeden',
    audioUrl: 'https://docs.google.com/uc?export=download&id=1NUIqDC6m4JwtEyTiHelZUIobm5zOzNuR',
    cover: 'https://i1.sndcdn.com/artworks-000147243714-60q2xq-t500x500.jpg',
    
}]

app.get('/', (_, res) => {
    res.send('Express App');
});

app.get('/songs', (_, res) =>{
    res.json({ ok: true, songs })
})

app.get('/song/:title', (req, res) =>{
    const {title} = req.params;
    const song = songs.filter((song) => song.title === title)[0];
    res.json({ ok: true, song});
})


app.post('/addsong', (req, res) => {
    const { title, artist } = req.body;
    if(title && artist) {
        songs.push({ title, artist});
        res.json({ ok: true, songs});
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});