import { Grid } from "./grid";
import { generateMarsSurface, OBSTACLE_COUNT } from "./marsSurface";

describe("Mars Surface", () => {
  const getTilesWithContent = <T>(grid: Grid<T>, content: T): T[] =>
    grid
      .view()
      .flat()
      .filter((c) => c === content);

  it("generates a rover position that is not an obstacle or target", () => {
    const { roverPosition, surface } = generateMarsSurface();
    expect(surface.view()[roverPosition.y][roverPosition.x]).toEqual("Nothing");
  });

  it("includes a target at exactly one tile", () => {
    const targetTiles = getTilesWithContent(
      generateMarsSurface().surface,
      "Target"
    );
    expect(targetTiles.length).toBe(1);
  });

  it("includes n obstacles", () => {
    const targetTiles = getTilesWithContent(
      generateMarsSurface().surface,
      "Obstacle"
    );
    expect(targetTiles.length).toBe(OBSTACLE_COUNT);
  });
});
