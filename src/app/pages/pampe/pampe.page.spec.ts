import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PAMPEPage } from './pampe.page';

describe('PAMPEPage', () => {
  let component: PAMPEPage;
  let fixture: ComponentFixture<PAMPEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAMPEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PAMPEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
