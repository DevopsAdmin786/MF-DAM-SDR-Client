import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import * as globals from '../config/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MediaFerry-DAM-Client';
  globals = globals.api;
  isAuthenticated = false;

  /**
   * `langConfig` will hold the global labels for components
   * - Aside labels
   * - Footer copyright info
   * - and any other label which may be drive by SDR config
   */

  langConfig = {};

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((authStatus) => {
      if (!authStatus) {
        this.auth.loginWithRedirect();
      }

      this.auth.user$.subscribe((user) => {
        console.log("[USER]", user);
        /**
         * Call the `teamsService` and fetch the user's team
         * Then fetch the `smartDesign.config` and update the UI
         */
      })
    })
  }

}
