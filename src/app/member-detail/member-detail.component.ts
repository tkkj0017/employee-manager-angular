import { Member } from './../member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  // @Input ... プロパティを受け取るために必要
  @Input() member: Member;

  constructor() { }

  ngOnInit(): void {
  }

}
