import { Component, OnInit } from '@angular/core';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
@Component({
  selector: 'app-paciente-actual',
  templateUrl: './paciente-actual.page.html',
  styleUrls: ['./paciente-actual.page.scss'],
})
export class PacienteActualPage implements OnInit {

  constructor() { }

  ngOnInit() {

    
    UniqueDeviceID.get()
    .then((uuid: any) => console.log(uuid))
    .catch((error: any) => console.log(error));


  }

}
