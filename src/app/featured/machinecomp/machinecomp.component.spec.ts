import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecompComponent } from './machinecomp.component';

describe('MachinecompComponent', () => {
  let component: MachinecompComponent;
  let fixture: ComponentFixture<MachinecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
