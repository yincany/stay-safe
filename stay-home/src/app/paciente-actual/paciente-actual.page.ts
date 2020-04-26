import { Component, OnInit } from '@angular/core';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';

import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-paciente-actual',
  templateUrl: './paciente-actual.page.html',
  styleUrls: ['./paciente-actual.page.scss'],
})
export class PacienteActualPage implements OnInit {
  data: any;
  checked = [];
  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController) { }
 

  ngOnInit() {

    fetch('./assets/data/preguntas.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });

    
    UniqueDeviceID.get()
    .then((uuid: any) => console.log(uuid))
    .catch((error: any) => console.log(error));


  }


  evaluate(){

    console.log("evaluate");
  }

  go(id: string | number){
    console.log("PASO : go "  + id);
    if (id == 1){
      this.router.navigate(['medico-tabs']);
    }else{
      this.router.navigate(['paciente-tabs']);
    }
   

  }
  async showAlert(){

    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.headerOK'),
      message: this.translate.instant('ALERT.msgOK'),
      buttons: ['OK']
    });
    alert.present();
  }

  async showMessageOK(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.headerOK'),
      message: this.translate.instant('ALERT.msgOK'),
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


    //Adds the checkedbox to the array and check if you unchecked it
  addCheckbox(event, checkbox : String) {

    
    if ( event.target.checked ) {
      console.log("addCheckbox  " + checkbox);
      this.checked.push(checkbox);
    } else {
      console.log("removeCheckbox  " + checkbox);
      let index = this.removeCheckedFromArray(checkbox);
      this.checked.splice(index,1);
    }
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox : String) {
    return this.checked.findIndex((category)=>{
      return category === checkbox;
    })
  }

  //Empties array with checkedboxes
  emptyCheckedArray() {
    this.checked = [];
  }

  getCheckedBoxes() {
      
        var sum = 0;
        for (let entry of this.checked) {
          sum = sum + entry;
        }

        console.log(sum);

        if (sum > 30){

            // to do
            // obtener id unico del celular
            // guardar datos en website
            
            this.router.navigate(['paciente-record']);
       
        }else{
          // mensaje alert is OK
          this.showMessageOK();
        }
  }


}
