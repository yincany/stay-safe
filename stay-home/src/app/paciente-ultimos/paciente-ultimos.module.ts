import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteUltimosPageRoutingModule } from './paciente-ultimos-routing.module';

import { PacienteUltimosPage } from './paciente-ultimos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteUltimosPageRoutingModule
  ],
  declarations: [PacienteUltimosPage]
})
export class PacienteUltimosPageModule {}
