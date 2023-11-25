 Terms of Use for this Repository Code
1. first git clone this repository
2. all dependencies installed. open your cmd and  Follow the below command.
       1. yarn 
3. server run command 
     1. yarn start-dev
4. code format command 
      1. yarn prettier--fix
5. Use this command to view all issues on the server.
   1. yarn lint
6. code lat variable fix command
    1. yarn lint--fix
7. If you want to create a user, you need to make a post request to the server. Order data must be provided in JSON format in the request body. You can follow the below format.
 {
    "userId": "18",
    "username": "johanKhan",
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "password": "secure_password",
    "gender": "male",
    "age": 25,
    "email": "john.dde@example.com",
    "hobbies": [
        "Reading",
        "coding"
    ],
    "address": {
        "street": "123 Main St",
        "city": "Cityville",
        "country": "Country and"
    },
    "isActive": true
}

8. If you want to get all users, you make a GET request to a server. You can follow the below format.

 http://localhost:5000/api/users

9. If you want a user to change data, you need to make a POST request to the server.  Order data must be provided in JSON format in the request body. You can follow the below format.
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "werwed34",
  "gender": "male",
  "age": 40,
  "email": "john.dsdfse@example.com",
  "hobbies": ["reading", "coding", "programe"],
  "address": {
    "street": "123 Main St",
    "city": "Cityville",
    "country": "Countryland"
  },
  "isActive": "true"
}

10. If a user wants to add an order, a put request must be made to the server. Order data must be provided in JSON format in the request body. You can follow the below format.
request server link 
http://localhost:5000/api/users/16/orders
{
    "productName": "Product 1",
    "price": 23.56,
    "quantity": 20
}

11. If you want to see all the orders of a user, you need to make a Get request to the server. You have to provide the parameter a user ID. You can follow the below format.

http://localhost:5000/api/users/16/orders


12. If a user wants to see the totalPrice of all orders together, a Get request must be made to the server. You have to provide the parameter a user ID. You can follow the below format.

 http://localhost:5000/api/users/16/orders/total-price




