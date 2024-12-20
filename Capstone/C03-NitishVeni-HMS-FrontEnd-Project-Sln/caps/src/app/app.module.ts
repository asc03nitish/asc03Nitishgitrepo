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
import { AdminregisterComponent } from "./adminregister/adminregister.component";
import { ListHotelsComponent } from "./list-hotels/list-hotels.component";
import { AddhotelsComponent } from "./addhotels/addhotels.component";
import { GuestsComponent } from "./guests/guests.component";
import { AddguestComponent } from "./addguest/addguest.component";
import { FacilitiesComponent } from "./facilities/facilities.component";
import { AddfacilitiesComponent } from "./addfacilities/addfacilities.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { AddbookingComponent } from "./addbooking/addbooking.component";
import { UpdatebookingComponent } from "./updatebooking/updatebooking.component";
import { UpdatehotelComponent } from "./updatehotel/updatehotel.component";
import { UpdateguestComponent } from "./updateguest/updateguest.component";



@NgModule({
    declarations:[AppComponent, NavbarComponent, LoginComponent, AdminregisterComponent,DashboardComponent, ListHotelsComponent, AddhotelsComponent, GuestsComponent, AddguestComponent, FacilitiesComponent, AddfacilitiesComponent, BookingsComponent, AddbookingComponent, UpdatebookingComponent, UpdatehotelComponent, UpdateguestComponent],
    imports:[BrowserModule, ReactiveFormsModule, FormsModule,HttpClientModule, AppRoutingModule, RouterOutlet, RouterModule, CommonModule],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}