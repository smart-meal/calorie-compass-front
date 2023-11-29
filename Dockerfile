#Base image
FROM node:20.9.0-alpine

#Change into directory
WORKDIR /app

#Copies files or directories from source
COPY . .
RUN rm -rf node_modules

RUN npm install --force
RUN npm install -g @ionic/cli@latest --force

EXPOSE 8100

CMD ["ionic", "serve"]

