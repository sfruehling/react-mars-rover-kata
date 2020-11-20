import { render, screen } from "@testing-library/react";
import React from "react";
import { RoverControl } from "./RoverControl";

const execute = jest.fn();

describe("RoverControl", () => {
  const click = (button: HTMLElement) => button.click();

  const clickExecuteButton = () => screen.findByText("Execute").then(click);

  const clickMoveButton = () => screen.findByText("Move").then(click);

  const clickLeftButton = () => screen.findByText("Left").then(click);

  const clickRightButton = () => screen.findByText("Right").then(click);

  it("calls the given execute function when clicking the execute button", async () => {
    render(<RoverControl execute={execute} />);

    await clickExecuteButton();

    expect(execute).toHaveBeenCalledWith([]);
  });

  it("calls the given execute function with the move command when pressing the move button", async () => {
    render(<RoverControl execute={execute} />);

    await clickMoveButton();
    await clickExecuteButton();

    expect(execute).toHaveBeenCalledWith(["M"]);
  });

  it("calls the given execute function with the left command when pressing the left button", async () => {
    render(<RoverControl execute={execute} />);

    await clickLeftButton();
    await clickExecuteButton();

    expect(execute).toHaveBeenCalledWith(["L"]);
  });

  it("calls the given execute function with the right command when pressing the right button", async () => {
    render(<RoverControl execute={execute} />);

    await clickRightButton();
    await clickExecuteButton();

    expect(execute).toHaveBeenCalledWith(["R"]);
  });

  it("is able to execute multiple commands in the correct order", async () => {
    render(<RoverControl execute={execute} />);

    await clickRightButton();
    await clickLeftButton();
    await clickMoveButton();
    await clickExecuteButton();

    expect(execute).toHaveBeenCalledWith(["R", "L", "M"]);
  });
});
