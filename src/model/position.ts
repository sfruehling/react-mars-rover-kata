export interface IPosition {
  x: number;
  y: number;
}

export class Position implements IPosition {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }

  equals(otherPosition: IPosition) {
    return this.x === otherPosition.x && this.y === otherPosition.y;
  }
}
