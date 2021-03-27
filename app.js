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

const songs = [
    {
        id: '1',
        title: 'Yesterday (ak9 & MIDIcal Remix)', 
        artist: 'Borgeous & Zaeden',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1NUIqDC6m4JwtEyTiHelZUIobm5zOzNuR',
        cover: 'https://i1.sndcdn.com/artworks-000147243714-60q2xq-t500x500.jpg',
    },
    {
        id: '2',
        title: 'Heathens (Magnetude Bootleg)', 
        artist: 'Twenty One Pilots',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1YtCeNKzYrEFc-7ln_wSuVdckPopMYSk6',
        cover: 'https://i1.sndcdn.com/artworks-000476538615-ejx36d-t500x500.jpg',
    },
    {
        id: '3',
        title: 'Ghost feat. RUMORS', 
        artist: 'Oliver Heldens',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1kZuBxvu0JABrz-jQWRIDElvUKvKvK-B6',
        cover: 'https://i1.sndcdn.com/artworks-000150106023-0bhzfe-t500x500.jpg',
    },
    {
        id: '4',
        title: 'Ms. Jackson (San Holo Remix)', 
        artist: 'Outkast',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1_L3_n30yztMpFQnbvUujbX2H_8cyxCuv',
        cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/660dd47a3dad3d6274cfc774c23c6209.jpg',
    },
]

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