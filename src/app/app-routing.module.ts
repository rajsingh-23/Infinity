import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/admin/home/home.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { MapComponent } from './pages/admin/map/map.component';
import { FlowUiComponent } from './pages/admin/flow-ui/flow-ui.component';
import { PageNotFoundComponent } from './pages/admin/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "map", component: MapComponent},
  {path: "flow-ui", component: FlowUiComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
