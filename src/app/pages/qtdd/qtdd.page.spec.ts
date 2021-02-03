import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QTDDPage } from './qtdd.page';

describe('QTDDPage', () => {
  let component: QTDDPage;
  let fixture: ComponentFixture<QTDDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QTDDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QTDDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
