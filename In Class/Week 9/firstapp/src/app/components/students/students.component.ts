import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

students;

constructor(private service: StudentsService){ // Dependency injection 
  this.students = service.getStudents();
  console.log(this.students);
}

}

