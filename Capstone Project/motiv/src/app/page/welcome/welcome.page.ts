import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // Required for ngClass, ngFor, etc.
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

  ],
})
export class WelcomePage implements OnInit {
  texts = ['W', 'e', 'l', 'c', 'o', 'm', 'e', ''];
  particleArray = Array.from({ length: 12 }, (_, i) => i);

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 5000);
  }
  
}
