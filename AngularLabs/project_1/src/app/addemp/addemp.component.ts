import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee-service';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
    addForm: FormGroup;                        //dependency injection below line
    constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { 
        this.addForm = this.formBuilder.group({
          id:[],
          name:[],
          salary:[]
        });
      }

    saveEmployee(){
      
    }  



}
