# IKT_promptAPI

### First REST-APIs for my final PWA project

__1. Prompt API :__ enables write, read all, read one random and delete functionality
```
LOCAL ENDPOINTS:
POST: https://localhost:8082/prompt
GET one: https://localhost:8082/prompt/:id
GET all: https://localhost:8082/prompt
DELETE: https://localhost:8082/prompt/:id
GET random: https://localhost:8082/random/
```
```
DEPLOYED ENDPOINTS:
dba
```

__2. Writings API:__ https://github.com/Aiiii-den/IKT_writingsAPI  
__3. Images API:__ https://github.com/Aiiii-den/IKT_imagesAPI

### How to install:
1. Clone repository locally
2. Set up MongoDB (either on Atlas or Compass) : https://www.mongodb.com/
3. Create a .env file with the following structure and add your database credentials
    ``` .env
   DB_CONNECTION: mongodb+srv://<user>:<password>@<collection>.mongodb.net/?retryWrites=true&w=majority
   DATABASE: <database>
   ```
4. Set cors() in server.js to your local connection point
5. Run with `npm run watch`  
   _P.S. before the app is useful at least one prompt needs to be added to the database_ 

### Postman examples requests:



### Frontend:
Frontend repository can be found at the following URL: https://github.com/Aiiii-den/IKT_frontendNew  
Or deployed at: https://lalalala
