import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
    MedicoActualPageRoutingModule,
    TranslateModule
  ],
  declarations: [MedicoActualPage]
})
export class MedicoActualPageModule {}
