import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeallComponent } from './qrcodeall.component';

describe('QrcodeallComponent', () => {
  let component: QrcodeallComponent;
  let fixture: ComponentFixture<QrcodeallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
