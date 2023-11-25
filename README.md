1. This ser code uses a summary
2. first git clone this repository
3. all dependencies install command ( yarn )
4. create a user request, and data tracker and this is a post-request 
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
        "reading",
        "coding"
    ],
    "address": {
        "street": "123 Main St",
        "city": "Cityville",
        "country": "Countryland"
    },
    "isActive": true
}

5. all users getting API get a request
 http://localhost:5000/api/users

6. user update put request send server and must be object send body json format
7. orders add put request send server and must be object send json format
8. single user all order getting then request get request server then must be user id send parames
9. single user all orders total price getting then get request down api flow
 http://localhost:5000/api/users/16/orders/total-price

10. must be userId send
