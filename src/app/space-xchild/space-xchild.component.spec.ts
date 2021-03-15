import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXChildComponent } from './space-xchild.component';

describe('SpaceXChildComponent', () => {
  let component: SpaceXChildComponent;
  let fixture: ComponentFixture<SpaceXChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
