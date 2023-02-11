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

## Rate Limiting  
Used `nginx.conf` to implement rate limiting [here](https://github.com/r0nz-29/vocally/blob/1b25259c6e5a7b51d47da43c12df09874efd312a/nginx/nginx.conf#L15)

## Tests  
Wrote tests using jest, located [here](https://github.com/r0nz-29/vocally/blob/master/api/tests/book.js)

## Logs
Real time logging functionality in a separate container using websockets. Each route has a middleware [logger](https://github.com/r0nz-29/vocally/blob/master/api/middleware/logger.js) which [logs the current request's path](https://github.com/r0nz-29/vocally/blob/master/api/routes/book.js#L7-L15) to a terminal running on a separate container using websockets.  

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
