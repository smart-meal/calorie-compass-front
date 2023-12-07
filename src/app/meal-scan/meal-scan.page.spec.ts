import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealScanPage } from './meal-scan.page';

describe('MealScanPage', () => {
  let component: MealScanPage;
  let fixture: ComponentFixture<MealScanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MealScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
