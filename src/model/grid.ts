import { IPosition, Position } from './position';

export interface GridProperties<T> {
    sizeX: number;
    sizeY: number;
    content: T;
}

const shuffle = <T>(a: T[]): T[] => {
    const array = [...a];
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

export interface SurfaceReader<T> {
    getContent: (position: Position) => T | undefined;
    getDimensions: () => { x: number, y: number };
}

export class Grid<T> implements SurfaceReader<T> {
    private readonly tiles: Array<Array<T>>;
    private readonly dimensions: { x: number, y: number };


    constructor({sizeX, sizeY, content}: GridProperties<T>) {
        this.tiles = Array.from<T>({
            length: sizeY,
        }).map(() => Array.from<T>({length: sizeX}).fill(content));
        this.dimensions = {x: sizeX, y: sizeY};
    }

    public getRandomPositions(n: number): Position[] {
        const allPositions = this.tiles.flatMap((row, y) =>
            row.map((_, x) => new Position(x, y))
        );
        return shuffle(allPositions).slice(0, n);
    }

    public fillAll(pos: IPosition[], content: T): void {
        pos.forEach((p) => this.fill(p, content));
    }

    public fill({x, y}: IPosition, content: T): void {
        this.tiles[y][x] = content;
    }

    public view(): Array<Array<T>> {
        return [...this.tiles].map((row) => [...row]);
    }

    public getContent({x, y}: IPosition): T | undefined {
        if (this.tiles[y] === undefined) {
            return undefined;
        }
        return this.tiles[y][x];
    }

    getDimensions(): { x: number; y: number } {
        return this.dimensions;
    }
}

