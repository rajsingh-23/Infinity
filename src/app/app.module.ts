import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/admin/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MapComponent } from './pages/admin/map/map.component';
import { FlowUiComponent } from './pages/admin/flow-ui/flow-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    FlowUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
