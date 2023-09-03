import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagsliderComponent } from './imagslider.component';

describe('ImagsliderComponent', () => {
  let component: ImagsliderComponent;
  let fixture: ComponentFixture<ImagsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
