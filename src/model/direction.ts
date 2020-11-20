export const directions = ["N", "E", "S", "W"] as const;

export type Direction = typeof directions[number];

export const getRandomDirection = (): Direction =>
  directions[Math.floor(Math.random() * 4)];
