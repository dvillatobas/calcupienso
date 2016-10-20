import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CalcuService } from './services/calcu.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: ':id', component: HomeComponent },
      
    ])
  ],
  providers: [CalcuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
