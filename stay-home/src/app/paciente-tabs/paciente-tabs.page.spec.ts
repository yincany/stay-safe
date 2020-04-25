import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacienteTabsPage } from './paciente-tabs.page';

describe('PacienteTabsPage', () => {
  let component: PacienteTabsPage;
  let fixture: ComponentFixture<PacienteTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacienteTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
