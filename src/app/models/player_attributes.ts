// tslint:disable-next-line:class-name
export class Player_attributes {

  private _id: number;
  private _player_fifa_api_id: number;
  private _player_api_id: number;
  private _date: Date;
  private _overall_rating: number;
  private _potential: number;
  private _preferred_foot: string;
  private _attacking_work_rate: string;
  private _defensive_work_rate: string;
  private _crossing: number;
  private _finishing: number;
  private _heading_accuracy: number;
  private _short_passing: number;
  private _volleys: number;
  private _dribbling: number;
  private _curve: number;
  private _free_kick_accuracy: number;
  private _long_passing: number;
  private _ball_control: number;
  private _acceleration: number;
  private _sprint_speed: number;
  private _agility: number;
  private _reactions: number;
  private _balance: number;
  private _shot_power: number;
  private _jumping: number;
  private _stamina: number;
  private _strength: number;
  private _long_shots: number;
  private _aggression: number;
  private _interceptions: number;
  private _positioning: number;
  private _vision: number;
  private _penalties: number;
  private _marking: number;
  private _standing_tackle: number;
  private _sliding_tackle: number;
  private _gk_diving: number;
  private _gk_handling: number;
  private _gk_kicking: number;
  private _gk_positioning: number;
  private _gk_reflexes: number;

  constructor(id: number,
              player_fifa_api_id: number,
              player_api_id: number,
              date: Date,
              overall_rating: number,
              potential: number,
              preferred_foot: string,
              attacking_work_rate: string,
              defensive_work_rate: string,
              crossing: number,
              finishing: number,
              heading_accuracy: number,
              short_passing: number,
              volleys: number,
              dribbling: number,
              curve: number,
              free_kick_accuracy: number,
              long_passing: number,
              ball_control: number,
              acceleration: number,
              sprint_speed: number,
              agility: number,
              reactions: number,
              balance: number,
              shot_power: number,
              jumping: number,
              stamina: number,
              strength: number,
              long_shots: number,
              aggression: number,
              interceptions: number,
              positioning: number,
              vision: number,
              penalties: number,
              marking: number,
              standing_tackle: number,
              sliding_tackle: number,
              gk_diving: number,
              gk_handling: number,
              gk_kicking: number,
              gk_positioning: number,
              gk_reflexes: number)
  {
    this._id = id;
    this._player_fifa_api_id = player_fifa_api_id;
    this._player_api_id = player_api_id;
    this._date = date;
    this._overall_rating = overall_rating;
    this._potential = potential;
    this._preferred_foot = preferred_foot;
    this._attacking_work_rate = attacking_work_rate;
    this._defensive_work_rate = defensive_work_rate;
    this._crossing = crossing;
    this._finishing = finishing;
    this._heading_accuracy = heading_accuracy;
    this._short_passing = short_passing;
    this._volleys = volleys;
    this._dribbling = dribbling;
    this._curve = curve;
    this._free_kick_accuracy = free_kick_accuracy;
    this._long_passing = long_passing;
    this._ball_control = ball_control;
    this._acceleration = acceleration;
    this._sprint_speed = sprint_speed;
    this._agility = agility;
    this._reactions = reactions;
    this._balance = balance;
    this._shot_power = shot_power;
    this._jumping = jumping;
    this._stamina = stamina;
    this._strength = strength;
    this._long_shots = long_shots;
    this._aggression = aggression;
    this._interceptions = interceptions;
    this._positioning = positioning;
    this._vision = vision;
    this._penalties = penalties;
    this._marking = marking;
    this._standing_tackle = standing_tackle;
    this._sliding_tackle = sliding_tackle;
    this._gk_diving = gk_diving;
    this._gk_handling = gk_handling;
    this._gk_kicking = gk_kicking;
    this._gk_positioning = gk_positioning;
    this._gk_reflexes = gk_reflexes;
  }

  get id(): number {
    return this._id;
  }

  get player_fifa_api_id(): number {
    return this._player_fifa_api_id;
  }

  get player_api_id(): number {
    return this._player_api_id;
  }

  get date(): Date {
    return this._date;
  }

  get overall_rating(): number {
    return this._overall_rating;
  }

  get potential(): number {
    return this._potential;
  }

  get preferred_foot(): string {
    return this._preferred_foot;
  }

  get attacking_work_rate(): string {
    return this._attacking_work_rate;
  }

  get defensive_work_rate(): string {
    return this._defensive_work_rate;
  }

  get crossing(): number {
    return this._crossing;
  }

  get finishing(): number {
    return this._finishing;
  }

  get heading_accuracy(): number {
    return this._heading_accuracy;
  }

  get short_passing(): number {
    return this._short_passing;
  }

  get volleys(): number {
    return this._volleys;
  }

  get dribbling(): number {
    return this._dribbling;
  }

  get curve(): number {
    return this._curve;
  }

  get free_kick_accuracy(): number {
    return this._free_kick_accuracy;
  }

  get long_passing(): number {
    return this._long_passing;
  }

  get ball_control(): number {
    return this._ball_control;
  }

  get acceleration(): number {
    return this._acceleration;
  }

  get sprint_speed(): number {
    return this._sprint_speed;
  }

  get agility(): number {
    return this._agility;
  }

  get reactions(): number {
    return this._reactions;
  }

  get balance(): number {
    return this._balance;
  }

  get shot_power(): number {
    return this._shot_power;
  }

  get jumping(): number {
    return this._jumping;
  }

  get stamina(): number {
    return this._stamina;
  }

  get strength(): number {
    return this._strength;
  }

  get long_shots(): number {
    return this._long_shots;
  }

  get aggression(): number {
    return this._aggression;
  }

  get interceptions(): number {
    return this._interceptions;
  }

  get positioning(): number {
    return this._positioning;
  }

  get vision(): number {
    return this._vision;
  }

  get penalties(): number {
    return this._penalties;
  }

  get marking(): number {
    return this._marking;
  }

  get standing_tackle(): number {
    return this._standing_tackle;
  }

  get sliding_tackle(): number {
    return this._sliding_tackle;
  }

  get gk_diving(): number {
    return this._gk_diving;
  }

  get gk_handling(): number {
    return this._gk_handling;
  }

  get gk_kicking(): number {
    return this._gk_kicking;
  }

  get gk_positioning(): number {
    return this._gk_positioning;
  }

  get gk_reflexes(): number {
    return this._gk_reflexes;
  }
}
