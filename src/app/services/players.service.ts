import { Injectable } from '@angular/core';
import {Player} from '../models/player.model';
import {Observable, Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [];
  playerSubject = new Subject<Player[]>();
  constructor() { }

  emitPlayers() {
    this.playerSubject.next(this.players);
  }

  getPlayers() {
    firebase.database().ref('/players')
      .on('value', (data) => {
        this.players = data.val() ? data.val() : [];
        this.emitPlayers();
      });
  }

  getSinglePlayer(id: number) {
    return new Promise(
      ((resolve, reject) => {
        firebase.database().ref('/players').orderByChild('player_api_id').equalTo(id).once('child_added').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getAttributesPlayer(id: number) {
    return new Promise(
      ((resolve, reject) => {
        firebase.database().ref('/player_attributes').orderByChild('player_api_id').equalTo(id).once('child_added').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

}
