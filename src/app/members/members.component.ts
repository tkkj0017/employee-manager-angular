import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member;

  // DI
  constructor(
    private memberSerivice: MemberService,
    private messageService: MessageService
  ) {}

  // ライフサイクルメソッド
  // コンポネントが初期化される時に実行されるメソッド
  // 外部からデータを取得する場合はこの中で実行するのが基本
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: 社員データ(id=${member.id})が選択されました`);
  }

  getMembers(): void {
    this.memberSerivice.getMembers()
      // subscribe...of関数のデータを受け取れる
      .subscribe(members => this.members = members);
  }
}
