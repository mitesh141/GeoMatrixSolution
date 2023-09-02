import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialcompComponent } from './specialcomp.component';

describe('SpecialcompComponent', () => {
  let component: SpecialcompComponent;
  let fixture: ComponentFixture<SpecialcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
