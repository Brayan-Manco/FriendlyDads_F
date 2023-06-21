import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFileComponent } from './see-file.component';

describe('SeeFileComponent', () => {
  let component: SeeFileComponent;
  let fixture: ComponentFixture<SeeFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
