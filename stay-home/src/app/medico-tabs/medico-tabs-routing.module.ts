import { MedicoListadoPage } from './../medico-listado/medico-listado.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoTabsPage } from './medico-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoTabsPage,
    children: [ 
      {
        path: 'tab1',
        loadChildren: () => import('../medico-listado/medico-listado.module').then(m => m.MedicoListadoPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../medico-actual/medico-actual.module').then(m => m.MedicoActualPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo: '/medico-tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/medico-tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoTabsPageRoutingModule {}
