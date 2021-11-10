import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaterielComponent } from './editmateriel.component';

describe('EditmaterielComponent', () => {
  let component: EditmaterielComponent;
  let fixture: ComponentFixture<EditmaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
