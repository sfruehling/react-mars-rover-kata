import { act, renderHook } from "@testing-library/react-hooks";
import { Direction } from "../model/direction";
import { Position } from "../model/position";
import { useRover } from "./useRover";

class TestRover {
  public direction: Direction = "N";
  public position = new Position(1, 1);

  executeNext() {
    this.direction = "E";
    this.position = new Position(2, 2);
  }
}

describe("use rover", () => {
  it("initializes the rover state with the given rover", () => {
    const rover = new TestRover();
    const { result } = renderHook(() => useRover(rover));

    expect(result.current.roverState.direction).toEqual(rover.direction);
    expect(result.current.roverState.position).toEqual(rover.position);
  });

  it("calls the rover when executing a command", () => {
    const rover = new TestRover();
    const { result } = renderHook(() => useRover(rover));

    const executeNext = jest.spyOn(rover, "executeNext");
    act(() => result.current.execute(["M"]));

    expect(executeNext).toHaveBeenCalledWith("M");
  });

  it("updates the rover state when executing a command", () => {
    const rover = new TestRover();
    const { result } = renderHook(() => useRover(rover));

    act(() => result.current.execute(["M"]));

    const { direction, position } = result.current.roverState;
    expect(direction).toEqual(rover.direction);
    expect(position).toEqual(rover.position);
  });

  it("calls the rover once for each command with a timeout", () => {
    const rover = new TestRover();
    const { result } = renderHook(() => useRover(rover));
    const executeNext = jest.spyOn(rover, "executeNext");

    act(() => result.current.execute(["M", "L"]));

    expect(executeNext).toHaveBeenCalledWith("M");
    expect(executeNext).not.toHaveBeenCalledWith("L");
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(executeNext).toHaveBeenCalledWith("L");
  });

  it("calls the supplied callback once after each command", () => {
    const rover = new TestRover();
    const callback = jest.fn();
    const { result } = renderHook(() => useRover(rover, callback));

    act(() => result.current.execute(["M", "L"]));
    expect(callback).toHaveBeenCalledWith(result.current.roverState);
    act(() => {
      jest.runAllTimers();
    });
    expect(callback).toHaveBeenCalledTimes(2);
  });
});


