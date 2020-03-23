import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PlayersService} from '../services/players.service';
import {Router} from '@angular/router';
import {Player} from '../models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {

  players: Player[];
  playersSubscription: Subscription;

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.playersSubscription = this.playersService.playerSubject.subscribe(
      (players: Player[]) => {
        this.players = players;
      }
    );
    this.playersService.getPlayers();
    this.playersService.emitPlayers();
  }

  onViewPlayer(id: number) {
    this.router.navigate(['/players', 'view', id - 1]);
  }

  ngOnDestroy() {
    this.playersSubscription.unsubscribe();
  }

}
