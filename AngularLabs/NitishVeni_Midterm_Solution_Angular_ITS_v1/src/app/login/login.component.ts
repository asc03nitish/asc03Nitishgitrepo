import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      managerid:['', [ Validators.required, Validators.minLength(4), Validators.maxLength(10) ]],
      password:['', [ Validators.required, ]]
    });
  }

  onSubmit(){
    
        const managerid: string = this.loginForm.get("managerid").value;
        const password: string = this.loginForm.get("password").value;
        if(managerid==="subbu" && password==="subbu"){
            console.log("Successfull");
            sessionStorage.setItem("subbu","yes");
            this.router.navigate(["/issuelist"]);
        }
        else{
            console.log("Unsuccessfull");
        }
  }


}
