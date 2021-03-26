const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const songs = [{
    id: '1',
    title: 'Yesterday (ak9 & MIDIcal Remix)', 
    artist: 'Borgeous & Zaeden',
    audioUrl: 'https://www.dropbox.com/home/music?preview=Borgeous+%26+Zaeden+-+Yesterday+(ak9+%26+MIDIcal+Remix).mp3',
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