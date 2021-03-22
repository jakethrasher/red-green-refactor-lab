const copyAndPush = require('./copyAndPush');

describe('copyAndPush function', () => {

  it('takes in an array and an item and should return a new array with the new item pushed to to the end', () => {
    const numbers = [1, 2, 3];

    
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  
  });
  
});

