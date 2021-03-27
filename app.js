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
    {
        id: '5',
        title: 'Your Mind (Matroda Remix)', 
        artist: 'Adam Beyer & Bart Skils',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1wdt-bzttPJoY4wY_LDLj8okGiZs0BR3T',
        cover: 'https://i1.sndcdn.com/artworks-000449587323-36jb3n-t500x500.jpg',
    },
    {
        id: '6',
        title: 'Hello (Kryder DnB Remix)', 
        artist: 'Adele',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1305WkiocR3QZ_MhoSKJXzmo5EbvaFomg',
        cover: 'https://i1.sndcdn.com/artworks-000136003376-du81tp-t500x500.jpg',
    },
    {
        id: '7',
        title: 'Countin 100s', 
        artist: 'ANGELZ',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1S7ECv0vCvAOrECCWv-2AaQ0LS6aj9sNX',
        cover: 'https://i1.sndcdn.com/artworks-000618292750-n35cmx-t500x500.jpg',
    },
    {
        id: '8',
        title: 'Feel The Vibe (Marcus Schossow 2013 Remode)', 
        artist: 'Axwell',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1ZIIKGaC9Iczby2ByP8p3qB_z0kSKf0mx',
        cover: 'https://www.guettapen.com/wp-content/uploads/2017/02/artworks-000209561703-4jdpz4-t500x500.jpg',
    },
    {
        id: '9',
        title: 'Bounce Back (Vanic Remix)', 
        artist: 'Big Sean',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1JFCxipiE1UKukhxD8HYO9w9Uungjz3yi',
        cover: 'https://i1.sndcdn.com/artworks-000231713380-17x35y-t500x500.jpg',
    },
    {
        id: '10',
        title: 'Chase The Sun (Just A Gent Remix)', 
        artist: 'Planet Funk',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1acwM7jXqgBO7s4ETIYxfypPNZW5btJ35',
        cover: 'https://i1.sndcdn.com/artworks-000131147804-yfs4bk-t500x500.jpg',
    },
    {
        id: '11',
        title: 'Stop It (Cheyenne Giles Remix)', 
        artist: 'FISHER',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1mbO5QUGccFGaAZrnPdlz0_cgK_6SiaYX',
        cover: 'https://i1.sndcdn.com/artworks-000262979183-m3eseq-t500x500.jpg',
    },
    {
        id: '12',
        title: 'But A Dream (Vanic Remix)', 
        artist: 'G-Eazy',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1ghUWS6eStzb4i8DxEj0qcxcBWDpUPrm-',
        cover: 'https://i1.sndcdn.com/artworks-000462844779-d2d7jn-t500x500.jpg',
    },
    {
        id: '13',
        title: 'Agatha', 
        artist: 'Hex Cougar',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1cpt0s1LZUXQmu74wjvqyTBkjWz9qv2dK',
        cover: 'https://i1.sndcdn.com/artworks-000244740560-mf3nfe-t500x500.jpg',
    },
    {
        id: '14',
        title: 'Hideaway (Dzeko & Torres Remix)', 
        artist: 'Kiesza',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1Hs1WmouIXl3_PyqX3K5rQnvHborP2ycj',
        cover: 'https://i1.sndcdn.com/artworks-000087111635-361pco-t500x500.jpg',
    },
    {
        id: '15',
        title: 'Colours Of Love (LQ Bootleg)', 
        artist: 'The Layabouts',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1b2n_HRxP0_gQtoEAQl3FMVWVoV2mh7yQ',
        cover: 'https://i1.sndcdn.com/artworks-000475143636-to6i0y-t500x500.jpg',
    },
    {
        id: '16',
        title: 'There For You (Tom Budin Remix)', 
        artist: 'Martin Garrix & Troy Sivan',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1GlU6sKKNsJRuqiZWiChO7eM9cwCWidNi',
        cover: 'https://i1.sndcdn.com/artworks-000224417313-3v2r8m-t500x500.jpg',
    },
    {
        id: '17',
        title: 'Guilt (Ozma Bootleg)', 
        artist: 'Nero',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1NpbTBVhsiK-ZOh9Osh4tR8HNRhsOzIeW',
        cover: 'https://i1.sndcdn.com/artworks-000202659089-chwwlm-t500x500.jpg',
    },
    {
        id: '18',
        title: 'Melody (Angemi U version Bootleg)', 
        artist: 'Oliver Heldens',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1UlGe-DRDYxQRrEsmXYWC9P7lXfc9zYLR',
        cover: 'https://i1.sndcdn.com/artworks-000114668950-c6eco0-t500x500.jpg',
    },
    {
        id: '19',
        title: 'Riot Call (Tasty Glour Remix)', 
        artist: 'Quix',
        audioUrl: 'https://docs.google.com/uc?export=download&id=10HBeES0Szq-Kl7xVWBINbLp1v_s3yaW-',
        cover: 'https://i1.sndcdn.com/artworks-000233465144-y3iwg9-t500x500.jpg',
    },
    {
        id: '20',
        title: 'Stay For It (Paperwings Flip)', 
        artist: 'RL Grime',
        audioUrl: 'https://docs.google.com/uc?export=download&id=10qC5VQQ1t_9XThPDR5Lc8utQS9s73Thx',
        cover: 'https://i1.sndcdn.com/artworks-000231824839-1uhgc7-t500x500.jpg',
    },
    {
        id: '21',
        title: 'Innerbloom (TWO LANES Remix)', 
        artist: 'RÜFÜS',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1Vohu4B9-x5DP__BFtwXIytHRQfE1Dige',
        cover: 'https://i1.sndcdn.com/artworks-000306449025-2qqi4z-t500x500.jpg',
    },
    {
        id: '22',
        title: "Kill'em With Kindness", 
        artist: 'Selena Gomez',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1f2WeZmLmOcCbn2TtlLOJ5gXg4Ku3KaB9',
        cover: 'https://i1.sndcdn.com/artworks-000171331256-3cmk6w-t500x500.jpg',
    },
    {
        id: '23',
        title: "Adieu (heroless Remix)", 
        artist: 'Tchami',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1jpIz6k_zYfXPXM9pkGG5oJ0I2m7Tz706',
        cover: 'https://i1.sndcdn.com/artworks-000231362100-qstarv-t500x500.jpg',
    },
    {
        id: '24',
        title: "Chemicals (Jonas Aden Remix)", 
        artist: 'Tiesto & Don Diablo',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1qvt1q35vKkp_sS7Brn2cr8u5s_F34PbE',
        cover: 'https://i1.sndcdn.com/avatars-000221868659-qterx2-t500x500.jpg',
    },
    {
        id: '25',
        title: "Free (Gai Barone Patternized Bootleg)", 
        artist: 'Ultra Naté',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1tfAk4TYqNJXPawlRAFNAbU69q1vXMjjN',
        cover: 'https://i1.sndcdn.com/artworks-000410836041-shnq4u-t500x500.jpg',
    },
    {
        id: '26',
        title: "Losing You", 
        artist: 'Vanic x Aquilo',
        audioUrl: 'https://docs.google.com/uc?export=download&id=182JK3-i6VugiGXnrv_RKhI1BVWwc8csR',
        cover: 'https://i1.sndcdn.com/artworks-000127782598-wiy3ok-t500x500.jpg',
    },
    {
        id: '27',
        title: "Ghost Voices (Hex Cougar Flip)", 
        artist: 'Virtual Self',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1sdS2vKUQ0XPpRdbDtvvDy-T7vHC_0nay',
        cover: 'https://i1.sndcdn.com/artworks-000268966049-27falh-t500x500.jpg',
    },
    {
        id: '28',
        title: "Rebels (Chocolate Puma Edit)", 
        artist: 'Wiwek',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1LGi9a-ZParezZgTXtl11QKVDvMNKqvw8',
        cover: 'https://i1.sndcdn.com/artworks-000205457398-d6fyzg-t500x500.jpg',
    },
    {
        id: '29',
        title: "I Would Like (STVCKS Remix)", 
        artist: 'Zara Larsson',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1Un0kAvwPVK37CnQ2NH3m7wo35y3oiMRN',
        cover: 'https://i1.sndcdn.com/artworks-000196992441-ltmwrd-t500x500.jpg',
    },
    {
        id: '30',
        title: "Faded (Delta Heavy Bootleg)", 
        artist: 'ZHU',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1bw5BGKtj4DZGlokxn_igW_kldN291QSs',
        cover: 'https://i1.sndcdn.com/artworks-000113399116-e3joyw-t500x500.jpg',
    },
    {
        id: '31',
        title: "In The Morning(Matroda Remix)", 
        artist: 'ZHU',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1SFT_eLkfjdH4aIgt2JrPoppHzn81rPoZ',
        cover: 'https://i1.sndcdn.com/artworks-000167495809-wsrmfg-t500x500.jpg',
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
    const { artist, audioUrl, cover, id, title } = req.body;
    if(artist && audioUrl && cover && id && title) {
        songs.push({ artist, audioUrl, cover, id, title});
        res.json({ ok: true, songs});
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});