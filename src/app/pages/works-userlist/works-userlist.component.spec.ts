import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksUserlistComponent } from './works-userlist.component';

describe('WorksUserlistComponent', () => {
  let component: WorksUserlistComponent;
  let fixture: ComponentFixture<WorksUserlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksUserlistComponent]
    });
    fixture = TestBed.createComponent(WorksUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
