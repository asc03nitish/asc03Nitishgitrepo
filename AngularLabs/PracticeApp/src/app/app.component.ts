import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule, NgFor, NgIf] // Import necessary Angular modules
})
export class AppComponent {
  title = 'PracticeApp';
  registrationForm: FormGroup;
  entries: any[] = [];

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.registrationForm = this.fb.group({
      fname: [''],
      lname: [''],
      date: [''],
      address: [''],
      gender: [''],
      options: this.fb.array([]),  // For checkboxes
      type: [''],
      payment: [''],
      tip: [50]  // Default value for the range input
    });

    // Load existing entries from local storage
    this.loadEntries();
  }

  // Submit handler for the form
  onSubmit() {
    if (this.registrationForm.valid) {
      const entry = this.registrationForm.value;
      this.entries.push(entry);

      // Save updated entries to local storage
      localStorage.setItem('entries', JSON.stringify(this.entries));

      // Reset the form
      this.registrationForm.reset();
    }
  }

  // Load entries from local storage
  loadEntries() {
    const storedEntries = localStorage.getItem('entries');
    if (storedEntries) {
      this.entries = JSON.parse(storedEntries);
    }
  }

  // Handle checkbox changes
  onCheckboxChange(event: any, option: string) {
    const options: FormArray = this.registrationForm.get('options') as FormArray;

    if (event.target.checked) {
      options.push(new FormControl(option));
    } else {
      const index = options.controls.findIndex(x => x.value === option);
      options.removeAt(index);
    }
  }
}




// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'PracticeApp';
//   registrationForm: FormGroup;
//   entries: any[] = [];

//   constructor(private fb: FormBuilder) {
//     // Initialize the form
//     this.registrationForm = this.fb.group({
//       fname: [''],
//       lname: [''],
//       date: [''],
//       address: [''],
//       gender: [''],
//       options: [[]],  // For checkboxes
//       type: [''],
//       payment: [''],
//       tip: [50]  // Default value for the range input
//     });

//     // Load entries from local storage
//     this.loadEntries();
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       // Get the form values
//       const entry = this.registrationForm.value;
//       this.entries.push(entry);

//       // Store the updated entries in local storage
//       localStorage.setItem('entries', JSON.stringify(this.entries));

//       // Reset the form
//       this.registrationForm.reset();
//     }
//   }

//   loadEntries() {
//     const storedEntries = localStorage.getItem('entries');
//     if (storedEntries) {
//       this.entries = JSON.parse(storedEntries);
//     }
//   }
// }





// import { Component } from '@angular/core';
// import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [ReactiveFormsModule, RouterOutlet, CommonModule], // Make sure CommonModule is included here
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'PracticeApp';
//   registrationForm: FormGroup;
//   entries: any[] = [];

//   constructor(private fb: FormBuilder) {
//     this.registrationForm = this.fb.group({
//       firstName: [''],
//       lastName: [''],
//       date: [''],
//       address: [''],
//       gender: [''],
//       options: this.fb.array([]), // For checkboxes
//       type: [''],
//       payment: [''],
//       tip: [50] // Default tip value
//     });
//   }

//   onSubmit() {
//     const formData = this.registrationForm.value;
//     this.entries.push(formData);  // Add form data to entries array
//     this.registrationForm.reset({ tip: 50 }); // Reset form, keeping the default tip
//   }

//   onCheckboxChange(e: any) {
//     const options: FormArray = this.registrationForm.get('options') as FormArray;

//     if (e.target.checked) {
//       options.push(this.fb.control(e.target.value));
//     } else {
//       const index = options.controls.findIndex(x => x.value === e.target.value);
//       options.removeAt(index);
//     }
//   }
// }




// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'PracticeApp';
// }

