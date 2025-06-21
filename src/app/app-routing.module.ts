import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { WorkourComponent } from './works/workour/workour.component';
import { Capabilities1Component } from './Capabilities/capabilities1/capabilities1.component';
import { HeaderaboutComponent } from './about/headerabout/headerabout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'capabilities', component:Capabilities1Component},
  { path: 'ourwork',component: WorkourComponent},
  { path: 'aboutUs', component:HeaderaboutComponent},
  { path: 'contact', component:ContactusComponent},
  { path: '**', redirectTo: '' }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
