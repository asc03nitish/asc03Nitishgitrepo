

import { Component, OnInit } from '@angular/core';
import { Issue } from '../model/issue.model';
import { IssueService } from '../service/issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

  @Component({
    selector: 'app-updateissue',
    // standalone: true,
    // imports: [],
    templateUrl: './updateissue.component.html',
    styleUrl: './updateissue.component.css'
})

export class UpdateissueComponent implements OnInit{
  issueid: number = 0;
  issue: Issue = new Issue();

  constructor(private issueService: IssueService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
      this.issueid = this.route.snapshot.params['issueid'];
      this.issue = new Issue();
      this.issueService.getIssueById(this.issueid)
      .subscribe(searchIssue=>{ this.issue = searchIssue;},error => console.log(error));
    }

  updateIssue():void{
    this.issueService.updateIssue(this.issueid, this.issue)
    .subscribe(updatedIssue => { console.log(updatedIssue)}, error => console.log(error));
    Swal.fire({
      icon: "success",
      title: "Hurry...",
      text: "Issue Updated",

    });
    this.router.navigate(['/issuelist']);
  }
}


