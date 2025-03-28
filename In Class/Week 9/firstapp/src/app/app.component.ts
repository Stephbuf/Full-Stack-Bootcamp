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
  imageUrl= "https://images.squarespace-cdn.com/content/v1/56e8fcc03c44d89db7df9b3e/1532138766314-TLAYD7N9I8YM1P9W5X62/benagil+beach+lagos+portugal";
  numColSpan=2;
  blueClass = 'blue';
  bgColor = "pink";
  hasError: boolean = true;
  currentTab = 3;
//constructor


//methods
showLagos(){
  this.imageUrl = "https://images.squarespace-cdn.com/content/v1/56e8fcc03c44d89db7df9b3e/1532138766314-TLAYD7N9I8YM1P9W5X62/benagil+beach+lagos+portugal";
}

showPeaceBridge(){
  this.imageUrl ="https://content.presspage.com/uploads/1485/1920_peacebridgerevised1-print.jpg?10000";
}
}