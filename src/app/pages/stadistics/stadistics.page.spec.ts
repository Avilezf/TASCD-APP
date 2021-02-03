import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StadisticsPage } from './stadistics.page';

describe('StadisticsPage', () => {
  let component: StadisticsPage;
  let fixture: ComponentFixture<StadisticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadisticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StadisticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
