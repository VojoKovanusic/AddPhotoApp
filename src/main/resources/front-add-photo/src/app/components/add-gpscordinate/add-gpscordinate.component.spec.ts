import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGpscordinateComponent } from './add-gpscordinate.component';

describe('AddGpscordinateComponent', () => {
  let component: AddGpscordinateComponent;
  let fixture: ComponentFixture<AddGpscordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGpscordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGpscordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
