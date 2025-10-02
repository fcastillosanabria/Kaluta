import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // <-- Home por defecto
  { path: '**', redirectTo: '' }          // <-- Redirección para rutas no encontradas
];
