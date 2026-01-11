import { Router } from 'express'; // little map that tells app where to go
import { getWorkouts } from '../controllers/workoutController'; // calls the controller to get data from the database

// creates a router(mini menu for URLs)
const router = Router();

// when someone visits using GET Request, it will run the getWorkouts function and send back the workouts data from the database
router.get('/', getWorkouts);

export default router;