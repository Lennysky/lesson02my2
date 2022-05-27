"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
let videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/videos', (req, res) => {
    res.send(videos);
});
app.get('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const video = videos.find(v => {
        if (v.id === id)
            return true;
        else
            return false;
    });
    // 2 воскл. знака - я так понимаю, конвертация объекта, если он есть в булево
    if (!!video) {
        /*можно написать так: if (video !== undefined)*/
        res.send(video);
    }
    else {
        res.send(404);
    }
    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
});
app.post('/videos', (req, res) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    };
    videos.push(newVideo);
    res.send(newVideo);
});
app.delete('/videos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    videos = videos.filter(v => v.id !== id);
    res.send(204);
});
app.put('/videos/:id', (req, res) => {
    //console.log(req.body)
    const id = +req.params.id;
    const video = videos.find(v => {
        if (v.id === id)
            return true;
        else
            return false;
    });
    // 2 воскл. знака - я так понимаю, конвертация объекта, если он есть в булево
    if (!!video) {
        video.title = req.body.title;
        res.send(204);
    }
    else {
        res.send(404);
    }
    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map