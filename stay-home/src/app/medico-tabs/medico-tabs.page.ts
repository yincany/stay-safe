import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medico-tabs',
  templateUrl: './medico-tabs.page.html',
  styleUrls: ['./medico-tabs.page.scss'],
})
export class MedicoTabsPage implements OnInit {

  constructor(private translate: TranslateService, private alertCtrl:AlertController, private router: Router, private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

}
