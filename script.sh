ASSETSFOLDER=assets/videos/timeline
GENERATEDFOLDER=$ASSETSFOLDER/generated
mkdir -p $GENERATEDFOLDER
for mediaFile in `ls $ASSETSFOLDER | grep .mp4`; do
    # corta a extensao e resolução do arquivo
    FILENAME=$(echo $mediaFile | sed -n 's/.mp4//p' | sed -n 's/-1920x1080//p')
    INPUT=$ASSETSFOLDER/$mediaFile
    FOLDER_TARGET=$GENERATEDFOLDER/$FILENAME
    mkdir -p $FOLDER_TARGET

    #criar arquivos de resoluções diferentes nas pastas
    OUTPUT=$GENERATEDFOLDER/$FILENAME/$FILENAME
    DURATION=$(ffprobe -i $INPUT -show_format -v quiet | sed -n 's/duration=//p')

    OUTPUT720=$OUTPUT-$DURATION-720
    OUTPUT360=$OUTPUT-$DURATION-360

    echo 'rendering in 720p'
    sudo ffmpeg -y -i $INPUT \
        -c:a aac -ac 2 \
        -vcodec h264 -acodec aac \
        -ab 128k \
        -movflags frag_keyframe+empty_moov+default_base_moof \
        -b:v 1500k \
        -maxrate 1500k \
        -bufsize 1000k \
        -vf "scale=-1:720" \
        -v quiet \
        $OUTPUT720.mp4

    echo 'rendering in 360p'
    sudo ffmpeg -y -i $INPUT \
        -c:a aac -ac 2 \
        -vcodec h264 -acodec aac \
        -ab 128k \
        -movflags frag_keyframe+empty_moov+default_base_moof \
        -b:v 400k \
        -maxrate 400k \
        -bufsize 400k \
        -vf "scale=-1:360" \
        -v quiet \
        $OUTPUT360.mp4

done
