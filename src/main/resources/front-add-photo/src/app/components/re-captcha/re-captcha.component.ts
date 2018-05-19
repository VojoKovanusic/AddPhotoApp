import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-captcha',
  templateUrl: './re-captcha.component.html',
  styleUrls: ['./re-captcha.component.css']
})
export class ReCaptchaComponent implements OnInit {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}
  constructor() { }

  ngOnInit() {
  }

}
