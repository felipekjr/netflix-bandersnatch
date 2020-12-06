const fs = require('fs')
// const VideoComponent = require('../../lib/videoComponent')
const MediaPlayerComponent = require('../../assets/js/gerenciador-video')

const videoPlayer = {}
const MANIFEST_URL = './manifest.json'

videoPlayer.iniciar = async function(app, req, res) {
    res.render("video-player.ejs")
    const localHost = ["127.0.0.1", 'localhost']
    // const isLocal = !!~localHost.indexOf(window.location.hostname)
    fs.readFile(MANIFEST_URL, (err, result) => {
        if (err) {
            return err;
        }
        const manifestJSON = JSON.parse(result)
        const host = manifestJSON.localHost

        // const videoComponent = new VideoComponent()
        const videoPlayer = new MediaPlayerComponent({manifestJSON})

        // videoComponent.initializePlayer()
        videoPlayer.initializeCodec()
    })
}

module.exports = videoPlayer
