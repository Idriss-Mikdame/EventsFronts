import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AminTemplatComponent } from './navbar/amin-templat.component';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientADDComponent } from './Client/client-add/client-add.component';
import { ClientlistComponent } from './Client/clientlist/clientlist.component';
import { ClientModifierComponent } from './Client/client-modifier/client-modifier.component';
import {DataRowOutlet} from '@angular/cdk/table';
import {MatCard, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { ModifierEventComponent } from './Event/modifier-event/modifier-event.component';

@NgModule({
  declarations: [
    AppComponent,
    AminTemplatComponent,
    HomeComponent,
    AboutComponent,
    ClientADDComponent,
    ClientlistComponent,
    ClientModifierComponent,
    FooterComponent,
    AddEventComponent,
    ListEventComponent,
    ModifierEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    DataRowOutlet,
    MatCardModule,
    MatCardHeader,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
