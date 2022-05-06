import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdit.MemberComponent } from './add-edit.member.component';

describe('AddEdit.MemberComponent', () => {
  let component: AddEdit.MemberComponent;
  let fixture: ComponentFixture<AddEdit.MemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdit.MemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdit.MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
