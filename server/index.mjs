import { readFileSync } from 'node:fs'
import express from 'express'

const app = express()
const port = 4441;

app.get('/user/:id', (req, res) => {
    const response = readFileSync('./fixtures/user.json', 'utf8')
    res.send(response)
})

app.get('/songs/:userId', (req, res) => {
    const response = readFileSync('./fixtures/userSongs.json', 'utf8')
    res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})