import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteActualPageRoutingModule } from './paciente-actual-routing.module';

import { PacienteActualPage } from './paciente-actual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteActualPageRoutingModule,
    TranslateModule
  ],
  declarations: [PacienteActualPage]
})
export class PacienteActualPageModule {}
