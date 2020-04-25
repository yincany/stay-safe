import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'seleccionar-mp',
    loadChildren: () => import('./seleccionar-mp/seleccionar-mp.module').then( m => m.SeleccionarMPPageModule)
  },

  {
    path: 'seleccionar-pais',
    loadChildren: () => import('./seleccionar-pais/seleccionar-pais.module').then( m => m.SeleccionarPaisPageModule)
  },
  {
    path: 'paciente-ultimos',
    loadChildren: () => import('./paciente-ultimos/paciente-ultimos.module').then( m => m.PacienteUltimosPageModule)
  },
  {
    path: 'paciente-actual',
    loadChildren: () => import('./paciente-actual/paciente-actual.module').then( m => m.PacienteActualPageModule)
  },
  {
    path: 'configuracion-container',
    loadChildren: () => import('./configuracion-container/configuracion-container.module').then( m => m.ConfiguracionContainerPageModule)
  },
  {
    path: 'medico-listado',
    loadChildren: () => import('./medico-listado/medico-listado.module').then( m => m.MedicoListadoPageModule)
  },
  {
    path: 'medico-actual',
    loadChildren: () => import('./medico-actual/medico-actual.module').then( m => m.MedicoActualPageModule)
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./seleccionar-pais/seleccionar-pais.module').then( m => m.SeleccionarPaisPageModule)
  },
  {
    path: 'paciente-tabs',
    loadChildren: () => import('./paciente-tabs/paciente-tabs.module').then( m => m.PacienteTabsPageModule)
  },
  {
    path: 'medico-tabs',
    loadChildren: () => import('./medico-tabs/medico-tabs.module').then( m => m.MedicoTabsPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'paciente-record',
    loadChildren: () => import('./paciente-record/paciente-record.module').then( m => m.PacienteRecordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
