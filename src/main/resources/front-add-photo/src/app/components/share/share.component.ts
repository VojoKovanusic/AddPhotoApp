import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  public repoUrl = 'https://github.com/Epotignano/ng2-social-share';
  public imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200';
   
  constructor() { }

  ngOnInit() {
  }

}
