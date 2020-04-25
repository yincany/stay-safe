import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paciente-ultimos',
  templateUrl: './paciente-ultimos.page.html',
  styleUrls: ['./paciente-ultimos.page.scss'],
})
export class PacienteUltimosPage implements OnInit {


  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController) { }
  data: any;

  
  ngOnInit() {
    

    
    fetch('./assets/data/simAnterioresResult.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });

 

  }

}
