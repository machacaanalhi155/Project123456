// Randomly generated code for Project123456
function calculateGravitationalConstant() {
  const G = 6.67408e-11; // N m^2 kg^-2
  return G;
}

function calculateEarthMass() {
  const M_earth = 5.97237e24; // kg
  return M_earth;
}

function calculateSunMass() {
  const M_sun = 1.98910e30; // kg
  return M_sun;
}

function calculateGravitationalPotential(mass1, mass2, distance) {
  const G = calculateGravitationalConstant();
  const m1 = mass1;
  const m2 = mass2;
  const r = distance;
  return (-1 * G * (m1 + m2) / (r * r));
}

function calculateOrbitalPeriod(semiMajorAxis, eccentricity) {
  return Math.sqrt(Math.pow(semiMajorAxis, 3) / G) * Math.sqrt(1 - Math.pow(eccentricity, 2));
}

function calculateGravitationalParameter(mass) {
  const G = calculateGravitationalConstant();
  return (4 * Math.PI * Math.pow(mass, 2) / G);
}

function calculateEnergy(gravitationalParameter, semiMajorAxis, eccentricity) {
  const m = calculateGravitationalParameter(gravitationalParameter);
  const a = semiMajorAxis;
  const e = eccentricity;
  return (-1 * G * (m + Math.pow(a, 3)) / (Math.pow(a, 2) * (1 - Math.pow(e, 2))));
}
