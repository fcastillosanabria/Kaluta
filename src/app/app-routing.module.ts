import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/qaluta/home/home.component';
import { Qaluta360HomeComponent } from './features/qaluta-360/qaluta-360-home/qaluta-360-home.component';
import { QalutaStoreHomeComponent } from './features/qaluta-store/qaluta-store-home/qaluta-store-home.component';
import { QalutaToursHomeComponent } from './features/qaluta-tours/qaluta-tours-home/qaluta-tours-home.component';
import { QalutaDictionaryHomeComponent } from './features/qaluta-dictionary/qaluta-dictionary-home/qaluta-dictionary-home.component';

const routes: Routes = [

  // Cuando el usuario entra a la raíz del sitio, Angular carga:
  {path: 'qaluta', component: HomeComponent},
  {path: 'qaluta-360', component: Qaluta360HomeComponent},
  {path: 'qaluta-dictionary', component: QalutaDictionaryHomeComponent},
  {path: 'qaluta-store', component: QalutaStoreHomeComponent},
  {path: 'qaluta-tours', component: QalutaToursHomeComponent},

  // Ruta comodín para manejar rutas no definidas
  {path: '**', redirectTo: 'qaluta', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
