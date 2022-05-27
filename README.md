# Simple CI CD Example for Node JS Application
1. Application Architecture  
    * Setup Heroku Account    
    * Configuring the MongoDB Atlas  
    * Configuring the Docker Image  
    * run the application in local   
2. CI-CD Setup  
    * Github workflows  
    * Eslint Checks  
    * Unit tests  
    * Integration tests  
    * Sonarcube checks  
    * deployment to heroku  
3. TODO's
    * Staging and Production Deployments
    * unit tests

docker run --name ci-cd-container -p 3000:3000 -e PORT=3000 ci-cd:local  