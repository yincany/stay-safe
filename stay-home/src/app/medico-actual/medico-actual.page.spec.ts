import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoActualPage } from './medico-actual.page';

describe('MedicoActualPage', () => {
  let component: MedicoActualPage;
  let fixture: ComponentFixture<MedicoActualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoActualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoActualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
