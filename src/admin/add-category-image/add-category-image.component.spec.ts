import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryImageComponent } from './add-category-image.component';

describe('AddCategoryImageComponent', () => {
  let component: AddCategoryImageComponent;
  let fixture: ComponentFixture<AddCategoryImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryImageComponent]
    });
    fixture = TestBed.createComponent(AddCategoryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
