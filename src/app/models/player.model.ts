import {Player_attributes} from './player_attributes';
import {isEmpty} from 'rxjs/operators';
import {isEmptyExpression} from '@angular/compiler';
import {isNullOrUndefined} from 'util';

/**
 * Classe Player représentant un joueur
 */
export class Player {

  // tslint:disable-next-line:variable-name
  /**
   * Attributs d'un joueur
   */
  private _attributes: Player_attributes;
  /**
   * Identifiant du joueur
   */
  private _id: number;
  /**
   * Nom du joueur
   */
  private _player_name: string;
  /**
   * Date d'anniversaire
   */
  private _birthday: Date;
  /**
   * Taille
   */
  private _height: number;
  /**
   * Identifiant api
   */
  private _player_api_id: number;
  /**
   *Identifiant fifa
   */
  private _player_fifa_api_id: number;
  /**
   * Poids
   */
  private _weight: number;
  /**
   * Url d'une image attribuée
   */
  private _img: string;
  /**
   * Age
   */
  private _age: number;

  /**
   * Constructeur de l'objet
   *
   * @param id numero du joueur à créer
   */
  constructor(id: number) {
    this._id = id;
  }

  get attributes(): Player_attributes {
    return this._attributes;
  }

  set attributes(value: Player_attributes) {
    this._attributes = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get player_name(): string {
    return this._player_name;
  }

  set player_name(value: string) {
    this._player_name = value;
  }

  get birthday(): Date {
    return this._birthday;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get player_api_id(): number {
    return this._player_api_id;
  }

  set player_api_id(value: number) {
    this._player_api_id = value;
  }

  get player_fifa_api_id(): number {
    return this._player_fifa_api_id;
  }

  set player_fifa_api_id(value: number) {
    this._player_fifa_api_id = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {

    if (isNullOrUndefined(value) || value.length < 15) {
      this._img = 'https://svgsilh.com/svg_v2/2130591.svg';
    } else {
      this._img = value;
    }
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

}
