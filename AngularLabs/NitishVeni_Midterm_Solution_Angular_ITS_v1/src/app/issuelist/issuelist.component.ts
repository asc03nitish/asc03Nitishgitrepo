import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-issuelist',
  // standalone: true,
  // imports: [],
  templateUrl: './issuelist.component.html',
  styleUrl: './issuelist.component.css'
})

export class IssuelistComponent implements OnInit {

  issues: Issue[];
  issueService: IssueService;
  searchID: number;
  matchedIssue: Issue[];

  constructor(issueService: IssueService, private router: Router) {
    this.issueService = issueService;
  }
  ngOnInit(): void {
    this.issueService.getIssue().subscribe((issueData) => {
      this.issues = issueData;
    })

  }
  deleteIssue(issueid: number | undefined): void {

    this.issueService.deleteIssue(issueid).subscribe(() => {
      this.issues = this.issues.filter(issue => issue.issueid !== issueid);
    })

  }

  updateIssue(issueid: number | undefined) {
    if (issueid !== undefined) {
      this.router.navigate(['update', issueid]);
    }
    else {
      console.log("IssueIDUndefined");
    }
  }

  logOut(){
    sessionStorage.setItem("managerid","no");
    this.router.navigate(['/login']);
  }


  searchIssue() {
    this.issueService.getIssue().subscribe((issues) => {
      this.matchedIssue = issues.filter(issue => issue.issueid === this.searchID);

      if (this.matchedIssue.length > 0) {
        Swal.fire({
          icon: "success",
          title: "Hurry...",
          text: "Issue Found",

        });
      } 
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Issue Not Found",

        });
      }
    });
  }

  addIssue(){
    this.router.navigate(['/addissue']);
  }




}


