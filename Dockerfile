FROM rickydunlop/nodejs-ffmpeg

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm run assets
RUN npm run dev

COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "app.js" ]
