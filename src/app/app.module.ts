import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { CustomersComponent } from './customers/customers.component';
import { PackagesComponent } from './packages/packages.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { BioDataComponent } from './bio-data/bio-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'bio-data', component: BioDataComponent},
    { path: 'packages', component: PackagesComponent},
    { path: 'customers', component: CustomersComponent},
    { path: 'start-hosting', component: StartHostingComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    BioDataComponent,
    HomePageComponent,
    HeaderComponent,
    CustomersComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
