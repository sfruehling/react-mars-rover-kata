import React from "react";
import { Direction } from "../../model/direction";

export const SurfaceElement: React.FC = () => (
  <div className="surface-elem">
    <img
      src={require("./mars-surface.jpeg").default}
      alt="Mars surface"
      className="img-surface"
    />
  </div>
);

export const RockElement: React.FC = () => (
  <div className="surface-elem">
    <img
      src={require("./mars-rock.jpg").default}
      alt="A rock representing an obstacle"
      className="img-surface"
    />
  </div>
);

interface RoverElementProps {
  direction: Direction;
}

export function RoverElement(props: RoverElementProps) {
  const directions: Record<Direction, string> = {
    N: "90deg",
    E: "180deg",
    S: "270deg",
    W: "0deg",
  };
  const rotation = directions[props.direction];
  return (
    <div className="surface-elem">
      <img
        src={require("./walle.jpg").default}
        style={{ transform: `rotate(${rotation})` }}
        alt="The Mars Rover"
        className="img-surface"
      />
    </div>
  );
}

export const TargetElement: React.FC = () => (
  <div className="surface-elem">
    <img
      src={require("./target.jpg").default}
      alt="The target that should be reached by the rover"
      className="img-surface"
    />
  </div>
);
