import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCenzorComponent } from './works-cenzor.component';

describe('WorksCenzorComponent', () => {
  let component: WorksCenzorComponent;
  let fixture: ComponentFixture<WorksCenzorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksCenzorComponent]
    });
    fixture = TestBed.createComponent(WorksCenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
