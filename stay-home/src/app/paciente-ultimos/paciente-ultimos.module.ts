import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
    PacienteUltimosPageRoutingModule,
    TranslateModule
  ],
  declarations: [PacienteUltimosPage]
})
export class PacienteUltimosPageModule {}
