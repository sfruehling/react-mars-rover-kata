import React from "react";
import { getRandomDirection } from "../../model/direction";
import { generateMarsSurface } from "../../model/marsSurface";
import { MarsRover } from "../../model/rover/MarsRover";
import { RoverState, useRover } from "../../state/useRover";
import { MarsView } from "./MarsView";
import { RoverControl } from "./RoverControl";

const { roverPosition, surface } = generateMarsSurface();
const roverDirection = getRandomDirection();
const rover = new MarsRover(roverDirection, roverPosition, surface);

export const RoverGameContainer: React.FC = () => {

  const checkCollisionOrTarget = ({ position }: RoverState) => {
    switch (surface.getContent(position)) {
      case "Obstacle":
        alert("The rover is broken. You crashed a rock!");
        break;
      case "Target":
        alert("Congratulations, you made it to the target.");
        break;
      default:
    }
  };

  const { roverState, execute } = useRover(rover, checkCollisionOrTarget);

  return (
    <div>
      <RoverControl execute={execute} />
      <MarsView surface={surface} rover={roverState} />
    </div>
  );
};
