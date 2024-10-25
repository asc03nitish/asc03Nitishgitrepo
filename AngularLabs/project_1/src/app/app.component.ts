import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './service/employee-service';
import { Employee } from './model/employee.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project_1';
  employees?: Employee[];

  constructor(private EmployeeService: EmployeeService){
  }

  ngOnInit(): void {
    this.EmployeeService.getemployees().subscribe(data => this.employees = data);
  }
}

