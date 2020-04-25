import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoActualPage } from './medico-actual.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoActualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoActualPageRoutingModule {}
