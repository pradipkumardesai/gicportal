export class Tile {
  public tileName: string;
  public tileSummery: string;
  public tileDescription: string;

  constructor(
    tileName: string,
    tileSummery: string,
    tileDescription: string
  ) {
    this.tileName = tileName;
    this.tileSummery = tileSummery;
    this.tileDescription = tileDescription;
  }
}
