import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoTabsPage } from './medico-tabs.page';

describe('MedicoTabsPage', () => {
  let component: MedicoTabsPage;
  let fixture: ComponentFixture<MedicoTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
