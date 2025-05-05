import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private workouts: { date: string, type: string }[] = [];

  addWorkout(workout: { date: string, type: string }) {
    this.workouts.push(workout);
  }

  getWorkouts() {
    return this.workouts;
  }
}
