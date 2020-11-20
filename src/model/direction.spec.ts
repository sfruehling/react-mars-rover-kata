import { directions, getRandomDirection } from "./direction";

describe("getRandomDirection", () => {
  it(" always picks one of the 4 directions", () => {
    expect(directions).toContain(getRandomDirection());
  });
});
