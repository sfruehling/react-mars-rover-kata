import { render, screen } from "@testing-library/react";
import React from "react";
import { Position } from "../../model/position";
import { RoverState } from "../../state/useRover";
import { Grid } from "../../model/grid";
import { TileContent } from "../../model/marsSurface";
import { MarsView } from "./MarsView";

describe("MarsView", () => {
  const testSurface = new Grid<TileContent>({
    sizeX: 5,
    sizeY: 6,
    content: "Nothing",
  });
  const testRoverState: RoverState = {
    position: new Position(1, 2),
    direction: "E",
  };

  it("renders exactly one rover", async () => {
    render(<MarsView surface={testSurface} rover={testRoverState} />);
    const rover = await screen.findAllByAltText(/Mars Rover/);
    expect(rover.length).toBe(1);
  });

  it("renders the rover in the correct position", async () => {
    render(<MarsView surface={testSurface} rover={testRoverState} />);

    const rover = await screen.findByAltText(/Mars Rover/);
    const grid = await screen.findByTestId("grid");
    const row = grid.children.item(testRoverState.position.y);
    const expectedRoverElement = row?.children.item(testRoverState.position.x);

    expect(expectedRoverElement?.firstChild).toEqual(rover);
  });

  it("renders the correct amount of rows and columns", async () => {
    render(<MarsView surface={testSurface} rover={testRoverState} />);

    const grid = await screen.findByTestId("grid");
    expect(grid.children.length).toBe(6);
    expect(grid.children.item(0)?.children.length).toBe(5);
  });
});
