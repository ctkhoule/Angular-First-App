import { NgModule, Component } from '@angular/core';
// Importer les modules Routes et RouterModule
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// Configurer les Routes
const routes: Routes = [
  {path: '',  component: HomeComponent, },
  {
    path: 'contact',  
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',  
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {path: 'signin',  component: SigninComponent, },
  {path: '**',  component: NotFoundComponent, }
];
// Appeler la méthode forRoot et RooterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
