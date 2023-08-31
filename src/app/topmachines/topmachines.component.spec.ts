import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmachinesComponent } from './topmachines.component';

describe('TopmachinesComponent', () => {
  let component: TopmachinesComponent;
  let fixture: ComponentFixture<TopmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopmachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
