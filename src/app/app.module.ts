import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';  //imported the module class
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent //added this as an module.
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService   //Register a dependency for constructor to work.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
