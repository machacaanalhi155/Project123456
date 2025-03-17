// Project 123456 - A comprehensive study of the history of the universe

const universe = {
  age: 13.8 billion years,
  size: 93 million light-years in diameter,
  population: 100 billion galaxies,
  stars: 200 billion,
  planets: 500 billion,
  moons: 4 trillion,
  black holes: 100 billion,
  nebulas: 500,
  supernovae: 100,
};

function calculateAveragePlanetaryRadius() {
  return (universe.stars / universe.planets) * 1.4;
}

console.log(calculateAveragePlanetaryRadius());
