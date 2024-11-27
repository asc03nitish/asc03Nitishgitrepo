import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, RouterOutlet } from "@angular/router";
import {  HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    declarations:[AppComponent, NavbarComponent, LoginComponent, DashboardComponent],
    imports:[BrowserModule, ReactiveFormsModule, FormsModule,HttpClientModule, AppRoutingModule, RouterOutlet, RouterModule, CommonModule],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}