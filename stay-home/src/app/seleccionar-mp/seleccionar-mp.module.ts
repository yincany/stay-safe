import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarMPPageRoutingModule } from './seleccionar-mp-routing.module';

import { SeleccionarMPPage } from './seleccionar-mp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarMPPageRoutingModule
  ],
  declarations: [SeleccionarMPPage]
})
export class SeleccionarMPPageModule {}
