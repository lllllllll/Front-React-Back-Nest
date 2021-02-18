FROM node:14.13.0 AS development

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY nginx.conf /usr/src/app/nginx.conf
COPY vite.config.js /usr/src/app/vite.config.js

RUN npm install --only=development
ENV VITE_API=$VITE_API

RUN touch .env
RUN printenv > .env
COPY . /usr/src/app

RUN npm run build
RUN chmod -R 775 /usr/src/app/dist

FROM nginx:1.13.9-alpine
COPY --from=development /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]