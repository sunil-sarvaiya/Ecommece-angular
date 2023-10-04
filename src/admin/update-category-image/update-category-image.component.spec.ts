import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryImageComponent } from './update-category-image.component';

describe('UpdateCategoryImageComponent', () => {
  let component: UpdateCategoryImageComponent;
  let fixture: ComponentFixture<UpdateCategoryImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCategoryImageComponent]
    });
    fixture = TestBed.createComponent(UpdateCategoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
