import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { Error404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: "home", component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "404", component: Error404Component },
  { path: "about", component: AboutComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "**", component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
