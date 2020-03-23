import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { Player_attributes } from "../../models/player_attributes";
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
    const id = this.route.snapshot.params.id;
    this.playersService.getSinglePlayer(id).then(
      (player: Player) => {
        this.player = player;
      }
    );
    this.playersService.getAttributesPlayer(id).then(
      (player_attributes: Player_attributes) => {
        this.player.attributes = player_attributes;
      }
    );
  }

  onBack() {
    this.router.navigate(['/players']);
  }

}
