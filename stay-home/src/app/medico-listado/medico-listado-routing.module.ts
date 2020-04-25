import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoListadoPage } from './medico-listado.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoListadoPageRoutingModule {}
