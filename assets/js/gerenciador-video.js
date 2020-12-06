// Trabalhar com a lógica do componente de vídeo, atualizar O PLAYER, DURAÇÃO, o bufer e etc.

class GerenciadorVideo {
    constructor({manifestJSON, network}) {
        this.manifestJSON = manifestJSON
        this.network = network
        this.videoElement  = null
        this.sourceBuffer = null
        this.selected = {}
    }

    initializeCodec() {
        this.videoElement = document.getElementById("vid")
        const mediaSourceSupported = !!window.MediaSource
        if (!mediaSourceSupported) {
            alert("Seu browser ou sistema não tem suporte a MSE!")
            return;
        }

        const codecSupported = MediaSource.isTypeSupported(this.manifestJSON.codec)
        if (!codecSupported) {
            alert(`Seu browser não suporta o codec: ${this.manifestJSON.codec}`)
            return;
        }

        // atualizando o source do html sob demanda
        const mediaSource = new MediaSource()
        this.videoElement.src = URL.createObjectURL(mediaSource)
        mediaSource.addEventListener('sourceopen', function () {
            console.log('ooi');
        });
    }

    sourceOpenWrapper(mediaSource) {
        return async(_) => {
            this.sourceBuffer = mediaSource.addSourceBuffer(this.manifestJSON.codec)
            const selected = this.selected = this.manifestJSON.intro

            // evita rodar como "live"
            mediaSource.duration = 0
            await this.fileDownload(selected.url)

        }
    }

    async fileDownload(url) {
        const prepareUrl = {
            url,
            fileResolution: 360,
            fileResolutionTag: this.manifestJSON.fileResolutionTag,
            hostTag: this.manifestJSON.hostTag
        }
        const finalUrl = this.network.parseManifestUrl(prepareUrl)
        console.log('finalUrl', finalUrl)
    }
}

