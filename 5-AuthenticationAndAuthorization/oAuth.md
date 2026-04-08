oAuth (Google)
* JWT 

Airbnb --> Building the app
Configuration at Google level


Airbnb --> Google (Key) (ID Tokens)
       --> Google Generates a token (JWT)
            --> Redirects you to Airbnb again
                --> Airbnb receives token (Frontend)
                        --> Airbnb Backend for validation (JWT)
                        --> Validating the Hash 
JWK --> Json Web Key (Public Key)


**Resource Owner:** The user who owns the data.  (Jay)
**Client:** Airbnb — the app requesting access.  
**Authentication Server:** Google — authenticates the user and issues 



**Resource Owner:** The user who owns the data.  (Jay)
**Client:** Airbnb — the app requesting access.  
**Authorization Server:** Google — authenticates the user and issues tokens.  
**Resource Server:** Google Calendar API — hosts your calendar data.

