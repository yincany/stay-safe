import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacienteTabsPage } from './paciente-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PacienteTabsPage,
    children: [ 
      {
        path: 'tab1',
        loadChildren: () => import('../paciente-ultimos/paciente-ultimos.module').then(m => m.PacienteUltimosPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../paciente-actual/paciente-actual.module').then(m => m.PacienteActualPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo: '/paciente-tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/paciente-tabs/tab2',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteTabsPageRoutingModule {}
 