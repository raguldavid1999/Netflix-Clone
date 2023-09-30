import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  isFocus:boolean = false;
  answerShow:boolean = false;
  focusInput(){
    this.isFocus = true;
  }
  focusOut(){
    this.isFocus = false;
  }
  answerClick(){
    this.answerShow = !this.answerShow
  }
}
