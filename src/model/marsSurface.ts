import { Position } from './position';
import { Grid } from './grid';

const SIDE_LENGTH = 8;
export const OBSTACLE_COUNT = 16;

export type TileContent = "Obstacle" | "Target" | "Nothing";

export type MarsGrid = Grid<TileContent>;

export const generateMarsSurface = (): {
  surface: Grid<TileContent>;
  roverPosition: Position;
} => {
  const surface = new Grid<TileContent>({
    sizeX: SIDE_LENGTH,
    sizeY: SIDE_LENGTH,
    content: "Nothing",
  });
  const [
    roverPosition,
    targetPosition,
    ...obstaclePositions
  ] = surface.getRandomPositions(OBSTACLE_COUNT + 2);

  surface.fill(targetPosition, "Target");
  surface.fillAll(obstaclePositions, "Obstacle");

  return {
    surface,
    roverPosition,
  };
};

