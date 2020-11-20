import { useState } from "react";
import { Command } from "../model/command";
import { Direction } from "../model/direction";
import { Position } from "../model/position";
import { MarsRover } from "../model/rover/MarsRover";

export interface RoverState {
  direction: Direction;
  position: Position;
}

export const useRover = (
  rover: MarsRover,
  afterMoveCallback: (roverState: RoverState) => void = () => {}
): { roverState: RoverState; execute: (commands: Command[]) => void } => {
  const [direction, setDirection] = useState(rover.direction);
  const [position, setPosition] = useState(rover.position);

  const execute = ([firstCommand, ...rest]: Command[]): void => {
    if (firstCommand) {
      rover.executeNext(firstCommand);
      setTimeout(() => {
        execute(rest);
      }, 500);
      setDirection(rover.direction);
      setPosition(new Position(rover.position.x, rover.position.y));
      afterMoveCallback({ direction: rover.direction, position: rover.position });
    }
  };

  return { roverState: { direction, position }, execute };
};
