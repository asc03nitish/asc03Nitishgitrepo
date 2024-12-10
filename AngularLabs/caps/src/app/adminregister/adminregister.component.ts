// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthGuardService } from '../service/auth-guard.service';

// @Component({
//   selector: 'app-adminregister',
//   templateUrl: './adminregister.component.html',
//   styleUrls: ['./adminregister.component.css']
// })
// export class AdminregisterComponent{
//   registerForm: FormGroup;
//   errorMessage: string = '';
//   successMessage: string = '';
 
//   constructor(private fb: FormBuilder, private authService: AuthGuardService, private router: Router) {
//     this.registerForm = this.fb.group({
//       name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(8),
//           Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
//         ],
//       ],
//       phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
//     });
//   }
 
//   onSubmit(): void {
//     if (this.registerForm.valid) {
//       this.authService.register(this.registerForm.value).subscribe(
//         () => {
//           this.successMessage = 'Registration successful! Redirecting to login...';
//           setTimeout(() => {
//             this.router.navigate(['/login']);
//           }, 2000);
//         },
//         (error: Error) => {
//           this.errorMessage = error.message || 'Registration failed';
//         }
//       );
//     }
//   }
// }