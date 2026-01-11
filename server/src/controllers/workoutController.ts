// Handles logic for workout routes(menus)
import { Request, Response } from 'express'; // makes typescipt understand the req and res 
import { query } from '../db'; // function to lets talk to the database

// function that runs when someone vistis /workouts page
export const getWorkouts = async (req: Request, res: Response) => { // async wait for the database to respond
    try {
        // asking the database to give me all workouts
        const result = await query('SELECT * FROM workouts');
        // I don't have workout talbe yet so it will reaise an error
        // until we make the table
        res.json(result.rows); // sending the workouts data back to the frontend
    } catch (err) {
        // if something goes wrong, send back an error message
        console.error(err);
        res.status(500).json({error:'Server error'});
    }
};

// function to add a new workout
export const createWorkout = async(req: Request, res: Response) => {
    try{
        // gets the workout name from the frontend user
        const { name } = req.body;
        // saves the workout to the database
        const result = await query ('INSERT INTO workouts (name) VALUES ($1), RETURNING *', [name]);
        // sends the workout back to the frontend
        res.json(result.rows[0]);
        // if something goes wrong, send back an error message
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
};