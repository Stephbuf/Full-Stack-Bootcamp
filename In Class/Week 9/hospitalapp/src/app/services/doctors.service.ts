import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private doctors: Idoctor[] = [
    {name: 'Samantha Cruiz', specialization: 'Skin'},
    {name: 'Taylor Marie', specialization: 'ENT'},
    {name: 'Monica Rio', specialization: 'Cancer'},
    {name: 'Sabrina Flowers', specialization: 'Nurse'},
  ];


  constructor() { }
  getDoctors(){
    return this.doctors;
  }
}
