# Backend Assignment  
Deployed at: [vocally.cyclic.app](https://vocally.cyclic.app/)  

Tech used:
- Express js
- Docker
- MongoDB Atlas
- Swagger UI

Documentation available at [/docs](https://vocally.cyclic.app/docs)

Building the API service:
```
$ docker build -t vocally-api .
```

Running the API image with env variables:
```
$ docker run -p 8000:8000 -e MONGODB_URI=mongodb+srv://raunits:raunits@cluster0.bqxndrs.mongodb.net/books vocally-api
```

Using docker-compose
```
$ docker-compose up
```

## Schemas  
### Book  
- `string` title
- `string` author 
- `number` year 
- `string` publisher 
- `string` isbn 


### User  
- `string` name
- `string` email 
- `string` pwd 
- `string` add 
- `Array.of(ObjectId)` books 
