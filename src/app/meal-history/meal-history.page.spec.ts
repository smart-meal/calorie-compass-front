import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealHistoryPage } from './meal-history.page';

describe('MealHistoryPage', () => {
  let component: MealHistoryPage;
  let fixture: ComponentFixture<MealHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MealHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
