import { Component, NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    // { path: '', component: NavbarComponent},
    { path:'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})
export class AppRoutingModule{

}