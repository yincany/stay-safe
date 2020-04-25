import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteActualPage } from './paciente-actual.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteActualPageRoutingModule {}
