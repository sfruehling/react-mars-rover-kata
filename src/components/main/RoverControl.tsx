import React, { useState } from "react";
import { Command } from "../../model/command";
import "./RoverControl.css";



interface RoverControlProps {
  execute: (commands: Command[]) => any;
}

export const RoverControl: React.FC<RoverControlProps> = ({ execute }) => {
  const [commands, setCommands] = useState<Command[]>([]);

  const addCommand = (command: Command) => setCommands([...commands, command]);

  const clearCommands = () => setCommands([]);

  const executeAndClear = () => {
    execute(commands);
    clearCommands();
  };

  return (
    <div className="commandsContainer">
      <div>
        <div className="commands">
          <button onClick={() => addCommand("M")}>Move</button>
          <button onClick={() => addCommand("L")}>Left</button>
          <button onClick={() => addCommand("R")}>Right</button>
        </div>
        <input type="text" readOnly value={commands.join("")} />
        <div className="execute">
          <button className="executeButton" onClick={executeAndClear}>
            Execute
          </button>
        </div>
      </div>
    </div>
  );
};
