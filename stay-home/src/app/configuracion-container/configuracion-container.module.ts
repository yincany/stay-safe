import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionContainerPageRoutingModule } from './configuracion-container-routing.module';

import { ConfiguracionContainerPage } from './configuracion-container.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionContainerPageRoutingModule
  ],
  declarations: [ConfiguracionContainerPage]
})
export class ConfiguracionContainerPageModule {}
