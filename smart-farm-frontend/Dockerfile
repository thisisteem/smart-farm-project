### Read more : https://tiangolo.medium.com/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984

# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# #FROM node:10-alpine as builder
# FROM node:16-alpine as builder

# COPY package.json package-lock.json ./

# RUN npm install && mkdir /app-ui && mv ./node_modules ./app-ui

# WORKDIR /app-ui

# COPY . .

# ARG configuration=production

# RUN npm run build -- --output-path=./dist/out --configuration $configuration



# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:alpine

# #!/bin/sh

# COPY ./nginx.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# COPY --from=builder /app-ui/dist /usr/share/nginx/html

# EXPOSE 4200 80

# # ENTRYPOINT ["nginx", "-g", "daemon off;"]

# =================================================================================================

FROM nginx:alpine

COPY /dist/smart-farm-frontend /usr/share/nginx/html