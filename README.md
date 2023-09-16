# IKT_promptAPI

### First REST-API for my final PWA project

__1. Prompt API :__ enables write, read all, read one random and delete functionality
```
Local Endpoints:
POST: https://localhost:8082/prompt
GET one: https://localhost:8082/prompt/:id
GET all: https://localhost:8082/prompt
DELETE: https://localhost:8082/prompt/:id
GET random: https://localhost:8082/random/
```
```
Deployed Endpoints:
POST: https://ikt-promptapi.onrender.com/prompt
GET one: https://ikt-promptapi.onrender.com/prompt/:id
GET all: https://ikt-promptapi.onrender.com/prompt
DELETE: hhttps://ikt-promptapi.onrender.com/prompt/:id
GET random: https://ikt-promptapi.onrender.com/random/
```
_For a visual representation of the possible requests please refer to the accompanying yaml: [promptAPI.yaml](https://github.com/Aiiii-den/IKT_promptAPI/blob/main/promptAPI.yaml)_  

__2. Writings API:__ https://github.com/Aiiii-den/IKT_writingsAPI    

__3. Images API:__ https://github.com/Aiiii-den/IKT_imagesAPI  


### How to install:
1. Clone repository locally
2. Run `npm i`
3. Set up MongoDB (https://www.mongodb.com/)
4. Create a .env file with the following structure and add your database credentials
    ``` .env
   DB_CONNECTION: mongodb+srv://<user>:<password>@<collection>.mongodb.net/?retryWrites=true&w=majority
   DATABASE: <database>
   ```
5. Set cors() in server.js to your personal/local connection point
6. Run with `npm run watch`  
7. Stop with `Ctrl + C`

_P.S. before the app is useful at least one prompt needs to be added to the database_ 


### Frontend:
Frontend repository can be found at the following URL: https://github.com/Aiiii-den/IKT_frontendNew  
Or deployed at: https://ikt-frontend-new.vercel.app/
