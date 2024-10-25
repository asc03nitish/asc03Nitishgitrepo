import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmpcomponentComponent } from './app/empcomponent/empcomponent.component';

// bootstrapApplication(AppComponent, appConfig)
bootstrapApplication(EmpcomponentComponent, appConfig)
  .catch((err) => console.error(err));
