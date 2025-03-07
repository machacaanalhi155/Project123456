let project123456 = {
    data: {
        universe: {
            age: 13.8,
            stars: 1000000000000,
            planets: 1000000000000,
            galaxies: 1000000000000,
        }
    },
    methods: {
        getUniverseAge() {
            return this.data.universe.age;
        },
        getStarCount() {
            return this.data.universe.stars;
        },
        getPlanetCount() {
            return this.data.universe.planets;
        },
        getGalaxyCount() {
            return this.data.universe.galaxies;
        }
    }
};
