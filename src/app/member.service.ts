import { MessageService } from './message.service';
import { Member } from './member';
import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';

// @Injectable... サービスを他のクラスやコンポ年とで注入可能であることを示す
// providedIn: 'root'  はアプリのどこでも使用可能であるという意味
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService: MessageService){}

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }
}
