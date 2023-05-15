import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { NavbarVerticalTogglerComponent } from './components/header/navbar-vertical-toggler/navbar-vertical-toggler.component';
import { NavbarNavComponent } from './components/header/navbar-nav/navbar-nav.component';
import { FavoritesComponent } from './components/header/navbar-nav/favorites/favorites.component';
import { CardHeaderComponent } from './components/header/navbar-nav/favorites/card-header/card-header.component';
import { CardBodyComponent } from './components/header/navbar-nav/favorites/card-body/card-body.component';
import { CardFooterComponent } from './components/header/navbar-nav/favorites/card-footer/card-footer.component';
import { UserDpComponent } from './components/header/navbar-nav/user-dp/user-dp.component';
import { AvatarComponent } from './components/header/navbar-nav/user-dp/avatar/avatar.component';
import { UserInfoComponent } from './components/header/navbar-nav/user-dp/avatar/user-info/user-info.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/main/aside/aside.component';
import { NavbarVerticalContentComponent } from './components/main/aside/navbar-vertical-content/navbar-vertical-content.component';
import { TeamsComponent } from './components/main/aside/navbar-vertical-content/teams/teams.component';
import { BorderComponent } from './components/main/aside/navbar-vertical-content/border/border.component';
import { NavItemComponent } from './components/main/aside/navbar-vertical-content/nav-item/nav-item.component';
import { TeamListComponent } from './components/main/aside/navbar-vertical-content/teams/team-list/team-list.component';
import { TeamDropdownComponent } from './components/main/aside/navbar-vertical-content/teams/team-list/team-dropdown/team-dropdown.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { FilterComponent } from './components/main/aside/navbar-vertical-content/nav-item/filter/filter.component';

import { AuthModule } from '@auth0/auth0-angular'
import { environment as env } from '../environments/environment';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { ProjectComponent } from './components/main/projects/project/project.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    NavbarVerticalTogglerComponent,
    NavbarNavComponent,
    FavoritesComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    UserDpComponent,
    AvatarComponent,
    UserInfoComponent,
    MainComponent,
    AsideComponent,
    NavbarVerticalContentComponent,
    TeamsComponent,
    BorderComponent,
    NavItemComponent,
    TeamListComponent,
    TeamDropdownComponent,
    FooterComponent,
    FilterComponent,
    ProjectsComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AuthModule.forRoot({
    domain: env.auth.domain,
    clientId: env.auth.clientId,
    authorizationParams: {
      redirect_uri: env.auth.redirectUri
    }
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
