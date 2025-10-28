import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'servicios', component: Services},
  { path: 'portafolio', component: Portfolio},
  { path: 'contacto', component: Contact},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}