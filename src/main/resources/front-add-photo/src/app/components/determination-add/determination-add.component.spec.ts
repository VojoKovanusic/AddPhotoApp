import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminationAddComponent } from './determination-add.component';

describe('DeterminationAddComponent', () => {
  let component: DeterminationAddComponent;
  let fixture: ComponentFixture<DeterminationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeterminationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
