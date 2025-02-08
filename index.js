import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();


const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();

const PORT = process.env.PORT || '8080'

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'home.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(_dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(_dirname, 'contact-me.html'));
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(_dirname, '404.html'))
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})