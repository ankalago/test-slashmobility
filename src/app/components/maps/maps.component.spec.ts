import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsComponent } from './maps.component';
import { FormatLanLngPipe } from '../shared/pipes/format-lan-lng.pipe';

describe('MapsComponent', () => {
  let component: MapsComponent;
  let fixture: ComponentFixture<MapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsComponent, FormatLanLngPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
