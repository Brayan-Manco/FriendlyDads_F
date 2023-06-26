import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArchComponent } from './form-arch.component';

describe('FormArchComponent', () => {
  let component: FormArchComponent;
  let fixture: ComponentFixture<FormArchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
