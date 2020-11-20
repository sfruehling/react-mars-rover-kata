import { Command } from '../command';
import { Direction } from '../direction';
import { Position } from '../position';
import { SurfaceReader } from '../grid';
import { TileContent } from '../marsSurface';

export class MarsRover {
    public direction: Direction;
    public position: Position;
    private surface: SurfaceReader<TileContent>;

    constructor(direction: Direction, position: Position, surface: SurfaceReader<TileContent>) {
        this.direction = direction;
        this.position = position;
        this.surface = surface;
    }

    executeNext(nextCommand: Command) {
        // TODO: implement here
    }
}
