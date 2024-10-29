import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddempComponent } from './app/addemp/addemp.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



  