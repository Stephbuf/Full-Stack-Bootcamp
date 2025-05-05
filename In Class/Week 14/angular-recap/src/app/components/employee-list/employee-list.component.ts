import { Component } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';


@Component({
  selector: 'app-employee-list',
  imports: [StudentListComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  
})
export class EmployeeListComponent {

}
