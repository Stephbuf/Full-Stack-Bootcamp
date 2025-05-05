import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonContent],
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss']
})
export class AddWorkoutPage {
  workoutForm!: FormGroup;

  workoutTypes: string[] = [
    'Outdoor Walk',
    'Indoor Walk',
    'Outdoor Run',
    'Indoor Run',
    'Cycling',
    'Elliptical',
    'Rower',
    'Stair Stepper',
    'HIIT',
    'Yoga',
    'Functional Strength Training',
    'Traditional Strength Training - Lower Body',
    'Traditional Strength Training - Upper Body',
    'Traditional Strength Training - Full Body',
    'Dance',
    'Cooldown',
    'Core Training',
    'Pilates',
    'Barre',
    'Swimming',
    'Hiking'
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.workoutForm = this.fb.group({
      workoutType: ['', Validators.required],
      date: ['', Validators.required]  // Only date, no time
    });
  }

  submitWorkout() {
    if (this.workoutForm.valid) {
      const workout = this.workoutForm.value;
      const stored = JSON.parse(localStorage.getItem('workouts') || '[]');
      stored.push(workout);
      localStorage.setItem('workouts', JSON.stringify(stored));
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.workoutForm.markAllAsTouched();
    }
  }
}