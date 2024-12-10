import { Component, NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminregisterComponent } from "./adminregister/adminregister.component";
import { GuestsComponent } from "./guests/guests.component";
import { FacilitiesComponent } from "./facilities/facilities.component";
import { BookingsComponent } from "./bookings/bookings.component";
import { ListHotelsComponent } from "./list-hotels/list-hotels.component";
import { AddhotelsComponent } from "./addhotels/addhotels.component";
import { AddguestComponent } from "./addguest/addguest.component";
import { AddfacilitiesComponent } from "./addfacilities/addfacilities.component";
import { AddbookingComponent } from "./addbooking/addbooking.component";
import { UpdatebookingComponent } from "./updatebooking/updatebooking.component";
import { UpdatehotelComponent } from "./updatehotel/updatehotel.component";
import { UpdateguestComponent } from "./updateguest/updateguest.component";
// import { AuthGuardService } from "./service/auth-guard.service";

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'adminregister', component: AdminregisterComponent},
    { path: 'dashboard', component: DashboardComponent},
    // { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuardService]},
    { path: 'list-hotels', component: ListHotelsComponent},
    { path: 'addhotels', component: AddhotelsComponent},
    { path: 'guests', component: GuestsComponent},
    { path: 'addguest', component: AddguestComponent},
    { path: 'facilities', component: FacilitiesComponent},
    { path: 'addfacilities', component: AddfacilitiesComponent},
    { path: 'bookings', component: BookingsComponent},
    { path: 'addbooking', component: AddbookingComponent},
    { path: 'updatebooking/:bookingId', component: UpdatebookingComponent},
    { path: 'updatehotel/:hotelId', component:UpdatehotelComponent},
    { path: 'updateguest/:guestId', component:UpdateguestComponent }


    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})
export class AppRoutingModule{

}