import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoTabsPageRoutingModule } from './medico-tabs-routing.module';

import { MedicoTabsPage } from './medico-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoTabsPageRoutingModule
  ],
  declarations: [MedicoTabsPage]
})
export class MedicoTabsPageModule {}
