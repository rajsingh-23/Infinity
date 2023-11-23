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
import { PageNotFoundComponent } from './pages/admin/page-not-found/page-not-found.component';
import { NetworkElementDashboardComponent } from './pages/admin/network-element-dashboard/network-element-dashboard.component';
import { MediationSystemDashboardComponent } from './pages/admin/mediation-system-dashboard/mediation-system-dashboard.component';
import { BillingSystemDashboardComponent } from './pages/admin/billing-system-dashboard/billing-system-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    FlowUiComponent,
    PageNotFoundComponent,
    NetworkElementDashboardComponent,
    MediationSystemDashboardComponent,
    BillingSystemDashboardComponent
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
