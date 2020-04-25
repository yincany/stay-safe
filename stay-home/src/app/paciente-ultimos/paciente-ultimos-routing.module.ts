import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteUltimosPage } from './paciente-ultimos.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteUltimosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteUltimosPageRoutingModule {}
