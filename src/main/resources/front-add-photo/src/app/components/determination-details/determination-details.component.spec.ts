import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminationDetailsComponent } from './determination-details.component';

describe('DeterminationDetailsComponent', () => {
  let component: DeterminationDetailsComponent;
  let fixture: ComponentFixture<DeterminationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
