import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule} from "@angular/material/button-toggle";
import { ChartsModule } from 'ng2-charts';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputformComponent } from './inputform/inputform.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
