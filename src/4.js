const Project123456 = () => {
  const universeHistory = {
    age: 13.8 billion years,
    formation: 'around 13.8 billion years ago',
    expansion: 'accelerating',
    components: ['protons', 'neutrons', 'electrons'],
    states: [
      { name: 'solar system', age: 4.6 billion years },
      { name: 'milky way galaxy', age: 13.8 billion years }
    ]
  };

  const getHistory = () => {
    return universeHistory;
  };

  return {
    getHistory
  };
};
