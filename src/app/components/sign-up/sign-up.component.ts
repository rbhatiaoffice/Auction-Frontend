import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
  ],
})
export class SignupComponent {
  signUpFormData = {
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    password: '',
    retypePassword: '',
  };

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Form Data:', this.signUpFormData);
    // Implement your form submission logic here
  }
}
