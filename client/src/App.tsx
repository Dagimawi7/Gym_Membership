import { useEffect, useState } from "react";

function App() {
  // // 1. "State" is the memory of the component.
  // We want to store a list of workouts.
  const [workouts, SetWorkouts] = useState<any[]>([]);

   // 2. "useEffect" runs code when the app first loads.
   useEffect(() => {
    // using fetch to talk to the backend 
    fetch('http://localhost:5001/api/workouts') // backend url 
    .then((res) => res.json()) // change the response to json format
    .then((data) => SetWorkouts(data)) // save the data to the memory state
    .catch((err) => console.error('Error fetching:', err)); // catch any errors
   }, []);

   return (
    <div> 
      <h1>Workout Tracker</h1>
      <ul> 
        {/* 3. We "map" (loop) through the list and show each item */}
        {workouts.map((workout) => (
          // Track by id so React can update the list and show the workout name 
          <li key={workout.id}> {workout.name} - 
          {/* shows the date of the workout in a readable format */}
            {new Date(workout.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
   );
}
export default App;