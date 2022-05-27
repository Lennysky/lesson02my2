let videos = [
    {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
    {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
    {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
    {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
    {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

export const videosRepository = {
    getVideos() {
        return videos
    },
    getVideoById(id: number) {
        const video = videos.find(v=> {
            if (v.id === id) return true;
            else return false;
        })
        if (!!video) {
            return video
        } else {
            return false
        }
    },
    deleteVideoById(id: number) {
        let newVideos = videos.filter(v => v.id !== id)
        if(newVideos.length < videos.length) {
            videos = newVideos
            return true
        } else {
            return false
        }
    },
    updateVideoById(id: number, title: string) {
        const video = videos.find(v=> {
            if (v.id === id) return true;
            else return false;
        })
        if (!!video) {
            video.title = title
            return true
        } else {
            return false
        }

    },
    createVideo(title: string) {
        const newVideo = {
            id: +(new Date()),
            title: title,
            author: 'it-incubator.eu'
        }
        videos.push(newVideo)
        return newVideo
    }
}