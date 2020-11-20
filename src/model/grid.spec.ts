import { Grid } from "./grid";

describe("Grid", () => {
  it("creates an empty array for 0x0", () => {
    const grid = new Grid({ sizeX: 0, sizeY: 0, content: "test" });
    expect(grid.view()).toEqual([]);
  });

  it("creates an array of correct dimension for 2x3", () => {
    const tiles = new Grid({ sizeX: 2, sizeY: 3, content: "test" }).view();
    expect(tiles.length).toBe(3);
    expect(tiles[0].length).toBe(2);
  });

  it("creates an array of correct dimension for 5x3", () => {
    const tiles = new Grid({ sizeX: 5, sizeY: 3, content: "test" }).view();
    expect(tiles.length).toBe(3);
    expect(tiles[0].length).toBe(5);
  });

  it("fills the grid with the given content", () => {
    const tiles = new Grid({ sizeX: 1, sizeY: 1, content: "test" }).view();
    expect(tiles[0][0]).toEqual("test");
  });

  it("can pick n random positions from the given grid", () => {
    const positions = new Grid({
      sizeX: 5,
      sizeY: 8,
      content: "test",
    }).getRandomPositions(4);
    expect(positions.length).toBe(4);
    positions.forEach(({ x, y }) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(5);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(8);
    });
  });

  it("generates at most all positions of the grid", () => {
    const positions = new Grid({
      sizeX: 1,
      sizeY: 1,
      content: "test",
    }).getRandomPositions(4);
    expect(positions.length).toBe(1);
    expect(positions[0]).toEqual({ x: 0, y: 0 });
  });

  it("does not generate duplicates", () => {
    const positions = new Grid({
      sizeX: 2,
      sizeY: 2,
      content: "test",
    }).getRandomPositions(2);
    expect(positions.length).toBe(2);
    expect(positions[0]).not.toEqual(positions[1]);
  });

  it("does not care about direct manipulation", () => {
    const grid = new Grid({
      sizeX: 1,
      sizeY: 1,
      content: "abc",
    });
    grid.view()[0][0] = "haha";
    expect(grid.view()[0][0]).toEqual("abc");
  });

  it("allows manipulation with fill", () => {
    const grid = new Grid({
      sizeX: 1,
      sizeY: 1,
      content: "abc",
    });
    grid.fill({ x: 0, y: 0 }, "haha");
    expect(grid.view()[0][0]).toEqual("haha");
  });
});
