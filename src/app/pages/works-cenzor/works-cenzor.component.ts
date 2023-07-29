import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works-cenzor',
  templateUrl: './works-cenzor.component.html',
  styleUrls: ['./works-cenzor.component.scss'],
})
export class WorksCenzorComponent {
  @Input() badWords = [''];
  public showBanWords = this.badWords.join(' ');
  public inputPlaceholder = 'word here..';
  public textareaPlaceholder = 'text here..';
  public badWord = '';
  public isInputEmpty = true;
  public isTxtAreaEmpty = true;
  public cenzorTextVal = '';
  public arrCheck: any;

  addWord(): void {
    if (this.badWord != '') {
      this.badWords.push(this.badWord);
      this.render();
      this.badWord = '';
      this.inputPlaceholder = 'word here..';
      this.isInputEmpty = true;
    } else {
      this.inputPlaceholder = 'Please write a word!';
      this.isInputEmpty = false;
    }
  }
  resetWords(): void {
    this.badWords = [];
    this.cenzorTextVal = '';
    this.render();
  }

  cenzorText(): void {
    if (this.cenzorTextVal != '' && this.badWords.length > 0) {
      this.arrCheck = this.cenzorTextVal.split(' ');
      for (let i = 0; i < this.arrCheck.length; i++) {
        for (let j = 0; j < this.badWords.length; j++) {
          if (this.arrCheck[i] == this.badWords[j]) {
            let res = '';
            for (let a = 0; a < this.arrCheck[i].length; a++) {
              res += '*';
            }
            this.arrCheck[i] = res;
          }
        }
      }
      this.cenzorTextVal = this.arrCheck.join(' ');
      this.isTxtAreaEmpty = true;
    } else {
      this.textareaPlaceholder = 'Please write a text!';
      this.isTxtAreaEmpty = false;
    }
  }
  render(): void {
    this.showBanWords = this.badWords.join(' ');
  }
}
