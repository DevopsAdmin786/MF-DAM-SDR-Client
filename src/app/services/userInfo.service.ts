import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { initValue, UserDetailsModel } from '../models/userInfo.model';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  public userDetails: UserDetailsModel = initValue;
  private userUpdated = new Subject<UserDetailsModel>();

  constructor(public auth: AuthService) {}

  getLoggedInDetails() {
    // this.http
    //   .get<{
    //     id: string;
    //     message: string;
    //     data: { userInfo: UserDetailsModel };
    //   }>('http://localhost:3000/api/userinfo')
    //   .subscribe((userData) => {
    //     console.log(userData);
    //     this.userDetails = userData.data.userInfo;
    //     this.userUpdated.next(this.userDetails);
    //   });

      this.auth.user$.subscribe((userData: any) => {
        this.userDetails = userData;
        this.userUpdated.next(this.userDetails);
      })
  }

  getLoggedInUserListener() {
    return this.userUpdated.asObservable();
  }
}
