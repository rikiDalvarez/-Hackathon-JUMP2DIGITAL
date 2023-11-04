# skinsAPI

`skinsAPI` is a simple API for users to get skins developed for the Backend hackathon jump2digital in Barcelona. It is written in Typescript, NodeJS and ExpressJS.
The project follow a Hexagonal architecture and SOLID principles.

## Installation

To run the application you need to have docker installed on your machine. If you don't have it, you can install it [here](https://docs.docker.com/get-docker/).

## Usage

If you have thunder-client installed on your IDE, you can follow the steps on the section 1. if not follow the steps on section 2.
On both sections start by populating the database with the endpoints:
http://localhost:5555/skins/available
http://localhost:5555/skins/user

1. Import the `thunder-collection_hackathon-backend.json` file located on the root of the repository into thunder-client collection, with that you can already test the endpoints.

2. You can test the endpoints with the following curl commands(for disclosure the numbers used on the parametes are references, you should adapt for your application):

- post a new skin

```bash
curl -X POST http://localhost:5555/skins/available -H "Content-Type: application/json" -d '{"name": "skin1", "price": "10", "type": "5", "color": "red", "quantity": "10"}'
```

- post new user

```bash
curl -X POST http://localhost:5555/skins/user -H "Content-Type: application/json" -d '{"email": "test@test"}'
```

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
curl -X PUT http://localhost:5555/skins/color -H "Content-Type: application/json" -d '{"color": "blue", "id": "1"}'
```

- user delete a bought skin

```bash
curl -X DELETE http://localhost:5555/skins/delete/{1} -H "Content-Type: application/json"
```
