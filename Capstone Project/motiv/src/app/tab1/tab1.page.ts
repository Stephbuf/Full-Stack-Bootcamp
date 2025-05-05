import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page implements OnInit {
  currentMonth!: string;
  currentYear!: number;
  days: { date: number, isWorkout: boolean, isSunday: boolean, isOff: boolean }[] = [];
  private currentDate: Date = new Date();
  private workouts: any[] = [];

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.updateMonthDisplay();
    this.loadWorkouts();
    this.generateCalendar();
  }

  updateMonthDisplay() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    this.currentMonth = monthNames[this.currentDate.getMonth()];
    this.currentYear = this.currentDate.getFullYear();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateMonthDisplay();
    this.generateCalendar();
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateMonthDisplay();
    this.generateCalendar();
  }

  goToAddWorkoutPage() {
    this.router.navigate(['/add-workout']);
  }

  loadWorkouts() {
    const stored = localStorage.getItem('workouts');
    this.workouts = stored ? JSON.parse(stored) : [];
  }

  generateCalendar() {
    this.loadWorkouts(); // refresh on every month switch
    this.days = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add padding from last month
    const padStart = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = 0; i < padStart; i++) {
      this.days.push({ date: 0, isWorkout: false, isSunday: false, isOff: true });
    }

    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const isWorkout = this.workouts.some(w => w.date === dateStr);
      const dateObj = new Date(year, month, day);
      const isSunday = dateObj.getDay() === 0;

      this.days.push({
        date: day,
        isWorkout,
        isSunday,
        isOff: false
      });
    }
  }
  getWeeks(): number[] {
    const daysInMonth = new Date(this.currentYear, this.currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(this.currentYear, this.currentDate.getMonth(), 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const totalCells = offset + daysInMonth;
    const totalWeeks = Math.ceil(totalCells / 7);
    return Array.from({ length: totalWeeks }, (_, i) => i);
  }

  getCalendarGrid() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const totalDays = new Date(year, month + 1, 0).getDate();

    const startDayOfWeek = firstDay.getDay();
    const leadingEmpty = (startDayOfWeek + 6) % 7;

    const days: any[] = [];

    for (let i = 0; i < leadingEmpty; i++) {
      days.push({});
    }

    for (let date = 1; date <= totalDays; date++) {
      const fullDate = new Date(year, month, date);
      const formatted = fullDate.toISOString().split('T')[0];
      const isWorkout = this.workouts.includes(formatted);

      days.push({
        date,
        isOff: false,
        isSunday: fullDate.getDay() === 0,
        isWorkout: isWorkout
      });
    }

    while (days.length % 7 !== 0) {
      days.push({});
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  }
}
