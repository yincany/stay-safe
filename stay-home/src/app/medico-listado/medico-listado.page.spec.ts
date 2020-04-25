import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoListadoPage } from './medico-listado.page';

describe('MedicoListadoPage', () => {
  let component: MedicoListadoPage;
  let fixture: ComponentFixture<MedicoListadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoListadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
