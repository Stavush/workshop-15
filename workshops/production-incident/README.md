# Setup and installation

```
nvm use <- (Skip this if you are using node 16+)
npm i
npm run start
read the instructions below
```

# Background

Our intercom system seems to be broken!  
The interface is very simple - you have a list of all the tenants in the building, together with their apartment number.  
When you want to call a tenant, all you need to do is enter the apartment number and click "Dial".  
<img width="725" alt="image" src="https://user-images.githubusercontent.com/62943675/166449335-04f32b55-2bb1-40b2-a5d2-1beb4b7593d4.png"></br>
After "Dial" is clicked, you should get an alert that the call was successfully made:  
<img width="496" alt="image" src="https://user-images.githubusercontent.com/62943675/166450096-a63cce4c-a45f-4897-9ad0-2be8400b9e65.png"></br>

# The incident

One user noticed, that when you dial apartments number 4 or 5, you are getting a weird message with undefined in it:  
<img width="754" alt="image" src="https://user-images.githubusercontent.com/62943675/166449596-03f0d669-b4d6-4a22-90ce-9c7aa7a30e04.png"></br>
The reason is because some tenants didn't fill in their last name, so it is missing.

# The solution

Your product manager asked you to handle this situation as follows: if a user doesn't have a last name, show only the first name.
So, instead of "Ivan undefined", we will show "Ivan".

# Your task

1. Identify the issue (go to the browser and reproduce the bug), don't fix it yet!
2. Run the command 'npm run test', all tests should pass
3. Add a test that reproduces the error scenario. See file `apartments-service.test.js`
4. Run the command 'npm run test', the tests will now fail (because of Step #3)
5. Fix the bug in the code
6. Run the command 'npm run test', all tests should pass again
