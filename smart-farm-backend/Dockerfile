#### Stage 0, Build API

# Create image based on the official Node 6 image from the dockerhub
FROM node:alpine

# # Install ffmpeg
# RUN apk update && apk add ffmpeg

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/api

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/api

# Copy dependency definitions
# COPY package.json /usr/src/app/api
COPY package*.json ./

# Install dependecies
RUN npm install && npm install -f

# Get all the code needed to run the app
COPY . /usr/src/app/api/

# Expose the port the app runs in
EXPOSE 1000

# Serve the app
CMD ["npm", "run", "start"]
