import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() taskList: Array<ITask> = [];
  @Output() giveTaskCount = new EventEmitter<number>();

  public taskCount = this.taskList.length;
  public taskNameEdit!: string;
  public editStatus = false;
  public editIndex!: number;

  public checkTask(index: number): void {
    this.taskList[index].status = !this.taskList[index].status;
    this.taskList[index].status;
  }
  public deleteTask(index: number): void {
    this.taskList.splice(index, 1);
    this.taskCount = this.taskList.length;
    this.getCount();
  }
  public editTask(index: number): void {
    this.taskNameEdit = this.taskList[index].name;
    this.editIndex = index;
    this.editStatus = true;
  }
  public updateTask(): void {
    this.taskList[this.editIndex].name = this.taskNameEdit;
    this.editStatus = false;
  }
  public getCount(): void {
    this.giveTaskCount.emit(this.taskCount);
  }
}
interface ITask {
  name: string;
  status: boolean;
}
