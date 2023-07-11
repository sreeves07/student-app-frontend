# TODOS
Create a frontend React repo for our project
Connect the repo to our backend server
Fetch a list of students and display it
Break the list of students into React components
Style the list

# QUESTIONS
Backend
What is middleare and when is it used?
-The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
What exactly does cors do?
-CORS or Cross-Origin Resource Sharing in Node. js is a mechanism by which a front-end client can make requests for resources to an external back-end server.

Frontend 
What tools will we use to build the frontend?
- We use create-react-app
When does useEffect fire or not fire? What does an empty dependency array do?
-UseEffect fires when the component first loads, after that is only fires when the component renders again. An empty dependecy array ensures the callback from the useEffect only fires one time. 
Can you further explain the difference or benefits of using scss instead of css?
-SCCS allows you to write more compact code.

# THINGS TO DISCUSS
What causes a React component to rerender?
1. The component's parent renders again
2. The component's props change
3. The component's state changes