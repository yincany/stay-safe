import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoListadoPageRoutingModule } from './medico-listado-routing.module';

import { MedicoListadoPage } from './medico-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoListadoPageRoutingModule
  ],
  declarations: [MedicoListadoPage]
})
export class MedicoListadoPageModule {}
