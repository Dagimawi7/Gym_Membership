import express from "express"; // helps build the server
import dotenv from "dotenv"; // let us use secret values like passowrd
import cors from "cors"; // makes frontend and backend communicate

// Loads the secret values(passwords) from .env file
dotenv.config();

// setting up the server(server online)
const app = express();
// port number(door number of the server to be reached)
const port = 5000;

// gives premission other apps to talk to us(frontend to backend)
app.use(cors()); 
// allows the server to understand JSON format sent from the frontend
app.use(express.json());

// creating a test route that will listen for requests and respond with a message
app.get('/', (req,res) => {
    res.send('workout Tracker API is running!');
});

// starts the server and shows a message it is running
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});