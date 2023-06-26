import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPerComponent } from './form-per.component';

describe('FormPerComponent', () => {
  let component: FormPerComponent;
  let fixture: ComponentFixture<FormPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
