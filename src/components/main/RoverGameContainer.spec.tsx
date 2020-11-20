import { act, render, screen } from "@testing-library/react";
import React from "react";
import { Direction } from "../../model/direction";
import { Position } from "../../model/position";
import { RoverGameContainer } from "./RoverGameContainer";

jest.mock("../../model/marsSurface");
jest.mock("../../model/rover/MarsRover", () => ({
  MarsRover: function (direction: Direction, initPos: Position) {
    let position: Position = initPos;
    const executeNext = () => {
      position.y += 1;
    };
    return { executeNext, position, direction };
  },
}));

jest.spyOn(window, "alert");

describe("RoverGameContainer", () => {
  it("works as intended", async () => {
    render(<RoverGameContainer />);
    (await screen.findByText("Move")).click();
    (await screen.findByText("Move")).click();
    (await screen.findByText("Execute")).click();
    expect(alert).toHaveBeenCalledWith(expect.stringMatching(/broken/));
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(alert).toHaveBeenCalledWith(expect.stringMatching(/target/));
  });
});
