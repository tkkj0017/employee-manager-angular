import { Member } from './member';
import { Injectable } from '@angular/core';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';

// @Injectable... サービスがアプリのどこで使われるか指定する
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }
}
