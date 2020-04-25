import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoTabsPage } from './medico-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoTabsPageRoutingModule {}
