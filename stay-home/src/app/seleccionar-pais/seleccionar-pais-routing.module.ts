import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarPaisPage } from './seleccionar-pais.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarPaisPageRoutingModule {}
