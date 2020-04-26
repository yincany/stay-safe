import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-medico-actual',
  templateUrl: './medico-actual.page.html',
  styleUrls: ['./medico-actual.page.scss'],
})
export class MedicoActualPage implements OnInit {

  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController) { }


  data:any;

  ngOnInit() {

  

    fetch('./assets/data/actuarEvaluar.json').then(res => res.json())
    .then(json => {
      this.data = json;
    });

  }

}
