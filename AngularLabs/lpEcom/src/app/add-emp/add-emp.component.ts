import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-add-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent implements OnInit{
  addEmpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }
  ngOnInit(): void {

    this.addEmpForm = this.formBuilder.group({
      id : [''],
      name: [''],
      salary: [''],
    });
  }
  onSubmit(){
  this.employeeService.createEmployee(this.addEmpForm.value).subscribe(
    data=>{
      console.log(data);
      this.router.navigate(['/employees']);
    }
  )
  }
}

