// import { Component, OnInit } from '@angular/core';
// import { ReactiveFormsModule, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { EmployeeService } from '../service/employee-service';

// @Component({
//   selector: 'app-addemp',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './addemp.component.html',
//   styleUrl: './addemp.component.css'
// })
// export class AddempComponent {
//     addForm: FormGroup;                        //dependency injection below line
//     constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { 
//         this.addForm = this.formBuilder.group({
//           id:[Validators.required],
//           name:[],
//           salary:[]
//         });
//       }

//     saveEmployee(){
//         if(this.addForm){
//           this.employeeService.createEmployee(this.addForm.value).subscribe((data)=>{
//             console.log('data saved', data)
//           })
//         }
//         else{
//           console.error("form is not initialixed");
//         }
//       }
// }


import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee-service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  addForm: FormGroup;
  @Input() employeeData?: Employee; // Optional input for updating an employee
  @Output() formSubmit = new EventEmitter<void>(); // Event to notify parent component on form submit

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) {
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.employeeData) {
      this.addForm.patchValue(this.employeeData); // Populate form for editing
    }
  }

  saveEmployee() {
    if (this.addForm.valid) {
      if (this.employeeData) {
        // Update existing employee
        this.employeeService.updateEmployee(this.employeeData.id, this.addForm.value)
          .subscribe(() => this.formSubmit.emit()); // Emit event on success
      } else {
        // Add new employee
        this.employeeService.createEmployee(this.addForm.value)
          .subscribe(() => this.formSubmit.emit()); // Emit event on success
      }
    }
  }
}
