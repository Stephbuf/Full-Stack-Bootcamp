import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonButton, IonInput, IonItem, IonLabel,IonList, IonIcon, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { waterOutline, addOutline, removeOutline } from 'ionicons/icons';
import { Router, RouterModule } from '@angular/router'; 

addIcons({ waterOutline, addOutline, removeOutline });

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    RouterModule, 
  ],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  nutritionForm!: FormGroup;
  totalWaterLitres: number = 0;
  currentDay: string = '';
  totalGlasses: number = 0;
  Math = Math;
  

  searchQuery: string = '';
  searchResults: any[] = [];
  selectedMealIndex: number | null = null;

  constructor( private fb: FormBuilder, private router: Router) {
      addIcons({addOutline,waterOutline,removeOutline});}

  ngOnInit(): void {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    this.currentDay = today.toLocaleDateString('en-US', options);

    this.nutritionForm = this.fb.group({
      meals: this.fb.array([
        this.initMeal('Breakfast'),
        this.initMeal('Lunch'),
        this.initMeal('Dinner'),
        this.initMeal('Snacks'),
      ]),
    });
  }

  // goToFoodSearch(): void {
  //   this.router.navigate(['/foodsearch']);
  // }

  initMeal(name: string): FormGroup {
    return this.fb.group({
      name: [name],
      foods: this.fb.array([]),
    });
  }

  get meals(): FormArray {
    return this.nutritionForm.get('meals') as FormArray;
  }

  getFoods(mealIndex: number): FormArray {
    return this.meals.at(mealIndex).get('foods') as FormArray;
  }

  addFood(mealIndex: number): void {
    const foodGroup = this.fb.group({
      name: ['', Validators.required],
      calories: [0, Validators.required],
      carbs: [0],
      fat: [0],
      protein: [0],
    });
    this.getFoods(mealIndex).push(foodGroup);
  }

  removeFood(mealIndex: number, foodIndex: number): void {
    this.getFoods(mealIndex).removeAt(foodIndex);
  }

  getTotalMealsLogged(): number {
    return this.meals.controls.reduce((count: number, mealGroup: any) => {
      const foods = mealGroup.get('foods') as FormArray;
      return count + (foods.length > 0 ? 1 : 0);
    }, 0);
  }

  getTotalMacros(type: 'carbs' | 'fat' | 'protein'): number {
    return this.meals.controls.reduce((total: number, mealGroup: any) => {
      const foods = (mealGroup.get('foods') as FormArray).value;
      return total + foods.reduce((sum: number, food: any) => sum + +food[type], 0);
    }, 0);
  }

  updateWaterIcons(): void {
    if (this.totalWaterLitres < 0) this.totalWaterLitres = 0;
    if (this.totalWaterLitres > 2) this.totalWaterLitres = 2;
    this.totalGlasses = Math.round(this.totalWaterLitres / 0.2);
  }

  addWater(): void {
    if (this.totalWaterLitres < 2) {
      this.totalWaterLitres += 0.1;
      this.totalWaterLitres = parseFloat(this.totalWaterLitres.toFixed(1));
      this.updateWaterIcons();
    }
  }

  removeWater(): void {
    if (this.totalWaterLitres > 0) {
      this.totalWaterLitres -= 0.1;
      this.totalWaterLitres = parseFloat(this.totalWaterLitres.toFixed(1));
      this.updateWaterIcons();
    }
    
  }
  
  isGlassFilled(index: number): boolean {
    return index < Math.floor(this.totalWaterLitres / 0.2);
  }
  
  editGoal(): void {
    console.log('Edit Goal clicked');
  }

  getProgressStyle(value: number, goal: number, color: string): string {
    const percentage = Math.min((value / goal) * 100, 100);
    return `conic-gradient(${color} 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
  }
}
