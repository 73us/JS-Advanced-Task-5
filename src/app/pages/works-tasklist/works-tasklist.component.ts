import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-works-tasklist',
  templateUrl: './works-tasklist.component.html',
  styleUrls: ['./works-tasklist.component.scss'],
})
export class WorksTasklistComponent {
  @ViewChild(ChildComponent) childComp!: ChildComponent;

  public taskCount = 0;
  public taskName!: string;
  public editStatus = false;

  public addTask(): void {
    let newTask = {
      name: this.taskName,
      status: false,
    };
    this.childComp.taskList.push(newTask);
    this.taskName = '';
    this.taskCount = this.childComp.taskList.length;
  }

  getCount(data: number): void {
    this.taskCount = data;
  }
}
