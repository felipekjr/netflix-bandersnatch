const MANIFEST_URL = 'http://127.0.0.1:8081/manifest.json'
const localHost = ["127.0.0.1", 'localhost']

async function main() {
    const isLocal = !!~localHost.indexOf(window.location.hostname)
    const manifestJSON = await (await fetch(MANIFEST_URL)).json()
    const host = isLocal ? manifestJSON.localHost : manifestJSON.productionHost

    const videoComponent = new VideoComponent()
    const network = new Network({host})
    const videoPlayer = new GerenciadorVideo({
        manifestJSON,
        network
    })

    videoComponent.initializePlayer()
    videoPlayer.initializeCodec()
}

window.onload = main
