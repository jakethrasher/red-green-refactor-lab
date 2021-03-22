const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter function', () => {

  const stringArray = ['happy', 'yummy', 'tacos', 'friends', 'Fungus', 'definitely'];

  it('takes an array of strings and capitalizes them while filtering out any strings that start with the letter f', () => {
    

    expect(capitalizeAndFilter(stringArray)).toEqual(['HAPPY', 'YUMMY', 'TACOS', 'DEFINITELY']);
  });
});
