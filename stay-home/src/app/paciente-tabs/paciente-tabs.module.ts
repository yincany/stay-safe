import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacienteTabsPageRoutingModule } from './paciente-tabs-routing.module';

import { PacienteTabsPage } from './paciente-tabs.page';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacienteTabsPageRoutingModule,
    TranslateModule
  ],
  declarations: [PacienteTabsPage]
})
export class PacienteTabsPageModule {}
