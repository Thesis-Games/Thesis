export const getLevelPoints = (levelNum, level) => {
  const foundLevel = level.find((l) => l.level === levelNum.toString());
  return foundLevel ? foundLevel.points : 0;
};
