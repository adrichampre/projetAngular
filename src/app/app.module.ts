import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingleTeamComponent } from './team-list/single-team/single-team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {TeamsService} from './services/teams.service';
import {AuthGuardService} from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PlayerListComponent } from './player-list/player-list.component';
import { SinglePlayerComponent } from './player-list/single-player/single-player.component';
import {PlayersService} from './services/players.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SingleTeamComponent,
    TeamListComponent,
    HeaderComponent,
    PlayerListComponent,
    SinglePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TeamsService,
    PlayersService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
