import cors from 'cors'
import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import {videosRepository} from "./repositories/videos-repository";
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/videos', (req, res) => {
    const videos = videosRepository.getVideos()
    res.send(videos)
})

app.get('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;
    const video = videosRepository.getVideoById(id)
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }
})

app.post('/videos', (req: Request, res: Response) => {
    const newVideo = videosRepository.createVideo(req.body.title)
    if (newVideo) {
        res.send(newVideo)
    } else {
        return false
    }
})

app.delete ('/videos/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const isDeleted = videosRepository.deleteVideoById(id)
    if (isDeleted) {
        res.send(204)
    } else {
        res.send (404)
    }
})

app.put ('/videos/:id', (req: Request, res: Response) => {
    //console.log(req.body)
    const id = +req.params.id;
    const isUpdated = videosRepository.updateVideoById(id, req.body.title)
    if (isUpdated) {
        res.send(204)
    } else {
        res.send(404)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})