import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations:[AppComponent, NavbarComponent],
    imports:[BrowserModule, ],
    bootstrap:[AppComponent]
})
export class AppModule{

}