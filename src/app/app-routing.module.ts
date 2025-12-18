import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/qaluta/home/home.component';
import { QalutaToursComponent } from './features/qaluta-tours/qaluta-tours.component';
import { QalutaStoreComponent } from './features/qaluta-store/qaluta-store.component';
import { QalutaDictionaryComponent } from './features/qaluta-dictionary/qaluta-dictionary.component';
import { Qaluta360HomeComponent } from './features/qaluta-360/qaluta-360-home/qaluta-360-home.component';

const routes: Routes = [

  // Cuando el usuario entra a la raíz del sitio, Angular carga:
  {path: '', component: HomeComponent},
  {path: 'qaluta-360', component: Qaluta360HomeComponent},
  {path: 'qaluta-dictionary', component: QalutaDictionaryComponent},
  {path: 'qaluta-store', component: QalutaStoreComponent},
  {path: 'qaluta-tours', component: QalutaToursComponent},

  // Ruta comodín para manejar rutas no definidas
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
