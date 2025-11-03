FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 4173
# ИСПРАВЛЕННАЯ КОМАНДА - добавляем --host 0.0.0.0
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]