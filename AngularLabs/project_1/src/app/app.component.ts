// import { Component, OnInit } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// import { EmployeeService } from './service/employee-service';
// import { Employee } from './model/employee.model';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit{
//   title = 'project_1';
//   employees?: Employee[];

//   constructor(private EmployeeService: EmployeeService){
//   }

//   ngOnInit(): void {
//     this.EmployeeService.getemployees().subscribe(data => this.employees = data);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee-service';
import { Employee } from './model/employee.model';
import { CommonModule } from '@angular/common';
import { AddempComponent } from './addemp/addemp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddempComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Management';
  employees: Employee[] = [];
  selectedEmployee?: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.id !== id);
      console.log('Employee deleted');
    });
  }

  addEmployee() {
    this.selectedEmployee = undefined; // Clears form for adding a new employee
  }

  editEmployee(employee: Employee) {
    this.selectedEmployee = employee; // Sets form data for editing
  }

  handleFormSubmit() {
    this.loadEmployees(); // Reload data after form submission
    this.selectedEmployee = undefined; // Reset form
  }
}
