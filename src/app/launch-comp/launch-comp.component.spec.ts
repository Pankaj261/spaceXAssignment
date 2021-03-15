import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCompComponent } from './launch-comp.component';

describe('LaunchCompComponent', () => {
  let component: LaunchCompComponent;
  let fixture: ComponentFixture<LaunchCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
