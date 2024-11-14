import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Issue } from "../model/issue.model";

@Injectable({
    providedIn: 'root'
})

export class IssueService {

    baseUrl: string = "http://localhost:3000/Issues";

    constructor(private httpclient: HttpClient) {}

    getIssue(){
        return this.httpclient.get<Issue[]>(this.baseUrl);
    }
    
    getIssueById(issueid: number){
        return this.httpclient.get<Issue>(this.baseUrl+"/"+issueid);
    }

    createIssue(issue: Issue){
        return this.httpclient.post(this.baseUrl, issue);
    }

    updateIssue(issueid:number, issue: any){
        return this.httpclient.put(this.baseUrl+'/'+issueid, issue);
    }

    deleteIssue(issueid: number){
        return this.httpclient.delete(this.baseUrl+'/'+issueid);
    }

}