// making routes
import { Router } from 'express'; // little map that tells app where to go
import { createWorkout, getWorkouts } from '../controllers/workoutController'; // calls the controller to get data from the database

// creates a router( map for all workout requests)
const router = Router();

// If I get a GET request at /workouts, run the getWorkouts function in the controller 
router.get('/', getWorkouts);
// If I get a Post request at /workouts, run the createWorkout function in the controller
router.post('/', createWorkout);

export default router;