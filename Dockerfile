FROM node:14.5.0
WORKDIR /app
COPY package.json /app
COPY tsconfig.json /app
COPY tslint.json /app
COPY src /app/src
RUN npm install

CMD ["npm", "start"]
