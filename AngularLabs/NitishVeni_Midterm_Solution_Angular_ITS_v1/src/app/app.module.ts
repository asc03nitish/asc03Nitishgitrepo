import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { IssuelistComponent } from "./issuelist/issuelist.component";
import { AddissueComponent } from "./addissue/addissue.component";
import { UpdateissueComponent } from "./updateissue/updateissue.component";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
    declarations:[AppComponent, NavbarComponent, LoginComponent, HomeComponent, IssuelistComponent, AddissueComponent, UpdateissueComponent],
    imports:[BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule, AppRoutingModule,RouterOutlet,RouterModule],
    bootstrap:[AppComponent]
})

export class AppModule{

}