import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoActualPageRoutingModule } from './medico-actual-routing.module';

import { MedicoActualPage } from './medico-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoActualPageRoutingModule
  ],
  declarations: [MedicoActualPage]
})
export class MedicoActualPageModule {}
