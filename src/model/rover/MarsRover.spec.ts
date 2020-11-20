import { Position } from '../position';
import { MarsRover } from './MarsRover';
import { TileContent } from '../marsSurface';
import { Grid } from '../grid';

describe('The Mars Rover', () => {
    const grid = new Grid<TileContent>({sizeX: 3, sizeY: 3, content: 'Nothing'});

    it(' initializes with the given direction and position', () => {
        const rover = new MarsRover('N', new Position(0, 0), grid);
        expect(rover.direction).toEqual('N');
        expect(rover.position).toEqual(new Position(0, 0));
    });
});
