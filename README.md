# IKT_promptAPI

### First REST-APIs for my final PWA project

__1. Prompt API :__ enables write, read all, read one random and delete functionality
> Local Endpoints:
> <br>  POST: https://localhost:8080/prompt
> <br>  GET all: https://localhost:8080/prompt/all
> <br>  GET random: https://localhost:8080/prompt/random
> <br>  DELETE: https://localhost:8080/prompt/:id

> Deployed Endpoints:
> dba

__2. Writings API:__ https://github.com/  
__3. Images API:__ https://github.com/

### How to install:
1. Clone repository locally
2. Set up MongoDB (either on Atlas or Compass) : https://www.mongodb.com/de-de
3. Create a .env file with the following structure and add your database credentials
    ``` .env
   DB_CONNECTION: mongodb+srv://<user>:<password>@<collection>.mongodb.net/?retryWrites=true&w=majority
   DATABASE: <database>
   ```
4. Run with npm run watch  
   _P.S. before the app is useful at least one prompt needs to be added to the database_ 

### Postman examples requests:



### Frontend:
Frontend repository can be found at the following URL: https://github.com/aiiii-den/IKT_frontend  
Or deployed at: https://lalalala
