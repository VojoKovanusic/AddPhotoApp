import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProfilComponent } from './update-user-profil.component';

describe('UpdateUserProfilComponent', () => {
  let component: UpdateUserProfilComponent;
  let fixture: ComponentFixture<UpdateUserProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
