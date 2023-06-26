import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBebeComponent } from './form-bebe.component';

describe('FormBebeComponent', () => {
  let component: FormBebeComponent;
  let fixture: ComponentFixture<FormBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBebeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
