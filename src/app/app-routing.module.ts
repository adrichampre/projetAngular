import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {TeamListComponent} from './team-list/team-list.component';
import {SingleTeamComponent} from './team-list/single-team/single-team.component';
import {AuthGuardService} from './services/auth-guard.service';
import {PlayerListComponent} from './player-list/player-list.component';
import {SinglePlayerComponent} from './player-list/single-player/single-player.component';


const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'teams', component: TeamListComponent},
  {path: 'teams/view/:id', component: SingleTeamComponent},
  {path: 'players', canActivate: [AuthGuardService], component: PlayerListComponent},
  {path: 'players/view/:id', canActivate: [AuthGuardService], component: SinglePlayerComponent},
  {path: '', redirectTo: 'players', pathMatch: 'full'},
  {path: '**', redirectTo: 'players'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
