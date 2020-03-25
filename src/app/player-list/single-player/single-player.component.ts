import {Component, Input, OnInit} from '@angular/core';
import { Player } from '../../models/player.model';
import { Player_attributes } from '../../models/player_attributes';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';


@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  player: Player;
  disposition = 1;

  constructor(private route: ActivatedRoute,
              private playersService: PlayersService,
              private router: Router) {
    const id = this.route.snapshot.params.id;
    this.player = new Player(id);

    this.playersService.getSinglePlayer(+id).then(
      (player: Player) => {
        this.player = player;
        this.player.age = Math.floor((new Date().getTime() - new Date(this.player.birthday).getTime()) / (365.24 * 24 * 3600 * 1000));
        this.player.weight = +(this.player.weight / 2.2046).toFixed(1);
        this.player.height = +(this.player.height / 100).toFixed(2);
      }
    );

    this.playersService.getAttributesPlayer(+id).then(
      // tslint:disable-next-line:variable-name
      (player_attributes: Player_attributes) => {
        this.player.attributes = player_attributes;
      }
    );
  }




  ngOnInit() {

  }


  onBack() {
    this.router.navigate(['/players']);
  }

  onButton(num: number) {
    this.disposition = num;
  }

  getColor(num: number) {
    let res = '#5bc0de';
    if (this.disposition === num) {
      res = '#269abc';
    }
    return res;
  }

  getColorStats(num: number) {
    let res = 'black';
    if (num < 51) {
      res = '#E30606';
    } else {
      if (num < 71) {
        res = '#F3D217';
      } else {
        if (num < 81) {
          res = '#03C81A';
        } else {
          res = '#43800D';
        }
      }

    }
    return res;
  }
}
