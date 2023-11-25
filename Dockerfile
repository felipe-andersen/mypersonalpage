FROM node:18-alpine
WORKDIR /usr/share/app
COPY package.json ./ 
RUN npm install
COPY . .
CMD ["npm","run","dev"]
EXPOSE 3000

# ENTRYPOINT tail -f /dev/null


