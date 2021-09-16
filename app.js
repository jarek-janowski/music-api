const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//https://music-api-j95.herokuapp.com

const songs = [
    {
        id: '1',
        title: "Everyday (Netsky Remix VIP)", 
        artist: 'Rusko',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1_ubZjc8HxO-ak3eo0jLcG5svr0-E6vR7',
        cover: 'https://f4.bcbits.com/img/a2109517850_10.jpg',
    },
    {
        id: '1',
        title: 'Yesterday (ak9 & MIDIcal Remix)', 
        artist: 'Borgeous & Zaeden',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1d43Oum5loLRBijQAl8UbZjFGobIn9p7G',
        cover: 'https://i1.sndcdn.com/artworks-000147243714-60q2xq-t500x500.jpg',
    },
    {
        id: '2',
        title: 'Heathens (Magnetude Bootleg)', 
        artist: 'Twenty One Pilots',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1T2qj2lXAgWaweZqXgqvh_BoCNaw1LYYL',
        cover: 'https://i1.sndcdn.com/artworks-000476538615-ejx36d-t500x500.jpg',
    },
    {
        id: '3',
        title: 'Ghost feat. RUMORS', 
        artist: 'Oliver Heldens',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1Dsov79Y7SZtstOLq2eirj7VIkwmRXOpg',
        cover: 'https://i1.sndcdn.com/artworks-000150106023-0bhzfe-t500x500.jpg',
    },
    {
        id: '4',
        title: 'Ms. Jackson (San Holo Remix)', 
        artist: 'Outkast',
        audioUrl: 'https://docs.google.com/uc?export=download&id=19TnH1bDamDm0epWXuypmvNTgKCA55egK',
        cover: 'https://lastfm.freetls.fastly.net/i/u/ar0/660dd47a3dad3d6274cfc774c23c6209.jpg',
    },
    {
        id: '5',
        title: 'Your Mind (Matroda Remix)', 
        artist: 'Adam Beyer & Bart Skils',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1ewbZtYSTC_LFmihbXWrtiJ7xKQXh0fr3',
        cover: 'https://i1.sndcdn.com/artworks-000449587323-36jb3n-t500x500.jpg',
    },
    {
        id: '6',
        title: 'Hello (Kryder DnB Remix)', 
        artist: 'Adele',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1mtfXAz-oRMF0TMToOwD5YQHWUXTr3cW5',
        cover: 'https://i1.sndcdn.com/artworks-000136003376-du81tp-t500x500.jpg',
    },
    {
        id: '7',
        title: 'Countin 100s', 
        artist: 'ANGELZ',
        audioUrl: 'https://docs.google.com/uc?export=download&id=12FZ9zzzwMlUrJ9Tj4d8cprkpUA02aYut',
        cover: 'https://i1.sndcdn.com/artworks-000618292750-n35cmx-t500x500.jpg',
    },
    {
        id: '8',
        title: 'Feel The Vibe (Marcus Schossow 2013 Remode)', 
        artist: 'Axwell',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1xwt9dWeKf2R6o2gGZmsAbzwyr_wKWE1q',
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
        title: "Kill'em With Kindness (STVCKS Remix)", 
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
        title: "In The Morning (Matroda Remix)", 
        artist: 'ZHU',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1SFT_eLkfjdH4aIgt2JrPoppHzn81rPoZ',
        cover: 'https://i1.sndcdn.com/artworks-000167495809-wsrmfg-t500x500.jpg',
    },
    {
        id: '32',
        title: "Aftertaste", 
        artist: 'Cosmo & Skoro',
        audioUrl: 'https://docs.google.com/uc?export=download&id=11TdxoM6syoRBmBKP4qPUcEnyze0HG4Ne',
        cover: 'https://i1.sndcdn.com/avatars-000219585275-99i4ae-t500x500.jpg',
    },
    {
        id: '33',
        title: "Adventure of a Lifetime (CID Remix)", 
        artist: 'Coldplay',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1J12YJQeR_FLCV8Xxypjx3l6YIHf-ZMlX',
        cover: 'https://i1.sndcdn.com/artworks-000151030646-kglz9t-t500x500.jpg',
    },
    {
        id: '34',
        title: "Me, Myself & I (Mesto Remix)", 
        artist: 'G-Eazy & Bebe Rexha',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1v6ElDTaDB7VysNiwUni0FRHUv-obWJCU',
        cover: 'https://i1.sndcdn.com/artworks-000159969498-bkas3m-t500x500.jpg',
    },
    {
        id: '35',
        title: "High Life (Olin Batista Bootleg)", 
        artist: 'Daft Punk',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1YIu1cCr5wEeJAis7BtvqgOQq2ju7LRlt',
        cover: 'https://i1.sndcdn.com/avatars-000144971969-bjb71w-t500x500.jpg',
    },
    {
        id: '36',
        title: "Shadows (Claes Rosen Remix)", 
        artist: 'Pryda',
        audioUrl: 'https://docs.google.com/uc?export=download&id=16A-w8ZHBt_-sJn7ICniaw3ndu4vMrssY',
        cover: 'https://i1.sndcdn.com/artworks-000089365137-to28n5-t500x500.jpg',
    },
    {
        id: '37',
        title: "Dark River (Olin Batista Remix)", 
        artist: 'Ingrosso',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1n0Q4Qa840-ZnglD1a21RrzMvn9cii6lf',
        cover: 'https://i1.sndcdn.com/artworks-000202673885-awdvxx-t500x500.jpg',
    },
    {
        id: '38',
        title: "Not Going Home (Mesto Remix)", 
        artist: 'DVBBS & CMC$',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1lxyvRExLLvJpFYpaEtIh6xqimRHee0Xp',
        cover: 'https://i1.sndcdn.com/artworks-000216375816-384px0-t500x500.jpg',
    },
    {
        id: '39',
        title: "Leave The World Behind (Bottai Remix)", 
        artist: 'Axwell & Ingrosso, Angello',
        audioUrl: 'https://docs.google.com/uc?export=download&id=10PjDunljbvVk3GdrIry1SWzcaoQfU33y',
        cover: 'https://i1.sndcdn.com/artworks-000244994163-kfu382-t500x500.jpg',
    },
    {
        id: '40',
        title: "Radioactive (Vintage Culture & Religare Remix)", 
        artist: 'Imagine Dragons',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1agWW8mdBLMI8nz10xJBF5MHRi1D3r8IC',
        cover: 'https://i1.sndcdn.com/artworks-000252594680-6n15rs-t500x500.jpg',
    },
    {
        id: '41',
        title: "Be (BROHUG Edit)", 
        artist: 'Steve Angello & Laidback Luke',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1KfbCbD_Aepy5f0FxePO4ytJgjGOrwRim',
        cover: 'https://i1.sndcdn.com/artworks-000272589881-17436n-t500x500.jpg',
    },
    {
        id: '42',
        title: "Put Em High", 
        artist: 'Tom Swoon',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1LESo5tSxzmtBVM7n1qsnKN4U4YFRjvsf',
        cover: 'https://i1.sndcdn.com/artworks-000347982714-fdrxxj-t500x500.jpg',
    },
    {
        id: '43',
        title: "Renegade Mastah (Paskal Remix)", 
        artist: 'HI-LO',
        audioUrl: 'https://docs.google.com/uc?export=download&id=11RqzOKbFqUfCoCVZNAje1oMYDSkjheov',
        cover: 'https://i1.sndcdn.com/artworks-000122493202-wgaepr-t500x500.jpg',
    },
    {
        id: '44',
        title: "Don't Mess With My Man (Charles J Rework)", 
        artist: 'Lucy Pearl',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1vUFzu6gqZ_6-vbmw70VvtQ9q7mJCpYAG',
        cover: 'https://i1.sndcdn.com/artworks-Dax2dfQ1ULzzHb47-g3WoFw-t500x500.jpg',
    },
    {
        id: '45',
        title: "King Kong vs The Sound Of Disco", 
        artist: 'Oliver Heldens vs Joachim Garraud',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1i5ttFzfoXtOBq7jiAyZ6390_XE5Juex_',
        cover: 'https://i1.sndcdn.com/artworks-000319140540-bwrlnc-t500x500.jpg',
    },
    {
        id: '46',
        title: "Destination Calabria (Snowx 2K19 Remix)", 
        artist: 'Alex Gaudino',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1XKVk0yNG0Ub56y1GWQpTDTnH2Ifom1sR',
        cover: 'https://i1.sndcdn.com/artworks-p1ycMhB7211h3REH-CjUTOA-t500x500.jpg',
    },
    {
        id: '47',
        title: "We Are Legends", 
        artist: 'Martin Garrix',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1xqmHz8WnxGMLddGXabDK6NpBPCi_7ETV',
        cover: 'https://i1.sndcdn.com/avatars-jeHVYviIFVN6NhwM-hrYWeg-t500x500.jpg',
    },
    {
        id: '48',
        title: "Pjanoo (Lucas & Steve Remix)", 
        artist: 'Eric Prydz',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1nUNbIgOvyHblPDRW1xB4Ptpr6Fh1U7yr',
        cover: 'https://i1.sndcdn.com/artworks-000557882265-ecql46-t500x500.jpg',
    },
    {
        id: '49',
        title: "Stay (Music Is The Answer) edit", 
        artist: 'Kryder',
        audioUrl: 'https://docs.google.com/uc?export=download&id=1Dpa3dhh-1Gb4mNoZnk2vVr_d-jUYDbpg',
        cover: 'https://i1.sndcdn.com/artworks-000642587128-uo6aje-t500x500.jpg',
    },
    {
        id: '50',
        title: "Lose Control (eSQUIRE Classic Remix)", 
        artist: 'Meduza',
        audioUrl: 'https://docs.google.com/uc?export=download&id=11lMhJRqCdvb7AKQIdhpWRwYW8RS3rf_M',
        cover: 'https://i1.sndcdn.com/artworks-000641491177-gm3oi4-t500x500.jpg',
    }
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