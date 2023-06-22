import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasiComponent } from './clasi.component';

describe('ClasiComponent', () => {
  let component: ClasiComponent;
  let fixture: ComponentFixture<ClasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
