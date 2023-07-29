import { Component } from '@angular/core';

@Component({
  selector: 'app-works-userlist',
  templateUrl: './works-userlist.component.html',
  styleUrls: ['./works-userlist.component.scss'],
})
export class WorksUserlistComponent {
  public userLogin!: string;
  public userPassword!: string;
  public userEmail!: string;
  public editStatus = false;
  public editIndex!: number;
  public userList: Array<IUser> = [];

  public addUser(): void {
    let newUser = {
      login: this.userLogin,
      password: this.userPassword,
      email: this.userEmail,
    };
    this.userList.push(newUser);
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
  }
  deleteUser(index: number): void {
    this.userList.splice(index, 1);
  }
  editUser(index: number): void {
    this.userLogin = this.userList[index].login;
    this.userPassword = this.userList[index].password;
    this.userEmail = this.userList[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }
  updateUser(): void {
    this.userList[this.editIndex].login = this.userLogin;
    this.userList[this.editIndex].password = this.userPassword;
    this.userList[this.editIndex].email = this.userEmail;
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
    this.editStatus = false;
  }
}

interface IUser {
  login: string;
  password: string;
  email: string;
}
