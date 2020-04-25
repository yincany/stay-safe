import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteActualPage } from './paciente-actual.page';

describe('PacienteActualPage', () => {
  let component: PacienteActualPage;
  let fixture: ComponentFixture<PacienteActualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteActualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
