import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarPaisPageRoutingModule } from './seleccionar-pais-routing.module';

import { SeleccionarPaisPage } from './seleccionar-pais.page';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarPaisPageRoutingModule,
    TranslateModule
  ],
  declarations: [SeleccionarPaisPage]
})
export class SeleccionarPaisPageModule {}
