FROM node:lts-alpine
RUN npm config set unsafe-perm true
RUN npm install -g http-server
RUN npm install -g cross-env
WORKDIR /dist/public
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev
EXPOSE 5000
RUN env HTTP_PROXY="http://127.0.0.1:5000"
RUN env HTTPS_PROXY="https://127.0.0.1:5000"
CMD [ "http-server", "dist" ]