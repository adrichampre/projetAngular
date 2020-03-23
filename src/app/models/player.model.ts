import {Player_attributes} from './player_attributes';

export class Player {

  // tslint:disable-next-line:variable-name
  private _attributes: Player_attributes;
  private _id: number;
  private _player_name: string;
  private _birthday: Date;
  private _height: number;
  private _player_api_id: number;
  private _player_fifa_api_id: number;
  private _weight: number;

  constructor(id: number, player_name: string, birthday: Date, height: number, player_api_id: number, player_fifa_api_id: number, weight: number) {
    this._id = id;
    this._player_name = player_name;
    this._birthday = birthday;
    this._height = height;
    this._player_api_id = player_api_id;
    this._player_fifa_api_id = player_fifa_api_id;
    this._weight = weight;
  }


  public get attributes(): Player_attributes {
    return this._attributes;
  }

  public set attributes(value: Player_attributes) {
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

}
