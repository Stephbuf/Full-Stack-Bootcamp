import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/ipatient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patients: Ipatient[] = [
    {name: 'Mark Cuban', illness: 'Flu'},
    {name: 'Romeo Cabana', illness: 'Skin Rash'},
    {name: 'Jenifer Mio', illness: 'Allergies'},
    
  ];

  constructor() {}
  getPatients(){
    return this.patients;
  }
}
