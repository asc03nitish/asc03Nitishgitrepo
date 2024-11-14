import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { IssuelistComponent } from "./issuelist/issuelist.component";
import { AddissueComponent } from "./addissue/addissue.component";
import { UpdateissueComponent } from "./updateissue/updateissue.component";
import { AuthGuardService } from "./service/authguard.service";




const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent },
    { path:'issuelist', component: IssuelistComponent ,canActivate:[AuthGuardService]},
    { path:'addissue', component: AddissueComponent},
    { path:'update/:issueid', component: UpdateissueComponent},
    // { path: '**', component: LoginComponent },

        
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})

export class AppRoutingModule{

}