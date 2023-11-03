# skinsAPI
`skinsAPI` is a simple API for users to get skins developed for the Backend hackathon jump2digital in Barcelona. It is written in Typescript, NodeJS and ExpressJS. 

## Installation
To install the API, you need to have NodeJS, NPM, and docker installed. Then, you can clone the repository and install the dependencies with `npm install` inside the server folder.
To run the container of our database run `docker-compose up -d` inside the server folder. Then, you can run the API with `npm run dev` inside the server folder.

## Usage
If you have thunder-client installed on your IDE, you can follow the steps on the section 1. if not follow the steps on section 2.

1. Import the thunder-collection located on the root of the repository to thunder-client collection, with that you can already test the endpoints.

2. You can test the endpoints with the following curl commands(for disclosure the numbers used on the parametes are references, you should adapt for your application):

- get available skins
  
```bash
curl -X GET http://localhost:5555/skins/available
```

- user buy a new skin
  
```bash
curl -X POST http://localhost:5555/skins/buy -H "Content-Type: application/json" -d '{"user_id": "1", "skin_id": "1"}'
```

- user get all owned skins

```bash
curl -X GET http://localhost:5555/skins/myskins -H "Content-Type: application/json" -d '{"user_id": "1"}'
```

- user update a skin color

```bash
curl -X PUT http://localhost:5555/skins/color -H "Content-Type: application/json" -d '{"color": "blue", "id": "48"}'
```

- user delete a bought skin

```bash
curl -X DELETE http://localhost:5555/skins/delete/{1} -H "Content-Type: application/json"
```

to test better i generated other endpoints that you could also try.
