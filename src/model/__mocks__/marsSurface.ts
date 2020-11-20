import { Grid } from "../grid";
import { TileContent } from "../marsSurface";
import { Position } from "../position";

export const generateMarsSurface = () => {
  const surface = new Grid<TileContent>({
    sizeX: 3,
    sizeY: 3,
    content: "Nothing",
  });
  surface.fill({ x: 0, y: 1 }, "Obstacle");
  surface.fill({ x: 0, y: 2 }, "Target");
  const roverPosition = new Position(0, 0);
  return { surface, roverPosition };
};
