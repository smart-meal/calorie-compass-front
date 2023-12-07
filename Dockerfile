#Base image
FROM node:20.9.0-alpine

#Change into directory
WORKDIR /app

#Copies files or directories from source
COPY . .
RUN rm -rf node_modules

RUN npm install --force
RUN npm install -g @ionic/cli@latest --force
#npx = node packedge manger that allows us to excute ngcc
# semas to take non ivy libraries that ivy can complie
#RUN npx ngcc --properties es2023 browser module main --frist-only --create-ivy-entrypoints
#EXPOSE 8100

RUN ionic build


FROM nginx:stable
COPY --from=build /app/www/ /usr/share/nginx/html
EXPOSE 80

CMD ["ionic", "build"]

