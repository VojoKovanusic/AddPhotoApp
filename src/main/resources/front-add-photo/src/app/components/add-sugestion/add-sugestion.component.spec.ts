import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSugestionComponent } from './add-sugestion.component';

describe('AddSugestionComponent', () => {
  let component: AddSugestionComponent;
  let fixture: ComponentFixture<AddSugestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSugestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSugestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
