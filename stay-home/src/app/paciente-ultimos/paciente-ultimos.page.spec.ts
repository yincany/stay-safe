import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteUltimosPage } from './paciente-ultimos.page';

describe('PacienteUltimosPage', () => {
  let component: PacienteUltimosPage;
  let fixture: ComponentFixture<PacienteUltimosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteUltimosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteUltimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
