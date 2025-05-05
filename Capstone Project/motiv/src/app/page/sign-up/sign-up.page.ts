import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {IonContent,IonHeader,IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton,IonIcon} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { eyeOffOutline, eyeOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Keyboard } from '@capacitor/keyboard';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,  FormsModule,  IonContent,  IonHeader,  IonTitle,  IonToolbar,  IonItem,  IonLabel,  IonInput,  IonButton,IonIcon, ReactiveFormsModule],
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  signupForm!: FormGroup;
  showPassword = false;
  errorMessage = '';
  successMessage = '';
  users: { email: string; password: string; firstName: string; lastName: string }[] = [];

  constructor(private fb: FormBuilder) {
    addIcons({ logoGoogle, logoFacebook, eyeOutline, eyeOffOutline });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/)
      ]]
    });
  
    // Use Capacitor.getPlatform() instead of isNativePlatform
    if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android') {
      Keyboard.setScroll({ isDisabled: true }).catch(err => {
        console.warn('Keyboard plugin error:', err);
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const { email, password, firstName, lastName } = this.signupForm.value;
    const userExists = this.users.find(user => user.email === email);

    if (userExists) {
      this.errorMessage = 'Email already exists.';
      return;
    }

    this.users.push({ email, password, firstName, lastName });
    this.successMessage = 'Account created successfully!';
    this.signupForm.reset();
  }
}
