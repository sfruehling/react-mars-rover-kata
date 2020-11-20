import React from "react";
import { MarsGrid, TileContent } from "../../model/marsSurface";
import { RoverState } from "../../state/useRover";
import "./surface.css";
import {
  RockElement,
  RoverElement,
  SurfaceElement,
  TargetElement,
} from "./SurfaceElements";

interface MarsViewProps {
  surface: MarsGrid;
  rover: RoverState;
}

export const MarsView: React.FC<MarsViewProps> = ({ surface, rover }) => {
  const elementForContent = (content: TileContent, x: number, y: number) => {
    const key = `${x}/${y}`;
    if (rover.position.equals({ x, y })) {
      return <RoverElement key={key} direction={rover.direction} />;
    }
    if (content === "Target") {
      return <TargetElement key={key} />;
    }
    if (content === "Obstacle") {
      return <RockElement key={key} />;
    }
    return <SurfaceElement key={key} />;
  };

  const renderRow = (row: TileContent[], y: number): JSX.Element => (
    <div className="surface-row" key={y}>
      {row.map((content, x) => elementForContent(content, x, y))}
    </div>
  );

  return (
    <div className="surface-grid-wrapper">
      <div className="surface-grid" data-testid="grid">
        {surface.view().map(renderRow)}
      </div>
    </div>
  );
};
