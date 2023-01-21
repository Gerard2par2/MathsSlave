import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUsersComponent } from './budget.users.component';

describe('BudgetUsersComponent', () => {
  let component: BudgetUsersComponent;
  let fixture: ComponentFixture<BudgetUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
