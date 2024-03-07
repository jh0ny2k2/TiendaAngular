import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.routes'),
  },

  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component'),
  },
  {
    path: 'inicio',
    component: PaginaInicioComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
