const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4041;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const songs = [{title: 'Ms. Jackson (San Holo Remix)', artist: 'Outkast'}]


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


// const express =require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 4041;

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json())

// const users = [{name: 'Tony', email: 'tony@gmail.com'}]

// app.get('/', (_, res) => {
//     res.send('Express App');
// });

// app.get('/users', (_, res) => {
//     res.json({ok: true, users});
// });

// app.get('/user/:name', (req, res) =>{
//     const { name } = req.params;
//     const user = users.filter((user) => user.name === name)[0];
//     res.json({ ok: true, user });
// })

// app.post('/adduser', (req, res) => {
//     const {name, email} = req.body;
//     if(name && email){
//         users.push({name, email});
//         res.json({ok: true, users})
//     }
// });

// app.listen(port, () => {
//     console.log(`server is running on port: ${port}`)
// });