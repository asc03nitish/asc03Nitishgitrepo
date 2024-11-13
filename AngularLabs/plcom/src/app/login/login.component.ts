import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginform: FormGroup;
constructor(private formBuilder:FormBuilder, private router: Router){}
ngOnInit() {
    this.loginform = this.formBuilder.group({
      email:["bodha"],
      password: []
    });  
}

onSubmit(){
  console.log("Submitted");
  this.router.navigate(['/home']);
}

}
