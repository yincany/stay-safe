import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seleccionar-pais',
  templateUrl: './seleccionar-pais.page.html',
  styleUrls: ['./seleccionar-pais.page.scss'],
})
export class SeleccionarPaisPage implements OnInit {


  params = {
    id: 'identificador'
  };
  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController) { }
 
  ngOnInit() {
  }
  go(){
    this.router.navigate(['seleccionar-mp']);

  }

  async showAlert(){

    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });
    alert.present();
  }


  async openLanguagePopover(ev: any){
    console.log("paso por aqui");
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event : ev
    });
    return await popover.present();
  }

}
