import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvdpComponent } from './allvdp.component';

describe('AllvdpComponent', () => {
  let component: AllvdpComponent;
  let fixture: ComponentFixture<AllvdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
