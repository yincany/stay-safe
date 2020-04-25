import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteRecordPageRoutingModule } from './paciente-record-routing.module';

import { PacienteRecordPage } from './paciente-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteRecordPageRoutingModule,
    TranslateModule
  ],
  declarations: [PacienteRecordPage]
})
export class PacienteRecordPageModule {}
 