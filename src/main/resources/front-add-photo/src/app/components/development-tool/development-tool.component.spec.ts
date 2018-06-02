import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentToolComponent } from './development-tool.component';

describe('DevelopmentToolComponent', () => {
  let component: DevelopmentToolComponent;
  let fixture: ComponentFixture<DevelopmentToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
