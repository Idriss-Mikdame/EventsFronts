import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClientADDComponent} from './Client/client-add/client-add.component';
import {ClientlistComponent} from './Client/clientlist/clientlist.component';
import {ClientModifierComponent} from './Client/client-modifier/client-modifier.component';
import {AboutComponent} from './about/about.component';
import {AddEventComponent} from './Event/add-event/add-event.component';
import {ListEventComponent} from './Event/list-event/list-event.component';
import {ModifierEventComponent} from './Event/modifier-event/modifier-event.component';

const routes: Routes = [
  {path : "home",component:HomeComponent},
  {path : "AddClient",component:ClientADDComponent},
  {path : "AffClient",component:ClientlistComponent},
  {path : "ModIClient/:id",component:ClientModifierComponent},
  {path : "About",component:AboutComponent},
  {path : "AddEvent",component:AddEventComponent},
  {path : "AffEvent",component:ListEventComponent},
  {path : "ModifierEvent/:id",component:ModifierEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
