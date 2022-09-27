import { CustomPipe } from './custom.pipe';
import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { CustomersComponent } from './customers/customers.component';
import { PackagesComponent } from './packages/packages.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { BioDataComponent } from './bio-data/bio-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { FilterPipe } from './filter.pipe';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import {  HttpClientModule } from '@angular/common/http';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { CustomAttributeDrctvDirective } from './directives/custom-attribute-drctv.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { CcIfDirective } from './directives/cc-if.directive';
import { ObservablesComponent } from './observables/observables.component'


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    BioDataComponent,
    HomePageComponent,
    HeaderComponent,
    CustomersComponent,
    PackagesComponent,
    StartHostingComponent,
    ProfileComponent,
    EditProfileComponent,
    PageNotFoundComponent,
    CustomPipe,
    FilterPipe,
    ProfileDataComponent,
    CustomEditorComponent,
    AddProfileComponent,
    CustomAttributeDrctvDirective,
    HostBindingDirective,
    CcIfDirective,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//  {path: ":id/:edit-profile", component: EditProfileComponent}
//  to send 'edit-profile' as 2nd param to route.
