import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  private students = [
    {id: 1, name: 'Jonathan Cubbage', age: 31},
    {id: 2, name: 'Monica Rivera', age: 23},
    {id: 3, name: 'Taylor DiGulio', age: 28},
  ];
  constructor() { }

  getStudents() {
    return this.students;
  }
}



//Create
//Update
//Delete