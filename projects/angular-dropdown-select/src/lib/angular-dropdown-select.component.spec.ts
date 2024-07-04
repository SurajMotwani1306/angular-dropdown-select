import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDropdownSelectComponent } from './angular-dropdown-select.component';

describe('AngularDropdownSelectComponent', () => {
  let component: AngularDropdownSelectComponent;
  let fixture: ComponentFixture<AngularDropdownSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularDropdownSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDropdownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
