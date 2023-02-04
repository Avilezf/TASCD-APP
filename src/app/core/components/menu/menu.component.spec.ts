import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
