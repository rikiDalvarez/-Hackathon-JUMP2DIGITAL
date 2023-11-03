FROM node:19.1-alpine

ENV NODE_ENV="development"
ENV DATABASE_ENV="development"
ENV DB_PORT="3306"
ENV PORT="5555"
ENV SQL_URI="x"
ENV MYSQL_USER="admin"
ENV MYSQL_PASSWORD="root"
ENV DATABASE="storedb"
ENV TEST_DATABASE="test"
ENV HOST="localhost"
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 5555
CMD npm run dev