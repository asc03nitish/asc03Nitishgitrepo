import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ListEmpComponent } from "./list-emp/list-emp.component";
// import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppComponent, LoginComponent, ListEmpComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule,HttpClientModule],
    bootstrap:[AppComponent]
    
})
export class AppModule{
    
}
