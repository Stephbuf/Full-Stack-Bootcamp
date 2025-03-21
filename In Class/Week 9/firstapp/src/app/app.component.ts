import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Properties
  title = 'Test Test Test';
  name = 'Stephanie';
  studentNames = ['Jonathan', 'Monica', 'Samantha', 'Taylor', 'Stephanie'];
}
