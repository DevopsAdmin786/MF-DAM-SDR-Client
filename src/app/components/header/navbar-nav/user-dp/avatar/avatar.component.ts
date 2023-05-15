import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import {
  initValue,
  UserDetailsModel,
} from '../../../../../models/userInfo.model';
import { UserInfoService } from '../../../../../services/userInfo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, OnDestroy {
  userInfo: UserDetailsModel = initValue;
  private appSub: Subscription = new Subscription();

  constructor(public userInfoService: UserInfoService, public auth: AuthService) {}

  ngOnInit(): void {
    this.userInfoService.getLoggedInDetails();
    this.appSub = this.userInfoService
      .getLoggedInUserListener()
      .subscribe((userDetails) => {
        this.userInfo = userDetails;
      });
  }

  ngOnDestroy(): void {
    this.appSub.unsubscribe();
  }

  logOutUser() {
    this.auth.logout({
      logoutParams: {
        returnTo: environment.auth.redirectUri
      }
    }).subscribe(logout => {
      console.log("Logout", logout);
    });
  }
}
