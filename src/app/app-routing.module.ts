import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { CountryComponent } from './country/country.component';
import { WholeComponent } from './whole/whole.component';


const routes: Routes = [
  {
    path:"global",
    component:GlobalComponent,
    outlet:'global'
  },
  {
    path:"country",
    component:CountryComponent,
    pathMatch:"full"
  },
  {
    path:"whole",
    component:WholeComponent,
    outlet:'whole'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
