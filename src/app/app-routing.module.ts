import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClientADDComponent} from './client-add/client-add.component';
import {ClientlistComponent} from './clientlist/clientlist.component';
import {ClientModifierComponent} from './client-modifier/client-modifier.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path : "home",component:HomeComponent},
  {path : "AddClient",component:ClientADDComponent},
  {path : "AffClient",component:ClientlistComponent},
  {path : "ModIClient",component:ClientModifierComponent},
  {path : "About",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
