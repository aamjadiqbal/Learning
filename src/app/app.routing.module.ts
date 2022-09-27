import { ObservablesComponent } from './observables/observables.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BioDataComponent } from "./bio-data/bio-data.component";
import { CustomersComponent } from "./customers/customers.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PackagesComponent } from "./packages/packages.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProfileComponent } from "./profile/edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile/profile.component";
import { StartHostingComponent } from "./start-hosting/start-hosting.component";

const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  // { path: 'custom-editor', component: CustomEditorComponent},
   { path: 'learning', component: ObservablesComponent},
  { path: 'profile-data', component: ProfileDataComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'bio-data', component: BioDataComponent},
  // { path: 'bio-data', component: AddProfileComponent},
  { path: 'packages', component: PackagesComponent},
  { path: 'customers/:id/:name', component: CustomersComponent},
  { path: 'start-hosting', component: StartHostingComponent,
  children: [
    {path: ":id", component: ProfileComponent},
    {path: ":id/edit-profile", component: EditProfileComponent}
  ]
},
// this route should be last one, as routes parse from top => bottom
{ path: 'not-found', component: PageNotFoundComponent},
{ path: '**', redirectTo: 'not-found'},

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
