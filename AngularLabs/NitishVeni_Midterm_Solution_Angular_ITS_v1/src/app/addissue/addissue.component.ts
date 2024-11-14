import{ Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../service/issue.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addissue',
  // standalone: true,
  // imports: [],
  templateUrl: './addissue.component.html',
  styleUrl: './addissue.component.css'
})
export class AddissueComponent implements OnInit{
  addIssueForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private issueService: IssueService) { }
  ngOnInit(): void {
      
    this.addIssueForm = this.formBuilder.group({
      issueid : [''],
      title: [''],
      description: [''],
      priority : [''],
      status : [''],
      assign : [''],
      date : [''],
      id: ['']



    });
    this.addIssueForm.get('issueid').valueChanges.subscribe(value => {
      this.addIssueForm.patchValue({
        id: value
      }, { emitEvent: false });
    });
  }
  
  
  onSubmit(){
  this.issueService.createIssue(this.addIssueForm.value).subscribe(
    data=>{
      Swal.fire({
        icon: "success",
        title: "Hurry...",
        text: "Issue Added",

      });
      this.router.navigate(['/issuelist']);
    }
  )
  }
}


