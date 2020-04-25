import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteRecordPage } from './paciente-record.page';

describe('PacienteRecordPage', () => {
  let component: PacienteRecordPage;
  let fixture: ComponentFixture<PacienteRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
