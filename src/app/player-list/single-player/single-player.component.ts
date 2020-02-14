import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  player: Player;

  constructor(private route: ActivatedRoute,
              private playersService: PlayersService,
              private router: Router) { }

  ngOnInit() {
    this.player = new Player(null, '');
    const id = this.route.snapshot.params['id'];
    this.playersService.getSinglePlayer(+id).then(
      (player: Player) => {
        this.player = player;
      }
    );
  }

  onBack() {
    this.router.navigate(['/players']);
  }

}
